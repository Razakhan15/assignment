import { useEffect, useState } from "react";
import Forum from "../Forum";
import Stories from "../Stories";
import axios from "axios";

const Mobile = () => {
  const [forum, setForum] = useState(true);
  const [fdata, setFdata] = useState([]);
  useEffect(() => {
    getFdata();
  }, []);

  const getFdata = async () => {
    try {
      const data = await axios.get(`/api/hello`);
      setFdata(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <button
          onClick={(e) => setForum(true)}
          className={`text-lg p-2 text-white uppercase w-1/2 ${
            forum ? "bg-blue-900" : "bg-blue-800 "
          }`}
        >
          discussion fourm
        </button>
        <button
          onClick={(e) => setForum(false)}
          className={`text-lg p-2 text-white uppercase w-1/2 ${
            !forum ? "bg-blue-900" : "bg-blue-800 "
          }`}
        >
          market story
        </button>
      </div>
      <div>
        {forum && (
          <div className="p-2">
          {fdata.map((d, i) => (
          <Forum
            key={i}
            name={d.user}
            comment={d.comment}
            noOfLikes={d.noOfLikes}
            noOfView={d.noOfView}
            noOfComments={d.noOfComments}
          />
        ))}
          </div>
        )}
        {!forum && (
          <div className="p-2">
            <Stories />
            <Stories />
            <Stories />
            <Stories />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;

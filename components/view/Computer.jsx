import { useEffect, useState } from "react";
import Forum from "../Forum";
import Stories from "../Stories";
import axios from "axios";

const Computer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(`/api/hello`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex-1 flex justify-evenly">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold text-red-500 uppercase mb-10">
          discussion fourm
        </h1>
        {data.map((d, i) => (
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
      <div className="w-2/12">
        <h1 className="text-2xl font-bold text-red-500 uppercase mb-10">
          market story
        </h1>
        <Stories />
        <Stories />
        <Stories />
        <Stories />
        <Stories />
      </div>
    </div>
  );
};

export default Computer;

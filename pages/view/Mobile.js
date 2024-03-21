import { useState } from "react";
import Forum from "../components/Forum";
import Stories from "../components/Stories";

const Mobile = () => {
  const [forum, setForum] = useState(true);
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
            <Forum />
          </div>
        )}
        {!forum && (
          <div className="p-2">
            <Stories />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;

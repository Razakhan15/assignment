import Forum from "../components/Forum";
import Stories from "../components/Stories";

const Computer = () => {
  return (
    <div className=" flex-1 flex justify-evenly">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold text-red-500 uppercase mb-10">
          discussion fourm
        </h1>
        <Forum />
        <Forum />
        <Forum />
        <Forum />
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

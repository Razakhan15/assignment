import {
  ChatBubbleLeftIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
const Forum = ({name,
  comment,
  noOfLikes,
  noOfView,
  noOfComments}) => {
  return (
    <div className="mt-10">
      <div className="rounded-lg flex shadow-[rgba(0,0,15,0.3)_5px_5px_4px_0px] py-2 lg:px-5 px-1 lg:gap-5 gap-2">
        <div className="flex-none">
          <UserCircleIcon className="h-7 w-7 lg:h-10 lg:w-10" />
        </div>
        <div className="flex-auto w-3/4">
          <div className="flex gap-5 items-center">
            <h2 className="font-bold text-sm lg:text-lg">{name}</h2>
            <span className="bg-blue-700 rounded-lg lg:px-2 px-1 py-1 text-white text-xs">
              Sector 2
            </span>
          </div>
          <p className="break-words my-2 text-xs lg:text-lg">
            {comment}
          </p>
          <div className="flex justify-between lg:font-bold">
            <div className="flex items-center gap-0.5 lg:gap-1 my-2">
              <HeartIcon className="h-4 w-4 lg:h-8 lg:w-8" />
              <span className="text-xs">{noOfLikes}</span>
            </div>
            <div className="flex items-center gap-0.5 lg:gap-1">
              <EyeIcon className="h-4 w-4 lg:h-8 lg:w-8" />
              <span className="text-xs">{noOfView}</span>
            </div>
            <div className="flex items-center gap-0.5 lg:gap-1">
              <ChatBubbleLeftIcon className="h-4 w-4 lg:h-8 lg:w-8" />
              <span className="text-xs">{noOfComments}</span>
            </div>
            <div className="flex items-center gap-0.5 lg:gap-1">
              <ShareIcon className="h-4 w-4 lg:h-8 lg:w-8" />
              <span className="text-xs">Share</span>
            </div>
          </div>
        </div>
        <div className="flex-auto font-bold text-blue-600 text-xs">
          2 min ago
        </div>
      </div>
    </div>
  );
};

export default Forum;

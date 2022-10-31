import { CheckIcon } from "@heroicons/react/20/solid";

const Timeline = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">재미로그</h2>
      <span className="sm:ml-3">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Publish
        </button>
      </span>
    </div>
  );
};

export default Timeline;

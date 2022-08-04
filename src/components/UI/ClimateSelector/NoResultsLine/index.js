import { EmojiSadIcon } from "@heroicons/react/outline";

const NoResultsLine = () => (
  <div className="border-2 border-brand-accent-gray border-t-0 px-2 py-1 flex items-center">
    <EmojiSadIcon className="h-5 w-5" />
    <span className="font-bold">&nbsp;Oops.. No cities</span>
  </div>
);

export default NoResultsLine;

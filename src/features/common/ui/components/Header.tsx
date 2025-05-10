import { Settings } from "lucide-react";
import { useHostState } from "../../config";

const Header = () => {
  const { hostUrl, setHostUrl } = useHostState();

  const showUrlDialog = () => {
    const result = prompt("Masukkan URL", hostUrl);
    if (result) {
      setHostUrl(result);
    }
  };

  return (
    <div className="flex justify-between">
      <div className="bg-white p-4">
        <h2 className="text-xs">Rumah Mukmin</h2>
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="p-4">
        <button
          onClick={showUrlDialog}
          className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-200"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Header;

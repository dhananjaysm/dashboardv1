import { BsSpeedometer } from "react-icons/bs";
import { GoAlert } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const CardOverview = () => {
  // const [refresh, setRefresh] = useState();
  const user = "Andrew";
  let date = new Date();
  return (
    <div className="flex flex-col w-full p-4 ">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center">
          <span className="p-1 text-white bg-orange-500 rounded">
            <BsSpeedometer size={32} />
          </span>
          <div className="pl-4">
            <p className="font-medium">Dashboard</p>
            <span className="text-lg font-bold">Market Overview </span>
          </div>
        </div>
        <div className="flex items-center text-blue-500 border-2 hover:bg-gray-200">
          <button className="px-2 font-medium text-md ">Refresh</button>
          <div className="text-gray-600 border-l-2">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <span className="text-red-500">
          {" "}
          <GoAlert />
        </span>
        <p className="ml-1">Last refreshed today</p>
      </div>
      <p className="text-xs">
        As of {date.toDateString()} {date.toLocaleTimeString()} Viewing as{" "}
        {user}
      </p>
    </div>
  );
};

export default CardOverview;

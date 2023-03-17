import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BottomIcon } from "./icons/BottomIcon";
import { DownIcon } from "./icons/DownIcon";
import { TopIcon } from "./icons/TopIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { UpIcon } from "./icons/UpIcon";
import { Button } from "./ui/Button";
import { CitiesSelect } from "./ui/CitiesSelect";

export interface Waypoint {
  city: string;
  driverName: string;
  arrivalDate: Date;
}
type WaypointProps = {
  waypoint: Waypoint;
};
export const WaypointLine = ({ waypoint }: WaypointProps) => {
  return (
    <div className="flex flex-row p-2 rounded shadow-md items-center">
      <div className="flex-none  mx-2">1</div>
      <div className="basis-1/4  mx-2">
        <CitiesSelect
          onSelectCity={(city) => console.log(city)}
          city={waypoint.city}
        />
      </div>
      <div className="basis-1/5 mx-2">
        <input
          placeholder="Driver name"
          type="text"
          value={waypoint.driverName}
          onChange={(event) => console.log(event)}
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
        />
      </div>
      <div className="basis-1/4  mx-2 ">
        <DatePicker
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
          showTimeSelect
          selected={waypoint.arrivalDate}
          onChange={(date: Date) => console.log(date)}
          dateFormat="yyyy-MM-dd hh:mm aa"
          placeholderText="Arrival Date"
        />
      </div>
      <div className="basis-1/4">
        <Button>
          <TopIcon />
        </Button>
        <Button>
          <UpIcon />
        </Button>
        <Button>
          <DownIcon />
        </Button>
        <Button>
          <BottomIcon />
        </Button>
        <Button>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

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
  order: number;
  city: string;
  driverName: string;
  arrivalDate: Date;
}
type WaypointProps = {
  waypoint: Waypoint;
  onToFirstPlace: (waypoint: Waypoint) => void;
  onDelete: (waypoint: Waypoint) => void;
  onEdit: (waypoint: Waypoint) => void;
  onUp: (waypoint: Waypoint) => void;
  onDown: (waypoint: Waypoint) => void;
};
export const WaypointLineEdit = ({
  waypoint,
  onToFirstPlace,
  onDelete,
  onEdit,
  onUp,
  onDown
}: WaypointProps) => {
  return (
    <div className="flex flex-row p-2 rounded shadow-md items-center">
      <div className="flex-none  mx-2">{waypoint.order}</div>
      <div className="basis-1/4  mx-2">
        <CitiesSelect
          onSelectCity={(city) => onEdit({ ...waypoint, city })}
          city={waypoint.city}
        />
      </div>
      <div className="basis-1/5 mx-2">
        <input
          placeholder="Driver name"
          type="text"
          value={waypoint.driverName}
          onChange={(event) =>
            onEdit({ ...waypoint, driverName: event.target.value })
          }
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
        />
      </div>
      <div className="basis-1/4  mx-2 ">
        <DatePicker
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
          showTimeSelect
          selected={waypoint.arrivalDate}
          onChange={(date: Date) => onEdit({ ...waypoint, arrivalDate: date })}
          dateFormat="yyyy-MM-dd hh:mm aa"
          placeholderText="Arrival Date"
        />
      </div>
      <div className="basis-1/4">
        <Button onClick={() => onToFirstPlace(waypoint)}>
          <TopIcon />
        </Button>
        <Button onClick={() => onUp(waypoint)}>
          <UpIcon />
        </Button>
        <Button onClick={() => onDown(waypoint)}>
          <DownIcon />
        </Button>
        <Button>
          <BottomIcon />
        </Button>
        <Button onClick={() => onDelete(waypoint)}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

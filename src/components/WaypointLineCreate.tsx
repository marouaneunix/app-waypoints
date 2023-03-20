import { CitiesSelect } from "./ui/CitiesSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Waypoint } from "./WaypointLineEdit";

const defaultWaypoint: Waypoint = {
  order: 0,
  driverName: "",
  city: "",
  arrivalDate: new Date(),
};

type Props = {
  onCreateWaypoint: (waypoint: Waypoint) => void;
};
export const WaypointLineCreate = ({ onCreateWaypoint }: Props) => {
  const [waypoint, setWaypoint] = useState<Waypoint>(defaultWaypoint);

  return (
    <div className="flex flex-row p-2 rounded shadow-md items-center">
      <div className="basis-1/4  mx-2">
        <CitiesSelect
          city={waypoint.city}
          onSelectCity={(city) => setWaypoint({ ...waypoint, city })}
        />
      </div>
      <div className="basis-1/4 mx-2">
        <input
          placeholder="Driver name"
          type="text"
          value={waypoint.driverName}
          onChange={(event) =>
            setWaypoint({ ...waypoint, driverName: event.target.value })
          }
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
        />
      </div>
      <div className="basis-1/4  mx-2 ">
        <DatePicker
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
          showTimeSelect
          selected={waypoint.arrivalDate}
          onChange={(date: Date) =>
            setWaypoint({ ...waypoint, arrivalDate: date })
          }
          dateFormat="yyyy-MM-dd hh:mm aa"
          placeholderText="Arrival Date"
        />
      </div>

      <div className="basis-1/4">
        <button
          onClick={() => onCreateWaypoint(waypoint)}
          type="button"
          className="text-white bg-blue-600 px-5 py-2.5 
            hover:bg-blue-700 
            focus:ring-4 
            focus:outline-none 
            active:ring-blue-600 font-medium rounded text-sm p-2.5 text-center inline-flex items-center mr-2"
        >
          <svg
            fill="none"
            className="w-5 h-5 mr-2 -ml-1"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Add waypoint
        </button>
      </div>
    </div>
  );
};

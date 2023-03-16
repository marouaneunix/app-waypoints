import { CitiesSelect } from "./ui/CitiesSelect"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const WaypointLineCreate = () => {
    return (
        <div className="flex flex-row p-2 rounded shadow-md items-center">
        <div className="basis-1/4  mx-2">
          <CitiesSelect />
        </div>
        <div className="basis-1/4 mx-2">
          <input
            placeholder="Driver name"
            type="text"
            value={"Marouane"}
            onChange={(event) => console.log(event)}
            className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
          />
        </div>
        <div className="basis-1/4  mx-2 ">
          <DatePicker
            className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
            showTimeSelect
            selected={new Date()}
            onChange={(date: Date) => console.log(date)}
            dateFormat="yyyy-MM-dd hh:mm aa"
            placeholderText="Arrival Date"
          />
        </div>

        <div className="basis-1/4">
          <button
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
    )
}
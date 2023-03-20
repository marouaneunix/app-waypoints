import { BottomIcon } from "./icons/BottomIcon"
import { DownIcon } from "./icons/DownIcon"
import { TopIcon } from "./icons/TopIcon"
import { TrashIcon } from "./icons/TrashIcon"
import { UpIcon } from "./icons/UpIcon"
import { Button } from "./ui/Button"
import { CitiesSelect } from "./ui/CitiesSelect"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const WaypointLine = () => {

    return (
        <div className="flex flex-row p-2 rounded shadow-md items-center">
        <div className="flex-none  mx-2">1</div>
        <div className="basis-1/4  mx-2">
          <CitiesSelect />
        </div>
        <div className="basis-1/5 mx-2">
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
    )
}
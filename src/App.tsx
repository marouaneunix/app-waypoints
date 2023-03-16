import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";

const cities = [
  "Casablanca",
  "El Kelaa des Srarhna",
  "Fès",
  "Tangier",
  "Marrakech",
  "Sale",
  "Rabat",
  "Meknès",
  "Kenitra",
  "Agadir",
  "Oujda-Angad",
  "Tétouan",
];

function App() {
  return (
    <div className="mx-96 mt-10">
      <div className="flex flex-row p-2 rounded shadow-md items-center">
        <div className="flex-none  mx-2">1</div>
        <div className="basis-1/4  mx-2">
          <select
            defaultValue="Marrakech"
            onChange={(city) => console.log(city.target.value)}
            className="w-full rounded-lg  bg-gray-50 border border-gray-300 text-gray-900"
          >
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
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
          <button
            type="button"
            className="text-white bg-blue-600 
            hover:bg-blue-700 
            focus:ring-4 
            focus:outline-none 
            active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 
            hover:bg-blue-700 
            focus:ring-4 
            focus:outline-none 
            active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>

            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 
            hover:bg-blue-700 
            focus:ring-4 
            focus:outline-none 
            active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>

            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 
            hover:bg-blue-700 
            focus:ring-4 
            focus:outline-none 
            active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>

            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 
            hover:bg-blue-700 
            focus:ring-4 
            focus:outline-none 
            active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-row border-b-4 border-indigo-500 my-2"></div>
      <div className="flex flex-row p-2 rounded shadow-md items-center">
        <div className="basis-1/4  mx-2">
          <select
            defaultValue="Marrakech"
            onChange={(city) => console.log(city)}
            className="w-full rounded-lg  bg-gray-50 border border-gray-300 text-gray-900"
          >
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
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
    </div>
  );
}

export default App;

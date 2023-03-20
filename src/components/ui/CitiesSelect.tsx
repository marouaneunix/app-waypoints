import { useState } from "react";



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

  type Props= {
    city: string,
    onSelectCity: (city: string) => void
  };
export const CitiesSelect = ({city, onSelectCity}: Props) => {

    
    return (
        <select
            value={city}
            onChange={(event) => onSelectCity(event.target.value)}
            className="w-full rounded-lg  bg-gray-50 border border-gray-300 text-gray-900"
          >
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
    )
}
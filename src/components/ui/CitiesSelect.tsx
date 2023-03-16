


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

export const CitiesSelect = () => {
    return (
        <select
            defaultValue="Marrakech"
            onChange={(city) => console.log(city.target.value)}
            className="w-full rounded-lg  bg-gray-50 border border-gray-300 text-gray-900"
          >
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
    )
}
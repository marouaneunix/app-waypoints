import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Divider } from "./components/ui/Divider";
import { WaypointLineCreate } from "./components/WaypointLineCreate";
import { WaypointLine } from "./components/WaypointLineEdit";

function App() {
  const waypoints = [
    {
      city: "Rabat",
      arrivalDate: new Date(),
      driverName: "KAAK",
    },
    {
      city: "Marrakech",
      arrivalDate: new Date(),
      driverName: "KOKI",
    },
  ];
  return (
    <div className="mx-96 mt-10">
      {waypoints.map((waypoint, index) => (
        <WaypointLine
          key={index}
          waypoint={waypoint}
        />
      ))}

      <Divider />
      <WaypointLineCreate />
    </div>
  );
}

export default App;

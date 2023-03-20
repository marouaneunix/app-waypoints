import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Divider } from "./components/ui/Divider";
import { WaypointLineCreate } from "./components/WaypointLineCreate";
import { Waypoint, WaypointLine } from "./components/WaypointLineEdit";

function App() {
  const [waypoints, setWaypoints] = useState<Array<Waypoint>>([]);
  const addWaypoint = (waypoint: Waypoint) => {
    setWaypoints([waypoint, ...waypoints]);
  };
  return (
    <div className="mx-96 mt-10">
      {waypoints.map((waypoint, index) => (
        <WaypointLine key={index} waypoint={waypoint} />
      ))}
      <Divider />
      <WaypointLineCreate onCreateWaypoint={addWaypoint} />
    </div>
  );
}

export default App;

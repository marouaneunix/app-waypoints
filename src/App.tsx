import { useEffect, useReducer, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Divider } from "./components/ui/Divider";
import { WaypointLineCreate } from "./components/WaypointLineCreate";
import { Waypoint, WaypointLineEdit } from "./components/WaypointLineEdit";
import { waypointsReducer } from "./utils/waypointsReducer";



function App() {
  const [waypoints, dispatch] = useReducer(waypointsReducer, []);

  return (
    <div className="mx-96 mt-10">
      <WaypointLineCreate onCreateWaypoint={(waypoint) => dispatch({ type: "add", waypoint: waypoint })} />
      <Divider />
      {waypoints.map((waypoint, index) => (
        <WaypointLineEdit
          key={index}
          waypoint={waypoint}
          onToFirstPlace={(waypoint) => dispatch({type: "toFirst", waypoint: waypoint})}
          onDelete={(waypoint) => dispatch({ type: "delete", waypoint: waypoint })}
          onEdit={(waypoint) => dispatch({type: "edit", waypoint})}
          onUp={(waypoint) => dispatch({type: "up", waypoint})}
          onDown={(waypoint) => dispatch({type: "down", waypoint})}
        />
      ))}
    </div>
  );
}

export default App;
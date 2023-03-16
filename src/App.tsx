import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { BottomIcon } from "./components/icons/BottomIcon";
import { TopIcon } from "./components/icons/TopIcon";
import { TrashIcon } from "./components/icons/TrashIcon";
import { DownIcon } from "./components/icons/DownIcon";
import { UpIcon } from "./components/icons/UpIcon";
import { Button } from "./components/ui/Button";
import { CitiesSelect } from "./components/ui/CitiesSelect";
import { WaypointLine } from "./components/WaypointLineEdit";
import { WaypointLineCreate } from "./components/WaypointLineCreate";
import { Divider } from "./components/ui/Divider";

function App() {
  return (
    <div className="mx-96 mt-10">
      <WaypointLine />
      <Divider />
      <WaypointLineCreate />
    </div>
  );
}

export default App;

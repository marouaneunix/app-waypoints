import { useEffect, useReducer, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Divider } from "./components/ui/Divider";
import { WaypointLineCreate } from "./components/WaypointLineCreate";
import { Waypoint, WaypointLineEdit } from "./components/WaypointLineEdit";
import { waypointsReducer } from "./utils/waypointsReducer";
import axios from "axios";

type User = {
  id: number;
  login: string;
  avatar_url: string;
};
function App() {
  const [waypoints, dispatch] = useReducer(waypointsReducer, []);
  const [users, setUsers] = useState<Array<User>>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-96 mt-10">
      <WaypointLineCreate
        onCreateWaypoint={(waypoint) =>
          dispatch({ type: "add", waypoint: waypoint })
        }
      />
      <Divider />
      {waypoints.map((waypoint, index) => (
        <WaypointLineEdit
          key={index}
          waypoint={waypoint}
          onToFirstPlace={(waypoint) =>
            dispatch({ type: "toFirst", waypoint: waypoint })
          }
          onDelete={(waypoint) =>
            dispatch({ type: "delete", waypoint: waypoint })
          }
          onEdit={(waypoint) => dispatch({ type: "edit", waypoint })}
          onUp={(waypoint) => dispatch({ type: "up", waypoint })}
          onDown={(waypoint) => dispatch({ type: "down", waypoint })}
        />
      ))}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white border-b  hover:bg-gray-50 ">
                <td className="w-32 p-4">
                  <img
                    src={user.avatar_url}
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  {user.login}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useReducer, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Divider } from "./components/ui/Divider";
import { WaypointLineCreate } from "./components/WaypointLineCreate";
import { Waypoint, WaypointLineEdit } from "./components/WaypointLineEdit";
import { waypointsReducer } from "./utils/waypointsReducer";
import axios from "axios";
import { Routes, Route, Outlet, useRouteError } from "react-router";
import { Link } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WaypointsPage />} />
        <Route path="users" element={<UsersPage />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="mx-96 mt-10">
        <Outlet />
      </div>
    </div>
  );
};
const WaypointsPage = () => {
  const [waypoints, dispatch] = useReducer(waypointsReducer, []);

  return (
    <>
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
    </>
  );
};

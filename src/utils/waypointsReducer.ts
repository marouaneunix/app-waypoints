import { Waypoint } from "../components/WaypointLineEdit";

export const waypointsReducer = (waypoints: Waypoint[], action: any) => {
    if (action.type === "add") {
      return [...waypoints, {...action.waypoint, order: waypoints.length+1}];
    } else if (action.type === "delete") {
      return waypoints.filter((waypoint) => waypoint !== action.waypoint);
    } else if(action.type === 'edit') {
      return waypoints.map(waypoint => {
        if(waypoint.order === action.waypoint.order) {
          return action.waypoint
        }
        return waypoint;
      })
    } else if(action.type === "toFirst") {
      console.log('toFirst')
      return [...waypoints];
    } else if(action.type === "up") {
      const indexoF = waypoints.findIndex(w => w === action.waypoint);
      waypoints[indexoF].order--;
      waypoints[indexoF-1].order++;
      return [...waypoints.sort((w1, w2) => w1.order - w2.order)];
    } else if(action.type === "down") {
      const indexoF = waypoints.findIndex(w => w === action.waypoint);
      waypoints[indexoF].order++;
      waypoints[indexoF+1].order--;
      return [...waypoints.sort((w1, w2) => w1.order - w2.order)];
    }else {
      throw Error("Error");
    }
  };
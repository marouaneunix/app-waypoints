import { Waypoint } from "../components/WaypointLineEdit";

export const waypointsReducer = (waypoints: Waypoint[], action: any) => {
  if (action.type === "add") {

    return [...waypoints, { ...action.waypoint, order: waypoints.length + 1 }];
  } else if (action.type === "delete") {

    return waypoints.filter((waypoint) => waypoint !== action.waypoint);
  } else if (action.type === "edit") {

    return waypoints.map((waypoint) => {
      if (waypoint.order === action.waypoint.order) {
        return action.waypoint;
      }

      return waypoint;
    });
  } else if (action.type === "toFirst") {

    let order = 1;
    const array = waypoints
      .filter((w) => w !== action.waypoint)
      .map((w) => {
        order++;
        return { ...w, order: order };
      });

    return [{ ...action.waypoint, order: 1 }, ...array];
  } else if (action.type === "last") {

    const array = waypoints
      .filter((w) => w !== action.waypoint)
      .map((w, index) => {
        return { ...w, order: ++index };
      });

    return [...array, { ...action.waypoint, order: array.length }];
  } else if (action.type === "up") {

    const indexoF = waypoints.findIndex((w) => w === action.waypoint);
    const currentWaypoint = waypoints[indexoF];

    const nextIndex = action.position - 1
    const nextWaypoint = waypoints[nextIndex];
 
    const firstSlice = waypoints.slice(0,nextIndex)
    .concat([{...currentWaypoint, order: action.position}])

    const secondOrdred = [nextWaypoint, ...waypoints.slice(indexoF+1)]
    .map(w => {
      const newOrder = w.order + 1;
      return {...w, order: newOrder}
    })
    
    return firstSlice.concat(secondOrdred).sort((w1, w2) => w1.order - w2.order)
  } else if (action.type === "down") {
    const indexoF = waypoints.findIndex((w) => w === action.waypoint);
    const currentWaypoint = waypoints[indexoF];

    const nextIndex = action.position - 1
    const nextWaypoint = waypoints[nextIndex];
 
    const firstSlice = waypoints.slice(0,indexoF)
    .concat([nextWaypoint])
    .map((w, index) => {
      return {...w, order: index + 1}
    })

    const secondOrdred = [{...currentWaypoint, order: action.position}, ...waypoints.slice(nextIndex+1)]
    return firstSlice.concat(secondOrdred).sort((w1, w2) => w1.order - w2.order)
  } else {
    throw Error("Error");
  }
};

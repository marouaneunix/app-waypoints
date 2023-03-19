import { Waypoint } from "./../components/WaypointLineEdit";
import { assert, describe, expect, it } from "vitest";
import { waypointsReducer } from "./waypointsReducer";

describe("waypointsReducer tests", () => {
  it("should add waypoint", () => {
    const expedtedWaypoint = defaultWaypointWithProps({order: 1});
    const expectedWaypoints = [
        expedtedWaypoint,
    ];

    // arrange
    const initialWaypoints: Array<Waypoint> = [];
    const action = {
      type: "add",
      waypoint: {...expedtedWaypoint, order: 0},
    };

    //act
    const waypoints = waypointsReducer(initialWaypoints, action);

    //assert
    expect(waypoints).toEqual(expectedWaypoints)
  });

  it("should remove waypoint", () => {
    const deletedWaypoint = defaultWaypointWithProps({order: 1});
 
    const initialWaypoints: Array<Waypoint> = [
        deletedWaypoint,
        defaultWaypointWithProps({order: 2, driverName: "karim"})
    ];
    const action = {
      type: "delete",
      waypoint: deletedWaypoint,
    };

    //act
    const waypoints = waypointsReducer(initialWaypoints, action);

    //assert
    expect(waypoints.length).toEqual(1)
  });

  // TODO should update waypoint

  // TODO should up 

  // TODO should down
});

const defaultWaypointWithProps =  ({...props}): Waypoint => {
    const waypoint: Waypoint = {
        order: 0,
        driverName: "marouane",
        city: "Agadir",
        arrivalDate: new Date(),
    }
    return {...waypoint, ...props};
}
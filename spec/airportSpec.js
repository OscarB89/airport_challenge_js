// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy

"use strict";

describe("Airport", function () {
  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpyObj("plane", ["land"]);
  });

  it("has no plane by default", function () {
    expect(airport.planes()).toEqual([]);
  });

  it("can store planes in hangar", function () {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it("can clear planes for takeoff", function () {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it("can check for stormy condition", function () {
    expect(airport.isStormy()).toBeFalsy();
  });
});

describe("under stormy condition", function () {
  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpy("plane");
  });

  it("does not clear planes for takeoff", function () {
    spyOn(airport, "isStormy").and.returnValue(true);
    expect(function () {
      airport.clearForTakeOff(plane);
    }).toThrowError("cannot takeoff during storm");
  });
});

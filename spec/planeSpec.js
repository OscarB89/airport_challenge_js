"use strict";

describe("Plane", function () {
  var plane;
  var airport;

  beforeEach(function () {
    plane = new Plane();
    airport = jasmine.createSpyObj("airport", [
      "clearForLanding",
      "clearForTakeOff",
    ]);
  });

  it("can land", function () {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it("can take_off", function () {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalledWith();
  });
});

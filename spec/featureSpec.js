"use strict";

describe("Plane", function () {
  var plane;
  var airport;

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
  });

  it("can land a plane", function () {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("can take off from the airport", function () {
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
});

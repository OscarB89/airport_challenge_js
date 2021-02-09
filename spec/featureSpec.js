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
});

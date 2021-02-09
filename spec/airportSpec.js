"use strict";

describe("Airport", function () {
  var airport;

  beforeEach(function () {
    airport = new Airport();
  });

  it("has no plane by default", function () {
    expect(airport.planes()).toEqual([]);
  });
});

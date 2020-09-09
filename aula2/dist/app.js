"use strict";
exports.__esModule = true;
var base_ship_1 = require("./base-ship");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typecript Examples", 40, "="));
var ship = new base_ship_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
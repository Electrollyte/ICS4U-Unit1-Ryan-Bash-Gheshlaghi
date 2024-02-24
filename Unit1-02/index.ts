/**
 * this program calculates the amount of energy
 * one object can produce with it's mass
 *
 * By: Ryan Bash Gheshlaghi
 * Since: 20/02/2024
**/

import { createPrompt } from 'bun-promptx'

//constants
const sLight = 2.998e8

//input
const objectMass = createPrompt("Mass of the object (kg): ")

//checking if the input number is the right type
const objectMassFloat = parseFloat(objectMass.value || "-1")

if (isNaN(objectMassFloat) || objectMassFloat < 0) {
  console.log("Your number is either negative or NaN")
} else {
  //process and calculations
  const objectEnergy = objectMassFloat * Math.pow(sLight, 2)


  //output
  console.log(`An object with the mass of ${objectMassFloat}kg can produce ${objectEnergy.toExponential(3)}J energy`)
}
console.log("\nDone.")

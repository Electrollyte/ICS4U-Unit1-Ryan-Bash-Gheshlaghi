/**
 * This program finds the third value for the dimensions of a 1 foot board plank
 *
 * By: Ryan Bash Gheshlaghi
 * Since: 07/03/2024
 */

import { createPrompt } from 'bun-promptx'
const bWidthStr = createPrompt("Enter the plank's width: ")
const bHeightStr = createPrompt("Enter the plank's height: ")

const bWidth = parseFloat(bWidthStr.value || "-1")
const bHeight = parseFloat(bHeightStr.value || "-1")

if (isNaN(bWidth) == true || isNaN(bHeight) == true) {
  console.log("Invalid input")
} else if (bWidth < 0 || bHeight < 0) {
  console.log("invalid input")
} else {
  const footBoard = 144
  const bLength = (footBoard) / (bWidth * bHeight)
  console.log(`The plank's length is ${bLength}" long.`)
}

console.log("\nDone.")


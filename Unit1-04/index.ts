/**
 * This program is theduce number guessing game
 *
 * By: Ryan Bash Gheshlaghi
 * Since: 01/03/2024
**/

import { createSelection } from 'bun-promptx'

let counter = 0 
const randomNum = Math.floor(Math.random() * 6) + 1

while (true) {
  const uGuess = createSelection([
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { text: '4' },
    { text: '5' },
    { text: '6' }
  ], {
    headerText: "What do you think the number is? (between 1-6)",
    perPage: 6
  })

  counter++

  if (uGuess.selectedIndex > randomNum - 1) {
    console.log(`Too high, try again. \n`)
  } else if (uGuess.selectedIndex < randomNum - 1) {
    console.log(`Too low, try again. \n`)
  } else {
    console.log(`Wow, took you long enough to guess it right. \n`)
    console.log(`Took you ${counter} wasted attempts`)
    break
  }
}

console.log("\n Done")

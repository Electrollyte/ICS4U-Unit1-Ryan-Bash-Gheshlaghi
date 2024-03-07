/**
 * This is the scissors paper rock game (for my aussie freind :DDD)
 *
 * By: Ryan Bash Gheshlaghi
 * Since: 06/03/2024
 */

import { createSelection } from 'bun-promptx'

const options = ['Scissors', 'Paper', 'Rock']

const userInput = createSelection(
  [
    { text: 'Scissors' },
    { text: 'Paper' },
    { text: 'Rock' }
  ],	
  {
    headerText: 'Scissors paper rock! ',
    perPage: 3,
  }
)

console.log(`Selected: ${options[userInput.selectedIndex]}`)

const randomNumber = Math.floor(Math.random() * options.length)

console.log(`I chose ${options[randomNumber]}`)

if (userInput.selectedIndex === randomNumber) {
	    console.log("looks like we drawed")
} else if (
	    (userInput.selectedIndex === 2 && randomNumber === 0) ||
	    (userInput.selectedIndex === 0 && randomNumber === 1) ||
	    (userInput.selectedIndex === 1 && randomNumber === 2)
) {
	    console.log("Wow you won, congratulations i guess")
} else {
	    console.log("You lost matey")
}

console.log("\nDone.")

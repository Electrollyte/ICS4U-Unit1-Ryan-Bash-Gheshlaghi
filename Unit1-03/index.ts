/**
 * this program calculates the time needed for a type of food to be in a microwave
 *
 * Created by: Ryan Bash Gheslaghi
 * Since: 26/02/2024
 **/

import { createPrompt } from 'bun-promptx'
import { createSelection } from 'bun-promptx'

const foodType = createSelection([
  { text: 'sub' },
  { text: 'slice of pizza' },
  { text: 'bowl of soup' }
],{
  headerText: 'what are you heating up',
  perPage:3,
})

const foodAmt = createSelection([
  { text: '1' },
  { text: '2' },
  { text: '3' }
], {
  headerTest: `how many ${foodType} do you have?`,
  perPage: 3,
})

if (foodType.selectedIndex === 0) {
  if (foodAmt.selectedIndex === 0 ) {
    console.log(`For warming up a sub, you need 1 minute`)
  } else if (foodAmt.selectedIndex === 1 ) {
    console.log(`For warming up 2 subs, you need 1 minute and 30 seconds`)
  } else if (foodAmt.selectedIndex === 2 ) {      
    console.log(`For warming up 3 subs, you need 2 minutes`)
  }
}
else if (foodType.selectedIndex === 1) {
  if (foodAmt.selectedIndex === 0 ) {
    console.log(`For warming up a slice of pizza, you need 45 seconds`)
  } else if (foodAmt.selectedIndex === 1 ) {
    console.log(`For warming up 2 slices of pizza, you need 1 minute and 7.5 seconds`)      
  } else if (foodAmt.selectedIndex === 2 ) {                                                                            
    console.log(`For warming up 3 slices of pizza, you need 1 minutes and 30 seconds`)
  }
} 
else if (foodType.selectedIndex === 2) {
  if (foodAmt.selectedIndex === 0 ) {
    console.log(`For warming up a bowl of soup, you need 1 minute and 45 seconds`)
  } else if (foodAmt.selectedIndex === 1 ) {
    console.log(`For warming up 2 bowls of soup, you need 2 minutes and 37,5 seconds`)     
  } else if (foodAmt.selectedIndex === 2 ) {                                       
    console.log(`For warming up 3 bowls of soup, you need 3 minutes and 30 seconds`) 
  }
}

console.log("\nDone")

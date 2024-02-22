/**
* The program shows how many logs of different the truck can carry
* By:ryan bash gheshlaghi
* Since:20/2/2024
*/

import {createPrompt} from 'bun-promptx'

console.log('\nChoose the length of the log you need for shipping')


const loglength = createPrompt('we have 0.25m, 0.5m,and 1.0m:  ')
const loglengthfloat = parseFloat(loglength.value)
const logweight = 20
const maximumweight = 1100
const maxlength = maximumweight/logweight
const logsnum = maxlength/loglengthfloat

console.log(`our truck can carry ${logsnum} with the length of ${loglengthfloat}m.`)
console.log('\nDone.')


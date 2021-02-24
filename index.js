import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

// fifaData.filter(function(game){
//     if (game[])
//     return game["Stage"];
// })

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/


function getFinals(data) {
    return data.filter(function(game){
        return game["Stage"] === "Final";
    })
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callback) {
    let years = [];
    let finalsArray = callback(array);
    // store the result of callback(array) into a variable so you can use it later
    // array is the data of all world cup rounds
    // take the callback function from above which will be Task 2 function
    finalsArray.forEach(function(item) {
        // loop through entire data array that has been filtered to go by final and pull only the specific
        years.push(item["Year"]);
    });
    
    return years;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, callback) {
    let winners = [];
    let finalsArray = callback(array);
    // store the same data
    finalsArray.forEach(function(game){
        if(game["Home Team Goals"] > game["Away Team Goals"]) {
            winners.push(game["Home Team Name"]);
        } else {
            winners.push(game["Away Team Name"]);
        }
    });

    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(games, yearsFunc, winnersFunc) {
    // let yearsArr = yearsFunc(games, getFinals(games))
    // let allOfTheFinals = getFinals(array); // result of this should give us an array of all the finals
    // we need to start with the finals array - collection of all world cups
    let yearsArray = yearsFunc(games, getFinals); // same number of elements and each element is going to match the other 
    let winnersArray = winnersFunc(games, getFinals);

    // console.log('This is the games array: ', games);
    let name = yearsArray.map((year, index) => {
        return `In ${year}, ${winnersArray[index]} won the world cup!`;
    })

    let name = winnersArray.map(function(winner, index){
        return `In ${yearsArray[index]}, ${winner} won the world cup!`;
    })
    console.log(name);
    return name;

    // console.log(sentences);

    // yearsArray.forEach(function(year, index){
    //     let sentence = `In ${yearsArray[index]}, ${winnersArray[i]} won the world cup!`
    //     sentences.push
    // })

    // return yearsArray.map(function(game, index){
    //     return 
    // })

    // let allOfTheYears = yearsFunc(allOfTheFinals) // (array data, callback)
    // pass that to the yearsFunc to get all the years
    // console.log(allOfTheFinals);
    // console.log(games);

    // console.log();
    // return sentences
    // return an array of strings that say the above
    // return sentences after pushing all the strings

    // pass that finals array again to winnersFunc to get all the winners
    // template literal where we take the year of the world cup and then the country that won the world cup

}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 

(Hint: use .reduce and do this in 2 steps) 

Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(array) {

}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}

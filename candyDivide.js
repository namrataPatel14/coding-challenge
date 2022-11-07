/**
 * 
 * @param {*} numberOfCandies 
 * @returns 
 */
 function divide_candy(numberOfCandies) {
    // Will store the number of possible friends combination
    const noOfFriendsPossible = [];
    for (let i = 1; i <= numberOfCandies; i++) {
        if (numberOfCandies % i === 0) {
            noOfFriendsPossible.push(i - 1);
        }
    }
    return noOfFriendsPossible;
}

console.log(divide_candy(30));
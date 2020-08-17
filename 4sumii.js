//Objective is to find the number of 4 values, one chosen from A, B, C, and D,
//that add up to 0

let A = [ 1, 2],
B = [-2,-1],
C = [-1, 2],
D = [ 0, 2]


//O(n^2) solution that maps over the sum of tuples in A and B first,
//then finds the complements in C and D's tuples.

let count = 0
let map = {}

//Map out the frequency of every sum in A and B
for (let val of A) {
    for (let val2 of B) {
        let sum = val + val2
        
        if (map[sum] == undefined) {
            map[sum] = 1
        } else {
            map[sum]++
        }
    }
}

//Find the complements in C and D
for (let val of C) {
    for (let val2 of D) {
        let target = -(val + val2)
        
        if (map[target]) {
            count += map[target]
        }
    }
}

return count
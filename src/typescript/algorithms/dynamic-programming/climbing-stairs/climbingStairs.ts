export function climbingStairs(num: number): number{
    if(num <= 2 ) return num

    let first = 1;
    let second = 2;
    let total = 0

    for(let i = 3; i <= num; i++){
        total = first + second
        first = second
        second = total
    }

    return total
}

//Example usage
// console.log(climbingStairs(5)); // Output: 8

function sum(args){
    let sum_of_args = 0;
    for (const i of args){
        sum_of_args = sum_of_args + i
    }
    return sum_of_args;
}

console.log(sum([2, 3]))

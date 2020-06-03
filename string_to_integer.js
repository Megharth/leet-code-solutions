let isNaN = function(x) {
    let n = Number(x)
    return n !== n
}

let myAtoi = function(str) {
    let result = str.match(/\S+/g)
    if(result === null)
        return 0
    let maxInt = Math.pow(2,31)
    let x = parseInt(result[0])
    x = isNaN(x) ? 0 : x
    if (x < 0) {
        x = x < -maxInt ? -maxInt : x
    } else {
        x = x > (maxInt - 1) ? maxInt-1 : x
    }
    return x
}

module.exports = function reverse (n) {
    let string = String(Math.abs(n));
    let newString = '';

    for(let i = string.length - 1; i >=0 ; i--) {
        newString += string[i];
    }

  return Number(newString);
}

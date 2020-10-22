module.exports = function reverse (n) {
    var string = String(Math.abs(n));
    var splitString = string.split('');
    var reverseString = splitString.reverse();
    var resultString = reverseString.join('');
    return Number(resultString);
}

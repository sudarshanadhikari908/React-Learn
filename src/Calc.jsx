
import React from 'react';
function add(a, b) {
    let sum = a + b
    return sum

}
function sub(a, b) {
    let diff = a - b
    return diff

}
function product(a, b) {
    let mul = a * b
    return mul

}
function divide(a, b) {
    let divi = a / b
    divi = divi.toFixed(2)
    return divi

}
export default add;
export { sub, product, divide };
/**
 * @desc Get random rgb color
 * @return {String}
 * @example rgba(23, 68, 20, 1)
 */
const getRandomRGBColor = function () {
    let numbers = [];
    for (let i = 0; i < 3; i++) {
        numbers.push(getRandomNumber(0, 255))
    }
    return `rgb(${numbers.join()})`
};
/**
 * @desc Get random number [min, max]
 * @param min
 * @param max
 */
const getRandomNumber = function (min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};
export {
    getRandomRGBColor
}

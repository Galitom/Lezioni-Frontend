// Exercise: callback
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

// should output abcd

// Another reimplementation of a native Array method. Notice the difference with map, map returns an array, forEach doesn't return anything so whatever needs to happen needs to take place in the body of the callback function.

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
    alphabet += char;
});

console.log(alphabet);

function forEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[i]);
    }
}

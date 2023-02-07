console.log("this is md atiqur rahman");
// in es5
function sum(a, b) {
    console.log(a + b);
}
sum(4, 5, 6, 7, 8);

// now in es6 it taking 4 and 5 . if we forgot how many parameters we have to pass then what . to takle this we use rest parameter
function mult(...inputs) {
    console.log(...inputs);
    let total = 0;

    for (let i of inputs) {

        total = total + i;

    }
    console.log(total);

}

mult(4, 6, 7, 8, 9, 10);

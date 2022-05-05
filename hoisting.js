console.log(x);
var x = 3;
//let x = 3;

stepOne();

function stepOne() {
    console.log('step one');
}



const func = () => {
    stepTwo();
}
func();

function stepTwo() {
    console.log('step two');
}
//reverse a string

let str = "sandy,santhosh,rithu,savi"

function revstring(){
    return (
        str.split('').reverse().join('')
    );
    

};

console.log(revstring());

//find a largest number

let nums = [120,159,147,126,354]

function max(){
    return Math.max(...nums);

}
console.log(max());

// if statement 
let blackbox = 50 ;
let whitebos = 50 ;

if(blackbox > whitebos)
{
    console.log("blackbox has more items");
}

else if(blackbox == whitebos)
{
    console.log("both box have a same value of item , YOU MAY PROCEDE ")
}

else
{
    console.log("white neeed to be match");

}

//SWITCH Statement
let Today = "sunday" 

switch(Today){
    case "Monday":
        console.log("Today is monday,enjoy the first day of work");
        break;
    case "tuesday":
        console.log("Today is tuesday,enjoy the second day of work");
        break;
    case "wednesday":
        console.log("Today is wednesday,enjoy the third day of work");
        break;

    case "thursday":
        console.log("Today is thursday,enjoy the fourth day of work");
        break;

    case "friday":
        console.log("Today is friday,enjoy the final day of week");
        break;

    case "saturday":
        console.log("enjoy the weekends");
        break;
        
    case "sunday":
                console.log("enjoy the weekends");
        break;
    default:
        console.log("GIVE A PROPER DAY TO READ")
}

// and we also reduce the coding lines,if case was the same

//TERNARY OPERATOR

let age = 45
let message;

message = age < 18 ? "cannot be enter this club ": "you may enter";
console.log(message);



 


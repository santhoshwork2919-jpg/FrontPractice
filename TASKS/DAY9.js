//hello ,today i learm about object orentetion

//examplem programe

let team = 
{

    name : "chennai super kings",
    score : 200,
    WINratio : "60%",

    firstmatch : function(){
        console.log( " today they win the match");
    } ,

    sectondmatch : function(){
        console.log("today the loss the match");
    },

    thirdmatch :function(){
        console.log("todays match has stopped ");
    }


};
//lets call the function" .",

console.log(team.name);
team.thirdmatch();
team.firstmatch();
team.sectondmatch();




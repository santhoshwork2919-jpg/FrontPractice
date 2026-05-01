//call function

function add(a,b)
{
    return a+b ;
}

function sub(a,b)
{
    return a-b ;
}

function multi(a,b)
{
    return a*b ;
}

function div(a,b)
{
    return a/b ;
}

function calu(a,b, callback)
{
    console.log(callback(a,b));
}
calu(200,300,add);
calu(200,300,sub);
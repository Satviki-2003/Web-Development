function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}

function calculator(a,b,op)
{
    console.log(op(a,b));
}

/*
calculator(2,3,add);
 5

calculator(2,3,mul);
 6
*/
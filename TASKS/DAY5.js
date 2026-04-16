let c;
let row ;
let n=11;

for(i=0;i<n;i++)
{
    row="";


for(c=0; c<n; c++)
{
    if(i==0 || i==n-1 || c==0 || c==n-1  ||  c==Math.floor(n/2) || i==Math.floor(n/2) 
        || i == c || i + c == n-1|| i+c == Math.floor(n/2) || i - c == Math . floor(n/2) 
        || i +c ==(n-1) +Math.floor(n/2) || c-1 == Math.floor(n/2)){
        // console.log("*")
        row = row+"*" ;
    }
    
    else{
        //  console.log(" ")
        row = row+" " ;


    }

}
console.log(row);
}

let val= prompt("enter a number");
 for(let i=1; i<=val; i++)
 {
    if(i%2===0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
 }

 //here if we use val plus 1 Instead of val then it will concatenate the num entered eg
 //if we enter say 20 in it then it will giv ethe answer till 200 bcz 20+1=201

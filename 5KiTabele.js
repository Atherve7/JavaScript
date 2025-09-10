// If want to print like 5*1=5 etc only this code works especially only with
// back ticks `` and not with "" and to type anuythig dynamic inside the back ticks use
// ${} like ${i} or ${5*i}

for(let i=1; i<11; i++ )
{
    console.log(`5* ${i}=${5*i}`);
}


//this code wont  work:

// for(let i=1; i<11; i++ )
// {
//     console.log(`5*` i `=` 5*i);
// }


//nor with "" :


// for(let i=1; i<11; i++ )
// {
//     console.log("5*" i "=" 5*i);
// }


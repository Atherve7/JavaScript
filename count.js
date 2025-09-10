//using count variable to keep a track and pritn first five odd numbers:

let count=0;
for(let i=1; i<101; i++)
    {
        if(i%2===1){
            console.log(i);
            count++;
        }
        if(count===5) break;       
    }
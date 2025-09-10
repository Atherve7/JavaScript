//using rest accept numebr of marks and retuyrn total:
//5:40:00


function getScore(...scores) {
    let total=0;
            scores.forEach(function(val){
                total=total+val;
            });  
    return total;
}
console.log(getScore(10,12,14,18));

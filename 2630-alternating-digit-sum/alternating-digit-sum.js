var alternateDigitSum = function(n) {
    let count= 0;
 let str=n.toString()
 leng=str.length
 

    for(i=0;i<leng;i++){
        if(i % 2===0){
        count += Number(str[i])
        }
        else{
            count -= Number(str[i])
        }
        
    }
  return count
    
    
};
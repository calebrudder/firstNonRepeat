function firstNonRepeat(str) {
    for(let i = 0; i < str.length; i++){
     if(!(str.substring(i+1)).includes(str[i])){
       return str[i];
     }
   }
 }
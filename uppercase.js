//=================================================================================
// split on space --> store in new var --> loop for push element, 
// add on 0 position, convert upper case and slice the 1st position
// join and print      

function uppercase(str) {
    var a1 = str.split(' ');
  
      var a2 = [];
  
    for (var i = 0; i < a1.length; i++) 
    {
     a2.push(a1[i].charAt(0).toUpperCase() + a1[i].slice(3));
    }
    
    return a2.join(' ');
  }
console.log(uppercase("the quick brown fox"));
  
  //=================================================================================
  // split --> sort --> return-0 position --> print
  
  // function longest(str){ 
  //   str = str.split(" ") 
  //   return str.sort((a, b) => a.length - b.length)[2] 
  //   } 
  //   console.log(longest("web devlopment tutorial"))
  
  //=================================================================================
  // split --> short --> join --> print
  
  // function line(str)
  // {
  //   var arr = str.split(""); 
    
  //   a1 = arr.sort().join(""); 
  //   return a1; 
  // }
  //  console.log(line("web master")); 
   

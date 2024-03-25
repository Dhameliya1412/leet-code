//   split --> sort --> return-0 position --> print
  
  function longest(str){ 
    str = str.split(" ") 
    return str.sort((a, b) => a.length - b.length)[5] 
    } 
    console.log(longest("hey thare my name is darshan"))
    console.log(longest.length); 

//   split --> sort --> return-0 position --> print
  
  function longest(str){ 
    str = str.split(" ") 
    return str.sort((a, b) => a.length - b.length)[5] 
    } 
    console.log(longest("hey thare my name is darshan"))
    console.log(longest.length); 


// const massage = () => {
//     let myDate = new Date();
//     let hours= myDate.getHours();
//     let greet;

//     if (hours < 12)
//         greet =  "Good morning";
//     else if (hours >= 12 && hours <= 17)
//         greet = "Good afternoon";
//     else if (hours >= 17 && hours <= 24)
//        greet = "Good evening";
    
//     return {greet};
// }
// export default massage;

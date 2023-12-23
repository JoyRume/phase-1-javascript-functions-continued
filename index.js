// code your solution here

 function saturdayFun(activity="roller-skate"){
  if (activity){
    return `This Saturday, I want to ${activity}!`;
  }else {
    console.log("This Saturday, I want to bathe my dog!")
  }
  
 }
 console.log(saturdayFun())

 function mondayWork(activity="go to the office") {
  if (activity) {
      return `This Monday, I will ${activity}.`;
  } else {
     return 'This Monday, I will go to the office.';
  }
}
 //const mondayWork= function(activity="go to the office"){
  //if (activity){
  // return `This Monday, I will ${activity}!`

  //}else{
    //console.log("This Monday, I will work from home.")

  //}
 //}

 console.log(mondayWork())


 let wrapAdjective = function(sign="*") {
  return function(adjective="special") {
      return `You are ${sign}${adjective}${sign}!`;
  }
}
 //function wrapAdjective (string="*"){
   //inner function(single="special"){
     //   console.log(`You are ${string}${single}${string}`)

    //}
    //return inner
 //}
 const myInnerFunction = wrapAdjective(); 
myInnerFunction()






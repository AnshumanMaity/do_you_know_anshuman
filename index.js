const readlineSync=require('readline-sync');

var quesOne = {
  question: "Who is my favorite superhero? ",
  answer: "Superman"
}

var quesTwo = {
  question: "Which is my favorite go to city in Odisha? ",
  answer: "bhubaneswar"
}
var quesThree = {
  question: "What do i love most,coffee or tea? ",
  answer: "tea"
}
var quesFour = {
  question: "Where would I prefer Shimla or Goa? ",
  answer: "Shimla"
}
var quesFive = {
  question: "What's my dream company,Amazon or Google? ",
  answer: "amazon"
}

var questionBank=[quesOne,quesTwo,quesThree,quesFour,quesFive];
const quiz=(quesArr) =>{
  var nope=readlineSync.question("Welcome to game \"Do you even know Anshuman\"!!\nPress Enter to continue");
  var score=0;
  for(let i=0;i<quesArr.length;i++){
    var ans=readlineSync.question(quesArr[i].question);
    if(ans.toLowerCase()==quesArr[i].answer.toLowerCase()){
      console.log("You are correct!!")
      score=score+1;
    }
    else{
      console.log("Wrong Ans!!");
    }
  }
  if(score==5){console.log("You know me really well,Bruh!!");}
  else{console.log("You did pretty good,Bruh!!");}
  console.log("Your Score is "+score);
}

quiz(questionBank);
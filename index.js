function saturdayFun(someValue="roller-skate"){
    return`This Saturday, I want to ${someValue}!`;
    }
console.log(saturdayFun("code"))


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`}
console.log(mondayWork("work from home"))

function wrapAdjective(text = "*"){
    return function(msg ="special"){
        return`You are *${msg}*!`;
      }
}
wrapAdjective("%")("a dedicated programmer");
console.log(wrapAdjective("*")("a hard worker"))

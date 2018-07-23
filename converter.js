var readlineSync = require('readline-sync')

var ones=['','one','two','three','four','five','six','seven','eight','nine']
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']



var minNum = readlineSync.questionInt('May I have your first number? ')
var maxNum = readlineSync.questionInt('May I have your last number? ')
var init = convertRange(minNum,maxNum)

function convertThousands(num) {
  if (num >= 1000){
    return convertHundreds(Math.floor(num / 1000)) + " thousand "+ convertHundreds(num % 1000)
  } else {
    return convertHundreds(num)
  }
}

function convertHundreds(num) {
  if (num >= 100) {
    return ones[Math.floor(num / 100)] + " hundred "+ convertTens(num % 100)
  } else {
    return convertTens(num)
  }
}

function convertTens(num){
  if (num < 10) {
    return ones[num]
  } else if (num >= 10 && num < 20) {
    return teens[num - 10]
  } else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10]
  }
}

// function convert(num){
//   if ((num < 1) || (num > 100000)) {
//     return "out of range"
//   } else {
//     return convertThousands(num)
//   }
// }

function convertRange(min, max) {
  if ((min < 1) || (max < 1) || (min > 100000) ||(max > 100000)) {
    console.log("out of range")
  } else {
  for (var i = min; i <= max; i++) {
    console.log(convertThousands(i))
  }}
}

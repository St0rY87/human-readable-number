
module.exports = function toReadable (number) {
    firstTwenty = [' ','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    tens =[' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty', 'ninety']
    let restOfNumber;
    if (number === 0) {
        return 'zero'
    }
    if (number < 20) {
        return  (firstTwenty[number])
    }
    if (number > 19 && number < 100 && number % 10 === 0 ) {
        number /= 10
        return (tens[number])
    }
    if (number < 100) {
        restOfNumber = number % 10
        number = +number.toString()[0]
        return (`${tens[number]} ${firstTwenty[restOfNumber]}`)
    }    
    if (number >= 100 && number % 100 === 0) {
        number /= 100
        return (`${firstTwenty[number]} hundred`)
    }
   if (number > 100) {
        restOfNumber = number % 100
    if(restOfNumber < 20) {
        number = +number.toString()[0]
        return (`${firstTwenty[number]} hundred ${firstTwenty[restOfNumber]}`)
    }
    if(restOfNumber >= 20) {
        let middleNumber
        number = +number.toString()[0]
        middleNumber = +restOfNumber.toString()[0]
        restOfNumber = +restOfNumber.toString()[1]
        return (`${firstTwenty[number]} hundred ${tens[middleNumber]} ${firstTwenty[restOfNumber]}`.trim())
    }
   }
   

}


    









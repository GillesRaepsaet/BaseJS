let min = number(prompt("Please your enter one number minimum"))
let max = number(prompt("Please your enter one number maximum"))
let current = number(prompt("Please your one number"))


if(min > max) {
    if(min < current && max > current) {
        console.log('Current is between max & min')

    }else{
        console.log("Current is not between min and max")
    }
}else{
    console.log("Are you kidding me !")
}



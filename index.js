// 01 - Comparaison
// const test = 143
// const bis = 219

// if (test > bis) {
//     console.log ("test is superior to bis")
// } else {
//     console.log ("test isn't superior to bis")
// }

// if (test < bis) {
//     console.log ("test is inferior to bis")
// } else {
//     console.log ("test isn't inferior to bis")
// }

// if (test >= bis) {
//     console.log ("test is superior or equal to bis")
// } else {
//     console.log ("test isn't superior or equal to bis")
// }

// if (test <= bis) {
//     console.log ("test is inferior or equal to bis")
// } else {
//     console.log ("test isn't sinferior or equal to bis")
// }

// if (test === bis) {
//     console.log ("test is equal to bis")
// } else {
//     console.log ("test isn't equal to bis")
// }

// if (test !== bis) {
//     console.log ("test is different to bis")
// } else {
//     console.log ("test isn't different to bis")
// }


// 02 - Condition
// const limit = 50
// let score = 64

// if (score >= limit) {
//     console.log ("Ok good !")
// } else {
//     console.log ("Oh nooo...")
// }

// const limit2 = 50
// let score2 = 30

// if (score2 >= limit2) {
//     console.log ("Ok good !")
// } else {
//     console.log ("Oh nooo...")
// }


// 03 - Condition 2
// const password = "azerty"
// if (password.length > 5){
//     console.log ("The password is secure")
// }else {
//     console.log ("The password is not secure")
// }


// 04 - Condition 3
// const limit = 50
// let score = 64
// const password = "azerty"

// if (score >= limit && password.length > 5) {
//     console.log("Everything is good")
// } else if(score >= limit || password.length > 5) {
//     console.log("Something is good")
// } else {
//     console.log("Nothing is good")
// }

// const limit2 = 50
// let score2 = 64
// const password2 = "azer"

// if (score2 >= limit2 && password2.length > 5) {
//     console.log("Everything is good")
// } else if(score2 >= limit2 || password2.length > 5) {
//     console.log("Something is good")
// } else {
//     console.log("Nothing is good")
// }

// const limit3 = 50
// let score3 = 40
// const password3 = "azer"

// if (score3 >= limit3 && password3.length > 5) {
//     console.log("Everything is good")
// } else if(score3 >= limit3 || password3.length > 5) {
//     console.log("Something is good")
// } else {
//     console.log("Nothing is good")
// }


// 05 - Random
// const min = 1
// const max = 6
// const random = Math.floor(Math.random() * max) + min
// console.log (random)
// if (random === 6) {
//     console.log ("Yes I win !")
// } else {
//     console.log ("So close...")
// }


// 06 - Month
// let month = "January"
// switch (month) {
//     case "December": case "January": case "February":
//         console.log ("Winter")
//         break;
//     case "March": case "April": case "May" :
//         console.log ("Spring")
//         break;
//     case "June": case "July": case "August" :
//         console.log ("Summer")
//         break;
//     case "September": case "October": case "November" :
//         console.log ("Autumn")
//         break;
//     default :
//         console.log ("You're tired, go to sleep")
// }

// let month2 = "April"
// switch (month2) {
//     case "December": case "January": case "February" :
//         console.log ("Winter")
//         break;
//     case "March": case "April": case "May" :
//         console.log ("Spring")
//         break;
//     case "June": case "July": case "August" :
//         console.log ("Summer")
//         break;
//     case "September": case "October": case "November" :
//         console.log ("Autumn")
//         break;
//     default :
//         console.log ("You're tired, go to sleep")
// }

// let month3 = "August"
// switch (month3) {
//     case "December": case "January": case "February" :
//         console.log ("Winter")
//         break;
//     case "March": case "April": case "May" :
//         console.log ("Spring")
//         break;
//     case "June": case "July": case "August" :
//         console.log ("Summer")
//         break;
//     case "September": case "October": case "November" :
//         console.log ("Autumn")
//         break;
//     default :
//         console.log ("You're tired, go to sleep")
// }

// let month4 = "September"
// switch (month4) {
//     case "December": case "January": case "February" :
//         console.log ("Winter")
//         break;
//     case "March": case "April": case "May" :
//         console.log ("Spring")
//         break;
//     case "June": case "July": case "August" :
//         console.log ("Summer")
//         break;
//     case "September": case "October": case "November" :
//         console.log ("Autumn")
//         break;
//     default :
//         console.log ("You're tired, go to sleep")
// }

// let month5 = "Dunno"
// switch (month5) {
//     case "December": case "January": case "February" :
//         console.log ("Winter")
//         break;
//     case "March": case "April": case "May" :
//         console.log ("Spring")
//         break;
//     case "June": case "July": case "August" :
//         console.log ("Summer")
//         break;
//     case "September": case "October": case "November" :
//         console.log ("Autumn")
//         break;
//     default :
//         console.log ("You're tired, go to sleep")
// }


// 07 - Rounded but better
let roundedNumber = 3.456
if ((roundedNumber - Math.floor(roundedNumber)) < (Math.ceil(roundedNumber)) - roundedNumber) {
    console.log (Math.floor(roundedNumber))
} else if ((roundedNumber - Math.floor(roundedNumber)) > (Math.ceil(roundedNumber)) - roundedNumber) {
    console.log (Math.ceil(roundedNumber))
} else {
    console.log (roundedNumber)
}

let roundedNumber2 = 3.753
if ((roundedNumber2 - Math.floor(roundedNumber2)) < (Math.ceil(roundedNumber2)) - roundedNumber2) {
    console.log (Math.floor(roundedNumber2))
} else if ((roundedNumber2 - Math.floor(roundedNumber2)) > (Math.ceil(roundedNumber2)) - roundedNumber2) {
    console.log (Math.ceil(roundedNumber2))
} else {
    console.log (roundedNumber2)
}

let roundedNumber3 = 3.5
if ((roundedNumber3 - Math.floor(roundedNumber3)) < (Math.ceil(roundedNumber3)) - roundedNumber3) {
    console.log (Math.floor(roundedNumber3))
} else if ((roundedNumber3 - Math.floor(roundedNumber3)) > (Math.ceil(roundedNumber3)) - roundedNumber3) {
    console.log (Math.ceil(roundedNumber3))
} else {
    console.log (roundedNumber3)
}
// let marks=80;

// if( marks>=33 && marks>=80)
//     {
//         console.log("Pass");
//         console.log("A+");
//     }

//     let age=64
//     if((age>=18 && age>=60) || !(false))
//         {
//         console.log("You can vote");
//        console.log("Senior citizen");
//     }

//Practice queestion good string

let name="amit";

if(name[0] == 'a' && name.length>3)
    {
        console.log("Good String");
    }
    else
    {
    console.log("Not a Good String");
   }

//Truthy and Falsy Values
if("")
{
    console.log("It has true value");
}
else
{
    console.log("It has false value");
}

//Switch Statements

let color="red";

switch(color)
{
    case "red":
        console.log("Stop !");
        break;
    case "yellow":
        console.log("Slow Down !");
        break;
    case "green":
        console.log("Go !");
        break;
    default:
        console.log("Broken Light");
}

//Practice Question Switch print day of the week

let day=5;

switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturady");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Day");
}
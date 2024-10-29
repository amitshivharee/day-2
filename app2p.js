//Practice Question 


let color="red";
//Traffic Light System
if(color=="red")
{
    console.log("Stop ! light color is red");
}
else if(color=="yellow")
    {
        console.log("Slow Down ! light color is yellow");
    }

   else if(color=="green")
        {
            console.log("Go ! light color is green");
        }

else{
    console.log("Traffic light is broken"); 
}

let age=18;

// if(age>=18)
//     {
//         console.log("you can vote");
//     }
//     else if(age<18)
//         {
//             console.log("you cannot vote");
//         }

if(age>=18)
    {
        console.log("You Can Vote");
    }
    else{
        console.log("You can not Vote");
    }

//practice question popcorn price according to size

let size='L';

if(size === 'XL')
    {
        console.log("Price is Rs 250");
    }
    else if(size==='L')
        {
            console.log("Price is Rs 200");
        }
        else if(size==='M')
            {
                console.log("Price is Rs 100");
            }

            else 
                {
                    console.log("Price is Rs 50");
                }

//Nested if-else
let marks=55;
if(marks>=33)
    {
        if(marks>=80)
            {
                console.log("O");
            }
            else
            {
                console.log("A");
            }
    }
    else
    {
        console.log("Better luck next time");
    }
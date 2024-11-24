var Quotes =[

{
    S_1:"You miss 100% of the shots you don't take.",
    S_2:"--Wayne Gretzy",
},
{
    S_1:"It's not what happens to you, but how you react to it that matters.",
    S_2:"--Epictetus",
},
{
    S_1:"Do not take life too seriously. You will not get out alive." ,
    S_2:"--Elbert Hubbard",
},
{
    S_1:"Resentment is like drinking poison and waiting for your enemies to die.",
    S_2: "--Nelson Mandela",
},
{
    S_1:"The best revenge is massive success." ,
    S_2: " --Frank Sinatra"
}

];

var newItem;
var lastItem;

var display=[];

function getQoutes(){

if(display.length==Quotes.length){
    display=[];
}

    do {
        newItem =Math.floor( Math.random()*Quotes.length)
    }

  while (newItem==lastItem || display.includes(newItem));

lastItem = newItem
   
display.push(newItem);
    
console.log(newItem);

document.getElementById("S_1").innerHTML=Quotes[newItem].S_1;
document.getElementById("S_2").innerHTML=Quotes[newItem].S_2;



}


















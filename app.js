let box= document.querySelectorAll(".box");
let re_btn=document.querySelector("#reset");
let fin=document.querySelector("p");
let start;
//let start=prompt("Who is gonna start game X or O");
let bd=document.head;
let win =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// let turn = start;//Either p1 or p2
let draw =0;
let count = 0;
const checkWinner= ()=>{
    for (pattern of win)//this will give us the every array of all the winning boxes match group
    {
        let a=box[pattern[0]].innerText;// Here we fetched the text from the win condition boxes 
        let b=box[pattern[1]].innerText;
        let c=box[pattern[2]].innerText;
        if(a != "" && b != "" && c!= "")//should not be empy
        {
        if(a===b && b===c) //value in all the three win boxes must be same
        {
            console.log("IT'S A WIN..");
            count++;
            fin.innerText=(`Player ${a} is Winner`);
            fin.classList.add("pwin");
        }
        }
    }
    if(count>0)
    {
        box.forEach((box) =>{
        box.disabled=true;
        });
    }
    if(draw===9)
    {
    fin.innerText ="IT'S A DRAW";
    fin.classList.add="draw";
    console.log("draw");
    }
}
function input()
{
    start=prompt("Who is gonna start game X or O");
    if(start != "X" && start != "O")
    {
    alert("INALID CHOICE");
    input();
    }
    else
    {
        turn = start;
    }
}
input();

 box.forEach((box) => {    //THIS IS THE MAIN  
    box.addEventListener("click",()=>{  //whenever there will be a click on box this function will work
    if(turn === "O")
    {
        box.innerText="O";
        turn = "X";
    }
    else
    {
        box.innerText="X";
        turn = "O";
    }
    if(box.innerText === "X")
    {
        box.classList.add("X");
        box.classList.remove("O");
    }
    if(box.innerText === "O")
    {
        box.classList.add("O");
        box.classList.remove("X");
    }
    box.disabled =true;
    draw++;
    checkWinner(); //FUNCTION CALLED TO CEHCK FOR WIN
    });
});

re_btn.addEventListener("click",reset); //Functionality of RSET button when clicked calls reset function
function reset()
{
    box.forEach((box) =>{
    box.innerText="";
    box.disabled=false;
    });
    fin.classList.remove("pwin");
    fin.innerText="Winner name will be dispayed here";
    count = 0;
    input();
}



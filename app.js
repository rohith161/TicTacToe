const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

let turn = true;
let count = 0;
let winsymbol;

let userturn = document.querySelector("#turn");
let res = document.querySelector("#winner");
let reset = document.querySelector("#reset");
let box = document.querySelectorAll(".box");
userturn.innerHTML = `Move : "O" `;

box.forEach((ebox) =>
{
    
    ebox.addEventListener("click" ,() =>
    {
        
        if(turn)
        {
            ebox.innerHTML = "O";
            turn = false;
        }
        else
        {
            ebox.innerHTML = "X";
            turn = true;
        }
        
        userturn.innerHTML = `Move : ${(turn) ? `"O"` : `"X"`}`;
        count++;
        ebox.disabled = true;
        console.log(count);

        let winnerres = checkWinner();
        if(count >= 9 && !winnerres)
        {
            userturn.innerHTML = "";
            res.innerHTML = `No more Possible moves! <br> Please Reset!`;
        }

        if(winnerres === true)
        {
            userturn.innerHTML = "";
            res.innerHTML = `Winner is ${winsymbol}`;
            disablebutton();
        }

    });
});


let checkWinner = () =>
{
    let winner = false;
    winPattern.forEach( (pattern) =>
    {
        let pos1 = box[pattern[0]].innerHTML;
        let pos2 = box[pattern[1]].innerHTML;
        let pos3 = box[pattern[2]].innerHTML;
        
        if(pos1 != "" && pos2 != "" && pos3 != "")
        if(pos1 === pos2 && pos2 === pos3)
        {
            winsymbol = pos1;
            console.log(pos1 + " " + pos2 + " "+ pos3);
            winner =  true;
        }
    });
    return winner;
}

let disablebutton = () =>
{
    box.forEach((ebox) =>
    {
        ebox.disabled = true;
    });
}

reset.addEventListener("click", () => 
{
    userturn.innerHTML = `Move : "O" `;
    count = 0;
    turn = true;
    box.forEach((ebox) =>
    {
        ebox.innerHTML = "";
        ebox.disabled = false;
    });
    res.innerHTML = "";
});

      

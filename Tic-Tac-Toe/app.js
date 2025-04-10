// console.log("Hello!")
let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset-btn');

let winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log('btn was clicked');
        if (turnO){
            box.innerText = "O";
            turnO = false;
            box.disabled = true;
        }
        else{
            box.innerText = "X";
            turnO = true;
            box.disabled = true;
        }
        checkWin();
    })
});
console.log("hello");

const checkWin = () => {
    for(let pat of winPatterns){
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                alert(`Congratulations! Player ${pos1}`);
                disableBoxes();
                // reset_game();
            }
        }
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const reset_game = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
reset.addEventListener('click', () => {
    console.log('reset');
    reset_game();
})

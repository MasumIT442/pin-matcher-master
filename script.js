
// This is for generate a a random number between 1000 and 9999

document.getElementById("generatePinBtn").addEventListener("click", function(){
    function generatePin(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    let result = generatePin(1000, 9999);
    document.getElementById("displayPin").value = result;
});

// For Button value 
function btnValue(val){
    form.display.value += val;
}

// Clear all number.
const clearNumber = document.querySelector("#clear").addEventListener("click", function(){
    document.querySelector("#display").value = "";
});

// delete a digit.
const Delete = document.querySelector("#delete").addEventListener("click", function(){
    const displayItem = document.getElementById("display");
    displayItem.value = displayItem.value.substring(0, displayItem.value.length -1);
});

// pin matching

document.getElementById("submitBtn").addEventListener('click', function(){
    const randomNumber = document.getElementById("displayPin").value;
    const inputNumber = document.getElementById("display").value;

    if(randomNumber != '' && inputNumber != ''){
        if(randomNumber === inputNumber){
            const match = document.querySelector('.match');
            match.style.display = "block";
            match.classList.add("animate-bottom");
        } else {
            const wrong = document.querySelector('.wrong');
            wrong.style.display = "block";
            wrong.classList.add("animate-bottom");
        }
    }

});
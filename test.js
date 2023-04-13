let correctAnswer = Math.floor(Math.random() * 50);
console.log(correctAnswer)

let button = document.querySelector("button");

let newg = document.querySelector("a");


button.addEventListener("click", function(){

    let userAnswer = document.getElementById('input' ).value;
    if(userAnswer == correctAnswer){
        alert("정답입니다!")
    }else{
        if(correctAnswer < userAnswer){
            alert("low 입니다")
        }else{
            alert("high 입니다")
        }
    }
    
})

newg.addEventListener("click", function(){

    location.reload();

})



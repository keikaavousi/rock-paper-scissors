/*
 I assume:
 1 stands for rock
 2 stands for paper
 3 stands for scissors
 */


//score variables
let pcScore = 0,
    userScore = 0

//score labels
let user_tag = document.getElementById("user")
let pc_tag = document.getElementById("pc")


//get all buttons inside .wrapper tag and add onclick event
let btns = document.querySelectorAll("#btn-wrapper button")
btns.forEach(element => {
    element.addEventListener("click", () => {
        compareValue(element.id)
    })
});



//campare pc number with user selected number
const compareValue = choice => {

    let user = choice
    let pc = generateNumber()


    showImage(user, "user-select")
    showImage(pc, "pc-select")


    if (pc != user) {
        if (pc == 1) {
            user == 2 ? userScore++ : pcScore++
        } else if (pc == 2) {
            user == 1 ? pcScore++ : userScore++
        } else {
            user == 1 ? userScore++ : pcScore++
        }
    }

    UpdateScores()
    checkWinner()
}



//generate random number for pc
const generateNumber = () => {
    return Math.ceil(Math.random() * 3)
}



//show image of selected options
const showImage = (num, place) => {
    switch (Number(num)) {
        case 1:
            document.getElementById(place).src = "img/rock.png"
            break;

        case 2:
            document.getElementById(place).src = "img/paper.png"
            break;

        case 3:
            document.getElementById(place).src = "img/scissors.png"
            break;
    }
}

//update score labels
const UpdateScores = () => {
    pc_tag.innerHTML = pcScore
    user_tag.innerHTML = userScore
}

//check who is the final winner based on 3 wins
const checkWinner = () => {
    if (userScore == 3 || pcScore == 3) {

        btns.forEach(element => {
            element.disabled = true;
        })
        
        setTimeout(() => {
            let winner;
            winner = (userScore == 3 ? "You won! :D"  : "PC won :(")

            document.querySelector(".modal h2").innerHTML=winner
            document.querySelector(".modal").toggleAttribute("hidden")
        }, 300);  

    }
}

document.getElementById("retry").addEventListener("click",()=>{
    location.reload();
})

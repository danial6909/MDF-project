
let button = document.getElementById("btn")

let input = document.getElementsByClassName("input")

let notif = document.querySelector(".notif")


function handleSubmit() {

    let input1 = input[0].value
    let input2 = input[1].value

    if (input1.length < 6 || input2.length < 8) {

        notif.innerHTML = "یوزرنیم باید شامل حداقل 6 وپسورد 8 کاراکتر باشد"
        notif.style.border = '3px solid rgb(255, 0, 0)'
        notif.style.right = '10px'

        setTimeout(function () {
            notif.style.right = '-350px'
        }, 3500)
    }
    else {

        notif.style.border = ' 3px solid rgb(72, 255, 0)'
        notif.innerHTML = "ورود موفقیت آمیز بود"
        notif.style.right = '10px'

        setTimeout(function () {
            notif.style.right = '-350px'
        }, 3500)
    }

}

let usernameinput = document.querySelector("#input1")
let passwordinput = document.querySelector("#input2")

let uservalid = document.querySelectorAll(".span1")
let passwordvalid = document.querySelectorAll(".span2")


function usernamevalidation() {
    if (usernameinput.value.length <= 5) {

        for (let i = 0; i < uservalid.length; i++) {
            uservalid[i].style.color = "red";
        }
        usernameinput.style.borderBottom = " 3px solid red"
    }
    else {
        for (let i = 0; i < uservalid.length; i++) {
            uservalid[i].style.color = "rgb(26, 255, 0)";
        }
        usernameinput.style.borderBottom = "3px solid rgb(26, 255, 0)"
    }
}


function passwordvalidation() {
    if (passwordinput.value.length <= 7) {

        for (let i = 0; i < passwordvalid.length; i++) {
            passwordvalid[i].style.color = "red";
        }
        passwordinput.style.borderBottom = " 3px solid red"

    }
    else {
        for (let i = 0; i < passwordvalid.length; i++) {
            passwordvalid[i].style.color = "rgb(26, 255, 0)";
        }
        passwordinput.style.borderBottom = " 3px solid rgb(26, 255, 0)"

    }
}


// zamani ke kharej input click mikonim va input khali hast
usernameinput.addEventListener('blur', function () {
    if (usernameinput.value.length == 0) {
        for (let i = 0; i < uservalid.length; i++) {
            uservalid[i].style.color = "#fff";
        }
        usernameinput.style.borderBottom = "2px solid #fff"

    }
});

passwordinput.addEventListener('blur', function () {
    if (passwordinput.value.length == 0) {
        for (let i = 0; i < passwordvalid.length; i++) {
            passwordvalid[i].style.color = "#fff";
        }
        passwordinput.style.borderBottom = "2px solid #fff"

    }
});

function dark(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}













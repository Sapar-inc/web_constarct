let page = document.querySelector(".page")
let componentsDiv = document.querySelector(".components")

let components = JSON.parse(localStorage.getItem("component")) || []

let componentsObj = [
    {button: '<button class = "btn ostp" onclick = "func()">Оступ</button> <br>'},
    {button: '<button class = "btn under_line" onclick = "func()">Горизонтальная линия</button> <br>'},
    {button: '<button class = "btn blue_btn" onclick = "func()">Синия кнопка</button> <br>'},
    {button: '<button class = "btn red_btn" onclick = "func()">Красная кнопка</button> <br>'}
]

for(item in componentsObj){
    componentsDiv.innerHTML += componentsObj[item].button
}


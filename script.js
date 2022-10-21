// let c = new Components("ColorPicker", "<input type = 'color'>")
// c.save()
// let body = document.querySelector("body")
// body.innerHTML += c.title + " " + c.code

let submitBtn = document.querySelector("#submit_btn")

submitBtn.addEventListener("click", () =>{
    let componentTitle = document.querySelector("#components_title").value
    let componentCode = document.querySelector("#component_code").value
    let componentStyle = document.querySelector("#component_style").value

    let c = new Components(componentTitle, componentCode, componentStyle)
    c.save()
    
})










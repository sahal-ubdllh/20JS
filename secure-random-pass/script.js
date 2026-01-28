const btnE1 = document.querySelector(".btn")
const inputE1 = document.getElementById("input")

const copyIconE1 = document.querySelector(".fa-copy")

const alertContainerE1 = document.querySelector(".alert-container")

btnE1.addEventListener("click", ()=> {
    createPassword()
})



copyIconE1.addEventListener("click", ()=>{
    copyPassword()
    if(inputE1.value){
        alertContainerE1.classList.remove("active")
        setTimeout(() => {
            alertContainerE1.classList.add("active")
        }, 2000);
    }
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 12
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random()* chars.length)
        password += chars.substring(randomNum, randomNum + 1)
        console.log(randomNum, password);
        
    }

    inputE1.value = password
    
}

function copyPassword() {
    inputE1.select()
    inputE1.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputE1.value)
    
}
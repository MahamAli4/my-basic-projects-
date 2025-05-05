let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", () => {
    const length = document.getElementById("length").value;
    const lowerCase = document.getElementById("lowercase").checked;
    const upperCase = document.getElementById("upercase").checked;
    const numberBox = document.getElementById("number").checked;
    const specialChar = document.getElementById("special").checked;

    let characters = '';
    if (lowerCase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (upperCase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberBox) characters += "0123456789";
    if (specialChar) characters += "!@#$%^&*()_+?><:{}[]";

    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
});



const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

    lengthSlider.addEventListener("input", () => {
        lengthValue.textContent = lengthSlider.value;
    });
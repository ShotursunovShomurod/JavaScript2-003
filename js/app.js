const heroSubmit = document.querySelector(".hero__submit"); 
const faxmark = document.querySelector(".fa-xmark");
const royxarBrg = document.querySelector(".royxar__brg");
const royxatOtish = document.querySelector(".royxat__otish");
const ism = document.querySelector(".ism");
const familya = document.querySelector(".familya");


royxatOtish.addEventListener("click", () => {
    checkGender();
});

heroSubmit.addEventListener("click", () => {
    openRoyxat();
});

faxmark.addEventListener("click", () => {
    exitRoyxat();
});

function openRoyxat() {
    royxarBrg.style.display = "inline-flex";
}

function exitRoyxat() {
    royxarBrg.style.display = "none";
}

function checkGender() {
    const genderInputs = document.querySelectorAll(".jins__card input[type='radio']");
    let selectedGender = '';

    genderInputs.forEach(input => {
        if (input.checked) {
            selectedGender = input.nextElementSibling.textContent;
        }
    });

    if (selectedGender) {
        const greeting = selectedGender === "Ayol" ? "Honim" : "Janob";
        const fullName = `${ism.value} ${familya.value}`;
        alert(`${greeting} ${fullName}`);
        
        // Clear input fields after showing the alert
        ism.value = '';
        familya.value = '';
        document.querySelector(".Elektron").value = '';
        document.querySelector(".password").value = '';
        genderInputs.forEach(input => input.checked = false);
        document.querySelectorAll(".day__inp select").forEach(select => select.selectedIndex = 0);
    }
}
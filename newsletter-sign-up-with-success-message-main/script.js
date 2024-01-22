// query for valid email 
const input = document.querySelector("#email")
const temp = document.querySelector("#templete")

// query for success card
const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");

//event that should happen after the email is valid
form.addEventListener("submit", (e) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {
        e.preventDefault();
        card_1.classList.add("hide");
        card_2.classList.remove("hide");
        templete.innerText = input.value
        }
    else {
        document.querySelector("#mail_description").innerText = "valid email required";

        document.querySelector('#mail_description').style.color = 'red';

        }
});

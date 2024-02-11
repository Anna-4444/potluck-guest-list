// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign button
const assignButton = document.querySelector(".assign");
// unordered list of guests/assigned dishes
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== ""){
        addToList(guest);
        clearInput();  
        updateGuestCount();   
    }
})

const clearInput = function () {
    guestInput.value = "";
}

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
}

const updateGuestCount = function () {
    const allGuests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = allGuests.length;

    if (allGuests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
}

const assignItems = function () {
    const potluckItem = ["potato salad", "hummus", "cookies", "fruit", "vegtables", "cake", "ice cream", "drinks", "baked beans", "macaroni salad", "chips", "buns"];
    const guests = document.querySelectorAll(".guest-list li");
    for (let guest of guests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItem.length);
        let randomPotluckItem = potluckItem[randomPotluckIndex];
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}`;
        assignedItems.append(listItem);
        potluckItem.splice(randomPotluckIndex, 1);
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
});
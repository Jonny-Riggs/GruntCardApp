const contactCollection = []
const contactList = []
// Importing the modules for the main.js
const addContacts = require("./contacts.js")
const dataLoad = require("./dataLoad.js")
const buttonFactory = require("./buttonFactory.js")
const inputFieldFactory = require("./inputFieldFactory.js")
const domBuilder = require("./domBuilder.js")
const cardFactory = require("./cardFactory.js")

const mom = addContacts("Angie ", "309-3098", "2202 McGavock")
contactCollection.push(mom)

const dad = addContacts("Bill", "226-1515", "2202 McGavock")
contactCollection.push(dad)


contactList.push(contactCollection)

console.log(contactList)

// Saving data to local storage
dataLoad.saveData(contactList, "Contact-List")
// Loading data from local storage
const loadTest = dataLoad.loadData("Contact-List")

// Final output DOM component reference
const output = document.querySelector(".output")

// Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment()

const createCardButton = buttonFactory("button--submit", "Create Card", function () {
    // 1. Get value of input field
    const userEntry = contactCollection.toString()

    // 2. Create card component with text inside
    output.appendChild(cardFactory("card", userEntry))

    cardTextInput.value = ""
})

const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)


domBuilder(fragment, ".output")
// output.appendChild(fragment)
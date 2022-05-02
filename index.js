const inputButton = document.getElementById('input-btn')
const inputLabel = document.getElementById('input-label')
const unorderedList = document.getElementById('unordered-list')
const deleteButton = document.getElementById('delete-btn')
const saveButton = document.getElementById('save-btn')

let myLeads = JSON.parse(localStorage.getItem("myLeads")) || []

for(let i=0; i<myLeads.length; i++){
    let newLi = document.createElement('li')
    newLi.innerHTML = `<a href="${myLeads[i]}" target="_blank"> ${myLeads[i]}</a>`
    unorderedList.appendChild(newLi)
}

inputButton.addEventListener('click' , function(){
    const inputText = inputLabel.value 
    inputLabel.value = ''
    myLeads.push(inputText)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    let newLi = document.createElement('li')
    newLi.innerHTML = `<a href="${inputText}" target="_blank"> ${inputText}</a>`
    unorderedList.appendChild(newLi)
}) 

deleteButton.addEventListener('click', function(){
    localStorage.clear()
    myLeads = []
    unorderedList.innerHTML = ""
})

saveButton.addEventListener('click', function(){
    const tabLink = "gkfuk" 
    myLeads.push(tabLink)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    let newLi = document.createElement('li')
    newLi.innerHTML = `<a href="${tabLink}" target="_blank"> ${tabLink}</a>`
    unorderedList.appendChild(newLi)
})


const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function(){
    allItems.innerHTML = ""; //click on the pencil icon, delete ALL grocery list that user input
})

//add event listener to the input box, so that user can click on the enter key to enter a new item on the list
userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter") //if user click on the Enter key, then call the function addItem()
      addItem();
})

//create the addItem function
function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    //when click on the specific grocery item, a line get through them, here using css style change
    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    //beforeend: because I want to insert the grocery items at the end of the list all the time. The name of the variable is h2
    allItems.insertAdjacentElement("beforeend", h2)

    //when writing on the input box, I also want to delete the text on the right side of icon pencil
    userInput.value = ""
}
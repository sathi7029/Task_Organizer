const item = document.querySelector("#item");
const submitBtn = document.querySelector("#submit-btn");
const toDoBox = document.querySelector("#to-do-box");

submitBtn.addEventListener("click", function() {
    if (item.value.trim() === "") {
        alert("Please add a task.");
    } else {
        addToDo(item.value);
        item.value = "";
    }
});

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
    });

    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove();
    });

    toDoBox.appendChild(listItem);
};


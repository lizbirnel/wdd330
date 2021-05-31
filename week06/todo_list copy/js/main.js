import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();
let showCompleted = false;
// Launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    //Add listeners
    const itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    });

    const clearItems = document.getElementById("clearItems");
    clearItems.addEventListener("click", (event) => {
        const list = toDoList.getList();
        if (list.length) {
            const confirmed = confirm("Are you sure you want to clear the entire list?");
            if (confirmed) {
                showCompleted = false;
                toDoList.clearList();
                updatePersistentData(toDoList.getList());
                refreshThePage();
            };
        };
    });

    const showCompleteBtn = document.getElementById("showComplete");
    const showIncompleteBtn = document.getElementById("showIncomplete");
    showCompleteBtn.addEventListener("click", (event) => {
        showCompleted = true;
        showCompleteBtn.classList.add("active");
        showIncompleteBtn.classList.remove("active");
        refreshThePage();
    });

    
    showIncompleteBtn.addEventListener("click", (event) => {
        showCompleted = false;
        showIncompleteBtn.classList.add("active");
        showCompleteBtn.classList.remove("active");
        refreshThePage();
    });

    //Procedural
    loadListObject();
    refreshThePage();
};

const loadListObject = () => {
    const storedList = localStorage.getItem("myToDoList");
    if (typeof storedList !== "string") return;
    const parsedList = JSON.parse(storedList);
    parsedList.forEach(itemObj => {
        const newToDoItem = createNewItem(itemObj._id, itemObj._item, itemObj._completed);
        toDoList.addItemToList(newToDoItem);
    });
};

const refreshThePage = () => {
    clearListDisplay();
    renderList();
    clearItemEntryField();
    setFocusOnItemEntry();
};

const clearListDisplay = () => {
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

const renderList = () => {
    const list = toDoList.getList();
    list.forEach(item => {
        if(showCompleted) {
            if(item.getComplete()) {
                buildListItem(item);
            }
        }
        else {
            if(!item.getComplete()) {
                buildListItem(item);
            }
        }
    });
};

const buildListItem = (item) => {
    const div = document.createElement("div");
    div.className = "item";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = item.getId();
    check.tabIndex = 0;
    check.checked = item.getComplete();
    addClickListenerToCheckbox(check);
    const label = document.createElement("label");
    label.htmlFor = item.getId();
    label.textContent = item.getItem();
    div.appendChild(check);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    container.appendChild(div);
};

const addClickListenerToCheckbox = (checkbox) => {
    checkbox.addEventListener("click", (event) => {
        //toDoList.removeItemFromList(checkbox.id);
        //const removedText = getLabelText(checkbox.id);
        //updateScreenReaderConfirmation(removedText, "removed from list");
        const item = toDoList.getItemById(checkbox.id);
        const completed = item.getComplete();
        if(completed) item.setComplete(false);
        else item.setComplete(true);
        updatePersistentData(toDoList.getList());
        setTimeout(() => {
            refreshThePage();
        }, 1000);
    });
};

const getLabelText = (checkboxId) => {
    return document.getElementById(checkboxId).nextElementSibling.textContent;
}

const updatePersistentData = (listArray) => {
    localStorage.setItem("myToDoList", JSON.stringify(listArray));
}

const clearItemEntryField = () => {
    document.getElementById("newItem").value = "";
};

const setFocusOnItemEntry = () => {
    document.getElementById("newItem").focus();
};

const processSubmission = () => {
    const newEntryText = getNewEntry();
    if (!newEntryText.length) return;
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText, false);
    toDoList.addItemToList(toDoItem);
    updatePersistentData(toDoList.getList());
    updateScreenReaderConfirmation(newEntryText, "added");
    refreshThePage();
};

const getNewEntry = () => {
    return document.getElementById("newItem").value.trim();
};

const calcNextItemId = () => {
    let nextItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nextItemId = list[list.length -1].getId() + 1;
    };
    return nextItemId;
};

const createNewItem = (itemId, itemText, itemCompleted) => {
    const toDo = new ToDoItem();
    toDo.setId(itemId);
    toDo.setItem(itemText);
    toDo.setComplete(itemCompleted);
    return toDo;
};

const updateScreenReaderConfirmation = (newEntryText, actionVerb) => {
    document.getElementById("confirmation").textContent = `${newEntryText} ${actionVerb}.`;
};
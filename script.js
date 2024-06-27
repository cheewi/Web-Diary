document.addEventListener("DOMContentLoaded", function() {
    const titleInput = document.getElementById("title-input");
    const contentInput = document.getElementById("content-input");
    const dateInput = document.getElementById("date-input");
    const addCardButton = document.getElementById("add-card-button");
    const cardsContainer = document.getElementById("cards-container");

    const addModal = document.getElementById("add-modal");
    const openAddModal = document.getElementById("open-add-modal");
    const closeAddModal = document.getElementById("close-add-modal");

    const editModal = document.getElementById("edit-modal");
    const closeEditModal = document.getElementById("close-edit-modal");
    const saveEditBtn = document.getElementById("save-edit-btn");
    const editTitleInput = document.getElementById("edit-title-input");
    const editContentInput = document.getElementById("edit-content-input");
    const editDateInput = document.getElementById("edit-date-input");

    const viewModal = document.getElementById("view-modal");
    const closeViewModal = document.getElementById("close-view-modal");
    const viewTitle = document.getElementById("view-title");
    const viewContent = document.getElementById("view-content");
    const viewDate = document.getElementById("view-date");

    const overlay = document.getElementById("overlay");

    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    let currentEditIndex = null;

    function saveCards() {
        localStorage.setItem("cards", JSON.stringify(cards));
    }

    function renderCards() {
        cardsContainer.innerHTML = '';
        cards.forEach((card, index) => {
            const cardElement = document.createElement("div");
            cardElement.className = "card";
            
            cardElement.innerHTML = `
                <div class="card-title-container">
                    <h3 class="card-title">${card.title}</h3>
                </div>
                <div class="card-content-container">
                    <p class="card-content">${card.content}</p>
                </div>
                <div class="card-footer">
                    <div class="card-date-container">
                        <p class="card-date">${card.date}</p>
                    </div>
                    <div class="card-buttons">
                        <button onclick="viewCard(${index})" class="read-button">
                            <img src="./asset/homepage/svg/read.svg" alt="">
                        </button>
                        <button onclick="editCard(${index})" class="read-button">
                            <img src="./asset/homepage/svg/edit.svg" alt="">
                        </button>
                        <button onclick="deleteCard(${index})" class="delete-button">
                            <img src="./asset/homepage/svg/trash.svg" alt="">
                        </button>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(cardElement);
        });
    }

    function addCard() {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        const date = dateInput.value;

        if (title && content && date) {
            cards.push({ title, content, date });
            saveCards();
            renderCards();
            titleInput.value = '';
            contentInput.value = '';
            dateInput.value = '';
            addModal.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "auto"; // Re-enable background scrolling
        }
        else { 
            alert('all card content need to be present')
        }
    }

    window.editCard = function(index) {
        currentEditIndex = index;
        editTitleInput.value = cards[index].title;
        editContentInput.value = cards[index].content;
        editDateInput.value = cards[index].date;
        editModal.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable background scrolling
    };

    function saveEdit() {
        const newTitle = editTitleInput.value.trim();
        const newContent = editContentInput.value.trim();
        const newDate = editDateInput.value;

        if (newTitle && newContent && newDate) {
            cards[currentEditIndex].title = newTitle;
            cards[currentEditIndex].content = newContent;
            cards[currentEditIndex].date = newDate;
            saveCards();
            renderCards();
            editModal.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "auto"; // Re-enable background scrolling
        }
    }

    window.deleteCard = function(index) {
        cards.splice(index, 1);
        saveCards();
        renderCards();
    };

    window.viewCard = function(index) {
        viewTitle.textContent = cards[index].title;
        viewContent.textContent = cards[index].content;
        viewDate.textContent = cards[index].date;
        viewModal.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable background scrolling
    }

    addCardButton.addEventListener("click", addCard);
    openAddModal.addEventListener("click", () => {
        addModal.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable background scrolling
    });
    closeAddModal.addEventListener("click", () => {
        addModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    });
    closeEditModal.addEventListener("click", () => {
        editModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    });
    saveEditBtn.addEventListener("click", saveEdit);
    closeViewModal.addEventListener("click", () => {
        viewModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    });

    renderCards();
});

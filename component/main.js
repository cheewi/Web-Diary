import { addCard } from './create.js';
import { editCard, saveEdit } from './edit.js';
import { viewCard } from './view.js';
import { deleteCard } from './delete.js';

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

    window.editCard = function(index) {
        editCard(cards, index, editTitleInput, editContentInput, editDateInput, editModal, overlay);
    };

    window.deleteCard = function(index) {
        deleteCard(cards, index, saveCards, renderCards);
    };

    window.viewCard = function(index) {
        viewCard(cards, index, viewTitle, viewContent, viewDate, viewModal, overlay);
    }

    addCardButton.addEventListener("click", () => addCard(cards, saveCards, renderCards, titleInput, contentInput, dateInput, addModal, overlay));
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
    saveEditBtn.addEventListener("click", () => saveEdit(cards, currentEditIndex, saveCards, renderCards, editTitleInput, editContentInput, editDateInput, editModal, overlay));
    closeViewModal.addEventListener("click", () => {
        viewModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    });

    renderCards();
});

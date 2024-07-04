import { addCard } from './createCard.js';
import { editCard, saveEdit } from './editCard.js';
import { viewCard } from './viewCard.js';
import { deleteCard } from './deleteCard.js';
import { updateDashboard } from '../common-components/dashboard.js';
import { warningModalComponent } from './warningModal.js';

document.addEventListener("DOMContentLoaded", function() {
    // Grab the IDs for all the elements for creating the cards
    const titleInput = document.getElementById("title-input");
    const contentInput = document.getElementById("content-input");
    const dateInput = document.getElementById("date-input");
    const addCardButton = document.getElementById("add-card-button");
    const cardsContainer = document.getElementById("cards-container");

    const addModal = document.getElementById("add-modal");
    const openAddModal = document.getElementById("open-add-modal");
    const closeAddModal = document.getElementById("close-add-modal");

    const warningModal = document.getElementById("warning-modal");
    const closeWarningModal = document.getElementById("close-warning-modal");

    // Grab the IDs for all the elements for editing the cards
    const editModal = document.getElementById("edit-modal");
    const closeEditModal = document.getElementById("close-edit-modal");
    const saveEditBtn = document.getElementById("save-edit-btn");
    const editTitleInput = document.getElementById("edit-title-input");
    const editContentInput = document.getElementById("edit-content-input");
    const editDateInput = document.getElementById("edit-date-input");

    // Grab the IDs for all the elements for viewing the cards
    const viewModal = document.getElementById("view-modal");
    const closeViewModal = document.getElementById("close-view-modal");
    const viewTitle = document.getElementById("view-title");
    const viewContent = document.getElementById("view-content");
    const viewDate = document.getElementById("view-date");

    // Grab the ID for the overlay for when the modals are active
    const overlay = document.getElementById("overlay");

    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    let currentEditIndex = null;

    function saveCards() {
        localStorage.setItem("cards", JSON.stringify(cards));
    }

    function renderCards() {
        // Initialize the inner HTML
        cardsContainer.innerHTML = '';

        // Loop through the cards and create elements for each
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
                            <img src="../asset/homepage/svg/read.svg" alt="">
                        </button>
                        <button onclick="editCard(${index})" class="edit-button">
                            <img src="../asset/homepage/svg/edit.svg" alt="">
                        </button>
                        <button onclick="deleteCard(${index})" class="delete-button">
                            <img src="../asset/homepage/svg/trash.svg" alt="">
                        </button>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(cardElement);
        });
        updateDashboard(cards);
    }

    // Edit card at the specified card index 
    window.editCard = function(index) {
        currentEditIndex = index;
        editCard(cards, index, editTitleInput, editContentInput, editDateInput, editModal, overlay);
    };

    // Delete card at the specified card index
    window.deleteCard = function(index) {
        deleteCard(cards, index, saveCards, renderCards);
    };

    // View card at the specified card
    window.viewCard = function(index) {
        currentEditIndex = index;
        viewCard(cards, index, viewTitle, viewContent, viewDate, viewModal, overlay);
    };

    // Watching the click event for the add card
    addCardButton.addEventListener("click", () => addCard(cards, saveCards, renderCards, titleInput, contentInput, dateInput, addModal, overlay));

    // Watching the click event for the modal cards
    openAddModal.addEventListener("click", () => {
        // Toggle the display for the modal and the overlay
        addModal.style.display = "block";
        overlay.style.display = "block";
        // Disable background scrolling
        document.body.style.overflow = "hidden"; 
    });

    closeAddModal.addEventListener("click", () => {
        // Toggle the display for the modal and the overlay
        addModal.style.display = "none";
        overlay.style.display = "none";
        // Re-enable background scrolling
        document.body.style.overflow = "auto"; 
    });

    closeEditModal.addEventListener("click", () => {
        // Toggle the display for the modal and the overlay
        editModal.style.display = "none";
        overlay.style.display = "none";
        // Re-enable background scrolling
        document.body.style.overflow = "auto"; 
    });

    saveEditBtn.addEventListener("click", () => saveEdit(cards, currentEditIndex, saveCards, renderCards, editTitleInput, editContentInput, editDateInput, editModal, overlay));

    closeViewModal.addEventListener("click", () => {
        // Toggle the display for the modal and the overlay
        viewModal.style.display = "none";
        overlay.style.display = "none";
        // Re-enable background scrolling
        document.body.style.overflow = "auto"; 
    });

    closeWarningModal.addEventListener("click", () => {
        warningModal.style.display = "none";
    });

    window.onclick = (event) => {
        if (event.target == warningModal) {
            warningModal.style.display = "none";
        }
    };

    renderCards();
});

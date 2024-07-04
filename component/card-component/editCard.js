class editCardComponent extends HTMLElement {
    connectedCallback() {
        // Html for the edit pop up modal
        this.innerHTML = `
        <div class="modal" id="edit-modal">
            <div class="modal-content">
                <span class="close" id="close-edit-modal">&times;</span>
                <div class="card-title-container-modal">
                    <h3 class="card-title-modal">EDIT DIARY ENTRY</h3>
                </div>
                <div class="title-input-container">
                    <input type="text" id="edit-title-input" placeholder="Title">
                </div>
                <div class="content-input-container">
                    <textarea id="edit-content-input" placeholder="Content" required></textarea>
                </div>
                <div class="modal-footer">
                    <div class="date-container">
                        <input type="date" id="edit-date-input">
                    </div>
                    <button class="purple-button small no-shadow" id="save-edit-btn">
                        SAVE
                    </button>
                </div>
            </div>
        </div>
        `;
    }
}
// Defining the card modal 
customElements.define('edit-card', editCardComponent);

// Export the function along with its parameters
export function editCard(cards, index, editTitleInput, editContentInput, editDateInput, editModal, overlay) {
    // Giving the edit card the previous contents that it had
    editTitleInput.value = cards[index].title;
    editContentInput.value = cards[index].content;
    editDateInput.value = cards[index].date;

    // Display the edit modal and overlay
    editModal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

// Export the function along with its parameters
export function saveEdit(cards, currentEditIndex, saveCards, renderCards, editTitleInput, editContentInput, editDateInput, editModal, overlay) {
    const newTitle = editTitleInput.value.trim();
    const newContent = editContentInput.value.trim();
    const newDate = editDateInput.value;

    // Code for the case that if all the info is present
    if (newTitle && newContent && newDate) {
        cards[currentEditIndex].title = newTitle;
        cards[currentEditIndex].content = newContent;
        cards[currentEditIndex].date = newDate;
        saveCards();
        renderCards();
        editModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    } else {
        // Display warning modal if any required field is missing
        const warningModal = document.getElementById("warning-modal");
        warningModal.style.display = "block";

        // Disable closing add/edit modals while warning is open
        editModal.querySelector('.close').style.pointerEvents = 'none';

        // Close warning modal on clicking the close button
        const closeWarningModalButton = document.getElementById("close-warning-modal");
        closeWarningModalButton.onclick = () => {
            warningModal.style.display = "none";
            editModal.querySelector('.close').style.pointerEvents = 'auto';
        };

        // Close warning modal when clicking outside of it
        window.onclick = (event) => {
            if (event.target == warningModal) {
                warningModal.style.display = "none";
                editModal.querySelector('.close').style.pointerEvents = 'auto';
            }
        };
    }
}

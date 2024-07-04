import { updateDashboard } from "../common-components/dashboard.js";

class createCardComponent extends HTMLElement {
    connectedCallback() {
        // Html for the create card modal
        this.innerHTML = `
            <div class="modal" id="add-modal">
                <div class="modal-content">
                    <span class="close" id="close-add-modal">&times;</span>
                    <div class="card-title-container-modal">
                        <h3 class="card-title-modal">ADD DIARY ENTRY</h3>
                    </div>
                    <div class="title-input-container">
                        <input type="text" id="title-input" placeholder="Title" required>
                    </div>
                    <div class="content-input-container">
                        <textarea id="content-input" placeholder="Content" required></textarea>
                    </div>
                    <div class="modal-footer">
                        <div class="date-container">
                            <input type="date" id="date-input" required>
                        </div>
                        <button class="purple-button small no-shadow" id="add-card-button">
                            ADD
                        </button>
                    </div>
                </div>
            </div>

            <warning-modal></warning-modal>
        `;
    }
}

// Defining the modal card for the html
customElements.define('create-card', createCardComponent);

// Exporting this card with its parameters
export function addCard(cards, saveCards, renderCards, titleInput, contentInput, dateInput, addModal, overlay) {
    // Retrieve input values and trim whitespace
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    const date = dateInput.value;

    // Check if all required fields are filled
    if (title && content && date) {
        // Store the timestamp
        const timestamp = new Date().getTime();

        // Add new card to the cards array
        cards.push({ title, content, date, timestamp });

        // Save updated cards and re-render the list
        saveCards();
        renderCards();
        updateDashboard(cards);

        // Clear input fields and hide the add modal and overlay
        titleInput.value = '';
        contentInput.value = '';
        dateInput.value = '';
        addModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    } else {
        // Display warning modal if any required field is missing
        const warningModal = document.getElementById("warning-modal");
        warningModal.style.display = "block";

        // Disable closing add/edit modals while warning is open
        addModal.querySelector('.close').style.pointerEvents = 'none';

        // Close warning modal on clicking the close button
        const closeWarningModalButton = document.getElementById("close-warning-modal");
        closeWarningModalButton.onclick = () => {
            warningModal.style.display = "none";
            addModal.querySelector('.close').style.pointerEvents = 'auto';
        };

        // Close warning modal when clicking outside of it
        window.onclick = (event) => {
            if (event.target == warningModal) {
                warningModal.style.display = "none";
                addModal.querySelector('.close').style.pointerEvents = 'auto';
            }
        };
    }
}

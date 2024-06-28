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
                        <input type="text" id="title-input" placeholder="Title">
                    </div>

                    <div class="content-input-container">
                        <textarea id="content-input" placeholder="Content"></textarea>
                    </div>

                    <div class="modal-footer">
                        <div class="date-container">
                            <input type="date" id="date-input">
                        </div>
                        <button class="purple-button small no-shadow" id="add-card-button">
                            ADD
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}
//Defining the modal card for the html
customElements.define('create-card', createCardComponent);

// Exporting this card with its parameters

export function addCard(cards, saveCards, renderCards, titleInput, contentInput, dateInput, addModal, overlay) {
    // Retrieve input values and trim whitespace
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    const date = dateInput.value;

    // Check if all required fields are filled
    if (title && content && date) {
        // Add new card to the cards array
        cards.push({ title, content, date });

        // Save updated cards and re-render the list
        saveCards();
        renderCards();

        // Clear input fields and hide the add modal and overlay
        titleInput.value = '';
        contentInput.value = '';
        dateInput.value = '';
        addModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    } 

    // Catch case for when not all the info is present 
    else {
        alert('All card content needs to be present');
    }
}




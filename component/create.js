class createCardComponent extends HTMLElement {
    connectedCallback() {
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

customElements.define('create-card', createCardComponent);


export function addCard(cards, saveCards, renderCards, titleInput, contentInput, dateInput, addModal, overlay) {
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
    } else { 
        alert('all card content need to be present');
    }
}



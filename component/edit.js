class editCardComponent extends HTMLElement {
    connectedCallback() {
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
                    <textarea id="edit-content-input" placeholder="Content"></textarea>
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

customElements.define('edit-card', editCardComponent);


export function editCard(cards, index, editTitleInput, editContentInput, editDateInput, editModal, overlay) {
    editTitleInput.value = cards[index].title;
    editContentInput.value = cards[index].content;
    editDateInput.value = cards[index].date;
    editModal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

export function saveEdit(cards, currentEditIndex, saveCards, renderCards, editTitleInput, editContentInput, editDateInput, editModal, overlay) {
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

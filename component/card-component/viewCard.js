class viewCardComponent extends HTMLElement {
    connectedCallback() {

        // Html for the view card
        this.innerHTML = `
        <div class="modal" id="view-modal">
            <div class="modal-content">
                <span class="close" id="close-view-modal">&times;</span>

                <div class="card-title-container-modal">
                    <h3 class="card-title-modal">VIEW DIARY ENTRY</h3>
                </div>

                <div>
                    <div class="box-title-container">
                        <p class="box-title">DIARY TITLE</p>
                    </div>
                    <div class="title-input-container">
                        <h3 class="card-title" id="view-title"></h3>
                    </div>
                </div>

                <div>
                    <div class="box-title-container">
                        <p class="box-title">DIARY ENTRY</p>
                    </div>
                    <div class="content-input-container">
                        <p class="card-content" id="view-content"></p>
                    </div>
                </div>

                <div>
                    <div class="box-title-container">
                        <p class="box-title">DIARY DATE</p>
                    </div>
                    <div class="date-container-view">
                        <p class="card-date" id="view-date"></p>
                    </div>
                </div>
            </div>
        </div>  
        `;
    }
}
// Define the component for the html
customElements.define('view-card', viewCardComponent);

// Export the function with all its parameters 

export function viewCard(cards, index, viewTitle, viewContent, viewDate, viewModal, overlay) {
    // Display the title, content, and date of the card at the specified index
    viewTitle.textContent = cards[index].title;
    viewContent.textContent = cards[index].content;
    viewDate.textContent = cards[index].date;

    // Show the view modal and overlay
    viewModal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

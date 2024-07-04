class warningModalComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="modal" id="warning-modal">
                <div class="modal-content">
                    <span class="close" id="close-warning-modal">&times;</span>
                    <div class="warning-container">
                        <img src="../asset/homepage/img/confused-cat.png" alt="Warning" class="warning-img">
                        <h3 class="warning-title">ALL INPUT FIELD REQUIRED !!!</h3>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('warning-modal', warningModalComponent);
export { warningModalComponent };
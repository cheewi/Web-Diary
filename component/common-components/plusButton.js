class plusButton extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <button class="plus-button" id="open-add-modal">
                <svg class="plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <g mask="url(#mask0_21_345)">
                    <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                </g>
                </svg>
            </button>
        `;
    }
}

customElements.define('plus-button', plusButton);
export {plusButton}
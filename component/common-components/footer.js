class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const customPath = this.getAttribute('custom-path')
        this.innerHTML = `
            <footer class="footer-container">
                <div class="footer-inner-container">
                    <div class="footer-left-container">
                        <div class="footer-img-container">
                            <img src="${customPath}asset/footer/black-cat-jumppng.png" alt="cat jumping" class="footer-icon">
                        </div>
                        <p class="footer-name">
                            VAN SOCHETTA
                        </p>
                    </div>
                    <div class="footer-right-container">
                        <p class="footer-copyright">
                            © 2024 CHEEWI CAMBODIA , ALL RIGHTS RESERVED 
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);
export { Footer };
class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-container">
                <div class="nav-inner-container">
                    <div class="nav-left-container">
                        <div class="logo-container">
                        <a href="../index.html" class="logo-link">
                            <h2 class="logo-heading">
                                MEMOIR
                            </h2>
                            <p class="logo-sub-heading">
                                A sense of 
                                <span class="purple-sub-heading">identity</span>
                                within 
                                <span class="purple-sub-heading">pages</span>
                            </p>
                        </a>
                        </div>
                    </div>
                    <div class="nav-right-container">
                        <a href="#" class="about">ABOUT</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);
export { NavBar };

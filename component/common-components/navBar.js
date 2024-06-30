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
                            <h2 class="logo-heading">DIARY</h2>
                            <p class="logo-sub-heading">
                                A sense of 
                                <span class="purple-sub-heading">identity</span>
                                within 
                                <span class="purple-sub-heading">pages</span>
                            </p>
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

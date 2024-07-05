class homepageHeroComponent extends HTMLElement {
    constructor() {
        super();
    }
    // Custom homepageHeroComponent 
    connectedCallback() {
        // The homepageHeroComponent is the component for the hero body of the homepage
        this.setAttribute('class', 'hero-container')
        this.innerHTML = `
            <div  class="hero-inner-container">
                <div class="img-container">
                    <div class="img-inner-container">
                        <img src="./asset/landing-page/girl-working-on-laptop.jpg" alt="girl reading">
                    </div>
                </div>
                <div class="detail-container">
                    <div class="detail-inner-container">
                        <h2 class="detail-heading">
                            DISCOVER 
                            <span class="heading-purple">YOURSELF</span> 
                            WITHIN YOUR PERSONAL 
                            <span class="heading-purple">DIGITAL DIARY </span>
                        </h2>
                        <p class="detail-sub-heading">
                            CAPTURE YOUR PERSONAL MOMENTS AND REFLECT ON YOUR JOURNEY WITHTIN YOUR OWN PRIVATE HAVEN
                        </p>
                    </div>
                    <div class="button-container">
                        <button class="purple-button large">
                            <a href="./pages/homepage.html" class="start-link">START</a>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-homepage', homepageHeroComponent);
export { homepageHeroComponent };
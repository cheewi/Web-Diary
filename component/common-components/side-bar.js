class sideBarComponent extends HTMLElement {
    connectedCallback() {

        // Html for the side bar component
        this.innerHTML = `
            <aside class="side-bar" id="side-bar">
                <span class="close" id="side-bar-close">&times;</span>
                <div class="side-bar-profile-container">
                    <div class="side-bar-profile">
                        <div class="side-bar-img-container">
                            <img src="../asset/homepage/img/cat-with-headphones.png" alt="">
                        </div>
                        <h5 class="profile-title">Cheewawi</h5>
                    </div>
                </div>
        
                <div class="side-bar-page-container">
                    <div class="side-bar-page">
                        <div class="side-bar-page-icon-container">
                            <img src="../asset/homepage/svg/home.svg" alt="">
                        </div>
                        <h5 class="page-title">HOMEPAGE</h5>
                    </div>
                </div>
        
                <div class="dashboard-container">
                    <h3 class="dashboard-container-title">DIARY ENTRY LOG</h3>
                    <div id="dashboard">
                        <dashboard-card id="total-cards"></dashboard-card>
                        <dashboard-card id="cards-this-week"></dashboard-card>
                        <dashboard-card id="cards-this-month"></dashboard-card>
                    </div>
                </div>
            </aside>
        `;
    }
}
// Defining the side bar modal
customElements.define('side-bar', sideBarComponent);
export {sideBarComponent}
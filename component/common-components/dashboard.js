// Define the dashboard card component
class dashboardCardComponent extends HTMLElement {
    connectedCallback() {

        // Code for dashbord card for the side bar
        this.setAttribute('class', 'dashboard-card');
        this.innerHTML = `
            <div class="dashboard-img-container">
                <img src="../asset/homepage/img/cat-in-box.png" alt="" class="dashboard-img">
            </div>
            <div class="textBox">
                <h4 class="dashboard-title">
                    Diary Log
                </h4>
                <p class="dashboard-content">
                    Diary Entries this week : 
                </p>
            <div>
        `;
    }
}

customElements.define('dashboard-card', dashboardCardComponent);

// Function to update the dashboard
export function updateDashboard(cards) {
    // Getting all the ids from the html for the cards and the container
    const totalCardsElement = document.querySelector("#total-cards .dashboard-content");
    const cardsThisWeekElement = document.querySelector("#cards-this-week .dashboard-content");
    const cardsThisMonthElement = document.querySelector("#cards-this-month .dashboard-content");


    // Calculating the date for the cards
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    let totalCards = 0;
    let cardsThisWeek = 0;
    let cardsThisMonth = 0;

    // Condition  for the cards amount

    cards.forEach(card => {
        const cardDate = new Date(card.timestamp);
        totalCards++;
        if (cardDate >= startOfWeek) {
            cardsThisWeek++;
        }
        if (cardDate >= startOfMonth) {
            cardsThisMonth++;
        }
    });

    cardsThisWeekElement.textContent = `Diary Entries this week: ${cardsThisWeek}`;
    cardsThisMonthElement.textContent = `Diary Entries this month: ${cardsThisMonth}`;
    totalCardsElement.textContent = `Total Diary Entries: ${totalCards}`;
}



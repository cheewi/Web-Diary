class AboutSection extends HTMLElement {
    constructor() {
        super();
        this.data = [
            {
                title: 'ABOUT ME',
                img: '../asset/about/cat-poof-removebg-preview (1).png',
                info: `Hello, My name is Van Sochetta, I am an 18-year-old. With no prior coding experience, I embarked on this journey to create a <span class="purple-span">Web Diary Application</span> purely out of passion(and per the requirement). This project has been a significant part of my personal growth, allowing me to explore and expand.`,
                signoff: `Re-tell your Story through <span class="purple-span">Memoir!</span>`,
                imgAlt: 'Profile Picture',
                cardClass: 'text-left',
                imgClass1 : 'no-display-img',
                imgClass2 : '',
                textALign : '',
            },
            {
                title: '',
                img: '../asset/about/person-looking-at-computer.jpg',
                info: '',
                signoff: '',
                imgAlt: 'Person looking at computer',
                cardClass: 'no-margin',
                imgClass2 : '',
                textALign : '',
            },
            {
                title: '',
                img: '../asset/about/note-taking.jpg',
                info: '',
                signoff: '',
                imgAlt: 'Note taking',
                cardClass: 'no-margin no-display-1',
                imgClass2 : '',
                textALign : '',
            },
            {
                title: 'ABOUT MEMOIR',
                img: '../asset/about/cat-stare-removebg-preview (1).png',
                info: `Memoir is a Web-based Diary application designed to help you capture your <span class="purple-span">life's stories and memories.</span> It was built from the ground up using <span class="purple-span">vanilla</span> JavaScript, HTML, and CSS. This approach allows for a lightweight and efficient application that prioritizes speed and ease of use.`,
                signoff: `Jot down the <span class="purple-span">highlights of your day</span> from significant events to fleeting moments with <span class="purple-span">Memoir!</span>`,
                imgAlt: 'Memoir Description Image',
                cardClass: '',
                imgClass1 : '',
                imgClass2 : 'no-display-img',
                textALign : 'text-right',
            },
            {
                title: '',
                img: '../asset/about/note-taking.jpg',
                info: '',
                signoff: '',
                imgAlt: 'Note taking',
                cardClass: 'no-margin no-display-2',
                imgClass1 : '', 
                imgClass2 : '',
                textALign : '',
            }
        ];
    }

    connectedCallback() {
        this.setAttribute('class', 'about-body-container')
        this.innerHTML = `
                <div class="about-inner-container">
                    ${this.data.map(this.renderCard).join('')}
                </div>
        `;
    }

    renderCard({ title, img, info, signoff, imgAlt, cardClass, imgClass1, imgClass2, textALign }) {
        if (title) {
            return `
                <div class="about-card ${cardClass}">
                    <div class="about-card-container ${textALign}">
                        <div class="about-title-container">
                            <div class="about-img-container ${imgClass1}">
                                <img src="${img}" alt="${imgAlt}" class="about-title-img">
                            </div>
                            <h3 class="about-title">${title}</h3>
                            <div class="about-img-container ${imgClass2}">
                                <img src="${img}" alt="${imgAlt}" class="about-title-img">
                            </div>
                        </div>
                        <div class="about-info-container">
                            <p class="about-info">${info}</p>
                            <br>
                            <p class="about-info-signoff">${signoff}</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="about-card ${cardClass}">
                    <img src="${img}" alt="${imgAlt}" class="about-img">
                </div>
            `;
        }
    }
}

customElements.define('about-section', AboutSection);
export { AboutSection };

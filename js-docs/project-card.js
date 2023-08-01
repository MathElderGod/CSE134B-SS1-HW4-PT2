// skeleton for project card super class
class ProjectCard extends HTMLElement {
    // Called once when document.createElement('project-card') is called, or
    // the element is written into the DOM directly as <project-card>
    constructor() {
        super();
        // Attach a shadow root to the element.
        this.attachShadow({mode: 'open'});
    }

    /**
    * Called when the .data property is set on this element.
    *
    * For Example:
    * let projectCard = document.createElement('project-card'); // Calls constructor()
    * projectCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
    *
    * @param {Object} data - The data to pass into the <project-card>, must be of the
    *                        following format:
    *                        {
    *                          'title': 'string',
    *                           'imageSrc': 'string',
    *                           'imageAlt': 'string',
    *                           'description': 'string',
    *                           'linkHref': 'string',
    *                           'linkTxt': 'string',
    *                           'author': 'string',
    *                           'date': 'string',
    *                           'status': 'string'
    *                        }
    */
    set data(data) {
        // If nothing was passed in, return
        if (!data) return;

        this.shadowRoot.innerHTML = ``;

        this.shadowRoot.innerHTML = `
            <style>
                @import url('/styles/css-files/project-cards.css');
            </style>
            <h2 class='project-title'>${data.title}</h2>
            <img class='project-img' src='${data.imageSrc}' alt='${data.imageAlt}'>
            <p class='project-description'>"${data.description}"</p>
            <a class='project-link' href='${data.linkHref}'>${data.linkTxt}</a>
            <div class='project-details'>
                <p class='project-author'>Author: ${data.author}</p>
                <p class='project-date'>Date: ${data.date}</p>
                <p class='project-status'>Status: ${data.status}</p>
            </div>
        `;
    }
}

// Finally, I'm defining my new custom element. The first argument to customElements.define is the tag name I want to use in my HTML.
// The second argument is the class that I defined above. So whenever I add <project-card> to my HTML, it will create an instance of my ProjectCard class.
customElements.define('project-card', ProjectCard);
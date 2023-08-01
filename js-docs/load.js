function init() {
    const loadLocalButton = document.getElementById('load-local-button');
    const loadRemoteButton = document.getElementById('load-remote-button');

    loadLocalButton.addEventListener('click', function () {
        loadLocalData();
    });

    loadRemoteButton.addEventListener('click', function () {
        loadRemoteData();
    });
}

function loadLocalData() {
    // Retrieve the data from local storage
    let localStorageData = JSON.parse(localStorage.getItem('project-data'));

    if (localStorageData === null) {
        return;
    }

    let localCardsContainer = document.getElementById("local-storage-cards");

    //clear existing content in container
    localCardsContainer.innerHTML = '';

    for (let currentProjectCard = 0; currentProjectCard < localStorageData.length; currentProjectCard++) {
        let projectCard = document.createElement('project-card');

        projectCard.data = {
            'title': localStorageData[currentProjectCard].title,
            'imageSrc': localStorageData[currentProjectCard].imageSrc,
            'imageAlt': localStorageData[currentProjectCard].imageAlt,
            'description': localStorageData[currentProjectCard].description,
            'linkHref': localStorageData[currentProjectCard].linkHref,
            'linkTxt': localStorageData[currentProjectCard].linkTxt,
            'author': localStorageData[currentProjectCard].author,
            'date': localStorageData[currentProjectCard].date,
            'status': localStorageData[currentProjectCard].status
        };

        localCardsContainer.append(projectCard);
    }

}

function loadRemoteData() {
    alert('clicked remote button!');
}
window.addEventListener('DOMContentLoaded', init);
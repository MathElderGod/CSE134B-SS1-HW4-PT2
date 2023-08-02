function init() {
    const loadLocalButton = document.getElementById('load-local-button');
    const loadRemoteButton = document.getElementById('load-remote-button');

    loadLocalButton.addEventListener('click', function() {
        loadLocalData();
    });

    loadRemoteButton.addEventListener('click', function() {
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

    for (let currentProjectCard = 0; currentProjectCard < localStorageData
        .length; currentProjectCard++) {
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

function populateRemoteContainer(remoteStorageData) {
    if (remoteStorageData === null) {
        return;
    }

    let remoteCardsContainer = document.getElementById("remote-storage-cards");

    //clear existing content in container
    remoteCardsContainer.innerHTML = '';

    for (let currentProjectCard = 0; currentProjectCard < remoteStorageData
        .length; currentProjectCard++) {
        let projectCard = document.createElement('project-card');

        projectCard.data = {
            'title': remoteStorageData[currentProjectCard].title,
            'imageSrc': remoteStorageData[currentProjectCard].imageSrc,
            'imageAlt': remoteStorageData[currentProjectCard].imageAlt,
            'description': remoteStorageData[currentProjectCard].description,
            'linkHref': remoteStorageData[currentProjectCard].linkHref,
            'linkTxt': remoteStorageData[currentProjectCard].linkTxt,
            'author': remoteStorageData[currentProjectCard].author,
            'date': remoteStorageData[currentProjectCard].date,
            'status': remoteStorageData[currentProjectCard].status
        };

        remoteCardsContainer.append(projectCard);
    }
}

function loadRemoteData() {
    fetch('https://api.jsonbin.io/v3/b/64c99bb99d312622a38a3f24', {
            method: 'GET',
            headers: {
                'X-Master-Key': '$2b$10$Z.LBmk3KSHsnlCf4lBVuruyhvOyc9dIoGhgs8GdpNliWY538BDuwi'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("The Network Response was not ok!");
            } else {
                return response.json();
            }

        }).then(data => {
            populateRemoteContainer(data.record);
        }).catch(error => {
            console.error(
                'An Error Occured Fetching The Data From the Remote Server: ',
                error);
        });
}
window.addEventListener('DOMContentLoaded', init);
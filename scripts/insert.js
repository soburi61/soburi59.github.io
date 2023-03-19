
let url = `contents/test.html`;

function loadContent(url){
    const mainContent = document.getElementById('main-content');
    fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error(`HTTP error:${response.status}`);
            }
            return response.text();
        })
        .then((html) => mainContent.innerHTML = html)
        .catch((error) => mainContent.innerHTML =  `<p>Could not fetch verse: ${error}</p>`);
}


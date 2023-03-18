const mainContent = document.getElementById('main-content');
const url = `contents/test.html`;

fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error(`HTTP error:${response.status}`);
        }
        return response.text();
    })
    .then((html) => mainContent.innerHTML = html)
    .catch((error) => mainContent.innerHTML =  `<p>Could not fetch verse: ${error}`);
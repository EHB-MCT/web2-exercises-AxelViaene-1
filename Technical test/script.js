const test = {
    method: "GET",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzNCIsIm5iZiI6MTYzNDY2MzAzNCwiZXhwIjoxNjM3MjU1MDM0LCJpYXQiOjE2MzQ2NjMwMzR9.4q8VvyI81ySS1ltvIW3tTgkhVdjw9MLGffqCWTMNOtI",
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

window.onload = () => {
    console.log('loaded');


    async function getData() {
        let response = await fetch('https://api.aniapi.com/v1/anime', test);
        return await response.json();

    }
    getData().then(data => {
        showData(data);
        console.log(data);
    });
}

function showData(data) {
    let coverLink = JSON.stringify(data.data.documents[10].cover_image).replace(/^"(.*)"$/, '$1');
    document.getElementById('cover').src = coverLink;
    console.log(coverLink);
    document.getElementById('title').innerText = JSON.stringify(data.data.documents[10].titles.en).replace(/^"(.*)"$/, '$1');
}
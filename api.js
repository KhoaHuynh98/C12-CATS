const api = "https://api.thecatapi.com/v1/breeds";

fetch(api) 
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let img = document.createElement("img");
            img.src = data[i].image.url;
            img.style.width = "50%";
            img.style.height = "50%";
            img.style.cursor = "pointer";
            // img.style.display = block;
            img.id = data[i].id;
            document.body.appendChild(img);
        }
    })
    .catch(() => {
        console.log("Khong lay duoc du lieu");
    })
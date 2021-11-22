var key = config.SECRET_API_KEY;
var ID = [];
function getID() {
    let searchQuery = document.getElementById('searchQuery').value
    searchQuery = searchQuery.replaceAll(" ", "%2B");
    fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + searchQuery, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
            "x-rapidapi-key": key
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log(data);
            for (var i = 0; i < 4; i++) {
                ID[i] = data.items[i].id;
            }
        })
        .catch(err => {
            console.error(err);
        });


        setTimeout(function(){
            getAudio0();
            getAudio1();
            getAudio2();
            getAudio3();
        
        },1800)
}
var ytDATA = [];
function getAudio0() {
        fetch("https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=" + ID[0] + "&geo=DE", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
                "x-rapidapi-key": key
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                console.log(data.link["140"][0])
                // console.log(data.title);
                // console.log(data.thumb);
                // console.log(data.link["140"][0]);
                // ytDATA[j] = {
                //     Title: data.title,
                //     Thumbnail: data.thumb,
                //     Link: data.link["140"][0]
                // }
       
        document.getElementById('cont0').innerHTML = ` <div class="cards">
        <p>${data.title}</p>
        <img src="${data.thumb}" alt="xyz"> <br>
        <audio src="${data.link["140"][0]}" controls></audio>
        </div>`;
            })
        .catch(err => {
            console.error(err);
        });
    }

    function getAudio1() {
        fetch("https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=" + ID[1] + "&geo=DE", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
                "x-rapidapi-key": key
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);

                // console.log(data.link["140"][0])
                // console.log(data.title);
                // console.log(data.thumb);
                console.log(data.link["140"][0]);
                // ytDATA[j] = {
                //     Title: data.title,
                //     Thumbnail: data.thumb,
                //     Link: data.link["140"][0]
                // }
       
        document.getElementById('cont1').innerHTML = ` <div class="cards">
        <p>${data.title}</p>
        <img src="${data.thumb}" alt="xyz"><br>
        <audio src="${data.link["140"][0]}" controls></audio>
        </div>`;
            })
        .catch(err => {
            console.error(err);
        });
    }


    function getAudio2() {
        fetch("https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=" + ID[2] + "&geo=DE", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
                "x-rapidapi-key": key
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);

                // console.log(data.link["140"][0])
                // console.log(data.title);
                // console.log(data.thumb);
                console.log(data.link["140"][0]);
                // ytDATA[j] = {
                //     Title: data.title,
                //     Thumbnail: data.thumb,
                //     Link: data.link["140"][0]
                // }
       
        document.getElementById('cont2').innerHTML = ` <div class="cards">
        <p>${data.title}</p>
        <img src="${data.thumb}" alt="xyz"> 
        <audio src="${data.link["140"][0]}" controls></audio>
        </div>`;
            })
        .catch(err => {
            console.error(err);
        });
    }

    function getAudio3() {
        fetch("https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=" + ID[3] + "&geo=DE", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
                "x-rapidapi-key": key
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                // console.log(data.link["140"][0])
                // console.log(data.title);
                // console.log(data.thumb);
                // console.log(data.link["140"][0]);
                // ytDATA[j] = {
                //     Title: data.title,
                //     Thumbnail: data.thumb,
                //     Link: data.link["140"][0]
                // }
       
        document.getElementById('cont3').innerHTML = ` <div class="cards">
        <p>${data.title}</p>
        <img src="${data.thumb}" alt="xyz"> <br>
        <audio src="${data.link["140"][0]}" controls></audio>
        </div>`;
            })
        .catch(err => {
            console.error(err);
        });
    }
console.log(ID);
// console.log(ytDATA);

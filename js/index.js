const requestURL ="./json/musicals.json";

async function fetchShowsJson(){
    const response = await fetch(requestURL);
    const shows = await response.json();
    return shows;
}

fetchShowsJson().then (shows =>{
    for (let index=0;index<shows.musicals.length;index++){
    const showSection = document.getElementById('showSection');

    let id = shows.musicals[index].id;
    let poster = shows.musicals[index].poster;
    let title = shows.musicals[index].title;
    let premiere = shows.musicals[index].premiere;
    let basis= shows.musicals[index].basis;
    let music = shows.musicals[index].music;
    let lyrics = shows.musicals[index].lyrics;
    let book = shows.musicals[index].book;

    showSection.innerHTML +=`
                <div class="card" style="width: 18rem;">
                    <img src="${poster} class="cardImg" alt="play poster">
                    <div class="card-body">
                        <h2 class="title"> ${title}</h5>
                        <h7 class="premiere"> Premiere: ${premiere}</h7>
                        <h6> <span class="negrita">Based on:</span> ${basis}</h5>
                        <h6> <span class="negrita">Music:</span> ${music}</h5>
                        <h6> <span class="negrita">Lyrics:</span> ${lyrics}</h5>
                        <h6> <span class="negrita">Book:</span> ${book}</h5>
                    </div>
                </div>

    `
    };
})
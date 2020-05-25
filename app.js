const Card = ({ src, text, name, saito}) =>`
<div class="col-4 mb-5">
    <div class="card">
      <img src="${src}" class="card-img-top" alt="...">
      <div class="card-body">
        <a href="${saito}" target="_blank>
         <h5 class="card-title">${text}</h5>
         <p class="card-text">${name}</p>
        </a>
      </div>
    </div>
</div>
`;

$('#search-btn').on('click', () => {
    // 検索ワードの取得
    const word = $('#search-word').val()
    // Ajax開始
    $.ajax({
        url: 'https://itunes.apple.com/search',
        type: 'GET',
        dataType:'json',
        data: {
            term: word,
            country: 'jp',
        }
    }).done((response) => {
        console.log(response)
        for (let i = 0; i < 50; i++){

            let url = response.results[i].artworkUrl100
            let album = response.results[i].collectionName
            let artist = response.results[i].artistName
            let sit = response.results[i].collectionViewUrl
            $('#results').append(Card({ src: url, text: album, name: artist, saito: sit,}));
            console.log(url)
            console.log(album)
            console.log(artist)
            console.log(sit)
        }
    }).fail((error) => {
        console.log(error)
    })
})
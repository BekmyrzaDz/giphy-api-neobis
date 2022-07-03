window.addEventListener('DOMContentLoaded', () => {
  let apiKey = 'QuzbuH9QMSYZ6mkDc3D3xsuwSullqPHc';

  document.getElementById('BtnSearch').addEventListener('click', event => {
    event.preventDefault();

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=`;
    let str = document.getElementById('search').value.trim();
    url = url.concat(str);

    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(content => {
        console.log(content.data);
        console.log('META', content.meta);

        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');

        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        figcaption.textContent = content.data[0].title;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        let output = document.querySelector('.output');
        output.insertAdjacentElement('afterbegin', figure);
        document.getElementById('search').value = '';
      })
      .catch(error => {
        console.error(error);
      });
  });
});
window.addEventListener('DOMContentLoaded', () => {
  let apiKey = 'QuzbuH9QMSYZ6mkDc3D3xsuwSullqPHc';

  document.getElementById('BtnSearch').addEventListener('click', event => {
    event.preventDefault();

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=50&q=`;
    let str = document.getElementById('search').value.trim();
    url = url.concat(str);

    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(content => {
        console.log(content.data);
        console.log('META', content.meta);

        content.data.map((item, index) => {
          let figure = document.createElement('figure');
          let img = document.createElement('img');
          let figcaption = document.createElement('figcaption');

          img.src = content.data[index].images.downsized.url;
          img.alt = content.data[index].title;
          figcaption.textContent = content.data[index].title;

          figure.appendChild(img);
          figure.appendChild(figcaption);

          let output = document.querySelector('.output');
          output.insertAdjacentElement('afterbegin', figure);
          document.getElementById('search').value = '';
        });
      })
      .catch(error => {
        console.error(error);
      });

    document.querySelector('.clear').clear.addEventListener('click', event => {
      event.preventDefault();

      document.querySelectorAll('figure').map(item => {
        item.remove();
      });
    });
  });
});
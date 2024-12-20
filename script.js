document.querySelector('.newmassage').addEventListener('submit', function (event) {
  event.preventDefault();

  const user = document.querySelector('#user').value;
  const userName = document.querySelector('#user option:checked').textContent;
  const time = document.querySelector('#time').value;
  const massage = document.querySelector('#massage').value;

  const messageTemplate = `
    <div class="${user}">
      <div class="info">
        <p class="user">${userName}</p>
        <p class="time">${time}</p>
      </div>
      <div class="img"></div>
      <div class="massage">${massage}</div>
    </div>
  `;

  const chatContainer = document.querySelector('.container');
  chatContainer.innerHTML += messageTemplate;

  document.querySelector('#massage').value = '';
  document.querySelector('#time').value = '5 minute ago';
});

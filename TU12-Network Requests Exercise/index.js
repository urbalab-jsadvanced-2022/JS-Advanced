const loading = document.querySelector('span');
const result = document.querySelector('div');
const form = document.querySelector('form');
const btn = document.querySelector('.more');

btn.addEventListener('click', (event) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = 'xavi12p';
  form.prepend(input);
});

loading.hidden = true;

form.addEventListener('submit', async (event) => {
  loading.hidden = false;
  event.preventDefault();

  await fetchAll();
  loading.hidden = true;
});

async function fetchAll() {
  const inputs = document.querySelectorAll('input');
  for (let input of inputs) {
    if (input.type === 'text') {
      const response = await fetch(
        'https://api.github.com/users/' + input.value,
        { method: 'GET' }
      );
      const data = await response.json();
      console.log(data);
    }
  }
}

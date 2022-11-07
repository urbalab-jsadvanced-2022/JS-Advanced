fetch('https://api.github.com/repos/prettier/prettier/commits', {
  method: 'GET',
})
  .then((response) => response.json())
  .then((data) => console.log(data[0].commit.author.email));

async function getLatestCommitEmail() {
  const response = await fetch(
    'https://api.github.com/repos/prettier/prettier/commits'
  );
  console.log(response.headers.get('last-modified'));
  response.headers.forEach((value, key) => {
    console.log(key);
  });
  const data = await response.json();
  console.log(data[0].commit.author.email);
}

getLatestCommitEmail();

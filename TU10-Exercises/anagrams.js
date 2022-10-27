try {
  const input = [
    'nap',
    'teachers',
    'cheaters',
    'PAN',
    'ear',
    'era',
    'hectares',
  ];

  const solution = anagrams(input);

  const now = new Date();
  now.setDate(now.getDate() + 1);

  document.cookie =
    'anagrams=' + solution.join() + ';expires=' + now.toUTCString();
} catch (error) {
  console.log(error);
}

function anagrams(list) {
  const anagramsMap = new Map();

  list.forEach((item) => {
    const letters = [];
    for (let letter of item.toLowerCase()) {
      letters.push(letter);
    }
    const ordered = letters.sort();
    anagramsMap.set(ordered.join(''), item);
  });

  return Array.from(anagramsMap.values());
}

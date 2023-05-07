const { readFile, writeFile } = require('fs').promises;

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf-8');
    const second = await readFile('./content/second.txt', 'utf-8');

    await writeFile(
      './content/result-promises.txt',
      `This is awesome: ${first} ${second}`,
      { flag: 'a' } // append to the file instead of overwriting
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();

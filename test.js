import fs from 'node:fs/promises';

const readPjson = async () => {
  const pJsonPath = new URL('./package.json', import.meta.url).pathname; // __dirname not available in ES modules 
  console.log(JSON.parse(await fs.readFile(pJsonPath, 'utf-8')));
}


// readble version of above code

// async function readPackageJson() {
//   const filePath = new URL('./package.json', import.meta.url);
//   const data = await fs.readFile(filePath, 'utf-8');
//   const json = JSON.parse(data);
//   console.log(json);
// }

// readPackageJson();

const writeFile = async () => {
    const newFile = new URL('./demo.js', import.meta.url).pathname;
    await fs.writeFile(newFile, `console.log("hello world")`);
}

//readPjson()
writeFile();
const fs = require("fs").promises;

const jsonFile = "example.json";

async function main() {
  try {
    await readFile(jsonFile); 
    await writeOnFile(jsonFile, "Hello World"); 
    await readFile(jsonFile); 
  } catch (error) {
    console.error("Error:", error);
  }
}

async function readFile(file) {
  try {
    const data = await fs.readFile(file, "utf8");
    console.log("Contenido del archivo:", data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

async function writeOnFile(file, content) {
  const jsonContent = JSON.stringify({ msg: content }, null, 2);
  try {
    await fs.writeFile(file, jsonContent, "utf8");
    console.log("Archivo escrito correctamente");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

main();

import fs from 'fs';
import path from 'path';

import { processOperations } from './services';

// Check for input file argument
if (process.argv.length < 3) {
  throw new Error('Usage: node app.js <input_file>');
}

const inputFilePath = path.resolve(process.cwd(), process.argv[2]);

// Read and parse the input JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    throw new Error(`Error reading file ${inputFilePath}:`, err.message);
  }

  let operations;
  try {
    operations = JSON.parse(data);
  } catch (parseErr) {
    throw new Error('Error parsing JSON:', parseErr.message);
  }

  // Process operations and calculate fees
  const fees = processOperations(operations);

  // Output each fee (each on a new line)
  fees.forEach((fee) => process.stdout.write(`${fee}\n`));
});

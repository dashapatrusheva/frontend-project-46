import fs from 'fs';
import path from 'path';

const genDiff = (filepath1, filepath2) => {
  const data1 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8'));
  console.log(data1, data2);
};

export default genDiff;

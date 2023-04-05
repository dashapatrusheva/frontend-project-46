import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import buildObject from './buildObj.js';

const genDiff = (path1, path2) => {
  const data1 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), path1), 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), path2), 'utf-8'));
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const diff = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, state: 'added', value: data2[key] };;
    };
    if (!_.has(data2, key)) {
      return { key, state: 'deleted', value: data1[key] };
    };
    if (data1[key] === data2[key]) {
    return { key, state: 'equaled', value: data1[key] };
    };
    if (data1[key] !== data2[key]) {
      return { key, state: 'changed', value1: data1[key], value2: data2[key] };
    };
  });
  return buildObject(diff);
};

export default genDiff;
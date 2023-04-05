import _ from 'lodash';

const buildObject = (diff) => {
  const makeObject = diff.map((obj) => {
  if (obj.state === 'added') {
    return `  + ${obj.key}: ${obj.value}\n`;
  };
  if (obj.state === 'deleted') {
    return `  - ${obj.key}: ${obj.value}\n`;
  };
  if (obj.state === 'equaled') {
    return `    ${obj.key}: ${obj.value}\n`;
  };
  if (obj.state === 'changed') {
    return `  - ${obj.key}: ${obj.value1}\n  + ${obj.key}: ${obj.value2}\n`;
  };
  });
  return `{\n${makeObject.join('')}}`;
};
export default buildObject;
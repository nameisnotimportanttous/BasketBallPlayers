const fs = require('fs');
const _ = require('lodash');

const envVariables = require('../config/.env.variables');
console.log('build env is running', envVariables);
const createENVFile = (directory, variables) => {
  _.each(variables, variable => {
    fs.appendFileSync(`./${directory}/.env`, variable + '\n');
  });
};

const buildEnv = () => {
  _.each(envVariables, (value, key) => {
    console.log('this is the value and key', value, key);
    fs.writeFileSync(`./${key}/.env`, '');
    createENVFile(key, value);
  });
};

buildEnv();

// Helpers for logging

import chalk from 'chalk'
import fs from 'fs';

export const logSuccess = (...args) => {
  console.log(chalk.green(...args));
  wirteDataToLocal(...args);
};

export const logInfo = (...args) => {
  console.log(chalk.yellow(...args));
  wirteDataToLocal(...args);
};

export const logError = (...args) => {
  console.log(chalk.red(...args));
  wirteDataToLocal(...args);
};

function wirteDataToLocal(...args) {
  fs.writeFile(
    'log.txt', 
    args.toString() + "\n",
    { flag: "a+" },
    function (error) {
      if (error != null) {
        console.log('writeTimesToFile fail')
      }
  })
}
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const {
  loggerErrorMessage,
  loggerInfoMessage,
} = require('../logMessages/common.message.js');

const seeders = [
  '20230424094557-demo-user',
  'admin',
  'user'
];

function getFileName(seedFiles) {
  return seedFiles.join(' ');
}

async function runInitialSeeders() {
  const { stdout, stderr } = await exec(
    `npx sequelize-cli db:seed --seed ${getFileName(seeders)}`
  );
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
  if (stdout) {
    loggerInfoMessage('stdout', { stdout });
  } else {
    loggerErrorMessage('stderr', { stderr });
  }
}

runInitialSeeders();

#!/usr/bin/env node

const verifyBranchName = require('./verifyBranchName');
const colors = require('colors');
const dotenv = require('dotenv');
const {branchNamingRules} = require('./config');

dotenv.config();

const branchNames = process.env.HUSKY_GIT_STDIN.split('\n')
  .filter(Boolean)
  .map(line => line.split(' ')[2])
  .filter(ref => ref.startsWith('refs/heads/'))
  .map(ref => ref.substr('refs/heads/'.length));

const errorsCounter = branchNames.reduce((result, branchName) => {
  const error = verifyBranchName(branchNamingRules, branchName);

  if (error) {
    console.log(colors.yellow.bold(branchName), colors.red(error));

    return result + 1;
  }

  console.log(colors.green.bold(branchName));

  return result;
}, 0);

process.exit(errorsCounter);

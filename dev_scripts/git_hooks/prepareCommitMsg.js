#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const colors = require('colors');

const {JIRA_TAG, regexpTicket} = require('./config');

const sandboxIssueRegex = new RegExp(`${JIRA_TAG}-0+`, 'g');
const gitParams = process.env.HUSKY_GIT_PARAMS.split(' ');
const messageFile = gitParams[0];
const commitType = gitParams[1];
const message = fs.readFileSync(messageFile, { encoding: 'utf-8' });
const branchName = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' });
const issueTag = regexpTicket.test(branchName) && branchName.match(regexpTicket)[0];
const isSandboxBranch =
  sandboxIssueRegex.test(branchName) && branchName.match(sandboxIssueRegex).length;
const isMergeBranch = commitType === 'merge';

if (issueTag && !isMergeBranch && !isSandboxBranch) {
  if (
    message.startsWith(issueTag) ||
    message.startsWith('fixup!') ||
    message.startsWith('squash!')
  ) {
    return;
  }

  const newMessage = `${issueTag.toUpperCase()} ${message}`;

  fs.writeFileSync(messageFile, newMessage, { encoding: 'utf-8' });
  console.log(colors.yellow.bold(`Jira issue ${issueTag} prepended to commit message`));
}

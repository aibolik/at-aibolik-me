#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const boxOptions = {
  borderColor: 'yellow',
  borderStyle: 'round',
  padding: 1,
  margin: 1,
};

const primary = chalk.white;
const accent = chalk.cyan;

const data = {
  name: primary('Aibol Kussain /'),
  handle: accent('aibolik'),
  work: primary('Software Engineer at Quandoo'),
  twitter: accent('twitter.com/aibolik_'),
  github: accent('github.com/aibolik'),
  linkedin: accent('linkedin.com/in/aibolkussain'),
  web: accent('aibolik.github.io'),
  npx: accent('@aibolik/me'),
  labelWork: primary.bold('      Work:'),
  labelTwitter: primary.bold('   Twitter:'),
  labelGitHub: primary.bold('    GitHub:'),
  labelLinkedIn: primary.bold('  LinkedIn:'),
  labelWeb: primary.bold('       Web:'),
  labelCard: primary.bold('      Card:')
}

const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, boxOptions)))
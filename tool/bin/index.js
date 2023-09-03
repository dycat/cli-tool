#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    })
    
    if (args['--start']) {
        console.log(chalk.bgCyanBright('start the app'));
    }
    
} catch (e) {
    console.log(chalk.yellow(e.message));
    console.log();
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.whiteBright('--start\tStarts the app')}
    ${chalk.whiteBright('--build\tBuilds the app')}
    `);
}
#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const getConfig = require("../src/config/config-mgr");
const start = require("../src/commands/start");

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    })
    
    if (args['--start']) {
        const config = getConfig();
        start(config);
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
#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const pkgUp = require('pkg-up');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    })
    
    if (args['--start']) {
        const pkgPath = pkgUp.sync({cwd: process.cwd()});
        const pkg = require(pkgPath);
        if (pkg.tool) {
            console.log('Found configuration', pkg.tool);
        } else {
            console.log(chalk.yellow('Cound not find configuration, using default'));
        }
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
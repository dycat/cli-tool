const chalk = require('chalk');

module.export = function start(config) {
    console.log(chalk.bgCyanBright('    Start the app'));
    console.log(chalk.gray('Received configuration in start -'), config);
}
const chalk = require('chalk');
const pkgUp = require('pkg-uo');

module.exports = function getConfig() {
    const pkgPath = pkgUp.sync({cwd: process.cwd()});
    const pkg = require(pkgPath);
    if (pkg.tool) {
        console.log('Found configuration', pkg.tool);
    } else {
        console.log(chalk.yellow('Cound not find configuration, using default'));
        return { port: 1234 };
    }
   
}
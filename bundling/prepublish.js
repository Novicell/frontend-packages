const ora = require('ora');
const timeout = 1000 * 60 * 2;
const buildCommand = `npm run build`;

function prePublish(packageAlias, packagePath) {
    const spinner = ora({
        text: `Building "${packageAlias}" library`,
        spinner: {interval: 0, frames: ['…']}
    }).start();

    try {
        const result = require('child_process').execSync(buildCommand, {timeout, cwd: packagePath});
    } catch (error) {
        spinner.fail(`Could not finish building "${packageAlias}" library`);
        console.log(error.stdout.toString());
        process.exit();
    }

    spinner.succeed(`Finished building "${packageAlias}" library`);
}

module.exports = prePublish;

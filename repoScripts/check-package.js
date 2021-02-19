const fs = require('fs')
const path = require('path')

/* load file correctly */

if (process.argv.length != 3) {
  throw new Error('check-package takes exactly one argument, which is the path to a package.json\n')
}

const file = process.argv[2]

const basename = path.win32.basename(file)

if (basename.toLowerCase() != 'package.json') {
  throw new Error('file must be a package.json\n')
}

const package = JSON.parse(fs.readFileSync(file))

/* check syntax */


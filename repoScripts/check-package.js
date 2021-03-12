const fs = require('fs')
const path = require('path')
const glob = require('glob')

/* load package correctly */

if (process.argv.length != 3) {
  throw new Error('check-package takes exactly one argument, which is the path to a package containing a package.json\n')
}

const packageDir = process.argv[2]

const packageFile = path.join(packageDir, 'package.json')

// Will only check for the presence of stories in these kinds of packages
const packsWithStorybook = ['vue', 'react']

let package
try {
  package = JSON.parse(fs.readFileSync(packageFile))
} catch (err) {
  throw new Error(`Cannot find a package.json in this directory:\n${packageDir}`)
}


/* info message */

infoMsg(`Checking ${packageDir}`)
infoMsg('Non-optional settings will be logged like this:')
err("I use the word 'must'.")
infoMsg('Optional settings will be logged like this:')
warn("I use the word 'should'.")
infoMsg('----------------------------\n')


// Only used to display a summary message saying whether everything is okay, something SHOULD be changed or if something MUST be changed
// every check will display the specific warning/error if there are any
const failstack = []

/* ------------------------------------ */
/* ---------- package.json -------------*/
/* ------------------------------------ */

const name = package.name

const files = package.files

const main = package.main

if (package.scripts) {
  var { wipe, build, prepublishOnly, test } = package.scripts
}

/* check syntax of package.json */

//* package.name

failstack.push(checkJSON({ prop: name, propName: 'name', optional: false, type: 'string', customCheck: () => {

  const splitName = name.split('/')
  const prefix = splitName[0]

  if (prefix !== '@novicell' || splitName.length === 1 || splitName[1] === '') {
    err('"name" must be prefixed with "@novicell/".')
    return 'err'
  }

}}))


//* package.files

failstack.push(checkJSON({ prop: files, propName: 'files', optional: true, type: 'array', customCheck: () => {

  if (!files.includes('dist')) {
    warn('"files" should contain the exact value "dist".')
    return 'warn'
  }

}}))


//* package.main

failstack.push(checkJSON({ prop: main, propName: 'main', optional: false, type: 'string', customCheck: () => {

  const splitPath = main.split('/')
  const prefix = splitPath[0]

  if (prefix !== 'dist' || splitPath.length === 1 || splitPath[1] === '') {
    warn('"main" should point to a module inside "dist/".')
    return 'warn'
  }

}}))


//* package.scripts.wipe

failstack.push(checkJSON({ prop: wipe, propName: 'scripts.wipe', optional: true, type: 'string', customCheck: () => {

  let err = false
  // split on / or space
  const splitPath = wipe.split(/[\/ ]/g)

  const processor = splitPath[0] // should be 'bash'
  const dir = splitPath[splitPath.length - 2] // should be 'scripts'
  const script = splitPath[splitPath.length - 1] // should be 'wipe'

  if (processor !== 'bash') {
    err('"scripts.wipe" must run the wipe script with bash.')
    err = true
  }

  if (dir !== 'scripts' || script !== 'wipe') {
    err('"scripts.wipe" must point to "/scripts/wipe" from the root of the monorepo.')
    err = true
  }

  return err

}}))


//* package.scripts.build

failstack.push(checkJSON({ prop: build, propName: 'scripts.build', optional: false, type: 'string' })) // only check presence


//* package.scripts.prepublishOnly

failstack.push(checkJSON({ prop: prepublishOnly, propName: 'scripts.prepublishOnly', optional: false, type: 'string', customCheck: () => {

  if (prepublishOnly !== 'npm run build') {
    err('"scripts.prepublishOnly" must contain the exact value of "npm run build".')
    return 'err'
  }

}}))


//* package.test

failstack.push(checkJSON({ prop: test, propName: 'scripts.test', optional: true, type: 'string' })) // only check presence



/* ------------------------------------ */
/* ---------- files --------------------*/
/* ------------------------------------ */

failstack.push(checkStories(packageDir))




/* ------------------------------------ */
/* ---------- utils --------------------*/
/* ------------------------------------ */

function pass(msg) {
  // green
  console.log('\x1b[32m%s\x1b[0m', `  ✔ ${msg}`)
}

function warn(msg) {
  // yellow
  console.warn('\x1b[33m%s\x1b[0m', `  ? ${msg}`)
}

function err(msg) {
  // red
  console.error('\x1b[31m%s\x1b[0m', `  ! ${msg}`)
}

function infoMsg(msg) {
  // blue
  console.error('\x1b[34m%s\x1b[0m', `${msg}`)
}

function wrongType(prop, type, logger) {
  let severity
  if (logger === warn) {
    severity = 'should'
  } else { // err
    severity = 'must'
  }

  logger(`"${prop}" ${severity} be of type ${type}.`)
}

function noProp(prop, logger) {
  let severity
  if (logger === warn) {
    severity = 'should'
  } else { // err
    severity = 'must'
  }

  logger(`"${prop}" ${severity} be provided.`)
}

// every check will either warn or error in the console if it is not fulfilled
function checkJSON({ prop, propName, optional, type, customCheck = () => { return } }) {

  // returns true if everything passed, false if an obligatory prop failed and 'warn' if only something optional failed
  let failstack = []
  // does it exist or not?
  if (prop) {

    // type check logic depends on which type prop should be
    let typeCheck

    switch(type) {
      case 'string':
        typeCheck = typeof prop === 'string'
        break

      case 'array':
        typeCheck = Array.isArray(prop)
        break
    }

    // checking if the prop has the type
    if (typeCheck) {
      // the unique logic to test on the property is passed in
      failstack.push(customCheck())

    } else {
      // shout it in the console
      wrongType(propName, type, err)

      failstack.push('err')
    }

  } else {
    // shout it in the console
    noProp(propName, optional ? warn : err)

    failstack.push(optional ? 'warn' : 'err')
  }

  if (failstack.includes('err')) {
    return 'err'
  } else if (failstack.includes('warn')) {
    return 'warn'
  }
}

function checkStories(packageDir) {
  const storiesDir = path.join(packageDir, 'stories')

  // Only check if package type is in the list of package types that should have stories
  const packageType = name.split(/\/|-/)[1]
  if (!packsWithStorybook.includes(packageType)) return

  // Will call a warning if there is not stories dir OR if the stories dir is empty
  if (!fs.existsSync(storiesDir)) {
    warn("This package should have a 'stories' directory for displaying its components.")
    return 'warn'

  } else { // stories dir exists
    const storyFiles = glob.sync('*.stories.js', { cwd: storiesDir })

    if (storyFiles.length <= 0) {
      warn("There should be at least one story file for this component in the 'stories' directory.")
      return 'warn'
    }
  }
}



infoMsg('\n----------------------------')
if (failstack.includes('err')) {
  err('\x1b[4mThere are properties in this package.json that MUST be corrected. See above.')

} else if (failstack.includes('warn')) {
  warn('\x1b[4mThere are properties in this package.json that SHOULD be corrected, but it is not obligatory. See above.')

} else {
  pass('\x1b[4mEverything in this package.json is as it should be.')
}

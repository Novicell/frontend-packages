const { info } = require('console')
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

/* grab important props */

const name = package.name

const files = package.files

const main = package.main

if (package.scripts) {
  var { wipe, build, prepublishOnly } = package.scripts
}

/* info message */

infoMsg(`Checking ${file}`)
infoMsg('Non-optional settings will be logged like this:')
err("I use the word 'must'.")
infoMsg('Optional settings will be logged like this:')
warn("I use the word 'should'.")
infoMsg('----------------------------\n')


/* check syntax */

// To see if everything went well.
const failstack = []

//* package.name

failstack.push(check({ prop: name, propName: 'name', optional: false, type: 'string', customCheck: () => {

  const splitName = name.split('/')
  const prefix = splitName[0]

  if (prefix !== '@novicell' || splitName.length === 1 || splitName[1] === '') {
    err('"name" must be prefixed with "@novicell/".')
    return 'err'
  }

}}))


//* package.files

failstack.push(check({ prop: files, propName: 'files', optional: true, type: 'array', customCheck: () => {

  if (!files.includes('dist')) {
    warn('"files" should contain the exact value "dist".')
    return 'warn'
  }

}}))


//* package.main

failstack.push(check({ prop: main, propName: 'main', optional: false, type: 'string', customCheck: () => {

  const splitPath = main.split('/')
  const prefix = splitPath[0]

  if (prefix !== 'dist' || splitPath.length === 1 || splitPath[1] === '') {
    warn('"main" should point to a module inside "dist/".')
    return 'warn'
  }

}}))


//* package.scripts.wipe

failstack.push(check({ prop: wipe, propName: 'scripts.wipe', optional: true, type: 'string', customCheck: () => {

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

failstack.push(check({ prop: build, propName: 'scripts.build', optional: false, type: 'string' })) // only check presence


//* package.scripts.prepublishOnly

failstack.push(check({ prop: prepublishOnly, propName: 'scripts.prepublishOnly', optional: false, type: 'string', customCheck: () => {

  if (prepublishOnly !== 'npm run build') {
    err('"scripts.prepublishOnly" must contain the exact value of "npm run build".')
    return 'err'
  }

}}))



/* utils */

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
function check({ prop, propName, optional, type, customCheck = () => { return } }) {

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


infoMsg('\n----------------------------')
if (failstack.includes('err')) {
  err('\x1b[4mThere are properties in this package.json that MUST be corrected. See above.')
} else if (failstack.includes('warn')) {
  warn('\x1b[4mThere are properties in this package.json that SHOULD be corrected, but it is not obligatory. See above.')
} else {
  pass('\x1b[4mEverything is this package.json is as it should be.')
}

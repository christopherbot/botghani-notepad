/* eslint-disable consistent-return, no-console */

/*
 * Use the command:
 *
 *   yarn run create-ui {componentName}
 *
 * to render a folder in:
 *
 *   ../src/components/{componentName}
 *
 * and two files:
 *
 *   {componenyName}.jsx
 *   {componentName}.style.js
 */

const path = require('path')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2), {
  boolean: ['stateless'],
})
const maxstache = require('maxstache')
const changeCase = require('change-case')
const mkdirp = require('mkdirp')

const type = argv.stateless ? 'stateless-component' : 'component'

const COMPONENTS_FOLDER = '../src/components/'

function formatComponentName(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

let name = argv._[0]
if (!name) {
  process.exit(0)
}

name = changeCase.pascal(name)

let targetfolder = argv._[1]
targetfolder = targetfolder ? `${formatComponentName(targetfolder)}/` : ''

const cwd = process.cwd()
const dir = path.resolve(__dirname, [COMPONENTS_FOLDER, targetfolder, name].join(''))

function template(input, output) {
  const data = {
    pascal: changeCase.pascal(name),
    param: changeCase.paramCase(name),
  }
  return new Promise((resolve, reject) => {
    fs.readFile(input, 'utf8', (readErr, str) => {
      if (readErr) return reject(readErr)

      str = maxstache(str, data)
      fs.writeFile(output, str, writeErr => {
        if (writeErr) return reject(writeErr)
        resolve()
      })
    })
  })
}

function write() {
  mkdirp(dir, err => {
    if (err) throw err
    const files = [
      template(path.resolve(__dirname, 'templates/Component.template'), path.resolve(dir, `${name}.jsx`)),
      template(path.resolve(__dirname, 'templates/Component.style.template'), path.resolve(dir, `${name}.style.js`)),
    ]

    Promise.all(files)
      .then(() => {
        console.log(`Created new ${name} ${type} at ${dir}`)
      })
      .catch(console.error)
  })
}

fs.stat(dir, (err) => {
  if (err) {
    write()
  } else {
    console.log(`Path at ${path.relative(cwd, dir)} already exists! Try another name`)
  }
})

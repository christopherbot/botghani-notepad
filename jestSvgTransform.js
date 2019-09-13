const path = require('path')

/*
 * Basic SVG mocking that is sufficient for shallow rendering snapshot testing.
 * This uses this filename of the SVG to output e.g. <SvgName /> so that we can
 * tell different SVGs apart in the snapshots.
 */
module.exports = {
  process(src, filePath) {
    const fileName = path.parse(filePath).name
    const firstLetter = fileName[0].toUpperCase()

    return `module.exports = "${firstLetter}${fileName.substring(1)}"`
  },
}

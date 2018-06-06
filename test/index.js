const colorContrast = require('..')
const test = require('ava')

test('it works', t => {
  t.truthy(colorContrast('#fff', '#eee') < 2)
  t.truthy(colorContrast('#fff', '#000') > 20)
})

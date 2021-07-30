var rule = require("../../../lib/rules/required-type")
var RuleTester = require("eslint").RuleTester

var ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2015 }
})
ruleTester.run("required-type", rule, {
  valid: [{
    filename: 'test.vue',
    code: '<template><FormulateInput type="demo"></FormulateInput></template>',
    options: ['always']
  }],
  invalid: [{
    filename: 'test.vue',
    code: '<template><FormulateInput></FormulateInput></template>',
    options: ['always']
  }]
});

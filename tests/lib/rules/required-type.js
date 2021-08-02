var rule = require("../../../lib/rules/required-type")
var RuleTester = require("eslint").RuleTester

var ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2015 }
})
ruleTester.run("required-type", rule, {
  valid: [
    {
      filename: 'test.vue',
      code: '<template><FormulateInput type="demo"></FormulateInput></template>',
      options: ['always']
    },
    {
      filename: 'test.vue',
      code: '<template><formulate-input type="demo"></formulate-input></template>',
      options: ['always']
    },
    {
      filename: 'test.vue',
      code: '<template><FormulateInput type="demo" validation=""></FormulateInput></template>',
      options: ['always']
    },
    {
      filename: 'test.vue',
      code: '<template><FormulateInput validation="" type="demo"></FormulateInput></template>',
      options: ['always']
    },
    {
      filename: 'test.vue',
      code: '<template><div><FormulateInput type="demo"></FormulateInput></div></template>',
      options: ['always']
    },
    {
      filename: 'test.vue',
      code: '<template><div><FormulateInput :type="demo"></FormulateInput></div></template>',
      options: ['always']
    },
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: '<template><FormulateInput></FormulateInput></template>',
      options: ['always'],
      errors: [
        {
          message: "formulate-input type prop is required",
          type: 'VStartTag',
          line: 1
        }
      ]
    },
    {
      filename: 'test.vue',
      code: '<template><FormulateInput validation=""></FormulateInput></template>',
      options: ['always'],
      errors: [
        {
          message: "formulate-input type prop is required",
          type: 'VStartTag',
          line: 1
        }
      ]
    },
    {
      filename: 'test.vue',
      code: '<template><div><FormulateInput validation=""></FormulateInput></div></template>',
      options: ['always'],
      errors: [
        {
          message: "formulate-input type prop is required",
          type: 'VStartTag',
          line: 1
        }
      ]
    },
    {
      filename: 'test.vue',
      code: '<template><div><FormulateInput type=""></FormulateInput></div></template>',
      options: ['always'],
      errors: [
        {
          message: "formulate-input type prop value is required",
          type: 'VStartTag',
          line: 1
        }
      ]
    },
    {
      filename: 'test.vue',
      code: '<template><div><formulate-input></formulate-input></div></template>',
      options: ['always'],
      errors: [
        {
          message: "formulate-input type prop is required",
          type: 'VStartTag',
          line: 1
        }
      ]
    },
    {
      filename: 'test.vue',
      code: '<template><div><formulate-input :type=""></formulate-input></div></template>',
      options: ['always'],
      errors: [
        {
          message: "formulate-input type prop value is required",
          type: 'VStartTag',
          line: 1
        }
      ]
    }
  ]
});

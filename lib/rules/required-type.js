
"use strict";

function getAttribute(node, name, value) {
  return (
    node.startTag.attributes.find(
      /**
       * @param {VAttribute | VDirective} node
       * @returns {node is VAttribute}
       */
      (node) => {
        return (
          !node.directive &&
          node.key.name === name &&
          (value === undefined ||
            (node.value != null && node.value.value === value))
        )
      }
    ) || null
  )
}

module.exports = {
  meta: {
    docs: {
      description: "disable console", // 规则描述
      category: "Possible Errors",    // 规则类别
      recommended: false
    },
    schema: [
      {
        enum: ['always', 'never']
      }
    ]
  },

  create: function(context) {
    if (context.parserServices.defineTemplateBodyVisitor == null) {
      const filename = context.getFilename()
      if (path.extname(filename) === '.vue') {
        context.report({
          loc: { line: 1, column: 0 },
          message:
            'Use the latest vue-eslint-parser. See also https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error.'
        })
      }
      return {}
    }
    return context.parserServices.defineTemplateBodyVisitor(
      {
        /** @param {VElement} node */
        "VElement[name='formulateinput']"(node){
          let hasType = getAttribute(node, 'type')
          if(!hasType){
            context.report({
              node,
              message: 'formulate-input need have type prop'
            })
          }
        }
      }
    )
  }
}

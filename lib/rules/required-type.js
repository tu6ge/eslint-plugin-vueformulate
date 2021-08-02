
"use strict";

function validation(node, context) {
  const typeNode = node.startTag.attributes.find(res => res.key.name=== 'type')

  if(!typeNode){
    context.report({
      node: node.startTag,
      message: 'formulate-input type prop is required',
    })
    return;
  }

  if(typeNode.value.value === ""){
    context.report({
      node: node.startTag,
      message: 'formulate-input type prop value is required',
    })
  }
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
    ],
    // fixable: 'code',
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
          validation(node, context)
        },
        /** @param {VElement} node */
        "VElement[name='formulate-input']"(node){
          validation(node, context)
        }
      }
    )
  }
}

'use strict'

const stylelint = require('stylelint')
const blockString = require('stylelint/lib/utils/blockString')
const isSingleLineString = require('stylelint/lib/utils/isSingleLineString')
const report = stylelint.utils.report
const ruleMessages = stylelint.utils.ruleMessages
const validateOptions = stylelint.utils.validateOptions

const ruleName = '@novicell/declaration-block-single-line'

const messages = ruleMessages(ruleName, {
  expectedRuleSingleLine: () => 'Rule should be on a single line',
})

function rule (expectation, options, context) {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: expectation,
      possible: [  
        true,
        false
      ]
    })

    if (!validOptions) {
			return;
		}

		root.walkRules((rule) => {
			const block = blockString(rule);

      if (isSingleLineString(block)) {
        return;
      }
      
      if (!rule.nodes) {
        return;
      }
      
			const decls = rule.nodes.filter((node) => node.type === 'decl');
			const hasPseudo = rule.nodes.filter((node) => node.selector?.includes(':'));
      
			if (!isSingleLineString(block) && decls.length === 1 && !hasPseudo.length) {
        if (context.fix) {
          rule.raws.after = expectation ? ' ' : '\n'
          rule.nodes.forEach((node) => {
            node.raws.before = expectation ? ' ' : '\n'
          })
          return;
        }

        report({
          message: messages.expectedRuleSingleLine(),
          node: rule,
          word: block,
          result,
          ruleName,
        });
        
        return;
			}
		});
  }
}

module.exports = stylelint.createPlugin(ruleName, rule)
module.exports.ruleName = ruleName
module.exports.messages = messages

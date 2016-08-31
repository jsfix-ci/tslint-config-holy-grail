'use strict';

module.exports = {
    rules: {
        'class-name': true,
        'component-class-suffix': true,
        'component-selector-name': [ true, 'kebab-case' ],
        'component-selector-type': [ true, 'element' ],
        'curly': true,
        'directive-class-suffix': true,
        'directive-selector-name': [ true, 'camelCase' ],
        'directive-selector-type': [ true, 'attribute' ],
        'eofline': true,
        'import-destructuring-spacing': true,
        'indent': [ true, 'spaces' ],
        'label-position': true,
        'member-access': true,
        'member-ordering': [
            true,
            [
                'constructor',
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                'public-instance-method',
                'protected-instance-method',
                'private-instance-method'
            ]
        ],
        'no-arg': true,
        'no-attribute-parameter-decorator': true,
        'no-bitwise': true,
        'no-console': true,
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-key': true,
        'no-empty': true,
        'no-eval': true,
        'no-forward-ref': true,
        'no-inferrable-types': true,
        'no-input-rename': true,
        'no-output-rename': true,
        'no-shadowed-variable': true,
        'no-switch-case-fall-through': true,
        'no-trailing-whitespace': true,
        'no-unreachable': true,
        'no-unused-expression': true,
        'no-unused-variable': true,
        'no-var-keyword': true,
        'object-literal-sort-keys': true,
        'one-line': [ true, 'check-catch', 'check-else', 'check-finally', 'check-open-brace', 'check-whitespace' ],
        'ordered-imports': [ true, { 'named-imports-order': 'lowercase-last' } ],
        'quotemark': [ true, 'single', 'avoid-escape' ],
        'radix': true,
        'semicolon': [ true, 'always' ],
        'triple-equals': true,
        'typedef-whitespace': [
            true,
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                'parameter': 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace'
            }
        ],
        'use-host-property-decorator': true,
        'use-input-property-decorator': true,
        'use-life-cycle-interface': true,
        'use-output-property-decorator': true,
        'use-pipe-transform-interface': true,
        'variable-name': [ true, 'allow-leading-underscore', 'check-format' ],
        'whitespace': [ true, 'check-branch', 'check-decl', 'check-module', 'check-operator', 'check-separator', 'check-type', 'check-typecast' ]
    },
    rulesDirectory: [
        'node_modules/codelyzer'
    ]
};

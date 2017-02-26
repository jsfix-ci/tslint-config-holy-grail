'use strict';

const fs = require('fs');
const path = require('path');

const exists = (path) => {
    try {
        fs.statSync(path);

        return true;
    } catch (err) {
        return false;
    }
};

const resolve = () => {
    let packagePath = path.resolve(__dirname, '..', 'package.json');

    while (exists(packagePath)) {
        const codelyzerPath = path.resolve(path.dirname(packagePath), 'node_modules', 'codelyzer');

        if (exists(codelyzerPath)) {
            return codelyzerPath;
        }

        packagePath = path.resolve(packagePath, '..', '..', '..', 'package.json');
    }
};

module.exports = {
    rules: {
        'arrow-parens': true,
        'callable-types': true,
        'class-name': true,
        'comment-format': [ true, 'check-space', 'check-uppercase' ],
        'component-class-suffix': true,
        'curly': true,
        'directive-class-suffix': true,
        'eofline': true,
        'forin': true,
        'import-blacklist': [ true, 'lodash-es', 'rxjs' ],
        'import-destructuring-spacing': true,
        'import-spacing': true,
        'indent': [ true, 'spaces' ],
        'interface-name': [ true, 'always-prefix' ],
        'interface-over-type-literal': true,
        'invoke-injectable': true,
        'label-position': true,
        'max-line-length': [ true, 140 ],
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
        'new-parens': true,
        'no-access-missing-member': true,
        'no-arg': true,
        'no-attribute-parameter-decorator': true,
        'no-bitwise': true,
        'no-consecutive-blank-lines': true,
        'no-console': true,
        'no-construct': true,
        'no-debugger': true,
        'no-empty': true,
        'no-empty-interface': true,
        'no-eval': true,
        'no-forward-ref': true,
        'no-inferrable-types': true,
        'no-input-rename': true,
        'no-invalid-this': true,
        'no-output-rename': true,
        'no-reference': true,
        'no-require-imports': true,
        'no-shadowed-variable': true,
        'no-string-literal': false,
        'no-string-throw': true,
        'no-switch-case-fall-through': true,
        'no-trailing-whitespace': true,
        'no-unused-expression': true,
        'no-unused-new': true,
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'object-literal-key-quotes': [ true, 'consistent-as-needed' ],
        'object-literal-shorthand': true,
        'object-literal-sort-keys': true,
        'one-line': [ true, 'check-catch', 'check-else', 'check-finally', 'check-open-brace', 'check-whitespace' ],
        'one-variable-per-declaration': [ true, 'ignore-for-loop' ],
        'ordered-imports': [ true, { 'named-imports-order': 'lowercase-last' } ],
        'prefer-const': true,
        'quotemark': [ true, 'single', 'avoid-escape' ],
        'radix': true,
        'semicolon': [ true, 'always' ],
        'templates-use-public': true,
        'trailing-comma': [ true, { multiline: 'never', singleline: 'never' } ],
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
        'typeof-compare': true,
        'unified-signatures': true,
        'use-host-property-decorator': true,
        'use-input-property-decorator': true,
        'use-life-cycle-interface': true,
        'use-output-property-decorator': true,
        'use-pipe-transform-interface': true,
        'variable-name': [ true, 'allow-leading-underscore', 'check-format' ],
        'whitespace': [ true, 'check-branch', 'check-decl', 'check-module', 'check-operator', 'check-separator', 'check-type', 'check-typecast' ]
    },
    rulesDirectory: [
        resolve()
    ]
};

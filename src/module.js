module.exports = {
    extends: [
        'rxjs-tslint-rules'
    ],
    rules: {
        'adjacent-overload-signatures': true,
        'angular-whitespace': [ true, 'check-interpolation', 'check-pipe', 'check-semicolon' ],
        'array-type': [ true, 'array' ],
        'arrow-parens': true,
        'arrow-return-shorthand': true,
        'await-promise': true,
        'ban-comma-operator': true,
        'ban-ts-ignore': true,
        'ban-types': [ true, [ 'OpaqueToken', 'Use InjectionToken instead.' ] ],
        'banana-in-box': true,
        'callable-types': true,
        'class-name': true,
        'comment-format': [ true, 'check-space', 'check-uppercase' ],
        'component-class-suffix': true,
        'contextual-life-cycle': true,
        'curly': true,
        'decorator-not-allowed': true,
        'deprecation': true,
        'directive-class-suffix': true,
        'encoding': true,
        'eofline': true,
        'file-name-casing': [ true, 'kebab-case' ],
        'forin': true,
        'import-blacklist': [
            true,
            '@angular/http',
            'core-js',
            'lodash-es'
        ],
        'import-destructuring-spacing': true,
        'import-spacing': true,
        'increment-decrement': true,
        'indent': [ true, 'spaces' ],
        'interface-name': [ true, 'always-prefix' ],
        'interface-over-type-literal': true,
        'label-position': true,
        'linebreak-style': [ true, 'LF' ],
        'max-classes-per-file': [ true, 2 ],
        'max-line-length': [ true, 140 ],
        'member-access': true,
        'member-ordering': [ true, { alphabetize: true, order: 'instance-sandwich' } ],
        'new-parens': true,
        'newline-before-return': true,
        'newline-per-chained-call': true,
        'no-arg': true,
        'no-attribute-parameter-decorator': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-conflicting-life-cycle-hooks': true,
        'no-consecutive-blank-lines': true,
        'no-console': true,
        'no-construct': true,
        'no-debugger': true,
        'no-default-export': true,
        'no-duplicate-imports': true,
        'no-duplicate-super': true,
        'no-dynamic-delete': true,
        'no-empty': true,
        'no-empty-interface': true,
        'no-eval': true,
        'no-forward-ref': true,
        'no-implicit-dependencies': true,
        'no-inferrable-types': true,
        'no-input-rename': true,
        'no-internal-module': true,
        'no-invalid-this': true,
        'no-irregular-whitespace': true,
        'no-misused-new': true,
        'no-namespace': true,
        'no-non-null-assertion': true,
        'no-output-named-after-standard-event': true,
        'no-output-on-prefix': true,
        'no-output-rename': true,
        'no-parameter-reassignment': true,
        'no-queries-parameter': true,
        'no-redundant-jsdoc': true,
        'no-reference': true,
        'no-reference-import': true,
        'no-require-imports': true,
        'no-return-await': true,
        'no-shadowed-variable': true,
        'no-sparse-arrays': true,
        'no-string-literal': true,
        'no-string-throw': true,
        'no-submodule-imports': [
            true,
            '@angular/common/http',
            '@angular/core/testing',
            '@angular/platform-browser/animations',
            '@angular/platform-browser-dynamic/testing',
            '@angular/router/testing',
            '@ngrx/effects/testing',
            '@nrwl/nx/testing',
            'angulartics2/ga',
            'lodash-es',
            'regenerator-runtime/runtime',
            'rxjs/operators',
            'rxjs-etc/operators',
            'zone.js/dist'
        ],
        'no-switch-case-fall-through': true,
        'no-this-assignment': [ true, { 'allow-destructuring': true } ],
        'no-trailing-whitespace': true,
        'no-unnecessary-initializer': true,
        'no-unsafe-finally': true,
        'no-unused-expression': true,
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'no-var-requires': true,
        'object-literal-key-quotes': [ true, 'consistent-as-needed' ],
        'object-literal-shorthand': true,
        'object-literal-sort-keys': true,
        'one-line': [ true, 'check-catch', 'check-else', 'check-finally', 'check-open-brace', 'check-whitespace' ],
        'one-variable-per-declaration': [ true, 'ignore-for-loop' ],
        'ordered-imports': [ true, { 'named-imports-order': 'lowercase-last' } ],
        'pipe-impure': true,
        'prefer-const': true,
        'prefer-for-of': true,
        'prefer-function-over-method': [ true, 'allow-public', 'allow-protected' ],
        'prefer-inline-decorator': true,
        'prefer-method-signature': true,
        'prefer-object-spread': true,
        'prefer-template': true,
        'quotemark': [ true, 'single', 'avoid-escape' ],
        'radix': true,
        'rxjs-no-compat': true,
        'rxjs-no-exposed-subjects': true,
        'rxjs-no-ignored-notifier': true,
        'rxjs-no-ignored-replay-buffer': true,
        'rxjs-no-internal': true,
        'rxjs-no-nested-subscribe': true,
        'rxjs-no-subclass': true,
        'rxjs-no-unbound-methods': true,
        'rxjs-no-unsafe-catch': true,
        'rxjs-no-unsafe-first': true,
        'rxjs-no-unsafe-switchmap': true,
        'rxjs-no-unsafe-takeuntil': true,
        'rxjs-prefer-async-pipe': true,
        'rxjs-prefer-observer': true,
        'rxjs-throw-error': true,
        'semicolon': [ true, 'always' ],
        'space-before-function-paren': true,
        'strict-boolean-expressions': true,
        'switch-default': true,
        'template-conditional-complexity': true,
        'template-cyclomatic-complexity': true,
        'templates-no-negated-async': true,
        'trailing-comma': [ true, { multiline: 'never', singleline: 'never' } ],
        'triple-equals': true,
        'type-literal-delimiter': true,
        'typedef': [ true, 'call-signature' ],
        'typedef-whitespace': [
            true,
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                'parameter': 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace'
            },
            {
                'call-signature': 'onespace',
                'index-signature': 'onespace',
                'parameter': 'onespace',
                'property-declaration': 'onespace',
                'variable-declaration': 'onespace'
            }
        ],
        'unified-signatures': true,
        'unnecessary-bind': true,
        'unnecessary-constructor': true,
        'use-host-property-decorator': true,
        'use-input-property-decorator': true,
        'use-isnan': true,
        'use-life-cycle-interface': true,
        'use-output-property-decorator': true,
        'use-pipe-decorator': true,
        'use-pipe-transform-interface': true,
        'use-view-encapsulation': true,
        'variable-name': [ true, 'allow-leading-underscore', 'check-format' ],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-module',
            'check-operator',
            'check-postbrace',
            'check-preblock',
            'check-rest-spread',
            'check-separator',
            'check-type',
            'check-type-operator',
            'check-typecast'
        ]
    },
    rulesDirectory: [
        'codelyzer'
    ]
};

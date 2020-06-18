module.exports = {
    extends: [
        'rxjs-tslint-rules'
    ],
    rules: {
        'adjacent-overload-signatures': true,
        'angular-whitespace': [ true, 'check-interpolation', 'check-semicolon' ],
        'array-type': [ true, 'array' ],
        'arrow-return-shorthand': true,
        'await-promise': true,
        'ban-comma-operator': true,
        'ban-ts-ignore': true,
        'ban-types': [
            true,
            [ 'Boolean', 'Use boolean instead.' ],
            [ 'Number', 'Use number instead.' ],
            [ 'OpaqueToken', 'Use InjectionToken instead.' ],
            [ 'String', 'Use string instead.' ]
        ],
        'callable-types': true,
        'class-name': true,
        'comment-format': [ true, 'check-space', 'check-uppercase' ],
        'component-class-suffix': true,
        'contextual-decorator': true,
        'contextual-lifecycle': true,
        'curly': true,
        'deprecation': true,
        'directive-class-suffix': true,
        'encoding': true,
        'file-name-casing': [ true, 'kebab-case' ],
        'import-blacklist': [
            true,
            '@angular/http',
            'core-js',
            'lodash-es'
        ],
        'import-destructuring-spacing': true,
        'increment-decrement': true,
        'indent': [ true, 'spaces' ],
        'interface-name': [ true, 'always-prefix' ],
        'interface-over-type-literal': true,
        'invalid-void': [ true, { 'allow-generics': [ 'EventEmitter', 'NextObserver', 'Observable', 'Observer', 'Promise', 'ReplaySubject', 'Subject' ] } ],
        'label-position': true,
        'max-classes-per-file': [ true, 2 ],
        'member-access': true,
        'member-ordering': [ true, { alphabetize: true, order: 'instance-sandwich' } ],
        'newline-before-return': true,
        'newline-per-chained-call': true,
        'no-arg': true,
        'no-attribute-decorator': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-conflicting-lifecycle': true,
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
        'no-for-in': true,
        'no-forward-ref': true,
        'no-host-metadata-property': true,
        'no-implicit-dependencies': true,
        'no-inferrable-types': true,
        'no-input-rename': true,
        'no-inputs-metadata-property': true,
        'no-internal-module': true,
        'no-invalid-this': true,
        'no-irregular-whitespace': true,
        'no-lifecycle-call': true,
        'no-misused-new': true,
        'no-namespace': true,
        'no-non-null-assertion': true,
        'no-null-undefined-union': true,
        'no-output-native': true,
        'no-output-on-prefix': true,
        'no-output-rename': true,
        'no-outputs-metadata-property': true,
        'no-parameter-reassignment': true,
        'no-pipe-impure': true,
        'no-queries-metadata-property': true,
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
        'no-tautology-expression': true,
        'no-this-assignment': [ true, { 'allow-destructuring': true } ],
        'no-trailing-whitespace': true,
        'no-unnecessary-initializer': true,
        'no-unsafe-finally': true,
        'no-unused-expression': true,
        'no-var-keyword': true,
        'no-var-requires': true,
        'object-literal-key-quotes': [ true, 'consistent-as-needed' ],
        'object-literal-shorthand': true,
        'object-literal-sort-keys': true,
        'one-variable-per-declaration': [ true, 'ignore-for-loop' ],
        'ordered-imports': [ true, { 'named-imports-order': 'lowercase-last' } ],
        'prefer-const': true,
        'prefer-for-of': true,
        'prefer-function-over-method': [ true, 'allow-public', 'allow-protected' ],
        'prefer-inline-decorator': true,
        'prefer-method-signature': true,
        'prefer-object-spread': true,
        'prefer-template': true,
        'quotemark': [ true, 'single', 'avoid-escape' ],
        'radix': true,
        'relative-url-prefix': true,
        'rxjs-angular-prefer-async-pipe': true,
        'rxjs-no-compat': true,
        'rxjs-no-exposed-subjects': true,
        'rxjs-no-ignored-notifier': true,
        'rxjs-no-ignored-observable': true,
        'rxjs-no-ignored-replay-buffer': true,
        'rxjs-no-ignored-takewhile-value': true,
        'rxjs-no-index': true,
        'rxjs-no-internal': true,
        'rxjs-no-nested-subscribe': true,
        'rxjs-no-sharereplay': [ true, { allowConfig: true } ],
        'rxjs-no-subclass': true,
        'rxjs-no-subject-unsubscribe': true,
        'rxjs-no-topromise': true,
        'rxjs-no-unbound-methods': true,
        'rxjs-no-unsafe-catch': true,
        'rxjs-no-unsafe-first': true,
        'rxjs-no-unsafe-subject-next': true,
        'rxjs-no-unsafe-switchmap': true,
        'rxjs-no-unsafe-takeuntil': true,
        'rxjs-prefer-observer': true,
        'rxjs-suffix-subjects': true,
        'rxjs-throw-error': true,
        'semicolon': [ true, 'always' ],
        'space-before-function-paren': true,
        'static-this': true,
        'strict-boolean-expressions': true,
        'switch-default': true,
        'template-accessibility-alt-text': true,
        'template-accessibility-elements-content': true,
        'template-accessibility-label-for': true,
        'template-accessibility-tabindex-no-positive': true,
        'template-accessibility-table-scope': true,
        'template-accessibility-valid-aria': true,
        'template-banana-in-box': true,
        'template-click-events-have-key-events': true,
        'template-conditional-complexity': true,
        'template-cyclomatic-complexity': true,
        'template-mouse-events-have-key-events': true,
        'template-no-any': true,
        'template-no-autofocus': true,
        'template-no-call-expression': true,
        'template-no-distracting-elements': true,
        'template-no-negated-async': true,
        'triple-equals': true,
        'typedef': [ true, 'call-signature' ],
        'unified-signatures': true,
        'unnecessary-bind': true,
        'unnecessary-constructor': true,
        'unnecessary-else': true,
        'use-component-view-encapsulation': true,
        'use-injectable-provided-in': true,
        'use-isnan': true,
        'use-lifecycle-interface': true,
        'use-pipe-decorator': true,
        'use-pipe-transform-interface': true,
        'variable-name': [ true, 'allow-leading-underscore', 'check-format' ]
    },
    rulesDirectory: [
        'codelyzer'
    ]
};

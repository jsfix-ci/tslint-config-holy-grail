'use strict';

var configuration = require('../../src/module.js'),
    Linter = require('tslint');

describe('tslint-config-holy-grail', () => {

    var linter;

    beforeEach(() => linter = new Linter('../fixtures/dummy.ts', '', { configuration }));

    it('should lint a dummy file', () => {
        var result = linter.lint();

        expect(result.failureCount).to.equal(0);
    });

});

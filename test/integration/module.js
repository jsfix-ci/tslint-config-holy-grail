'use strict';

const configuration = require('../../src/module.js');

const Linter = require('tslint').Linter;

describe('tslint-config-holy-grail', () => {

    let linter;

    beforeEach(() => linter = new Linter(configuration));

    it('should lint a dummy file', () => {
        linter.lint('../fixtures/dummy.ts', '');

        const failures = linter.getResult().failures;

        expect(failures).to.deep.equal([]);
    });

});

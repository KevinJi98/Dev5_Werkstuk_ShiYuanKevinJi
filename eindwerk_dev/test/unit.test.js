const { isUUID } = require('../src2/helper_unit');

describe('UUID', () => {
    it('Check UUID format', () => {
        expect(isUUID(1)).toBe(false);
        expect(isUUID(null)).toBe(false);
        expect(isUUID("")).toBe(false);
    });

    it('Valid UUID', () => {
        expect(isUUID("ef5603d5-8463-4680-a6c4-a0373f94276b")).toBeTruthy()
    });
});
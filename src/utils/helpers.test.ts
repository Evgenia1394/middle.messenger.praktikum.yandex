import set from "./set";
import {expect} from "chai";

describe('set function', () => {
    const keypath = 'test';
    const value = 'some value';
    let obj: Record<string, unknown>;

    beforeEach(() => {
        obj = {};
    });

    it('should set a value by keypath to the object', () => {
        set(obj, keypath, value);

        expect(obj).to.haveOwnProperty(keypath, value);
    });

    it('should return original object', () => {
        const result = set(obj, keypath, value);

        obj['test2'] = 'another value';

        expect(result).to.equal(obj);
    });

    it('should return original object if it\'s is not an object', () => {
        const notAnObject = 'string';

        const result = set(notAnObject, keypath, value);

        expect(result).to.eq(notAnObject);
    });

});

import CollectionUtils from './../../src/utils/CollectionUtils';

test('is empty returns true', () => {
    let result = CollectionUtils.isNullOrEmpty([]);
    expect(result).toBe(true);
});
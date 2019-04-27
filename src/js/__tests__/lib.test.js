import {normalize} from "../lib";


test('it should normalize', () => {
    const data = [2, 15, 28, 100, 2, 0, 15, 1];

    const expected = [2, 15, 2, 15];

    const result = normalize(data,2);

    expect(result).toBe(expected);
});

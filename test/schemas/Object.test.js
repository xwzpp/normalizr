/* eslint-env jest */
import { normalize, schema } from '../../src';

describe(schema.Object.name, () => {
  it('normalizes an object', () => {
    const userSchema = new schema.Entity('user');
    const object = new schema.Object({
      user: userSchema
    });
    expect(normalize({ user: { id: 1 } }, object)).toMatchSnapshot();
  });
});

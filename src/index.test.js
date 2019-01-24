/* eslint-env jest */
const setQueryParams = require('./index').default;

describe('Set query params', () => {
  it('should be able to set new parameters', () => {
    expect(setQueryParams('http://google.com/', { foo: 'bar' })).toEqual(
      'http://google.com/?foo=bar'
    );
  });
  it('should be able to override parameters', () => {
    expect(setQueryParams('http://google.com/?foo=baz', { foo: 'bar' })).toEqual(
      'http://google.com/?foo=bar'
    );
  });
  it('should replace multiple instances of the same parameter', () => {
    expect(setQueryParams('http://google.com/?foo=baz&foo=qux', { foo: 'bar' })).toEqual(
      'http://google.com/?foo=bar'
    );
  });
  it('should not mess with other parameters', () => {
    expect(setQueryParams('http://google.com/?baz=bar', { foo: 'bar' })).toEqual(
      'http://google.com/?baz=bar&foo=bar'
    );
  });
});

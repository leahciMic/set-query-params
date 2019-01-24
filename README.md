# Set query params

> Set/ override url query parameters

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```sh
npm i set-query-params

# Or with Yarn
yarn add set-query-params
```

## Usage

```js
import setQueryParams from `set-query-params`;

const url = setQueryParams('http://example.org/?foo=test&hello=user', { hello: 'world' });

console.log(url); // http://example.org/?foo=test&bar=test&hello=world
```

## Contributing

See [the contribute file](CONTRIBUTING.md)!

PRs accepted.

## License

[MIT © Michael Leaney](LICENSE)

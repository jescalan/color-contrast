# color-contrast

[![npm](https://img.shields.io/npm/v/color-contrast.svg?style=flat-square)](https://npmjs.com/package/color-contrast)
[![tests](https://img.shields.io/travis/jescalan/color-contrast.svg?style=flat-square)](https://travis-ci.org/jescalan/color-contrast?branch=master)
[![dependencies](https://img.shields.io/david/jescalan/color-contrast.svg?style=flat-square)](https://david-dm.org/jescalan/color-contrast)
[![coverage](https://img.shields.io/codecov/c/github/jescalan/color-contrast.svg?style=flat-square)](https://codecov.io/gh/jescalan/color-contrast)

Performance-sensitive WCAG contrast ratio calculation.

### Why should you care?

There are several projects that give you the contrast ratio, but I was unable to find any that didn't have too many dependencies to be viable for performance-conscious browser use and were also wcag-compliant. This one is both. It's ~5kb gzipped, and supports all color formats supported by css, so no need to run any type of color conversions in or out.

### Installation

`npm install color-contrast`

### Usage

This is a very simple module, it only exposes a single export and can be used as such:

```js
import colorContrast from 'color-contrast'

colorContrast('#fff', '#000') // => 21
colorContrast('#fff', '#eee') // => 1.1602304710270739
```

WCAG standards dictate that you want `>=4.5` as a ratio for AA compliance and `>= 7` for AAA compliance. You should aim for the latter if possible.

### License & Contributing

- Huge thanks to [Jon Neal's excellent postcss plugin](https://github.com/jonathantneal/postcss-wcag-contrast), from which I copied 100% of the code for this project
- Details on the license [can be found here](LICENSE.md)

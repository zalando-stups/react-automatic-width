# react-automatic-width

[![Build Status](https://travis-ci.org/zalando/react-automatic-width.svg?branch=master)](https://travis-ci.org/zalando/react-automatic-width) 

So you found those cool components that do what you want, but they work on fixed width! ([fixed-data-table](https://facebook.github.io/fixed-data-table/) or [react-d3-components](https://github.com/codesuki/react-d3-components) for instance.)

~~~ jsx
import D3 from 'react-d3-components';

<D3.BarChart
    width={500} /> // ;_;
~~~

You care about responsiveness and different display sizes! You want variable width! HULK SMASH!

Solution: Just wrap it in `AutoWidth`.

~~~ jsx
import D3 from 'react-d3-components';
import AutoWidth from '@zalando/react-automatic-width';

<AutoWidth>
    <D3.BarChart /> {/* ^_^ */}
</AutoWidth>
~~~

## Installation & Usage

Install it with:

    npm i -S @zalando/react-automatic-width

Then load it however you want (it's an UMD module). It accepts any property you throw at it, this way you can use classes and media queries for the autowidth container.

~~~ jsx
<AutoWidth className='responsive'>
    <D3.BarChart />
</AutoWidth>
~~~ 

## How?

It attaches a listener to `resize` event of `window`. In it, the component reads the current width of its DOM node and sets this as `width` property on its children.

## Issues

* Uses `addEventListener`, so no IE8 currently. PRs welcome.
* Uses `clientWidth` because that worked on my current Chrome. Might be funky in your browser. PRs welcome.
* Not clear what should happen if window is resized while container is not displayed. Currently zero-widths just get ignored.

## Dependencies

Written for React 0.13. Did not test with React 0.14, but should work since `ref.findDOMNode` is deprecated, but not removed.

## License

Apache 2.0

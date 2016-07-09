# react-automatic-width

[![Build Status](https://travis-ci.org/zalando/react-automatic-width.svg?branch=master)](https://travis-ci.org/zalando/react-automatic-width) [![Coverage Status](https://coveralls.io/repos/github/zalando/react-automatic-width/badge.svg?branch=master)](https://coveralls.io/github/zalando/react-automatic-width?branch=master)

So, you found those cool components like [fixed-data-table](https://facebook.github.io/fixed-data-table/) and [react-d3-components](https://github.com/codesuki/react-d3-components) that do whatever you want, with just one problem: They only work on fixed width! You care about responsiveness and different display sizes. You want variable width! **HULK SMASH!**

One solution: Just wrap it in `AutoWidth`, so that this:

~~~ jsx
import D3 from 'react-d3-components';

<D3.BarChart
    width={500} /> // ;_;
~~~

Can work like this:

~~~ jsx
import D3 from 'react-d3-components';
import AutoWidth from '@zalando/react-automatic-width';

<AutoWidth>
    <D3.BarChart /> {/* ^_^ */}
</AutoWidth>
~~~

react-automatic-width is a React component that automatically sets `width` property on child components. It works out-of-the-box and accepts any property you throw at it. This way, you can use classes and media queries for the autowidth container.

It does its job by attaching a listener to the `resize` event of `window`. In it, react-automatic-width reads the current width of its DOM node and sets this as the `width` property on its children. Since it creates an event listener *every* time it's used, you might want to reconsider when you have a lot of components that need to be wrapped separately. [`react-dimensions`](https://github.com/digidem/react-dimensions) might then be useful to you as it offers the option to use [`element-resize-event`](https://github.com/KyleAMathews/element-resize-event/) underneath (using `requestAnimationFrame`).

It's currently not under active development because the codebase is tiny and works. If appropriate, it will be updated to accomodate future React versions.

## Installation & Usage

Install react-automatic-width with:

    npm i -S @zalando/react-automatic-width

Then load it however you want (example: ES6):

    import AutoWidth from '@zalando/react-automatic-width'

Finally, omit the `width` property on your component and wrap it in `AutoWidth`:

~~~ jsx
    <AutoWidth className="responsive">
        <D3.BarChart />
    </AutoWidth>
~~~

## Issues/Contributing

This project welcomes contributions from the community. Here are some issues and areas where we could use some help:

* Uses `addEventListener`, so currently there's no IE8. PRs welcome.
* Uses `clientWidth` because that worked in Chrome forty-something. Might be funky in your browser. PRs welcome.
* Not clear what should happen if the window is resized while the container is not displayed. Currently zero-widths just get ignored. Drop a line via the Issues tracker if you have some ideas.

## License

Apache 2.0

import React from 'react';

class AutomaticWidth extends React.Component {
    constructor() {
        super();
        this.state = {
            listener: null,
            width: 0
        };
    }

     _resizeHandler() {
        let dom = this.refs.autowidthWrapper,
            {clientWidth} = dom;
        if (clientWidth !== this.state.width && clientWidth > 0) {
            this.setState({
                width: clientWidth
            });
        }
    }

    componentDidMount() {
        let boundListener = this._resizeHandler.bind(this);
        boundListener();
        window.addEventListener('resize', boundListener);
        this.setState({
            listener: boundListener
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.state.listener);
    }

    render() {
        var {width} = this.state;
        return <div ref='autowidthWrapper' {...this.props}>
                    {React.Children.map(
                        this.props.children,
                        c => React.cloneElement(c, {width}))}
                </div>;
    }
}
AutomaticWidth.displayName = 'AutomaticWidth';
export default AutomaticWidth;

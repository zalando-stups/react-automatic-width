import React from 'react';

class AutomaticWidth extends React.Component {
    constructor(props) {
        super();
        this.state = {
            listener: null,
            width: props.initialWidth || 1000
        };
    }

     _resizeHandler() {
        let dom = this.refs.autowidthWrapper.getDOMNode();
        if (dom.clientWidth !== this.state.width) {
            this.setState({
                width: dom.clientWidth
            });
        }
    }

    componentDidMount() {
        let boundListener = this._resizeHandler.bind(this);
        window.addEventListener('resize', boundListener);
        this.setState({
            listener: boundListener
        });
        boundListener();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.state.listener);
    }

    render() {
        return <div ref='autowidthWrapper' {...this.props}>
                    {React.Children.map(this.props.children, c =>
                        React.addons.cloneWithProps(c, {
                            width: this.state.width
                        })
                    )}
                </div>;
    }
}
AutomaticWidth.displayName='Automatic Width';
export default AutomaticWidth;


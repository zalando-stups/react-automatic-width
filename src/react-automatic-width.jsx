class AutomaticWidth extends React.Component {
    constructor() {
        super();
        this.state = {
            listener: null,
            width: 0
        };
    }

     _resizeHandler() {
        let dom = this.refs.autowidthWrapper.getDOMNode(),
            {clientWidth} = dom;
        if (clientWidth !== this.state.width && clientWidth > 0) {
            this.setState({
                width: clientWidth
            });
        }
    }

    componentWillMount() {
        let boundListener = this._resizeHandler.bind(this);
        window.addEventListener('resize', boundListener);
        this.setState({
            listener: boundListener
        });
    }

    componentDidMount() {
        this.state.listener();
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
AutomaticWidth.displayName = 'AutomaticWidth';
AutomaticWidth.propTypes = {
    children: React.PropTypes.oneOf([
        React.PropTypes.array,
        React.PropTypes.object
    ])
};
export default AutomaticWidth;

import React, {PropTypes} from 'react';
import debounce from './utils/debounce';

export default class AutomaticWidth extends React.Component {
    static displayName = 'AutomaticWidth';

    static propTypes = {
        debounceWait: PropTypes.number
    };

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
        const {debounceWait} = this.props;
        const DEBOUNCE_WAIT = 100;

        const boundListener = debounce(this._resizeHandler.bind(this), debounceWait || DEBOUNCE_WAIT, true);
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
        const {width} = this.state;
        return <div ref='autowidthWrapper' {...this.props}>
                    {React.Children.map(
                        this.props.children,
                        c => React.cloneElement(c, {width}))}
                </div>;
    }
}

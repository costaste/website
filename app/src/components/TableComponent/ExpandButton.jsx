import React, { Component } from 'react';

class ExpandButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            expanded: false,
        }
    }

    handleClick() {
        const { rowId , toggle }  = this.props;
        this.setState({ expanded: !this.state.expanded });
        toggle(rowId );
    }

    render() {
        const { rowId } = this.props;
        if (this.state.expanded) {
            const icon = <img title='Click to collapse' src={require('../../../assets/images/minus.png')} onClick={() => this.handleClick(rowId )} className='drawerButton' />;
            return <td id={rowId  + '-collapse-button'} className='buttonCell'>{icon}</td>;
        } else {
            const icon = <img title='Click to expand' src={require('../../../assets/images/plus.png')} onClick={() => this.handleClick(rowId )} className='drawerButton' />;
            return <td id={rowId  + '-expand-button'} className='buttonCell'>{icon}</td>;
        }
    }
}

export default ExpandButton;

import React from 'react';
import Cell from './cell';

class Column extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, items } = this.props;
        return (<div>
            <th>{name}</th>
            {items.map(item => {
                return <Cell key={item.id} value={item[name]} />
            })}
        </div>)
    }
}
export default Column;
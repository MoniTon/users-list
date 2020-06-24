import React from 'react';
class Cell extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
      const {value} = this.props
      return <td>{value}</td>
  }
}
export default Cell
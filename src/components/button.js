import React from 'react';
class Button extends React.Component{ 
    constructor(props) {
       super(props)
    }
     render(){
        const {name, onClick} = this.props;
       return <button onClick={onClick}>{name}</button>
   }
}
export default Button;
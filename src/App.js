import React from 'react';
import './App.css';
import Table from './components/table';
import Button from './components/button';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      titles: ['name', 'city', 'email']
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        response.json()
      ).then(users => {
        this.setState({
          isLoaded: true,
          items: users.map(user =>{
            return {
              id: user.id,
              name: user.name,
              city: user.address.city,
              email: user.email
            }
          }),
        })
      })
  }
  reverseData = () => {
    this.setState({
      isLoaded: true,
      items: this.state.items.reverse()
    })
  }
  render() {
    const { isLoaded, items } = this.state;
    return (
      <div>
       <Table items = {items} titles = {this.state.titles}/>
       <Button name ="Click" onClick={this.reverseData} /> 
       </div>
    )}
}
export default App;
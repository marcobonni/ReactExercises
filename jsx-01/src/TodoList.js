import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      items: []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = this.input.current.value;
    if (newItem !== '') {
      this.setState((prevState) => ({
        items: [...prevState.items, newItem]
      }));
      this.input.current.value = '';
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.input} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
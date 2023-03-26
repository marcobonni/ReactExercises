import React, { createRef } from "react"

class TodoList extends React.Component {
  _input = createRef()
  addList(value) {
    this.props.setList([...this.props.list, value]);
    this._input.current.value = "";
  }
  removeLi(index) {
    this.props.list.splice(index, 1)
    this.props.setList([...this.props.list])
  }
  resetLi() {
    this.props.setList([])
  }
  render() {
    const list = this.props.list?.map((el, index) => {
      return (
        <li key={index}>{el}<button onClick={() => this.removeLi(index)}>X</button></li>
      )
    })
    return (
      <div className="todolist">
        <input type="text" ref={this._input} name="input"></input>
        <button onClick={() => this.addList(this._input.current.value)}>submit</button>
        <button onClick={() => this.resetLi()}>Reset</button>
        <ul>
          {this.props.render(this.state._input)}
        </ul>
      </div>
    )
  }
}

export default TodoList
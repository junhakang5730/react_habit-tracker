import React, { Component } from "react";

export default class Habit extends Component {
  increase = () => {
    this.props.onIncreament(this.props.habit);
  };

  decrease = () => {
    this.props.onDecreament(this.props.habit);
  };

  delete = () => {
    this.props.onDelete(this.props.habit);
  };

  componentDidMount() {
    console.log(`${this.props.habit.name} is mounted`);
  }

  componentWillUnmount() {
    console.log(`${this.props.habit.name} is unmounted`);
  }

  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.increase}>
          +
        </button>
        <button className="habit-button habit-decrease" onClick={this.decrease}>
          -
        </button>
        <button className="habit-button habit-delete" onClick={this.delete}>
          T
        </button>
      </li>
    );
  }
}

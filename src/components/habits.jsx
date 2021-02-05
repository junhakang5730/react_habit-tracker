import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncreament={this.props.increament}
            onDecreament={this.props.decreament}
            onDelete={this.props.delete}
          />
        ))}
      </ul>
    );
  }
}

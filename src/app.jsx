import React, { Component } from "react";
import Habits from "./components/habits";
import "./app.css";

export default class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    totalCounts: 0,
    newHabitName: "",
  };

  myRef = React.createRef();
  myForm = React.createRef();

  increase = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    habits.totalCounts++;
    this.setState({ totalCounts: this.state.totalCounts + 1 });
    this.setState({ habits });
  };

  decrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count--;
    this.setState({ totalCounts: this.state.totalCounts - 1 });
    this.setState({ habits });
  };

  delete = (habit) => {
    const oldHabits = [...this.state.habits];
    const index = oldHabits.indexOf(habit);
    const oldHabitsCounts = oldHabits[index].count;
    const habits = this.state.habits.filter((item) => item.id !== habit.id);

    this.setState({ totalCounts: this.state.totalCounts - oldHabitsCounts });
    this.setState({ habits });
  };

  addHabit = () => {
    const habits = [
      ...this.state.habits,
      {
        id: Date.now(),
        name: this.state.newHabitName,
        count: 0,
      },
    ];
    this.setState({ newHabitName: "" });
    this.setState({ habits });
  };

  handleChange = (event) => {
    this.setState({ newHabitName: event.target.value });
  };

  reset = () => {
    const myState = this.state.habits.map((item) => (item.count = 0));
    this.setState(myState);
  };
  render() {
    console.log(this.myRef.innerHTML);

    return (
      <>
        <nav ref={this.myRef}>
          Habit Tracker
          <span className="habit-count">{this.state.totalCounts}</span>
        </nav>
        <input
          type="text"
          value={this.state.newHabitName}
          onChange={this.handleChange}
        />
        <button onClick={this.addHabit}>add</button>
        <Habits
          habits={this.state.habits}
          increament={this.increase}
          decreament={this.decrease}
          delete={this.delete}
        />

        <button onClick={this.reset}>reset all</button>
      </>
    );
  }
}

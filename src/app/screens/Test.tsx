
import { log } from "console";
import React, { Component } from "react";

interface State {
  brand: string;
  model: string
  color: string
  year: number
}


class Test extends Component<{},State>{
  constructor(props: {}) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 2010,
    };
  }

  changeDetail = () => {
    this.setState({
      brand: "Tesla",
      model: "Model S",
      color: "blue",
      year: 2023,
    });
  };

  componentDidMount() {
    console.log("component Did Mount");
    // runs after first render => RETRIEVE DATA FROM BACKEND SERVER
    // backendimizdan datani olisha maqsadida shu lifecycle methodi dan foydalanamiz 
    // birinchi fronend loyihamiz qurilishi uchun kerakli datani serverdan retrieve qilib oladi malumotnmi render qilishimiz mumkin 
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    // runs before component unmount
    // osha pageni yashirilishidan oldin malum bir operasiyalarni qilishimizni talab etsa iwlatamiz
  }

  componentDidUpdate() {}

  render() {
    return(
    <div>
      <h1>Hi this My {this.state.brand}</h1>
      <p>
        Color:{this.state.color} - Model:{this.state.model} - From:
        {this.state.year}
      </p>
      <button
          type="button"
          onClick={this.changeDetail}
        >Change color</button>
    </div>
  )
  }
}

export default Test;
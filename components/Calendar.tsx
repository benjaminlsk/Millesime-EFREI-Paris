import React, { Component } from "react";
import Calendar from "@toast-ui/react-calendar";
export default class Picker extends Component{
  render() {
    return (
      <div className="bg-white">
        <Calendar />
      </div>
    )
  }
}

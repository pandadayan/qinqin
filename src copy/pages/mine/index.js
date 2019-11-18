import React, { Component } from 'react'
import './index.scss'
export default class Mine extends Component {
  render() {
    return (
      <div className = "container">
        个人中心 -- { this.props.name }
      </div>
    )
  }
}

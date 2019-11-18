import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import qs from 'querystring' //node中模块

export default class List extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list: []
    }
  }
  

  componentDidMount () {
    const { search } = this.props.location // ?cid=22
    const { cid } = qs.parse( search.slice(1) )
    axios({
      url: '/index.php',
      params: {
        r: 'class/cyajaxsub',
        page: 1,
        cid,
        px: 't',
        cac_id: ''
      }
    }).then( res => {
       this.setState({
         list: res.data.data.content
       })
    })
  }

  render() {
    return (
      <div className = "container">
          list
      </div>
    )
  }
}

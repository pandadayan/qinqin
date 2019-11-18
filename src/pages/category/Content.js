import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom'

const Content = props => {


  const renderList = list => {
    return list.map( item =>  (
      <li key = { item.api_cid}>
        <Link 
          to = {{
            pathname: `/list/${ item.api_cid }`,
            search: `cid=${ item.api_cid }&a=1`
          }}
        >
          <img src = { item.img }/>
          <span> { item.name } </span>
        </Link>
      </li>
    ))
  }


  return (
    <Fragment>
      <div className = "floor">
        <h3 style = {{ margin: 0}}> { props.name } </h3>
        <ul>
          { renderList( props.list) }
        </ul>
      </div>
    </Fragment>
  )
}


export default Content
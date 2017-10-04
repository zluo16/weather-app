import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/fetchActions'

export class CurrentWeatherChart extends Component {

  render() {
    return (
      <div>
        <Chart></Chart>
      </div>
    )
  }
}

import React, {Component} from 'react'
import Header from './Header'
import Lbt from './Lbt'
import IntroNav from './IntroNav'

class Home extends Component {
  render () {
    return (
      <div id="page-home">
        <Header />
        <Lbt />
        <IntroNav />
      </div>
    )
  }
}

export default Home
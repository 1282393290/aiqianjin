import React, {Component} from 'react'
import Header from './Header'
import Lbt from './Lbt'
import IntroNav from './IntroNav'
import HotProduct from './HotProduct'
import Question from './Question'
import MorePro from './MorePro'
import Footer from './Footer'
import LoginRegister from './LoginRegister'
import '@/styles/home/index.scss'

class Home extends Component {
  render () {
    return (
      <div id="page-home">
        <Header />
        <Lbt />
        <IntroNav />
        <HotProduct />
        <Question />
        <MorePro />
        <Footer />
      </div>
    )
  }
}

export default Home
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
  constructor (props) {
    super(props)
  }
  render () {
    const {data:{homeReducer:{bannerList,questionList,scrollList,aiyinbaoList}}} = this.props
    return (
      <div id="page-home">
        <Header />
        <Lbt {...bannerList}/>
        <IntroNav />
        <HotProduct scrollList={scrollList} aiyinbaoList={aiyinbaoList}  />
        <Question questionList={questionList} />
        <MorePro />
        <Footer />
      </div>
    )
  }
  componentDidMount () {
    this.props.getAsyncBannerList()
    this.props.getAsyncQuestionList()
    this.props.getAsyncScrollList()
    this.props.getAsyncAiYinBaoList()
  }
}

export default Home
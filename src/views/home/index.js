import { connect } from 'react-redux'
import HomeUi from './HomeUi'
import { getAsyncScrollList,getAsyncAiYinBaoList,getAsyncBannerList,getAsyncQuestionList } from '@/store/actions/home'

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(
  mapStateToProps,
  { 
    getAsyncBannerList,
    getAsyncQuestionList,
    getAsyncScrollList,
    getAsyncAiYinBaoList
  })(HomeUi)
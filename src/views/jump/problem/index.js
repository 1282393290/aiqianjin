//1. 引入 react-redux 中的 connect
import { connect } from 'react-redux';
import ProblemUi from './ui.js';
import {getAsyncCommonList} from '@/store/actions/about'
const mapStateToProps=state=>{
    return {
      commonList: {...state,"sss":"lzk"}
    }
}
const mapDispatchToprops=dispatch=>{
  return {
    getCommonList() {
     dispatch(getAsyncCommonList())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ProblemUi);
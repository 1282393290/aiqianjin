//1. 引入 react-redux 中的 connect
import { connect } from 'react-redux';
import AboutUi from './ui.js';
import {getAsyncBorrowCount} from '@/store/actions/about'
const mapStateToProps=state=>{
    return {
      BorrowCount: {...state,"sb":"lzk"}
    }
}
const mapDispatchToprops=dispatch=>{
  return {
    getBorrowCount () {
     dispatch(getAsyncBorrowCount())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToprops
)(AboutUi);
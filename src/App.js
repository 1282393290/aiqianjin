import { connect } from 'react-redux'
import AppUi from './ui'

const mapStateToProps = state => {
  return {
    name: "沈萌",
    date: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShow () {
      console.log(111)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppUi)
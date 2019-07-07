import * as action from '../actionTypes'

const getBannerList = (list) => {
  return {
    type: action.GETBANNERLIST,
    list
  }
}
const getQuestionList = (list) => {
  return {
    type: action.GETQUESTIONLIST,
    list
  }
}
const getScrollList = (list) => {
  return {
    type: action.GETSCROLLLIST,
    list
  }
}
const getAiYinBaoList = (list) => {
  return {
    type: action.GETAIYINBAOLIST,
    list
  }
}

export const getAsyncBannerList = () => {//获取banner数据
  return (dispatch) => {
    fetch('api/newHomePage/getBanner?_=1562219945903')
      .then(response=>response.json())
      .then(res=>{
        dispatch(getBannerList(res.bean))
      })
  }
}

export const getAsyncQuestionList = () => {//获取banner数据
  return (dispatch) => {
    fetch('api/xjwd/index?_=1562219945904')
      .then(response=>response.json())
      .then(res=>{
        dispatch(getQuestionList(res.bean))
      })
  }
}

export const getAsyncScrollList = () => {//获取banner数据
  return (dispatch) => {
    fetch('api/investRecord?_=1562219945904')
      .then(response=>response.json())
      .then(res=>{
        dispatch(getScrollList(res.bean))
      })
  }
}

export const getAsyncAiYinBaoList = () => {//获取banner数据
  return (dispatch) => {
    fetch('api/newHomePage/getAiYingBaoList?_=1562219945913')
      .then(response=>response.json())
      .then(res=>{
        dispatch(getAiYinBaoList(res.bean.list))
      })
  }
}
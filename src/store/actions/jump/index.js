import { GETBORROWCOUNT,GETCOMMONLIST } from '../actionTypes'

const getBorrowCount=(borrowCount)=>{
  return {
    type: GETBORROWCOUNT,
    borrowCount
  }
}

export const getAsyncBorrowCount=()=>{
  return dispatch=>{
    fetch("borrowerInfo/borrowerCountLP?_=1562226415754")
    .then(respon=>respon.json())
    .then(res=>{
      console.log(res)
      dispatch(getBorrowCount(res))
    })
  }
}

const getCommonList=(commonList)=>{
  return {
    type: GETCOMMONLIST,
    commonList
  }
}
export const getAsyncCommonList=()=>{
  return dispatch=>{
    fetch("question/getCommonList?_=1562309669495")
    .then(respon=>respon.json())
    .then(res=>{
      console.log(res)
      dispatch(getCommonList(res))
    })
  }
}

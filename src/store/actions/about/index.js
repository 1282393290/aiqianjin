import { GETBORROWCOUNT } from '../actionTypes'
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
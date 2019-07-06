import React,{Component} from 'react'
import '@/styles/about/index.scss'
import Header from '../../home/Header.js'
import MapList from './liMap'
import '@/styles/about/jump.scss'
export default class ProblemUi extends Component {
 
  render(){
    console.log(this.props)
    const {commonList:{aboutReducer:{commonList}}}=this.props
    return (
      <div className='iqj-question-index'>
        <Header />
        <div className="wrap">
          <h1>常见问题</h1>
          <MapList commonList={commonList}/>
          {/* <ul>
            {
              commonList.map((item,index)=>{
                return {
                  title: this.state.types[index],
                  list: item.list
                }
              }).map((item,index)=>{
                return (
                  <li key={index}>
                    <p className='p1'>
                      <span className='s1'>{item.title}</span>
                      linkNav
                      <span className='s2'>查看更多 ></span>
                    </p>
                    <p className='p2'>{item.list[0].title}</p>     
                    <p className='p2'>{item.list[1].title}</p> 
                  </li> 
                )
              })
            }
          </ul> */}
        </div>
    </div>
    )
  }
  componentDidMount(){
    //console.log(this.props)
    this.props.getCommonList();
  }
}

            
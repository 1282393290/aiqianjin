import React, {Component} from 'react'
import QuestionNav from './ProductNav'
import '@/styles/home/Question.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class Question extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    
    new Swiper('.swiper-container',{
        loop: true, 
        autoplay : 1000,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        
        observer:true,
        observeParents:true,
    });
  }
  render () {
    return (
      <div className="home-question">
        <QuestionNav title="小胡问答" />
        <div className="swiper-container" height="7rem">
            <div className="swiper-wrapper">
                {
                  this.props.questionList.map((item,index) => {
                    return (
                      <div className="swiper-slide"  key={index}>
                        <div className="news">
                            <p className="title">{item.channelName}</p>
                            <ul>
                              {
                                item.list.map((item,index)=>{
                                  return (
                                    <li key={index}>
                                      <a href="#/">
                                        <span className="symbol">#</span>
                                        <span className="txt ellipsis">{item.description}</span>
                                      </a>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </div>                
                      </div>
                    )
                  })
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default Question
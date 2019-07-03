import React, {Component} from 'react'
import QuestionNav from './ProductNav'
import '@/styles/home/Question.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class Question extends Component {
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
                <div className="swiper-slide">
                  <div className="news">
                    <p className="title">关于爱钱进</p>
                    <ul>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="news">
                    <p className="title">关于爱钱进</p>
                    <ul>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="swiper-slide">
                <div className="news">
                    <p className="title">关于爱钱进</p>
                    <ul>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <span className="symbol">#</span>
                          <span className="txt ellipsis">爱钱进钱还能取出来吗？爱钱进提现到账快速</span>
                        </a>
                      </li>
                    </ul>
                  </div>                
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default Question
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
// import Label from 'grommet/components/Label'
import { Link } from 'react-router'
import base from 'js/utils/config'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="aboutSection">
                <Section>
                    <Heading>
                      關於透視鏡
                    </Heading>
                    <Paragraph>
                        「一定要進去實習後才知道一切和當初我想的不一樣嗎？」
                        <br/><br/>
                        現行的實習管道所提供的大多為官方單面資訊，實際的實習狀況、待遇、文化往往不得而知，而實際實習負責的內容與當初的招募資訊也可能有所出入。面對這樣資訊不透明的情況，實習透視鏡希望可以成為改變的力量，讓大家在找實習時有更多的資訊作為參考而做出更好的選擇。
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>
                      給予回饋意見
                    </Heading>
                    <Paragraph>
                        「改變世界不是一個人做了很多，而是每個人都貢獻了一點點。」
                        <br/><br/>
                        希望大家可以<Link to={`${base}/feedback`}> 透過這個連結 </Link>留下自己對於平台的建議、以及可以改進的地方。你的寶貴想法不只可以讓這個平台更好，更重要的是能讓往後的應徵者們有一個更全面的資訊參考平台，選到最適合自己的實習，也讓公司主管們了解並重視實習生們的心聲，進而改善各種不合理的實習待遇。
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>
                      加入開發團隊
                    </Heading>
                    <Paragraph>
                        目前的實習透視鏡是由一位學生在課後之餘維護的 side project。
                        <br/><br/>
                        如果你對這個專案很有興趣，想要一起貢獻心力、改變整個台灣的實習環境、或是洽談合作，歡迎透過FB粉專來聯繫負責人，我們誠摯的邀請您來投入這個專案。
                    </Paragraph>
                </Section>
            </div>
        )
    }
}, require('./Base.styl'))

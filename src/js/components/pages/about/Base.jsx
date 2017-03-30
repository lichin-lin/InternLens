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
                        現行的實習管道所提供的大多為官方單面資訊，實際的實習狀況、待遇、文化往往不得而知，而實際實習負責的內容與當初的招募資訊也可能有所出入。面對這樣資訊不透明的情況，實習透視鏡希望透過匿名分享的方式，讓大家勇敢說出各家企業實習的好與壞，集結群眾的力量，消滅勞資雙方的資訊不對等。除了讓大家在找實習時有更多的資訊作為參考而做出更好的選擇，也讓公司主管們了解並重視實習生們的心聲，進而改善各種不合理的實習待遇。
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>
                      給予回饋意見
                    </Heading>
                    <Paragraph>
                        「改變世界不是一個人做了很多，而是每個人都貢獻了一點點。」
                        <br/><br/>
                        實習透視鏡是個年輕的團隊，我們知道有許多地方做還不夠好，所以我們需要大家的意見與幫忙。除了<a href="https://goo.gl/forms/RJ395aQxaFzxoYFp2" target="_blank">提交分享自己的實習心得</a>之外，你還可以花一點時間，<Link to={`${base}/feedback`}> 填網站回饋問卷 </Link>，留下自己對於平台的建議、以及可以改進的地方，或是你有什麼其他的建議以及想說的話，也歡迎到<a href='https://www.facebook.com/groups/241235806333620/' target='_blank'>實習透視鏡臉書社團</a>上跟大家討論，或是直接寫信和我們聯絡喔！
                        <br/><br/>
                        台灣的實習環境需要勞資雙方及你我共同的努力，你一點一滴的意見都是讓台灣實習環境更好的動力。
                        <br/><br/>
                        ＊熟悉 git 操作的朋友可以直接到我們的 GitHub repo 上回報 bugs 或是開設想要功能的 issue，你所許願的功能也許就會實現喔！ 也歡迎大家直接動手發 pull request～
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>
                      加入開發團隊
                    </Heading>
                    <Paragraph>
                        「 Be the change you want to see in the world. 」
                        <br/><br/>
                        許多人常抱怨環境不好，但起身有所作為的卻寥寥可數，實習透視鏡希望可以成為啟動改變的火花。我們目前正在徵求<b> 網站工程師 </b>與<b> 設計師 </b>，如果你和我們一樣，視改善台灣實習環境為己任，請手刀與我們聯繫！如果你都不是，但是想要一起貢獻心力、或是想洽談合作，也歡迎隨時來聊聊～我們誠摯的邀請您來投入這個專案，讓我們一起成為改變台灣的力量。
                    </Paragraph>
                </Section>
            </div>
        )
    }
}, require('./Base.styl'))

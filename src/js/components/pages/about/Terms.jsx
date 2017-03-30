import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
// import Label from 'grommet/components/Label'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="aboutSection">
                <Section>
                    <Heading>
                      使用者條款
                    </Heading>
                    <Paragraph>
                    非常歡迎您使用「實習透視鏡，Internlens」（以下簡稱本網站），為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的使用者協議，以保障您的權益，請您詳閱下列內容：
                    <br/><br/>
                    ＊請注意，一旦您使用實習透視鏡的產品、軟體、網站或服務（包含臉書社團與google 問卷與表單等），即代表您了解且同意遵守以下協議。
                    <br/>
                    ＊實習透視鏡團隊保留隨時因應需求修訂本協議之完整權利，您將會於本頁面或公告指定的頁面找到此協議的最新版本。
                    </Paragraph>
                    <Heading tag="h3">
                        註冊和帳號使用
                    </Heading>
                    <Paragraph>
                        <li>您同意使用服務之所有內容包括意思表示等，皆以電子文件做為表示方式，且本網站對您的所有通知皆以電子郵件或其他電子方式為之。</li>
                        <li>就註冊程序所要求的真實姓名及其他資料，您提供的資訊皆屬真實，且如有任何變動的話會即時更新。</li>
                        <li>您並非為其他人註冊帳號。</li>
                        <li>您並未也不會註冊兩個以上的個人帳號。</li>
                        <li>如果您的帳號遭停權，您不會註冊另一個帳號。</li>
                        <li>您不會讓其他人透過您的帳號使用本網站服務。</li>
                        <li>您認知，如您以您於其他網站、通訊軟體使用之帳號、名稱、暱稱等於您的本網站ID 及暱稱，將容易使您的身份被連結、搜尋及勾稽，您應自負其責。</li>
                        <li>無論出於故意或疏失，您不會以與已註冊商標（經濟部商標檢索系統 <a href="http://tmsearch.tipo.gov.tw/TIPO_DR/index.jsp" target="_blank">link</a>）或他人商品或服務之表徵等相關之任何名稱作為自己的 ID 或暱稱，就此本網站有權以自己之判斷決定收回您的 ID 並交予權利人使用，您不得有任何異議。</li>
                        <li>您不會以任何影射、謾罵、毀謗、冒用他人等違反網路禮節、社會秩序或違法之文字作為您的ID 或暱稱。本網站有權以自己之判斷決定註銷具有上述性質的ID 及暱稱，您不得有任何異議。</li>
                        <li>您不會以疑似本網站官方的文字作為您的ID 或暱稱，若名稱含有特殊字元、空白字元或特殊符號或類似本網站人員名稱，本網站有權直接強制更名。</li>
                        <li>違反相關規定時，本網站有權判斷，使用者須遵循本網站之裁量。</li>
                    </Paragraph>
                    <Heading tag="h3">
                        個人資料及隱私保護
                    </Heading>
                    <Paragraph>
                        <li>本網站將依法盡商業上合理之努力保護您的個人資料及隱私。您瞭解並確認本網站已經依據個人資料保護法第8條第1項明確告知與個人資料保護有關事項。</li>
                        <li>您使用本網站服務的活動記錄，包括但不限於上網IP位址、使用時間、發佈之留言與實習心得內容、瀏覽及點選記錄及其他本網站因您使用服務所取得之一切資訊等。本網站將於營運期間持續保存您的個人資料。</li>
                    </Paragraph>
                    <Heading tag="h3">
                        用戶內容授權
                    </Heading>
                    <Paragraph>
                        <li>
                            就您利用本網站服務發佈之文章、您使用之ID、暱稱及其他表述內容（以下合稱為「用戶內容」），您得依法享有相關智慧財產權。惟就上述用戶內容及相關智慧財產權，您同意以下事項：
                            <ul className="innerList">
                                <li>您給予本網站永久、非專屬、可轉讓、可轉授權、免權利金的授權，授權地區為全世界，本網站依據上述授權，可重製或利用用戶內容之全部或一部。您茲此聲明並保證您就用戶內容及其發佈擁有一切必要的權利或授權，足以有效賦予本網站前述之授權。</li>
                                <li>本網站保留拒絕接受、張貼、顯示或傳輸用戶內容的權利，並有權逕行刪除您發佈的用戶內容。</li>
                                <li>經刪除之用戶內容，本網站有權且可能已留存備份，但本網站並無備份之義務。就您因用戶內容未儲存或刪除所生之一切風險或損失，您應自行採取防護措施，本網站概不負責，亦無義務將本網站內部留存之備份或檔案（如有）提供給您。</li>
                            </ul>
                        </li>
                    </Paragraph>
                    <Heading tag="h3">
                        用戶內容限制
                    </Heading>
                    <Paragraph>
                        <li>用戶內容不得包含下述資訊：
                            <ul className="innerList">
                                <li>兒童或少年為性交、猥褻行為之圖畫、照片、影片或其他相類物品。</li>
                                <li>足以引誘、媒介、暗示或其他促使人為性交易之訊息。</li>
                                <li>足以引誘、媒介、暗示或其他使兒童或少年有遭受兒童及少年性交易防制條例第 2 條第 1 項第 1 款至第 3 款之虞之訊息。</li>
                                <li>侵害他人智慧財產權、肖像權、隱私權或其他權利之內容。</li>
                                <li>違反本協議或鼓吹他人違反本協議之內容。</li>
                                <li>違反法律強制或禁止規定之內容。</li>
                                <li>違反公共秩序或社會善良風俗之內容。</li>
                                <li>其他本網站認為應刪除，並已通知您刪除之內容。</li>
                            </ul>
                        </li>
                    </Paragraph>
                    <Heading tag="h3">
                        用戶行為限制
                    </Heading>
                    <Paragraph>
                        <li>您同意不得為下列行為：
                            <ul className="innerList">
                                <li>以自動化登入及操作方式收集本網站其他用戶的用戶內容。</li>
                                <li>利用本網站服務，以違反個人資料保護法之方式蒐集、處理及利用本網站其他用戶的個人資料。</li>
                                <li>利用本網站服務從事商業行為或用做商業用途。</li>
                                <li>散播電腦病毒或惡意程式，藉由網路流量或傳輸量癱瘓本網站網站或服務或造成系統過大負荷，或任何可能或足以干擾、中斷或影響本網站服務正常提供之行為。</li>
                                <li>蒐集本網站其他用戶之帳號、密碼或其他帳戶資訊，或使用其他用戶之帳號登入。</li>
                                <li>將您註冊之服務帳號、本網站服務或其使用權限之任何部分，出售、出借、贈與、轉讓或提供給他人使用或與他人共用。</li>
                                <li>破解或以各種方式繞過任何本網站用來防止或限制全部或部分使用服務的措施，或以解碼、破譯、反編譯、逆向工程或其他方式，試圖獲得任何本網站服務、其網站或相關程式之原始碼或程式碼。</li>
                                <li>任何涉及騷擾、猥褻、威脅、詐欺、霸凌、侵害他人權益或濫用本網站服務之行為。</li>
                                <li>任何違反法令、本協議、公共秩序或善良風俗之行為，或其他經本網站通知您停止之行為。</li>
                            </ul>
                        </li>
                    </Paragraph>
                    <Heading tag="h3">
                        檢舉
                    </Heading>
                    <Paragraph>
                        <li>您同意本網站可以針對用戶違反本協議之行為，按下述機制處置：
                            <ul className="innerList">
                                <li>如有任何人依據檢舉機制向本網站檢舉您的用戶內容違反本協議、本網站所發布之版規或符合刪文規則等規定，本網站在收到前述檢舉後，得依據本網站之裁量進行審查，並於確定違反規定後，依相關規則之規定直接刪除您的用戶內容，或依情節暫時停權或永久停權。</li>
                                <li>如有相關權利人，依據檢舉機制向本網站檢舉您的用戶內容侵害其個人權利，本網站不需經您的同意，即得先行將您的用戶內容取下，待您與權利人之間的紛爭解決，本網站始能回復您的用戶內容。</li>
                            </ul>
                        </li>
                    </Paragraph>
                    <Heading tag="h3">
                        行動裝置
                    </Heading>
                    <Paragraph>
                        <li>本網站透過網頁及行動裝置應用程式等平台提供本網站服務，本協議適用於所有平台上的用戶。</li>
                        <li>您同意您的用戶內容、本網站帳戶資料及所有您使用本網站服務時建立、輸入、呈現、提交或以任何方式提供的資訊，在所有用戶使用的所有平台上同步；本網站為進行前述平台同步，得存取、重製（一部或全部）、公開傳輸、公開播送、公開口述、公開展示、改作、散布、處理及/或以其他方式利用前述內容、資料及資訊。</li>
                    </Paragraph>
                    <Heading tag="h3">
                        修訂
                    </Heading>
                    <Paragraph>
                        <li>本網站保留未來隨時修訂本協議及相關本網站規則之權利，而無須另行通知您。本網站得以網頁公告或電子郵件或其他電子方式將前述修訂內容公開、公告或通知各會員。</li>
                        <li>您有義務經常檢視本協議及相關本網站規則之修（增）訂，如您在上述修訂生效以後，仍繼續使用本網站服務，視為您接受上述（增）修訂。</li>
                    </Paragraph>
                    <Heading tag="h3">
                        聲明及免責及賠償
                    </Heading>
                    <Paragraph>
                        <li>如有任何第三人因您利用本網站服務之行為或因您發佈之用戶內容而向本網站或其關係企業（包括渠等現任或前任受僱人、經理人、董事等）求償，您必須負責賠償並保障本網站及其關係企業（包括渠等現任或前任受僱人、經理人、董事等）免受一切相關損害、損失和費用（包括法律服務費用和其他成本）。</li>
                        <li>實習透視鏡是一個網路平台，雖然本網站會盡合理努力，依據用戶使用協議及其他本網站規則管理用戶行為及用戶內容，但您瞭解本網站無法完全免除您在本網站上遇到其他用戶或任何第三人侵害您權利的情形，或接觸到其他用戶或第三人所發表，具有冒犯性、或不妥之內容，您知悉並同意在任何情況下，本網站均不為任何用戶公開或私下發佈、傳輸、寄送或進行之用戶內容、訊息或任何行為負責，亦不對前述用戶內容或訊息之正確性、完整性或內容品質為任何保證。所有因前述用戶內容或行為所生之損害，包含但不限於任何傳輸錯誤或遺漏，以及經由前述內容所衍生之任何損失等，均由您自行承擔，且本網站（包括其現任或前任受僱人、經理人、董事等）無須為上述情形負責。</li>
                        <li>本網站服務是以「現狀」以及「目前可得」狀態提供。除本協議明示規定者外，本網站均不對服務做出任何明示或默示的保證，亦不保證服務的安全性、不保證您隨時隨地均可獲得服務、不保證服務中任何缺陷或錯誤都將得到更正，也不保證您使用服務的結果將滿足您的需求。您因使用服務所生之一切利益或損失，均由您自行承擔。您瞭解本網站服務或有因系統故障而遲延、中斷情形，或可能造成您使用不便或資料喪失、錯誤、遭人篡改或其他損失等情形，本網站將盡商業上合理努力修復系統，但您於使用時應自行採取防護措施，本網站對因使用或無法使用本網站服務所生之一切損害不負賠償責任，您亦同意不就上述事件對本網站為任何請求。</li>
                        <li>您透過本網站服務瀏覽到的所有廣告及行銷內容，是由各該廣告商、產品與服務的供應商所設計與提出，本網站僅接受前述廠商委託予以刊登，不對前述廣告及行銷內容負任何擔保責任。當您點擊本網站服務或網站中的廣告頁面時，將會連結到第三方網站，該第三方網站有可能蒐集您的資料、IP 位置或 Cookie 資料等，本網站不負責保障您在第三方網站或使用其服務的隱私權。您於第三方網站或與相關廠商之間一切行為，亦皆與本網站無涉，如因此遭受任何損害，均不得向本網站求償。</li>
                        <li>您應自行負責保管及維護本網站服務帳戶及密碼的機密性，並為您服務帳戶下的所有活動及發表的用戶內容負責。當您密碼或帳戶有遭他人冒用、盜用或其他未經授權使用，或有任何安全性漏洞時，您同意立即通知本網站。若因您無法提供正確資訊、未能保守前述帳戶及密碼機密性或未能及時通知本網站，而遭受任何損害，您應自行承擔，本網站概不負責。</li>
                    </Paragraph>
                    <Heading tag="h3">
                        終止
                    </Heading>
                    <Paragraph>
                        <li>本網站得基於任何原因（例如您違反本協議、日後如有收取費用而您無法及時支付費用或帳戶有一段時間沒有任何活動），本網站有權隨時終止本協議，停止向您提供全部或部分本網站服務或終止您的帳戶。終止後，您的帳戶將會關閉，而且您不得再以該帳戶存取、使用或取回本網站服務或該帳戶中的任何檔案或內容。</li>
                        <li>無論本協議因何原因終止，本協議下述條款於終止後仍有效力。</li>
                    </Paragraph>
                    <Heading tag="h3">
                        準據法及管轄法院
                    </Heading>
                    <Paragraph>
                        <li>本協議的準據法為中華民國法令。</li>
                        <li>雙方就本協議之爭議或歧見，應儘先誠意協商解決，如無法於合理期間內達成協議，雙方同意專屬由臺灣台北地方法院為第一審管轄法院。</li>
                    </Paragraph>
                    <Heading tag="h3">
                        其他
                    </Heading>
                    <Paragraph>
                        <li>本協議各條文之標題僅係為閱讀方便而使用，並不影響本協議之內容及解釋。</li>
                        <li>本協議為本網站與您之間就使用本網站服務有關事項之完整協議，並取代先前一切書面或口頭合意。</li>
                        <li>本協議中之任何規定於任何管轄地區被視為無效、違法、或無法強制執行時，僅該部分為無效、違法或無法強制執行，不影響其他條款之效力、合法性或強制性；且該規定於任何管轄地區之無效、違法或無法強制執行時，不影響其於其他管轄地區之效力、合法性或強制性或使之為無效。</li>
                        <li>非經本網站事前書面同意，您不得轉讓本協議書之權利義務與任何第三人。</li>
                        <li>本協議並非第三人利益契約，並未賦予任何第三人權利或利益。</li>
                    </Paragraph>
                    <Heading tag="h3">
                        最後修改日期：2017 年 3 月 25 日
                    </Heading>
                </Section>
            </div>
        )
    }
}, require('./Base.styl'))

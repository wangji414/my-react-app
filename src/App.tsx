import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div className="resume">
        <div className="left">
          <div>
            <h1 className="tittle">易方升</h1>
            <h2>FANG-SHENG, YI</h2>
            <h2>淡江大學資訊管理學系四年級</h2>
            <p>這是我</p>
            <img src="001.jpg" alt="我" style={{ height: '40%', width: '40%' }} />
            <div className="btn">
              <a className="works" href="https://github.com/wangji414/113-TKU-WEB/blob/main/410631278about.html" target="_blank" rel="noopener noreferrer">關於我</a>
              <a className="linkedin" href="https://github.com/wangji414/113-TKU-WEB" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
          </div>
          <div className="skills">
            <span className="smalltittle">Skills</span>
            <h3 className="name">專業技能</h3>
            <ul className="item">
              <li>
                <div className="circle">
                  <div className="d90"></div>
                  <div className="d180"></div>
                  <div className="d270"></div>
                  <div className="d360"></div>
                </div>
                刷條碼
              </li>
              <li>
                <div className="circle">
                  <div className="d90"></div>
                  <div className="d180"></div>
                  <div className="d270"></div>
                </div>
                使用ChatGPT
              </li>
              <li>
                <div className="circle">
                  <div className="d90"></div>
                  <div className="d180"></div>
                  <div className="d270"></div>
                </div>
                組裝電腦
              </li>
              <li>
                <div className="circle">
                  <div className="d90"></div>
                  <div className="d180"></div>
                </div>
                活著
              </li>
            </ul>
          </div>
          <div className="certification">
            <span className="smalltittle">Certification</span>
            <h3 className="name">證照</h3>
            <ul className="programitem">
              <li>
                <a href="http://www.tbsa.tw/front/bin/ptlist.phtml?Category=370673" target="_blank" rel="noopener noreferrer">
                <span className="certification-text">TBSA商務企劃能力初級</span>
                </a>
                <div className="bar">
                  <div className="value v33"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="decoration"></div>
          <div className="experience">
            <span className="smalltittle">Experience</span>
            <h3 className="name">工作經驗與經歷</h3>
            <ul className="listExperience">
              <li className="year">2024~
                <ul>
                  <li>大學四年級</li>
                  <li>旗勝科技／工讀 </li>
                  <li>專題地獄</li>
                  <li>重修地獄</li>
                </ul>
              </li>
              <li className="year">2023~
                <ul>
                  <li>大學三年級</li>
                  <li>修課地獄 </li>
                  <li>專題地獄</li>
                </ul>
              </li>
              <li className="year">2022~
                <ul>
                  <li>大學二年級</li>
                  <li>晶傑達光電／工讀</li>
                  <li>修課地獄</li>
                </ul>
              </li>
              <li className="year">before<br />2021~
                <ul>
                  <li>大學一年級</li>
                  <li>彩券行／工讀</li>
                  <li>實習課地獄</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


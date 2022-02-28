import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { KeyBoard } from './KeyBoard'
import { RaitoBtn } from './SimpleBtn';

const p1 = i => [`[${i % 12}]`, `[${(i + 4) % 12}]`, `[${(i + 7) % 12}]`];
const p2 = i => [`[${i % 12}]`, `[${(i + 3) % 12}]`, `[${(i + 7) % 12}]`];
const keyboards = [
  { title: 'C 大调', pattern: p1(0) },
  { title: 'C 小调', pattern: p2(0) },
  { title: '#C/bD 大调', pattern: p1(1) },
  { title: '#C/bD 小调', pattern: p2(1) },
  { title: 'D 大调', pattern: p1(2) },
  { title: 'D 小调', pattern: p2(2) },
  { title: '#D/bE 大调', pattern: p1(3) },
  { title: '#D/bE 小调', pattern: p2(3) },
  { title: 'E 大调', pattern: p1(4) },
  { title: 'E 小调', pattern: p2(4) },
  { title: 'F 大调', pattern: p1(5) },
  { title: 'F 小调', pattern: p2(5) },
  { title: '#F/bG 大调', pattern: p1(6) },
  { title: '#F/bG 小调', pattern: p2(6) },
  { title: 'G 大调', pattern: p1(7) },
  { title: 'G 小调', pattern: p2(7) },
  { title: '#G/bA 大调', pattern: p1(8) },
  { title: '#G/bA 小调', pattern: p2(8) },
  { title: 'A 大调', pattern: p1(9) },
  { title: 'A 小调', pattern: p2(9) },
  { title: '#A/bB 大调', pattern: p1(10) },
  { title: '#A/bB 小调', pattern: p2(10) },
  { title: 'B 大调', pattern: p1(11) },
  { title: 'B 小调', pattern: p2(11) },
];
const headStyle = {
  fontSize: 12,
  fontWeight: 'bold',
  padding: '0 2px',
  height: '34px',
  lineHeight: '34px',
  borderRight: '1px solid #ddd',
};

function App() {
  const [singleLine, setSingleLine] = useState(false);
  const [singleChoice, setSingleChoice] = useState(false);
  const [keyboardVisiblilities, setKeyboardVisiblilities] = useState(keyboards.map(_ => true))
  return (
    <div style={{ height: '100%', background: '#eee', overflowX: 'auto' }}>
      <div
        style={{
          background: '#fff',
          boxShadow: '1px 1px 3px 3px #aaa',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1,
        }}
      >
        <div style={{ display: 'inline-block', background: '#ffa', ...headStyle }}>选择</div>
        <RaitoBtn
          checked={singleLine}
          onClick={() => setSingleLine(!singleLine)}
          style={headStyle}
        >
          单行显示
        </RaitoBtn>
        <RaitoBtn
          onClick={() => {
            setKeyboardVisiblilities(keyboardVisiblilities.map(_ => (
              keyboardVisiblilities.filter(item => item).length !== keyboardVisiblilities.length
            )));
          }}
          style={headStyle}
        >
          全(不)选
        </RaitoBtn>
        <RaitoBtn
          checked={singleChoice}
          onClick={() => setSingleChoice(!singleChoice)}
          style={headStyle}
        >
          单选
        </RaitoBtn>
        {keyboards.map((keyboard, i) => (
          <RaitoBtn
            key={i}
            checked={keyboardVisiblilities[i]}
            onClick={() => {
              if (singleChoice) {
                setKeyboardVisiblilities(keyboardVisiblilities.map((_, j) => i === j));
                return;
              }
              const visiblilities = keyboardVisiblilities;
              visiblilities[i] = !keyboardVisiblilities[i];
              setKeyboardVisiblilities([...visiblilities]);
            }}
            style={headStyle}
          >
            {keyboard.title}
          </RaitoBtn>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: headStyle.height }}>
        {keyboards.filter((_, i) => keyboardVisiblilities[i]).map(({ title, pattern }, i) => (
          <KeyBoard
            key={i}
            title={title}
            pressedKeys={pattern}
            style={{
              display: singleLine ? 'block' : 'inline-block',
              width: 'auto',
            }}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

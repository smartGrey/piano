import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { KeyBoard } from './KeyBoard'

function App() {
  return (
    <div style={{ height: '100%', background: '#eee' }}>
      <KeyBoard
        title="C 大调"
        keyNums={61}
        pressedKeys={['[0]', '[4]', '[7]']}
      />
      <KeyBoard
        title="C 小调"
        keyNums={61}
        pressedKeys={['[0]', '[3]', '[7]']}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

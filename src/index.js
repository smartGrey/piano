import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { KeyBoard } from './KeyBoard'
import { keyboards as keyboardsConfig } from './keyboardsConfig'
import { TreeSelect, List } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";

function App() {
  const menuWidth = 260;
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [dataSource, setDataSource] = useState({});
  const [keyboardTreeSelectHeight, setKeyboardTreeSelectHeight] = useState(30);
  useEffect(() => {
    const results = {};
    Object.keys(keyboardsConfig).forEach(groupName => {
      if (selectedKeys.indexOf(groupName) !== -1) {
        results[groupName] = keyboardsConfig[groupName]
      } else {
        const tempKeyboards = keyboardsConfig[groupName].filter(keyboard => (selectedKeys.indexOf(keyboard.title) !== -1));
        if (tempKeyboards.length) {
          results[groupName] = tempKeyboards
        }
      }
    });
    setDataSource(results);
  }, [selectedKeys])
  return (
    <div style={{ height: '100%' }}>
      {/* left */}
      <div
        style={{
          display: 'inline-block',
          width: menuWidth,
          height: '100%',
          verticalAlign: 'top',
        }}
      >
        <TreeSelect
          className="keyboardTreeSelect"
          multiple={true}
          value={selectedKeys}
          treeCheckable={true}
          treeCheckStrictly={false}
          treeCheckedStrategy={TreeSelect.SHOW_PARENT}
          bordered={false}
          popupVisible={true}
          placeholder="勾选以显示内容"
          allowClear={true}
          onChange={values => {
            setSelectedKeys(values)
            setTimeout(() => {
              setKeyboardTreeSelectHeight(document.getElementsByClassName('keyboardTreeSelect')[0].offsetHeight)
            }, 0);
          }}
          onClear={() => setSelectedKeys([])}
          showSearch={true}
          dropdownMenuStyle={{
            maxHeight: 'none',
            position: 'fixed',
            bottom: 0,
            width: menuWidth,
            top: keyboardTreeSelectHeight,
            overflowY: 'auto',
          }}
          treeData={Object.keys(keyboardsConfig).map(groupName => ({
            key: groupName,
            title: groupName,
            children: keyboardsConfig[groupName].map(keyboard => ({
              key: keyboard.title,
              title: keyboard.title,
            })),
          }))}
        />
      </div>
      {/* right */}
      <div
        style={{
          display: 'inline-block',
          width: `calc(100% - ${menuWidth}px)`,
          height: '100%',
          verticalAlign: 'top',
          overflowY: 'auto',
        }}
      >
        {Object.keys(dataSource).map((groupName, i) => (
          <List
            key={i}
            grid={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 12, xxl: 8 }}
            header={<span style={{ fontSize: 22, fontWeight: 'bold' }}>{groupName}</span>}
            wrapperStyle={{ marginBottom: 20, paddingBottom: 10, boxShadow: '0 0 2px 2px #aaa' }}
            style={{ textAlign: 'center' }}
            dataSource={dataSource[groupName]}
            bordered={false}
            noDataElement={<></>}
            render={(keyboard, j) => (
              <KeyBoard
                style={{ margin: '16px 0' }}
                key={j}
                title={keyboard.title}
                pressedKeys={keyboard.pattern}
              />
            )}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

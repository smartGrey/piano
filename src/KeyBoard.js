const whiteBondWidth = 18;
const blackBondBoxWidth = 0;
const blackBondInnerWidth = whiteBondWidth*0.6;
const bondHeight = 100;
const blackBondInnerheight = 100*0.6;
const whiteBondColor = '#fff';
const blackBondColor = '#000';
const whiteBondPressedColor = '#fa8';
const blackBondPressedColor = '#d68';



const WK = ({pressed}) => (
  <div
    style={{
      display: 'inline-block',
      width: whiteBondWidth,
      height: bondHeight,
      background: pressed ? whiteBondPressedColor : whiteBondColor,
      border: '1px solid #000',
      boxSizing: 'border-box',
    }}
  />
);

const BK = ({pressed}) => (
  <div
    style={{
      display: 'inline-block',
      width: blackBondBoxWidth,
      height: bondHeight,
      position: 'relative',
    }}
  >
    <div
      style={{
        width: blackBondInnerWidth,
        background: pressed ? blackBondPressedColor : blackBondColor,
        position: 'absolute',
        left: `-${blackBondInnerWidth / 2}px`,
        height: blackBondInnerheight,
      }}
    />
  </div>
);

export const Key = ({
  index,// 0-11
  pressed,
}) => {
  const K = [
    WK, BK, WK, BK, WK,
    WK, BK, WK, BK, WK, BK, WK,
  ][index];
  return <K pressed={pressed} />;
};

// keyNums: >0
// pressedKeys: 0-11[]
export const KeyBoard = ({ title, keyNums = 37, pressedKeys = [], style = {} }) => {
  pressedKeys.forEach((item, i) => pressedKeys[i]=String(item))
  return (
    <div
      style={{
        display: 'inline-block',
        background: 'grey',
        fontSize: 0,
        boxShadow: '1px 1px 3px 3px #aaa',
        userSelect: 'none',
        border: '1px solid #777',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {title && <div style={{ fontSize: 20, lineHeight: 1.6, textAlign: 'center', background: '#111', color: '#bbb', fontWeight: 'bold' }}>{title}</div>}
      {
        new Array(keyNums).fill(0).map((_, i) => (
          <Key
            key={i} index={i % 12}
            pressed={(pressedKeys.indexOf(`${i}`) !== -1) || (pressedKeys.indexOf(`[${i % 12}]`) !== -1)}
          />
        ))
      }
    </div>
  )
};

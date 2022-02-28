export const RaitoBtn = ({ checked, onClick, children, style={} }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        background: !checked ? 'transparent' : 'rgba(0,0,0,0.3)',
        userSelect: 'none',
        cursor: 'pointer',
        padding: '0 10px',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

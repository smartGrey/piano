const p1 = i => [`[${i % 12}]`, `[${(i + 4) % 12}]`, `[${(i + 7) % 12}]`];
const p2 = i => [`[${i % 12}]`, `[${(i + 3) % 12}]`, `[${(i + 7) % 12}]`];

export const keyboards = {
  "大三和弦": [
    { title: '大三和弦 C', pattern: p1(0) },
    { title: '大三和弦 D', pattern: p1(2) },
  ],
  "小三和弦": [
    { title: '小三和弦 C', pattern: p2(0) },
    { title: '小三和弦 D', pattern: p2(2) },
    { title: '小三和弦 E', pattern: p2(4) },
    { title: '小三和弦 F', pattern: p2(4) },
    { title: '小三和弦 G', pattern: p2(4) },
    { title: '小三和弦 A', pattern: p2(4) },
    { title: '小三和弦 B', pattern: p2(4) },
    { title: '小三和弦 H', pattern: p2(4) },
  ],
};

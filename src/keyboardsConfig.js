const p1 = i => [`[${i % 12}]`, `[${(i + 4) % 12}]`, `[${(i + 7) % 12}]`];// 生成大三和弦: p1(0)
const p2 = i => [`[${i % 12}]`, `[${(i + 3) % 12}]`, `[${(i + 7) % 12}]`];// 生成小三和弦

export const keyboards = {
  "C 大调下的和弦": [
    { title: 'C-大三和弦', pattern: [0, 4, 7], keyNum: 12 },
    { title: 'C-大三和弦+2个转位', pattern: [0, 4, 7, 16, 19, 24, 31, 36, 40], keyNum: 42 },
    { title: 'C-小三和弦', pattern: [0, 3, 7], keyNum: 12 },
    { title: 'C-小三和弦+2个转位', pattern: [0, 3, 7, 15, 19, 24, 31, 36, 39], keyNum: 42 },
    { title: 'C-大小七和弦', pattern: [0, 4, 7, 10], keyNum: 12 },
    { title: 'C-大小七和弦+3个转位', pattern: [0, 4, 7, 10, 16, 19, 22, 24, 31, 34, 36, 40, 46, 48, 52, 55], keyNum: 61 },
  ],
  "大调音阶": ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯ / G♭', 'G', 'A♭', 'A', 'B♭', 'B'].map((name, i) => ({
    title: `大调音阶 ${name}`, pattern: [i, i + 2, i + 4, i + 5, i + 7, i + 9, i + 11], keyNum: 24
  })),
  "自然小调": ['c', 'c♯', 'd', 'd♯ / e♭', 'e', 'f', 'f♯', 'g', 'g♯', 'a', 'b♭', 'b'].map((name, i) => ({
    title: `小调音阶 ${name}`, pattern: [i, i + 2, i + 3, i + 5, i + 7, i + 8, i + 10], keyNum: 24
  })),
};

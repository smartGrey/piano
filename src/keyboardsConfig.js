const p1 = i => [`[${i % 12}]`, `[${(i + 4) % 12}]`, `[${(i + 7) % 12}]`];// 生成大三和弦: p1(0)
const p2 = i => [`[${i % 12}]`, `[${(i + 3) % 12}]`, `[${(i + 7) % 12}]`];// 生成小三和弦

export const keyboards = {
  "大调音阶": ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯ / G♭', 'G', 'A♭', 'A', 'B♭', 'B'].map((name, i) => ({
    title: `大调音阶 ${name}`, pattern: [i, i + 2, i + 4, i + 5, i + 7, i + 9, i + 11], keyNum: 24
  })),
  "自然小调": ['c', 'c♯', 'd', 'd♯ / e♭', 'e', 'f', 'f♯', 'g', 'g♯', 'a', 'b♭', 'b'].map((name, i) => ({
    title: `小调音阶 ${name}`, pattern: [i, i + 2, i + 3, i + 5, i + 7, i + 8, i + 10], keyNum: 24
  })),
};

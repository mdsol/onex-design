const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => ({
  id: 'M123',
  study: `United States${Math.floor(Math.random() * 30)}`,
  country: `United States${Math.floor(Math.random() * 1000)}`,
  category: 'Manegement',
  created: '26 Aug 2020',
});

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => ({
      ...newPerson(),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    }));
  };

  return makeDataLevel();
}

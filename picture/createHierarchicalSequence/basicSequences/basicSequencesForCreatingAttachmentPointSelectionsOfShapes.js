const basicSequences = [
  [0, 0],
  [0, 1],
  [0, 0, 0],
  [0, 1, 0],

  [0, 1, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 0],

  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [0, 1, 0, 1, 2],

  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1],
  [0, 1, 0, 1, 0, 1, 2],

  [0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0, 2],
  [0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 2],
  [0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0, 1, 1, 1, 2],
  [0, 1, 2, 1, 0, 1, 2, 1, 0],
  [0, 1, 2, 1, 0, 1, 2, 1, 1],
  [0, 1, 2, 1, 0, 1, 2, 1, 2]
]

module.exports.getSequence = () => {
  return basicSequences[Math.floor(Math.random() * basicSequences.length)]
}

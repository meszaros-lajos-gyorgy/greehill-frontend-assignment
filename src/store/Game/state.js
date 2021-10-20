export default async () => ({
  isPlaying: false,
  started: false,
  generation: 0,
  grid: [],
  initialGrid: [],
  templates: {
    blinker: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    glider: [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1]
    ]
  }
})

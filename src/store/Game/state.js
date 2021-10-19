export default async () => ({
  isPlaying: false,
  grid: [],
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

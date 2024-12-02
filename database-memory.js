import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
  #videos = new Map()

  list() {
    return Array.from(this.#videos.entries()).map((arrayVideo) => {
      const id = arrayVideo[0]
      const body = arrayVideo[1]

      return {
        id: id,
        ...body
      }
    }) 
  }

  create(video) {
    const idVideo = randomUUID()

    this.#videos.set(idVideo, video)
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }
}
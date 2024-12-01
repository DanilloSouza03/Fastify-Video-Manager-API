import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
  #videos = new Map()

  list() {
    return this.#videos.values()
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
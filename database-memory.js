import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
  #videos = new Map()

  list(search) {
    return Array.from(this.#videos.entries())
      .map((arrayVideo) => {
        const id = arrayVideo[0]
        const body = arrayVideo[1]

        return {
          id: id,
          ...body
        }
      })
      .filter(video => {
        if (search) {
          return video.title.includes(search)
        } 

        return true
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
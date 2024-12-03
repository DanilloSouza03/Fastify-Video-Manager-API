import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
  async list(search) {
    let videos

    if(search) {
      videos = await sql`SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'};`
    } else {
      videos = await sql`SELECT * FROM videos;`
    }

    return videos
  }

  async create(video) {
    const idVideo = randomUUID()

    const { title, description, duration } = video

    await sql`INSERT INTO videos (id, title, description, duration) VALUES (${idVideo}, ${title}, ${description}, ${duration});`
  }

  update(id, video) {
  
  }

  delete(id) {
    
  }
}
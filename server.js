import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { title } from 'node:process'

const app = fastify()

const db = new DatabaseMemory()

app.get('/', () => {
  return 'API no ar!'
})

app.get('/videos', (request) => {
  const search = request.query.search

  console.log(search)

  const videos = db.list(search)

  return videos
})

app.post('/video', (request, reply) => {
  const {title, description, duration} = request.body

  db.create({
    title: title,
    description: description,
    duration: parseInt(duration)
  })

  return reply.status(201).send()
})

app.put('/video/:id', (request, reply) => {
  const {title, description, duration} = request.body
  const idVideo = request.params.id

  db.update(idVideo, {
    title: title,
    description: description,
    duration: duration
  })

  return reply.status(204).send()
})

app.delete('/video/:id', (request, reply) => {
  const videoId = request.params.id
  db.delete(videoId)
  return reply.status(204).send()
})

app.listen({
  port: 3333
}).then(() => {
  console.log('Rodando na porta 3333')
})
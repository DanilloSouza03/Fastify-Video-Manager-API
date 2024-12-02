import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { title } from 'node:process'

const app = fastify()

const db = new DatabaseMemory()

app.get('/', () => {
  return 'API no ar!'
})

app.get('/videos', () => {
  const videos = db.list()

  return videos
})

app.post('/videos', (request, reply) => {
  const {title, description, duration} = request.body

  db.create({
    title: title,
    description: description,
    duration: parseInt(duration)
  })

  return reply.status(201).send()
})

app.put('/videos/:id', () => {
  return 'PUT para editar'
})

app.delete('/video/:id', () => {
  return 'DELETE para deletar'
})

app.listen({
  port: 3333
}).then(() => {
  console.log('Rodando na porta 3333')
})
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const app = fastify()

app.get('/', () => {
  return 'API no ar!'
})

app.get('/videos', () => {
  return 'GET para ler'
})

app.post('/videos', () => {
  return 'POST para criar'
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
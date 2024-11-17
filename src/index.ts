import express, { Request, Response } from 'express'
import fs from 'fs/promises'

const app =express()

app.use(express.json())

app.get('/', async (req:Request, res:Response):Promise <any> =>{
    const bancodedados = await fs.readFile('bancodedados.json')
    
    const resultado = JSON.parse(bancodedados.toString())

    return res.json(resultado)
})

app.post('/usuarios', async (req:Request, res:Response):Promise <any> =>{
    const {nome, email} =req.body
    const bancodedados = await fs.readFile('bancodedados.json')
    
    const resultado = JSON.parse(bancodedados.toString())

    resultado.usuarios.push({
        nome, 
        email
    })

    await fs.writeFile('bancodedados.json',JSON.stringify(resultado))

    return res.status(201).json({nome, email})

})

app.listen(3000)
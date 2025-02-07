import { db } from "../db/db.js";

export const clientGet = async (req, res)=>{

    const sql= 'select * from clients'
    const results=  await db.query(sql)
    res.json(results)

}

export const clientPost = async (req, res) =>{

    const sql = 'insert into clients (name, email) values ($1,$2)'
    const tmp = req.body
    const arr = [tmp.name, tmp.email]

    const results = await db.query(sql)

    res.json({message: "Client Created"})
}

export const clientPut = async (req,res) =>{

    const id_client = req.params.id
    const tmp = req.body
    const arr = [tmp.name, tmp.email, id_client]

    const sql = 'update clients set name= $1, email= $2 where id_client= $3'

    const results = await db.query(sql, arr)

    res.json({message: "Client Updated"})

}

export const clientDelete = async (req,res)=>{

    const id_client= req.params.id
    const sql= 'delete from clients where id_client=$1'
    const arr= [id_client]

    const results = await db.query(sql, arr)
    res.json({message: "Client Deleted"})

}
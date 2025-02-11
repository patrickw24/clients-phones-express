import { db } from "../db/db.js";

export const clientGet = async (req, res)=>{

    const sql= 'select * from clients'
    const results=  await db.query(sql)
    res.json(results)

}

export const clientPost = async (req, res) =>{

    const tmp = req.body

    if(!tmp.name){
        res.status(200).json({message:"Field: Name is empty"})
    }

    if(!tmp.email){
        res.status(200).json({message:"Field: Email is empty"})
    }


    try{
        const sql = 'insert into clients (name, email) values ($1 , $2)'
    
        const arr = [tmp.name, tmp.email]
    
        const results = await db.query(sql,arr)
    
        res.status(200).json({message: "Client Created"})
        return
    }catch(err){
        res.status(300).json({message: err})
        return
    }
   
}

export const clientPut = async (req,res) =>{

    const id = req.params.id
    const tmp = req.body
    const arr = [tmp.name, tmp.email, id]

    const sql = 'update clients set name= $1, email= $2 where id= $3'

    const results = await db.query(sql, arr)

    res.json({message: "Client Updated"})

}

export const clientDelete = async (req,res)=>{

    const id= req.params.id
    const sql= 'delete from clients where id=$1'
    const arr= [id]

    const results = await db.query(sql, arr)
    res.json({message: "Client Deleted"})

}
import { db } from "../db/db.js"

export const phoneGet= async (req, res)=>{

    const sql = 'select * from phones'
    const results= await db.query(sql)
    res.json(results)

}

export const phonePost = async (req, res)=>{

    const sql = 'insert into phones (client_id, phone_number) values ($1, $2)'
    const tmp = req.body
    const arr = [tmp.client_id, tmp.phone_number]

    const result = await db.query(sql, arr)
    res.json({message: "Phone Updated"})
}

export const phonePut = async (req,res)=>{

    const id_phones= req.params.id
    const sql = 'update phones set client_id= $1, phone_number= $2 where id_phones=$3'
    const tmp= req.body
    const arr= [tmp.client_id, tmp.phone_number, id_phones]

    const results= await db.query(sql,arr)
    res.json({message: "Phone Updates"})

    
}

export const phoneDelete = async (req, res)=>{

    const id_phones= req.params.id
    const sql= 'delete from phones where id_phones= $1'
    const arr=[id_phones]

    const result = await db.query(sql,arr)
    res.json({message: "Phone Deleted"})

}
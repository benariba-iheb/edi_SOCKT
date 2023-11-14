import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  database: 'edi',
  user: 'postgres',
  password: 'iheb',
})

export async function start_connection(){
     await client.connect().then(
          ( res ) => { console.log("connected to database ") } ,
          ( err ) => { console.log("error : " , err) }
     )
}

export async function query(sql_query){
     const result = await client.query(sql_query).then(
          ( res ) => { return res },
          ( err ) => { console.log("error : " , err) }
     )
     return result
}


export async function end_connection() {
     await client.end().then(     
          ( res ) => { console.log("disconnected from database ") } ,
          ( err ) => { console.log("error : " , err) }
     )
}


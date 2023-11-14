import express from 'express';
import { get_Customer_id , get_order , get_supplier , get_Product , get_order_item } from './requetes.js';
import {start_connection  , end_connection} from './bdd_conection.js'
const app = express();
const PORT = process.env.PORT || 3500;


app.use(express.urlencoded( {extended : false} ) );
app.use(express.json());


start_connection()


app.get("/Customer/:id" , async (req , res) => {
     const id = req.params.id
     const customer = await get_Customer_id(id)

     res.send({
          "first name" : customer.rows[0].firstname,
          "Last name" : customer.rows[0].lastname,
          "city" : customer.rows[0].city,
          "country" : customer.rows[0].country,
          "phone" : customer.rows[0].phone
     } )
}) 

app.get("/order/:id" , async (req , res) => { 
     const id = req.params.id 
     const order = await get_order(id)
     res.send({
          "order_date" : order.rows[0].orderdate,
          "ordernumber" : order.rows[0].ordernumber,
          "customerid" : order.rows[0].customerid,
          "totalamount" : order.rows[0].totalamount
     })
})



app.get("/supplier/:id" , async (req , res) => {
     const id = req.params.id
     const supplier = await get_supplier(id)
     res.send({
               "companyname" : supplier.rows[0].companyname,
               "contactname" : supplier.rows[0].contactname,
               "contacttitle" : supplier.rows[0].contacttitle,
               "city" : supplier.rows[0].city,
               "country" : supplier.rows[0].country,
               "phone" : supplier.rows[0].phone
          
     })
})


app.get("/product/:id" , async (req , res) => {
     const id = req.params.id
     const product = await get_Product(id)
     res.send({
          "productname" : product.rows[0].productname,
          "supplierid" : product.rows[0].supplierid,
          "unitprice" : product.rows[0].unitprice,
          "package" : product.rows[0].package,
          "isdiscontinued" : product.rows[0].isdiscontinued
     })
}) 



//error handling
app.all('*' , (req , res) => {
     res.status(404)
     console.log('this is from app.all')
     if(req.accepts('html')){
          res.sendFile('sent an html file')
     }
     else if(req.accepts('json')){
          res.json({error : "404 not found"})
          console.log('sent an json file')
     }
     else{
          res.type('txt').send('404 not found')
          console.log('sent an text file')
     }
     end_connection()
})


app.listen(PORT , () =>{
     console.log(`server running on port ${PORT}`)
})
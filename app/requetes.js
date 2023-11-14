import {query} from './bdd_conection.js'

export async function get_Customer_id(id){
     return await query(`SELECT * FROM "Customer" where id=${id}`).then(
          (res) => {console.log('query performed')
                    return res},
          (err) => {console.log(err)}
          )
}
/* 
export async function get_first_name(fname){
     return await query(`SELECT * FROM "Customer" where firstname=${fname}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}

export async function get_last_name(lname){
     return await query(`SELECT * FROM "Customer" where lastname=${lname}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}
export async function get_city(city){
     return await query(`SELECT * FROM "Customer" where city=${city}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}
export async function get_country(country){
     return await query(`SELECT * FROM "Customer" where country=${country}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
}
export async function get_phone(phone){
     return await query(`SELECT * FROM "Customer" where phone=${phone}`).then(
          (res) => {console.log('query performed')
                    return res.rows},
          (err) => {console.log(err)}
          )
} */

/*======================ORDER======================*/

export async function get_order(id){
     return await query(`SELECT * FROM "Order" where Id=${id}`).then(
          (res) => {console.log('query performed')
                    return res},
          (err) => {console.log(err)}
          )
}


/*======================ORDERITEM======================*/

export async function get_order_item(id){
     return await query(`SELECT * FROM "OrderItem" where Id=${id}`).then(
          (res) => {console.log('query performed')
                    return res},
          (err) => {console.log(err)}
          )
}

/*======================supplier======================*/

export async function get_supplier(id){
     return await query(`SELECT * FROM "Supplier" where Id=${id}`).then(
          (res) => {console.log('query performed')
                    return res},
          (err) => {console.log(err)}
          )
}

/*======================Product======================*/

export async function get_Product(id){
     return await query(`SELECT * FROM "Product" where Id=${id}`).then(
          (res) => {console.log('query performed')
                    return res},
          (err) => {console.log(err)}
          )
}    
const{createPool}=require('mysql');

const pool=createPool({
    host:'localhost',
    user:'emr_user',
    password:'V5j97NrwxU@7RDm@bZ7CU9',
    database:'emrdatabse',
    port:3306,
    connectionLimit:10


})

pool.query(`show tables`,(err,result,fields) =>{
    if(err){
        return console.log(err);

    }
    return console.log(result);
})
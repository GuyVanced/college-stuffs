const sql = require("../config/db.config.js");
const searchAll = () =>{
    return new Promise((resolve,reject)=> {
        sql.query('SELECT * FROM products',(err,results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });   
}
module.exports = {
    searchAll
};

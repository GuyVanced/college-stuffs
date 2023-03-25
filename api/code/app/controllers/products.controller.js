const UserModel = require("./../models/product.model.js");

const index = async(req,res) => {
    try{
        const products = await UserModel.searchAll();
        res.send(products);
    }
    catch(error){
        console.log(error);

    }
}

module.exports = {
    index
}
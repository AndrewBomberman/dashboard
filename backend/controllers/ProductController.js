import Product from "../models/Product.js"

const ProductController = {
    get:async(req,res) =>{
        res.status(200).json(await Product.find(req.query))
    },
    add:async(req,res)=>{
        res.status(200).json(await Product.create(req.body))
    },
    edit:async(req,res)=>{
        const {_id, name, description, price} = req.body
        res.status(200).json(await Product.findByIdAndUpdate(_id,{name:name, description:description, price:price}))
    },
    delete:async(req,res)=>{
        res.status(200).json(await Product.findOneAndDelete(req.body))
    }
}
export default ProductController;
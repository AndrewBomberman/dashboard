import Category from "../models/Category.js"
import Product from "../models/Product.js"
const deleteChildsAndProducts = async (category)=>{
  const categories = await Category.find({parent_id:category._id})
  await Category.deleteMany({parent_id:category._id})
  await Product.deleteMany({category_id:category._id})
  categories.forEach(child=>{
    deleteChildsAndProducts(child)
  })
}

const CategoryController = {
  get:async(req,res)=>{
    console.log("get")
    if(req.query.name){
      req.query.name = new RegExp(req.query.name, 'i');
    }
    //If the category is a child of another category
    if(req.query._id){
      const category = await Category.findById(req.query._id)
      const subcategories = await Category.find({parent_id:category._id})
      const products = await Product.find({category_id:category._id})
      res.status(200).json({
        category:category,
        subcategories:subcategories,
        products:products
      })
    }
    // If the category is a main category
    else{
      res.status(200).json({
        subcategories:await Category.find({parent_id:null}),
        products:await Product.find({category_id:null})
      })
    }
  }, 
  add:async(req,res)=>{
    console.log(req.body)
    const {parent_id, name, description} = req.body
    if(parent_id){
      res.status(200).json(await Category.create({parent_id:parent_id, name:name, description:description}))
    }
    else{
      res.status(200).json(await Category.create({name:name, description:description}))
    }
    
  },    
  edit:async (req,res)=>{
    const {_id, name, description} = req.body
    res.status(200).json(
      await Category.findByIdAndUpdate(_id,{name, description})
    )
  },
  delete:async(req,res)=>{
    const category = await Category.findOneAndDelete({_id:req.body._id})
    res.status(200).json(await deleteChildsAndProducts(category))
  }  
}
export default CategoryController;
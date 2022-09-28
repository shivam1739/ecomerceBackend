

const { Product, Category } = require('../models/index')
const { Op } = require('sequelize');



const getAllProducts = async () => {

    const getAllProductResponse = await Product.findAll({ include: Category });


    return getAllProductResponse

}

const addProduct = async (data) => {

    const addProductResponse = await Product.create({
        name: data.name,
        describtion: data.describtion,
        cost: data.cost,
        category_id: data.category_id
    })
    return addProductResponse
}

const getProductById = async (IdParam) => {
    const getProductByIdResponse = await Product.findAll({
        where: {
            id: IdParam
        }
    })

    return getProductByIdResponse

}
const getProductsbyname = async (nameParam) => {
    const getProductByNameResponse = await Product.findAll({
        where: {
            name: nameParam
        }
    })

    return getProductByNameResponse

}

const getProductByCategoryId  = async(categoryId)=>{
    const response = await Product.findAll({
        where:{
        category_id:categoryId
        }
    })
    return response;
}

const deleteProducrtById = async (idData) => {

    const deleteProducrtByIdResponse = await Product.destroy({
        where: {
            id: idData
        }
    }

    )
    
    return deleteProducrtByIdResponse
}

const updateProductById = async (dataId, body) => {

    const updateProductByIdResponse = await Product.update({
        name: body.name,
        describtion: body.describtion,
        cost: body.cost,
        category_id: body.category_id
    }, {
        where: {
            id: dataId
        }
    }
    )
    return updateProductByIdResponse
}


const getProductsByCostRange = async (data) => {
    const response = await findAll({
        where: {
            cost: {
                [Op.between]: [data.minCost, data.maxCost]
            }
        }

    })

    return response;
}



module.exports = { getAllProducts, addProduct, getProductById, updateProductById, deleteProducrtById, getProductsbyname, getProductsByCostRange ,getProductByCategoryId}



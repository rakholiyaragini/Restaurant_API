import ingredientModel from "../models/ingredient.js";
import menuItemModel from "../models/menuItem.js";
import menuItemIngredientModel from "../models/menuItemIngredientModel.js";

export const getMenuItemIngredients = async (req, res) => {
    try {
        const menuItemIngredients = await menuItemIngredientModel.find({}).populate({path:'menuItemId',populate: {path : 'menuId', }}).populate({path:'ingredientId',populate: {path : 'ingredientType', }});

        res.status(200).json(menuItemIngredients)
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'error': 'something went wrong' })
    }
}
export const getMenuItemIngredient = async (req, res) => {
    try {
        const menuItemIngredients = await menuItemIngredientModel.findOne({ _id: req.params.id }).populate('menuItemId').populate('ingredientId');

        if (!menuItemIngredients) {
            return res.status(404).json({ 'error': 'menu Item Ingredients are not found' })
        }

        res.status(200).json(menu)
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'error': 'something went wrong' })
    }
}

export const createMenuItemIngredient = async (req, res) => {
    try {
        const { itemIngedientQuantitiy , menuItemId, ingredientId } = req.body

        if (!itemIngedientQuantitiy || !menuItemId || !ingredientId) {
            return res.json({ 'msg': 'item Ingedient Quantitiy is required' })
        }

        const data = await menuItemIngredientModel({
            itemIngedientQuantitiy,
            menuItemId,
            ingredientId
        });

        await data.save()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'error': 'something went wrong' })
    }
}

export const updateMenuItemIngredient = async (req, res) => {
    try {

        const { itemIngedientQuantitiy , menuItemId, ingredientId } = req.body

        const data = await menuItemIngredientModel.findOneAndUpdate({ _id: req.params.id }, {
            itemIngedientQuantitiy,
            menuItemId,
            ingredientId
        });

        if (!data) {
            return res.status(404).json({ 'error': 'data not found' })
        }

        console.log("data", data);

        res.status(200).json({
            'msg': 'item Ingedient Quantitiy Date updated',
            data
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'error': 'something went wrong' })
    }
}

export const deleteMenuItemIngredient = async (req, res) => {
    try {
        const menuItemIngredient = await menuItemIngredientModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ 'msg': 'menu Item Ingredient deleted', menuItemIngredient })
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'error': 'something went wrong' })
    }
}
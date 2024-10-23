import menuItemModel from '../models/menuItem.js';
import menuModel from '../models/menu.js';
import orderModel from '../models/order.js';

export const getMenuItems = async(req,res) => {
    try{
        const menuItem = await menuItemModel.find({}).populate('menuId');

        res.status(200).json(menuItem)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
export const getMenuItem = async(req,res) => {
    try{
        const menuItem = await menuItemModel.findOne({_id : req.params.id}).populate('menuId');

        if(!menuItem){
            return res.status(404).json({'error' : 'menu Item not found'})
        }

        res.status(200).json(menuItem)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

export const createMenuItem = async(req,res) => {
    try {
        const {menuItemDescription,menuItemPrice,menuId} = req.body

        if(!menuItemDescription || !menuItemPrice || !menuId){
            return res.json({'msg' : 'all feilds are required'})
        }

        const data = await menuItemModel({
            menuItemDescription,
            menuItemPrice,
            menuId
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

export const updateMenuItem = async(req,res) => {
    try{

        const {menuItemDescription,menuItemPrice ,menuId} = req.body

        const data = await menuItemModel.findOneAndUpdate({_id : req.params.id},{
            menuItemPrice,
            menuItemDescription,
            menuId
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'menu items Date updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

export const deleteMenuItem = async(req,res) => {
    try{
        const menuItems = await menuItemModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'menu items deleted',menuItems})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

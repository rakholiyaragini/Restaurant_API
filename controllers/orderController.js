import orderModel from '../models/order.js';
import tableModel from '../models/tableModel.js';
import path from 'path';

export const getOrders = async(req,res) => {
    try{
        const order = await orderModel.find({}).populate({path : 'staffId', populate :{path:'staffRole'}}).populate('tableId');

        res.status(200).json(order)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

export const createOrder = async(req,res) => {
    try {
        const {orderDateTime , tableId, staffId} = req.body

        if(!orderDateTime || !tableId || !staffId){
            return res.json({'msg' : 'orderDateTime is required'})
        }

        const data = await orderModel({
            orderDateTime,
            tableId,
            staffId
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

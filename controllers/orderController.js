import orderModel from '../models/order.js';
import tableModel from '../models/tableModel.js';

export const getOrders = async(req,res) => {
    try{
        const order = await orderModel.find({});

        res.status(200).json(order)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

export const createOrder = async(req,res) => {
    try {
        const {orderDateTime} = req.body

        if(!orderDateTime){
            return res.json({'msg' : 'orderDateTime is required'})
        }

        const data = await orderModel({
            orderDateTime
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

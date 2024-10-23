import bookingModel from '../models/booking.js';
import tableModel from '../models/tableModel.js';
import customerModel from '../models/customer.js';

export const getBookings = async (req, res) => {
    try{
        const booking = await bookingModel.find({});

        res.status(200).json(booking)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

export const postbooking = async(req,res) => {
    try {
        const {dateOfBooking, numberOfMember} = req.body

        if(!dateOfBooking || !numberOfMember){
            return res.json({'msg' : 'all fields are required'})
        }

        const data = await productModel({
            dateOfBooking,
            numberOfMember
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}


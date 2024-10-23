import staffModel from '../models/staff.js';
import staffRoleModel from '../models/staffRoleModel.js';

export const getStaffs = async (req, res) => {
    try {
        const staff = await staffModel.find({});
        res.status(200).json(staff);
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
};

export const getStaff = async (req, res) => {
    try {
        const staff = await staffModel.findOne({ _id: req.params.id });

        if (!staff) {
            return res.status(404).json({ 'error': 'Staff not found' });
        }

        res.status(200).json(staff);
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
};

export const postStaff = async (req, res) => {
    try {
        const { staff_FName, staff_LName } = req.body;

        if (!staff_FName || !staff_LName) {
            return res.json({ 'msg': 'All fields are required' });
        }

        const data = new staffModel({
            staff_FName,
            staff_LName
        });

        await data.save();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
};

export const putStaff = async (req, res) => {
    try {
        const { staff_FName, staff_LName } = req.body;

        const data = await staffModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                staff_FName,
                staff_LName
            },
            { new: true }  // Return the updated document
        );

        if (!data) {
            return res.status(404).json({ 'error': 'Data not found' });
        }

        res.status(200).json({
            'msg': 'Staff updated',
            data
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
};

export const deleteStaff = async (req, res) => {
    try {
        const staff = await staffModel.findOneAndDelete({ _id: req.params.id });
        if (!staff) {
            return res.status(404).json({ 'error': 'Staff not found' });
        }
        res.status(200).json({ 'msg': 'Staff deleted', staff });
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
};

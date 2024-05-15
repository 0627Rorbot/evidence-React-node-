const Casee = require('../models/casee');

exports.createCasee = async (req, res) => {
    try {
        const newCasee = await Casee.create(req.body);
        res.status(201).json(newCasee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getCaseeById = async (req, res) => {
    try {
        const casee = await Casee.findById(req.params.caseeId);
        res.json(casee);
    } catch (error) {
        res.status(404).json({ message: 'Casee not found' });
    }
};

exports.getCasees = async (req, res) => {
    try {
        const casees = await Casee.find({});
        res.json(casees);
    } catch (error) {
        res.status(404).json({ message: 'Casee not found' });
    }
};

exports.updateCasee = async (req, res) => {
    try {
        const updatedCasee = await Casee.findByIdAndUpdate(req.params.caseeId, req.body, { new: true });
        res.json(updatedCasee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCasee = async (req, res) => {
    try {
        await Casee.findByIdAndDelete(req.params.caseeId);
        res.json({ message: 'Casee deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

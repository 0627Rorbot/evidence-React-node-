const Evidence = require('../models/evidence');

exports.createEvidence = async (req, res) => {
    try {
        const newEvidence = await Evidence.create(req.body);
        res.status(201).json(newEvidence);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getEvidences = async (req, res) => {
    try {
        const evidences = await Evidence.find({});
        res.status(201).json(evidences);
    } catch (error) {
        res.status(404).json({ message: 'Evidence not found' });
    }
};

exports.getEvidencesByCaseId = async (req, res) => {
    try {
        const id = req.params.caseId;
        console.log(id);
        const evidences = await Evidence.finds({caseId: id});
        res.json(evidences);
    } catch (error) {
        res.status(404).json({ message: 'Evidence not found' });
    }
};

exports.updateEvidence = async (req, res) => {
    try {
        const updatedEvidence = await Evidence.findByIdAndUpdate(req.params.EvidenceId, req.body, { new: true });
        res.json(updatedEvidence);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEvidence = async (req, res) => {
    try {
        await Evidence.findByIdAndDelete(req.params.EvidenceId);
        res.json({ message: 'Evidence deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

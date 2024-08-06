import Contract from '../models/contract.js';

export const createContract = async (req, res) => {
  try {
    const contract = await Contract.create(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const editContract = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Contract.update(req.body, {
        where: { id: id }
      });
      if (updated) {
        const updatedContract = await Contract.findOne({ where: { id: id } });
        res.status(200).json(updatedContract);
      } else {
        res.status(404).json({ error: 'Contract not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  export const deleteContract = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Contract.destroy({
        where: { id: id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Contract not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
    
export const getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.findAll();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

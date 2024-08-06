import Credit from '../models/credit.js';

export const createCredit = async (req, res) => {
  try {
    const credit = await Credit.create(req.body);
    res.status(201).json(credit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCredit = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Credit.destroy({
        where: { id: id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Credit not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
export const editCredit = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Credit.update(req.body, {
        where: { id: id }
      });
      if (updated) {
        const updatedCredit = await Credit.findOne({ where: { id: id } });
        res.status(200).json(updatedCredit);
      } else {
        res.status(404).json({ error: 'Credit not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

export const getAllCredits = async (req, res) => {
  try {
    const credits = await Credit.findAll({ include: 'contract' });
    res.status(200).json(credits);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

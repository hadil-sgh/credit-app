import RepaymentPlan from '../models/repaymentPlan.js'; 

export const createRepaymentPlan = async (req, res) => {
  try {
    const repaymentPlan = await RepaymentPlan.create(req.body);
    res.status(201).json(repaymentPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRepaymentPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await RepaymentPlan.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'RepaymentPlan not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const editRepaymentPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await RepaymentPlan.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedRepaymentPlan = await RepaymentPlan.findOne({ where: { id: id } });
      res.status(200).json(updatedRepaymentPlan);
    } else {
      res.status(404).json({ error: 'RepaymentPlan not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllRepaymentPlans = async (req, res) => {
  try {
    const repaymentPlans = await RepaymentPlan.findAll();
    res.status(200).json(repaymentPlans);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

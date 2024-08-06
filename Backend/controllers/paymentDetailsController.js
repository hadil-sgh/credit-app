import PaymentDetails from '../models/paymentDetails.js'; // Adjust the path accordingly

export const createPaymentDetails = async (req, res) => {
  try {
    const paymentDetails = await PaymentDetails.create(req.body);
    res.status(201).json(paymentDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePaymentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await PaymentDetails.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'PaymentDetails not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const editPaymentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await PaymentDetails.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedPaymentDetails = await PaymentDetails.findOne({ where: { id: id } });
      res.status(200).json(updatedPaymentDetails);
    } else {
      res.status(404).json({ error: 'PaymentDetails not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllPaymentDetails = async (req, res) => {
  try {
    const paymentDetails = await PaymentDetails.findAll();
    res.status(200).json(paymentDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

import Contract from '../models/contract.js';
import PDFDocument from 'pdfkit';
import Credit from '../models/credit.js'; 

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
export const generateContractReport = async (req, res) => {
  try {
    const { id } = req.params;

    const contract = await Contract.findOne({
      where: { id: id },
      include: {
        model: Credit,
        as: 'credit' 
      }
    });

    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }

    const doc = new PDFDocument();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=contract_${id}.pdf`);

    doc.pipe(res);

    doc.fontSize(20).text('Contract Report', { align: 'center' });

    doc.moveDown();
    doc.fontSize(14).text(`Contract Reference: ${contract.contractReference}`);
    doc.text(`First Name: ${contract.userFirstName}`);
    doc.text(`Last Name: ${contract.userLastName}`);
    doc.text(`Residence Location: ${contract.residenceLocation}`);

    if (contract.credit) {
      doc.moveDown();
      doc.fontSize(16).text('Credit Information', { underline: true });
      doc.fontSize(14).text(`Credit Type: ${contract.credit.creditType}`);
      doc.text(`Credit Status: ${contract.credit.creditStatus}`);

    }

    doc.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
import express from 'express';
import sequelize from './connection/database.js'; 
import contractRoutes from './routes/contractRoutes.js';
import creditRoutes from './routes/creditRoutes.js';
import paymentDetailsRoutes from './routes/paymentDetailsRoutes.js'; 
import repaymentPlanRoutes from './routes/repaymentPlanRoutes.js'; 

const app = express();

app.use(express.json());

sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables synced!');
});

app.use('/contracts', contractRoutes);
app.use('/credits', creditRoutes);
app.use('/payment-details', paymentDetailsRoutes); 
app.use('/repayment-plans', repaymentPlanRoutes); 

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

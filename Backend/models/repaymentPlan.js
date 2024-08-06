import { DataTypes } from 'sequelize';
import sequelize from '../connection/database.js'; 
import PaymentDetails from './paymentDetails.js';
import Credit from './credit.js'; 

const RepaymentPlan = sequelize.define('RepaymentPlan', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  startingBalance: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  startingBalanceReimbursementAmount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  repaymentOfCapital: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  remainingDueBalance: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  interestAndCumulate: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
}, {
  tableName: 'repayment_plan',
  timestamps: false,
});

// Associations
RepaymentPlan.belongsTo(PaymentDetails, { foreignKey: 'payment_details_id', as: 'paymentDetails' });
RepaymentPlan.belongsTo(Credit, { foreignKey: 'credit_id', as: 'credit' });

export default RepaymentPlan;

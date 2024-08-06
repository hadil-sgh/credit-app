import { DataTypes } from 'sequelize';
import sequelize from '../connection/database.js';
import Contract from './contract.js';

const Credit = sequelize.define('Credit', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  creditType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creditStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creditAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  creditDuration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  contractId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'contract',
      key: 'id',
    },
  },
}, {
  tableName: 'credit',
});

Credit.belongsTo(Contract, { foreignKey: 'contractId', as: 'contract' });
Contract.hasOne(Credit, { foreignKey: 'contractId', as: 'credit' });

export default Credit;

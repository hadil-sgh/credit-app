import { DataTypes } from 'sequelize';
import sequelize from '../connection/database.js';

const Contract = sequelize.define('Contract', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  contractReference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  residenceLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'contract',
});

export default Contract;

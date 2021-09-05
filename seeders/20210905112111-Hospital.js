'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Hospitals', [
      {
        name : 'RSUD Madani Kota Palu',
        pointX : '-0.789287',
        pointY : '119.869477',
        telephonNumber : '04514131446',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'RS Umum Daerah Undata Palu',
        pointX : '-0.858404',
        pointY : '119.885291',
        telephonNumber : '04514131446',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'RS Woodward',
        pointX : '-0.904197',
        pointY : '119.87181',
        telephonNumber : '0451421769',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'RS TK. III. 13.06.01 Dr. Sindhu Trisno',
        pointX : '-0.895883',
        pointY : '119.887469',
        telephonNumber : '081213756763',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'RS Umum Sis Al Jufri Palu',
        pointX : '-0.903345',
        pointY : '119.857551',
        telephonNumber : '085656663878',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'RS Umum Anutapura Palu',
        pointX : '-0.899967',
        pointY : '119.849521',
        telephonNumber : '085242816072',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Hospitals', null, {});
  }
};

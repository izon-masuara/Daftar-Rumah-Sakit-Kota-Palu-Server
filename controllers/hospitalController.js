const { Hospital } = require('../models')

class HospitalController{
    static async getHospital(req,res,next){
        const data = await Hospital.findAll({
            attributes : {
                exclude : [
                    'createdAt',
                    'updatedAt'
                ]
            }
        })
        try {
            res.status(200).json(data)
        } catch (err) {
            res.status(500).json({
                msg:`Internal Server Error`
            })
        } 
    }
}

module.exports = HospitalController
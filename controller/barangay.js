const Barangay = require('../models').Barangay;
module.exports = {

    async getAllBarangays(req,res) {

        try {

            const barangayCollection = await Barangay.findAll({});

            res.status(201).send(barangayCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async getBarangay(req,res) {
        try {
            console.log(req.params);
            let barangayid = req.params.id;
            const barangayCollection = await Barangay.findOne({
                where: {
                    id: barangayid
                }
            });

            res.status(201).send(barangayCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const barangayCollection = await Barangay
            .create({
                barangay : req.body.barangay,
            });

            res.status(201).send(barangayCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const barangayCollection = await Barangay.find({
                id : req.params.barangayId
            });

            if(barangayCollection){

                const updatedBarangay = await Barangay.update({
                    id : req.body.barangay
                });

                res.status(201).send(updatedBarangay)

            }
            else{

                res.status(404).send("Barangay Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 
}
const Province = require('../models').Province;
module.exports = {

    async getAllProvinces(req,res) {

        try {

            const provinceCollection = await Province.findAll({});

            res.status(201).send(provinceCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async getProvince(req,res) {
        try {
            console.log(req.params);
            let provinceId = req.params.id;
            const provinceCollection = await Province.findOne({
                where: {
                    id: provinceId
                }
            });

            res.status(201).send(provinceCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const provinceCollection = await Province
            .create({
                province : req.body.province,
            });

            res.status(201).send(provinceCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const provinceCollection = await Province.find({
                id : req.params.provinceId
            });

            if(provinceCollection){

                const updatedProvince = await Province.update({
                    id : req.body.province
                });

                res.status(201).send(updatedProvince)

            }
            else{

                res.status(404).send("Province Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 
}
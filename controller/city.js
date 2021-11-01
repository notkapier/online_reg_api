const City = require('../models').City;
module.exports = {

    async getAllCities(req,res) {

        try {

            const cityCollection = await City.findAll({});

            res.status(201).send(cityCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async getCity(req,res) {
        try {
            console.log(req.params);
            let cityId = req.params.id;
            const cityCollection = await City.findOne({
                where: {
                    id: cityId
                }
            });

            res.status(201).send(cityCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const cityCollection = await City
            .create({
                city : req.body.city,
            });

            res.status(201).send(cityCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const cityCollection = await City.find({
                id : req.params.cityId
            });

            if(cityCollection){

                const updatedCity = await City.update({
                    id : req.body.city
                });

                res.status(201).send(updatedCity)

            }
            else{

                res.status(404).send("City Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 
}
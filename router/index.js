const barangayController = require('../controller/barangay');
const cityController = require('../controller/city');
const provinceController = require('../controller/province');
module.exports = (app) => {

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    })

    app.get('/api/barangays',barangayController.getAllBarangays);

    app.get('/api/barangay/:id',barangayController.getBarangay);

    app.post('/api/barangay/create',barangayController.create);

    app.put('/api/barangay/:barangayId',barangayController.update);

    app.get('/api/cities',cityController.getAllCities);

    app.get('/api/city/:id',cityController.getCity);

    app.post('/api/city/create',cityController.create);

    app.put('/api/city/:id',cityController.update);

    app.get('/api/provinces',provinceController.getAllProvinces);

    app.get('/api/province/:id',provinceController.getProvince);

    app.post('/api/province/create',provinceController.create);

    app.put('/api/province/:id',provinceController.update);


}
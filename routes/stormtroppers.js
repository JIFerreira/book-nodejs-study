var express = require('express'),
    router = express.Router();



    var mongo = require('../db/mongo');
    var StormtropperModel = require('../models/StormtroppersModel.js')(mongo);
    var StormtropperController = require('../controllers/StormtroppersController.js')(StormtropperModel);

    router.get('/', StormtropperController.getAll.bind(StormtropperController));

    router.get('/:_id', StormtropperController.getById.bind(StormtropperController));

    router.post('/', StormtropperController.create.bind(StormtropperController));

    router.put('/:_id', StormtropperController.update.bind(StormtropperController));

    router.delete('/:_id', StormtropperController.remove.bind(StormtropperController));

    module.exports = router;
    
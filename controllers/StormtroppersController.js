var debug = require('debug')('livro_mongojs');

function StormtropperController(StormtropperModel){ 
    this.model = StormtropperModel;
}

StormtropperController.prototype.getAll = function(request, respose, next){
    this.model.find({}, function(err, data){
        if(err){
            return next(err);
        }

        response.json(data);
    });

    //response.send('get all stormtroppers');
}

StormtropperController.prototype.getById = function(request, respose, next){
    var _id = request.params._id;
    this.modelfindOne(_id, function(err, data){
        if(err){
            return next(err);
        }

        response.json(data);
    });
    //response.send('get a specific stormtropper by id');
}

StormtropperController.prototype.create = function(request, respose, next){
    var body = request.body;
    this.model.create(body, function(){
        if(err){
            return next(err);
        }

        response.json(data);
    });

    //response.send('create a new stormtropper');
}

StormtropperController.prototype.update = function(request, respose, next){
    var _id = request.params._id,
        body = request.body;

        this.model.update(_id, body, function(err, data){
            if(err){
                return next(err);
            }

            response.json(data);
        })
    //response.send('update a stormtropper');
}

StormtropperController.prototype.remove = function(request, respose, next){
    var _id = request.params._id;
    this.model.remove(_id, function(err, data){
        return next(err);
    });
    
    response.json(data);
    //response.send('remove a specific stormtropper');
}

module.exports = function(StormtropperModel){
    return new StormtropperController(StormtropperModel);
}




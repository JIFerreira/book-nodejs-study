function StormtropperModel(mongo){
    this.mongo = mongo;
}

StormtropperModel.prototype.find = function(query, callback){
    this.mongo.colletion('stormtroppers').find(query, callback);
}

StormtropperModel.prototype.findOne = function(_id, callback){
    var query = {
        _id: this.mongo.ObjectId(_id)
    };

    this.mongo.collection('stormtroppers').findOne(query, callback);
}

StormtropperModel.prototype.create = function(query, callback){
    this.mongo.colletion('stormtroppers').insert(data, callback);
}

StormtropperModel.prototype.update = function(query, callback){
    var query = {
        _id: this.mongo.ObjectId(_id)
    };

    this.mongo.colletion('stormtroppers').update(query, data, callback);
}

StormtropperModel.prototype.remove = function(query, callback){
    var query = {
        _id: this.mongo.ObjectId(_id)
    };

    this.mongo.colletion('stormtroppers').remove(query, callback);
}

module.exports = function(mongo){
    return new StormtropperModel();
}
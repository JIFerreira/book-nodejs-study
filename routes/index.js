var express = require('express'),
    router = express.Router();
    
router.get('/', function(req, res){
    res.status(201);

    if(req.accepts('text')){
        res.write('name; email\n')
        res.write('William Bruno; wbruno@gmail.com\n');
        res.end();    
    }else{
        res.json({'name': 'William Bruno', 'email': 'wbrunom@gmail.com'});
    }
});

// stormtroppers
router.use('/stormtroppers', require('./stormtroppers'));

module.exports = router;

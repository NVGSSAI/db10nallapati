var apple = require('../models/apple');
// List of all apple
exports.apple_list = function(req, res) {
res.send('NOT IMPLEMENTED: apple list');
};
// List of all apples
exports.apple_list = async function(req, res) {
    try{
    theapples = await apple.find();
    res.send(theapples);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

// for a specific apple.
exports.apple_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await apple.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle apple create on POST.
exports.apple_create_post = async function(req, res) {
    console.log(req.body)
    let document = new apple();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"appletype":"goat", "cost":12, "size":"large"}
    document.applename = req.body.applename;
    document.color = req.body.color;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
};
// Handle apple delete form on DELETE.
exports.apple_delete = function(req, res) {
res.send('NOT IMPLEMENTED: apple delete DELETE ' + req.params.id);
};
// Handle apple update form on PUT.
exports.apple_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await apple.findById( req.params.id)
        if(req.body.applename) toUpdate.applename = req.body.applename;
        if(req.body.color) toUpdate.color = req.body.color;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};
// VIEWS
// Handle a show all view
exports.apple_view_all_Page = async function(req, res) {
    try{
    theapples = await apple.find();
    res.render('apples', { title: 'apple Search Results', results: theapples });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
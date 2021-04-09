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
// for a specific apple.s
exports.apple_detail = function(req, res) {
res.send('NOT IMPLEMENTED: apple detail: ' + req.params.id);
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
exports.apple_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Apple update PUT' + req.params.id);
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
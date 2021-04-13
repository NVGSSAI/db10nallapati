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
exports.apple_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await apple.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
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
// Handle a show one view with id specified by query
exports.apple_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await apple.findById( req.query.id)
        res.render('appledetail', 
{ title: 'apple Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.apple_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('applecreate', { title: 'apple Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.apple_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await apple.findById(req.query.id)
        res.render('appleupdate', { title: 'apple Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.apple_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await apple.findById(req.query.id)
        res.render('appledelete', { title: 'Apple Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



var express = require('express');
const apple_controlers= require('../controllers/apple');
var router = express.Router();

/* GET home page. */
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
router.get('/', apple_controlers.apple_view_all_Page );
/* GET detail apple page */
router.get('/detail', apple_controlers.apple_view_one_Page);
/* GET create apple page */
router.get('/create',secured, apple_controlers.apple_create_Page);
/* GET create update page */
router.get('/update',secured, apple_controlers.apple_update_Page);
/* GET create costume page */
router.get('/delete',secured, apple_controlers.apple_delete_Page);





module.exports = router;
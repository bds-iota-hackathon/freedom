/**
 * POST /freedomPassApplication
 */
var mongoose = require('mongoose');
var model = require('../models/model');


exports.freedomPassApplicationPost = function(req, res) {
// //   req.assert('name', 'Name cannot be blank').notEmpty();
// //   req.assert('email', 'Email is not valid').isEmail();
// //   req.assert('email', 'Email cannot be blank').notEmpty();
// //   req.assert('message', 'Message cannot be blank').notEmpty();
// //   req.sanitize('email').normalizeEmail({ remove_dots: false });
// //
// //   var errors = req.validationErrors();
// //
// //   if (errors) {
// //     return res.status(400).send(errors);
// //   }
// //
// //   var mailOptions = {
// //     from: req.body.name + ' ' + '<'+ req.body.email + '>',
// //     to: 'your@email.com',
// //     subject: '✔ Contact Form | Mega Boilerplate',
// //     text: req.body.message
// //   };
// //
// //   transporter.sendMail(mailOptions, function(err) {
//     var Cat = mongoose.model('Cat', { name: String });
//
//     var freedomPassApplication = new Cat({ name: req.body.did });
//     freedomPassApplication.save(function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('meow');
//         }
//     });

    var freedomPassApplication = new model.FreedomPassApplication({
        DoctorID : req.body.did,
        NationalInsuranceNumber: req.body.nin

    });

    freedomPassApplication.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Freeeeeee');
        }
    });

    res.send({ msg: 'Thank you! Your Freedom Pass Application has been submitted. '+ req.body.did + ' ' + req.body.nin});

    console.log('Freedom Pass Application has been submitted');
};

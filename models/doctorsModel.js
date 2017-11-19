var mongoose = require('mongoose');

var Doctors = mongoose.model('Doctors', {
    DoctorID: String,
    CertificatesIssued: String
});

// var kitty = new Cat({ name: req.body.did });
// kitty.save(function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('meow');
//     }
// });

exports.Doctors = Doctors;
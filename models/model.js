var mongoose = require('mongoose');

var FreedomPassApplication = mongoose.model('FreedomPassApplication', {
    DoctorID: String,
    NationalInsuranceNumber: String,
    DoctorsPhoneNumber: String,
    DoctorsPostalCode: String,
    ApplicantsPostalCode: String,
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

exports.FreedomPassApplication = FreedomPassApplication;
var fakeGen = require('./app/api/fakeGen')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/freedom', { useMongoClient: true });
mongoose.Promise = global.Promise;

var FreedomPassApplication = mongoose.model('FreedomPassApplication', {
  DoctorID: String,
  NationalInsuranceNumber: String,
  DoctorsPhoneNumber: String,
  DoctorsPostalCode: String,
  ApplicantsPostalCode: String,
});

var fakeDoctor = fakeGen.generateDoctor()
var fakeApplicant = fakeGen.generateApplicant()
var freedomPassApplication = new FreedomPassApplication({
    DoctorID: fakeDoctor.id,
    NationalInsuranceNumber: fakeApplicant.id,
    DoctorsPhoneNumber: fakeApplicant.phone,
    DoctorsPostalCode: fakeDoctor.postCode,
    ApplicantsPostalCode: fakeApplicant.postCode
});
freedomPassApplication.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});

//console.log(fakeGen.generateApplicant());


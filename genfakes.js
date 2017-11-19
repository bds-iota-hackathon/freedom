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

FreedomPassApplication.aggregate([
    {
      $group: {
        _id: '$DoctorID',  //$region is the column name in collection
        count: {$addToSet: '$NationalInsuranceNumber'}
      }
    }
   ], function (err, result) {
    if (err) {
      next(err);
    } else {
      result.forEach(function (a) {
        a.number = a.count.length;
        delete a.count;
      })
      result.sort(function (a,b) {
        console.log("a",a.number,"  b",b.number)
        return a.number < b.number;
      })
      console.log(result);
      //res.send(result);
    }
   });


// for (var i=0; i<20; i++) {
    
//     var fakeDoctor = fakeGen.generateDoctor()

//     var patients = Math.round((Math.random()*20));
//     for (var a=0; a<patients; a++) {

//         var fakeApplicant = fakeGen.generateApplicant()

//         var freedomPassApplication = new FreedomPassApplication({
//             DoctorID: fakeDoctor.id,
//             NationalInsuranceNumber: fakeApplicant.id,
//             DoctorsPhoneNumber: fakeApplicant.phone,
//             DoctorsPostalCode: fakeDoctor.postCode,
//             ApplicantsPostalCode: fakeApplicant.postCode
//         });

//         freedomPassApplication.save(function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(i+ ": " + fakeDoctor.id);
//             }
//         });
//     }

// }

//console.log();
//console.log(fakeGen.generateApplicant());


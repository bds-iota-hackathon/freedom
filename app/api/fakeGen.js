
var faker = require('faker');

class Person {
	constructor(id, postCode, phone) {
		this.id = id;
		this.postCode = postCode;
		this.phone = phone;
	}
}

function generateDoctor() {
	
	var doctorId = faker.random.alphaNumeric(7).toUpperCase()
	var doctorZipCode = faker.random.alphaNumeric(7).toUpperCase()
	
	return new Person(doctorId, doctorZipCode)
}

function  generateApplicant(){
	
	var applicantInsNumber = faker.random.alphaNumeric(10).toUpperCase()
	var applicantZipCode = faker.random.alphaNumeric(7).toUpperCase()
	var applicantPhone = faker.phone.phoneNumberFormat(1)

	return new Person(applicantInsNumber, applicantZipCode, applicantPhone)
}


exports.generateDoctor = generateDoctor
exports.generateApplicant = generateApplicant
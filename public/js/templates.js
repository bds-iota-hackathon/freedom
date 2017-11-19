angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <div class="panel">\n    <div class="panel-heading">\n      <h3 class="panel-title">Enter transaction request {{foo}}</h3>\n    </div>\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="sendTransactionRequestForm()" class="form-horizontal">\n        <div class="form-group">\n          <label for="name" class="col-sm-2">Name</label>\n          <div class="col-sm-8">\n            <input type="text" name="name" id="name" class="form-control" ng-model="transactionRequest.name" autofocus>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="email" class="col-sm-2">Email</label>\n          <div class="col-sm-8">\n            <input type="email" name="email" id="email" class="form-control" ng-model="transactionRequest.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message" class="col-sm-2">Body</label>\n          <div class="col-sm-8">\n            <textarea name="message" id="message" rows="7" class="form-control" ng-model="transactionRequest.message"></textarea>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-2 col-sm-8">\n            <button type="submit" class="btn btn-success">Send {{transactionRequest.name}}</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/doctors.html','<div class="container">\n    <div class="panel">\n        <div class="panel-heading">\n            <h3 class="panel-title">Doctors</h3>\n        </div>\n        <div class="panel-body">\n            <!--<div ng-repeat="value in values">-->\n            <!--{{value}}-->\n                <!--<hr>-->\n            <!--</div>-->\n            <table style="width:100%">\n                <tr>\n                    <th>Doctor ID</th>\n                    <th>Certificates Issued</th>\n                </tr>\n                <tr ng-repeat="value in values">\n                    <td>{{value.DoctorID}}</td>\n                    <td>{{value.CertificatesIssued}}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2017 IOTAHACK. Freedom Pass fraud detection.</p>\n</footer>');
$templateCache.put('partials/freedompassapplication.html','<div class="container">\n    <div class="panel">\n        <div class="panel-heading">\n            <h3 class="panel-title">Enter application data</h3>\n        </div>\n        <div class="panel-body">\n\n            <div ng-show="loading">\n                Loading ...\n                <img src="http://www.ajaxload.info/cache/FF/FF/FF/00/00/00/1-0.gif"/>\n            </div>\n\n            <div ng-hide="loading">\n                <div ng-if="messages.error" role="alert" class="alert alert-danger">\n                    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n                </div>\n                <div ng-if="messages.success" role="alert" class="alert alert-success">\n                    <div ng-repeat="success in messages.success">{{success.msg}}</div>\n                </div>\n                <form ng-submit="sendFreedomPassApplication()" class="form-horizontal">\n                    <div class="form-group">\n                        <label for="did" class="col-sm-2">Doctor ID</label>\n                        <div class="col-sm-8">\n                            <input type="text" name="Doctor ID" id="did" class="form-control"\n                                   ng-model="freedomPassApplication.did" autofocus>\n                        </div>\n                    </div>\n                    <div class="form-group">\n                        <label for="nin" class="col-sm-2">National Insurance Number for Applicant</label>\n                        <div class="col-sm-8">\n                            <input type="text" name="National Insurance Number" id="nin" class="form-control"\n                                   ng-model="freedomPassApplication.nin">\n                        </div>\n                    </div>\n                    <div class="form-group">\n                        <label for="message" class="col-sm-2">Body</label>\n                        <div class="col-sm-8">\n                            <textarea name="message" id="message" rows="7" class="form-control"\n                                      ng-model="freedomPassApplication.message"></textarea>\n                        </div>\n                    </div>\n                    <div class="form-group">\n                        <div class="col-sm-offset-2 col-sm-8">\n                            <button type="submit" class="btn btn-success">Send</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>');
$templateCache.put('partials/header.html','<nav ng-controller="HeaderCtrl" class="navbar navbar-default navbar-static-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" data-toggle="collapse" data-target="#navbar" class="navbar-toggle collapsed">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a href="/" class="navbar-brand">Freedom Pass</a>\n    </div>\n    <div id="navbar" class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li ng-class="{ active: isActive(\'/\')}"><a href="/">Home</a></li>\n        <li ng-class="{ active: isActive(\'/freedompassapplication\')}"><a href="/freedompassapplication">Freedom Pass Application</a></li>\n        <li ng-class="{ active: isActive(\'/list\')}"><a href="/list">List</a></li>\n        <li ng-class="{ active: isActive(\'/doctors\')}"><a href="/doctors">Doctors</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n');
$templateCache.put('partials/home.html','<div class="container-fluid">\n  <div class="row">\n    <div class="col-sm-6">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>Submit Freedom Pass Application</h3>\n          <p>When a new application is coming in, it should be submitted and entered onto the Tangle. To do it, please navigate to \'Freedom Pass Application\'</p>\n          <a href="/freedompassapplication" role="button" class="btn btn-default">\'Freedom Pass Application\'</a>\n        </div>\n      </div>\n    </div>\n    <div class="col-sm-6">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>List</h3>\n          <p>When controlling if a certificate is issued by a doctor, one has to verify that a corresponding IOTA transaction exists.</p>\n          <a href="/list" role="button" class="btn btn-default">List</a>\n        </div>\n      </div>\n    </div>\n    <!--<div class="col-sm-4">-->\n      <!--<div class="panel">-->\n        <!--<div class="panel-body">-->\n          <!--<h3>Heading</h3>-->\n          <!--<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris-->\n            <!--condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.-->\n            <!--Donec sed odio dui.</p>-->\n          <!--<a href="#" role="button" class="btn btn-default">View details</a>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n</div>\n');
$templateCache.put('partials/list.html','<div class="container">\n    <div class="panel">\n        <div class="panel-heading">\n            <h3 class="panel-title">Certificates issued</h3>\n        </div>\n        <div class="panel-body">\n            <!--<div ng-repeat="value in values">-->\n            <!--{{value}}-->\n                <!--<hr>-->\n            <!--</div>-->\n            <table style="width:100%">\n                <tr>\n                    <th>Doctor ID</th>\n                    <th>National Insurance Number</th>\n                    <th>Phone number of doctor</th>\n                    <th>Postal code of doctor</th>\n                    <th>Postal code of applicant</th>\n                    <th>Certificates issued</th>\n                </tr>\n                <tr ng-repeat="value in values">\n                    <td>{{value.DoctorID}}</td>\n                    <td>{{value.NationalInsuranceNumber}}</td>\n                    <td>{{value.DoctorsPhoneNumber}}</td>\n                    <td>{{value.DoctorsPostalCode}}</td>\n                    <td>{{value.ApplicantsPostalCode}}</td>\n                    <td>{{value.CertificatesIssued}}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>');
$templateCache.put('partials/transactionrequest.html','<div class="container">\n  <div class="panel">\n    <div class="panel-heading">\n      <h3 class="panel-title">Enter transaction request {{foo}}</h3>\n    </div>\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="sendTransactionRequestForm()" class="form-horizontal">\n        <div class="form-group">\n          <label for="did" class="col-sm-2">Doctor ID</label>\n          <div class="col-sm-8">\n            <input type="text" name="Doctor ID" id="did" class="form-control" ng-model="transactionRequest.did" autofocus>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="nin" class="col-sm-2">National Insurance Number for Applicant</label>\n          <div class="col-sm-8">\n            <input type="text" name="National Insurance Number" id="nin" class="form-control" ng-model="transactionRequest.nin">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message" class="col-sm-2">Body</label>\n          <div class="col-sm-8">\n            <textarea name="message" id="message" rows="7" class="form-control" ng-model="transactionRequest.message"></textarea>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-2 col-sm-8">\n            <button type="submit" class="btn btn-success">Send {{transactionRequest.name}}</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>');}]);
const expect = require('chai').expect;
const request = require('request');
const app = require('../server'); 

const baseUrl = "http://localhost:5000/vendor"

const testVendorPark = {
    validBody: {
        "parked": true,
        "location": [-37.79406871867763, 144.96121584098128],
        "textAddress": "union house"
    }
}
const testVendorId = "60b3794cbcb5f95cd0ec7331" //id

//Initially define some vendor information, then test

describe("vendor integration tests", () => {
    it("should successfully set status of van of parking", function (done) {
        request.post(
            {
                headers: { 'content-type': 'application/json' },
                url: baseUrl + '/park' + testVendorId,
                body: testVendorPark.validBody,
                json: true,
            },
            function (error, response, body) {
                expect(response, statusCode).to.equal(200);
                expect(body.updatedVendor.parked).to.equal(true);
                if (error) done(error);
                else done();
            }
        );
    })
})
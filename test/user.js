//process.env.NODE_ENV = 'test';

const app = require('../app');
const { User } 	    = require('../models');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const apiVersionNum = '/v1';

chai.use(chaiHttp);

//Our parent block
describe('Users', () => {

	beforeEach((done) => {
		done();
	});

	describe('/POST users', () => {

		it('it should create new user', (done) => {

			User.destroy({
				where: {
					email : "vladislav.padalka+wiqhit3@hys-enterprise.com"
				}
			}).then(() => {

				let user = {
					first: "Vlad",
					last: "Web",
					email: "vladislav.padalka+wiqhit3@hys-enterprise.com",
					password: "kTNzHtas4ZBU"
				}
				chai.request(app)
					.post(apiVersionNum + '/users')
					.send(user)
					.end((err, res) => {
						res.should.have.status(201);
						done();
					});
			});

		});

	});

	describe('/POST users/login', () => {
		it('it should login a user', (done) => {
			let user = {
				email: "vladislav.padalka+wiqhit3@hys-enterprise.com",
				password: "kTNzHtas4ZBU"
			}
			chai.request(app)
				.post(apiVersionNum + '/users/login')
				.send(user)
				.end((err, res) => {
					console.log("+++++++++1", res.body);
					//res.should.have.status(201);
					done();
				});
		});
	});

	/*
	describe('/GET users', () => {
		it('it should get specified user', (done) => {
			chai.request(app)
		  .get(apiVersionNum + '/users')
		  .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNzE0LCJpYXQiOjE1Mzg5ODI2MDksImV4cCI6MTUzODk5MjYwOX0.5yr0728xf5BTy1YxrA-RBFS1Oq4-jpVa5Y3-rvppcHE')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.user.should.be.a('object');
				res.body.success.should.be.eql(true);
				res.body.user.have.property('email');
				res.body.user.email.should.be.eql('vladislav.padalka+wiqhit3@hys-enterprise.com');
				done();
			});
		});
	});
	*/


});
  
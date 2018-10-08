//process.env.NODE_ENV = 'test';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const app = require('../app');
const { User } = require('../models');
const CONFIG = require('../config/config');

const apiVersionNum = '/v1';

//Our parent block
describe('Users', () => {

	let userJwtToken;

	beforeEach((done) => {
		done();
	});

	describe('/POST users', () => {

		it('create new user', (done) => {

			User.destroy({
				where: {
					email : CONFIG.test_user_email
				}
			}).then(() => {

				let user = {
					first: "Vlad",
					last: "Web",
					email: CONFIG.test_user_email,
					password: CONFIG.test_user_pw
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
		it('login a user', (done) => {
			let user = {
				email: CONFIG.test_user_email,
				password: CONFIG.test_user_pw
			}
			chai.request(app)
				.post(apiVersionNum + '/users/login')
				.send(user)
				.end((err, res) => {
					res.should.have.status(200);
					userJwtToken = res.body.token;
					done();
				});
		});
	});

	describe('/GET users', () => {
		it('get specified user info', (done) => {
			chai.request(app)
		  .get(apiVersionNum + '/users')
		  .set('Authorization', userJwtToken)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.user.should.be.a('object');
				res.body.success.should.be.eql(true);
				res.body.user.should.have.property('email');
				res.body.user.email.should.be.eql(CONFIG.test_user_email);
				done();
			});
		});
	});

});
  
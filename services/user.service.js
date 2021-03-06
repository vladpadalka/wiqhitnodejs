const { User } 	    = require('../models');
const validator     = require('validator');
const { to, TE }    = require('../services/util.service');
const Sequelize = require('sequelize');
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const crypto 			= require('crypto');
const CONFIG            = require('../config/config');

const createUser = async (userInfo) => {
    //console.log("++++++++createUser1");
    let err;

    //if(!validator.isEmail(userInfo.email)) TE('A valid email was not entered.');

    /*
    User.build(userInfo).validate().then(function(model) {
        console.log("++++++++createUser2");
    }).catch(Sequelize.ValidationError, function(err) {
        console.log("++++++++createUser3", err.errors[0].message);
    }).catch(function(err) {
        console.log("++++++++createUser4");
    });
    */

    let user = User.build(userInfo);
    let salt;

    [err, salt] = await to(bcrypt.genSalt(10));
    if(err) TE(err.message, true);

    const hash = crypto.createHmac('sha256', CONFIG.salt)
        .update(user.password + salt)
        .digest('hex');

    user.password = hash;
    user.salt = salt;
    user.username = '';

    [err, user] = await to(user.validate());
    if(err) {
        TE(err.message);
    } else {
        [err, user] = await to(user.save());
        if(err) TE(err.message);
    }

    /*
    [err, user] = await to(User.create(userInfo));
    if(err) {
        console.log("++++++++createUser4", err);
        TE('user already exists with that email');
    }
    */

    return user;

}
module.exports.createUser = createUser;

const authUser = async function(userInfo){//returns token
    let auth_info = {};
    auth_info.status = 'login';

    if(!userInfo.email) TE('Please enter an email to login');
    if(!userInfo.password) TE('Please enter a password to login');

    let user;
    if(validator.isEmail(userInfo.email)){
        auth_info.method='email';

        [err, user] = await to(User.findOne({where:{email:userInfo.email}}));
        if(err) TE(err.message);
    }else{
        TE('A valid email was not entered');
    }

    if(!user) TE('Not registered');

    [err, user] = await to(user.comparePassword(userInfo.password));

    if(err) TE(err.message);

    return user;

}
module.exports.authUser = authUser;
'use strict';
const crypto 			= require('crypto');
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const jwt           	= require('jsonwebtoken');
const {TE, to}          = require('../services/util.service');
const CONFIG            = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('User', {
        //first     : DataTypes.STRING,
        //last      : DataTypes.STRING,
        email     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "Email is invalid."} }},
        //phone     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { len: {args: [7, 20], msg: "Phone number invalid, too short."}, isNumeric: { msg: "not a valid phone number."} }},
        password  : DataTypes.STRING,
        salt  : DataTypes.STRING,
    }, {
        tableName: 'usr_users',
        timestamps: false,
        //underscored: true,
        //freezeTableName: true,
    });

    Model.associate = function(models){
        this.Companies = this.belongsToMany(models.Company, {through: 'UserCompany'});
    };

    Model.beforeSave(async (user, options) => {
        let err;
        if (user.changed('password')){
            let salt, hash
            [err, salt] = await to(bcrypt.genSalt(10));
            if(err) TE(err.message, true);

            [err, hash] = await to(bcrypt.hash(user.password, salt));
            if(err) TE(err.message, true);

            user.password = hash;
        }
    });

    Model.prototype.comparePassword = async function (pw) {
        //console.log("+++++++comparePassword", this.password);
        let err, pass;
        if(!this.password) TE('password not set');

        const hash = crypto.createHmac('sha256', CONFIG.salt)
            .update(pw + this.salt)
            .digest('hex');

        //[err, pass] = await to(bcrypt_p.compare(pw, this.password));
        if(hash != this.password) TE('invalid password');

        return this;
    }

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return "Bearer "+jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        delete json.password;
        delete json.salt;
        return json;
    };

    return Model;
};

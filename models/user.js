'use strict';
const crypto 			= require('crypto');
const jwt           	= require('jsonwebtoken');
const {TE, to}          = require('../services/util.service');
const CONFIG            = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: { len: [64] }
        },
        salt: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {msg: "Email is invalid."}
            }
        },
        activkey: {
            type: DataTypes.STRING(128),
            allowNull: false,
            defaultValue: ''
        },
        createtime: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: '0'
        },
        lastvisit: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: '0'
        },
        password_update_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        superuser: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: '0'
        },
        status: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: '0'
        },
        pay_customer_id: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
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
            /*
            let salt;

            [err, salt] = await to(bcrypt.genSalt(10));
            if(err) TE(err.message, true);


            const hash = crypto.createHmac('sha256', CONFIG.salt)
                .update(user.password + salt)
                .digest('hex');

            user.password = hash;
            user.salt = salt;
            */
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

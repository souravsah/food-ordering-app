const { Schema, models, model } = require("mongoose");
var bcrypt = require('bcryptjs');

const UserSchemna = new Schema({
    email:{
        type: String ,
        required: true,
        unique : true,
    },
    password : {
        type:String ,
        required : true, 
        validate :pass=>{
            if(!pass?.length  || pass?.length<5){
                throw new Error('Password must be of alteast 5 characters')
            }
        }
    },
},{timestamps:true});

UserSchemna.pre('save',async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,12)
    debugger;
    next()
})
export const  User = models?.User || model('User',UserSchemna)
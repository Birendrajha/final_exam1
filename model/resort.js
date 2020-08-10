const mongoose=require('mongoose')
const validator=require('validator')


const AddressSchema = new mongoose.Schema({
    building: {
        type: Number,
        required: false
    },
    coord: {
       long:{
        type: Number,
        required: false
       },
       lat:{ type: Number,
        required: false}
    },
    street: {
        type: String,
        required: false
    },
    zipcode: {
        type: String,
        required: false
    }
});
const RestaurantSchema=mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    
    cuisine: {
        type: String,
        
        required: true
    },
    grades: {
        type: String,
        
        required: true
    },
    address: AddressSchema,
   
});

const restaurants=mongoose.model('restaurants',RestaurantSchema)
module.exports=restaurants


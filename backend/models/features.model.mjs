import {Schema,model} from 'mongoose'


const featuresSchema=new Schema({
    heading:{
        type:String,
        required:true
    },
    subtext:{
        type:String,
        required:true
    },
    image:String
},{timestamps:true})

export default model('features',featuresSchema)
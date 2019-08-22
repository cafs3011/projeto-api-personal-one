const cloudinary = require("cloudinary").v2;
const fileUpload = require('express-fileupload');
const express = require('express');
const app = express(express);

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir : '/tmp/'
}));

 cloudinary.config({
  cloud_name: "dqj5znhnh",
  api_key: "492698898881586",
  api_secret: "21vSGEOE6mcM0hHcCqiYBRFWiCQ"
});

exports.uploadFile = async (file) =>{
    const result = await cloudinary.uploader.upload(file.path);
    return result;
};
import * as dotenv from "dotenv";
dotenv.config();

import fs from "fs";

import AWS from "aws-sdk";

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3

export async function uploadFile(file) {
  /*  
const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise(); */
  console.log();
  const imageFile = fs.readFileSync(file.path);
  console.log("fs transform:", imageFile);
  const uploadParams = {
    Body: imageFile,
    Bucket: "technical-test-aimedge",
    Key: `${Date.now()}.jpg`,
  };
  return await s3
    .putObject({
      Body: imageFile,
      Bucket: uploadParams.Bucket,
      Key: uploadParams.Key,
    })
    .promise();
}
export async function uploadFile2(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

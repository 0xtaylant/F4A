import React from "react";
import AWS from "aws-sdk";



export const listFilesInDirectory = (directory) => {

  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    params: { Bucket: process.env.AWS_BUCKET_NAME }, // Make sure this is present
  });
  const params = {
    Bucket: "free4alldemo1",
    Prefix: "DemoSets/"
  };

	return new Promise((resolve, reject) => {
		s3.listObjectsV2(params, (err, data) => {
			if (err) {
        console.log("credentials:",process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY, process.env.AWS_REGION, process.env.AWS_BUCKET_NAME);

        console.log("paramsss:",params)
				reject(err);
        
			} else {
				resolve(data.Contents.map((item) => item.Key));
			}
		});
	});
};

import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  params: { Bucket: process.env.AWS_BUCKET_NAME }, // Make sure this is present
});


export const getAudioURL = (filename) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filename,
    Expires: 3600 // URL expires in 1 hour
  };

  return s3.getSignedUrl('getObject', params);
};
export const getImageURL = (imgSrc) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imgSrc,
    Expires: 3600 // URL expires in 1 hour
  };

  return s3.getSignedUrl('getObject', params);
};

export const getFilesURL = () => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Expires: 3600 // URL expires in 1 hour
  };

  return s3.getSignedUrl('getObject', params);
};
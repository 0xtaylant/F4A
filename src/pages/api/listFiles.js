// pages/api/listFiles.js
import AWS from "aws-sdk";

export default function handler(req, res) {
  const { directory } = req.query;

  // Ensure the directory parameter is provided
  if (!directory) {
    return res.status(400).json({ error: 'Directory is required.' });
  }

  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    params: { Bucket: process.env.AWS_BUCKET_NAME },
  });

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Prefix: directory,
  };

  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).json({ error: 'Failed to list files.' });
    } else {
      const files = data.Contents.map((item) => item.Key);
      res.status(200).json({ files });
    }
  });
}

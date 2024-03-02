import { getImageURL } from "../../../helper/s3.js";

export default async (req, res) => {
  if (req.method === "GET") {



    const url = await getFilesURL();
    res.status(200).json({ url });
  } else {
    res.status(405).json({ error: "Method not allowed" }); // Only allow GET
  }
};

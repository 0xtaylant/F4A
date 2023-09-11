import { getAudioURL } from '../../../helper/s3.js';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { filename } = req.query; // Assuming you're passing the filename as a query parameter.
    
    if(!filename) {
      return res.status(400).json({ error: 'Filename is required.' });
    }

    const url = getAudioURL(filename);
    res.status(200).json({ url });
  } else {
    res.status(405).json({ error: 'Method not allowed' }); // Only allow GET
  }
};

// pages/api/saveYAMLFile.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';

const api = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { content } = req.body;

    try {
      // Assuming 'output.yml' is in the root of your project
      const filePath = '/sigma_test_repo/rules/output.yml';
      fs.writeFileSync(filePath, content, 'utf8');
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error Saving File in Yaml Format', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
export default api;
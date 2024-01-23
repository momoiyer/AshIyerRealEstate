import csv from 'csv-parser';
import fs from "fs";
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const data = [];

  const directoryPath = path.join(process.cwd(), 'public', 'data'); // Adjust the path to your CSV file  

  //read rate csv file
  const fileToRead = fs.readdirSync(directoryPath);

  for (const file of fileToRead) {
    const filePath = path.join(directoryPath, file);
    // console.log("Reading data from ", { filePath });
    const stream = fs.createReadStream(filePath).pipe(csv());

    let listPrice: string;
    let orgPrice: string;
    let statDate: string;
    let currentPrice: string;
    let priceDrop: number;
    let underOverList: number;

    for await (const row of stream) {
      listPrice = row['List Price'];
      orgPrice = row['Original List Price'];
      priceDrop = parseFloat(listPrice.replace(/[\$,]/g, '')) - parseFloat(orgPrice.replace(/[\$,]/g, ''));

      currentPrice = row['Current Price'];
      underOverList = parseFloat(currentPrice.replace(/[\$,]/g, '')) - parseFloat(listPrice.replace(/[\$,]/g, ''));

      statDate = row['Stat Date'];

      data.push({ priceDrop,underOverList,  statDate });
    }
  }

  console.log("data: ", data);
  // Example of sending a response
  res.status(200).json({ data });
}
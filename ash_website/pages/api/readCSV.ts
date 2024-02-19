import csv from 'csv-parser';
import fs from "fs";
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import { formatDateToShortString } from '@/utils/timeUtil';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const data = [];

  const directoryPath = path.join(process.cwd(), 'public', 'data');

  const fileToRead = fs.readdirSync(directoryPath);

  for (const file of fileToRead) {
    const filePath = path.join(directoryPath, file);
    const stream = fs.createReadStream(filePath).pipe(csv());

    let listPrice: string;
    let orgPrice: string;
    let statDate: string;
    let currentPrice: string;
    let priceDrop: number;
    let underOverList: number;
    let city: string;

    for await (const row of stream) {
      listPrice = row['List Price'];
      orgPrice = row['Original List Price'];
      priceDrop = parseFloat(listPrice.replace(/[\$,]/g, '')) - parseFloat(orgPrice.replace(/[\$,]/g, ''));

      currentPrice = row['Current Price'];
      underOverList = parseFloat(currentPrice.replace(/[\$,]/g, '')) - parseFloat(listPrice.replace(/[\$,]/g, ''));

      statDate = row['Stat Date'];
      statDate = formatDateToShortString(new Date(statDate));

      city = row['City'];


      data.push({ priceDrop, underOverList, statDate, city });
    }
  }

  data.sort((a, b) => {
    return new Date(a.statDate).getTime() - new Date(b.statDate).getTime();
  });
  
  res.status(200).json({ data });
}
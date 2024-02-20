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

    let orgPrice: string;
    let listPrice: string;
    let currentPrice: string;
    let condoFee: string;
    let beds: string;
    let fullBaths: string;
    let halfBaths: string;
    let year: string;
    let dom: string;
    let statDate: string;
    let priceDrop: number;
    let underOverList: number;
    let city: string;


    for await (const row of stream) {

      //get subdivision, sqft
      
      orgPrice = row['Original List Price'];
      listPrice = row['List Price'];
      currentPrice = row['Current Price'];
      condoFee = row['Condo Fee'];
      beds = row['Beds'];
      fullBaths = row['Full Baths'];
      halfBaths = row['Half Baths'];
      year = row['Year Built'];
      dom = row['DOM'];

      statDate = row['Stat Date'];      
      statDate = formatDateToShortString(new Date(statDate)); 

      city = row['City'];     

      priceDrop = parseFloat(listPrice.replace(/[\$,]/g, '')) - parseFloat(orgPrice.replace(/[\$,]/g, ''));    
      underOverList = parseFloat(currentPrice.replace(/[\$,]/g, '')) - parseFloat(listPrice.replace(/[\$,]/g, ''));

      data.push({ orgPrice,listPrice, currentPrice, condoFee, beds, fullBaths, halfBaths, year, dom, statDate, city, priceDrop, underOverList });
    }
  }

  data.sort((a, b) => {
    return new Date(a.statDate).getTime() - new Date(b.statDate).getTime();
  });
  
  res.status(200).json({ data });
}
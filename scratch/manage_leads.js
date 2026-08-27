const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const leadsPath = path.resolve('../leads.xlsx');
const args = process.argv.slice(2);
const command = args[0];

if (!fs.existsSync(leadsPath)) {
  console.log('NO_FILE');
  process.exit(0);
}

const workbook = xlsx.readFile(leadsPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

if (command === 'check') {
  const name = (args[1] || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const email = (args[2] || '').toLowerCase();
  const domain = (args[3] || '').toLowerCase();
  
  let found = false;
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row || row.length === 0) continue;
    const existingName = (row[6] || '').toString().toLowerCase().replace(/[^a-z0-9]/g, ''); // Business Name is col 6
    const existingEmail3 = (row[9] || '').toString().toLowerCase();
    const existingEmail = (row[10] || '').toString().toLowerCase();
    const existingEmail2 = (row[11] || '').toString().toLowerCase();
    const existingWebsite = (row[5] || '').toString().toLowerCase();
    
    if ((name && existingName === name) || 
        (email && [existingEmail3, existingEmail, existingEmail2].includes(email)) || 
        (domain && existingWebsite.includes(domain))) {
      found = true;
      console.log('DUPLICATE: ' + JSON.stringify(row));
      break;
    }
  }
  if (!found) console.log('OK');
} else if (command === 'add') {
  // We need to parse args[1] back to array, but keeping empty strings
  const newRowStr = args[1];
  const newRowArr = newRowStr.split('\t');
  
  // ensure the new row has correct length based on header
  while(newRowArr.length < data[0].length) {
      newRowArr.push("");
  }
  
  data.push(newRowArr);
  const newWs = xlsx.utils.aoa_to_sheet(data);
  workbook.Sheets[sheetName] = newWs;
  xlsx.writeFile(workbook, leadsPath);
  console.log('ADDED');
}

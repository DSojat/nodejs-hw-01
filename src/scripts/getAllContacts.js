import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const fileContent = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  //   console.log(fileContent);
  return fileContent;
};

console.log(await getAllContacts());

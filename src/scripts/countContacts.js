import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const fileContent = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    return fileContent.length;
  } catch (error) {
    console.error('Помилка читання даних з файлу:', error);
  }
};

console.log(await countContacts());

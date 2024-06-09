import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const fileContent = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    return fileContent;
  } catch (error) {
    console.error('Помилка читання даних з файлу:', error);
  }
};

console.log(await getAllContacts());

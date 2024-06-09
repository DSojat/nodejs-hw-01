import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf8');
    console.log('Дані успішно видалені з файлу.');
  } catch (error) {
    console.error('Помилка видалення даних з файлу:', error);
  }
};

await removeAllContacts();

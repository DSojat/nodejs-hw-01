import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const data = createFakeContact();

  try {
    const fileContent = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    fileContent.push(data);

    await fs.writeFile(PATH_DB, JSON.stringify(fileContent), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

await addOneContact();

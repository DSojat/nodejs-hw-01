import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const fileContent = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));

    for (let index = 0; index < fileContent.length; index++) {
      if (Math.random() >= 0.5) {
        fileContent.pop();
      }
    }

    await fs.writeFile(PATH_DB, JSON.stringify(fileContent), 'utf8');
    console.log('Дані успішно змінено.');
    console.log(fileContent.length);
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

await thanos();

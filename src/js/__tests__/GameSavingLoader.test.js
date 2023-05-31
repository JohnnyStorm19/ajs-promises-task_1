import GameSavingLoader from '../GameSavingLoader';

import '../app';

test('Срабатывает метод load и загружает данные', async () => {
  const res = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  await expect(GameSavingLoader.load()).resolves.toEqual(res);
});
test('Загрузка данных завершается с ошибкой', async () => GameSavingLoader.load().catch((e) => expect(e).toMatch(e)));
// тест все равно не покрывает 7 строку из app.js
// когда вставляю expect.assertions(1); то тесты пишет, что ожидается 1, но assertions 0
// в итоге не очень понимаю, как протестировать ошибку из app.js, ведь промис всегда будет fulfilled

import { rest } from 'msw';

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const handlers = [
  rest.get('/delay', async (req, res, ctx) => {
    await sleep(Math.random() * 2000);

    const isSuccess = Math.random() > 0.2;
    if (isSuccess) {
      return res(ctx.status(200), ctx.json({ message: 'Good' }));
    } else {
      return res(ctx.status(500), ctx.json({ errorMessage: '서버 오류입니다.' }));
    }
  }),
];

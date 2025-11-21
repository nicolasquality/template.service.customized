import { status } from '../middlewares/status/status'
import mock from '../__mocks__/status'

describe('status test', () => {
  it('test example', async () => {
    const context: unknown = {
      set: jest.fn(),
      state: { code: 200 },
      clients: {
        status: {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          getStatus: (_: string) => Promise.resolve(mock),

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          getStatusWithHeaders: (_: string) =>
            Promise.resolve({
              headers: {},
              status: 200,
              data: mock,
            }),
        },
      },
    }

    const ctx = context as Context

    await status(ctx, jest.fn())

    expect(ctx.body).toBe(mock)
    expect(ctx.status).toBe(200)
  })
})

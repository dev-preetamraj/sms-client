import { baseQuery } from '..';

const authApiSlice = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginData>({
      query: (body) => ({
        url: '/auth/token/authorize',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;

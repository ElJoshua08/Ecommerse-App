export const fetchUser = async () => {
  const data = {
    email: 'test@test.com',
    name: 'Test User',
    address: '123 Main St, Anytown, USA',

    preferences: {
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches,
      currency: 'USD',
    },
  };

  return data;
};

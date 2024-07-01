export const fetchUser = async () => {
  //TODO Ask the user for preferences...

  const data = {
    email: 'test@test.com',
    name: 'Test User',
    address: '123 Main St, Anytown, USA',

    preferences: {
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      currency: 'USD',
    },
  };

  return data;
};

export const authorizationRequest = (config: any) => {
  const token = localStorage.getItem("TOKEN");

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };
  return config;
};

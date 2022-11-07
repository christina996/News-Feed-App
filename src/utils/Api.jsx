import restHelper from 'utils/RestHelper';

export const getPostsByUserId = async (userId) => {
  const { data } = await restHelper.getRequest(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return data;
};

export const getUsers = async () => {
  const { data } = await restHelper.getRequest(
    'https://jsonplaceholder.typicode.com/users'
  );
  return data;
};

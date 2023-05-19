import http from "../http/http-service";


export const getCount = async (user) => {
  const { data } = await http.get(`/blog/count/${user}`);
  return data;
}

export const getFollowings = async (user) => {
  const { data } = await http.get(`/blog/followings/${user}`)
  return data;
}

export const getFollowers = async (user) => {
  const { data } = await http.get(`/blog/followers/${user}`)
  return data;
}

export const getPosts = async () => {
  const { data } = await http.get(`/blog/posts`)
  return data;
}

export const savePost = async (post) => {
  const { data } = await http.post('/blog/post', post);
  return data;
}

export const follow = async (user, target) => {
  const { data } = await http.post(`/blog/following/${user}`, target);
  return data;
}

export const login = async (user, target) => {
  const { data } = await http.get(`/login/user/${user}/${target}`);
  return data;
}

export const register = async (user) => {
  const { data } = await http.post('/login/register', user);
  return data;
}

export const getUser = async (user) => {
  const { data } = await http.get(`/login/users/${user}`);
  return data;
}


import http from "../http/http-service";


export const getFollowings = async (user) => {
  const { data } = await http.get(`/blog/followings/${user}`)
  return data;
}

export const getFollowers = async (user) => {
  const { data } = await http.get(`/blog/followers/${user}`)
  return data;
}

export const getPosts = async (user) => {
  const { data } = await http.get(`/blog/posts/${user}`)
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
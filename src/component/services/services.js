import http from "../http/http-service";


export const getFollowings = async (user) => {
  const { data } = await http.get(`/blog/followings/${user}`)
  return data;
}

export const getFollowers = async (user) => {
  const { data } = await http.get(`/blog/followers/${user}`)
  return data;
}

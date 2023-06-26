export type userType = {
  // @ts-ignore
  avatar: File | null;
  bio: string;
  created_at: string;
  email: string;
  id: number;
  nb_followed: number;
  nb_follower: number;
  password: string;
  remember_me_token: boolean | null;
  role_id: number;
  twitch_id: string | null;
  updated_at: string;
  username: string;
};

type postFile = {
  url: string;
  name: string;
  size: string;
  mimeType: string;
};

export type postType = {
  id: number;
  user_id: number;
  size: string;
  file: postFile | undefined;
  type_post: number;
  description: string;
  like: number;
};

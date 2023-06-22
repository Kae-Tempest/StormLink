export type userType = {
  id: number;
  username: string;
  email: string;
  password: string;
  role_id: number;
  avatar: File | null;
  bio: string;
  nb_follower: number;
  nb_followed: number;
  twitch_id: string | null;
  remember_me_token: boolean | null;
  created_at: string;
  updated_at: string;
};

type postFile = {
  url: string;
  name: string;
  size: string;
  mimeType: string;
};

export type postType = {
  id: number;
  size: string;
  file: postFile | undefined;
  type_post: number;
  description: string;
};

interface BaseResponse {
  success: boolean;
  status_code: number;
  message: string;
}

interface User {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  is_active: number;
  gender: string;
  role: string;
  dob: Date;
  address: string;
  created_at: Date;
  updated_at: Date;
}

interface LoginData {
  email: string;
  password: string;
  role: string;
}

interface LoginResponse extends BaseResponse {
  data: {
    access_token: string;
    refresh_token: string;
  };
}

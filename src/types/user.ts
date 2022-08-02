export interface UserStateProps {
  _id: string;
  email: string;
  name: string;
  authority: string;
  description?: string;
  profileImage?: string[];
  contactNumber?: string;
  refreshToken: string;
  createdAt: string;
  updatedAt: string;
}
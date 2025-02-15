import { SCREENS } from '../../utils/defaults';

export enum AuthProviderEnum {
  'GOOGLE' = 'google',
  'GITHUB' = 'github',
}

export interface IJwtPayload {
  _id: string;
  _projectId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  companySize?: string;
  role?: string;
  source?: string;
}

export interface ILoginResponse {
  token: string;
  screen?: SCREENS;
}

export interface IScreenResponse {
  screen: SCREENS;
}

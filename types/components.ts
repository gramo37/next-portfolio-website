export interface TMultiLineFormData {
  name: string;
  data?: any;
}

export interface TSingleFormData {
  label: string;
  name: string;
  data?: string;
}

export interface TArrayInputFormData {
  name: string;
  data?: any;
}

export type TLinks = {
  twitter_link: string;
  linkedin_link: string;
  github_link: string;
  fontSize?: string | number;
  backgroundColor?: string;
  padding?: string | number;
  borderRadius?: string | number;
  color?: string;
};
export interface AccountStateInterface {
  username: string;
  token: string;
  isLoggedIn: boolean;
}

function state(): AccountStateInterface {
  return {
    username: '',
    token: '',
    isLoggedIn: false,
  };
}

export default state;

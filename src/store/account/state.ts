export interface AccountStateInterface {
  id: string;
  username: string;
  token: string;
  isLoggedIn: boolean;
}

function state(): AccountStateInterface {
  return {
    id: '',
    username: '',
    token: '',
    isLoggedIn: false,
  };
}

export default state;

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID :'QeAHTSazZW6noayneuUKXY0E0b4kjZ3D',
    CLIENT_DOMAIN:'shiv266.auth0.com',
    AUDIENCE: 'https://shiv266.auth0.com/userinfo',
    REDIRECT:'http://gitapp.xyz/profile', 
    SCOPE :'openid profile'

    
  };   
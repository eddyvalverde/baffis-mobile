const ENV = {
  dev: {
    apiUrl: 'http://localhost:44318',
    oAuthConfig: {
      issuer: 'http://localhost:44318',
      clientId: 'baffis_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access baffis',
    },
    localization: {
      defaultResourceName: 'baffis',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44318',
    oAuthConfig: {
      issuer: 'http://localhost:44318',
      clientId: 'baffis_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access baffis',
    },
    localization: {
      defaultResourceName: 'baffis',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};

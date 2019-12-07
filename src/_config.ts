interface IAppConfig {
  title: string;
  apiUrl: string;
}

type BUILD_MODE = 'production' | 'development' | 'test';
type AppConfigTypes = { [type in BUILD_MODE]: IAppConfig };

const config: AppConfigTypes = {
  development: {
    title: '짤 - development',
    apiUrl: 'http://127.0.0.1:3000/',
  },
  test: {
    title: '짤',
    apiUrl: 'http://127.0.0.1:3000/',
  },
  production: {
    title: '짤',
    apiUrl:
      '/',
  },
};

function getConfig(): IAppConfig {
  return config[process.env.NODE_ENV as BUILD_MODE];
}

export default getConfig;

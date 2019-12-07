interface IAppConfig {
  title: string;
  apiUrl: string;
}

type BUILD_MODE = 'production' | 'development' | 'test';
type AppConfigTypes = { [type in BUILD_MODE]: IAppConfig };

const config: AppConfigTypes = {
  development: {
    title: '짤 - development',
    apiUrl: 'https://endpoint.ainize.ai/gyuha/jjal-api/',
  },
  test: {
    title: '짤',
    apiUrl: 'https://endpoint.ainize.ai/gyuha/jjal-api/',
  },
  production: {
    title: '짤',
    apiUrl: 'https://endpoint.ainize.ai/gyuha/jjal-api/',
  },
};

function getConfig(): IAppConfig {
  return config[process.env.NODE_ENV as BUILD_MODE];
}

export default getConfig;

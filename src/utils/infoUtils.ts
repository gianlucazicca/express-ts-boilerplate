import Logger from './logger';
export function infoUtils(useCase: string, config: any) {
    switch (useCase) {
        case 'dbInfo':
            Logger.info('DB connected: ' + config.dbName);
            break;
        case 'serverInfo':
            Logger.info(`Server started: http://localhost:${config.port}`);
            break;
    }
}

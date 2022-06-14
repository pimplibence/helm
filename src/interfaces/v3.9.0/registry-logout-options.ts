import { ArgumentMap } from '../../libs/argument-mapper';

export interface RegistryLogoutCommandOptions {
    host: string;
}

export const RegistryLogoutOptionsMap: ArgumentMap<RegistryLogoutCommandOptions, {}> = {
    command: {
        host: 'string'
    },
    args: {}
};

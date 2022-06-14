import { ArgumentMap } from '../../libs/argument-mapper';

export interface RegistryLoginCommandOptions {
    host: string;
}

export interface RegistryLoginArgsOptions {
    insecure?: boolean;
    password?: string;
    username?: string;
}

export const RegistryLoginOptionsMap: ArgumentMap<RegistryLoginCommandOptions, RegistryLoginArgsOptions> = {
    command: {
        host: 'string'
    },
    args: {
        insecure: ['insecure', 'boolean'],
        password: ['password', 'string'],
        username: ['username', 'string'],
    }
};

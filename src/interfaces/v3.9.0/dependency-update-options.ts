import { ArgumentMap } from '../../libs/argument-mapper';

export interface DependencyUpdateCommandOptions {
    chart: string;
}

export interface DependencyUpdateOptions {
    keyring?: string;
    skipRefresh?: boolean;
    verify?: boolean;
}

export const DependencyUpdateOptionsMap: ArgumentMap<DependencyUpdateCommandOptions, DependencyUpdateOptions> = {
    command: {
        chart: 'string'
    },
    args: {
        keyring: ['keyring', 'string'],
        skipRefresh: ['skip-refresh', 'boolean'],
        verify: ['verify', 'boolean'],
    }
};

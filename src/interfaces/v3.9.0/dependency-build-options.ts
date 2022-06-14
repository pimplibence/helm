import { ArgumentMap } from '../../libs/argument-mapper';

export interface DependencyBuildCommandOptions {
    chart: string;
}

export interface DependencyBuildArgsOptions {
    keyring?: string;
    skipRefresh?: boolean;
    verify?: boolean;
}

export const DependencyBuildOptionsMap: ArgumentMap<DependencyBuildCommandOptions, DependencyBuildArgsOptions> = {
    command: {
        chart: 'string'
    },
    args: {
        keyring: ['keyring', 'string'],
        skipRefresh: ['skip-refresh', 'boolean'],
        verify: ['verify', 'boolean'],
    }
};

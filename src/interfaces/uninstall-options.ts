import { ArgumentMap } from '../libs/argument-mapper';

export interface UninstallCommandOptions {
    release: string;
}

export interface UninstallArgsOptions {
    description?: string;
    dryRun?: boolean;
    keepHistory?: boolean;
    noHooks?: boolean;
    timeout?: number;
    wait?: boolean;
}

export const UninstallOptionsMap: ArgumentMap<UninstallCommandOptions, UninstallArgsOptions> = {
    command: {
        release: 'string'
    },
    args: {
        description: ['description', 'string'],
        dryRun: ['dryRun', 'boolean'],
        keepHistory: ['keepHistory', 'boolean'],
        noHooks: ['noHooks', 'boolean'],
        timeout: ['timeout', 'number'],
        wait: ['wait', 'boolean'],
    }
};

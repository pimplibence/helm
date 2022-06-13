import { ArgumentMap } from '../libs/argument-mapper';

export interface PluginInstallCommandOptions {
    urlOrPath: string;
}

export interface PluginInstallArgsOptions {
    version?: string;
}

export const PackageInstallOptionsMap: ArgumentMap<PluginInstallCommandOptions, PluginInstallArgsOptions> = {
    command: {
        urlOrPath: 'string'
    },
    args: {
        version: ['version', 'string'],
    }
};

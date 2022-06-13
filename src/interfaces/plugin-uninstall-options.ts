import { ArgumentMap } from '../libs/argument-mapper';

export interface PluginUninstallCommandOptions {
    plugin: string;
}

export const PackageUninstallOptionsMap: ArgumentMap<PluginUninstallCommandOptions, {}> = {
    command: {
        plugin: 'string'
    },
    args: {}
};

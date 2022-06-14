import { ArgumentMap } from '../../libs/argument-mapper';

export interface PluginUninstallCommandOptions {
    plugin: string;
}

export const PluginUninstallOptionsMap: ArgumentMap<PluginUninstallCommandOptions, {}> = {
    command: {
        plugin: 'string'
    },
    args: {}
};

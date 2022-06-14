import { ArgumentMap } from '../libs/argument-mapper';

export interface PluginUpdateCommandOptions {
    plugin: string;
}

export const PluginUpdateOptionsMap: ArgumentMap<PluginUpdateCommandOptions, {}> = {
    command: {
        plugin: 'string'
    },
    args: {}
};

import { ArgumentMap } from '../libs/argument-mapper';

export interface PluginUpdateCommandOptions {
    plugin: string;
}

export const PackageUpdateOptionsMap: ArgumentMap<PluginUpdateCommandOptions, {}> = {
    command: {
        plugin: 'string'
    },
    args: {}
};

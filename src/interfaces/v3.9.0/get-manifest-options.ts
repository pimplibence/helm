import { ArgumentMap } from '../../libs/argument-mapper';

export interface GetManifestCommandOptions {
    releaseName: string;
}

export interface GetManifestArgsOptions {
    revision?: number;
}

export const GetManifestOptionsMap: ArgumentMap<GetManifestCommandOptions, GetManifestArgsOptions> = {
    command: {
        releaseName: 'string'
    },
    args: {
        revision: ['revision', 'number']
    }
};

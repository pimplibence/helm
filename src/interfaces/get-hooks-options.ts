import { ArgumentMap } from '../libs/argument-mapper';

export interface GetHooksCommandOptions {
    releaseName: string;
}

export interface GetHooksArgsOptions {
    revision?: number;
}

export const GetHooksOptionsMap: ArgumentMap<GetHooksCommandOptions, GetHooksArgsOptions> = {
    command: {
        releaseName: 'string'
    },
    args: {
        revision: ['revision', 'number']
    }
};

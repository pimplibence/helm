import { ArgumentMap } from '../libs/argument-mapper';

export interface GetValuesCommandOptions {
    releaseName: string;
}

export interface GetValuesArgsOptions {
    revision?: number;
    all?: boolean;
}

export const GetValuesOptionsMap: ArgumentMap<GetValuesCommandOptions, GetValuesArgsOptions> = {
    command: {
        releaseName: 'string'
    },
    args: {
        revision: ['revision', 'number'],
        all: ['all', 'boolean'],
    }
};

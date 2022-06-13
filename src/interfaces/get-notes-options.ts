import { ArgumentMap } from '../libs/argument-mapper';

export interface GetNotesCommandOptions {
    releaseName: string;
}

export interface GetNotesArgsOptions {
    revision?: number;
}

export const GetNotesOptionsMap: ArgumentMap<GetNotesCommandOptions, GetNotesArgsOptions> = {
    command: {
        releaseName: 'string'
    },
    args: {
        revision: ['revision', 'number']
    }
};

import { ArgumentMap } from '../libs/argument-mapper';

export interface RepoIndexCommandOptions {
    dir: string;
}

export interface RepoIndexArgsOptions {
    merge?: string;
    url?: string;
}

export const RepoIndexOptionsMap: ArgumentMap<RepoIndexCommandOptions, RepoIndexArgsOptions> = {
    command: {
        dir: 'string'
    },
    args: {
        merge: ['merge', 'string'],
        url: ['url', 'string']
    }
};

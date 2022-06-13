import { ArgumentMap } from '../libs/argument-mapper';

export interface RepoUpdateCommandOptions {
    repo: string;
}

export interface RepoUpdateArgsOptions {
    failOnRepoUpdateFail?: boolean;
}

export const RepoUpdateOptionsMap: ArgumentMap<RepoUpdateCommandOptions, RepoUpdateArgsOptions> = {
    command: {
        repo: 'string'
    },
    args: {
        failOnRepoUpdateFail: ['fail-on-repo-update-fail', 'boolean']
    }
};

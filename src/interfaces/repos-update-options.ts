import { ArgumentMap } from '../libs/argument-mapper';

export interface ReposUpdateCommandOptions {
    repos: string;
}

export interface ReposUpdateArgsOptions {
    failOnRepoUpdateFail?: boolean;
}

export const ReposUpdateOptionsMap: ArgumentMap<ReposUpdateCommandOptions, ReposUpdateArgsOptions> = {
    command: {
        repos: 'string'
    },
    args: {
        failOnRepoUpdateFail: ['fail-on-repo-update-fail', 'boolean']
    }
};

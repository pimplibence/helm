import { ArgumentMap } from '../../libs/argument-mapper';

export interface RepoRemoveCommandOptions {
    repo: string;
}

export const RepoRemoveOptionsMap: ArgumentMap<RepoRemoveCommandOptions, {}> = {
    command: {
        repo: 'string'
    },
    args: {}
};

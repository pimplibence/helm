import { ArgumentMap } from '../../libs/argument-mapper';

export interface ReposRemoveCommandOptions {
    repos: string[];
}

export const ReposRemoveOptionsMap: ArgumentMap<ReposRemoveCommandOptions, {}> = {
    command: {
        repos: 'stringArray'
    },
    args: {}
};

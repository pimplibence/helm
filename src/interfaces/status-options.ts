import { ArgumentMap } from '../libs/argument-mapper';

export interface StatusCommandOptions {
    releaseName: string;
}

export interface StatusArgsOptions {
    revision?: number;
    showDesc?: boolean;
}

export const StatusOptionsMap: ArgumentMap<StatusCommandOptions, StatusArgsOptions> = {
    command: {
        releaseName: 'string'
    },
    args: {
        revision: ['revision', 'number'],
        showDesc: ['showDesc', 'boolean'],
    }
};

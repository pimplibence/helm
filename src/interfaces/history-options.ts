import { ArgumentMap } from '../libs/argument-mapper';

export interface HistoryCommandOptions {
    releaseName: string;
}

export interface HistoryArgsOptions {
    max?: number;
}

export const HistoryOptionsMap: ArgumentMap<HistoryCommandOptions, HistoryArgsOptions> = {
    command: {
        releaseName: 'string'
    },
    args: {
        max: ['max', 'string']
    }
};

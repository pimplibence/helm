import { ArgumentMap } from '../libs/argument-mapper';

export interface PushCommandOptions {
    chart: string;
    remote: string;
}

export const PushOptionsMap: ArgumentMap<PushCommandOptions, {}> = {
    command: {
        chart: 'string',
        remote: 'string',
    },
    args: {}
};

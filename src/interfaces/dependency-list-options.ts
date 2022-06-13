import { ArgumentMap } from '../libs/argument-mapper';

export interface DependencyListCommandOptions {
    chart: string;
}

export const DependencyListOptionsMap: ArgumentMap<DependencyListCommandOptions, {}> = {
    command: {
        chart: 'string'
    },
    args: []
};

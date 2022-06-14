import { ArgumentMap } from '../../libs/argument-mapper';

export interface TestCommandOptions {
    release: string;
}

export interface TestArgsOptions {
    filter?: string[];
    logs?: boolean;
    timeout?: number;
}

export const TestOptionsMap: ArgumentMap<TestCommandOptions, TestArgsOptions> = {
    command: {
        release: 'string'
    },
    args: {
        filter: ['filter', 'stringArray'],
        logs: ['logs', 'boolean'],
        timeout: ['timeout', 'number'],
    }
};

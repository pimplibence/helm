import { ArgumentMap } from '../libs/argument-mapper';

export interface ListArgsOptions {
    all?: boolean;
    allNamesapces?: boolean;
    date?: boolean;
    deployed?: boolean;
    failed?: boolean;
    filter?: string;
    max?: number;
    offset?: number;
    pending?: boolean;
    reverse?: boolean;
    selector?: string;
    superseded?: boolean;
    timeFormat?: string;
    uninstalled?: boolean;
    uninstalling?: boolean;
}

export const ListOptionsMap: ArgumentMap<{}, ListArgsOptions> = {
    command: {},
    args: {
        all: ['all', 'boolean'],
        allNamesapces: ['all-namesapces', 'boolean'],
        date: ['date', 'boolean'],
        deployed: ['deployed', 'boolean'],
        failed: ['failed', 'boolean'],
        filter: ['filter', 'string'],
        max: ['max', 'number'],
        offset: ['offset', 'number'],
        pending: ['pending', 'boolean'],
        reverse: ['reverse', 'boolean'],
        selector: ['selector', 'string'],
        superseded: ['superseded', 'boolean'],
        timeFormat: ['time-format', 'string'],
        uninstalled: ['uninstalled', 'boolean'],
        uninstalling: ['uninstalling', 'boolean'],
    }
};

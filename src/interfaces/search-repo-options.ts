import { ArgumentMap } from '../libs/argument-mapper';

export interface SearchRepoCommandOptions {
    keyword: string;
}

export interface SearchRepoArgsOptions {
    regexp?: string;
    version?: string;
    versions?: boolean;
}

export const SearchRepoOptionsMap: ArgumentMap<SearchRepoCommandOptions, SearchRepoArgsOptions> = {
    command: {
        keyword: 'string'
    },
    args: {
        regexp: ['regexp', 'string'],
        version: ['version', 'string'],
        versions: ['versions', 'boolean'],
    }
};

import { ArgumentMap } from '../../libs/argument-mapper';

export interface SearchHubCommandOptions {
    keyword: string;
}

export interface SearchHubArgsOptions {
    listRepoUrl?: boolean;
}

export const SearchHubOptionsMap: ArgumentMap<SearchHubCommandOptions, SearchHubArgsOptions> = {
    command: {
        keyword: 'string'
    },
    args: {
        listRepoUrl: ['list-repo-url', 'boolean']
    }
};

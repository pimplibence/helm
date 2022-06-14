import { ArgumentMap } from '../../libs/argument-mapper';

export interface RepoAddCommandOptions {
    name: string;
    url: string;
}

export interface RepoAddArgsOptions {
    allowDeprecatedRepos?: boolean;
    caFile?: string;
    certFile?: string;
    forceUpdate?: boolean;
    insecureSkipTlsVerify?: boolean;
    keyFile?: string;
    noUpdate?: boolean;
    passCredentials?: boolean;
    password?: string;
    username?: string;
}

export const RepoAddOptionsMap: ArgumentMap<RepoAddCommandOptions, RepoAddArgsOptions> = {
    command: {
        name: 'string',
        url: 'string',
    },
    args: {
        allowDeprecatedRepos: ['allow-deprecated-repos', 'boolean'],
        caFile: ['ca-file', 'string'],
        certFile: ['cert-file', 'string'],
        forceUpdate: ['force-update', 'boolean'],
        insecureSkipTlsVerify: ['insecure-skip-tls-verify', 'boolean'],
        keyFile: ['key-file', 'string'],
        noUpdate: ['no-update', 'boolean'],
        passCredentials: ['pass-credentials', 'boolean'],
        password: ['password', 'string'],
        username: ['username', 'string'],
    }
};

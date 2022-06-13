import { ArgumentMap } from '../libs/argument-mapper';

export interface PullCommandOptions {
    chartUrl: string;
}

export interface PullArgsOptions {
    caFile?: string;
    certFile?: string;
    destination?: string;
    insecureSkipTlsVerify?: boolean;
    keyFile?: string;
    keyring?: string;
    passphraseCredentials?: string;
    password?: string;
    prov?: boolean;
    repo?: string;
    untar?: boolean;
    untardir?: string;
    username?: string;
    verify?: boolean;
    version?: string;
}

export const PullOptionsMap: ArgumentMap<PullCommandOptions, PullArgsOptions> = {
    command: {
        chartUrl: 'string'
    },
    args: {
        caFile: ['ca-file', 'string'],
        certFile: ['cert-file', 'string'],
        destination: ['destination', 'string'],
        insecureSkipTlsVerify: ['insecure-skip-tls-verify', 'boolean'],
        keyFile: ['key-file', 'string'],
        keyring: ['keyring', 'string'],
        passphraseCredentials: ['passphrase-credentials', 'string'],
        password: ['password', 'string'],
        prov: ['prov', 'boolean'],
        repo: ['repo', 'string'],
        untar: ['untar', 'boolean'],
        untardir: ['untardir', 'string'],
        username: ['username', 'string'],
        verify: ['verify', 'boolean'],
        version: ['version', 'string'],
    }
};

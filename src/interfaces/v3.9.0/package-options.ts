import { ArgumentMap } from '../../libs/argument-mapper';

export interface PackageCommandOptions {
    chartPath: string;
}

export interface PackageArgsOptions {
    dependencyUpdate?: boolean;
    destination?: string;
    key?: string;
    keyring?: string;
    passphraseFile?: string;
    sign?: boolean;
}

export const PackageOptionsMap: ArgumentMap<PackageCommandOptions, PackageArgsOptions> = {
    command: {
        chartPath: 'string'
    },
    args: {
        dependencyUpdate: ['dependency-update', 'boolean'],
        destination: ['destination', 'string'],
        key: ['key', 'string'],
        keyring: ['keyring', 'string'],
        passphraseFile: ['passphrase-file', 'string'],
        sign: ['sign', 'boolean']
    }
};

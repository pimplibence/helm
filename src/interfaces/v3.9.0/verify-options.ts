import { ArgumentMap } from '../../libs/argument-mapper';

export interface VerifyCommandOptions {
    path: string;
}

export interface VerifyArgsOptions {
    keyring?: string;
}

export const VerifyOptionsMap: ArgumentMap<VerifyCommandOptions, VerifyArgsOptions> = {
    command: {
        path: 'string'
    },
    args: {
        keyring: ['keyring', 'string']
    }
};

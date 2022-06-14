import { ArgumentMap } from '../../libs/argument-mapper';

export interface VersionArgsOptions {
    short?: boolean;
    template?: string;
}

export const VersionOptionsMap: ArgumentMap<{}, VersionArgsOptions> = {
    command: {},
    args: {
        short: ['short', 'boolean'],
        template: ['template', 'string']
    }
};

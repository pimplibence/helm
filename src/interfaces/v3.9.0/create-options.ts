import { ArgumentMap } from '../../libs/argument-mapper';

export interface CreateCommandOptions {
    name: string;
}

export interface CreateArgsOptions {
    starter?: string;
}

export const CreateOptionsMap: ArgumentMap<CreateCommandOptions, CreateArgsOptions> = {
    command: {
        name: 'string'
    },
    args: {
        starter: ['starter', 'string']
    }
};

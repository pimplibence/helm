import { ArgumentMap } from '../../libs/argument-mapper';

export interface GetAllCommandOptions {
    releaseName: string;
}

export const GetAllOptionsMap: ArgumentMap<GetAllCommandOptions, {}> = {
    command: {
        releaseName: 'string'
    },
    args: []
};

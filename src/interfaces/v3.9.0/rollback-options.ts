import { ArgumentMap } from '../../libs/argument-mapper';

export interface RollbackCommandOptions {
    release: string;
    revision: string;
}

export interface RollbackArgsOptions {
    cleanupOnFail?: boolean;
    dryRun?: boolean;
    force?: boolean;
    historyMax?: number;
    noHooks?: boolean;
    recreatePods?: boolean;
    timeout?: number;
    wait?: boolean;
    waitForJob?: boolean;
}

export const RollbackOptionsMap: ArgumentMap<RollbackCommandOptions, RollbackArgsOptions> = {
    command: {
        release: 'string',
        revision: 'string',
    },
    args: {
        cleanupOnFail: ['cleanup-on-fail', 'boolean'],
        dryRun: ['dry-run', 'boolean'],
        force: ['force', 'boolean'],
        historyMax: ['history-max', 'number'],
        noHooks: ['no-hooks', 'boolean'],
        recreatePods: ['recreate-pods', 'boolean'],
        timeout: ['timeout', 'number'],
        wait: ['wait', 'boolean'],
        waitForJob: ['wait-for-job', 'boolean']
    }
};

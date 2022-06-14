import { ArgumentMap } from '../../libs/argument-mapper';

export interface UpgradeCommandOptions {
    release: string;
    chart: string;
}

export interface UpgradeArgsOptions {
    atomic?: boolean;
    caFile?: string;
    certFile?: string;
    cleanupOnFail?: boolean;
    createNamespace?: boolean;
    dependencyUpdate?: boolean;
    descriptions?: string;
    disableOpenapiValidation?: boolean;
    dryRun?: boolean;
    force?: boolean;
    historyMax?: number;
    insecureSkipTlsVerify?: boolean;
    install?: boolean;
    keyFile?: string;
    keyring?: string;
    noHooks?: boolean;
    passCredentials?: string;
    password?: string;
    postRenderer?: string;
    postRendererArgs?: string[];
    renderSubchartNotes?: boolean;
    repo?: string;
    resetValues?: boolean;
    reuseValues?: boolean;
    set?: string[];
    setFile?: string[];
    setString?: string[];
    skipCrds?: boolean;
    timeout?: number;
    username?: string;
    values?: string[];
    verify?: boolean;
    version?: string;
    wait?: boolean;
    waitForJobs?: boolean;
}

export const UpgradeOptionsMap: ArgumentMap<UpgradeCommandOptions, UpgradeArgsOptions> = {
    command: {
        release: 'string',
        chart: 'string',
    },
    args: {
        atomic: ['atomic', 'boolean'],
        caFile: ['ca-file', 'string'],
        certFile: ['cert-file', 'string'],
        createNamespace: ['create-namespace', 'boolean'],
        dependencyUpdate: ['dependency-update', 'boolean'],
        descriptions: ['descriptions', 'string'],
        disableOpenapiValidation: ['disable-openapi-validation', 'boolean'],
        dryRun: ['dry-run', 'boolean'],
        insecureSkipTlsVerify: ['insecure-skip-tls-verify', 'boolean'],
        keyFile: ['key-file', 'string'],
        keyring: ['keyring', 'string'],
        noHooks: ['no-hooks', 'boolean'],
        passCredentials: ['pass-credentials', 'string'],
        password: ['password', 'string'],
        postRenderer: ['post-renderer', 'string'],
        postRendererArgs: ['post-rendererArgs', 'stringArray'],
        renderSubchartNotes: ['render-subchart-notes', 'boolean'],
        repo: ['repo', 'string'],
        set: ['set', 'stringArray'],
        setFile: ['set-file', 'stringArray'],
        setString: ['set-string', 'stringArray'],
        skipCrds: ['skip-crds', 'boolean'],
        timeout: ['timeout', 'number'],
        username: ['username', 'string'],
        values: ['values', 'stringArray'],
        verify: ['verify', 'boolean'],
        version: ['version', 'string'],
        wait: ['wait', 'boolean'],
        waitForJobs: ['wait-for-jobs', 'boolean'],
        cleanupOnFail: ['cleanup-on-fail', 'boolean'],
        force: ['force', 'boolean'],
        historyMax: ['history-max', 'number'],
        install: ['install', 'boolean'],
        resetValues: ['reset-values', 'boolean'],
        reuseValues: ['reuse-values', 'boolean'],
    }
};

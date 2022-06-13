import { ArgumentMap } from '../libs/argument-mapper';

export interface InstallCommandOptions {
    name: string;
    chart: string;
}

export interface InstallArgsOptions {
    atomic?: boolean;
    caFile?: string;
    certFile?: string;
    createNamespace?: boolean;
    dependencyUpdate?: boolean;
    description?: string;
    disableOpenapiValidation?: boolean;
    dryRun?: boolean;
    generateName?: boolean;
    insecureSkipTlsVerify?: boolean;
    keyFile?: string;
    keyring?: string;
    nameTemplate?: string;
    noHooks?: boolean;
    passCredentials?: string;
    password?: string;
    postRenderer?: string;
    postRendererArgs?: string[];
    renderSubchartNotes?: string;
    replace?: boolean;
    repo?: string;
    set?: string[];
    setFile?: string[];
    setString?: string[];
    skipCrds?: boolean;
    duration?: number;
    username?: string;
    values?: string[];
    verify?: boolean;
    version?: string;
    wait?: boolean;
    waitForJobs?: boolean;
}

export const InstallOptionsMap: ArgumentMap<InstallCommandOptions, InstallArgsOptions> = {
    command: {
        name: 'string',
        chart: 'string',
    },
    args: {
        atomic: ['atomic', 'boolean'],
        caFile: ['ca-file', 'string'],
        certFile: ['cert-file', 'string'],
        createNamespace: ['create-namespace', 'boolean'],
        dependencyUpdate: ['dependency-update', 'boolean'],
        description: ['description', 'string'],
        disableOpenapiValidation: ['disable-openapi-validation', 'boolean'],
        dryRun: ['dry-run', 'boolean'],
        generateName: ['generate-name', 'boolean'],
        insecureSkipTlsVerify: ['insecure-skip-tls-verify', 'boolean'],
        keyFile: ['key-file', 'string'],
        keyring: ['keyring', 'string'],
        nameTemplate: ['name-template', 'string'],
        noHooks: ['no-hooks', 'boolean'],
        passCredentials: ['pass-credentials', 'string'],
        password: ['password', 'string'],
        postRenderer: ['post-renderer', 'string'],
        postRendererArgs: ['post-renderer-args', 'stringArray'],
        renderSubchartNotes: ['render-subchart-notes', 'string'],
        replace: ['replace', 'boolean'],
        repo: ['repo', 'string'],
        set: ['set', 'stringArray'],
        setFile: ['set-file', 'stringArray'],
        setString: ['set-string', 'stringArray'],
        skipCrds: ['skip-crds', 'boolean'],
        duration: ['duration', 'number'],
        username: ['username', 'string'],
        values: ['values', 'stringArray'],
        verify: ['verify', 'boolean'],
        version: ['version', 'string'],
        wait: ['wait', 'boolean'],
        waitForJobs: ['wait-for-jobs', 'boolean'],
    }
};

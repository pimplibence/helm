import { ArgumentMap } from '../libs/argument-mapper';

export interface TemplateCommandOptions {
    name: string;
    chart: string;
}

export interface TemplateArgsOptions {
    apiVersions?: string[];
    atomic?: boolean;
    caFile?: string;
    certFile?: string;
    createNamespace?: boolean;
    dependencyUpdate?: boolean;
    descriptions?: string;
    disableOpenapiValidation?: boolean;
    dryRun?: boolean;
    generateName?: boolean;
    includeCrds?: boolean;
    insecureSkipTlsVerify?: boolean;
    isUpgrade?: boolean;
    keyFile?: string;
    keyring?: string;
    kubeVersion?: string;
    nameTemplate?: string;
    noHooks?: boolean;
    outputDir?: string;
    passCredentials?: string;
    password?: string;
    postRenderer?: string;
    postRendererArgs?: string[];
    releaseName?: boolean;
    renderSubchartNotes?: boolean;
    replace?: boolean;
    repo?: string;
    set?: string[];
    setFile?: string[];
    setString?: string[];
    showOnly?: string[];
    skipCrds?: boolean;
    skipTests?: boolean;
    timeout?: number;
    username?: string;
    validate?: boolean;
    values?: string[];
    verify?: boolean;
    version?: string;
    wait?: boolean;
    waitForJobs?: boolean;
}

export const TemplateOptionsMap: ArgumentMap<TemplateCommandOptions, TemplateArgsOptions> = {
    command: {
        name: 'string',
        chart: 'string',
    },
    args: {
        apiVersions: ['api-versions', 'stringArray'],
        atomic: ['atomic', 'boolean'],
        caFile: ['ca-file', 'string'],
        certFile: ['cert-file', 'string'],
        createNamespace: ['create-namespace', 'boolean'],
        dependencyUpdate: ['dependency-update', 'boolean'],
        descriptions: ['descriptions', 'string'],
        disableOpenapiValidation: ['disable-openapi-validation', 'boolean'],
        dryRun: ['dry-run', 'boolean'],
        generateName: ['generate-name', 'boolean'],
        includeCrds: ['include-crds', 'boolean'],
        insecureSkipTlsVerify: ['insecure-skip-tls-verify', 'boolean'],
        isUpgrade: ['is-upgrade', 'boolean'],
        keyFile: ['key-file', 'string'],
        keyring: ['keyring', 'string'],
        kubeVersion: ['kube-version', 'string'],
        nameTemplate: ['name-template', 'string'],
        noHooks: ['no-hooks', 'boolean'],
        outputDir: ['output-dir', 'string'],
        passCredentials: ['pass-credentials', 'string'],
        password: ['password', 'string'],
        postRenderer: ['post-renderer', 'string'],
        postRendererArgs: ['post-rendererArgs', 'stringArray'],
        releaseName: ['release-name', 'boolean'],
        renderSubchartNotes: ['render-subchart-notes', 'boolean'],
        replace: ['replace', 'boolean'],
        repo: ['repo', 'string'],
        set: ['set', 'stringArray'],
        setFile: ['set-file', 'stringArray'],
        setString: ['set-string', 'stringArray'],
        showOnly: ['show-only', 'stringArray'],
        skipCrds: ['skip-crds', 'boolean'],
        skipTests: ['skip-tests', 'boolean'],
        timeout: ['timeout', 'number'],
        username: ['username', 'string'],
        validate: ['validate', 'boolean'],
        values: ['values', 'stringArray'],
        verify: ['verify', 'boolean'],
        version: ['version', 'string'],
        wait: ['wait', 'boolean'],
        waitForJobs: ['wait-for-jobs', 'boolean'],
    }
};

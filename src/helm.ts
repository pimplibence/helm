import { Command } from './libs/command';

export interface HelmOptions {
    executable?: string;
    kubeApiServer?: string;
    kubeAsGroup?: string[];
    kubeAsUser?: string;
    kubeCaFile?: string;
    kubeContext?: string;
    kubeToken?: string;
    kubeConfig?: string;
    namespace?: string;
    registryConfig?: string;
    repositoryCache?: string;
}

export interface CreateOptions {
    name: string;
    starter?: string;
}

export interface DependencyBuildOptions {
    chart: string;
    keyring?: string;
    skipRefresh?: boolean;
    verify?: boolean;
}

export interface DependencyListOptions {
    chart: string;
}

export interface DependencyUpdateOptions {
    chart: string;
    keyring?: string;
    skipRefresh?: boolean;
    verify?: boolean;
}

export interface GetAllOptions {
    releaseName: string;
}

export interface GetHooksOptions {
    releaseName: string;
    revision?: number;
}

export interface GetNotesOptions {
    releaseName: string;
    revision?: number;
}

export interface GetManifestOptions {
    releaseName: string;
    revision?: number;
}

export interface GetValuesOptions {
    releaseName: string;
    all?: boolean;
    revision?: number;
}

export interface HistoryOptions {
    releaseName: string;
    max?: number;
}

export interface InstallOptions {
    name: string;
    chart: string;
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

export interface ListOptions {
    all?: boolean;
    allNamesapces?: boolean;
    date?: boolean;
    deployed?: boolean;
    failed?: boolean;
    filter?: string;
    max?: number;
    offset?: number;
    pending?: boolean;
    reverse?: boolean;
    selector?: string;
    superseded?: boolean;
    timeFormat?: string;
    uninstalled?: boolean;
    uninstalling?: boolean;
}

export interface PackageOptions {
    chartPath: string;
    dependencyUpdate?: boolean;
    destination?: string;
    key?: string;
    keyring?: string;
    passphraseFile?: string;
    sign?: boolean;
}

export interface PluginInstallOptions {
    urlOrPath: string;
    version?: string;
}

export interface PluginListOptions {
    //
}

export interface PluginUninstallOptions {
    plugin: string;
}

export interface PluginUpdateOptions {
    plugin: string;
}

export interface PullOptions {
    chartUrl: string;
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

export interface PushOptions {
    chart: string;
    remote: string;
}

export interface RegistryLoginOptions {
    host: string;
    insecure?: boolean;
    password?: string;
    username?: string;
}

export interface RegistryLogoutOptions {
    host: string;
}

export interface RepoAddOptions {
    name: string;
    url: string;
    allowDeprecatedRepos?: boolean;
    caFile?: string;
    certFile?: string;
    forceUpdate?: boolean;
    insecureSkipTlsVerify?: boolean;
    keyFile?: string;
    noUpdate?: boolean;
    passCredentials?: boolean;
    password?: string;
    username?: string;
}

export interface RepoIndexOptions {
    dir: string;
    merge?: string;
    url?: string;
}

export interface RepoListOptions {
    //
}

export interface RepoRemoveOptions {
    repo: string;
}

export interface ReposRemoveOptions {
    repos: string[];
}

export interface RepoUpdateOptions {
    repo: string;
    failOnRepoUpdateFail?: boolean;
}

export interface ReposUpdateOptions {
    repos: string[];
    failOnRepoUpdateFail?: boolean;
}

export interface RollbackOptions {
    release: string;
    revision: string;
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

export interface SearchHubOptions {
    keyword: string;
    listRepoUrl?: boolean;
}

export interface SearchRepoOptions {
    keyword: string;
    regexp?: string;
    version?: string;
    versions?: boolean;
}

export interface StatusOptions {
    releaseName: string;
    revision?: number;
    showDesc?: boolean;
}

export interface TemplateOptions {
    name: string;
    chart: string;
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

export interface TestOptions {
    release: string;
    filter?: string[];
    logs?: boolean;
    timeout?: number;
}

export interface UninstallOptions {
    release: string;
    description?: string;
    dryRun?: boolean;
    keepHistory?: boolean;
    noHooks?: boolean;
    timeout?: number;
    wait?: boolean;
}

export interface UpgradeOptions {
    release: string;
    chart: string;
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

export interface VerifyOptions {
    path: string;
    keyring?: string;
}

export interface VersionOptions {
    short?: boolean;
    template?: string;
}

export class Helm {
    public command: Command;
    public options: HelmOptions;

    constructor(options?: HelmOptions) {
        this.command = new Command(options);
    }

    public async create(options: CreateOptions): Promise<void> {
        const args = [];

        if (options.name) {
            args.push(options.name);
        }

        if (options.starter) {
            args.push('--starter');
            args.push(options.starter);
        }

        return this.command.execute({
            command: ['create'],
            output: 'none',
            args: args
        });
    }

    public async dependencyBuild(options: DependencyBuildOptions): Promise<void> {
        const args = [];

        if (options?.keyring) {
            args.push('--keyring');
            args.push(options.keyring);
        }

        if (options?.skipRefresh) {
            args.push('--skip-refresh');
        }

        if (options?.verify) {
            args.push('--verify');
        }

        return this.command.execute({
            command: ['dependency', 'build', options.chart],
            output: 'none',
            args: args
        });
    }

    public async dependencyList(options: DependencyListOptions): Promise<void> {
        /**
         * Notice: json output not supported by helm
         * version.BuildInfo{Version:"v3.7.2", GitCommit:"663a896f4a815053445eec4153677ddc24a0a361", GitTreeState:"clean", GoVersion:"go1.16.10"}
         */
        throw Error('UnsupportedFeature');
    }

    public async dependencyUpdate(options: DependencyUpdateOptions): Promise<void> {
        const args = [];

        if (options?.keyring) {
            args.push('--keyring');
            args.push(options.keyring);
        }

        if (options?.skipRefresh) {
            args.push('--skip-refresh');
        }

        if (options?.verify) {
            args.push('--verify');
        }

        return this.command.execute({
            command: ['dependency', 'update', options.chart],
            output: 'none',
            args: args
        });
    }

    public async env(): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['env'],
            output: 'text',
            args: args
        });
    }

    public async getAll(options: GetAllOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['get', 'all', options.releaseName],
            output: 'text',
            args: args
        });
    }

    public async getHooks(options: GetHooksOptions): Promise<string> {
        const args = [];

        if (options?.revision) {
            args.push('--revision');
            args.push(options.revision);
        }

        return this.command.execute({
            command: ['get', 'hooks', options.releaseName],
            output: 'text',
            args: args
        });
    }

    public async getManifest(options: GetManifestOptions): Promise<string> {
        const args = [];

        if (options?.revision) {
            args.push('--revision');
            args.push(options.revision);
        }

        return this.command.execute({
            command: ['get', 'manifest', options.releaseName],
            output: 'text',
            args: args
        });
    }

    public async getNotes(options: GetNotesOptions): Promise<string> {
        const args = [];

        if (options?.revision) {
            args.push('--revision');
            args.push(options.revision);
        }

        return this.command.execute({
            command: ['get', 'notes', options.releaseName],
            output: 'text',
            args: args
        });
    }

    public async getValues(options: GetValuesOptions): Promise<any> {
        const args = [];

        if (options?.revision) {
            args.push('--revision');
            args.push(options.revision);
        }

        return this.command.execute({
            command: ['get', 'values', options.releaseName],
            output: 'json',
            args: args
        });
    }

    public async history(options: HistoryOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['history', options.releaseName],
            output: 'json',
            args: args
        });
    }

    public async install(options: InstallOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['install', options.name, options.chart],
            output: 'none',
            args: args
        });
    }

    public async list(options: ListOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['list'],
            output: 'json',
            args: args
        });
    }

    public async package(options: PackageOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['package'],
            output: 'none',
            args: args
        });
    }

    public async pluginInstall(options: PluginInstallOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['plugin', 'install'],
            output: 'none',
            args: args
        });
    }

    public async pluginList(options: PluginListOptions): Promise<void> {
        /**
         * Notice: json output not supported by helm
         * version.BuildInfo{Version:"v3.7.2", GitCommit:"663a896f4a815053445eec4153677ddc24a0a361", GitTreeState:"clean", GoVersion:"go1.16.10"}
         */
        throw Error('UnsupportedFeature');
    }

    public async pluginUninstall(options: PluginUninstallOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['plugin', 'uninstall'],
            output: 'none',
            args: args
        });
    }

    public async pluginUpdate(options: PluginUpdateOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['plugin', 'update'],
            output: 'none',
            args: args
        });
    }

    public async pull(options: PullOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['pull'],
            output: 'none',
            args: args
        });
    }

    public async push(options: PushOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['push'],
            output: 'none',
            args: args
        });
    }

    public async registryLogin(options: RegistryLoginOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['registry', 'login'],
            output: 'none',
            args: args
        });
    }

    public async registryLogout(options: RegistryLogoutOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['registry', 'logout'],
            output: 'none',
            args: args
        });
    }

    public async repoAdd(options: RepoAddOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'add'],
            output: 'none',
            args: args
        });
    }

    public async repoIndex(options: RepoIndexOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'index'],
            output: 'none',
            args: args
        });
    }

    public async repoList(options: RepoListOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'list'],
            output: 'json',
            args: args
        });
    }

    public async repoRemove(options: RepoRemoveOptions | ReposRemoveOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'remove'],
            output: 'none',
            args: args
        });
    }

    public async repoUpdate(options: RepoUpdateOptions | ReposUpdateOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'update'],
            output: 'none',
            args: args
        });
    }

    public async rollback(options: RollbackOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['rollback'],
            output: 'none',
            args: args
        });
    }

    public async searchHub(options: SearchHubOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['search', 'hub'],
            output: 'json',
            args: args
        });
    }

    public async searchRepo(options: SearchRepoOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['search', 'repo'],
            output: 'json',
            args: args
        });
    }

    public async status(options: StatusOptions): Promise<any> {
        const args = [];

        return this.command.execute({
            command: ['status'],
            output: 'json',
            args: args
        });
    }

    public async template(options: TemplateOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['template', options.name, options.chart],
            output: 'text',
            args: args
        });
    }

    public async test(options: TestOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['test'],
            output: 'none',
            args: args
        });
    }

    public async uninstall(options: UninstallOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['uninstall'],
            output: 'none',
            args: args
        });
    }

    public async upgrade(options: UpgradeOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['upgrade'],
            output: 'none',
            args: args
        });
    }

    public async verify(options: VerifyOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['verify'],
            output: 'none',
            args: args
        });
    }

    public async version(options?: VersionOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['version'],
            output: 'text',
            args: args
        });
    }
}

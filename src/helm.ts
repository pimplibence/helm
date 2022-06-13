import { CreateArgsOptions, CreateCommandOptions, CreateOptionsMap } from './interfaces/create-options';
import { DependencyBuildArgsOptions, DependencyBuildCommandOptions } from './interfaces/dependency-build-options';
import { DependencyUpdateCommandOptions } from './interfaces/dependency-update-options';
import { GetAllCommandOptions } from './interfaces/get-all-options';
import { GetHooksArgsOptions, GetHooksCommandOptions } from './interfaces/get-hooks-options';
import { GetManifestArgsOptions, GetManifestCommandOptions } from './interfaces/get-manifest-options';
import { GetNotesArgsOptions, GetNotesCommandOptions } from './interfaces/get-notes-options';
import { GetValuesArgsOptions, GetValuesCommandOptions } from './interfaces/get-values-options';
import { GlobalArgsOptions } from './interfaces/global-options';
import { HistoryArgsOptions, HistoryCommandOptions } from './interfaces/history-options';
import { InstallArgsOptions, InstallCommandOptions } from './interfaces/install-options';
import { ListArgsOptions } from './interfaces/list-options';
import { PackageArgsOptions, PackageCommandOptions } from './interfaces/package-options';
import { PluginInstallArgsOptions, PluginInstallCommandOptions } from './interfaces/plugin-install-options';
import { PluginUninstallCommandOptions } from './interfaces/plugin-uninstall-options';
import { PluginUpdateCommandOptions } from './interfaces/plugin-update-options';
import { PullArgsOptions, PullCommandOptions } from './interfaces/pull-options';
import { PushCommandOptions } from './interfaces/push-options';
import { RegistryLoginArgsOptions, RegistryLoginCommandOptions } from './interfaces/registry-login-options';
import { RegistryLogoutCommandOptions } from './interfaces/registry-logout-options';
import { RepoAddArgsOptions, RepoAddCommandOptions } from './interfaces/repo-add-options';
import { RepoIndexArgsOptions, RepoIndexCommandOptions } from './interfaces/repo-index-options';
import { RepoRemoveCommandOptions } from './interfaces/repo-remove-options';
import { RepoUpdateArgsOptions, RepoUpdateCommandOptions } from './interfaces/repo-update-options';
import { ReposRemoveCommandOptions } from './interfaces/repos-remove-options';
import { ReposUpdateArgsOptions, ReposUpdateCommandOptions } from './interfaces/repos-update-options';
import { RollbackArgsOptions, RollbackCommandOptions } from './interfaces/rollback-options';
import { SearchHubArgsOptions, SearchHubCommandOptions } from './interfaces/search-hub-options';
import { SearchRepoArgsOptions, SearchRepoCommandOptions } from './interfaces/search-repo-options';
import { StatusArgsOptions, StatusCommandOptions } from './interfaces/status-options';
import { TemplateArgsOptions, TemplateCommandOptions } from './interfaces/template-options';
import { TestArgsOptions, TestCommandOptions } from './interfaces/test-options';
import { UninstallArgsOptions, UninstallCommandOptions } from './interfaces/uninstall-options';
import { UpgradeArgsOptions, UpgradeCommandOptions } from './interfaces/upgrade-options';
import { VerifyArgsOptions, VerifyCommandOptions } from './interfaces/verify-options';
import { VersionArgsOptions } from './interfaces/version-options';
import { ArgumentMapper } from './libs/argument-mapper';
import { Command, CommandOptions } from './libs/command';

export class Helm {
    public command: Command;
    public globalArgs = [];

    constructor(options?: GlobalArgsOptions & CommandOptions) {
        this.command = new Command(options);

        if (options?.kubeApiServer) {
            this.globalArgs.push('--kube-apiserver');
            this.globalArgs.push(options?.kubeApiServer);
        }

        if (options?.kubeAsGroup && options?.kubeAsGroup?.length) {
            for (const item of options?.kubeAsGroup) {
                this.globalArgs.push('--kube-as-group');
                this.globalArgs.push(item);
            }
        }

        if (options?.kubeAsUser) {
            this.globalArgs.push('--kube-as-user');
            this.globalArgs.push(options?.kubeAsUser);
        }

        if (options?.kubeCaFile) {
            this.globalArgs.push('--kube-ca-file');
            this.globalArgs.push(options?.kubeCaFile);
        }

        if (options?.kubeContext) {
            this.globalArgs.push('--kube-context');
            this.globalArgs.push(options?.kubeContext);
        }

        if (options?.kubeToken) {
            this.globalArgs.push('--kube-token');
            this.globalArgs.push(options?.kubeToken);
        }

        if (options?.kubeConfig) {
            this.globalArgs.push('--kubeconfig');
            this.globalArgs.push(options?.kubeConfig);
        }

        if (options?.namespace) {
            this.globalArgs.push('--namespace');
            this.globalArgs.push(options?.namespace);
        }

        if (options?.registryConfig) {
            this.globalArgs.push('--registry-config');
            this.globalArgs.push(options?.registryConfig);
        }

        if (options?.repositoryCache) {
            this.globalArgs.push('--repository-cache');
            this.globalArgs.push(options?.repositoryCache);
        }
    }

    public async create(options: CreateCommandOptions & CreateArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(options, CreateOptionsMap);

        return this.command.execute({
            command: ['create', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async dependencyBuild(options: DependencyBuildCommandOptions & DependencyBuildArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['dependency', 'build', options.chart],
            output: 'none',
            args: args
        });
    }

    public async dependencyList(): Promise<void> {
        /**
         * Notice: json output not supported by helm
         * version.BuildInfo{Version:"v3.7.2", GitCommit:"663a896f4a815053445eec4153677ddc24a0a361", GitTreeState:"clean", GoVersion:"go1.16.10"}
         */
        throw Error('UnsupportedFeature');
    }

    public async dependencyUpdate(options: DependencyUpdateCommandOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

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

    public async getAll(options: GetAllCommandOptions & GlobalArgsOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['get', 'all', options.releaseName],
            output: 'text',
            args: args
        });
    }

    public async getHooks(options: GetHooksCommandOptions & GetHooksArgsOptions & GlobalArgsOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['get', 'hooks', options.releaseName],
            output: 'text',
            args: args
        });
    }

    public async getManifest(options: GetManifestCommandOptions & GetManifestArgsOptions & GlobalArgsOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['get', 'manifest', options.releaseName],
            output: 'text',
            args: args
        });
    }

    public async getNotes(options: GetNotesCommandOptions & GetNotesArgsOptions & GlobalArgsOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['get', 'notes', options.releaseName],
            output: 'text',
            args: args
        });
    }

    public async getValues(options: GetValuesCommandOptions & GetValuesArgsOptions & GlobalArgsOptions): Promise<any> {
        const args = [];

        return this.command.execute({
            command: ['get', 'values', options.releaseName],
            output: 'json',
            args: args
        });
    }

    public async history(options: HistoryCommandOptions & HistoryArgsOptions & GlobalArgsOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['history', options.releaseName],
            output: 'json',
            args: args
        });
    }

    public async install(options: InstallCommandOptions & InstallArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['install', options.name, options.chart],
            output: 'none',
            args: args
        });
    }

    public async list(options: ListArgsOptions & GlobalArgsOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['list'],
            output: 'json',
            args: args
        });
    }

    public async package(options: PackageCommandOptions & PackageArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['package', options.chartPath],
            output: 'none',
            args: args
        });
    }

    public async pluginInstall(options: PluginInstallCommandOptions & PluginInstallArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['plugin', 'install', options.urlOrPath],
            output: 'none',
            args: args
        });
    }

    public async pluginList(): Promise<void> {
        /**
         * Notice: json output not supported by helm
         * version.BuildInfo{Version:"v3.7.2", GitCommit:"663a896f4a815053445eec4153677ddc24a0a361", GitTreeState:"clean", GoVersion:"go1.16.10"}
         */
        throw Error('UnsupportedFeature');
    }

    public async pluginUninstall(options: PluginUninstallCommandOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['plugin', 'uninstall', options.plugin],
            output: 'none',
            args: args
        });
    }

    public async pluginUpdate(options: PluginUpdateCommandOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['plugin', 'update', options.plugin],
            output: 'none',
            args: args
        });
    }

    public async pull(options: PullCommandOptions & PullArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['pull', options.chartUrl],
            output: 'none',
            args: args
        });
    }

    public async push(options: PushCommandOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['push', options.chart, options.remote],
            output: 'none',
            args: args
        });
    }

    public async registryLogin(options: RegistryLoginCommandOptions & RegistryLoginArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['registry', 'login', options.host],
            output: 'none',
            args: args
        });
    }

    public async registryLogout(options: RegistryLogoutCommandOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['registry', 'logout', options.host],
            output: 'none',
            args: args
        });
    }

    public async repoAdd(options: RepoAddCommandOptions & RepoAddArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'add', options.name, options.url],
            output: 'none',
            args: args
        });
    }

    public async repoIndex(options: RepoIndexCommandOptions & RepoIndexArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'index', options.dir],
            output: 'none',
            args: args
        });
    }

    public async repoList(): Promise<any[]> {
        /**
         * Notice: json output not supported by helm
         * version.BuildInfo{Version:"v3.7.2", GitCommit:"663a896f4a815053445eec4153677ddc24a0a361", GitTreeState:"clean", GoVersion:"go1.16.10"}
         */
        throw Error('UnsupportedFeature');
    }

    public async repoRemove(options: RepoRemoveCommandOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'remove', options.repo],
            output: 'none',
            args: args
        });
    }

    public async reposRemove(options: ReposRemoveCommandOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'remove', ...options.repos],
            output: 'none',
            args: args
        });
    }

    public async repoUpdate(options: RepoUpdateCommandOptions & RepoUpdateArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'update', options.repo],
            output: 'none',
            args: args
        });
    }

    public async reposUpdate(options: ReposUpdateCommandOptions & ReposUpdateArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['repo', 'update', ...options.repos],
            output: 'none',
            args: args
        });
    }

    public async rollback(options: RollbackCommandOptions & RollbackArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        if (options.revision) {
            args.push(options.revision);
        }

        return this.command.execute({
            command: ['rollback', options.release],
            output: 'none',
            args: args
        });
    }

    public async searchHub(options: SearchHubCommandOptions & SearchHubArgsOptions & GlobalArgsOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['search', 'hub', options.keyword],
            output: 'json',
            args: args
        });
    }

    public async searchRepo(options: SearchRepoCommandOptions & SearchRepoArgsOptions & GlobalArgsOptions): Promise<any[]> {
        const args = [];

        return this.command.execute({
            command: ['search', 'repo', options.keyword],
            output: 'json',
            args: args
        });
    }

    public async status(options: StatusCommandOptions & StatusArgsOptions & GlobalArgsOptions): Promise<any> {
        const args = [];

        return this.command.execute({
            command: ['status', options.releaseName],
            output: 'json',
            args: args
        });
    }

    public async template(options: TemplateCommandOptions & TemplateArgsOptions & GlobalArgsOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['template', options.name, options.chart],
            output: 'text',
            args: args
        });
    }

    public async test(options: TestCommandOptions & TestArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['test', options.release],
            output: 'none',
            args: args
        });
    }

    public async uninstall(options: UninstallCommandOptions & UninstallArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['uninstall', options.release],
            output: 'none',
            args: args
        });
    }

    public async upgrade(options: UpgradeCommandOptions & UpgradeArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['upgrade', options.release, options.chart],
            output: 'none',
            args: args
        });
    }

    public async verify(options: VerifyCommandOptions & VerifyArgsOptions & GlobalArgsOptions): Promise<void> {
        const args = [];

        return this.command.execute({
            command: ['verify', options.path],
            output: 'none',
            args: args
        });
    }

    public async version(options?: VersionArgsOptions & GlobalArgsOptions): Promise<string> {
        const args = [];

        return this.command.execute({
            command: ['version'],
            output: 'text',
            args: args
        });
    }
}

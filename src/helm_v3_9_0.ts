import { CreateArgsOptions, CreateCommandOptions, CreateOptionsMap } from './interfaces/v3.9.0/create-options';
import { DependencyBuildArgsOptions, DependencyBuildCommandOptions, DependencyBuildOptionsMap } from './interfaces/v3.9.0/dependency-build-options';
import { DependencyUpdateCommandOptions, DependencyUpdateOptionsMap } from './interfaces/v3.9.0/dependency-update-options';
import { GetAllCommandOptions, GetAllOptionsMap } from './interfaces/v3.9.0/get-all-options';
import { GetHooksArgsOptions, GetHooksCommandOptions, GetHooksOptionsMap } from './interfaces/v3.9.0/get-hooks-options';
import { GetManifestArgsOptions, GetManifestCommandOptions, GetManifestOptionsMap } from './interfaces/v3.9.0/get-manifest-options';
import { GetNotesArgsOptions, GetNotesCommandOptions, GetNotesOptionsMap } from './interfaces/v3.9.0/get-notes-options';
import { GetValuesArgsOptions, GetValuesCommandOptions, GetValuesOptionsMap } from './interfaces/v3.9.0/get-values-options';
import { GlobalArgsOptions } from './interfaces/v3.9.0/global-options';
import { HistoryArgsOptions, HistoryCommandOptions, HistoryOptionsMap } from './interfaces/v3.9.0/history-options';
import { InstallArgsOptions, InstallCommandOptions, InstallOptionsMap } from './interfaces/v3.9.0/install-options';
import { ListArgsOptions, ListOptionsMap } from './interfaces/v3.9.0/list-options';
import { PackageArgsOptions, PackageCommandOptions, PackageOptionsMap } from './interfaces/v3.9.0/package-options';
import { PluginInstallArgsOptions, PluginInstallCommandOptions, PluginInstallOptionsMap } from './interfaces/v3.9.0/plugin-install-options';
import { PluginUninstallCommandOptions, PluginUninstallOptionsMap } from './interfaces/v3.9.0/plugin-uninstall-options';
import { PluginUpdateCommandOptions, PluginUpdateOptionsMap } from './interfaces/v3.9.0/plugin-update-options';
import { PullArgsOptions, PullCommandOptions, PullOptionsMap } from './interfaces/v3.9.0/pull-options';
import { PushCommandOptions, PushOptionsMap } from './interfaces/v3.9.0/push-options';
import { RegistryLoginArgsOptions, RegistryLoginCommandOptions, RegistryLoginOptionsMap } from './interfaces/v3.9.0/registry-login-options';
import { RegistryLogoutCommandOptions, RegistryLogoutOptionsMap } from './interfaces/v3.9.0/registry-logout-options';
import { RepoAddArgsOptions, RepoAddCommandOptions, RepoAddOptionsMap } from './interfaces/v3.9.0/repo-add-options';
import { RepoIndexArgsOptions, RepoIndexCommandOptions, RepoIndexOptionsMap } from './interfaces/v3.9.0/repo-index-options';
import { RepoRemoveCommandOptions, RepoRemoveOptionsMap } from './interfaces/v3.9.0/repo-remove-options';
import { RepoUpdateArgsOptions, RepoUpdateCommandOptions, RepoUpdateOptionsMap } from './interfaces/v3.9.0/repo-update-options';
import { ReposRemoveCommandOptions, ReposRemoveOptionsMap } from './interfaces/v3.9.0/repos-remove-options';
import { ReposUpdateArgsOptions, ReposUpdateCommandOptions, ReposUpdateOptionsMap } from './interfaces/v3.9.0/repos-update-options';
import { RollbackArgsOptions, RollbackCommandOptions, RollbackOptionsMap } from './interfaces/v3.9.0/rollback-options';
import { SearchHubArgsOptions, SearchHubCommandOptions, SearchHubOptionsMap } from './interfaces/v3.9.0/search-hub-options';
import { SearchRepoArgsOptions, SearchRepoCommandOptions, SearchRepoOptionsMap } from './interfaces/v3.9.0/search-repo-options';
import { StatusArgsOptions, StatusCommandOptions, StatusOptionsMap } from './interfaces/v3.9.0/status-options';
import { TemplateArgsOptions, TemplateCommandOptions, TemplateOptionsMap } from './interfaces/v3.9.0/template-options';
import { TestArgsOptions, TestCommandOptions, TestOptionsMap } from './interfaces/v3.9.0/test-options';
import { UninstallArgsOptions, UninstallCommandOptions, UninstallOptionsMap } from './interfaces/v3.9.0/uninstall-options';
import { UpgradeArgsOptions, UpgradeCommandOptions, UpgradeOptionsMap } from './interfaces/v3.9.0/upgrade-options';
import { VerifyArgsOptions, VerifyCommandOptions, VerifyOptionsMap } from './interfaces/v3.9.0/verify-options';
import { VersionArgsOptions, VersionOptionsMap } from './interfaces/v3.9.0/version-options';
import { ArgumentMapper } from './libs/argument-mapper';
import { Command, CommandOptions } from './libs/command';

export class Helm_v3_9_0 {
    public supportedVersion = ['v3.9.0', 'v3.9.1'];
    public command: Command;
    public options: GlobalArgsOptions;

    constructor(options?: GlobalArgsOptions & CommandOptions) {
        this.options = options;
        this.command = new Command(options);

        this.notifyIsHelmVersionSupported();
    }

    public async create(options: CreateCommandOptions & CreateArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, CreateOptionsMap);

        return this.command.execute({
            command: ['create', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async dependencyBuild(options: DependencyBuildCommandOptions & DependencyBuildArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, DependencyBuildOptionsMap);

        return this.command.execute({
            command: ['dependency', 'build', ...mapper.command()],
            output: 'none',
            args: mapper.args()
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
        const mapper = new ArgumentMapper(this.options, options, DependencyUpdateOptionsMap);

        return this.command.execute({
            command: ['dependency', 'update', ...mapper.command()],
            output: 'none',
            args: mapper.args()
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
        const mapper = new ArgumentMapper(this.options, options, GetAllOptionsMap);

        return this.command.execute({
            command: ['get', 'all', ...mapper.command()],
            output: 'text',
            args: mapper.args()
        });
    }

    public async getHooks(options: GetHooksCommandOptions & GetHooksArgsOptions & GlobalArgsOptions): Promise<string> {
        const mapper = new ArgumentMapper(this.options, options, GetHooksOptionsMap);

        return this.command.execute({
            command: ['get', 'hooks', ...mapper.command()],
            output: 'text',
            args: mapper.args()
        });
    }

    public async getManifest(options: GetManifestCommandOptions & GetManifestArgsOptions & GlobalArgsOptions): Promise<string> {
        const mapper = new ArgumentMapper(this.options, options, GetManifestOptionsMap);

        return this.command.execute({
            command: ['get', 'manifest', ...mapper.command()],
            output: 'text',
            args: mapper.args()
        });
    }

    public async getNotes(options: GetNotesCommandOptions & GetNotesArgsOptions & GlobalArgsOptions): Promise<string> {
        const mapper = new ArgumentMapper(this.options, options, GetNotesOptionsMap);

        return this.command.execute({
            command: ['get', 'notes', ...mapper.command()],
            output: 'text',
            args: mapper.args()
        });
    }

    public async getValues(options: GetValuesCommandOptions & GetValuesArgsOptions & GlobalArgsOptions): Promise<any> {
        const mapper = new ArgumentMapper(this.options, options, GetValuesOptionsMap);

        return this.command.execute({
            command: ['get', 'values', ...mapper.command()],
            output: 'json',
            args: mapper.args()
        });
    }

    public async history(options: HistoryCommandOptions & HistoryArgsOptions & GlobalArgsOptions): Promise<any[]> {
        const mapper = new ArgumentMapper(this.options, options, HistoryOptionsMap);

        return this.command.execute({
            command: ['history', ...mapper.command()],
            output: 'json',
            args: mapper.args()
        });
    }

    public async install(options: InstallCommandOptions & InstallArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, InstallOptionsMap);

        return this.command.execute({
            command: ['install', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async list(options: ListArgsOptions & GlobalArgsOptions): Promise<any[]> {
        const mapper = new ArgumentMapper(this.options, options, ListOptionsMap);

        return this.command.execute({
            command: ['list'],
            output: 'json',
            args: mapper.args()
        });
    }

    public async package(options: PackageCommandOptions & PackageArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, PackageOptionsMap);

        return this.command.execute({
            command: ['package', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async pluginInstall(options: PluginInstallCommandOptions & PluginInstallArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, PluginInstallOptionsMap);

        return this.command.execute({
            command: ['plugin', 'install', ...mapper.command()],
            output: 'none',
            args: mapper.args()
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
        const mapper = new ArgumentMapper(this.options, options, PluginUninstallOptionsMap);

        return this.command.execute({
            command: ['plugin', 'uninstall', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async pluginUpdate(options: PluginUpdateCommandOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, PluginUpdateOptionsMap);

        return this.command.execute({
            command: ['plugin', 'update', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async pull(options: PullCommandOptions & PullArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, PullOptionsMap);

        return this.command.execute({
            command: ['pull', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async push(options: PushCommandOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, PushOptionsMap);

        return this.command.execute({
            command: ['push', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async registryLogin(options: RegistryLoginCommandOptions & RegistryLoginArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, RegistryLoginOptionsMap);

        return this.command.execute({
            command: ['registry', 'login', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async registryLogout(options: RegistryLogoutCommandOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, RegistryLogoutOptionsMap);

        return this.command.execute({
            command: ['registry', 'logout', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async repoAdd(options: RepoAddCommandOptions & RepoAddArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, RepoAddOptionsMap);

        return this.command.execute({
            command: ['repo', 'add', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async repoIndex(options: RepoIndexCommandOptions & RepoIndexArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, RepoIndexOptionsMap);

        return this.command.execute({
            command: ['repo', 'index', ...mapper.command()],
            output: 'none',
            args: mapper.args()
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
        const mapper = new ArgumentMapper(this.options, options, RepoRemoveOptionsMap);

        return this.command.execute({
            command: ['repo', 'remove', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async reposRemove(options: ReposRemoveCommandOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, ReposRemoveOptionsMap);

        return this.command.execute({
            command: ['repo', 'remove', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async repoUpdate(options: RepoUpdateCommandOptions & RepoUpdateArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, RepoUpdateOptionsMap);

        return this.command.execute({
            command: ['repo', 'update', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async reposUpdate(options: ReposUpdateCommandOptions & ReposUpdateArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, ReposUpdateOptionsMap);

        return this.command.execute({
            command: ['repo', 'update', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async rollback(options: RollbackCommandOptions & RollbackArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, RollbackOptionsMap);

        return this.command.execute({
            command: ['rollback', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async searchHub(options: SearchHubCommandOptions & SearchHubArgsOptions & GlobalArgsOptions): Promise<any[]> {
        const mapper = new ArgumentMapper(this.options, options, SearchHubOptionsMap);

        return this.command.execute({
            command: ['search', 'hub', ...mapper.command()],
            output: 'json',
            args: mapper.args()
        });
    }

    public async searchRepo(options: SearchRepoCommandOptions & SearchRepoArgsOptions & GlobalArgsOptions): Promise<any[]> {
        const mapper = new ArgumentMapper(this.options, options, SearchRepoOptionsMap);

        return this.command.execute({
            command: ['search', 'repo', ...mapper.command()],
            output: 'json',
            args: mapper.args()
        });
    }

    public async status(options: StatusCommandOptions & StatusArgsOptions & GlobalArgsOptions): Promise<any> {
        const mapper = new ArgumentMapper(this.options, options, StatusOptionsMap);

        return this.command.execute({
            command: ['status', ...mapper.command()],
            output: 'json',
            args: mapper.args()
        });
    }

    public async template(options: TemplateCommandOptions & TemplateArgsOptions & GlobalArgsOptions): Promise<string> {
        const mapper = new ArgumentMapper(this.options, options, TemplateOptionsMap);

        return this.command.execute({
            command: ['template', ...mapper.command()],
            output: 'text',
            args: mapper.args()
        });
    }

    public async test(options: TestCommandOptions & TestArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, TestOptionsMap);

        return this.command.execute({
            command: ['test', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async uninstall(options: UninstallCommandOptions & UninstallArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, UninstallOptionsMap);

        return this.command.execute({
            command: ['uninstall', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async upgrade(options: UpgradeCommandOptions & UpgradeArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, UpgradeOptionsMap);

        return this.command.execute({
            command: ['upgrade', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async verify(options: VerifyCommandOptions & VerifyArgsOptions & GlobalArgsOptions): Promise<void> {
        const mapper = new ArgumentMapper(this.options, options, VerifyOptionsMap);

        return this.command.execute({
            command: ['verify', ...mapper.command()],
            output: 'none',
            args: mapper.args()
        });
    }

    public async version(options?: VersionArgsOptions & GlobalArgsOptions): Promise<string> {
        const mapper = new ArgumentMapper(this.options, options, VersionOptionsMap);

        return this.command.execute({
            command: ['version'],
            output: 'text',
            args: mapper.args()
        });
    }

    protected async notifyIsHelmVersionSupported() {
        const helmVersion = await this.version({ template: '{{ .Version }}' });
        const isSupported = this.supportedVersion.includes(helmVersion);

        if (!isSupported) {
            console.warn('WARNING! Unsupported Helm version!');
            console.warn(`- Current version: ${helmVersion}`);
            console.warn(`- Supported versions: ${this.supportedVersion.join(', ')}`);
        }
    }
}


import { spawn } from 'child_process';
import { HelmOptions } from '../helm';
import { defaultExecutable } from './default-executable';
import { HelmError } from './helm-error';

export interface ExecuteOptions {
    command: string[];
    output?: 'json' | 'text' | 'none';
    args: string[];
}

export class Command {
    private options: HelmOptions;

    public constructor(options: HelmOptions) {
        this.options = options;
    }

    public async execute(options: ExecuteOptions): Promise<any> {
        const command = options.command || [];
        const commandFlags = options.args || [];
        const globalFlags = this.getGlobalFlags();

        const args = [
            ...command,
            ...commandFlags,
            ...globalFlags
        ];

        if (options.output === 'json') {
            args.push('--output');
            args.push(options.output);
        }

        const stream = spawn(this.getExecutable(), args);

        return new Promise((resolve, reject) => {
            let stdout = '';
            let stderr = '';

            stream.stdout.on('data', (line) => (stdout += line));
            stream.stderr.on('data', (line) => (stderr += line));

            stream.on('close', () => {
                if (!!stderr) {
                    const error = new HelmError(stderr);

                    return reject(error);
                }

                const output = this.getOutput(options.output, stdout);

                return resolve(output);
            });
        });

    }

    private getExecutable() {
        return this.options?.executable || defaultExecutable();
    }

    private getGlobalFlags(): string[] {
        const args: string[] = [];

        if (this.options?.kubeApiServer) {
            args.push('--kube-apiserver');
            args.push(this.options?.kubeApiServer);
        }

        if (this.options?.kubeAsGroup && this.options?.kubeAsGroup?.length) {
            for (const item of this.options?.kubeAsGroup) {
                args.push('--kube-as-group');
                args.push(item);
            }
        }

        if (this.options?.kubeAsUser) {
            args.push('--kube-as-user');
            args.push(this.options?.kubeAsUser);
        }

        if (this.options?.kubeCaFile) {
            args.push('--kube-ca-file');
            args.push(this.options?.kubeCaFile);
        }

        if (this.options?.kubeContext) {
            args.push('--kube-context');
            args.push(this.options?.kubeContext);
        }

        if (this.options?.kubeToken) {
            args.push('--kube-token');
            args.push(this.options?.kubeToken);
        }

        if (this.options?.kubeConfig) {
            args.push('--kubeconfig');
            args.push(this.options?.kubeConfig);
        }

        if (this.options?.namespace) {
            args.push('--namespace');
            args.push(this.options?.namespace);
        }

        if (this.options?.registryConfig) {
            args.push('--registry-config');
            args.push(this.options?.registryConfig);
        }

        if (this.options?.repositoryCache) {
            args.push('--repository-cache');
            args.push(this.options?.repositoryCache);
        }

        return args;
    }

    private getOutput(type: string, value: string) {
        switch (type) {
            case 'json':
                return JSON.parse(value);
            case 'text':
                return value?.trim();
            case 'none':
                return;
        }
    }
}

import { spawn } from 'child_process';
import { defaultExecutable } from './default-executable';
import { HelmError } from './helm-error';

export interface CommandOptions {
    executable?: string;
}

export interface ExecuteOptions {
    command: string[];
    output?: 'json' | 'text' | 'none';
    args: string[];
}

export class Command {
    private options: CommandOptions;

    public constructor(options: CommandOptions) {
        this.options = options;
    }

    public async execute(options: ExecuteOptions): Promise<any> {
        const command = options.command || [];
        const commandFlags = options.args || [];

        const args = [
            ...command,
            ...commandFlags
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

import { GlobalArgsOptions, GlobalOptionsMap, mergeGlobalArgsOptions } from '../interfaces/global-options';

export class ArgumentMap<CommandOptions, ArgsOptions> {
    command: Record<keyof CommandOptions, 'string' | 'stringArray'>;
    args: Record<keyof ArgsOptions, [string, 'string' | 'stringArray' | 'number' | 'numberArray' | 'boolean']>;
}

export class ArgumentMapper<CommandOptions, ArgsOptions> {
    private options: CommandOptions & ArgsOptions & GlobalArgsOptions;
    private map: ArgumentMap<CommandOptions, ArgsOptions>;

    constructor(globalOptions: GlobalArgsOptions, options: CommandOptions & ArgsOptions, map: ArgumentMap<CommandOptions, ArgsOptions>) {
        this.options = mergeGlobalArgsOptions(globalOptions, options);

        map.args = {
            ...GlobalOptionsMap.args,
            ...map.args
        };

        this.map = map;
    }

    public command(): string[] {
        const args = [];

        for (const key of Object.keys(this.map.command)) {
            const type = this.map.command[key];
            const value = this.options?.[key];

            switch (type) {
                case 'string':
                    args.push(value);
                    break;
                case 'stringArray':
                    for (const item of value) {
                        if (!!item) {
                            args.push(item);
                        }
                    }
                    break;
            }
        }

        return args;
    }

    public args(): string[] {
        const args = [];

        for (const key of Object.keys(this.map.args)) {
            const aKey = this.map.args[key][0];
            const type = this.map.args[key][1];
            const value = this.options?.[key];

            switch (type) {
                case 'string':
                    if (!!value) {
                        args.push(`--${aKey}`);
                        args.push(value);
                    }
                    break;
                case 'stringArray':
                    for (const item of value || []) {
                        if (!!item) {
                            args.push(`--${aKey}`);
                            args.push(item);
                        }
                    }
                    break;
                case 'number':
                    if (value !== undefined) {
                        args.push(`--${aKey}`);
                        args.push(value);
                    }
                    break;
                case 'numberArray':
                    for (const item of value || []) {
                        if (value !== undefined) {
                            args.push(`--${aKey}`);
                            args.push(item);
                        }
                    }
                    break;
                case 'boolean':
                    if (!!value) {
                        args.push(`--${aKey}`);
                    }
                    break;
            }
        }

        return args
            .filter((item) => item !== undefined)
            .map((item) => item.toString());
    }
}

import { ArgumentMap } from '../libs/argument-mapper';

export interface GlobalArgsOptions {
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

export const GlobalOptionsMap: ArgumentMap<{}, GlobalArgsOptions> = {
    command: [],
    args: {
        kubeApiServer: ['kube-apiserver', 'string'],
        kubeAsGroup: ['kube-as-group', 'stringArray'],
        kubeAsUser: ['kube-as-user', 'string'],
        kubeCaFile: ['kube-ca-file', 'string'],
        kubeContext: ['kube-context', 'string'],
        kubeToken: ['kube-token', 'string'],
        kubeConfig: ['kube-config', 'string'],
        namespace: ['namespace', 'string'],
        registryConfig: ['registry-config', 'string'],
        repositoryCache: ['repository-cache', 'string'],
    }
};

export const mergeGlobalArgsOptions = (left: GlobalArgsOptions, right: any): any => ({
    ...left,
    ...right,
    kubeAsGroup: [
        ...left.kubeAsGroup || [],
        ...right.kubeAsGroup || [],
    ]
});

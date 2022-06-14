import { Helm } from '../src/helm';

const helm = new Helm({
    namespace: 'example-namespace'
});

helm.install({
    name: 'example-things',
    chart: 'mongodb',
    repo: 'https://charts.bitnami.com/bitnami',
    createNamespace: true
}).then(console.log);

import { Helm } from '../src/helm';

const helm = new Helm({});

helm.create({
    name: 'example-chart',
    namespace: 'example-chart',
    starter: 'asfasf'
}).then(console.log);

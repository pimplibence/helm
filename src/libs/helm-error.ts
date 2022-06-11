export class HelmError extends Error {
    public payload: any;

    constructor(payload: any) {
        super('HelmCommandError');
        this.payload = payload;
    }
}

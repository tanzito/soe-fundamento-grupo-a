export abstract class UseCase<Param, Result> {
    abstract readonly: boolean

    async execute(param: Param): Promise<Result> {
        return this.internalExecute(param)
    }

    abstract internalExecute(param: Param): Promise<Result>
}
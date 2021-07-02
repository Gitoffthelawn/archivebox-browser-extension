export const enum GlobalConfigKey {
  ArchiveMode = "archiveMode",
  ArchiveBoxBaseUrl = "archiveBoxBaseUrl",
  Tags = "tags"
}

export default interface IConfig {
  get<T>(key: string, defaultValue: T): Promise<T>
  set<T>(key: string, value: T): Promise<void>
}
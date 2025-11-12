declare module 'bun:sqlite' {
  export class Database {
    constructor(path: string);
    close(): void;
    prepare(sql: string): any;
    query(sql: string): any;
    run(sql: string): any;
  }
}
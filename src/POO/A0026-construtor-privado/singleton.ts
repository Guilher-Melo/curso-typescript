// Singleton -> SÓ PERMIE CRIAR UMA INSTÂNCIA

export class Database {
  private static databse: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.databse) return Database.databse;

    Database.databse = new Database(host, user, password);
    return Database.databse;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
const db2 = Database.getDatabase('localhost', 'root', '123456');

db1.connect();
db2.connect();

console.log(db1 === db2);

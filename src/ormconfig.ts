import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    url: process.env.DATABASE_URL,
    type: 'postgres',
    name: 'default',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    synchronize: false,
    dropSchema: false,
    logging: true,
    entities: ['dist/**/*.entity.js'],
    migrationsRun: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};

export = config;
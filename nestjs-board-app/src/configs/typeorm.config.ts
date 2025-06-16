import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    url: 'postgresql://postgres.fyxacgunrakumvzuawwt:wjdtmdgns1!@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    ssl: {
        rejectUnauthorized: false
    },
    synchronize: true
}
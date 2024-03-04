import dotenv from 'dotenv';
dotenv.config();
export const serverConfig = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4242,
    domain: process.env.DOMAIN || 'http://localhost',
};

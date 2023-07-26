import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port : process.env.PORT,
    mongoString : process.env.DATABASE_URL
}
import dotenv from 'dotenv';

// Get environment from command-line argument or default to 'dev'
const ENV = process.env.TEST_ENV || 'dev';
// Load the correct .env file
//here env_files is directory where all env files are stored
//so added this to resolve exact path


dotenv.config({ path: `env_files/.env.${ENV}` });


// Debugging: Log which environment is loaded
console.log(`🔹 Loaded Environment: ${ENV}`);
console.log(`🔹 BASE_URL: ${process.env.BASE_URL}`);


//exporting config to use in other files
export const config = {
    baseURL: process.env.BASE_URL,
    credentials: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    },
    rahul_sheetty_ecom_webapp:process.env.rahul_sheetty_ecom_webapp
};


import { connect, disconnect } from 'mongoose';
export default async function connectToDB() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (err) {
        console.error(err);
    }
}
async function disconnectDB() {
    try {
        await disconnect();
    }
    catch (err) {
        console.error(err);
    }
}
export { disconnectDB, connectToDB };
//# sourceMappingURL=connection.js.map
import { disconnect } from "mongoose";
import { connect } from "mongoose";

async function connectionToDb() {
    try {
        await connect(process.env.connection_url)
        console.log('connected to db..........')
    } catch (error) {
         throw new Error('Couldnt connect to DB')
    }
}
async function disconnectFromDatabase() {
    try {
      await disconnect();
    } catch (error) {
      console.log(error);
      throw new Error("Could not Disconnect From MongoDB");
    }
  }
  

export { connectionToDb,disconnectFromDatabase};
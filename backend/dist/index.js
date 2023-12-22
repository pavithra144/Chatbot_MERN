import app from './app.js';
import { connectionToDb } from './db/connection.js';
const PORT = process.env.PORT || 8000;
connectionToDb().then(() => {
    app.listen(PORT, () => console.log('app is running' + PORT));
}).catch((err) => {
    console.log(err, 'err');
});
//# sourceMappingURL=index.js.map
import {port} from "../configs/application.js";

export default function (app) {
   app.listen(port, () => console.log("Application started."));
}
import {baseUrl, port} from "../configs/application.js";

export default function (app) {
   app.listen(port, () => console.log(`Application running on url: ${baseUrl}:${port}.`));
}
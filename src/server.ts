require("dotenv/config");
import app from "./app";

const PORT = process.env.PORT || 3000;

try {
  app.listen(PORT, () => console.log(`SERVER ONLINE`));
} catch (error) {
  console.log("SERVER ERROR", error);
}

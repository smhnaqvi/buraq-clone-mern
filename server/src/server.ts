import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 5000;

async function startServer(): Promise<void> {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
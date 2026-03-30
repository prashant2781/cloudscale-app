const express = require("express");
const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("CloudScale App deployed via CI/CD ✅");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

async function testDbSecretAccess() {
  try {
    const client = new SecretsManagerClient({ region: "ap-south-1" });

    const secretArn = "arn:aws:secretsmanager:ap-south-1:628479575897:secret:rdsdb-473155c-0b61-4b9c-b84d-5117344c43fd-ISANCE";

    const response = await client.send(
      new GetSecretValueCommand({ SecretId: secretArn })
    );

    const secret = JSON.parse(response.SecretString);

    console.log("✅ RDS secret read successful");
    console.log("DB Host:", secret.host);
    console.log("DB Name:", secret.dbname);
    console.log("DB User:", secret.username);
  } catch (err) {
    console.error("❌ Failed to read RDS secret", err.message);
  }
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App running on port ${PORT}`);
  testDbSecretAccess();
});

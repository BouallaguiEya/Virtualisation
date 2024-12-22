const fs = require('fs');

const backendUrl = process.env.BACKEND_URL;

const targetPath = './src/environments/environment.prod.ts';
const envConfigFile = `export const environment = {
  production: true,
  backendUrl: '${backendUrl}'
};
`;

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
    throw new Error(err);
  }
  console.log(`Output generated at ${targetPath}`);
  console.log(`Output content ${envConfigFile}`);
});

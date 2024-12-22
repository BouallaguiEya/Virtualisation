#!/bin/sh

BACKEND_URL=${BACKEND_URL:-http://default-backend-url}

cat <<EOL > ./src/environments/environment.prod.ts
export const environment = {
  production: true,
  backendUrl: '${BACKEND_URL}'
};
EOL

cat <<EOL > ./src/environments/environment.ts
export const environment = {
  production: true,
  backendUrl: '${BACKEND_URL}'
};
EOL

echo "Output generated at ./src/environments/environment.prod.ts"
echo "Output content:"
cat ./src/environments/environment.prod.ts

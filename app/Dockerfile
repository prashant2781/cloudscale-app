FROM node:18-alpine
FROM nodeWORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]


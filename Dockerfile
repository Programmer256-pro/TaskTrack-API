# Stage 1: Build / Install dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY src/package.json src/package-lock.json* ./
RUN npm ci --only=production

# Stage 2: Production Runtime
FROM node:20-alpine AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
COPY --from=builder /app/node_modules ./node_modules
COPY src/ .

USER nodejs
EXPOSE 3000

CMD ["node", "index.js"]
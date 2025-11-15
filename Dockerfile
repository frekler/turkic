FROM node:24-alpine AS base

# Install dependencies for better-sqlite3
RUN apk add --no-cache python3 make g++

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --only=production && npm cache clean --force

# Stage 2: Build the application
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 3: Production server
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN mkdir -p /app/data && chown nextjs:nodejs /app/data && chmod 755 /app/data

USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]

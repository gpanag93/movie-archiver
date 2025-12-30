# Build stage
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

# Copy Prisma schema early for better caching
COPY prisma ./prisma

# Provide a dummy DATABASE_URL just so prisma can resolve env("DATABASE_URL")
ARG DATABASE_URL="postgresql://user:pass@localhost:5432/db?schema=public"
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma Client (types + delegates) for compilation
RUN npx prisma generate

# Now copy the rest and build
COPY . .
RUN npm run build


# Production stage
FROM node:20-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /usr/src/app/dist ./dist

# Prisma runtime needs the generated client + engines
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/node_modules/@prisma ./node_modules/@prisma

EXPOSE 3000
CMD ["npm", "run", "start:prod"]

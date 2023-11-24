FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./
COPY prisma ./

RUN  npm install --production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

COPY . .


ENV NEXT_TELEMETRY_DISABLED 1

RUN npx prisma generate
# RUN npx prisma migrate dev --name init

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV development

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]

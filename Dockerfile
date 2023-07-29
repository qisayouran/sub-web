# 构建阶段
FROM node:16-alpine AS build
WORKDIR /app
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
ENV NODE_ENV production
RUN pnpm run build

# 生产阶段
FROM nginx:stable-alpine 
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
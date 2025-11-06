# ============================================基础-体积大-直接开发模式运行
# # 使用官方 Node.js 20 的 Alpine 版本作为基础镜像，体积小，适合生产环境
# FROM node:20-alpine

# # # 设置工作目录为 /app
# # WORKDIR /app

# # 设置工作目录为 /opt/app
# WORKDIR /opt/app

# # 只拷贝 package.json 和 package-lock.json（或类似文件），用于安装依赖
# COPY package*.json ./

# # 安装生产环境依赖 
# RUN npm install
# # RUN npm install --production

# # 拷贝项目所有文件到容器中
# COPY . .

# # # 构建项目
# # RUN npm run build

# EXPOSE 5173
# # 启动应用
# CMD ["npm", "run", "dev"]



# ============================================进阶-体积小-生产环境模式运行-配置默认
# # 第一步：构建阶段
# FROM node:20-alpine AS build
# WORKDIR /opt/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # 第二步：生产环境，nginx 服务静态文件
# FROM nginx:alpine
# COPY --from=build /opt/app/dist /usr/share/nginx/html
# # 可选：自定义 nginx 配置
# # COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]


# ============================================nginx 配置文件
# 第一步：构建阶段
FROM node:20-alpine AS build
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉"

# 第二步：生产环境，nginx 服务静态文件
FROM nginx:alpine
COPY --from=build /opt/app/dist /usr/share/nginx/html
# 可选：自定义 nginx 配置
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /opt/app/vite-demo.conf /etc/nginx/conf.d/vite-demo.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
RUN echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"
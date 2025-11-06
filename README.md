# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).



## Docker

```bash
docker build -t vite-demo .
docker run -d --name vite-demo -p 5173:5173 vite-demo
docker ps -a
docker start vite-demo
docker stop vite-demo
docker logs vite-demo
docker rm vite-demo



docker build -t vite-demo .
docker tag vite-demo tsalita/vite-demo:latest
docker login
docker push tsalita/vite-demo:latest


set HTTP_PROXY=http://127.0.0.1:10809
set HTTPS_PROXY=http://127.0.0.1:10809
```
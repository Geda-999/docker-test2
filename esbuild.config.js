import esbuild from 'esbuild';

// Node.js 内置模块列表，这些模块在浏览器环境中不可用，需要过滤
const nodeBuiltins = [
    'fs', 'path', 'os', 'util', 'crypto', 'stream', 'events',
    'http', 'https', 'net', 'tls', 'dns', 'child_process',
    'cluster', 'dgram', 'readline', 'repl', 'vm', 'zlib',
    'buffer', 'url', 'querystring', 'punycode', 'string_decoder',
    'timers', 'console', 'assert', 'module', 'process'
];

// 创建插件来过滤 Node.js 内置模块
const filterNodeModules = {
    name: 'filter-node-modules',
    setup(build) {
        // 过滤所有 Node.js 内置模块
        build.onResolve({ filter: /^[^./]|^\.[^./]|^\.\.[^/]/ }, args => {
            // 如果是 Node.js 内置模块，标记为外部
            if (nodeBuiltins.includes(args.path)) {
                return { path: args.path, external: true };
            }
        });
    }
};

esbuild.build({
    entryPoints: ['index.js'], // 入口文件
    outfile: 'dist/index.js', // 输出文件
    bundle: true, // 打包
    minify: true, // 压缩
    platform: 'browser', // 浏览器平台
    format: 'esm', // 输出 ES 模块
    drop: ['console'], // 删除console语句
    allowOverwrite: true, // ✨允许覆盖输出文件
    plugins: [filterNodeModules], // 添加插件来过滤 Node.js 内置模块
    external: nodeBuiltins // 将 Node.js 内置模块标记为外部依赖
}).catch(() => process.exit(1));


/*
npm install esbuild --save-dev
    

"build": "node esbuild.config.js",
"deploy": "npm run build && wrangler deploy"
*/

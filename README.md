# 项目部署

- 克隆代码到本地 `git clone https://github.com/xuexing9527/cake.git`
- `cd cake` 目录下 执行`npm install` 下载 `package.json`中的依赖
# 启动项目
+ `npm start` 启动但是更改后端代码不会自动重启项目
* `npm run dev` 启动项目更改后端代码会自动重启项目，推荐使用

# 代码提交
* `git status` 查看本地修改的代码
* `git add .`  添加所有改动到本地仓库
* `git commit -m ""` 添加本次修改的注释
* `git pull`   拉取远程代码到本地合并
* `git push`   推送代码到远程代码仓库
# 项目结构

* `bin`  启动服务入口
* `config` 分离出的配置文件包括启动的端口号和数据库的配置
* `db／user.js` 分离出的注册阶段与数据库链接的公共方法，包括创建连接池，向表中插入数据，通过名字查表等，包装公共的query方法               
* `node_modules` npm install 下载的package.json里的依赖包
* `public` 静态文件包括images/js/css等
* `routes/index.js` 前端路由配置
* `routes/users.js` 后端路由配置
* `views` jade模板文件
* `gitignore` git不要提交的文件 
* `app.js` 
* `Gulpfile.js` gulp配置信息
* `npm-debug.log` 日志文件
* `package.json`  依赖包的配置信息以及版本信息等

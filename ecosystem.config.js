module.exports = {
  deploy : {
    production : {
      user : 'root', // 以什么身份登录远程服务器，这里是node用户登录，建议使用root用户，权限更大
      host : '192.168.4.142', // 远程服务器地址，需要配ssh登录
      ref  : 'origin/master', // 需要部署的分支
      repo : 'https://github.com/wuxianqiang/hello-world.git', // 代码git地址，需要配ssh登录
      path : '/var/www/production', // 文件存放的地址
      'post-deploy' : 'npm install && npm run build' // 拉完代码需要执行的构建命令
    }
  }
};

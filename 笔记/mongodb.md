# 安装(MacOS)

1.进入 /usr/local
> cd /usr/local

2.下载
>sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.9.tgz

3.解压
>sudo tar -zxvf mongodb-osx-ssl-x86_64-4.0.9.tgz

4.重命名mongodb目录
>sudo mv mongodb-osx-x86_64-4.0.9/ mongodb

5.将mongodb加入环境变量
>export PATH=/usr/local/mongodb/bin:$PATH

如果加入环境变量失败，可以 source ~/.bash_profile

6.设置数据和日志存放路径
>sudo mkdir -p /usr/local/var/mongodb <br/>
>sudo mkdir -p /usr/local/var/log/mongodb

7.保证用户对当前目录有操作权限
>sudo chown [username] /usr/local/var/mongodb <br/>
>sudo chown [username] /usr/local/var/log/mongodb

8.启动mongodb服务
>mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork

--fork 表示在后台启

9.停止mongodb服务
>mongo <br/>
>use admin <br/>
>db.shutdownServer() <br/>

输出 server should be down... 表示服务停止

10.查看mongodb是否启动
>ps aux | grep -v grep | grep mongod














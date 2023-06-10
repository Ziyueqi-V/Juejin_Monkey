const { exec } = require('child_process');
const packageJson = require('./package.json');

// 1. 获得当前包的版本
const currentVersion = packageJson.version;
console.log('当前包的版本:', currentVersion);

// 2. 使用git提交代码，提交注释为版本号
const commitMessage = `版本号: ${currentVersion}`;
exec('git init && git add . && git commit -m "' + commitMessage + '"', (error, stdout, stderr) => {
  if (error) {
    console.error(`提交代码时出现错误: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`提交代码时出现错误: ${stderr}`);
    return;
  }
  console.log('代码提交成功');
});

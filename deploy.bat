@echo off
echo ========================================
echo  🚀 一键部署：GitHub + Vercel
echo ========================================
echo.

echo [1/3] 推送到 GitHub...
git push -u origin master
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 推送失败，请检查网络连接
    pause
    exit /b 1
)
echo ✅ 推送成功！
echo.

echo [2/3] 部署到 Vercel...
echo 请确保已安装 Vercel CLI，如果没有运行: npm i -g vercel
echo.

echo 方案 A - 使用 Vercel CLI:
echo   vercel --prod
echo.
echo 方案 B - 使用 Vercel Dashboard:
echo   1. 打开 https://vercel.com/import
echo   2. 选择 GitHub 仓库: lzh2375249790/portfolio
echo   3. Framework 选择 Next.js
echo   4. 点击 Deploy
echo.
echo ========================================
echo  📋 部署信息
echo ========================================
echo  GitHub: https://github.com/lzh2375249790/portfolio
echo  Vercel: https://portfolio.vercel.app
echo.
pause

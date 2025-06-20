﻿// Admin.NET 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。使用本项目应遵守相关法律法规和许可证的要求。
//
// 本项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。许可证位于源代码树根目录中的 LICENSE-MIT 和 LICENSE-APACHE 文件。
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！

namespace Admin.NET.Core;

/// <summary>
/// 控制台logo
/// </summary>
public static class ConsoleLogoSetup
{
    public static void AddConsoleLogo(this IServiceCollection services)
    {
        Console.ForegroundColor = ConsoleColor.Blue;
        Console.WriteLine(@"
              _           _         _   _ ______ _______
     /\      | |         (_)       | \ | |  ____|__   __|
    /  \   __| |_ __ ___  _ _ __   |  \| | |__     | |
   / /\ \ / _` | '_ ` _ \| | '_ \  | . ` |  __|    | |
  / ____ \ (_| | | | | | | | | | |_| |\  | |____   | |
 /_/    \_\__,_|_| |_| |_|_|_| |_(_)_| \_|______|  |_| ");
        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.WriteLine("让 .NET 开发更简单、更通用、更流行！");
        Console.WriteLine("https://gitee.com/zuohuaijun/Admin.NET");
    }
}
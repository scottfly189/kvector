// Admin.NET 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。使用本项目应遵守相关法律法规和许可证的要求。
//
// 本项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。许可证位于源代码树根目录中的 LICENSE-MIT 和 LICENSE-APACHE 文件。
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！

namespace Admin.NET.Core.Ai.Service;

/// <summary>
/// 模型列表输出
/// </summary>
public class ModelListOutput
{
    /// <summary>
    /// 模型列表
    /// </summary>
    public List<ModelListOutputItem> Models { get; set; }

    /// <summary>
    /// 厂商名称
    /// </summary>
    public string ProviderName { get; set; }

    /// <summary>
    /// 当前模型
    /// </summary>
    public string CurrentModel { get; set; }

    /// <summary>
    /// 用户是否可以切换模型
    /// </summary>
    public bool UserCanSwitchLLM { get; set; }
}

public class ModelListOutputItem
{
    /// <summary>
    /// 厂商名称
    /// </summary>
    public string ProviderName { get; set; }

    /// <summary>
    /// 模型名称
    /// </summary>
    public string ModelName { get; set; }
}
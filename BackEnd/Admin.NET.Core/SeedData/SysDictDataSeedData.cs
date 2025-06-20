// Admin.NET 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。使用本项目应遵守相关法律法规和许可证的要求。
//
// 本项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。许可证位于源代码树根目录中的 LICENSE-MIT 和 LICENSE-APACHE 文件。
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！

namespace Admin.NET.Core;

/// <summary>
/// 系统字典值表种子数据
/// </summary>
[IgnoreUpdateSeed]
public class SysDictDataSeedData : ISqlSugarEntitySeedData<SysDictData>
{
    /// <summary>
    /// 种子数据
    /// </summary>
    /// <returns></returns>
    public IEnumerable<SysDictData> HasData()
    {
        return
        [
            new SysDictData{ Id=1300000000101, DictTypeId=1300000000101, Label="输入框", Value="Input", OrderNo=100, Remark="输入框", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000102, DictTypeId=1300000000101, Label="字典选择器", Value="DictSelector", OrderNo=100, Remark="字典选择器", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000103, DictTypeId=1300000000101, Label="常量选择器", Value="ConstSelector", OrderNo=100, Remark="常量选择器", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000104, DictTypeId=1300000000101, Label="枚举选择器", Value="EnumSelector", OrderNo=100, Remark="枚举选择器", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000105, DictTypeId=1300000000101, Label="树选择器", Value="ApiTreeSelector", OrderNo=100, Remark="树选择器", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000106, DictTypeId=1300000000101, Label="外键", Value="ForeignKey", OrderNo=100, Remark="外键", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000107, DictTypeId=1300000000101, Label="数字输入框", Value="InputNumber", OrderNo=100, Remark="数字输入框", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000108, DictTypeId=1300000000101, Label="时间选择", Value="DatePicker", OrderNo=100, Remark="时间选择", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000109, DictTypeId=1300000000101, Label="文本域", Value="InputTextArea", OrderNo=100, Remark="文本域", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000110, DictTypeId=1300000000101, Label="上传", Value="Upload", OrderNo=100, Remark="上传", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000111, DictTypeId=1300000000101, Label="开关", Value="Switch", OrderNo=100, Remark="开关", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },

            new SysDictData{ Id=1300000000201, DictTypeId=1300000000102, Label="等于", Value="==", OrderNo=1, Remark="等于", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000202, DictTypeId=1300000000102, Label="模糊", Value="like", OrderNo=1, Remark="模糊", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000203, DictTypeId=1300000000102, Label="大于", Value=">", OrderNo=1, Remark="大于", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000204, DictTypeId=1300000000102, Label="小于", Value="<", OrderNo=1, Remark="小于", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000205, DictTypeId=1300000000102, Label="不等于", Value="!=", OrderNo=1, Remark="不等于", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000206, DictTypeId=1300000000102, Label="大于等于", Value=">=", OrderNo=1, Remark="大于等于", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000207, DictTypeId=1300000000102, Label="小于等于", Value="<=", OrderNo=1, Remark="小于等于", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000208, DictTypeId=1300000000102, Label="不为空", Value="isNotNull", OrderNo=1, Remark="不为空", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000209, DictTypeId=1300000000102, Label="时间范围", Value="~", OrderNo=1, Remark="时间范围", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },

            new SysDictData{ Id=1300000000301, DictTypeId=1300000000103, Label="long", Value="long", OrderNo=1, Remark="long", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000302, DictTypeId=1300000000103, Label="string", Value="string", OrderNo=1, Remark="string", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000303, DictTypeId=1300000000103, Label="DateTime", Value="DateTime", OrderNo=1, Remark="DateTime", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000304, DictTypeId=1300000000103, Label="bool", Value="bool", OrderNo=1, Remark="bool", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000305, DictTypeId=1300000000103, Label="int", Value="int", OrderNo=1, Remark="int", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000306, DictTypeId=1300000000103, Label="double", Value="double", OrderNo=1, Remark="double", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000307, DictTypeId=1300000000103, Label="float", Value="float", OrderNo=1, Remark="float", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000308, DictTypeId=1300000000103, Label="decimal", Value="decimal", OrderNo=1, Remark="decimal", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000309, DictTypeId=1300000000103, Label="Guid", Value="Guid", OrderNo=1, Remark="Guid", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000310, DictTypeId=1300000000103, Label="DateTimeOffset", Value="DateTimeOffset", OrderNo=1, Remark="DateTimeOffset", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },

            new SysDictData{ Id=1300000000401, DictTypeId=1300000000104, Label="下载压缩包", Value="100", OrderNo=1, Remark="下载压缩包", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000402, DictTypeId=1300000000104, Label="下载压缩包(前端)", Value="111", OrderNo=2, Remark="下载压缩包(前端)", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000403, DictTypeId=1300000000104, Label="下载压缩包(后端)", Value="121", OrderNo=3, Remark="下载压缩包(后端)", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000404, DictTypeId=1300000000104, Label="生成到本项目", Value="200", OrderNo=4, Remark="生成到本项目", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000405, DictTypeId=1300000000104, Label="生成到本项目(前端)", Value="211", OrderNo=5, Remark="生成到本项目(前端)", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000406, DictTypeId=1300000000104, Label="生成到本项目(后端)", Value="221", OrderNo=6, Remark="生成到本项目(后端)", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },

            new SysDictData{ Id=1300000000501, DictTypeId=1300000000105, Label="EntityBaseId【基础实体Id】", Value="EntityBaseId", OrderNo=1, Remark="【基础实体Id】", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000502, DictTypeId=1300000000105, Label="EntityBase【基础实体】", Value="EntityBase", OrderNo=1, Remark="【基础实体】", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000503, DictTypeId=1300000000105, Label="EntityTenantId【租户实体Id】", Value="EntityTenantId", OrderNo=1, Remark="【租户实体Id】", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000504, DictTypeId=1300000000105, Label="EntityTenant【租户实体】", Value="EntityTenant", OrderNo=1, Remark="【租户实体】", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000505, DictTypeId=1300000000105, Label="EntityBaseData【业务实体】", Value="EntityBaseData", OrderNo=1, Remark="【业务实体】", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
            new SysDictData{ Id=1300000000506, DictTypeId=1300000000105, Label="EntityTenantBaseData【租户业务实体】", Value="EntityTenantBaseData", OrderNo=1, Remark="【租户业务实体】", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2022-02-10 00:00:00") },

            new SysDictData{ Id=1300000000601, DictTypeId=1300000000106, Label="不需要", Value="off", OrderNo=100, Remark="不需要打印支持", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-12-04 00:00:00") },
            new SysDictData{ Id=1300000000602, DictTypeId=1300000000106, Label="绑定打印模版", Value="custom", OrderNo=101, Remark="绑定打印模版", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-12-04 00:00:00") },

            new SysDictData{ Id=1300000000701, DictTypeId=1300000000107, Label="普通列表", Value="List", OrderNo=105, Remark="普通列表", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-02-10 00:00:00") },
            new SysDictData{ Id=1300000000702, DictTypeId=1300000000107, Label="树形表", Value="Tree", OrderNo=106, Remark="树形表", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-02-10 00:00:00") },

            new SysDictData{ Id=1300000005001, DictTypeId=1300000005001, Label="集团", Value="101", OrderNo=100, Remark="集团", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-02-10 00:00:00") },
            new SysDictData{ Id=1300000005002, DictTypeId=1300000005001, Label="公司", Value="201", OrderNo=101, Remark="公司", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-02-10 00:00:00") },
            new SysDictData{ Id=1300000005003, DictTypeId=1300000005001, Label="部门", Value="301", OrderNo=102, Remark="部门", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-02-10 00:00:00") },
            new SysDictData{ Id=1300000005004, DictTypeId=1300000005001, Label="区域", Value="401", OrderNo=103, Remark="区域", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-02-10 00:00:00") },
            new SysDictData{ Id=1300000005005, DictTypeId=1300000005001, Label="组", Value="501", OrderNo=104, Remark="组", Status=StatusEnum.Enable, CreateTime=DateTime.Parse("2023-02-10 00:00:00") },
        ];
    }
}
// Admin.NET 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。使用本项目应遵守相关法律法规和许可证的要求。
//
// 本项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。许可证位于源代码树根目录中的 LICENSE-MIT 和 LICENSE-APACHE 文件。
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！

namespace Admin.NET.Core.Service;

/// <summary>
/// 系统职位服务 🧩
/// </summary>
[ApiDescriptionSettings(Order = 460, Description = "系统职位")]
public class SysPosService : IDynamicApiController, ITransient
{
    private readonly UserManager _userManager;
    private readonly SqlSugarRepository<SysPos> _sysPosRep;
    private readonly SysUserExtOrgService _sysUserExtOrgService;

    public SysPosService(UserManager userManager,
        SqlSugarRepository<SysPos> sysPosRep,
        SysUserExtOrgService sysUserExtOrgService)
    {
        _userManager = userManager;
        _sysPosRep = sysPosRep;
        _sysUserExtOrgService = sysUserExtOrgService;
    }

    /// <summary>
    /// 获取职位分页列表 🔖
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [DisplayName("获取职位分页列表")]
    public async Task<SqlSugarPagedList<PagePosOutput>> Page(PagePosInput input)
    {
        return await _sysPosRep.AsQueryable()
            .LeftJoin<SysTenant>((u, a) => u.TenantId == a.Id)
            .LeftJoin<SysOrg>((u, a, b) => a.OrgId == b.Id)
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name))
            .WhereIF(!string.IsNullOrWhiteSpace(input.Code), u => u.Code.Contains(input.Code))
            .Select((u, a, b) => new PagePosOutput
            {
                TenantName = b.Name,
                UserList = SqlFunc.Subqueryable<SysUser>().Where(m => m.PosId == u.Id ||
                    SqlFunc.Subqueryable<SysUserExtOrg>().Where(m => m.Id == m.UserId && m.PosId == u.Id).Any()).ToList()
            }, true)
            .OrderBy(u => (new { u.OrderNo, u.Id }))
            .ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 获取职位列表 🔖
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [DisplayName("获取职位列表")]
    public async Task<List<PosOutput>> GetList([FromQuery] PosInput input)
    {
        return await _sysPosRep.AsQueryable()
            .LeftJoin<SysTenant>((u, a) => u.TenantId == a.Id)
            .LeftJoin<SysOrg>((u, a, b) => a.OrgId == b.Id)
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name))
            .WhereIF(!string.IsNullOrWhiteSpace(input.Code), u => u.Code.Contains(input.Code))
            .Select((u, a, b) => new PosOutput
            {
                TenantName = b.Name
            }, true)
            .OrderBy(u => new { u.OrderNo, u.Id }).ToListAsync();
    }

    /// <summary>
    /// 增加职位 🔖
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "Add"), HttpPost]
    [DisplayName("增加职位")]
    public async Task AddPos(AddPosInput input)
    {
        if (await _sysPosRep.IsAnyAsync(u => u.Name == input.Name && u.Code == input.Code)) throw Oops.Oh(ErrorCodeEnum.D6000);

        await _sysPosRep.InsertAsync(input.Adapt<SysPos>());
    }

    /// <summary>
    /// 更新职位 🔖
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "Update"), HttpPost]
    [DisplayName("更新职位")]
    public async Task UpdatePos(UpdatePosInput input)
    {
        if (await _sysPosRep.IsAnyAsync(u => u.Name == input.Name && u.Code == input.Code && u.Id != input.Id)) throw Oops.Oh(ErrorCodeEnum.D6000);

        var sysPos = await _sysPosRep.GetByIdAsync(input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D6003);
        if (!_userManager.SuperAdmin && sysPos.CreateUserId != _userManager.UserId) throw Oops.Oh(ErrorCodeEnum.D6002);

        await _sysPosRep.AsUpdateable(input.Adapt<SysPos>()).IgnoreColumns(true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 删除职位 🔖
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "Delete"), HttpPost]
    [DisplayName("删除职位")]
    public async Task DeletePos(DeletePosInput input)
    {
        var sysPos = await _sysPosRep.GetByIdAsync(input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D6003);
        if (!_userManager.SuperAdmin && sysPos.CreateUserId != _userManager.UserId) throw Oops.Oh(ErrorCodeEnum.D6002);

        // 若职位有用户则禁止删除
        var hasPosEmp = await _sysPosRep.ChangeRepository<SqlSugarRepository<SysUser>>()
            .IsAnyAsync(u => u.PosId == input.Id);
        if (hasPosEmp) throw Oops.Oh(ErrorCodeEnum.D6001);

        // 若附属职位有用户则禁止删除
        var hasExtPosEmp = await _sysUserExtOrgService.HasUserPos(input.Id);
        if (hasExtPosEmp) throw Oops.Oh(ErrorCodeEnum.D6001);

        await _sysPosRep.DeleteByIdAsync(input.Id);
    }
}
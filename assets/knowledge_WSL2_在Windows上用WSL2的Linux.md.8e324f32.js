import{_ as l,o as p,c as e,N as n,x as s,a}from"./chunks/framework.60272d8a.js";const g=JSON.parse('{"title":"如何在 Windows 上用 WSL 2 快速体验丝般顺滑的 Linux","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/WSL2/在Windows上用WSL2的Linux.md","lastUpdated":1706686109000}'),o={name:"knowledge/WSL2/在Windows上用WSL2的Linux.md"},t=n(`<h1 id="如何在-windows-上用-wsl-2-快速体验丝般顺滑的-linux" tabindex="-1">如何在 Windows 上用 WSL 2 快速体验丝般顺滑的 Linux <a class="header-anchor" href="#如何在-windows-上用-wsl-2-快速体验丝般顺滑的-linux" aria-label="Permalink to &quot;如何在 Windows 上用 WSL 2 快速体验丝般顺滑的 Linux&quot;">​</a></h1><h2 id="_1-什么是wsl2" tabindex="-1">1 什么是WSL2 <a class="header-anchor" href="#_1-什么是wsl2" aria-label="Permalink to &quot;1 什么是WSL2&quot;">​</a></h2><p>WSL全称为Windows Subsystem for Linux，官网译为：适用于 Linux 的 Windows 子系统 (WSL)</p><p>官方文档直达：适用于 Linux 的 Windows 子系统文档 | Microsoft Docs</p><ul><li>WSL1和WSL2的比较:</li></ul><table><thead><tr><th>功能</th><th>WSL 1</th><th>WSL 2</th></tr></thead><tbody><tr><td>Windows 和 Linux 之间的集成</td><td>✅</td><td>✅</td></tr><tr><td>启动时间短</td><td>✅</td><td>✅</td></tr><tr><td>与传统虚拟机相比，占用的资源量少</td><td>✅</td><td>✅</td></tr><tr><td>可以与当前版本的 VMware 和 VirtualBox 一起运行</td><td>✅</td><td>✅</td></tr><tr><td>托管 VM</td><td>❌</td><td>✅</td></tr><tr><td>完整的 Linux 内核</td><td>❌</td><td>✅</td></tr><tr><td>完全的系统调用兼容性</td><td>❌</td><td>✅</td></tr><tr><td>跨 OS 文件系统的性能</td><td>✅</td><td>❌</td></tr></tbody></table><ul><li>为什么要WSL2</li></ul><p>官方解释：可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境（包括大多数命令行工具、实用工具和应用程序），且不会产生传统虚拟机或双启动设置开销。</p><p>我的观点：日常生活中程序的开发离不开Linux，而Windows的GUI界面又是我们常用的（微信、Office等）。我们可以有很多种方式使用Linux</p><p>单主机双系统：能实实在的运行不同、完整的操作系统；切换系统都需要重启，麻烦</p><p>双主机双系统：物理隔离方式，真正实现双系统；真的有人那么有钱吗？开发程序用两台电脑？</p><p>远程服务器：和单主机双系统一样；性能、带宽、流量有局限</p><p>虚拟机VMware：和单主机双系统一样；资源消耗大、启动慢、运行效率低。我用过之后觉得有的时候卡死也不知道怎么弄。</p><p>WSL！！！几乎能运行完整的操作系统，资源消耗小、启动快、切换快 有些软件可能不支持…（后续有什么毛病再更新）</p><p>重点：Windows与Linux子系统将共用同一文件系统!!! 我们可以在WSL中使用三剑客命令查询分析windows文档、日志、使用shell命令或者bash脚本运行存储在windows中的linux程序、甚至在WSL中创建docker容器，在windows下使用docker desktop进行可视化管理。</p><p>总结：WSL2让我们既拥有Windows的操作界面又拥有Linux的命令行工具。</p><ul><li>启用“虚拟机平台”</li></ul><p>WSL 2 需要启用 Windows 10 的 “虚拟机平台” 特性。它独立于 Hyper-V，并提供了一些在 Linux 的 Windows 子系统新版本中可用的更有趣的平台集成。</p><p>要在**Windows 10（2004）**上启用虚拟机平台，请以管理员身份打开 PowerShell 或 cmd 并运行：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dism.exe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/online</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/enable-feature</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/featurename:VirtualMachinePlatform</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/all</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/norestart</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>要在**Windows 10（1903，1909）**上启用虚拟机平台，请以管理员身份打开 PowerShell或 cmd 并运行：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Enable-WindowsOptionalFeature</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-Online</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-FeatureName</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">VirtualMachinePlatform</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-NoRestart</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>为了确保所有相关部件都整齐到位，您应该在此时重启系统，否则可能会发现事情没按预期进行。</p><h2 id="_2-安装wsl2" tabindex="-1">2 安装WSL2 <a class="header-anchor" href="#_2-安装wsl2" aria-label="Permalink to &quot;2 安装WSL2&quot;">​</a></h2><p>本次安装环境</p><p>处理器 Intel® Core™ i5-10210U CPU @ 1.60GHz 2.11 GHz</p><p>机带 RAM 8.00 GB (7.79 GB 可用)</p><p>系统类型 64 位操作系统, 基于 x64 的处理器</p><p>操作系统 Windows 11 家庭中文版</p><p>注意：本次安装之前没安装过WSL和Ubuntu。</p><h3 id="_2-1-检查是否可以安装" tabindex="-1">2.1 检查是否可以安装 <a class="header-anchor" href="#_2-1-检查是否可以安装" aria-label="Permalink to &quot;2.1 检查是否可以安装&quot;">​</a></h3><p>您的电脑需要以下配置：</p><p>Windows 10 2020年5月(2004) 版, Windows 10 2019年5月(1903) 版，或者 Windows 10 2019年11月(1909) 版</p><p>一台支持 Hyper-V 虚拟化的计算机</p><p>查看是否支持Hyper-V的方法：</p><p>打开cmd，输入</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">systeminfo</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看Hyper-V信息</p><p>比如我的电脑就可以支持</p><p>下面将会介绍安装在C盘和D盘得方法，自行选择一种就行</p><h3 id="_2-2-安装wsl-默认安装是在c盘" tabindex="-1">2.2 安装WSL（默认安装是在C盘） <a class="header-anchor" href="#_2-2-安装wsl-默认安装是在c盘" aria-label="Permalink to &quot;2.2 安装WSL（默认安装是在C盘）&quot;">​</a></h3><p>用管理员身份运行PowerShell</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--install</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>–install 命令执行以下操作：</p><ul><li><p>启用可选的 WSL 和虚拟机平台组件</p></li><li><p>下载并安装最新 Linux 内核</p></li><li><p>将 WSL 2 设置为默认值</p></li><li><p>下载并安装 Ubuntu Linux 发行版（可能需要重新启动）,默认是安装在 C 盘的（如果要安装其他盘可以看下面的操作）</p></li></ul><p>注意：上述命令仅在完全未安装 WSL 时才有效，如果运行 wsl --install 并查看 WSL 帮助文本，请尝试运行 wsl --list --online 以查看可用发行版列表并运行 wsl --install -d以安装发行版。</p><p>等待一会会</p><p>顺便查看了一下可以支持的linux系统，大便、Kali、OpenSUSE、乌班图都有，默认安装Ubuntu。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--list</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--online</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装了好一会儿了。。。。发现还是在85.7%，等不下去了CTRL+C了。</p><p>重新安装，这次安装指定的系统</p><p>注意！！！！如果命令行还是不行的话，可以直接在 Windows 应用商店 下载 Ubuntu 20.04 安装即可。</p><p>查看版本</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果你之前安装过 WSL，当前不是 WSL 2 版本，可以通过以下命令设置 WSL 的默认版本：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--set-version</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Ubuntu-20.04</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启，然后成功了!</p><p>配置Linux</p><p>接下来打开已安装的Ubuntu，这时候会提示你配置用户和密码</p><p>配置完毕！即可享用</p><p>在PowerShell中执行wsl即可进入，测试一下，用命令 cd / &amp;&amp; ls -lrt 查看所有文件，如下（是不是很熟悉）</p><h3 id="_2-3-ubuntu20-04-如果需要安装d盘" tabindex="-1">2.3 ubuntu20.04（如果需要安装D盘） <a class="header-anchor" href="#_2-3-ubuntu20-04-如果需要安装d盘" aria-label="Permalink to &quot;2.3 ubuntu20.04（如果需要安装D盘）&quot;">​</a></h3><p>下面是将 Ubuntu20.04 安装在D盘的部分：</p><p>首先先在你喜欢的盘创建一个文件夹，比如D:\\Linux，因为这样即便是重装系统我也不用重新装软件。</p><p>然后进到这个文件夹 下载ubuntu20.04</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Invoke-WebRequest</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-Uri</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://wsldownload.azureedge.net/Ubuntu_2004.2020.424.0_x64.appx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-OutFile</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Ubuntu20.04.appx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-UseBasicParsing</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我演示用的是d:\\xiazai\\linux1,等他下载完即可，<strong>文件有4G多，等一会是正常的</strong></p><p>然后执行下面四条命令。如下图</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Rename-Item</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span><span style="color:#BABED8;">\\U</span><span style="color:#C3E88D;">buntu20.04.appx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Ubuntu.zip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Expand-Archive</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span><span style="color:#BABED8;">\\U</span><span style="color:#C3E88D;">buntu.zip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-Verbose</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span><span style="color:#BABED8;">\\U</span><span style="color:#C3E88D;">buntu</span><span style="color:#BABED8;">\\ </span><span style="color:#C3E88D;">.</span><span style="color:#BABED8;">\\u</span><span style="color:#C3E88D;">buntu2004.exe</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个图我是直接进了wsl，因为我已经安装过了。<strong>你们第一次安装的话会弹出一个黑框框等几分钟这样，然后输你想要的入用户名和密码就行</strong></p><p>当然这个时候可能会报错，什么样的错误都可能，我以前遇到过很多次！</p><p>我发现最好的方法就是，按照这个文章上<strong>开头的那几步重新执行一遍</strong>（确保没有遗漏），<strong>然后重启，一定要重启！重启！！之后再尝试，一般就解决了。</strong></p><p>最后可以在powershell里面 , 看看自己安装的版本</p><h2 id="_3-更新一下镜像源" tabindex="-1">3 更新一下镜像源 <a class="header-anchor" href="#_3-更新一下镜像源" aria-label="Permalink to &quot;3 更新一下镜像源&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#进入linux终端执行sudo vim /etc/apt/sources.list</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将官方的源都注释掉，换成下面两个之一即可（我的是Ubuntu20.04，别的版本或者源可以自行网上搜）</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">deb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">http://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-security</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-security</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-updates</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">http://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-updates</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-proposed</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-proposed</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-backports</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-backports</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiverse</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>清华源</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">deb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-updates</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-updates</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-backports</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-backports</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-security</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiversedeb-src</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">focal-security</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">main</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restricted</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">universe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">multiverse</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果遇到问题：</p><p>Certificate verification failed: The certificate is NOT trusted——更新Ubuntu20.04、Debian11的过程中遇到的证书验证失败问题。</p><p>解决办法：</p><p>更改源文件，将所有的https改成http</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/etc/apt/sources.list</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重新更新源</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装/更新证书ca-certificates</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--reinstall</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ca-certificates</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参照步骤一将镜像源文件改回https</p><p>再次更新源</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">upgrade</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>大功告成</p><h2 id="_4-安装windows-terminal" tabindex="-1">4 安装Windows Terminal <a class="header-anchor" href="#_4-安装windows-terminal" aria-label="Permalink to &quot;4 安装Windows Terminal&quot;">​</a></h2><p>Windows Terminal能帮助我们管理命令行工具、PowerShell和WSL等Shell用户的工具，能为我们提供最佳的 WSL 体验。</p><p>下载方式</p><p><a href="https://www.microsoft.com/store/productId/9N0DX20HK701" target="_blank" rel="noreferrer">https://www.microsoft.com/store/productId/9N0DX20HK701</a></p><p>MicroSoft Store （微软商店）找关键字 Windows Terminal</p><p>打开微软应用商店，搜索“Terminal”，安装，打开后的界面是这样的：</p><p>默认打开的是 PownerShell 终端，我们可以设置为默认打开 Ubuntu 终端。点击标签右边的下拉三角，选择设置：</p><p>会在左下角看到一个打开 JSON 文件按钮，然后选择用记事本打开，在 profiles-&gt;list 中找到 Ubuntu 的 guid 并复制。</p><p>将它粘贴为文件开头的 defaultProfile 的值：</p><h3 id="_4-1-安装-oh-my-zsh" tabindex="-1">4.1 安装 oh-my-zsh <a class="header-anchor" href="#_4-1-安装-oh-my-zsh" aria-label="Permalink to &quot;4.1 安装 oh-my-zsh&quot;">​</a></h3><p>在 ubuntu 下终端执行</p><ul><li>安装 zsh：</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">zsh</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后查看</p><p>可以看到 zsh 已经安装上去，再执行</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chsh</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/bin/zsh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>安装oh my zsh所需的字体</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/powerline/fonts.gitcd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">fonts./install.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>安装oh my zsh</li></ul><p>国内下载地址：wget <a href="https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh" target="_blank" rel="noreferrer">https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh</a></p><p>给 install.sh 添加执行权限</p><p>chmod +x install.sh</p><p>修改 install.sh 的镜像</p><p>vi install.sh</p><p>将以下</p>`,117),r=s("p",{"REPO:-ohmyzshohmyzsh":""},"REPO=$",-1),c=s("p",null,[a("REMOTE=${REMOTE:-"),s("a",{href:"https://github.com/$%7BREPO%7D.git",target:"_blank",rel:"noreferrer"},"https://github.com/${REPO}.git"),a("}")],-1),i=s("p",null,"更改为",-1),u=s("p",{"REPO:-mirrorsoh-my-zsh":""},"REPO=$",-1),y=n('<p>REMOTE=${REMOTE:-<a href="https://gitee.com/$%7BREPO%7D.git" target="_blank" rel="noreferrer">https://gitee.com/${REPO}.git</a>}</p><p>保存退出，执行 install.sh 就将 oh-my-zsh 安装上。</p><h3 id="_4-2-安装皮肤" tabindex="-1">4.2 安装皮肤 <a class="header-anchor" href="#_4-2-安装皮肤" aria-label="Permalink to &quot;4.2 安装皮肤&quot;">​</a></h3><p>安装完 oh-my-zsh 后，编辑 ~/.zshrc 文件，将主题设置为 agnoster robbyrussell：</p><p>img</p><p>再做一点点美化：把命令行的机器名称去掉，并调整用户名的背景色。编辑 agnoster 主题文件：</p><p>vi ~/.oh-my-zsh/themes/agnoster.zsh-theme</p><p>把 92 行修改为：</p><p>prompt_segment green black &quot;%(!.%{%F{yellow}%}.)%n&quot;</p><p>修改后如下：</p><p>关闭 Terminal 再重新打开，效果如下：</p><h3 id="_4-3-安装历史命令自动补全" tabindex="-1">4.3 安装历史命令自动补全 <a class="header-anchor" href="#_4-3-安装历史命令自动补全" aria-label="Permalink to &quot;4.3 安装历史命令自动补全&quot;">​</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git://github.com/zsh-users/zsh-autosuggestions</span><span style="color:#BABED8;"> $ZSH_CUSTOM</span><span style="color:#C3E88D;">/plugins/zsh-autosuggestions</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-4-安装高亮显示" tabindex="-1">4.4 安装高亮显示 <a class="header-anchor" href="#_4-4-安装高亮显示" aria-label="Permalink to &quot;4.4 安装高亮显示&quot;">​</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git://github.com/zsh-users/zsh-syntax-highlighting</span><span style="color:#BABED8;"> $ZSH_CUSTOM</span><span style="color:#C3E88D;">/plugins/zsh-syntax-highlighting</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装完改一下配置文件</p><p>vim ~/.zshrc</p><p>把plugins中两个刚刚下载好的插件名字加进去，然后保存退出</p><p>plugins=( git zsh-autosuggestions zsh-syntax-highlighting )</p><p>最后更新一下配置文件</p><p>source .zshrc</p><p>执行之后注销重新登陆即可</p><h2 id="_5-卸载wsl子系统" tabindex="-1">5 卸载wsl子系统 <a class="header-anchor" href="#_5-卸载wsl子系统" aria-label="Permalink to &quot;5 卸载wsl子系统&quot;">​</a></h2><p>首先查看本机安装了哪些子系统：</p><p>wsl --list --all</p><p>其次：</p><p>wsl --unregister &lt;System_name&gt;</p>',27),d=[t,r,c,i,u,y];function B(E,D,h,m,C,b){return p(),e("div",null,d)}const v=l(o,[["render",B]]);export{g as __pageData,v as default};

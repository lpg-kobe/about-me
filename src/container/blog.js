import React, { PureComponent } from "react";

export default class Blog extends PureComponent {
  render() {
    return [
      <>
        <header class="navbar-fixed">
          <nav id="headNav" class="bg-color nav-transparent">
            <div id="navContainer" class="nav-wrapper container">
              <div class="brand-logo">
                <a href="/" class="waves-effect waves-light">
                  <img src="/medias/logo.png" class="logo-img" alt="LOGO" />
                  <span class="logo-span">闪烁之狐</span>
                </a>
              </div>
              <a href="#" data-target="mobile-nav" class="sidenav-trigger button-collapse">
                <i class="fas fa-bars"></i>
              </a>
              <ul class="right nav-menu">
                <li class="hide-on-med-and-down nav-item">
                  <a href="/" class="waves-effect waves-light">
                    <i class="fas fa-home" style="zoom: 0.6;"></i>
                    <span>首页</span>
                  </a>
                </li>
                <li class="hide-on-med-and-down nav-item">
                  <a href="/tags" class="waves-effect waves-light">
                    <i class="fas fa-tags" style="zoom: 0.6;"></i>
                    <span>标签</span>
                  </a>
                </li>
                <li class="hide-on-med-and-down nav-item">
                  <a href="/categories" class="waves-effect waves-light">
                    <i class="fas fa-bookmark" style="zoom: 0.6;"></i>
                    <span>分类</span>
                  </a>
                </li>
                <li class="hide-on-med-and-down nav-item">
                  <a href="/archives" class="waves-effect waves-light">
                    <i class="fas fa-archive" style="zoom: 0.6;"></i>
                    <span>归档</span>
                  </a>
                </li>
                <li class="hide-on-med-and-down nav-item">
                  <a href="/about" class="waves-effect waves-light">
                    <i class="fas fa-user-circle-o" style="zoom: 0.6;"></i>
                    <span>关于</span>
                  </a>
                </li>
                <li class="hide-on-med-and-down nav-item">
                  <a href="/friends" class="waves-effect waves-light">
                    <i class="fas fa-address-book" style="zoom: 0.6;"></i>
                    <span>友情链接</span>
                  </a>
                </li>
                <li>
                  <a href="#searchModal" class="modal-trigger waves-effect waves-light">
                    <i id="searchIcon" class="fas fa-search" title="搜索" style="zoom: 0.85;"></i>
                  </a>
                </li>
              </ul>
              <div id="mobile-nav" class="side-nav sidenav">
                <div class="mobile-head bg-color">
                  <img src="/medias/logo.png" class="logo-img circle responsive-img" />
                  <div class="logo-name">
                    闪烁之狐
       </div>
                  <div class="logo-desc">
                    从来没有真正的绝境，只有心灵的迷途
       </div>
                </div>
                <ul class="menu-list mobile-menu-list">
                  <li class="m-nav-item">
                    <a href="/" class="waves-effect waves-light">
                      <i class="fa-fw fas fa-home"></i> 首页 </a>
                  </li>
                  <li class="m-nav-item">
                    <a href="/tags" class="waves-effect waves-light">
                      <i class="fa-fw fas fa-tags"></i> 标签 </a>
                  </li>
                  <li class="m-nav-item">
                    <a href="/categories" class="waves-effect waves-light">
                      <i class="fa-fw fas fa-bookmark"></i> 分类 </a>
                  </li>
                  <li class="m-nav-item">
                    <a href="/archives" class="waves-effect waves-light">
                      <i class="fa-fw fas fa-archive"></i> 归档 </a>
                  </li>
                  <li class="m-nav-item">
                    <a href="/about" class="waves-effect waves-light">
                      <i class="fa-fw fas fa-user-circle-o"></i> 关于 </a>
                  </li>
                  <li class="m-nav-item">
                    <a href="/friends" class="waves-effect waves-light">
                      <i class="fa-fw fas fa-address-book"></i> 友情链接 </a>
                  </li>
                  <li>
                    <div class="divider"></div>
                  </li>
                  <li>
                    <a href="https://github.com/blinkfox/hexo-theme-matery" class="waves-effect waves-light" target="_blank">
                      <i class="fab fa-github-square fa-fw"></i>Fork Me </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="https://github.com/blinkfox/hexo-theme-matery" class="github-corner tooltipped hide-on-med-and-down" target="_blank" data-tooltip="Fork Me" data-position="left" data-delay="50">
              <svg viewbox="0 0 250 250" aria-hidden="true">
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
              </svg>
            </a>
          </nav>
        </header>
        <div class="carousel carousel-slider center index-cover" data-indicators="true">
          <div id="prev-cover" class="left waves-effect carousel-control">
            <i class="icon fa fa-angle-left"></i>
          </div>
          <div id="next-cover" class="right waves-effect carousel-control">
            <i class="icon fa fa-angle-right"></i>
          </div>
          <div class="carousel-item red white-text bg-cover about-cover">
            <div class="container">
              <div class="row">
                <div class="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                  <div class="brand">
                    <div class="title center-align">
                      闪烁之狐
                  </div>
                    <div class="description center-align">
                      <span id="subtitle"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cover-btns">
                <a href="#indexCard" class="waves-effect waves-light btn">
                  <i class="fa fa-angle-double-down"></i>开始阅读 </a>
              </div>
              <div class="cover-social-link">
                <a href="https://github.com/blinkfox" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
                  <i class="fab fa-github"></i>
                </a>
                <a href="mailto:1181062873@qq.com" class="tooltipped" target="_blank" data-tooltip="邮件联系我" data-position="top" data-delay="50">
                  <i class="fas fa-envelope-open"></i>
                </a>
                <a href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=1181062873" class="tooltipped" target="_blank" data-tooltip="QQ联系我: 1181062873" data-position="top" data-delay="50">
                  <i class="fab fa-qq"></i>
                </a>
                <a href="/atom.xml" class="tooltipped" target="_blank" data-tooltip="RSS 订阅" data-position="top" data-delay="50">
                  <i class="fas fa-rss"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <main class="content">
          <div id="indexCard" class="index-card">
            <div class="container ">
              <div class="card">
                <div class="card-content">
                  <div class="dream">
                    <div class="title center-align">
                      <i class="far fa-lightbulb"></i>&nbsp;&nbsp;我的梦想
                </div>
                    <div class="row">
                      <div class="col l8 offset-l2 m10 offset-m1 s10 offset-s1 center-align text">
                        不是每个人都应该像我这样去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。梦想是生命的灵魂，是心灵的灯塔，是引导人走向成功的信仰。有了崇高的梦想，只要矢志不渝地追求，梦想就会成为现实，奋斗就会变成壮举，生命就会创造奇迹。——罗伯&middot;舒乐
                    </div>
                    </div>
                  </div>
                  <div class="video-player">
                    <div class="title center-align">
                      <i class="fas fa-video-camera"></i>&nbsp;&nbsp;精彩视频
              </div>
                    <div class="row">
                      <div class="col l8 offset-l2 m10 offset-m1 s12">
                        <div id="dplayer" class="dplayer-video"></div>
                      </div>
                    </div>
                  </div>
                  <div id="recommend-sections" class="recommend">
                    <div class="title">
                      <i class="far fa-thumbs-up"></i>&nbsp;&nbsp;推荐文章
                </div>
                    <div class="row">
                      <div class="col s12 m6">
                        <div class="post-card" style="background-image: url('http://static.blinkfox.com/20181124-design.jpg')">
                          <div class="post-body">
                            <div class="post-categories">
                              <a href="/categories/软件设计/" class="category">软件设计</a>
                            </div>
                            <a href="/2018/11/24/ruan-jian-she-ji/ruan-jian-cheng-xu-she-ji-yuan-ze/">
                              <h3 class="post-title">软件程序设计原则</h3>
                            </a>
                            <p class="post-description"> 一、前言软件也像人一样，具有生命力，从出生到死亡，会经历多种变化。软件架构设计也不是一蹴而就的，是不断地演进发展。每个程序员都可以从理解编程 </p>
                            <a href="/2018/11/24/ruan-jian-she-ji/ruan-jian-cheng-xu-she-ji-yuan-ze/" class="read-more btn waves-effect waves-light" style="background: linear-gradient(to right, #FF5E3A 0%, #FF2A68 100%)" target="_blank">
                              <i class="icon far fa-eye fa-fw"></i>阅读更多 </a>
                          </div>
                        </div>
                      </div>
                      <div class="col s12 m6">
                        <div class="post-card" style="background-image: url('http://static.blinkfox.com/20181105-io.jpg')">
                          <div class="post-body">
                            <div class="post-categories">
                              <a href="/categories/后端/" class="category">后端</a>
                            </div>
                            <a href="/2018/11/05/hou-duan/java/java-io-zhi-shi-zheng-li/">
                              <h3 class="post-title">Java IO 知识整理</h3>
                            </a>
                            <p class="post-description"> 各IO类关系梳理 InputStream: Java IO中的顶级的字节输入流的抽象类，定义了最基础的输入、读取的相关方法。实现了Close </p>
                            <a href="/2018/11/05/hou-duan/java/java-io-zhi-shi-zheng-li/" class="read-more btn waves-effect waves-light" style="background: linear-gradient(to right, #EF4DB6 0%, #C643FC 100%)" target="_blank">
                              <i class="icon far fa-eye fa-fw"></i>阅读更多 </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article id="articles" class="container articles">
            <div class="row article-row">
              <div class="article col s12 m6 l4" data-aos="zoom-in">
                <div class="card">
                  <a href="/2019/03/02/hou-duan/spring/springboot2.x-dan-yuan-ce-shi/">
                    <div class="card-image">
                      <img src="http://static.blinkfox.com/20190302.png" class="responsive-img" alt="SpringBoot2.x 单元测试" />
                      <span class="card-title">SpringBoot2.x 单元测试</span>
                    </div>
                  </a>
                  <div class="card-content article-content">
                    <div class="summary block-with-text">
                      一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。 我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元测试相关的工具及方法。单元测试能帮助我们在早期就规避、发现和修复很多不易察觉的 bug 和漏洞，而且
                </div>
                    <div class="publish-info">
                      <span class="publish-date">
                        <i class="far fa-clock fa-fw icon-date"></i>2019-03-02 </span>
                      <span class="publish-author">
                        <i class="fas fa-bookmark fa-fw icon-category"></i>
                        <a href="/categories/后端/" class="post-category"> 后端 </a>
                      </span>
                    </div>
                  </div>
                  <div class="card-action article-tags">
                    <a href="/tags/Java/">
                      <span class="chip bg-color">Java</span>
                    </a>
                    <a href="/tags/单元测试/">
                      <span class="chip bg-color">单元测试</span>
                    </a>
                    <a href="/tags/Spring/">
                      <span class="chip bg-color">Spring</span>
                    </a>
                    <a href="/tags/SpringBoot/">
                      <span class="chip bg-color">SpringBoot</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
        <div class="container paging">
          <div class="row">
            <div class="col s6 m4 l4">
              <a class="left btn-floating btn-large disabled">
                <i class="fas fa-angle-left"></i>
              </a>
            </div>
            <div class="page-info col m4 l4 hide-on-small-only">
              <div class="center-align b-text-gray">
                1 / 5
     </div>
            </div>
            <div class="col s6 m4 l4">
              <a href="/page/2/" class="right btn-floating btn-large waves-effect waves-light bg-color">
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <footer class="page-footer bg-color">
          <div class="container row center-align">
            <div class="col s12 m4 l4 social-link social-statis">
              <a href="https://github.com/blinkfox" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:1181062873@qq.com" class="tooltipped" target="_blank" data-tooltip="邮件联系我" data-position="top" data-delay="50">
                <i class="fas fa-envelope-open"></i>
              </a>
              <a href="tencent://AddContact/?fromId=50&amp;fromSubId=1&amp;subcmd=all&amp;uin=1181062873" class="tooltipped" target="_blank" data-tooltip="QQ联系我: 1181062873" data-position="top" data-delay="50">
                <i class="fab fa-qq"></i>
              </a>
              <a href="/atom.xml" class="tooltipped" target="_blank" data-tooltip="RSS 订阅" data-position="top" data-delay="50">
                <i class="fas fa-rss"></i>
              </a>
            </div>
          </div>
        </footer>
        <div id="backTop" class="top-scroll">
          <a class="btn-floating btn-large waves-effect waves-light" href="#!">
            <i class="fas fa-arrow-up"></i>
          </a>
        </div>
      </>
    ]
  }
}

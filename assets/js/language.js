(function () {
  "use strict";

  var chinese = {
    navAbout: "关于我",
    news: "最新动态",
    experience: "科研经历",
    publications: "发表论文",
    services: "学术服务",
    navHonors: "荣誉奖励",
    honors: "荣誉与奖励",
    education: "教育经历",
    university: "上海交通大学",
    name: "陈予诺 <span>Yunuo Chen</span>",
    subtitle: "计算机科学博士生",
    biography: '我是上海交通大学多媒体实验室的博士生，导师为中国工程院院士 <a href="https://scholar.google.com/citations?user=u9aw5o8AAAAJ">高文</a>教授和 <a href="https://scholar.google.com/citations?user=R9iwlJcAAAAJ">鲁国</a>副教授。本科就读于上海交通大学密西根学院，获电子与计算机工程学士学位。',
    research: "我的研究方向包括<strong>视觉压缩</strong>、<strong>生成式人工智能（AIGC）</strong>和<strong>世界模型</strong>。",
    email: '<i class="fas fa-fw fa-envelope"></i>邮箱',
    scholar: '<i class="fas fa-fw fa-graduation-cap"></i>谷歌学术',
    newsNeurips2026: "两篇论文被 <strong>NeurIPS 2026</strong> 接收。",
    newsTcsvt2026: "两篇论文被 <strong>TCSVT 2026</strong> 接收。",
    newsEccv2026: "一篇论文被 <strong>ECCV 2026</strong> 接收。",
    newsCvpr2026: "两篇论文被 <strong>CVPR 2026</strong> 接收。",
    newsIclr2026: "两篇论文被 <strong>ICLR 2026</strong> 接收。",
    newsNeurips2025: "一篇论文被 <strong>NeurIPS 2025</strong> 接收。",
    newsIccv2025: "一篇论文被 <strong>ICCV 2025</strong> 接收，并获选为<strong>口头报告</strong>。",
    newsIclr2024: "一篇论文被 <strong>ICLR 2024</strong> 接收。",
    newsIcml2023: "一篇论文被 <strong>ICML 2023</strong> 接收。",
    msraDates: "2026.02 – 至今",
    researchIntern: "科研实习生",
    msra: "微软亚洲研究院（MSRA）",
    msraSupervisors: '导师：<a href="https://www.microsoft.com/en-us/research/people/fawe/">魏芳芸</a> 和 <a href="https://scholar.google.com/citations?user=_fKSYOwAAAAJ">陈栋</a>。',
    msraTopic: "研究方向：轻量化文生图与图像编辑基础模型。",
    stepfun: "阶跃星辰（StepFun）",
    stepfunSupervisor: '导师：<a href="https://scholar.google.com/citations?user=OC8eBkYAAAAJ">程巍</a>。',
    stepfunTopic: "研究方向：多参考图与多对多图像生成。",
    publicationNote: "以下重点展示第一作者或代表性工作，* 表示同等贡献。",
    conferenceReviewer: "会议审稿：",
    journalReviewer: "期刊审稿：",
    workshopOrganizer: "研讨会组织：",
    workshop: "VCIP 2025 超低码率视频压缩挑战赛",
    outstandingGraduate: "上海交通大学优秀毕业生",
    yuLimingScholarship: "上海交通大学密西根学院俞黎明奖学金",
    undergraduateScholarship: "上海交通大学密西根学院本科生优秀奖学金",
    phdDates: "2023.09 – 至今",
    phdEducation: "计算机科学博士（在读），上海交通大学",
    bachelorEducation: "电子与计算机工程学士，上海交通大学密西根学院",
    undergraduateMinors: "本科辅修：数据科学、计算机科学、全球视野下的中国研究。"
  };

  var entries = Array.from(document.querySelectorAll("[data-i18n]")).map(function (element) {
    return { element: element, english: element.innerHTML, key: element.dataset.i18n };
  });
  var buttons = document.querySelectorAll("[data-language]");
  var group = document.querySelector(".language-switch");
  var originalTitle = document.title;
  var description = document.querySelector('meta[property="og:description"]');
  var originalDescription = description ? description.content : "";
  var locale = document.querySelector('meta[property="og:locale"]');
  var originalLocale = locale ? locale.content : "en";
  var images = Array.from(document.querySelectorAll(".hero-card img, .experience-card img"));
  var originalAlts = images.map(function (image) { return image.alt; });
  var chineseAlts = ["陈予诺", "微软亚洲研究院标志", "阶跃星辰标志"];

  function setLanguage(language) {
    var isChinese = language === "zh";
    document.documentElement.lang = isChinese ? "zh-CN" : "en";
    entries.forEach(function (entry) {
      entry.element.innerHTML = isChinese && Object.prototype.hasOwnProperty.call(chinese, entry.key)
        ? chinese[entry.key] : entry.english;
    });
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    group.setAttribute("aria-label", isChinese ? "语言" : "Language");
    document.title = isChinese ? "陈予诺（Yunuo Chen）- 个人主页" : originalTitle;
    if (description) {
      description.content = isChinese
        ? "上海交通大学博士生，研究方向包括视觉压缩、生成式人工智能与世界模型。" : originalDescription;
    }
    if (locale) locale.content = isChinese ? "zh_CN" : originalLocale;
    images.forEach(function (image, index) {
      image.alt = isChinese ? chineseAlts[index] : originalAlts[index];
    });
    try { localStorage.setItem("homepage-language", language); } catch (error) {}
    window.dispatchEvent(new Event("resize"));
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () { setLanguage(button.dataset.language); });
  });
  var savedLanguage;
  try { savedLanguage = localStorage.getItem("homepage-language"); } catch (error) {}
  setLanguage(savedLanguage === "zh" ? "zh" : "en");
}());

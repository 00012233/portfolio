import type { WorkItem, ProjectItem, CaseStudyData, SkillItem } from '@/types';

export const personalInfo = {
  name: { zh: '饶蓓', en: 'Astre' },
  title: { zh: '项目运营｜市场营销｜品牌与内容运营', en: 'Project Operations | Marketing | Brand & Content Operations' },
  bio: { zh: '擅长将复杂项目拆解为可执行流程，通过运营策划、团队协作与内容传播推动项目从0到1落地。', en: 'Skilled at transforming complex projects into actionable workflows and driving projects from 0 to 1 through operations, collaboration, and content strategy.' },
  email: '1347704609@qq.com',
  phone: '188 7014 4205',
};

export const workExperiences: WorkItem[] = [
  {
    id: 'roche', company: { zh: '罗氏制药', en: 'Roche Pharma' }, period: '2025.12 — 2026.02',
    description: {
      zh: '医药代表 | （肿瘤科 安维汀）实习生。独立开展区域市场分析及患者画像分析，输出市场洞察和数据简报，为区域推广策略提供支持。策划并执行学术推广活动，推进目标医院产品推广，积累活动策划与项目执行经验。协调医学、销售等多部门资源，推动跨部门协作，保障项目顺利落地。',
      en: 'Medical Representative | (Oncology, Avastin) Intern. Independently conducted regional market analysis and patient profiling, delivering market insights and data briefs to support regional promotion strategy. Planned and executed academic promotion events, advanced product promotion in target hospitals, and gained hands-on experience in event planning and project execution. Coordinated cross-functional resources across medical and sales teams to ensure seamless project delivery.',
    },
  },
  {
    id: 'novonordisk', company: { zh: '诺和诺德', en: 'Novo Nordisk' }, period: '2025.07 — 2025.12',
    description: {
      zh: '医药代表 | （内分泌科 司美格鲁肽）实习生。负责区域核心客户关系维护及患者双通道服务支持，协助患者完成双通道办理流程，并跟进报销、问诊等环节问题，持续提升患者服务体验；梳理高频业务流程，总结常见问题并形成标准化操作文档（SOP），提升工作效率；持续跟进患者办理情况，协助区域新患者数量逐步提升并稳定在月均40例左右。',
      en: 'Medical Representative | (Endocrinology, Semaglutide) Intern. Responsible for key client relationship management and dual-channel patient service support. Assisted patients through the dual-channel process, followed up on reimbursement and consultation issues to continuously improve the patient service experience. Documented high-frequency workflows and common issues into standardized SOPs, improving work efficiency. Through consistent follow-up, helped regional new patient numbers grow and stabilize at ~40 cases per month.',
    },
  },
  {
    id: 'ganzhou-bank', company: { zh: '赣州金城银行', en: 'Ganzhou Jincheng Bank' }, period: '2023.06 — 2023.07',
    description: {
      zh: '销售专员 | 销售。负责电话销售及客户开发，针对团队依赖纸质表格管理客户的问题，主动搭建Excel客户管理台账，建立客户分类及跟进机制。结合客户反馈持续优化销售话术及跟进策略，月度业绩完成率120%，获团队销售冠军。累计服务客户4500+，离职后一月内老客户复购率15%。',
      en: 'Sales Specialist | Sales. Responsible for telemarketing and client development. Identified the team\'s reliance on paper-based client tracking and proactively built an Excel-based client management ledger with classification and follow-up mechanisms. Continuously refined sales scripts and follow-up strategies based on client feedback, achieving 120% monthly target completion and earning team top sales honors. Served 4,500+ clients cumulatively, with a 15% repeat purchase rate from existing clients within one month after departure.',
    },
  },
];

export const projectExperiences: ProjectItem[] = [
  {
    id: 'student-union', title: { zh: '校学生会', en: 'Student Union' }, role: { zh: '执行主席', en: 'Executive Chairperson' }, period: '2024.09 — 2025.06',
    summary: { zh: '统筹全校学生工作，管理60余人团队，对接9个学院，组织30+校级活动。', en: 'Led university-wide student initiatives, managed 60+ team members, coordinated 9 departments, organized 30+ events.' },
    sections: [
      { id: 'org', title: { zh: '组织架构', en: 'Organization' }, content: { zh: '管理60余人学生团队，建立周例会与汇报机制', en: 'Managed 60-member team with weekly standups and reporting cadence' } },
      { id: 'scale', title: { zh: '项目规模', en: 'Project Scale' }, content: { zh: '对接9个学院，覆盖师生超5000人次', en: 'Coordinated 9 departments, reaching 5000+ students and faculty' } },
      { id: 'ops', title: { zh: '组织运营', en: 'Operations' }, content: { zh: '统筹30+校级活动，建立标准化运营流程', en: 'Led 30+ campus events, established standardized operational procedures' } },
      { id: 'process', title: { zh: '流程优化', en: 'Process Optimization' }, content: { zh: '设计数字化签到与提案收集系统，提升效率', en: 'Designed digital check-in and proposal collection systems' } },
      { id: 'team', title: { zh: '团队培养', en: 'Team Development' }, content: { zh: '建立人才培养梯队，制定晋升标准', en: 'Established talent development pipeline with promotion criteria' } },
      { id: 'assembly', title: { zh: '学生代表大会', en: 'Student Assembly' }, content: { zh: '主导学代会筹备，协调12个部门完成300人会议', en: 'Directed Student Assembly with 12 departments, 300 attendees' } },
    ],
  },
  {
    id: 'calligraphy', title: { zh: '书法协会', en: 'Calligraphy Society' }, role: { zh: '会长', en: 'President' }, period: '2023.09 — 2024.09',
    summary: { zh: '社团从20人增长至60人，建立品牌体系与运营SOP，单次招新189人报名。', en: 'Grew society from 20 to 60 members, built brand system and operational SOPs, 189 recruitment applications.' },
    sections: [
      { id: 'background', title: { zh: '项目背景', en: 'Background' }, content: { zh: '接手时仅20人，品牌认知度低，活动参与率下滑', en: 'Started with 20 members, low brand awareness, declining participation' } },
      { id: 'strategy', title: { zh: '增长策略', en: 'Growth Strategy' }, content: { zh: '重新定位为"传统文化体验平台"，设计漏斗式招新转化路径', en: 'Repositioned as "traditional culture experience platform", designed recruitment funnel' } },
      { id: 'brand', title: { zh: '品牌建设', en: 'Brand Building' }, content: { zh: '从零搭建视觉系统：Logo、公众号模板、海报规范', en: 'Built visual identity from scratch: logo, templates, poster guidelines' } },
      { id: 'ops', title: { zh: '运营体系', en: 'Operations System' }, content: { zh: '建立活动SOP与成员成长体系，实现可复用可传承', en: 'Established event SOPs and member growth system for sustainability' } },
      { id: 'activities', title: { zh: '活动案例', en: 'Activity Cases' }, content: { zh: '策划"书法+"系列活动，峰值参与780+人次', en: 'Curated "Calligraphy+" series, peak participation 780+' } },
    ],
  },
  {
    id: 'innovation', title: { zh: '国家级创新创业项目', en: 'National Innovation Project' }, role: { zh: '项目负责人', en: 'Project Lead' }, period: '2023.11 — 2026.06',
    summary: { zh: '设计沉浸式红色文化体验产品，完成商业计划书与路演，成功落地60人实景活动。', en: 'Designed immersive cultural experience product, delivered business plan and pitch, executed 60-person live event.' },
    sections: [
      { id: 'intro', title: { zh: '项目介绍', en: 'Introduction' }, content: { zh: '国家级大学生创新创业训练计划立项项目', en: 'National-level university innovation training program' } },
      { id: 'bizplan', title: { zh: '商业计划书', en: 'Business Plan' }, content: { zh: '含市场分析、财务预测、运营方案', en: 'Includes market analysis, financial projections, operational strategy' } },
      { id: 'pitch', title: { zh: '路演', en: 'Pitch Deck' }, content: { zh: '完成路演展示，获评委高度评价', en: 'Delivered pitch presentation, highly praised by judges' } },
      { id: 'script', title: { zh: '红色剧本杀', en: 'Cultural Experience Design' }, content: { zh: '10角色叙事体系，NPC互动机制，实景任务系统', en: '10-character narrative, NPC interaction mechanics, real-world task system' } },
      { id: 'field', title: { zh: '校外实践', en: 'Field Practice' }, content: { zh: '漳州社会实践，行程规划与资源协调', en: 'Zhangzhou field research, logistics and resource coordination' } },
      { id: 'results', title: { zh: '项目成果', en: 'Results' }, content: { zh: '成功落地60人实景体验，参与者满意度91%', en: 'Executed 60-person live experience, 91% participant satisfaction' } },
    ],
  },
];

export const skillsList: SkillItem[] = [
  { name: { zh: 'Microsoft Office', en: 'Microsoft Office' }, usage: { zh: '项目方案撰写、数据整理、汇报制作', en: 'Project proposals, data analysis, presentation creation' }, type: 'tool' },
  { name: { zh: 'Canva', en: 'Canva' }, usage: { zh: '海报设计、品牌视觉、社交媒体素材', en: 'Poster design, brand visuals, social media content' }, type: 'tool', hasGallery: true, galleryPath: 'canva' },
  { name: { zh: 'ChatGPT', en: 'ChatGPT' }, usage: { zh: '文案优化、方案头脑风暴、信息梳理', en: 'Copy optimization, brainstorming, information synthesis' }, type: 'ai' },
  { name: { zh: 'Claude', en: 'Claude' }, usage: { zh: '深度内容分析、项目复盘、复杂文档处理', en: 'In-depth analysis, project retrospectives, document processing' }, type: 'ai' },
  { name: { zh: 'Gemini', en: 'Gemini' }, usage: { zh: '多模态信息检索与研究辅助', en: 'Multimodal information retrieval and research assistance' }, type: 'ai' },
  { name: { zh: 'Grok', en: 'Grok' }, usage: { zh: '实时信息获取与趋势分析', en: 'Real-time information gathering and trend analysis' }, type: 'ai' },
  { name: { zh: 'DeepSeek', en: 'DeepSeek' }, usage: { zh: '中文内容创作、学术辅助、代码生成', en: 'Chinese content creation, academic assistance, code generation' }, type: 'ai' },
  { name: { zh: '豆包', en: 'Doubao' }, usage: { zh: '日常AI助手、快速问答、内容生成', en: 'Daily AI assistant, quick Q&A, content generation' }, type: 'ai' },
  { name: { zh: 'Claude Code', en: 'Claude Code' }, usage: { zh: '网站开发 · 工作流优化 · 信息整理 · 自动化尝试', en: 'Web Development · Workflow Optimization · Information Organization · Automation' }, type: 'automation' },
];

export const caseStudies: CaseStudyData[] = [
  {
    id: 'student-assembly', title: { zh: '学生代表大会', en: 'Student Representative Assembly' }, template: 'union',
    tags: { zh: ['组织运营', '大型活动', '跨部门协调'], en: ['Operations', 'Large Events', 'Cross-team Coordination'] },
    sections: [
      { id: 'overview', title: { zh: '项目概览', en: 'Project Overview' }, content: { zh: '涉及12个部门、300余名代表的校级大型会议', en: 'University-wide assembly involving 12 departments and 300+ representatives' } },
      { id: 'scale', title: { zh: '项目规模', en: 'Project Scale' }, content: { zh: '12个部门协同，300人参会，60天筹备周期', en: '12 departments, 300 attendees, 60-day preparation cycle' } },
      { id: 'planning', title: { zh: '筹备规划', en: 'Planning' }, content: { zh: '将筹备期拆分为5个阶段47个子任务，建立日报+周会机制', en: 'Decomposed into 5 phases and 47 sub-tasks with daily/weekly syncs' } },
      { id: 'timeline', title: { zh: '时间线', en: 'Timeline' }, content: { zh: '60天完整筹备时间线，从启动到复盘', en: 'Full 60-day preparation timeline from kickoff to retrospective' } },
      { id: 'execution', title: { zh: '执行管理', en: 'Execution' }, content: { zh: '编写《学代会执行手册》，3次全流程彩排', en: 'Authored Assembly Handbook, conducted 3 full rehearsals' } },
      { id: 'risk', title: { zh: '风险控制', en: 'Risk Control' }, content: { zh: '提前识别17个潜在问题并制定预案', en: 'Identified 17 potential issues with contingency plans' } },
      { id: 'outcome', title: { zh: '项目成果', en: 'Outcome' }, content: { zh: '会议零延误，代表满意度94%，手册被存档为标准参考', en: 'Zero delays, 94% satisfaction, handbook archived as standard reference' } },
    ],
  },
  {
    id: 'immersive-script', title: { zh: '沉浸式红色剧本杀', en: 'Immersive Cultural Experience' }, template: 'script',
    tags: { zh: ['产品设计', '叙事设计', '创新创业'], en: ['Product Design', 'Narrative Design', 'Innovation'] },
    sections: [
      { id: 'challenge', title: { zh: '挑战', en: 'Challenge' }, content: { zh: '如何让年轻一代对红色文化产生真实兴趣？', en: 'How to spark genuine interest in cultural heritage among youth?' } },
      { id: 'solution', title: { zh: '解决方案', en: 'Solution' }, content: { zh: '设计沉浸式剧本杀体验产品，融合文化与娱乐', en: 'Designed immersive experience product blending culture with entertainment' } },
      { id: 'design', title: { zh: '体验设计', en: 'Experience Design' }, content: { zh: '10角色分支叙事，6种NPC互动类型', en: '10-character branching narrative, 6 NPC interaction types' } },
      { id: 'npc', title: { zh: 'NPC 设计', en: 'NPC Design' }, content: { zh: '每个NPC拥有独立背景故事与互动触发条件', en: 'Each NPC with unique backstory and interaction trigger conditions' } },
      { id: 'outcome', title: { zh: '项目成果', en: 'Outcome' }, content: { zh: '60人实景测试，参与满意度91%，获国家级立项', en: '60-person live test, 91% satisfaction, national-level approval' } },
    ],
  },
  {
    id: 'society-growth', title: { zh: '书法社增长运营', en: 'Calligraphy Society Growth' }, template: 'growth',
    tags: { zh: ['增长运营', '品牌建设', '内容运营'], en: ['Growth', 'Brand Building', 'Content Operations'] },
    sections: [
      { id: 'overview', title: { zh: '项目概览', en: 'Project Overview' }, content: { zh: '社团运营分析：从品牌建设到增长数据', en: 'Society operations: from brand building to growth metrics' } },
      { id: 'initial', title: { zh: '初始状况', en: 'Initial Situation' }, content: { zh: '20人小社团，品牌认知度低，活动参与率下滑', en: '20-member small society with low brand awareness' } },
      { id: 'strategy', title: { zh: '增长策略', en: 'Growth Strategy' }, content: { zh: '品牌重塑 + 招新漏斗 + 活动体系 + SOP建设', en: 'Brand redesign + recruitment funnel + event system + SOPs' } },
      { id: 'brand', title: { zh: '品牌建设', en: 'Brand Building' }, content: { zh: 'Logo设计、公众号运营、视觉规范体系', en: 'Logo design, social media operations, visual identity system' } },
      { id: 'operation', title: { zh: '运营数据', en: 'Operations Data' }, content: { zh: '从20人到60人，189份报名，780+活动参与', en: '20 to 60 members, 189 applications, 780+ event participation' } },
      { id: 'dashboard', title: { zh: '数据大屏', en: 'Dashboard' }, content: { zh: '点击查看完整运营数据分析', en: 'Click to view full analytics dashboard' } },
    ],
  },
];

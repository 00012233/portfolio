import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'student-assembly',
    title: {
      zh: '学生代表大会',
      en: 'Student Representative Assembly',
    },
    problem: {
      zh: '学代会涉及12个部门、300余名代表，筹备周期短、协调难度大。过去存在信息传递滞后、部门职责不清、流程衔接不畅等问题，导致会议效率低、代表体验差。',
      en: 'The Student Representative Assembly involved 12 departments and 300+ representatives, with tight preparation timelines and complex coordination. Past assemblies suffered from delayed information flow, unclear department responsibilities, and poor process handoffs — leading to inefficient meetings and poor delegate experience.',
    },
    role: {
      zh: '作为统筹负责人，主导全流程策划与跨部门协调，确保会议从筹备到执行的高效运转。',
      en: 'As the overall coordinator, I led end-to-end planning and cross-department coordination to ensure efficient execution from preparation through closing.',
    },
    actions: {
      zh: [
        '制定详细筹备时间表，将60天筹备期拆分为5个阶段、47个子任务',
        '建立"日报+周会"信息同步机制，确保12个部门进度透明',
        '编写《学代会执行手册》，明确每个岗位的职责与操作流程',
        '设计代表签到、提案收集、投票计票的全流程数字化方案',
        '组织3次全流程彩排，提前发现并解决17个潜在问题',
      ],
      en: [
        'Created a detailed 60-day preparation timeline, decomposed into 5 phases and 47 sub-tasks',
        'Established a daily-report + weekly-standup sync mechanism across all 12 departments',
        'Authored an Assembly Execution Handbook with clear role definitions and SOPs',
        'Designed a fully digital workflow for delegate check-in, proposal collection, and vote counting',
        'Conducted 3 full dress rehearsals, identifying and resolving 17 potential issues in advance',
      ],
    },
    outcome: {
      zh: '会议按时完成，议程零延误。代表满意度达94%。《执行手册》被学生会存档，成为后续学代会的标准参考文档。',
      en: 'Assembly completed on schedule with zero agenda delays. Delegate satisfaction reached 94%. The Execution Handbook was archived by the Student Union and adopted as the standard reference for all subsequent assemblies.',
    },
    tags: {
      zh: ['项目管理', '跨部门协调', 'SOP搭建', '大型活动'],
      en: ['Project Management', 'Cross-team Coordination', 'SOP Design', 'Large Events'],
    },
  },
  {
    id: 'immersive-experience',
    title: {
      zh: '沉浸式红色文化体验项目',
      en: 'Immersive Cultural Experience Project',
    },
    problem: {
      zh: '如何让年轻一代对红色文化产生真实兴趣？传统说教式宣传效果有限，需要一种能激发主动参与和情感共鸣的新形式。同时，作为创新创业项目，需要兼具文化价值与商业可行性。',
      en: 'How can we spark genuine interest in cultural heritage among young audiences? Traditional top-down approaches have limited engagement. A new format was needed — one that inspires active participation and emotional resonance. As an innovation project, it also needed to balance cultural value with commercial viability.',
    },
    role: {
      zh: '项目发起人兼负责人，主导产品概念设计、叙事体系搭建、商业计划书撰写与落地执行。',
      en: 'Project initiator and lead — drove product concept design, narrative system development, business plan writing, and live execution.',
    },
    actions: {
      zh: [
        '深度调研在地红色历史，提炼10个真实历史人物原型',
        '设计10角色分支叙事体系，每位角色拥有独立故事线与任务目标',
        '开发NPC互动机制：设计6种互动类型与触发条件',
        '完成商业计划书（含市场分析、财务预测、运营方案）',
        '组织60人规模的实景测试，收集反馈并迭代产品',
        '完成路演展示，获评委"兼具文化深度与商业潜力"的评价',
      ],
      en: [
        'Conducted in-depth research on local revolutionary history, extracting 10 real historical figure archetypes',
        'Designed a 10-character branching narrative system — each character with an independent story arc and objectives',
        'Developed NPC interaction mechanics: 6 interaction types with trigger conditions',
        'Completed a full business plan (market analysis, financial projections, operational strategy)',
        'Executed a 60-person live playtest, collected feedback, and iterated on the product',
        'Delivered pitch presentation; judges commended its "balance of cultural depth and commercial potential"',
      ],
    },
    outcome: {
      zh: '项目获国家级大学生创新创业训练计划立项。60人实景测试中，参与者满意度91%，85%的参与者表示"对红色历史有了全新的认识"。项目模式被学院推荐为"文化创新典型案例"。',
      en: 'Project was approved as a national-level innovation training program. In the 60-person live test, participant satisfaction reached 91%, and 85% reported "a completely new understanding of revolutionary history." The project model was recommended by the college as an "exemplary case of cultural innovation."',
    },
    tags: {
      zh: ['产品设计', '叙事设计', '商业策划', '创新创业'],
      en: ['Product Design', 'Narrative Design', 'Business Planning', 'Innovation'],
    },
  },
  {
    id: 'society-growth',
    title: {
      zh: '书法协会增长运营',
      en: 'Calligraphy Society Growth Turnaround',
    },
    problem: {
      zh: '接手时社团仅20名成员，品牌认知度低，活动参与率持续下滑。社团面临"招不到人、留不住人、办不好活动"的三重困境，亟需系统性的运营改革。',
      en: 'When I took over, the society had only 20 members, low brand awareness, and declining event participation. It faced a triple challenge: can\'t recruit, can\'t retain, can\'t deliver quality events. A systematic operational overhaul was urgently needed.',
    },
    role: {
      zh: '作为会长，全面负责社团的战略规划、品牌重塑、招新体系设计与活动运营。',
      en: 'As President, I held full responsibility for strategic planning, brand redesign, recruitment system design, and event operations.',
    },
    actions: {
      zh: [
        '重新定位社团品牌：从"书法练习小组"转型为"传统文化体验平台"',
        '设计"轻体验→深度参与→核心成员"的漏斗式招新转化路径',
        '建立社团视觉系统：Logo、公众号模板、海报规范',
        '策划"书法+"系列活动：书法×咖啡、书法×音乐、书法×公益活动',
        '建立成员成长体系：积分制 + 技能树 + 晋升通道',
        '制定标准化活动SOP，降低活动组织门槛',
      ],
      en: [
        'Repositioned the brand: from "calligraphy practice group" to "traditional culture experience platform"',
        'Designed a funnel conversion path: Light Experience → Deep Engagement → Core Member',
        'Built a visual identity system: logo, official account templates, poster guidelines',
        'Curated "Calligraphy+" event series: Calligraphy × Coffee, × Music, × Community Service',
        'Created a member growth system: points system + skill tree + advancement pathways',
        'Standardized event SOPs to lower the barrier for organizing activities',
      ],
    },
    outcome: {
      zh: '社团规模从20人增长至60人（200%增长），单次招新收到189份报名。活动参与从场均15人提升至场均65人，峰值活动参与达780+人次。社团获评校级"优秀社团"。',
      en: 'Membership grew from 20 to 60 (200% growth); 189 applications in one recruitment season. Average event attendance rose from 15 to 65 per event, with a peak event reaching 780+ participants. Society was awarded university-level "Outstanding Society" status.',
    },
    tags: {
      zh: ['增长运营', '品牌建设', '用户运营', '体系搭建'],
      en: ['Growth Operations', 'Brand Building', 'User Operations', 'System Design'],
    },
  },
];

import type { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'student-union',
    org: {
      zh: '校学生会',
      en: 'Student Union',
    },
    role: {
      zh: '执行主席',
      en: 'Executive Chairperson',
    },
    period: '2023.09 — 2025.06',
    description: {
      zh: '作为校学生会执行主席，负责统筹全校学生工作的战略规划与落地执行。管理60余人学生团队，对接9个学院学生会，累计统筹策划并执行30余场校级大型活动，包括学代会、马拉松志愿服务、文艺汇演等。建立周例会与汇报机制，打通跨学院协作流程，覆盖师生超5000人次。',
      en: 'As Executive Chairperson of the Student Union, I led strategic planning and operational execution of university-wide student initiatives. I managed a 60-member team, coordinated with student unions across 9 academic departments, and directed 30+ campus-wide events including the Student Representative Assembly, marathon volunteer services, and cultural festivals — reaching 5,000+ students and faculty.',
    },
    highlights: {
      zh: [
        '管理60人学生团队，建立周例会与汇报机制',
        '对接9个学院，打通跨学院协作流程',
        '统筹30+校级活动，覆盖师生超5000人次',
        '主导学代会筹备，协调12个部门完成300人会议',
        '设计马拉松志愿服务方案，组织200+志愿者',
        '策划并执行年度文艺汇演，参与人数破千',
      ],
      en: [
        'Managed a 60-member student team with weekly standups and reporting cadence',
        'Coordinated 9 academic departments, establishing cross-college collaboration workflows',
        'Led 30+ campus-wide events reaching 5,000+ students and faculty',
        'Directed the Student Representative Assembly: 12 departments, 300 attendees',
        'Designed marathon volunteer program: recruited and coordinated 200+ volunteers',
        'Produced annual cultural festival with 1,000+ participants',
      ],
    },
    images: [],
  },
  {
    id: 'calligraphy-society',
    org: {
      zh: '书法协会',
      en: 'Calligraphy Society',
    },
    role: {
      zh: '会长',
      en: 'President',
    },
    period: '2023 — 2024',
    description: {
      zh: '接手时社团仅20人，在一年内将其发展为60人的活跃社群。重新设计招新体系与品牌形象，单次招新季收到189份报名申请，策划的社团活动累计参与780+人次。通过系统化的成员成长路径与活动设计，将社团打造为校内最具活力的文化类社团之一。',
      en: 'Took over a 20-member society and grew it into an active community of 60 within one year. Redesigned the recruitment funnel and brand identity — received 189 applications in a single recruitment season. Events attracted 780+ cumulative participants. Through systematic member development pathways and engagement design, transformed the society into one of the most vibrant cultural organizations on campus.',
    },
    highlights: {
      zh: [
        '社团规模从20人增长至60人（3倍增长）',
        '单次招新季收到189份报名申请',
        '活动累计参与人次780+',
        '从零搭建社团品牌体系：Logo、公众号、视觉规范',
        '设计"新成员→骨干→部长"三级成长路径',
        '建立活动SOP，确保每场活动可复用、可传承',
      ],
      en: [
        'Grew membership from 20 to 60 (3x growth)',
        '189 applications received in a single recruitment season',
        '780+ cumulative event participation',
        'Built brand system from scratch: logo, official account, visual identity',
        'Designed a 3-tier growth pathway: New Member → Core Member → Department Lead',
        'Established event SOPs for repeatable, transferable operations',
      ],
    },
    images: [],
  },
  {
    id: 'innovation-project',
    org: {
      zh: '国家级创新创业项目',
      en: 'National Innovation & Entrepreneurship Project',
    },
    role: {
      zh: '项目负责人',
      en: 'Project Lead',
    },
    period: '2023 — 2024',
    description: {
      zh: '主持国家级大学生创新创业训练计划项目，以红色文化与在地历史为背景，设计了一套沉浸式剧本杀体验产品。项目包含10角色叙事体系、NPC互动机制与实景任务系统，并完成商业计划书撰写与路演展示。最终成功落地执行了一场60人规模的实景体验活动。',
      en: 'Led a national-level university innovation and entrepreneurship project, designing an immersive murder-mystery-style cultural experience product rooted in local revolutionary history. The project featured a 10-character narrative system, NPC interaction mechanics, and real-world task systems. Delivered a full business plan and pitch deck, and successfully executed a 60-person live experience event.',
    },
    highlights: {
      zh: [
        '国家级大学生创新创业训练计划立项',
        '设计10角色叙事体系与分支剧情',
        '开发NPC互动机制与实景任务系统',
        '完成完整商业计划书与路演PPT',
        '成功落地60人规模的实景体验活动',
        '融合红色文化与沉浸式娱乐的创新尝试',
      ],
      en: [
        'Approved as a national-level innovation training program',
        'Designed a 10-character narrative system with branching storylines',
        'Developed NPC interaction mechanics and real-world task systems',
        'Delivered a complete business plan and investor pitch deck',
        'Successfully executed a 60-person live experience event',
        'Innovative fusion of cultural heritage education with immersive entertainment',
      ],
    },
    images: [],
    videoUrl: '',
  },
  {
    id: 'field-practice',
    org: {
      zh: '校外实践项目',
      en: 'Field Practice & Research Project',
    },
    role: {
      zh: '实践队负责人',
      en: 'Field Team Lead',
    },
    period: '2024',
    description: {
      zh: '带领实践团队赴福建漳州开展社会实践活动。负责整体行程规划、在地资源协调与社区对接，设计并落地了面向当地社区的文化活动方案。在实践中锻炼了跨地域资源整合与现场应变能力。',
      en: 'Led a field research team to Zhangzhou, Fujian Province for community-based social practice. Responsible for itinerary planning, local resource coordination, and community liaison. Designed and delivered cultural engagement activities for local communities, strengthening cross-regional resource integration and on-the-ground adaptability.',
    },
    highlights: {
      zh: [
        '制定5天行程计划，涵盖调研、访谈与文化活动',
        '协调当地社区资源与场地',
        '设计并执行社区文化活动方案',
        '产出实践调研报告与影像记录',
        '跨地域团队协调与现场问题处理',
      ],
      en: [
        'Planned a 5-day itinerary covering research, interviews, and cultural activities',
        'Coordinated local community resources and venues',
        'Designed and executed community cultural engagement programs',
        'Produced field research report and visual documentation',
        'Cross-regional team coordination and on-site problem solving',
      ],
    },
    images: [],
  },
];

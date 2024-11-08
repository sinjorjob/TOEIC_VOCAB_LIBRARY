// vocabularyData.js
const vocabularyData = {
    nodes: [
        // Group 1: ビジネス戦略
        {
            id: "strategy",
            label: "戦略",
            group: 1,
            meaning: "strategy (名詞): 戦略、計画\nstrategic (形容詞): 戦略的な\nstrategist (名詞): 戦略家",
            exampleEn: "Our competitive strategy focuses on continuous innovation in global markets.",
            exampleJp: "私たちの競争戦略は、継続的なイノベーションに焦点を当てています。",
            level: "TOEIC 600-700"
        },
        {
            id: "innovation",
            label: "革新",
            group: 1,
            meaning: "innovation (名詞): 革新\ninnovative (形容詞): 革新的な\ninnovator (名詞): 革新者",
            exampleEn: "Our strategy promotes innovation to achieve sustainable growth in the market.",
            exampleJp: "私たちの戦略は、持続可能な成長を達成するためにイノベーションを促進します。",
            level: "TOEIC 600-700"
        },
        {
            id: "growth",
            label: "成長",
            group: 1,
            meaning: "growth (名詞): 成長、発展\ngrow (動詞): 成長する\ngrowing (形容詞): 成長している",
            exampleEn: "The new initiative drives sustainable growth through continuous innovation.",
            exampleJp: "新しいイニシアチブは、継続的なイノベーションを通じて持続可能な成長を推進します。",
            level: "TOEIC 600-700"
        },
        {
            id: "competitive",
            label: "競争力のある",
            group: 1,
            meaning: "competitive (形容詞): 競争力のある\ncompete (動詞): 競争する\ncompetition (名詞): 競争",
            exampleEn: "Our competitive strategy requires initiative to maintain market leadership.",
            exampleJp: "私たちの競争戦略は、市場リーダーシップを維持するためのイニシアチブを必要とします。",
            level: "TOEIC 600-700"
        },
        {
            id: "initiative",
            label: "率先",
            group: 1,
            meaning: "initiative (名詞): 率先、主導権\ninitiate (動詞): 開始する\ninitiating (形容詞): 開始する",
            exampleEn: "This growth initiative demonstrates our competitive advantage in the market.",
            exampleJp: "この成長イニシアチブは、市場における私たちの競争優位性を示しています。",
            level: "TOEIC 600-700"
        },

        // Group 2: プロジェクト管理
        {
            id: "implementation",
            label: "実施",
            group: 2,
            meaning: "implementation (名詞): 実施、実行\nimplement (動詞): 実施する\nimplementing (形容詞): 実施する",
            exampleEn: "The implementation schedule requires timeline adjustments to ensure success.",
            exampleJp: "実施スケジュールは、成功を確実にするためにタイムラインの調整が必要です。",
            level: "TOEIC 600-700"
        },
        {
            id: "schedule",
            label: "日程",
            group: 2,
            meaning: "schedule (名詞): 日程、予定表\nschedule (動詞): 予定を立てる\nscheduled (形容詞): 予定された",
            exampleEn: "The monitoring schedule ensures implementation stays on track.",
            exampleJp: "モニタリングスケジュールにより、実施が予定通りに進むことが確保されます。",
            level: "TOEIC 600-700"
        },
        {
            id: "monitoring",
            label: "監視",
            group: 2,
            meaning: "monitoring (名詞): 監視、モニタリング\nmonitor (動詞): 監視する\nmonitored (形容詞): 監視された",
            exampleEn: "Resource monitoring and schedule adjustments are essential for project success.",
            exampleJp: "リソースのモニタリングとスケジュールの調整は、プロジェクトの成功に不可欠です。",
            level: "TOEIC 600-700"
        },
        {
            id: "timeline",
            label: "時間軸",
            group: 2,
            meaning: "timeline (名詞): 時間軸、予定表\ntimed (形容詞): 時間を計った\ntiming (名詞): タイミング",
            exampleEn: "The implementation timeline depends on available resource allocation.",
            exampleJp: "実施のタイムラインは、利用可能なリソースの配分に依存します。",
            level: "TOEIC 600-700"
        },
        {
            id: "resource",
            label: "資源",
            group: 2,
            meaning: "resource (名詞): 資源、リソース\nresourceful (形容詞): 工夫に富んだ\nresourcing (名詞): リソース配分",
            exampleEn: "Effective resource management requires timeline monitoring and adjustments.",
            exampleJp: "効果的なリソース管理には、タイムラインのモニタリングと調整が必要です。",
            level: "TOEIC 600-700"
        },

        // Group 3: マーケティング
        {
            id: "marketing",
            label: "マーケティング",
            group: 3,
            meaning: "marketing (名詞): マーケティング\nmarket (動詞): 市場に出す\nmarketed (形容詞): 市場に出された",
            exampleEn: "Our marketing campaign targets specific segments through strategic promotion.",
            exampleJp: "私たちのマーケティングキャンペーンは、戦略的なプロモーションを通じて特定のセグメントをターゲットにしています。",
            level: "TOEIC 600-700"
        },
        {
            id: "segment",
            label: "セグメント",
            group: 3,
            meaning: "segment (名詞): 部分、区分\nsegment (動詞): 分割する\nsegmented (形容詞): 分割された",
            exampleEn: "Market segment analysis guides our promotion and branding strategies.",
            exampleJp: "市場セグメント分析が、プロモーションとブランディング戦略を導きます。",
            level: "TOEIC 600-700"
        },
        {
            id: "promotion",
            label: "宣伝",
            group: 3,
            meaning: "promotion (名詞): 宣伝、昇進\npromote (動詞): 宣伝する、昇進させる\npromoted (形容詞): 宣伝された",
            exampleEn: "Our promotion strategy enhances branding through targeted segment campaigns.",
            exampleJp: "私たちのプロモーション戦略は、ターゲットセグメントのキャンペーンを通じてブランディングを強化します。",
            level: "TOEIC 600-700"
        },
        {
            id: "branding",
            label: "ブランド構築",
            group: 3,
            meaning: "branding (名詞): ブランド構築\nbrand (動詞): ブランド化する\nbranded (形容詞): ブランド化された",
            exampleEn: "Effective branding campaigns enhance our promotional activities.",
            exampleJp: "効果的なブランディングキャンペーンは、プロモーション活動を強化します。",
            level: "TOEIC 600-700"
        },
        {
            id: "campaign",
            label: "キャンペーン",
            group: 3,
            meaning: "campaign (名詞): キャンペーン\ncampaign (動詞): キャンペーンを行う",
            exampleEn: "Our marketing campaign integrates branding across all channels.",
            exampleJp: "私たちのマーケティングキャンペーンは、全チャネルでブランディングを統合します。",
            level: "TOEIC 600-700"
        },

        // Group 4: 財務・会計
        {
            id: "financial",
            label: "財務の",
            group: 4,
            meaning: "financial (形容詞): 財務の、金融の\nfinance (動詞): 資金を提供する\nfinancing (名詞): 資金調達",
            exampleEn: "The financial audit ensures compliance with accounting standards.",
            exampleJp: "財務監査は、会計基準へのコンプライアンスを確保します。",
            level: "TOEIC 600-700"
        },
        {
            id: "audit",
            label: "監査",
            group: 4,
            meaning: "audit (名詞): 監査\naudit (動詞): 監査する\naudited (形容詞): 監査された",
            exampleEn: "The budget audit examines financial compliance in detail.",
            exampleJp: "予算監査は、財務コンプライアンスを詳細に調査します。",
            level: "TOEIC 600-700"
        },
        {
            id: "budget",
            label: "予算",
            group: 4,
            meaning: "budget (名詞): 予算\nbudget (動詞): 予算を立てる\nbudgetary (形容詞): 予算の",
            exampleEn: "The investment budget requires careful audit review.",
            exampleJp: "投資予算は慎重な監査レビューが必要です。",
            level: "TOEIC 600-700"
        },
        {
            id: "investment",
            label: "投資",
            group: 4,
            meaning: "investment (名詞): 投資\ninvest (動詞): 投資する\ninvested (形容詞): 投資された",
            exampleEn: "Our investment decisions ensure compliance with financial regulations.",
            exampleJp: "私たちの投資判断は、財務規制へのコンプライアンスを確保します。",
            level: "TOEIC 600-700"
        },
        {
            id: "compliance",
            label: "遵守",
            group: 4,
            meaning: "compliance (名詞): 遵守、順守\ncomply (動詞): 従う\ncompliant (形容詞): 遵守している",
            exampleEn: "Financial compliance requires regular audit procedures.",
            exampleJp: "財務コンプライアンスには定期的な監査手続きが必要です。",
            level: "TOEIC 600-700"
        },
// Group 5: 人事・組織
{
    id: "personnel",
    label: "人事",
    group: 5,
    meaning: "personnel (名詞): 人事、職員\npersonal (形容詞): 個人の",
    exampleEn: "The personnel department oversees training and evaluation processes.",
    exampleJp: "人事部門は、研修と評価プロセスを監督しています。",
    level: "TOEIC 600-700"
},
{
    id: "training",
    label: "研修",
    group: 5,
    meaning: "training (名詞): 研修、訓練\ntrain (動詞): 訓練する\ntrained (形容詞): 訓練された",
    exampleEn: "Our training program enhances development and performance metrics.",
    exampleJp: "私たちの研修プログラムは、開発とパフォーマンス指標を向上させます。",
    level: "TOEIC 600-700"
},
{
    id: "development",
    label: "開発",
    group: 5,
    meaning: "development (名詞): 開発、発展\ndevelop (動詞): 開発する\ndeveloped (形容詞): 開発された",
    exampleEn: "Professional development influences performance and training outcomes.",
    exampleJp: "専門能力開発は、パフォーマンスと研修成果に影響を与えます。",
    level: "TOEIC 600-700"
},
{
    id: "performance",
    label: "業績",
    group: 5,
    meaning: "performance (名詞): 業績、実績\nperform (動詞): 実行する\nperforming (形容詞): 実行している",
    exampleEn: "Regular performance evaluation guides employee development.",
    exampleJp: "定期的なパフォーマンス評価が従業員の能力開発を導きます。",
    level: "TOEIC 600-700"
},
{
    id: "evaluation",
    label: "評価",
    group: 5,
    meaning: "evaluation (名詞): 評価\nevaluate (動詞): 評価する\nevaluated (形容詞): 評価された",
    exampleEn: "Personnel evaluation includes training assessment criteria.",
    exampleJp: "人事評価には研修評価基準が含まれます。",
    level: "TOEIC 600-700"
},

// Group 6: IT・テクノロジー
{
    id: "technology",
    label: "技術",
    group: 6,
    meaning: "technology (名詞): 技術\ntechnological (形容詞): 技術的な\ntech (名詞): テクノロジー",
    exampleEn: "New technology implementation requires robust security measures.",
    exampleJp: "新技術の実装には、堅牢なセキュリティ対策が必要です。",
    level: "TOEIC 600-700"
},
{
    id: "security",
    label: "セキュリティ",
    group: 6,
    meaning: "security (名詞): セキュリティ、安全保障\nsecure (動詞): 安全を確保する\nsecured (形容詞): 保護された",
    exampleEn: "Our security infrastructure protects critical system components.",
    exampleJp: "私たちのセキュリティインフラは、重要なシステムコンポーネントを保護します。",
    level: "TOEIC 600-700"
},
{
    id: "infrastructure",
    label: "インフラ",
    group: 6,
    meaning: "infrastructure (名詞): インフラ、基盤\ninfrastructural (形容詞): インフラの",
    exampleEn: "The infrastructure integration enhances system optimization.",
    exampleJp: "インフラの統合により、システムの最適化が強化されます。",
    level: "TOEIC 600-700"
},
{
    id: "integration",
    label: "統合",
    group: 6,
    meaning: "integration (名詞): 統合\nintegrate (動詞): 統合する\nintegrated (形容詞): 統合された",
    exampleEn: "System integration requires optimization of all components.",
    exampleJp: "システム統合には、すべてのコンポーネントの最適化が必要です。",
    level: "TOEIC 600-700"
},
{
    id: "optimization",
    label: "最適化",
    group: 6,
    meaning: "optimization (名詞): 最適化\noptimize (動詞): 最適化する\noptimal (形容詞): 最適な",
    exampleEn: "Technology optimization improves infrastructure efficiency.",
    exampleJp: "技術の最適化により、インフラの効率性が向上します。",
    level: "TOEIC 600-700"
},

// Group 7: コミュニケーション
{
    id: "communication",
    label: "伝達",
    group: 7,
    meaning: "communication (名詞): 伝達、通信\ncommunicate (動詞): 伝達する\ncommunicative (形容詞): 話好きな",
    exampleEn: "Effective communication enhances collaboration and negotiation processes.",
    exampleJp: "効果的なコミュニケーションは、協力と交渉のプロセスを強化します。",
    level: "TOEIC 600-700"
},
{
    id: "collaboration",
    label: "協力",
    group: 7,
    meaning: "collaboration (名詞): 協力、共同作業\ncollaborate (動詞): 協力する\ncollaborative (形容詞): 協力的な",
    exampleEn: "Team collaboration improves coordination and communication.",
    exampleJp: "チームの協力は、調整とコミュニケーションを改善します。",
    level: "TOEIC 600-700"
},
{
    id: "coordination",
    label: "調整",
    group: 7,
    meaning: "coordination (名詞): 調整、連携\ncoordinate (動詞): 調整する\ncoordinated (形容詞): 調整された",
    exampleEn: "Project coordination requires consultation and collaboration.",
    exampleJp: "プロジェクトの調整には、協議と協力が必要です。",
    level: "TOEIC 600-700"
},
{
    id: "consultation",
    label: "協議",
    group: 7,
    meaning: "consultation (名詞): 協議、相談\nconsult (動詞): 相談する\nconsultative (形容詞): 助言的な",
    exampleEn: "Regular consultation improves negotiation and coordination.",
    exampleJp: "定期的な協議により、交渉と調整が改善されます。",
    level: "TOEIC 600-700"
},
{
    id: "negotiation",
    label: "交渉",
    group: 7,
    meaning: "negotiation (名詞): 交渉\nnegotiate (動詞): 交渉する\nnegotiable (形容詞): 交渉可能な",
    exampleEn: "Successful negotiation depends on clear communication and consultation.",
    exampleJp: "成功する交渉は、明確なコミュニケーションと協議に依存します。",
    level: "TOEIC 600-700"
},

// Group 8: リスク管理
{
    id: "risk",
    label: "リスク",
    group: 8,
    meaning: "risk (名詞): リスク、危険\nrisky (形容詞): 危険な\nrisk (動詞): 危険を冒す",
    exampleEn: "Risk assessment and contingency planning are essential for mitigation.",
    exampleJp: "リスク評価と不測事態計画は、軽減のために不可欠です。",
    level: "TOEIC 600-700"
},
{
    id: "assessment",
    label: "評価",
    group: 8,
    meaning: "assessment (名詞): 評価、査定\nassess (動詞): 評価する\nassessed (形容詞): 評価された",
    exampleEn: "Risk assessment guides mitigation and prevention strategies.",
    exampleJp: "リスク評価は、軽減と予防戦略を導きます。",
    level: "TOEIC 600-700"
},
{
    id: "mitigation",
    label: "軽減",
    group: 8,
    meaning: "mitigation (名詞): 軽減\nmitigate (動詞): 軽減する\nmitigating (形容詞): 軽減する",
    exampleEn: "Risk mitigation requires prevention and assessment measures.",
    exampleJp: "リスク軽減には、予防と評価措置が必要です。",
    level: "TOEIC 600-700"
},
{
    id: "prevention",
    label: "予防",
    group: 8,
    meaning: "prevention (名詞): 予防\nprevent (動詞): 予防する\npreventive (形容詞): 予防の",
    exampleEn: "Prevention strategies support contingency and mitigation plans.",
    exampleJp: "予防戦略は、不測事態と軽減計画をサポートします。",
    level: "TOEIC 600-700"
},
{
    id: "contingency",
    label: "不測事態",
    group: 8,
    meaning: "contingency (名詞): 不測事態、偶発事象\ncontingent (形容詞): 偶発的な",
    exampleEn: "Contingency planning incorporates risk assessment procedures.",
    exampleJp: "不測事態計画には、リスク評価手順が組み込まれています。",
    level: "TOEIC 600-700"
},

// Group 9: 品質管理
{
    id: "quality",
    label: "品質",
    group: 9,
    meaning: "quality (名詞): 品質、質\nqualitative (形容詞): 質的な\nquality (形容詞): 高品質の",
    exampleEn: "Quality standards ensure consistent satisfaction levels.",
    exampleJp: "品質基準は、一貫した満足度レベルを確保します。",
    level: "TOEIC 600-700"
},
{
    id: "standard",
    label: "基準",
    group: 9,
    meaning: "standard (名詞): 基準、標準\nstandardize (動詞): 標準化する\nstandardized (形容詞): 標準化された",
    exampleEn: "Quality standards require regular inspection procedures.",
    exampleJp: "品質基準には、定期的な検査手順が必要です。",
    level: "TOEIC 600-700"
},
{
    id: "inspection",
    label: "検査",
    group: 9,
    meaning: "inspection (名詞): 検査\ninspect (動詞): 検査する\ninspected (形容詞): 検査された",
    exampleEn: "Regular inspection maintains assurance of quality standards.",
    exampleJp: "定期的な検査により、品質基準の保証が維持されます。",
    level: "TOEIC 600-700"
},
{
    id: "assurance",
    label: "保証",
    group: 9,
    meaning: "assurance (名詞): 保証、確約\nassure (動詞): 保証する\nassured (形容詞): 保証された",
    exampleEn: "Quality assurance improves customer satisfaction levels.",
    exampleJp: "品質保証は、顧客満足度レベルを向上させます。",
    level: "TOEIC 600-700"
},
{
    id: "satisfaction",
    label: "満足",
    group: 9,
    meaning: "satisfaction (名詞): 満足\nsatisfy (動詞): 満足させる\nsatisfactory (形容詞): 満足のいく",
    exampleEn: "Customer satisfaction depends on quality standards maintenance.",
    exampleJp: "顧客満足度は、品質基準の維持に依存します。",
    level: "TOEIC 600-700"
},

// Group 10: サプライチェーン
{
    id: "supply",
    label: "供給",
    group: 10,
    meaning: "supply (名詞): 供給\nsupply (動詞): 供給する\nsupplied (形容詞): 供給された",
    exampleEn: "Supply chain logistics ensure efficient distribution processes.",
    exampleJp: "サプライチェーンの物流は、効率的な配送プロセスを確保します。",
    level: "TOEIC 600-700"
},
{
    id: "logistics",
    label: "物流",
    group: 10,
    meaning: "logistics (名詞): 物流\nlogistical (形容詞): 物流の",
    exampleEn: "Logistics management optimizes distribution and inventory control.",
    exampleJp: "物流管理は、配送と在庫管理を最適化します。",
    level: "TOEIC 600-700"
},
{
    id: "distribution",
    label: "配送",
    group: 10,
    meaning: "distribution (名詞): 配送、分配\ndistribute (動詞): 配送する\ndistributed (形容詞): 配送された",
    exampleEn: "Efficient distribution requires inventory and procurement planning.",
    exampleJp: "効率的な配送には、在庫と調達の計画が必要です。",
    level: "TOEIC 600-700"
},
{
    id: "inventory",
    label: "在庫",
    group: 10,
    meaning: "inventory (名詞): 在庫、棚卸し\ninventory (動詞): 棚卸しする",
    exampleEn: "Inventory management supports procurement and distribution efficiency.",
    exampleJp: "在庫管理は、調達と配送の効率性をサポートします。",
    level: "TOEIC 600-700"
},
{
    id: "procurement",
    label: "調達",
    group: 10,
    meaning: "procurement (名詞): 調達\nprocure (動詞): 調達する\nprocured (形容詞): 調達された",
    exampleEn: "Strategic procurement optimizes supply chain efficiency.",
    exampleJp: "戦略的な調達は、サプライチェーンの効率性を最適化します。",
    level: "TOEIC 600-700"
}
],

links: [
// ビジネス戦略グループ
{
    source: "strategy",
    target: "innovation",
    value: 1
},
{
    source: "innovation",
    target: "growth",
    value: 1
},
{
    source: "growth",
    target: "initiative",
    value: 1
},
{
    source: "competitive",
    target: "strategy",
    value: 1
},
{
    source: "initiative",
    target: "competitive",
    value: 1
},

// プロジェクト管理グループ
{
    source: "implementation",
    target: "schedule",
    value: 1
},
{
    source: "schedule",
    target: "monitoring",
    value: 1
},
{
    source: "monitoring",
    target: "resource",
    value: 1
},
{
    source: "timeline",
    target: "implementation",
    value: 1
},
{
    source: "resource",
    target: "timeline",
    value: 1
},

// マーケティンググループ
{
    source: "marketing",
    target: "segment",
    value: 1
},
{
    source: "segment",
    target: "promotion",
    value: 1
},
{
    source: "promotion",
    target: "branding",
    value: 1
},
{
    source: "branding",
    target: "campaign",
    value: 1
},
{
    source: "campaign",
    target: "marketing",
    value: 1
},

// 財務・会計グループ
{
    source: "financial",
    target: "audit",
    value: 1
},
{
    source: "audit",
    target: "budget",
    value: 1
},
{
    source: "budget",
    target: "investment",
    value: 1
},
{
    source: "investment",
    target: "compliance",
    value: 1
},
{
    source: "compliance",
    target: "financial",
    value: 1
},

// 人事・組織グループ
{
    source: "personnel",
    target: "training",
    value: 1
},
{
    source: "training",
    target: "development",
    value: 1
},
{
    source: "development",
    target: "performance",
    value: 1
},
{
    source: "performance",
    target: "evaluation",
    value: 1
},
{
    source: "evaluation",
    target: "personnel",
    value: 1
},

// IT・テクノロジーグループ
{
    source: "technology",
    target: "security",
    value: 1
},
{
    source: "security",
    target: "infrastructure",
    value: 1
},
{
    source: "infrastructure",
    target: "integration",
    value: 1
},
{
    source: "integration",
    target: "optimization",
    value: 1
},
{
    source: "optimization",
    target: "technology",
    value: 1
},

// コミュニケーショングループ
{
    source: "communication",
    target: "collaboration",
    value: 1
},
{
    source: "collaboration",
    target: "coordination",
    value: 1
},
{
    source: "coordination",
    target: "consultation",
    value: 1
},
{
    source: "consultation",
    target: "negotiation",
    value: 1
},
{
    source: "negotiation",
    target: "communication",
    value: 1
},

// リスク管理グループ
{
    source: "risk",
    target: "assessment",
    value: 1
},
{
    source: "assessment",
    target: "mitigation",
    value: 1
},
{
    source: "mitigation",
    target: "prevention",
    value: 1
},
{
    source: "prevention",
    target: "contingency",
    value: 1
},
{
    source: "contingency",
    target: "risk",
    value: 1
},

// 品質管理グループ
{
    source: "quality",
    target: "standard",
    value: 1
},
{
    source: "standard",
    target: "inspection",
    value: 1
},
{
    source: "inspection",
    target: "assurance",
    value: 1
},
{
    source: "assurance",
    target: "satisfaction",
    value: 1
},
{
    source: "satisfaction",
    target: "quality",
    value: 1
},

// サプライチェーングループ
{
    source: "supply",
    target: "logistics",
    value: 1
},
{
    source: "logistics",
    target: "distribution",
    value: 1
},
{
    source: "distribution",
    target: "inventory",
    value: 1
},
{
    source: "inventory",
    target: "procurement",
    value: 1
},
{
    source: "procurement",
    target: "supply",
    value: 1
}
]
};


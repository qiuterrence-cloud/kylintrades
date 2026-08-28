/* Kylin Trading — nav, language, form */
(function () {
  "use strict";

  var STORAGE_KEY = "kylin-lang";

  var I18N = {
    en: {
      "meta.home": "Kylin Trading — Health products, traded with care",
      "meta.products": "Product range — Kylin Trading",
      "meta.about": "About — Kylin Trading",
      "meta.quality": "Quality & compliance — Kylin Trading",
      "meta.contact": "Wholesale enquiry — Kylin Trading",
      "meta.privacy": "Privacy policy — Kylin Trading",
      "meta.terms": "Website terms — Kylin Trading",
      "meta.disclaimer": "Health & product disclaimer — Kylin Trading",
      "meta.copyright": "Copyright — Kylin Trading",

      "nav.home": "Home",
      "nav.products": "Products",
      "nav.about": "About",
      "nav.quality": "Quality",
      "nav.contact": "Contact",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",
      "nav.disclaimer": "Disclaimer",
      "nav.copyright": "Copyright",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "nav.skip": "Skip to content",
      "nav.legal": "Legal",

      "footer.explore": "Explore",
      "footer.contact": "Contact",
      "footer.tagline": "An Australian trading partner for vitamins, native botanicals, honey, and wellness ingredients.",
      "footer.location": "Sydney, NSW 2118, Australia",
      "footer.rights": "© 2026 Kylin Trading. All rights reserved.",
      "footer.proposed": "Enquiry: terrence@kylintrades.com.au. Company and ABN details above are as recorded on the Australian Business Register.",
      "footer.photos": "Photographs: Unsplash and Pexels contributors. Full credits on the Copyright page.",

      "home.eyebrow": "Kylin Trading · Sydney",
      "home.title": "Health products, traded with care.",
      "home.lead": "An Australian wholesale partner for vitamins, native botanicals, honey, and wellness ingredients — for distributors, retailers, and brands who value documentation as much as supply.",
      "home.cta.range": "View the range",
      "home.cta.partner": "Partner with us",
      "home.trust.gmp": "GMP manufacturing partners",
      "home.trust.docs": "Export documentation",
      "home.trust.sydney": "Sydney-based",
      "home.cats.eyebrow": "Selected categories",
      "home.cats.title": "What we trade",
      "home.cats.lead": "Australian-familiar wellness categories, plus the buyer staples. Specifications, pack formats, and private-label options are discussed by enquiry — not listed as a public catalogue.",
      "home.cats.all": "See the full range",
      "home.why.eyebrow": "Why Kylin",
      "home.why.title": "A quiet standard of care.",
      "home.why.1.title": "A name of care",
      "home.why.1.body": "The kylin (qilin) has long been associated with good fortune and protection. We keep the symbolism light: care in what we source, and care in how we trade.",
      "home.why.2.title": "Australia, and a trade bridge",
      "home.why.2.body": "We work from Sydney, sourcing from Australian agriculture and native botanicals, and trading with partners in China and beyond. Organic and traceable supply where the files support it. Cross-border, locally accountable.",
      "home.why.3.title": "Built for the long term",
      "home.why.3.body": "Wholesale relationships, not catalogue clicks. Specifications, batches, and continuity matter more to us than a storefront.",
      "home.band.title": "Ready to talk supply?",
      "home.band.lead": "Tell us what you need — wholesale, private label, or a category you do not see listed. We will respond as a trading partner, not a web shop.",
      "home.band.cta": "Start an enquiry",
      "photo.coast": "Southern coast, Victoria — Unsplash",
      "photo.farm": "Canola country, Victoria — Unsplash",
      "photo.eucalyptus": "Mountain ash forest, south-eastern Australia — David Clode / Unsplash",
      "photo.wattle": "Golden wattle — Alex Quezada / Pexels",
      "photo.organic": "Organic produce — Unsplash",
      "photo.honey": "Honeybees on comb — Unsplash",

      "cat.vitamins.title": "Vitamins & minerals",
      "cat.vitamins.body": "Core vitamin and mineral categories for retail and distribution. Compounds, formats, and pack sizes are confirmed by enquiry.",
      "cat.botanicals.title": "Tea tree & botanicals",
      "cat.botanicals.body": "Australian tea tree (Melaleuca), eucalyptus, and lemon myrtle — oils, extracts, and finished goods sourced for wholesale. Origin statements and pack formats on request.",
      "cat.honey.title": "Honey & bee products",
      "cat.honey.body": "Active and medicinal-direction honeys from Australian Leptospermum (including manuka-type) and known specialties such as Tasmanian leatherwood. Traded by specification, not as a retail jar list.",
      "cat.natives.title": "Native superfruits",
      "cat.natives.body": "Kakadu plum (Gubinge) and lemon myrtle among Australia’s better-known native ingredients — powders, extracts, and blends. Specs on request. We do not claim a community partnership we do not have.",
      "cat.macadamia.title": "Macadamia & oils",
      "cat.macadamia.body": "Macadamia — a native Australian nut — as oil and related lipid ingredients, alongside other plant oils discussed by enquiry.",
      "cat.omega.title": "Southern-waters omega",
      "cat.omega.body": "Fish oil and related omega categories associated with southern-ocean fisheries, plus algal oils where specified. Batch files and quality markers are part of the supply conversation — we do not invent a house brand here.",
      "cat.request": "Request specs",
      "cat.view": "View category",

      "products.eyebrow": "For buyers",
      "products.title": "A considered range.",
      "products.lead": "We trade in categories buyers already recognise from Australian wellness — tea tree, honey, native fruits, macadamia — together with vitamins and omega as staples. Not a public catalogue of SKUs. Formulations, pack sizes, minimum order quantities, and private-label options are discussed by enquiry.",
      "products.note.title": "How buying works",
      "products.note.body": "This site does not list prices, SKUs, or product claims. Partners may request specifications, certificates of analysis, and manufacturing documentation. Private label and OEM are capabilities to enquire about, not an online configurator.",
      "products.cta": "Enquire about supply",

      "about.eyebrow": "The company",
      "about.title": "Named for care. Based in Sydney.",
      "about.lead": "Kylin Trading Pty Ltd is an Australian B2B company, registered in 2024, focused on health supplements and wellness ingredients. We connect Australian agricultural origin with distributors, retailers, and brands — a China–Australia trade bridge, documented at each step.",
      "about.name.title": "The name",
      "about.name.body": "Kylin is the English rendering of qilin — a traditional emblem of good fortune and care. We do not trade on mysticism. The name is a reminder to handle health products with respect: sourced carefully, documented clearly, delivered as agreed.",
      "about.origin.title": "Australian origin",
      "about.origin.body": "Australia is an agricultural origin, not only a shipping flag. We source in categories buyers already know: tea tree, eucalyptus, macadamia, active honey, and native fruits such as Kakadu plum (Gubinge). These plants have long been known to Aboriginal and Torres Strait Islander peoples; we trade them as documented agricultural goods, without claiming a community partnership we do not have.",
      "about.work.title": "How we work",
      "about.work.body": "Cross-border supply with a relationship at the centre. Organic and traceable lots where the files support the claim. We prefer fewer, longer partnerships over transactional bursts. Conversations start with what you need to sell — category, format, documentation — not with a shopping cart.",
      "about.place.title": "Where we are",
      "about.place.body": "Sydney, NSW 2118, Australia. KYLIN TRADING PTY LTD, ABN 71 674 493 219, ACN 674 493 219. A street address and named contacts will be published here once confirmed. Until then, please use the wholesale enquiry form.",
      "about.quote": "Care in what we source. Care in how we trade.",
      "about.quote.cite": "Kylin Trading",
      "about.note": "Founding year follows the company’s ABN active-from date (29 January 2024). A street address, live email, and leadership names will be added by the owner — they are not invented here.",

      "quality.eyebrow": "Quality & compliance",
      "quality.title": "Sourced with documents in hand.",
      "quality.lead": "We work with GMP manufacturing partners and prepare the paperwork that serious buyers expect. This website does not make therapeutic claims, and we do not present products as TGA-listed unless that status is confirmed for a specific item.",
      "quality.s1.title": "Source",
      "quality.s1.body": "Match the category to manufacturing partners who can describe their quality system and supply supporting statements.",
      "quality.s2.title": "Specify",
      "quality.s2.body": "Agree format, potency range, packing, and the document set before supply is arranged.",
      "quality.s3.title": "Document",
      "quality.s3.body": "Specifications, certificates of analysis, and related batch files are prepared for partner review.",
      "quality.s4.title": "Deliver",
      "quality.s4.body": "Export and import paperwork is organised as agreed, so handover is orderly rather than improvised.",
      "quality.docs.title": "Available on request",
      "quality.docs.lead": "Typical partner files — confirmed per product and batch, not assumed from this page.",
      "quality.d1.k": "Spec sheets",
      "quality.d1.v": "Composition, format, and packing outlines for the item under discussion.",
      "quality.d2.k": "Certificates of analysis",
      "quality.d2.v": "Batch-level COA from the manufacturing partner, as available.",
      "quality.d3.k": "Manufacturing statements",
      "quality.d3.v": "GMP or equivalent system statements from the producing site.",
      "quality.d4.k": "Import readiness",
      "quality.d4.v": "Support for Australian complementary-medicine and import expectations, item by item.",
      "quality.claims.title": "What this site will not do",
      "quality.claims.body": "We will not say a product cures, treats, or is “clinically proven” here. We will not imply TGA listing without confirmation. Health products deserve a quieter register: files, specifications, and honest limits.",

      "contact.eyebrow": "Wholesale & partnerships",
      "contact.title": "Start a conversation.",
      "contact.lead": "For distribution, wholesale supply, or private-label / OEM enquiry. Messages go to terrence@kylintrades.com.au.",
      "contact.demo": "",
      "contact.company": "Company",
      "contact.name": "Your name",
      "contact.email": "Email",
      "contact.country": "Country",
      "contact.interest": "Interest",
      "contact.interest.placeholder": "Please select",
      "contact.interest.wholesale": "Wholesale supply",
      "contact.interest.private": "Private label / OEM",
      "contact.interest.distribution": "Distribution partnership",
      "contact.interest.other": "Other",
      "contact.message": "Message",
      "contact.submit": "Send enquiry",
      "contact.success.title": "Thank you.",
      "contact.success.body": "Your mail app should open with the enquiry ready to send to terrence@kylintrades.com.au. If it does not, email us directly.",
      "contact.success.again": "Send another enquiry",
      "contact.loc.title": "Location",
      "contact.loc.body": "Sydney, NSW 2118, Australia",
      "contact.email.title": "Email us",
      "contact.email.body": "terrence@kylintrades.com.au",
      "contact.email.note": "Wholesale enquiries: terrence@kylintrades.com.au",
      "contact.wechat.title": "WeChat",
      "contact.wechat.body": "Available on request. A QR code will be published once an official account is confirmed — none is shown here.",
      "err.required": "This field is required.",
      "err.email": "Please enter a valid email address.",
      "err.interest": "Please choose an interest.",
      "contact.pending": "",

      "legal.draft": "Working draft — to be confirmed with the company’s adviser. Last updated 14 August 2026.",
      "legal.entity": "KYLIN TRADING PTY LTD (ABN 71 674 493 219, ACN 674 493 219) trades as Kylin Trading.",

      "privacy.eyebrow": "Privacy",
      "privacy.title": "Privacy policy",
      "privacy.lead": "How we handle personal information, in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
      "privacy.who.title": "Who we are",
      "privacy.who.body": "KYLIN TRADING PTY LTD (ABN 71 674 493 219, ACN 674 493 219) trades as Kylin Trading. We are an Australian private company. Main business location: NSW 2118 (Sydney). A street address will be published when confirmed.",
      "privacy.collect.title": "What we collect",
      "privacy.collect.body": "If you use the wholesale enquiry form, we collect the details you enter: your name, company, email address, country, the nature of your interest, and your message. We do not run a customer login or a public catalogue account.",
      "privacy.why.title": "Why we collect it",
      "privacy.why.body": "We collect that information to respond to wholesale, distribution, or private-label enquiries, to keep a record of the conversation, and to meet ordinary business and legal record-keeping needs. We do not use it for consumer marketing lists.",
      "privacy.store.title": "Storage",
      "privacy.store.body": "Enquiry records are stored in ordinary business email and files, with access limited to people who need them to reply.",
      "privacy.sale.title": "We do not sell personal information",
      "privacy.sale.body": "We do not sell personal information. We do not trade mailing lists.",
      "privacy.overseas.title": "Overseas disclosure",
      "privacy.overseas.body": "We trade between Australia and partners overseas, including in China. Personal information in an enquiry may be accessed or stored outside Australia when we use email, cloud tools, or when a colleague or manufacturing partner outside Australia needs it to respond. Where that happens, we take reasonable steps consistent with Australian Privacy Principle 8. We cannot guarantee that overseas laws will be identical to Australia’s.",
      "privacy.cookies.title": "Cookies and local storage",
      "privacy.cookies.body": "This site uses localStorage only to remember your language preference (English or 简体中文). We do not set advertising cookies, and we do not use analytics pixels on these pages.",
      "privacy.access.title": "Access and correction",
      "privacy.access.body": "You may ask to access or correct personal information we hold about you. Use the enquiry form or the placeholder email below. We will respond as the Privacy Act requires, subject to any lawful exception.",
      "privacy.complain.title": "Complaints",
      "privacy.complain.body": "If you have a privacy complaint, please contact us first so we can try to resolve it. If you are not satisfied, you may contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.",
      "privacy.contact.title": "Contact",
      "privacy.contact.body": "KYLIN TRADING PTY LTD, Sydney, NSW 2118, Australia. Email: terrence@kylintrades.com.au.",

      "terms.eyebrow": "Terms of use",
      "terms.title": "Website terms",
      "terms.lead": "These terms apply to your use of the Kylin Trading website. They are not a contract of sale.",
      "terms.site.title": "This website",
      "terms.site.body": "The site is published by KYLIN TRADING PTY LTD (ABN 71 674 493 219) for trade information. Content is general and may change without notice.",
      "terms.enquiry.title": "Wholesale enquiries",
      "terms.enquiry.body": "Submitting the enquiry form is not an offer, acceptance, or a contract of sale. Prices, specifications, pack sizes, and minimum order quantities are confirmed only in a written quotation. We may decline an enquiry.",
      "terms.use.title": "Using the site",
      "terms.use.body": "You may view and share pages for ordinary business purposes. You may not scrape the site, copy it in bulk, or present our content as your own storefront.",
      "terms.liability.title": "Liability",
      "terms.liability.body": "The site is provided as a trade introduction. To the extent Australian Consumer Law and other applicable law allow, we are not liable for loss arising from reliance on website copy alone. Nothing here excludes rights you cannot contract out of.",
      "terms.law.title": "Governing law",
      "terms.law.body": "These terms are governed by the laws of New South Wales, Australia. The courts of New South Wales have non-exclusive jurisdiction.",
      "terms.ip.title": "Intellectual property",
      "terms.ip.body": "See our Copyright page for the logo, photographs, and third-party names.",
      "terms.change.title": "Changes",
      "terms.change.body": "We may update these terms by publishing a new version on this page.",

      "disc.eyebrow": "Health & product disclaimer",
      "disc.title": "A quiet register.",
      "disc.lead": "This website is for wholesale trade information. It is not medical advice, and it is not a catalogue of listed medicines.",
      "disc.trade.title": "Trade information only",
      "disc.trade.body": "Copy describes categories and origins we source and trade. It is written for distributors, retailers, and brands — not for consumers seeking treatment.",
      "disc.medical.title": "Not medical advice",
      "disc.medical.body": "Nothing on this site is medical, dietary, or therapeutic advice. Complementary medicines and food supplements are not a substitute for advice from a registered health practitioner.",
      "disc.tga.title": "TGA listing",
      "disc.tga.body": "We do not claim that any product is listed or registered with the Therapeutic Goods Administration unless a specific item is identified and that status is confirmed. This site does not display ARTG numbers.",
      "disc.claims.title": "No therapeutic claims",
      "disc.claims.body": "We do not say that a product cures, treats, prevents, or is “clinically proven”. Health products deserve specifications and files, not slogans.",
      "disc.images.title": "Images",
      "disc.images.body": "Photographs are illustrative of Australian agriculture, coast, and botanicals. They are not pictures of our warehouse, a particular batch, or a certified farm we claim to own.",
      "disc.brands.title": "Other brands",
      "disc.brands.body": "We are not a licensed distributor of consumer brands such as Blackmores or Swisse, and we do not use their logos. If another trader’s name appears, it is theirs.",

      "copy.eyebrow": "Copyright",
      "copy.title": "Copyright and credits",
      "copy.lead": "© 2026 KYLIN TRADING PTY LTD. All rights reserved.",
      "copy.site.title": "Site content",
      "copy.site.body": "Text, layout, and the Kylin Trading name and logo are owned by KYLIN TRADING PTY LTD unless another credit says otherwise. You may not copy the lockup or reuse our copy as your own storefront.",
      "copy.photos.title": "Photographs",
      "copy.photos.body": "Location photographs are used under the Unsplash or Pexels licences. They remain the photographers’ work. Credits:",
      "copy.p1": "Canola, Mallee country, Victoria — Unsplash (unsplash.com/photos/RsunteO43pw).",
      "copy.p2": "Eucalyptus / mountain ash forest, south-eastern Australia — David Clode / Unsplash (unsplash.com/photos/seM6i8gJ7d0).",
      "copy.p3": "Southern coast, Victoria — Unsplash (unsplash.com/photos/eQ9UXm56his).",
      "copy.p4": "Leafy greens / organic produce — Unsplash (unsplash.com/photos/HeqXGxnsnX4).",
      "copy.p5": "Honeybees on honeycomb — Unsplash (unsplash.com/photos/Mkk_9x42Sbg).",
      "copy.p6": "Golden wattle — Alex Quezada / Pexels (pexels.com/photo/20621480/).",
      "copy.marks.title": "Trade marks",
      "copy.marks.body": "Product or company names of others, if mentioned, are their trade marks. Mention is not affiliation, sponsorship, or a distribution appointment. We do not claim Blackmores, Swisse, or any other consumer brand."
    },
    zh: {
      "meta.home": "麒麟贸易 Kylin Trading — 健康产品，审慎交易",
      "meta.products": "产品系列 — 麒麟贸易",
      "meta.about": "关于我们 — 麒麟贸易",
      "meta.quality": "品质与合规 — 麒麟贸易",
      "meta.contact": "合作咨询 — 麒麟贸易",
      "meta.privacy": "隐私政策 — 麒麟贸易",
      "meta.terms": "网站使用条款 — 麒麟贸易",
      "meta.disclaimer": "健康与产品免责声明 — 麒麟贸易",
      "meta.copyright": "版权声明 — 麒麟贸易",

      "nav.home": "首页",
      "nav.products": "产品系列",
      "nav.about": "关于我们",
      "nav.quality": "品质与合规",
      "nav.contact": "合作咨询",
      "nav.privacy": "隐私政策",
      "nav.terms": "使用条款",
      "nav.disclaimer": "免责声明",
      "nav.copyright": "版权声明",
      "nav.open": "打开菜单",
      "nav.close": "关闭菜单",
      "nav.skip": "跳到正文",
      "nav.legal": "法律信息",

      "footer.explore": "浏览",
      "footer.contact": "联络",
      "footer.tagline": "澳大利亚贸易伙伴，专注维生素、原生植物原料、蜂蜜与健康原料。",
      "footer.location": "澳大利亚 · 悉尼 NSW 2118",
      "footer.rights": "© 2026 麒麟贸易 Kylin Trading. 保留所有权利。",
      "footer.proposed": "询盘邮箱：terrence@kylintrades.com.au。上方公司名称与 ABN 以澳大利亚商业登记册（ABR）记载为准。",
      "footer.photos": "摄影：Unsplash 与 Pexels 贡献者。完整署名见版权声明页。",

      "home.eyebrow": "麒麟贸易 · 悉尼",
      "home.title": "健康产品，审慎交易。",
      "home.lead": "澳大利亚批发贸易伙伴，专注维生素、原生植物原料、蜂蜜与健康原料，服务同样重视质量文件与稳定供货的经销商、零售商与品牌。",
      "home.cta.range": "查看品类",
      "home.cta.partner": "洽谈合作",
      "home.trust.gmp": "GMP 生产伙伴",
      "home.trust.docs": "出口文件",
      "home.trust.sydney": "立足悉尼",
      "home.cats.eyebrow": "部分品类",
      "home.cats.title": "我们交易的方向",
      "home.cats.lead": "面向批发伙伴的澳洲常见健康品类，以及采购方日常所需的基础品项。规格、包装与代工贴牌均通过询盘沟通，本站不作公开目录陈列。",
      "home.cats.all": "查看全部品类",
      "home.why.eyebrow": "为何选择麒麟",
      "home.why.title": "以安静的标准，对待供货。",
      "home.why.1.title": "审慎之名",
      "home.why.1.body": "麒麟在传统文化中象征祥瑞与守护。我们取其珍视与慎重之意，而非铺陈神话：选品用心，交易有据。",
      "home.why.2.title": "澳洲产地，中澳桥梁",
      "home.why.2.body": "公司立足悉尼，从澳大利亚农业与原生植物原料寻源，并与中国及其他市场的伙伴开展贸易。有文件支持时，可提供有机与可追溯供货。跨境供应，本地负责。",
      "home.why.3.title": "着眼长期",
      "home.why.3.body": "我们做批发关系，而非货架式网店。规格、批次与连续性，比店面更重要。",
      "home.band.title": "准备谈供货了吗？",
      "home.band.lead": "告知您的需求——批发、代工贴牌，或尚未列出的品类。我们以贸易伙伴的方式回复，而不是网店客服。",
      "home.band.cta": "提交询盘",
      "photo.coast": "维多利亚州南岸 — Unsplash",
      "photo.farm": "维多利亚州油菜花田 — Unsplash",
      "photo.eucalyptus": "澳大利亚东南部山灰桉林 — David Clode / Unsplash",
      "photo.wattle": "金合欢（金蜡木）— Alex Quezada / Pexels",
      "photo.organic": "有机蔬菜 — Unsplash",
      "photo.honey": "蜂箱巢脾 — Unsplash",

      "cat.vitamins.title": "维生素与矿物质",
      "cat.vitamins.body": "面向零售与分销的核心维生素、矿物质品类。具体化合物、剂型与包装规格以询盘确认为准。",
      "cat.botanicals.title": "茶树与植物精油",
      "cat.botanicals.body": "澳大利亚茶树（互叶白千层 Melaleuca）、桉叶与柠檬香桃木——精油、提取物及成品，面向批发。产地说明与包装形式应要求提供。",
      "cat.honey.title": "蜂蜜与蜂产品",
      "cat.honey.body": "澳大利亚白千层属（Leptospermum）活性蜜（含麦卢卡类型）以及塔斯马尼亚皮革木蜜等知名品种。按规格贸易，本站不陈列零售瓶装目录。",
      "cat.natives.title": "原生超级水果",
      "cat.natives.body": "卡卡杜李（Gubinge）与柠檬香桃木等较为人知的澳洲原生原料——粉剂、提取物与复配。规格应询盘提供。我们尊重原住民对这些植物的长久认知，不虚构与某社群的合作关系。",
      "cat.macadamia.title": "澳洲坚果与油脂",
      "cat.macadamia.body": "澳洲坚果为澳洲原生坚果，可提供油脂及相关脂质原料；其他植物油亦可询盘。",
      "cat.omega.title": "南洋欧米伽",
      "cat.omega.body": "与南大洋渔业相关的鱼油及欧米伽品类，以及按规格提供的藻油。批次文件与质量指标随供货沟通提供——此处不自创品牌名称。",
      "cat.request": "索取规格",
      "cat.view": "了解品类",

      "products.eyebrow": "致采购方",
      "products.title": "审慎的产品方向。",
      "products.lead": "我们按采购方已经熟悉的澳洲健康品类开展贸易——茶树、蜂蜜、原生水果、澳洲坚果——并以维生素与欧米伽作为常规品项。并非公开 SKU 目录。配方、规格、起订量与代工贴牌，均通过询盘沟通。",
      "products.note.title": "如何采购",
      "products.note.body": "本站不列价格、货号或产品功效声明。合作方可索取规格书、检验报告（COA）及生产相关文件。代工贴牌（OEM / private label）为可询盘的能力，而非线上配置器。",
      "products.cta": "咨询供货",

      "about.eyebrow": "公司",
      "about.title": "取名于审慎，立足悉尼。",
      "about.lead": "麒麟贸易有限公司（Kylin Trading Pty Ltd）是一家澳大利亚 B2B 公司，于 2024 年登记，专注健康补充剂与健康原料。我们连接澳大利亚农业产地与经销商、零售商及品牌——中澳贸易桥梁，每一步有据可查。",
      "about.name.title": "关于名称",
      "about.name.body": "Kylin 即麒麟的英文写法——传统上象征祥瑞与珍视。我们不以神秘叙事做生意。这个名字提醒我们：健康产品须被郑重对待——选品用心，文件清楚，交付如约。",
      "about.origin.title": "澳洲产地",
      "about.origin.body": "澳大利亚不仅是船籍，更是农业产地。我们在采购方已经认识的品类中寻源：茶树、桉叶、澳洲坚果、活性蜂蜜，以及卡卡杜李（Gubinge）等原生水果。这些植物长久以来为原住民所知；我们将其作为有据可查的农产原料贸易，不虚构与某社群的合作关系。",
      "about.work.title": "工作方式",
      "about.work.body": "以关系为核心的跨境供货。有文件支持时，可提供有机与可追溯批次。我们宁可伙伴少而长久，也不做一锤子买卖。沟通从您需要销售的内容开始——品类、剂型、文件——而不是购物车。",
      "about.place.title": "所在地",
      "about.place.body": "澳大利亚悉尼 NSW 2118。KYLIN TRADING PTY LTD，ABN 71 674 493 219，ACN 674 493 219。街道地址与具名联系人将在确认后刊出。在此之前，请使用批发询盘表。",
      "about.quote": "选品用心，交易有据。",
      "about.quote.cite": "麒麟贸易",
      "about.note": "成立年份以公司 ABN 生效日（2024 年 1 月 29 日）为准。街道地址、正式邮箱与负责人姓名将由所有者补入——此处不予虚构。",

      "quality.eyebrow": "品质与合规",
      "quality.title": "文件在手，再谈供货。",
      "quality.lead": "我们与 GMP 生产伙伴合作，并准备专业采购所需的批次文件。本网站不对产品作治疗声明；亦不会在未核实的情况下宣称产品已在 TGA 登记。",
      "quality.s1.title": "寻源",
      "quality.s1.body": "按品类选择能够说明其质量体系、并提供支持文件的生产伙伴。",
      "quality.s2.title": "规格",
      "quality.s2.body": "在安排供货前，明确剂型、含量范围、包装与文件范围。",
      "quality.s3.title": "文件",
      "quality.s3.body": "规格书、检验报告（COA）及相关批次资料，供合作方审阅。",
      "quality.s4.title": "交付",
      "quality.s4.body": "按约定整理出口与进口所需资料，使交接有序，而非临时拼凑。",
      "quality.docs.title": "可应要求提供",
      "quality.docs.lead": "常见合作文件——以具体产品与批次确认为准，不能从本页直接推定。",
      "quality.d1.k": "规格书",
      "quality.d1.v": "所议产品的成分、剂型与包装说明。",
      "quality.d2.k": "检验报告",
      "quality.d2.v": "生产伙伴提供的批次 COA（以实际可提供者为准）。",
      "quality.d3.k": "生产声明",
      "quality.d3.v": "生产场地的 GMP 或同等体系说明。",
      "quality.d4.k": "进口准备",
      "quality.d4.v": "对照澳大利亚补充药品与进口的常见要求，逐项协助整理。",
      "quality.claims.title": "本站不会做的事",
      "quality.claims.body": "我们不会在此宣称产品能治愈、治疗或“临床验证”。未经确认，不会暗示 TGA 登记。健康产品需要更安静的表述：文件、规格，以及诚实的边界。",

      "contact.eyebrow": "批发与合作",
      "contact.title": "开始沟通。",
      "contact.lead": "批发供货、渠道分销，或代工贴牌（OEM / private label）需求，欢迎来询。询盘发至 terrence@kylintrades.com.au。",
      "contact.demo": "",
      "contact.company": "公司",
      "contact.name": "姓名",
      "contact.email": "邮箱",
      "contact.country": "国家 / 地区",
      "contact.interest": "意向",
      "contact.interest.placeholder": "请选择",
      "contact.interest.wholesale": "批发供货",
      "contact.interest.private": "代工贴牌 / OEM",
      "contact.interest.distribution": "分销合作",
      "contact.interest.other": "其他",
      "contact.message": "留言",
      "contact.submit": "发送询盘",
      "contact.success.title": "谢谢。",
      "contact.success.body": "系统会打开邮件，发至 terrence@kylintrades.com.au。如未弹出，请直接发信到该邮箱。",
      "contact.success.again": "再写一封",
      "contact.loc.title": "地点",
      "contact.loc.body": "澳大利亚 · 悉尼 NSW 2118",
      "contact.email.title": "电邮",
      "contact.email.body": "terrence@kylintrades.com.au",
      "contact.email.note": "占位地址——域名与邮箱待确认。特此标明，以免被误认为有效邮箱。",
      "contact.wechat.title": "微信",
      "contact.wechat.body": "可应要求提供。官方账号确认后将发布二维码——此处暂不展示。",
      "err.required": "此项为必填。",
      "err.email": "请输入有效的电子邮箱。",
      "err.interest": "请选择意向。",
      "contact.pending": "",

      "legal.draft": "工作草稿——待公司顾问确认。最近更新日期：2026 年 8 月 14 日。",
      "legal.entity": "KYLIN TRADING PTY LTD（ABN 71 674 493 219，ACN 674 493 219），经营名称 Kylin Trading（麒麟贸易）。",

      "privacy.eyebrow": "隐私",
      "privacy.title": "隐私政策",
      "privacy.lead": "我们如何处理个人信息，对照《1988 年隐私法》（联邦）及澳大利亚隐私原则（APPs）。",
      "privacy.who.title": "我们是谁",
      "privacy.who.body": "KYLIN TRADING PTY LTD（ABN 71 674 493 219，ACN 674 493 219）以 Kylin Trading（麒麟贸易）名义经营。本公司为澳大利亚私人公司。主要经营地：NSW 2118（悉尼）。街道地址确认后刊出。",
      "privacy.collect.title": "我们收集哪些信息",
      "privacy.collect.body": "若您使用批发询盘表，我们收集您填写的信息：姓名、公司、电子邮箱、国家 / 地区、意向类型及留言。本站不设消费者登录或公开商品账户。",
      "privacy.why.title": "为何收集",
      "privacy.why.body": "该等信息用于回复批发、分销或代工贴牌询盘，保存沟通记录，并满足通常的商务与法定留存需要。我们不会将其用于面向消费者的营销名单。",
      "privacy.store.title": "存储",
      "privacy.store.body": "询盘记录保存在日常商务邮件与档案中，仅供需要回复的人员查阅。",
      "privacy.sale.title": "我们不出卖个人信息",
      "privacy.sale.body": "我们不出卖个人信息，也不买卖邮件名单。",
      "privacy.overseas.title": "境外披露",
      "privacy.overseas.body": "我们在澳大利亚与境外伙伴（包括中国）之间开展贸易。询盘中的个人信息可能在使用电子邮件、云端工具时，或境外同事、生产伙伴为回复询盘之需要时，于澳大利亚境外被访问或存储。于此情形，我们依照澳大利亚隐私原则第 8 条采取合理步骤。我们不能保证境外法律与澳大利亚完全一致。",
      "privacy.cookies.title": "Cookie 与本地存储",
      "privacy.cookies.body": "本站仅使用 localStorage 记住您的语言偏好（English 或简体中文）。我们不设置广告 Cookie，本站页面亦不使用统计分析像素。",
      "privacy.access.title": "查阅与更正",
      "privacy.access.body": "您可要求查阅或更正我们持有的、与您有关的个人信息。请使用询盘表或下方占位邮箱提出。我们将依《隐私法》规定回复，法律另有例外的除外。",
      "privacy.complain.title": "投诉",
      "privacy.complain.body": "如对隐私处理有投诉，请先与我们联系，以便协商解决。若仍不满意，可向澳大利亚信息专员办公室（OAIC）投诉，网址 oaic.gov.au。",
      "privacy.contact.title": "联络",
      "privacy.contact.body": "KYLIN TRADING PTY LTD，澳大利亚悉尼 NSW 2118。电子邮箱：terrence@kylintrades.com.au。",

      "terms.eyebrow": "使用条款",
      "terms.title": "网站条款",
      "terms.lead": "本条款适用于您使用麒麟贸易网站。其本身不构成买卖合同。",
      "terms.site.title": "本网站",
      "terms.site.body": "本站由 KYLIN TRADING PTY LTD（ABN 71 674 493 219）发布，供贸易信息参考。内容为一般性介绍，可能不经另行通知而更新。",
      "terms.enquiry.title": "批发询盘",
      "terms.enquiry.body": "提交询盘表并不构成要约、承诺或买卖合同。价格、规格、包装与起订量仅以书面报价确认为准。我们可拒绝询盘。",
      "terms.use.title": "使用方式",
      "terms.use.body": "您可为通常商务目的浏览与分享页面。不得对网站进行批量抓取或整体复制，也不得将本站内容作为您自己的店面对外展示。",
      "terms.liability.title": "责任",
      "terms.liability.body": "本站作为贸易介绍而提供。在澳大利亚消费者法及其他适用法律允许的范围内，我们不对仅依据网站文案而产生的损失承担责任。依法不得排除的权利，不因本条款而排除。",
      "terms.law.title": "适用法律",
      "terms.law.body": "本条款受澳大利亚新南威尔士州法律管辖。新南威尔士州法院拥有非排他管辖权。",
      "terms.ip.title": "知识产权",
      "terms.ip.body": "标识、摄影与第三方名称，请见版权声明页。",
      "terms.change.title": "变更",
      "terms.change.body": "我们可通过在本页发布新版本的方式更新本条款。",

      "disc.eyebrow": "健康与产品免责声明",
      "disc.title": "以安静的表述，说明边界。",
      "disc.lead": "本网站提供批发贸易信息，并非医疗建议，亦非已登记药品目录。",
      "disc.trade.title": "仅供贸易参考",
      "disc.trade.body": "文案说明我们寻源与贸易的品类及产地，面向经销商、零售商与品牌，而非寻求治疗的消费者。",
      "disc.medical.title": "并非医疗建议",
      "disc.medical.body": "本站内容不构成医疗、膳食或治疗建议。补充药品与食品补充剂不能替代注册健康从业者的意见。",
      "disc.tga.title": "TGA 登记",
      "disc.tga.body": "除非针对具体产品并经核实，我们不会宣称任何产品已在治疗商品管理局（TGA）登记或注册。本站不展示 ARTG 编号。",
      "disc.claims.title": "不作治疗声明",
      "disc.claims.body": "我们不会宣称产品能够治愈、治疗、预防或“临床验证”。健康产品需要规格与文件，而不是口号。",
      "disc.images.title": "图片",
      "disc.images.body": "照片用于示意澳大利亚农业、海岸与植物原料，并非本公司仓库、某一批次或我们声称拥有的认证农场实拍。",
      "disc.brands.title": "其他品牌",
      "disc.brands.body": "我们不是 Blackmores、Swisse 等消费品牌的授权经销商，也不使用其标识。若提及他方名称，该等名称归其权利人所有。",

      "copy.eyebrow": "版权",
      "copy.title": "版权与署名",
      "copy.lead": "© 2026 KYLIN TRADING PTY LTD。保留所有权利。",
      "copy.site.title": "网站内容",
      "copy.site.body": "文字、版式以及 Kylin Trading 名称与标识，除另有注明外，归 KYLIN TRADING PTY LTD 所有。不得复制锁扣式标识，也不得将本文案作为您自己的店面使用。",
      "copy.photos.title": "摄影",
      "copy.photos.body": "场景照片依 Unsplash 或 Pexels 许可使用，版权仍归摄影师。署名如下：",
      "copy.p1": "维多利亚州马利地区油菜花田 — Unsplash（unsplash.com/photos/RsunteO43pw）。",
      "copy.p2": "澳大利亚东南部山灰桉林 — David Clode / Unsplash（unsplash.com/photos/seM6i8gJ7d0）。",
      "copy.p3": "维多利亚州南岸 — Unsplash（unsplash.com/photos/eQ9UXm56his）。",
      "copy.p4": "有机叶菜 — Unsplash（unsplash.com/photos/HeqXGxnsnX4）。",
      "copy.p5": "蜂箱巢脾 — Unsplash（unsplash.com/photos/Mkk_9x42Sbg）。",
      "copy.p6": "金合欢（金蜡木）— Alex Quezada / Pexels（pexels.com/photo/20621480/）。",
      "copy.marks.title": "商标",
      "copy.marks.body": "文中如出现他方产品或公司名称，均为其商标。提及并不表示关联、赞助或分销授权。我们不主张 Blackmores、Swisse 或任何其他消费品牌的权利。"
    }
  };

  function currentLang() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q === "zh" || q === "en") return q;
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") return stored;
    return "en";
  }

  function t(key, lang) {
    lang = lang || currentLang();
    var pack = I18N[lang] || I18N.en;
    return pack[key] != null ? pack[key] : (I18N.en[key] || key);
  }

  function applyLang(lang) {
    if (lang !== "zh" && lang !== "en") lang = "en";
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en-AU";
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = t(key, lang);
      if (el.tagName === "OPTION" || el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        /* options use textContent too */
      }
      el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder"), lang));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"), lang));
    });

    var page = document.body.getAttribute("data-page") || "home";
    var title = t("meta." + page, lang);
    if (title) document.title = title;

    document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-set") === lang ? "true" : "false");
    });
  }

  function bindLang() {
    document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang-set"));
      });
    });
  }

  function headerScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function mobileNav() {
    var toggle = document.querySelector(".menu-toggle");
    var panel = document.querySelector(".nav-mobile");
    var closeBtn = document.querySelector(".nav-mobile-close");
    if (!toggle || !panel) return;

    function open() {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", t("nav.close"));
      document.body.classList.add("is-locked");
      var first = panel.querySelector("nav a");
      if (first) first.focus();
    }
    function close() {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", t("nav.open"));
      document.body.classList.remove("is-locked");
      toggle.focus();
    }

    toggle.addEventListener("click", function () {
      if (panel.classList.contains("is-open")) close();
      else open();
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("is-open")) close();
    });
  }

  function enquiryForm() {
    var form = document.getElementById("enquiry-form");
    if (!form) return;

    var success = document.getElementById("form-success");
    var params = new URLSearchParams(window.location.search);
    var interest = params.get("interest");
    if (interest && form.elements.interest) {
      var allowed = ["wholesale", "private-label", "distribution", "other"];
      if (allowed.indexOf(interest) !== -1) form.elements.interest.value = interest;
    }

    function setError(field, key) {
      var wrap = field.closest(".field");
      var err = wrap && wrap.querySelector(".field-error");
      if (wrap) wrap.classList.add("is-invalid");
      if (err) err.textContent = t(key);
      field.setAttribute("aria-invalid", "true");
    }
    function clearError(field) {
      var wrap = field.closest(".field");
      var err = wrap && wrap.querySelector(".field-error");
      if (wrap) wrap.classList.remove("is-invalid");
      if (err) err.textContent = "";
      field.removeAttribute("aria-invalid");
    }

    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      field.addEventListener("input", function () { clearError(field); });
      field.addEventListener("change", function () { clearError(field); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var firstBad = null;
      var required = ["company", "name", "email", "country", "interest", "message"];
      required.forEach(function (name) {
        var field = form.elements[name];
        if (!field) return;
        clearError(field);
        var value = (field.value || "").trim();
        if (!value) {
          setError(field, name === "interest" ? "err.interest" : "err.required");
          ok = false;
          if (!firstBad) firstBad = field;
          return;
        }
        if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setError(field, "err.email");
          ok = false;
          if (!firstBad) firstBad = field;
        }
      });
      if (!ok) {
        if (firstBad) firstBad.focus();
        return;
      }
      var company = (form.elements.company.value || "").trim();
      var name = (form.elements.name.value || "").trim();
      var from = (form.elements.email.value || "").trim();
      var country = (form.elements.country.value || "").trim();
      var interest = (form.elements.interest.value || "").trim();
      var message = (form.elements.message.value || "").trim();
      var subject = "KYLIN enquiry — " + company;
      var body = [
        "Company: " + company,
        "Name: " + name,
        "Email: " + from,
        "Country: " + country,
        "Interest: " + interest,
        "",
        message
      ].join("\n");
      window.location.href = "mailto:terrence@kylintrades.com.au?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.focus();
      }
    });

    var again = document.querySelector("[data-form-reset]");
    if (again) {
      again.addEventListener("click", function () {
        form.reset();
        form.hidden = false;
        if (success) success.hidden = true;
        form.elements.company.focus();
      });
    }
  }

  applyLang(currentLang());
  bindLang();
  headerScroll();
  mobileNav();
  enquiryForm();
})();

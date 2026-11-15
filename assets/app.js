const tabs=document.getElementById('tabs'),out=document.getElementById('out');

const E={
learn:[
["Google Data Analytics (Coursera)","8 كورسات ~6 شهور، فيها Excel وSQL وTableau وR. فيه Financial Aid."],
["Google UX Design / Cybersecurity (Coursera)","نفس نظام جوجل، شهادة مقبولة في السيرة."],
["CS50 Harvard (مجاني)","أفضل بداية برمجة وSQL وPython، بشهادة اختيارية."],
["Maven Analytics (Power BI وSQL)","كورسات تفاعلية بمشاريع، فيه نسخة مجانية محدودة."],
["Microsoft Learn (PL-300 / AZ-900)","مجاني بالكامل، وفيه Sandbox للتجربة."],
["TryHackMe وHack The Box","تدريب أمن سيبراني عملي، TryHackMe فيه خطة مجانية."],
["freeCodeCamp وThe Odin Project","ويب وPython وData Analysis، مجاني ومبني على مشاريع."],
["Kaggle Learn","Pandas وSQL وVisualization في ساعات قليلة، مجاني."],
["DataCamp / Coursera Plus","مدفوع، بس فيه منح جامعية وخصومات طلبة."],
["Udemy","استنى عروض الـ 10$–15$ للكورس، متشتريش بالسعر الكامل."],
["ITI / NTI / Cisco Netacad","تدريبات شبكات وأمن ببرامج حكومية وأحيانًا مجانية."],
["دورات الإنجليزي: IELTS/Business English","من أهم الحاجات لأي وظيفة أو ريموت بعملة صعبة."]],
certs:[
["CompTIA Security+","~439$ (راجع الرسمي)","أشهر شهادة أمن للمبتدئين. النسخة الجديدة SY0-801 بتبدأ 17 نوفمبر 2026، وامتحان SY0-701 الإنجليزي لسه متاح لحد 11 يونيو 2027. الأسعار اتغيرت في 2026 فراجع صفحة CompTIA. وخصومات طلبة أحيانًا."],
["CompTIA Network+ / A+","~399$ / 2×~274$","شبكات ودعم فني، بداية لو عايز IT Support."],
["CCNA (Cisco)","~300$","شبكات معروفة جدًا في مصر والخليج. النسخة الحالية v1.1 آخر امتحان فيها 2 فبراير 2027 وv2.0 من 3 فبراير."],
["Microsoft PL-300 (Power BI)","~165$","أقوى شهادة BI. عادةً Voucher مجاني عبر برامج Microsoft/DEPI."],
["Microsoft AZ-900 / DP-900 / AI-900","~99$ لكل واحدة","أساسيات سحابة وبيانات وAI، سهلة وبتبني بروفايل."],
["AWS Cloud Practitioner (CLF)","~100$","أساس السحابة. SAA (Associate) ~150$."],
["ISTQB Foundation (CTFL)","~150–250$ حسب البلد","للـ QA. مطلوبة في شركات كتير."],
["PSM I (Scrum.org)","~200$","Scrum بدون تجديد سنوي، مقبولة جدًا."],
["PMI CAPM","~225$ للأعضاء / 300$","بداية إدارة مشروعات (PMP بعد خبرة)."],
["ISC2 CC","~199$ + 50$ رسوم سنوية","أمن سيبراني للمبتدئين. البرنامج المجاني خلص في مايو 2026."],
["IIBA ECBA","~350–395$ شامل سنة عضوية (راجع iiba.org)","تحليل أعمال للمبتدئين (CBAP بعد خبرة)."],
["Salesforce Admin","~200$","CRM مطلوب جدًا، والتدريب الأساسي مجاني على Trailhead."]],
lib:[
["Python for Data Analysis — Wes McKinney","مجاني أونلاين"],["Think Python — Allen Downey","PDF مجاني قانوني"],
["Automate the Boring Stuff with Python","مجاني أونلاين"],["Learning SQL — Alan Beaulieu","مدفوع، متوفر بنسخ طلبة"],
["Storytelling with Data — Cole Knaflic","مدفوع، أفضل كتاب في العرض"],["The Scrum Guide","PDF رسمي مجاني من scrumguides.org"],
["OWASP Top 10","PDF مجاني من owasp.org"],["Database System Concepts — Silberschatz","مرجع قواعد البيانات الأكاديمي"],
["Systems Analysis and Design — Kendall","مرجع تحليل وتصميم النظم"],["Management Information Systems — Laudon","كتاب المادة الأساسي عالميًا"],
["Don't Make Me Think — Steve Krug","UX في ساعات قراءة قليلة"],["The Data Warehouse Toolkit — Kimball","لو رايح Data Engineering / BI"]],
intern:[
["ITIDA + NTI (تدريب صيفي)","مجاني، لطلبة الفرق الأولى للتالتة في كليات الحاسبات والهندسة ونظم المعلومات وغيرها. التسجيل بيتفتح قبل الصيف، واتأكد إن كليتك مؤهلة."],
["DEPI رواد مصر الرقمية","مجاني من وزارة الاتصالات. مفتوحة لكل التخصصات. المسارات بتتغير كل دورة (تحليل بيانات، ذكاء اصطناعي، برمجيات، ERP، تسويق رقمي، أمن سيبراني). التسجيل في الدورة الخامسة فتح يونيو 2026 وغالبًا اتقفل، فتابع الدورة الجاية."],
["Huawei — Seeds for the Future / ICT Academy","برامج صيفية ومنح وفرص سفر، وشهادات HCIA."],
["Orange Digital Center Egypt","تدريب برمجة وبيانات وأمن ومسابقات."],
["Vodafone Egypt","برامج تدريب وخريجين في الشبكات وIT والبيانات."],
["e& (اتصالات) وTelecom Egypt","تدريب صيفي وبرامج خريجين."],
["CIB / البنك الأهلي / بنك مصر / QNB","برامج صيفية وخريجين، وأقسام IT والتحول الرقمي والتحليل."],
["Fawry / Paymob / Valu / Halan","تك مالي. دور Data وBackend وProduct وSupport."],
["Vezeeta / Luciq / Swvl","شركات تقنية، نوع التدريب حسب الفتح (Data/Product/QA)."],
["IBM Egypt / Microsoft Egypt / Raya / Valeo","شركات كبرى، مراقبة صفحات الـ Careers ولينكدإن."]],
tip:"الخلاصة: اللي بيتخرج شغال بيكون عنده 3 حاجات: تدريب صيفي مرتين، 3 مشاريع على GitHub/Behance، وشهادة واحدة صح (مش خمسة). ابدأ تقدم من السنة التانية مش الأخيرة. بتتفتح البرامج سنويًا فاتأكد من تواريخ التقديم في صفحاتها الرسمية قبل أي خطوة."};
const WAIT='<p class="gp">الـ Roadmap الكاملة للمجال ده لسه بتتكتب. الموجود دلوقتي هو الأساس من بيانات المجال.</p>';
const li=a=>`<ul class="c">${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const cards=(a,f)=>a.map(x=>`<div class="job"><h4>${x[0]}</h4><p>${f?f(x):x[1]}</p></div>`).join('');
const R={
"Data Analyst":{y:[["Excel (Pivot وXLOOKUP) + إحصاء من Khan Academy + إنجليزي يومي","تحليل ملف مبيعات من Kaggle + Dashboard بسيط في Excel","نضّف LinkedIn، وكمل في نشاطك الطلابي، وتابع فتح DEPI وITIDA"],["SQL (Mode وStrataScratch) + Power BI من Microsoft Learn + Pandas من Kaggle","10 أسئلة أعمال بـ SQL + Dashboard Power BI منشور","قدّم على مسار تحليل البيانات في DEPI (لما يتفتح) وGDG، وجرّب أول مشروع صغير"],["Google Data Analytics أو IBM Data Analyst + تحضير PL-300 + اختبارات فرضيات","3–5 مشاريع على GitHub/Kaggle منهم Customer Segmentation","تدريب صيفي في بنك أو اتصالات أو تك مالي، وITIDA/NTI، وأول عمل حر على خمسات/مستقل"],["SQL متقدم (Window Functions) + Storytelling with Data + تحضير مقابلات","Capstone: بيانات حقيقية وتوصيات للإدارة","قدّم أسبوعيًا على Wuzzuf وLinkedIn لـ Junior Data/BI Analyst بـ CV صفحة واحدة"]],c:[["Microsoft PL-300","~165$","أقوى شهادة BI"],["Google Data Analytics","~49$/شهر","فيه Financial Aid"],["IBM Data Analyst","اشتراك Coursera","بديل قوي، فيه SQL وPython"],["Microsoft DP-900","~99$","أساس قواعد البيانات في السحابة"]],co:"Vodafone · Orange · CIB · فوري · Paymob · Valu · Vezeeta · Raya · IBM Egypt"},
"Cybersecurity":{y:[["شبكات (Professor Messer وCisco Netacad) + Linux Journey + إنجليزي","Home Lab على VirtualBox بجهاز Kali وUbuntu","انضم لنادي أمن/GDG وابدأ تتابع الأخبار الأمنية"],["TryHackMe Pre-Security ثم SOC Level 1 + Python وBash","20 غرفة موثقة Write-ups + أول CTF","قدّم على مسار الأمن السيبراني في DEPI (لما يتفتح)"],["تحضير Security+ + Wireshark وNmap وSplunk + مواد أمن المعلومات","تقرير فحص ثغرات في بيئة مرخصة + تحليل Phishing","تدريب SOC صيفي في بنك أو اتصالات أو شركة أمن"],["CySA+ أو eJPT أو ISO 27001 حسب مسارك","مشروع تخرج أمني + 30 غرفة على الأقل","قدّم لـ SOC L1 أو IT Support ثم تنقل للأمن"]],c:[["CompTIA Security+","~439$","الأشهر للمبتدئين (نسخة SY0-801 من 17 نوفمبر 2026)"],["CompTIA Network+","~399$","شبكات"],["CCNA","~300$","شبكات Cisco (v1.1 تنتهي 2 فبراير 2027، v2.0 من 3 فبراير)"],["ISC2 CC","~199$ + 50$ سنويًا","البرنامج المجاني خلص في مايو 2026"]],co:"البنوك (CIB وNBE وبنك مصر) · Vodafone · e& · Telecom Egypt · Huawei · ITIDA · شركات MSSP",note:"تتدرب على بيئات مرخصة فقط (TryHackMe وHack The Box). الاختبار على أنظمة مش بتاعتك جريمة."},
"UI/UX":{y:[["مبادئ التصميم + Laws of UX + أساسيات Figma","إعادة تصميم شاشة موجودة بدقة","صمم لنشاط طلابي في الكلية"],["Google UX Design Certificate + Auto Layout","Case Study أول: تطبيق مذاكرة من البحث للـ Prototype","افتح حساب Behance واطلب mentor من ADPList"],["Prototyping + Usability Testing على 5 مستخدمين + Design System + Accessibility","3 Case Studies كاملة","تدريب في وكالة أو ستارت أب، ومسار الفنون الرقمية في DEPI لو اتفتح، وLanding Pages فريلانس"],["موقع بورتفوليو + تدريب على عرض الـ Case Study","مشروع لجهة حقيقية","قدّم لـ Junior UI/UX وجهّز Design Challenge"]],c:[["Google UX Design","~49$/شهر","فيه Financial Aid"],["Interaction Design Foundation","اشتراك سنوي مدفوع","منح طلبة أحيانًا"],["Figma","مجاني للطلبة","مفيش امتحان، البورتفوليو هو الشهادة"]],co:"Vezeeta · Luciq · Swvl · فوري · Valu · وكالات رقمية في القاهرة والإسكندرية"},
"Web Developer":{y:[["HTML وCSS من freeCodeCamp + CS50","صفحة شخصية متجاوبة","Git وGitHub من أول يوم"],["JavaScript + React + Git","To-Do App وتطبيق طقس بـ API","مسار البرمجيات في DEPI وGDG وHackathon"],["Node وExpress + SQL/MongoDB + النشر","مدونة بتسجيل دخول + متجر مصغر","تدريب صيفي في شركة برمجيات"],["TypeScript وNext.js + LeetCode مسائل سهلة","Capstone منشور بـ Live Demo","قدّم لـ Junior Frontend/Full-Stack"]],c:[["Meta Front-End/Full-Stack","~49$/شهر","على Coursera"],["freeCodeCamp","مجاني","شهادات على المشاريع"],["Microsoft AZ-900","~99$","نشر على السحابة"]],co:"Luciq · Vezeeta · Paymob · Swvl · Raya · شركات برمجيات وستارت أبس"},
"Business":{y:[["Excel + أساسيات UML وBPMN + إنجليزي","رسم عملية (مثلًا تسجيل مادة) بـ draw.io","نشاط طلابي بتحلل فيه احتياج"],["SQL أساسي + Jira + كتابة User Stories","وثيقة متطلبات BRD لتطبيق","مسار ERP في DEPI أو Google Project Management"],["ECBA/BABOK + Agile + Power BI","تحليل متطلبات لجهة حقيقية","تدريب BA في بنك أو شركة ERP"],["PSM I أو CAPM + تحضير مقابلات","Capstone بتوثيق كامل","قدّم لـ Junior BA"]],c:[["IIBA ECBA","~350–395$ شامل سنة عضوية (راجع iiba.org)","تحليل أعمال"],["PSM I","~200$","Scrum"],["PMI CAPM","~225–300$","إدارة مشروعات"]],co:"البنوك · Vodafone · شركات ERP/Odoo · فوري · Valu · الحكومة والتحول الرقمي"}
};
const IC=[["بيانات","fa-chart-column"],["UI","fa-pen-ruler"],["أمن","fa-shield-halved"],["ويب","fa-code"],["سحابة","fa-cloud"],["DevOps","fa-cloud"],["QA","fa-bug"],["ERP","fa-sitemap"],["DBA","fa-database"],["مشروعات","fa-diagram-project"],["BI","fa-chart-pie"],["Product","fa-cube"],["Audit","fa-clipboard-check"],["أتمتة","fa-robot"],["Flutter","fa-mobile-screen"],["ML","fa-brain"],["تحول","fa-arrows-rotate"],["دعم","fa-headset"],["مالي","fa-coins"],["Analyst","fa-magnifying-glass-chart"]];
const ico=t=>(IC.find(x=>t.includes(x[0]))||[0,"fa-briefcase"])[1];
const gen=j=>({y:[["أساسيات المجال + إنجليزي + Excel","مشروع صغير يطبق الأساسيات","نشاط طلابي وLinkedIn"],["أول كورس متخصص: "+(j.w||j.r),"مشروع واحد منشور","تدريب أونلاين أو مبادرة حكومية"],["شهادة معتمدة + تعميق الأدوات: "+j.r,"3 مشاريع في بورتفوليو","تدريب صيفي في شركة"],["مشروع تخرج + مقابلات","Capstone موثق","قدّم أسبوعيًا على "+j.t]]});
const H=(en,ar)=>`<h3 class="gh3"><span dir="ltr">${en}</span><br><small class="ar">${ar}</small></h3>`;
const sp=t=>{const m=t.match(/[A-Za-z].*$/);return m?[m[0].trim(),t.slice(0,m.index).trim()]:[t,'']};
function show(i,k){const m=M[i];setTab(i);
 const head=`<h2 class="text-2xl md:text-3xl font-black text-white mb-2">${m.n}</h2><span class="hrs">48 ساعة معتمدة</span><p class="gp">${m.d}</p>`;
 const backSub=`<div class="flex flex-wrap gap-2 mt-3"><button class="gtab" onclick="show(${i})">← ${m.n}</button>${BA.includes(i)?`<button class="gtab" onclick="showBA()">← مسارات إدارة الأعمال</button>`:''}</div>`;
 if(k=='about'){out.innerHTML=head+backSub+`<h3 class="gh3">عن التخصص</h3>`+(m.x||[m.d]).map(p=>`<p class="gp">${p}</p>`).join('');return}
 const card=(ic,en,ar,on)=>`<button class="subj-card panel rounded-2xl p-4" style="--c:#2dd4bf" onclick="${on}"><div class="subj-icon w-11 h-11 rounded-xl flex items-center justify-center mb-2"><i aria-hidden="true" class="fa-solid ${ic}"></i></div><div class="font-extrabold text-white text-sm" dir="ltr">${en}</div><div class="ar">${ar}</div></button>`;
 if(k=='opp'){out.innerHTML=head+backSub+OPPX(i);return}
 if(k=='links'){out.innerHTML=head+backSub+H('Courses & links (tap to open)','كورسات ولينكات (دوس تفتح في تاب جديد)')+`<h3 class="gh3">مصادر وشهادات التخصص</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${ML[i].map(x=>LC(...x)).join('')}</div><h3 class="gh3">منصات تعلم عامة</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${CL.map(x=>LC(...x)).join('')}</div><p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>`;return}
 if(k=='jobs'){out.innerHTML=head+backSub+H('Career fields (tap one for its full roadmap)','مجالات الشغل (دوس على المجال تشوف الـ Roadmap كاملة)')+`<div class="grid grid-cols-2 md:grid-cols-3 gap-3">${m.j.map((j,x)=>{const[e,a]=sp(j.t);return card(ico(j.t),e,a,`job(${i},${x})`)}).join('')}</div>`;return}
 out.innerHTML=head+(BA.includes(i)?`<button class="gtab mt-3" onclick="showBA()">← مسارات إدارة الأعمال</button>`:'')+`<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">${card('fa-briefcase','Career fields','مجالات الشغل',`show(${i},'jobs')`)}${card('fa-circle-info','About','عن التخصص',`show(${i},'about')`)}${card('fa-building-columns','Training & jobs','تدريب وفرص شغل',`show(${i},'opp')`)}${card('fa-link','Courses & links','كورسات ولينكات',`show(${i},'links')`)}</div>`}
const RE={
"Data Analyst":{u:"Clean data, write SQL queries, build Power BI dashboards, report to management.",r:"Excel, SQL, Power BI, Python, analytical thinking, presenting results.",y:[["Excel (pivot tables, XLOOKUP) + Khan Academy statistics + daily English","Analyze a Kaggle sales file and build a simple Excel dashboard","Polish LinkedIn, stay active in your student activity, watch for DEPI and ITIDA openings"],["SQL (Mode, StrataScratch) + Power BI on Microsoft Learn + Pandas on Kaggle","10 business questions answered in SQL + a published Power BI dashboard","Apply to the DEPI data analytics track (when open) and GDG; try a first small gig"],["Google Data Analytics or IBM Data Analyst + PL-300 prep + hypothesis testing","3–5 projects on GitHub/Kaggle, including Customer Segmentation","Summer internship at a bank, telecom or fintech; ITIDA/NTI; first freelance gig"],["Advanced SQL (window functions) + Storytelling with Data + interview prep","Capstone on real data with recommendations","Apply weekly on Wuzzuf/LinkedIn for Junior Data/BI Analyst with a one-page CV"]]},
"Cybersecurity":{u:"Monitor alerts and attacks (SOC), analyze incidents, scan vulnerabilities, apply security policies.",r:"Networking (TCP/IP), Linux, SIEM, pentesting basics, technical English.",n:"Practice only in licensed environments (TryHackMe, Hack The Box). Testing systems you don't own is a crime.",y:[["Networking (Professor Messer, Cisco Netacad) + Linux Journey + English","Home lab on VirtualBox with Kali and Ubuntu","Join a security club or GDG and follow security news"],["TryHackMe Pre-Security then SOC Level 1 + Python and Bash","20 documented rooms (write-ups) + your first CTF","Apply to the DEPI cybersecurity track (when open)"],["Security+ prep + Wireshark, Nmap, Splunk + college infosec courses","Vulnerability scan report in a licensed lab + phishing analysis","Summer SOC internship at a bank, telecom or security firm"],["CySA+, eJPT or ISO 27001 depending on your path","Security capstone + at least 30 rooms","Apply for SOC L1 or IT Support, then move into security"]]},
"UI/UX":{u:"User research, user flows, wireframes, Figma UI, prototypes, usability testing, developer handoff.",r:"Figma, design systems, UX principles, visual sense, working with developers.",y:[["Design principles + Laws of UX + Figma basics","Faithfully redesign an existing screen","Design something for a campus student activity"],["Google UX Design Certificate + Auto Layout","Case study #1: a study-planner app, from research to prototype","Open a Behance account and find a mentor on ADPList"],["Prototyping + usability testing with 5 users + design systems + accessibility","3 full case studies","Internship at an agency or startup, a DEPI digital arts track if open, freelance landing pages"],["Portfolio website + practice presenting case studies","A project for a real client","Apply for Junior UI/UX and prepare for a design challenge"]]},
"Web Developer":{y:[["HTML and CSS on freeCodeCamp + CS50","A responsive personal page","Use Git and GitHub from day one"],["JavaScript + React + Git","A to-do app and a weather app using an API","the DEPI software track, GDG, hackathons"],["Node and Express + SQL/MongoDB + deployment","A blog with login + a mini online store","Summer internship at a software company"],["TypeScript and Next.js + easy LeetCode problems","A deployed capstone with a live demo","Apply for Junior Frontend/Full-Stack"]]},
"Business":{y:[["Excel + UML and BPMN basics + English","Map a process (e.g. course registration) in draw.io","Analyze a need inside a student activity"],["Basic SQL + Jira + writing user stories","A BRD (requirements document) for an app","the DEPI ERP track or Google Project Management"],["ECBA/BABOK + Agile + Power BI","Requirements analysis for a real organization","BA internship at a bank or ERP company"],["PSM I or CAPM + interview prep","A fully documented capstone","Apply for Junior BA"]]}};
const tt=t=>{const m=t.match(/[A-Za-z(][^\u0600-\u06FF]*$/);if(!m)return t;const en=m[0].trim(),ar=t.slice(0,m.index).replace(/[\/\s]+$/,'');return `<span dir="ltr" style="display:block">${en}</span>${ar?`<span style="display:block;color:var(--mut);font-size:.78rem;font-weight:600">${ar}</span>`:''}`};
const PRICE_NOTE='<p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>';
const CERTS_FOR=(j,all)=>{const t=j.t,pick=k=>all.filter(c=>k.some(w=>c[0].includes(w)));let k=['AZ-900','PL-300'];
 if(/Cyber|Security|أمن/.test(t))k=['Security+','Network+','CCNA','ISC2'];
 else if(/Audit|Governance|مدقق/.test(t))k=['ISC2','ECBA','AZ-900'];
 else if(/DBA|قواعد/.test(t))k=['AZ-900','Network+','AWS'];
 else if(/QA|Tester/.test(t))k=['ISTQB','PSM'];
 else if(/Product|Project|مشروعات/.test(t))k=['PSM','CAPM','ECBA'];
 else if(/ERP|Implementation/.test(t))k=['ECBA','PSM','Salesforce'];
 else if(/Web|Low-Code|Power Platform/.test(t))k=['PL-300','AZ-900','AWS'];
 else if(/BI|Power BI|Data|بيانات/.test(t))k=['PL-300','AZ-900'];
 else if(/Business|أعمال/.test(t))k=['ECBA','PSM','CAPM'];
 const r=pick(k);return r.length?r:all.slice(0,3)};
const BOOKS_FOR=(j,lib)=>{const t=j.t,rules=[['OWASP',/Cyber|Security|أمن|Audit|مدقق/],['Warehouse',/BI|Data|بيانات/],['Database System',/DBA|قواعد|Data|BI|بيانات/],['Systems Analysis',/Analyst|تحليل|ERP|Implementation|Product|Owner/],['Scrum',/Product|Project|مشروعات|Business|أعمال|Owner/],['Make Me Think',/UI|UX/]];
 return lib.filter(x=>rules.every(r=>!x[0].includes(r[0])||r[1].test(t))).slice(0,8).map(x=>x[0])};
const Hd=(e,a)=>`<h3 class="gh3"><span dir="ltr">${e}</span><small style="color:var(--mut);font-weight:600"> · ${a}</small></h3>`;
const Bl=(e,a)=>(e?`<p class="gp" dir="ltr" style="text-align:left;margin-bottom:0">${e}</p>`:'')+`<p class="gp" style="${e?'color:var(--mut);font-size:.88rem;margin-top:.15rem':''}">${a}</p>`;
function job(i,x){const m=M[i],j=m.j[x],e=i==0?E:{};const d=Object.keys(R).find(k=>j.t.includes(k)),R1=d&&i==0?R[d]:null,X=R1?RE[d]:null;
 const Y=(R1||gen(j)).y,YE=X?X.y:[];
 out.innerHTML=`<button class="gtab" onclick="show(${i},'jobs')">← ${m.n}</button><h2 class="text-2xl md:text-3xl font-black text-white mt-3 mb-1"><i aria-hidden="true" class="fa-solid ${ico(j.t)}" style="color:var(--a2)"></i> ${tt(j.t)}</h2>
${Hd('What is this job?','إيه الشغل ده؟')}${Bl(X&&X.u,'<b>المهام:</b> '+j.u)}${Bl(X&&X.r,'<b>المطلوب:</b> '+j.r)}<div class="lad"><b>التدرج / Path:</b>${j.l.map(y=>`<span>${y}</span>`).join('<i>◂</i>')}</div>
${Hd(R1?'Year-by-year roadmap':'Suggested yearly plan',R1?'Roadmap سنة بسنة':'خطة تعلم مقترحة عامة للمجال')}${Y.map((y,k)=>{const q=YE[k];const row=(en,ar,i2)=>`<p style="margin:.5rem 0 0"><b>${en}</b> <small style="color:var(--mut)">(${ar})</small></p>${q?`<p dir="ltr" style="text-align:left;margin:.1rem 0;font-size:.9rem;color:#e3e5e9">${q[i2]}</p>`:''}<p style="margin:.1rem 0;${q?'color:var(--mut);font-size:.85rem':''}">${y[i2]}</p>`;return `<div class="job"><h4><span dir="ltr">Year ${k+1}</span> · السنة ${['الأولى','التانية','التالتة','الرابعة'][k]}</h4>${row('Take','هتاخد',0)}${row('Build','هتعمل',1)}${row('Apply / Ask for','هتقدم/تطلب',2)}${YL(i,j,k,R1?Y:null)}</div>`}).join('')}
${Hd('Certificates & prices','شهادات وأسعارها')}${R1?cards(R1.c,x=>`<b>${x[1]}</b> · ${x[2]}`)+'<p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>':(e.certs?cards(CERTS_FOR(j,e.certs),x=>`<b>${x[1]}</b> · ${x[2]}`)+PRICE_NOTE:li(m.k||[]))}
${Hd('Internships & companies','تدريب وشركات')}${R1?`<p class="gp" dir="ltr" style="text-align:left">${R1.co}</p>${Bl('Free programs: ITIDA/NTI and DEPI (round 5 opened in June 2026 and has likely closed). Programs reopen yearly, so watch their application pages.','برامج مجانية: ITIDA/NTI وDEPI (الدورة الخامسة فتحت في يونيو 2026 وغالبًا اتقفل). البرامج بتتفتح سنويًا فتابع صفحات التقديم.')}`:(e.intern?cards(e.intern.slice(0,5)):cards(INT))}
${X&&X.n?Bl(X.n,R1.note):''}
${Hd('Books & resources','كتب ومصادر')}${e.lib?li(BOOKS_FOR(j,e.lib)):li(LIB)}
${RMTX(j)}${EMPX(i,j)}${SALX(i,j)}`;out.scrollIntoView({behavior:'smooth',block:'start'})}

const P=(a,n)=>a.map(r=>{const[t,s,l,u,q]=r.split('|');return{t,s,l:l.split('>'),u,r:q}});
M[1].j.push(...P([
"محاسب تكاليف Cost Accountant|10–18 ألف مبتدئ · 35–65 ألف مدير|Cost Accountant>Senior>Cost Manager>Finance Director|تحليل تكلفة المنتج وتسعيره ومراقبة الانحرافات في المصانع.|محاسبة تكاليف، Excel متقدم، ERP.",
"محاسب ضرائب Tax Accountant|10–18 ألف مبتدئ · 35–70 ألف مدير|Tax Accountant>Senior>Tax Manager>Head of Tax|إعداد الإقرارات والفاتورة الإلكترونية والتعامل مع مصلحة الضرائب.|قوانين الضرائب المصرية، الفاتورة الإلكترونية، Excel.",
"مراجع داخلي Internal Auditor|12–20 ألف مبتدئ · 40–75 ألف مدير|Internal Auditor>Senior>Audit Manager>CAE|فحص العمليات الداخلية وكشف المخاطر والمخالفات وكتابة توصيات.|مراجعة، IIA/CIA يفضل، تقارير، دقة."]));
M[2].j.push(...P([
"أخصائي عمليات بنكية Banking Operations|10–17 ألف مبتدئ · 30–55 ألف مدير|Operations Officer>Senior>Ops Manager>Head of Operations|تنفيذ التحويلات والاعتمادات والمقاصة ومراجعة العمليات اليومية.|دقة، معرفة بنظم البنك، Excel.",
"مسؤول امتثال ومكافحة غسل أموال AML Compliance|13–20 ألف مبتدئ · 45–85 ألف مدير|Compliance Officer>Senior>Compliance Manager>CCO|مراقبة العمليات المشبوهة وتطبيق لوائح البنك المركزي وKYC.|لوائح البنك المركزي، KYC/AML، ACAMS يفضل.",
"أخصائي تمويل شركات Corporate Banker|14–25 ألف مبتدئ · 50–95 ألف مدير|Corporate Analyst>RM>Senior RM>Head of Corporate|دراسة احتياج الشركات وهيكلة التمويل وإدارة محفظة عملاء كبار.|تحليل مالي، تفاوض، إنجليزي قوي."]));
M[3].j.push(...P([
"مدير ثروات وأصول Wealth Manager|14–25 ألف + عمولات · 45–100 ألف سينيور|Associate>Wealth Advisor>Senior Advisor>Head of Wealth|تقديم خطط استثمار للأفراد وإدارة محافظهم وبناء الثقة.|معرفة منتجات استثمارية، ترخيص الرقابة المالية، تواصل.",
"مسؤول علاقات مستثمرين Investor Relations|15–25 ألف مبتدئ · 50–100 ألف مدير|IR Analyst>IR Manager>Head of IR|إعداد عروض النتائج والتواصل مع المستثمرين والمحللين.|تحليل مالي، عرض وكتابة، إنجليزي ممتاز.",
"محلل ستارت أب / رأس مال جريء VC Analyst|12–20 ألف مبتدئ · 45–110 ألف شريك|Analyst>Associate>Principal>Partner|تقييم الشركات الناشئة ودراسة الصفقات وبناء نماذج التقييم.|نمذجة مالية، فهم سوق التقنية، شبكة علاقات."]));
M[4].j.push(...P([
"صانع محتوى ومدير محتوى Content Manager|9–16 ألف مبتدئ · 30–55 ألف مدير|Content Creator>Content Lead>Content Manager>Head of Content|تخطيط وكتابة وإنتاج محتوى للسوشيال والمواقع وقياس أدائه.|كتابة، Canva/CapCut، فهم الجمهور.",
"مدير متجر إلكتروني E-commerce Manager|12–20 ألف مبتدئ · 40–80 ألف مدير|Specialist>E-commerce Manager>Head of E-commerce|إدارة الكتالوج والإعلانات والمخزون وتحسين معدل التحويل.|Shopify/Salla، Meta وGoogle Ads، Analytics.",
"باحث سوق ومدير علامة Brand & Market Research|10–18 ألف مبتدئ · 40–85 ألف مدير|Research Assistant>Analyst>Brand Manager>Head of Brand|دراسة السوق والمنافسين وبناء هوية العلامة وتحديد التموضع.|إحصاء، بحوث تسويق، SPSS/Excel، عرض."]));
M[5].j.push(...P([
"أخصائي رواتب ومزايا Payroll & Benefits|9–17 ألف مبتدئ · 30–55 ألف مدير|Payroll Assistant>Specialist>C&B Manager>HR Director|حساب المرتبات والتأمينات والضرائب وإدارة المزايا.|قانون العمل، تأمينات، Excel متقدم، سرية.",
"مسؤول تدريب وتطوير L&D Specialist|9–17 ألف مبتدئ · 35–70 ألف مدير|Coordinator>L&D Specialist>L&D Manager>Head of Talent|تحديد الاحتياج التدريبي وتصميم وتنفيذ برامج تدريب وقياس أثرها.|تدريب TOT، تصميم محتوى، تقييم أثر.",
"محلل موارد بشرية HR Analytics|13–20 ألف مبتدئ · 45–85 ألف سينيور|HR Analyst>Senior>People Analytics Manager|تحليل معدل الدوران والأداء والتوظيف بلوحات Power BI لدعم القرار.|Excel، Power BI، إحصاء، فهم HR."]));
M[6].j.push(...P([
"مسؤول مشتريات وعقود طاقة Procurement & Contracts|13–20 ألف مبتدئ · 45–85 ألف مدير|Procurement Officer>Senior>Manager>Head of Supply|طرح المناقصات وتقييم الموردين وإدارة العقود في شركات الطاقة.|مناقصات وعقود، إنجليزي، Excel.",
"مسؤول طاقة متجددة ومشروعات Renewable Projects Coordinator|13–25 ألف مبتدئ · 45–95 ألف مدير|Coordinator>Project Officer>Manager>Director|متابعة جداول وميزانيات مشروعات الطاقة الشمسية والرياح.|إدارة مشروعات، دراسة جدوى، معرفة بقطاع الطاقة.",
"مسؤول سلامة وبيئة وجودة HSE Officer|12–20 ألف مبتدئ · 40–80 ألف مدير|HSE Officer>Senior>HSE Manager>Director|تطبيق إجراءات السلامة والتفتيش وكتابة تقارير الحوادث والامتثال.|NEBOSH/IOSH، ISO 14001/45001، ميداني."]));
M[7].j.push(...P([
"محلل بيانات اقتصادية Economic Data Analyst|12–20 ألف مبتدئ · 40–75 ألف سينيور|Analyst>Senior>Lead>Head of Analytics|بناء نماذج تنبؤ وقياس مؤشرات اقتصادية ولوحات متابعة.|اقتصاد قياسي، Python/R، SQL، Power BI.",
"محلل سياسات واستثمار Policy & Investment Analyst|10–19 ألف مبتدئ · 35–70 ألف مدير|Analyst>Senior>Manager>Director|دراسة بيئة الاستثمار وكتابة أوراق سياسات لهيئات حكومية ودولية.|كتابة بحثية، اقتصاد، إنجليزي قوي.",
"مستشار مشروعات تنمية Development Consultant|10–18 ألف مبتدئ · 40–90 ألف مستشار|Research Assistant>Officer>Consultant>Senior Consultant|تقييم أثر برامج التنمية وكتابة التقارير للمنظمات الدولية.|تقييم أثر، M&E، إنجليزي ممتاز."]));
M[8].j.push(...P([
"أكتواري بيانات تأمين Insurance Data Analyst|13–25 ألف مبتدئ · 45–90 ألف سينيور|Data Analyst>Senior>Lead>Head of Analytics|تحليل المطالبات والاحتيال وتسعير المنتجات بنماذج إحصائية.|SQL، Python/R، إحصاء، Power BI.",
"أخصائي معاشات وتأمينات اجتماعية Pension Analyst|10–19 ألف مبتدئ · 35–70 ألف مدير|Analyst>Senior>Pension Manager>Head of Benefits|تقييم التزامات صناديق المعاشات وحساب الاشتراكات المستقبلية.|نماذج اكتوارية، Excel، قوانين التأمينات.",
"مدير مخاطر مؤسسية ERM Analyst|13–25 ألف مبتدئ · 45–95 ألف مدير|Risk Analyst>Senior>ERM Manager>CRO|تقدير المخاطر التشغيلية والمالية وبناء خطط التخفيف.|إدارة مخاطر، FRM يفضل، إحصاء."]));
M[9].j.push(...P([
"محلل سياسات عامة Policy Analyst|9–17 ألف مبتدئ · 30–65 ألف مدير|Analyst>Senior>Policy Manager>Director|دراسة بدائل السياسات وتقييم البرامج الحكومية وإعداد توصيات.|تحليل، كتابة، إحصاء، إنجليزي.",
"أخصائي حكومة إلكترونية e-Government|10–18 ألف مبتدئ · 35–70 ألف مدير|Officer>Specialist>Manager>Director|رقمنة الخدمات الحكومية وتبسيط الإجراءات وقياس رضا المواطن.|فهم عمليات، نظم، إدارة تغيير.",
"أخصائي مسؤولية مجتمعية CSR|9–17 ألف مبتدئ · 30–65 ألف مدير|Coordinator>CSR Officer>CSR Manager>Head of Sustainability|تخطيط مبادرات مجتمعية للشركات وقياس أثرها والشراكة مع الجمعيات.|تواصل، إدارة مشروعات، تقارير استدامة."]));
const X={1:"المحاسبة هي لغة الأعمال: بتسجل وتحلل الأرقام اللي بتقول الشركة كسبانة ولا خسرانة. بعد التخرج تقدر تشتغل في الحسابات أو المراجعة أو الضرائب أو التكاليف، وشهادات زي ACCA وCMA بتفرق جامد في الراتب.",
2:"التخصص ده بيجهزك لشغل البنوك والمؤسسات المالية: تمويل وائتمان ومخاطر وخدمة عملاء. القطاع المصرفي المصري كبير وفيه برامج خريجين سنوية، ومعرفة بالتحليل المالي والإنجليزي أساسية.",
3:"التمويل والاستثمار بيعلمك تقيّم الشركات والأسهم وتدير المحافظ وتفهم أسواق المال. الشغل بيعتمد على الأرقام والنماذج المالية، وCFA وFinancial Modeling من أقوى الإضافات.",
4:"التسويق بيجمع بين فهم الناس والإبداع والأرقام. دلوقتي أغلب الفرص في التسويق الرقمي والتجارة الإلكترونية والمحتوى، والبورتفوليو (حملات حقيقية) بيفرق أكتر من الشهادة.",
5:"الموارد البشرية هي الجانب الإنساني في الشركة: توظيف وتدريب وتقييم ومرتبات. محتاج مهارة تواصل وسرية وفهم لقانون العمل، والتحليلات بقت ميزة كبيرة.",
6:"تخصص مرتبط بقطاع الطاقة والبترول من ناحية الإدارة والتمويل والتسويق والعقود. القطاع بيدفع مرتبات كويسة بس بيطلب إنجليزي قوي وفهم لصناعة الطاقة.",
7:"الاقتصاد بيعلمك تحلل الأسواق والسياسات وتفهم ليه الأسعار والبطالة والاستثمار بتتحرك. هتشتغل في بحوث وبنوك وجهات حكومية ومنظمات دولية، والتحليل الكمي (Python/Stata) ميزة قوية.",
8:"العلوم الاكتوارية رياضيات وإحصاء مطبقة على التأمين والمخاطر والمعاشات. من أعلى التخصصات أجرًا بس محتاجة صبر لامتحانات مهنية (IFoA/SOA) واحتمالات قوية.",
9:"بتتعلم إزاي الدولة والمحليات والمجتمع المدني بيتدار ويتخطط. الفرص في الجهاز الإداري والتنمية والمنظمات، ومعاها مجالات جديدة زي التحول الرقمي الحكومي."};
for(const i in X)M[i].x=X[i];
const MI=["fa-laptop-code","fa-calculator","fa-users","fa-landmark"];
IC.unshift(["محاسب","fa-calculator"],["تكاليف","fa-calculator"],["ضريب","fa-file-invoice-dollar"],["مراجع","fa-clipboard-check"],["ائتمان","fa-credit-card"],["بنك","fa-building-columns"],["Compliance","fa-shield-halved"],["Wealth","fa-gem"],["مستثمر","fa-chart-line"],["Investor","fa-chart-line"],["VC","fa-rocket"],["Founder","fa-rocket"],["محتوى","fa-pen-nib"],["E-commerce","fa-cart-shopping"],["Brand","fa-star"],["مبيعات","fa-handshake"],["Business Development","fa-handshake"],["رواتب","fa-money-check-dollar"],["تدريب","fa-chalkboard-user"],["HR Analytics","fa-chart-pie"],["مشتريات","fa-file-contract"],["متجددة","fa-solar-panel"],["HSE","fa-helmet-safety"],["اقتصاد","fa-chart-line"],["Policy","fa-scroll"],["تنمية","fa-hand-holding-heart"],["اكتوار","fa-percent"],["معاشات","fa-umbrella"],["مخاطر","fa-triangle-exclamation"],["حكومة","fa-landmark"],["CSR","fa-hand-holding-heart"],["جدوى","fa-calculator"],["حاضنات","fa-seedling"],["إمداد","fa-truck-fast"],["مخازن","fa-warehouse"],["شحن","fa-ship"]);
const SI=[["محاسب","fa-calculator"],["بنك","fa-building-columns"],["مصرف","fa-building-columns"],["اقتصاد","fa-chart-line"],["تسويق","fa-bullhorn"],["بيع","fa-bullhorn"],["تأمين","fa-umbrella"],["بيانات","fa-database"],["نظم","fa-laptop-code"],["برمج","fa-laptop-code"],["ذكاء","fa-brain"],["استثمار","fa-chart-line"],["مال","fa-coins"],["تمويل","fa-coins"],["مراجعة","fa-clipboard-check"],["ضريب","fa-file-invoice-dollar"],["طاقة","fa-bolt"],["بترول","fa-oil-well"],["قانون","fa-scale-balanced"],["احتمال","fa-percent"],["إحصاء","fa-percent"],["الإحصائية","fa-percent"],["موارد","fa-users"],["تدريب","fa-chalkboard-user"],["قيادة","fa-users"],["حكوم","fa-landmark"],["سياس","fa-landmark"],["مخازن","fa-warehouse"],["نقل","fa-truck-fast"],["إمداد","fa-truck-fast"],["مشتريات","fa-file-contract"],["ريادة","fa-lightbulb"],["مشروع","fa-diagram-project"],["إدارة","fa-sitemap"]];
const sico=t=>(SI.find(x=>t.includes(x[0]))||[0,"fa-book"])[1];
const INT=[["التدريب الصيفي","اطلب تدريب من السنة التانية في شركة أو بنك أو مكتب في مجالك."],["مبادرات حكومية","تابع مبادرات وزارة الاتصالات: DEPI مفتوحة لكل التخصصات، أما تدريب ITIDA/NTI الصيفي فمحدد بكليات معينة (حاسبات وهندسة ونظم معلومات)، فاتأكد من الأهلية."],["Careers ولينكدإن","تابع الشركات الكبيرة في مجالك وفعّل تنبيهات Wuzzuf وLinkedIn."]];
const LIB=["كتب المواد الأساسية من مكتبة الأكاديمية","Coursera / edX (Audit مجاني)","قنوات يوتيوب عربي للمجال","مجتمعات LinkedIn وTelegram للتخصص"];

(()=>{const K=[0,1,5,9,2,3,4,7,8,6].map(i=>M[i]);M.length=0;M.push(...K)})();
M.forEach(m=>{if(typeof m.x=='string')m.x=[m.x];if(!m.x)m.x=[m.d]});
const AJ=(i,a)=>{const have=M[i].j.map(j=>sp(j.t)[0].toLowerCase());P(a).forEach(j=>{if(!have.includes(sp(j.t)[0].toLowerCase()))M[i].j.push(j)})};
AJ(0,["مطور Odoo / ERP Functional Consultant|13–25 ألف مبتدئ · 45–100 ألف سينيور|Junior Consultant>Functional Consultant>Senior>ERP Manager|تحليل احتياج الشركة وضبط موديولات المحاسبة والمخازن والمبيعات في نظام ERP.|فهم عمليات الأعمال، Odoo/SAP، SQL، تواصل مع العملاء.",
"مطور Power Platform Low-Code Developer|12–20 ألف مبتدئ · 40–85 ألف سينيور|Citizen Developer>Power Platform Developer>Solution Architect|بناء تطبيقات وتدفقات أتمتة بـ Power Apps وPower Automate بدون كود كتير.|Power Apps، Power Automate، Dataverse، SQL.",
"مالك منتج Product Owner|14–25 ألف مبتدئ · 50–110 ألف سينيور|Business Analyst>Product Owner>Product Manager>Head of Product|ترتيب أولويات المنتج وكتابة User Stories والتنسيق بين العميل والمطورين.|Agile/Scrum، تواصل، تحليل بيانات، Jira.",
"مطور أتمتة RPA Developer|12–20 ألف مبتدئ · 45–95 ألف سينيور|RPA Developer>Senior>RPA Architect|أتمتة المهام المتكررة في البنوك والشركات بأدوات UiPath.|UiPath، منطق وعمليات، SQL."]);
AJ(1,["مراجع خارجي External Auditor|10–19 ألف مبتدئ · 40–85 ألف مدير|Junior Auditor>Senior>Audit Manager>Partner|مراجعة القوائم المالية للشركات وإصدار تقرير مراقب الحسابات.|معايير مراجعة ومحاسبة، ACCA يفضل، تحمل ضغط موسم المراجعة.",
"محاسب حكومي Government Accountant|9–14 ألف مبتدئ · 25–45 ألف مدير|Accountant>Senior>Head of Accounts>Financial Director|إمساك دفاتر الجهات العامة والموازنة والحسابات الختامية.|المحاسبة الحكومية، قوانين الموازنة، Excel.",
"محلل مالي FP&A Analyst|13–25 ألف مبتدئ · 45–95 ألف مدير|Analyst>Senior>FP&A Manager>Finance Director|إعداد الموازنات والتوقعات وتحليل الانحرافات لدعم قرارات الإدارة.|Excel متقدم، Power BI، نمذجة مالية.",
"مستشار نظم محاسبية ERP Accounting Consultant|12–20 ألف مبتدئ · 40–90 ألف سينيور|Accountant>ERP Accountant>Consultant>Senior Consultant|تهيئة وتدريب الشركات على النظم المحاسبية Odoo/SAP/Zoho.|محاسبة، ERP، تدريب وشرح.",
"محاسب ريموت Remote Bookkeeper|9–17 ألف مبتدئ (حوالي 250–500$) · 35–70 ألف مع الخبرة (بالجنيه، والدخل الفعلي بالدولار حسب العميل)|Freelance Bookkeeper>Senior>Accounting Firm Owner|مسك دفاتر شركات صغيرة خارج مصر عن بعد بـ QuickBooks وXero.|QuickBooks/Xero، إنجليزي قوي، التزام بالمواعيد.",
"محاسب جنائي Forensic Accountant|13–25 ألف مبتدئ · 45–100 ألف مدير|Analyst>Senior>Forensic Manager>Director|كشف الاحتيال والتلاعب المالي وتحليل المستندات للقضايا.|ACFE/CFE يفضل، تحليل بيانات، دقة وسرية."]);
AJ(2,["أخصائي شؤون عاملين HR Admin|9–14 ألف مبتدئ · 25–45 ألف مدير|HR Assistant>HR Admin>Senior>HR Manager|ملفات الموظفين والتعيين والإجازات والتأمينات والجزاءات.|قانون العمل، Excel، تنظيم وسرية.",
"أخصائي توظيف تقني Tech Recruiter|10–19 ألف + عمولات · 35–70 ألف مدير|Sourcer>Tech Recruiter>Senior>Head of Talent|البحث عن مبرمجين ومحللين وإجراء مقابلات أولية بلينكدإن.|LinkedIn Recruiter، فهم أساسيات التقنية، تواصل.",
"أخصائي علاقات عمل Employee Relations|10–18 ألف مبتدئ · 35–65 ألف مدير|ER Officer>Senior>ER Manager|حل الشكاوى والنزاعات وتطبيق اللوائح وقانون العمل.|قانون العمل المصري، تفاوض، حياد.",
"أخصائي تجربة الموظف Employee Experience|10–19 ألف مبتدئ · 35–75 ألف مدير|Coordinator>EX Specialist>EX Manager|استبيانات الرضا وبرامج الاحتفاظ بالموظفين وتحسين بيئة العمل.|تحليل استبيانات، تواصل، إبداع.",
"مستشار تطوير تنظيمي OD Consultant|13–25 ألف مبتدئ · 45–100 ألف مستشار|Analyst>OD Specialist>OD Consultant>Head of OD|تصميم الهياكل التنظيمية ومؤشرات الأداء وإدارة التغيير.|تحليل منظمات، إدارة تغيير، عرض."]);
AJ(3,["أخصائي مشتريات حكومية Public Procurement|9–17 ألف مبتدئ · 30–55 ألف مدير|Officer>Specialist>Procurement Manager|إجراءات المناقصات والممارسات وفق قانون التعاقدات العامة.|قانون تنظيم التعاقدات، تقييم عروض، دقة.",
"محلل ميزانية عامة Public Budget Analyst|10–18 ألف مبتدئ · 30–65 ألف مدير|Analyst>Senior>Budget Manager>Director|إعداد ومتابعة موازنات الجهات وقياس كفاءة الإنفاق.|Excel، محاسبة حكومية، تحليل.",
"مدير مشروعات عامة Public Project Manager|10–19 ألف مبتدئ · 35–75 ألف مدير|Coordinator>Project Officer>Project Manager>PMO Head|تخطيط ومتابعة مشروعات الجهات الحكومية والتنموية.|PMP/CAPM يفضل، MS Project، تقارير.",
"أخصائي إدارة محلية Local Government Officer|9–14 ألف مبتدئ · 25–45 ألف مدير|Officer>Section Head>General Manager|متابعة خدمات المحافظة والمجالس المحلية وشكاوى المواطنين.|قانون الإدارة المحلية، تواصل، تنظيم.",
"أخصائي جودة وتطوير مؤسسي Quality & Institutional Development|10–18 ألف مبتدئ · 35–70 ألف مدير|Officer>Specialist>Quality Manager|رفع كفاءة الإجراءات وتطبيق ISO وقياس رضا المستفيدين.|ISO 9001، تحليل عمليات، توثيق.",
"منسق برامج منظمات مجتمع مدني NGO Program Officer|9–18 ألف مبتدئ · 35–80 ألف مدير|Assistant>Program Officer>Program Manager>Country Director|إدارة مشروعات التنمية والتمويل والتقارير للمانحين.|كتابة مقترحات، M&E، إنجليزي قوي.",
"أخصائي علاقات عامة وإعلام PR Officer|9–17 ألف مبتدئ · 30–70 ألف مدير|PR Assistant>PR Officer>PR Manager|إدارة صورة الجهة والبيانات الصحفية والفعاليات.|كتابة، تواصل، سوشيال ميديا."]);

/* ===== تظبيط مجالات الشغل ===== */
[[0,['Cybersecurity','Web Developer','Flutter','DevOps','IT Support','ML Engineer','مالك منتج Product Owner','RPA Developer','Odoo / ERP']],[1,['مراجع حسابات / مدقق Auditor']],[2,['HR Admin']],[3,['أخصائي مشروعات منظمات مجتمع مدني / تنمية']]].forEach(([i,a])=>{M[i].j=M[i].j.filter(j=>!a.some(s=>j.t.includes(s)))});
const ED=(i,s,o)=>{const j=M[i].j.find(j=>j.t.includes(s));if(j)Object.assign(j,o)};
ED(0,'استشاري ERP',{l:["Junior Consultant","Functional Consultant","Senior Consultant","ERP Manager","Solution Architect"],u:"تطبيق أنظمة SAP/Odoo/Dynamics، تحليل احتياج الشركة وضبط موديولات المحاسبة والمخازن والمبيعات، وتدريب المستخدمين.",r:"فهم محاسبة ومخزون ومبيعات، Odoo أو SAP، SQL، تحليل أعمال وتواصل مع العملاء."});
ED(0,'أتمتة وذكاء',{u:"ربط الأنظمة وأتمتة المهام المتكررة في الشركات والبنوك، وبناء Agents وWorkflows.",r:"n8n/Zapier أو UiPath، APIs، SQL وPython أساسي، منطق وفهم للعمليات."});
ED(0,'مسؤول منتج',{l:["Business Analyst","Product Owner","Product Manager","Group PM","CPO"]});
ED(3,'NGO Program',{u:"إدارة مشروعات التنمية وكتابة مقترحات المنح والتقارير للمانحين والتواصل مع الشركاء.",r:"كتابة مقترحات ومنح، M&E، إدارة مشروعات، إنجليزي قوي."});
AJ(0,["محلل عمليات أعمال Business Process Analyst|12–20 ألف مبتدئ · 40–75 ألف سينيور|Junior Analyst>Process Analyst>Senior>Process Excellence Manager|رسم العمليات الحالية وتحديد الهدر والاختناقات وتصميم عمليات أحسن وربطها بالنظم.|BPMN، تحليل أعمال، Excel، تواصل مع الإدارات.",
"أخصائي حوكمة وجودة بيانات Data Governance & Quality Analyst|13–20 ألف مبتدئ · 45–85 ألف سينيور|Data Quality Analyst>Data Steward>Governance Lead>Head of Data Governance|وضع قواعد جودة البيانات ومراجعتها ومنع التكرار والأخطاء وتوثيق مصادر البيانات.|SQL، Excel، فهم قواعد البيانات، دقة، توثيق.",
"أخصائي نظم معلومات إدارية MIS Officer|10–18 ألف مبتدئ · 35–70 ألف مدير|MIS Officer>Senior MIS>MIS Manager>Head of IT|إدارة تقارير ونظم الشركة الداخلية وتجهيز البيانات للإدارة وربط الأقسام ببعض.|Excel متقدم، SQL، Power BI، فهم عمليات الشركة."]);
AJ(1,["أخصائي خزينة Treasury Officer|10–19 ألف مبتدئ · 40–80 ألف مدير|Treasury Assistant>Treasury Officer>Treasury Manager>Head of Treasury|متابعة السيولة والتدفقات النقدية والتعامل مع البنوك والتحويلات والتسويات.|محاسبة، Excel، فهم البنوك، دقة.",
"محاسب مشروعات ومقاولات Project Accountant|10–19 ألف مبتدئ · 35–70 ألف مدير|Project Accountant>Senior>Project Finance Manager>Finance Director|متابعة تكاليف ومستخلصات وميزانيات المشروعات وربطها بالتقدم الفعلي.|محاسبة تكاليف، Excel، ERP، قراءة مستخلصات.",
"أخصائي تقارير مالية IFRS Financial Reporting|12–20 ألف مبتدئ · 45–90 ألف مدير|Reporting Accountant>Senior>Reporting Manager>Group Controller|إعداد القوائم المالية المجمعة وتطبيق معايير IFRS وتجهيز التقارير للإدارة.|IFRS، Excel، محاسبة متقدمة، إنجليزي."]);
AJ(2,["أخصائي نظم موارد بشرية HRIS Specialist|12–20 ألف مبتدئ · 40–80 ألف مدير|HR Assistant>HRIS Specialist>HRIS Manager>Head of People Systems|إدارة نظام بيانات الموظفين والحضور والرواتب وتجهيز تقارير للإدارة.|Excel، Power BI، فهم عمليات HR، نظم HR/ERP.",
"أخصائي علامة صاحب العمل Employer Branding|9–17 ألف مبتدئ · 30–65 ألف مدير|Coordinator>Employer Branding Specialist>Manager>Head of Talent Brand|بناء صورة الشركة كمكان شغل جيد على لينكدإن وفعاليات التوظيف الجامعية.|كتابة، سوشيال ميديا، تصميم بسيط، فهم التوظيف."]);
AJ(3,["أخصائي متابعة وتقييم M&E Specialist|10–19 ألف مبتدئ · 35–75 ألف مدير|M&E Assistant>M&E Officer>M&E Manager>Head of MEAL|قياس نتايج المشروعات والبرامج بمؤشرات وتقارير وتحليل بيانات لدعم القرار.|مؤشرات أداء، إحصاء، Excel، كتابة تقارير، إنجليزي.",
"محلل بيانات حكومية Government Data Analyst|10–18 ألف مبتدئ · 35–70 ألف مدير|Data Assistant>Analyst>Senior Analyst>Head of Data Unit|تحليل بيانات الخدمات والشكاوى والمؤشرات لتحسين الأداء ودعم متخذ القرار.|Excel، Power BI، إحصاء، فهم الجهاز الإداري."]);
M[0].j=[
  {t:"محلل بيانات Data Analyst",s:"10–20 ألف مبتدئ · 40–70 ألف سينيور",l:["Junior Analyst","Analyst","Senior","Team Lead","Head of Data"],u:"تنضيف البيانات، استعلامات SQL، لوحات Power BI، تقارير للإدارة.",r:"Excel، SQL، Power BI، Python، تفكير تحليلي وعرض النتائج."},
  {t:"مطور ذكاء أعمال BI / Power BI Developer",s:"16–30 ألف مبتدئ · 50–90 ألف سينيور",l:["Report Dev","BI Developer","Senior BI","BI Lead","Head of BI"],u:"بناء Data Models وDAX وDashboards للإدارة، وجدولة التحديث.",r:"Power BI/DAX، SQL، Star Schema، Power Query."},
  {t:"محلل أعمال ونظم Business & Systems Analyst",s:"12–20 ألف مبتدئ · 35–65 ألف سينيور",l:["Junior BA","Business Analyst","Senior BA","Product Owner","BA Manager"],u:"جمع متطلبات العملاء، رسم العمليات (BPMN/UML)، تحسين سير العمل، والتنسيق بين الإدارة والمبرمجين.",r:"تحليل وتصميم نظم، UML وBPMN، تواصل قوي، إنجليزي كويس.",w:"كورس BABOK/CBAP مبسط، Jira، Visio أو draw.io، كتابة User Stories."},
  {t:"استشاري نظم المؤسسات وتطبيق الأنظمة ERP & Implementation Consultant",s:"14–25 ألف مبتدئ · 45–95 ألف سينيور",l:["Implementation Specialist","Functional Consultant","Senior Consultant","ERP Manager","Solution Architect"],u:"تطبيق أنظمة SAP/Odoo/Dynamics، تحليل احتياج الشركة وضبط موديولات المحاسبة والمخازن والمبيعات، وتدريب المستخدمين.",r:"فهم محاسبة ومخزون ومبيعات، Odoo أو SAP، SQL، تحليل أعمال وتواصل مع العملاء.",w:"مواد المحاسبة والتحليل في الكلية، Odoo (مجاني وسهل الدخول)، SAP Learning Hub."},
  {t:"مسؤول منتج ومدير مشروعات تقنية Product Owner / IT Project Manager",s:"17–30 ألف مبتدئ · 55–110 ألف سينيور",sn:"الرقم الأعلى ممكن يزيد.",l:["Associate PO / Coordinator","Product Owner / IT PM","Senior PM","Group PM / PMO Head","CPO"],u:"تحديد أولويات المنتج، كتابة User Stories، تخطيط وجدولة المشروعات التقنية، إدارة الفريق والمخاطر، وقياس نجاح الميزات بالبيانات.",r:"Agile/Scrum، تحليل بيانات وأعمال، PMP أو CAPM، قيادة وتواصل.",w:"ابدأ كـ Business Analyst أو Scrum Master، ثم شهادة PSM I أو CAPM وبعدها PMP."},
  {t:"أخصائي نظم معلومات إدارية MIS Officer",s:"10–18 ألف مبتدئ · 35–70 ألف مدير",l:["MIS Officer","Senior MIS","MIS Manager","Head of IT"],u:"إدارة تقارير ونظم الشركة الداخلية، تجهيز البيانات الدورية للإدارة، وربط الأقسام ببعض.",r:"Excel متقدم، SQL، Power BI، فهم عمليات الشركة.",w:"Excel متقدم، SQL، Power BI، وفهم تقارير الإدارة."},
  {t:"مدقق نظم وحوكمة بيانات IT Auditor & Data Governance",s:"14–25 ألف مبتدئ · 45–90 ألف سينيور",l:["Junior Auditor / Data Steward","IT Auditor","Senior","GRC & Governance Manager","CISO"],u:"مراجعة ضوابط النظم والأمان والامتثال (ISO 27001)، وضع قواعد جودة البيانات ومنع الأخطاء، وكتابة تقارير المخاطر.",r:"ISO 27001، إدارة مخاطر، SQL، فهم قواعد البيانات، دقة وتوثيق.",w:"أساسيات المراجعة وأمن المعلومات، ISO 27001، وشهادة CISA مع الخبرة."},
  {t:"مصمم تجربة وواجهات المستخدم UI/UX Designer",s:"12–20 ألف مبتدئ · 40–75 ألف سينيور",sn:"الريموت ممكن يوصّل الرقم لأكتر من كده.",l:["Junior Designer","UI/UX Designer","Senior","Lead Designer","Head of Design"],u:"أبحاث مستخدمين، User Flows، Wireframes، تصميم واجهات في Figma، Prototypes، اختبار قابلية الاستخدام، والتسليم للمطورين.",r:"Figma، فهم Design Systems، مبادئ UX، حس بصري، وتواصل مع المطورين.",w:"Google UX Design Certificate، Figma، مادة تفاعل الحاسب وتصميم الويب في الكلية، وبورتفوليو على Behance بـ 3 مشروعات Case Study على الأقل."},
  {t:"مطور تطبيقات ويب وحلول Low-Code (Web & Power Platform)",s:"12–25 ألف مبتدئ · 45–90 ألف سينيور",l:["Junior Dev","Developer","Senior","Tech Lead / Solution Architect"],u:"بناء مواقع وتطبيقات أعمال أو تدفقات أتمتة بـ Power Apps وPower Automate وربط قواعد البيانات.",r:"HTML/CSS/JS، React أو Power Platform، Git، SQL.",w:"مادة تكنولوجيا الويب، freeCodeCamp أو Microsoft Learn (Power Platform)، ومشروعات على GitHub."},
  {t:"مختبر جودة برمجيات QA & Software Tester",s:"9–17 ألف مبتدئ · 35–65 ألف سينيور",l:["Manual Tester","QA Engineer","Automation Engineer","QA Lead"],u:"كتابة حالات اختبار (Test Cases)، اكتشاف الأخطاء وتوثيقها، وأتمتة الاختبارات لضمان جودة النظام قبل الإطلاق.",r:"ISTQB، Postman، Selenium أو Cypress، اهتمام بالتفاصيل.",w:"مادة هندسة البرمجيات، شهادة ISTQB Foundation، تعلم Postman وSelenium أو Cypress."},
  {t:"محلل أمن سيبراني Cybersecurity Analyst",s:"14–25 ألف مبتدئ · 45–100 ألف سينيور",l:["SOC Analyst L1","L2","Security Engineer","Security Lead","CISO"],u:"مراقبة التنبيهات والهجمات (SOC)، تحليل الحوادث، فحص الثغرات، وتطبيق السياسات الأمنية.",r:"شبكات (TCP/IP)، Linux، SIEM، أساسيات Penetration Testing، وإنجليزي تقني.",w:"مواد الشبكات وأمن المعلومات في الكلية، CompTIA Security+ أو CCNA، TryHackMe وHack The Box، شهادة Google Cybersecurity."},
  {t:"مدير قواعد بيانات ونظم DBA & Systems Admin",s:"12–20 ألف مبتدئ · 40–70 ألف سينيور",l:["IT Support / Junior DBA","DBA / SysAdmin","Senior DBA","Data Architect"],u:"إدارة وتأمين قواعد البيانات والسيرفرات، النسخ الاحتياطي، تحسين الأداء، وحل مشاكل المستخدمين والصلاحيات.",r:"SQL Server/Oracle/PostgreSQL، Performance Tuning، Windows/Linux.",w:"مادة قواعد البيانات والشبكات، شهادة Microsoft DP-300 أو CompTIA Network+."}
];
M.forEach((m,i)=>m.j.forEach(j=>{if(!j.w)j.w='كورس '+sp(j.t)[0]+' (Coursera / Udemy)'}));
M[0].x.push("مناسب لك لو بتحب الكمبيوتر والمنطق وحل المشاكل، ومش لازم تكون عبقري برمجة؛ التخصص بيجمع الإدارة والتكنولوجيا. ابدأ من أول سنة بـ SQL وExcel وPower BI وبعدين اتخصص: بيانات أو ويب أو ERP أو أمن.","نصيحة: ابني بورتفوليو على GitHub وLinkedIn واعمل تدريب صيفي من سنة تانية؛ ده اللي بيفرق في التوظيف أكتر من التقدير.");
M[1].x.push("مناسب لك لو بتحب الدقة والترتيب والأرقام. الرياضيات بسيطة والمهم الانتظام. اتعلم Excel وبرنامج محاسبي (Odoo أو QuickBooks أو Zoho) من بدري.","ابدأ ACCA أو CMA من سنة تالتة علشان تتخرج ومعاك شهادة، وفيه شغل ريموت في مسك الدفاتر لشركات خارج مصر.");
M[2].x.push("مناسب لك لو بتحب التعامل مع الناس وتحافظ على السرية وتتصرف بعدل. اتعلم قانون العمل المصري وExcel وأساسيات Power BI.","اتدرب في الموارد البشرية في شركة أو مصنع من سنة تانية، وبعد التخرج ابدأ شهادة SHRM أو CIPD أو HRCI.");
M[3].x.push("مناسب لك لو بتحب التنظيم والعمل العام وفهم القوانين والتعامل مع المؤسسات. فرصك في الجهاز الإداري والمحليات والهيئات والمنظمات.","تابع مسابقات التعيين الحكومية والتحول الرقمي، واتعلم Excel وإدارة المشروعات وكتابة التقارير والإنجليزي.");

/* ===== عن التخصص ===== */
M[0].x=[M[0].x[0],
"قوة التخصص إنه بيفتحلك مسارات كتير مش مسار واحد: تحليل بيانات وذكاء أعمال، تحليل أعمال ونظم، ERP، قواعد بيانات وهندسة بيانات، إدارة مشروعات ومنتجات تقنية، مراجعة نظم وحوكمة، والتحول الرقمي. اختار على حسب اللي بتحبه: الأرقام والتحليل، ولا فهم احتياج الناس والعمليات، ولا التنظيم وإدارة المشروعات.",
"هتشتغل فين؟ في البنوك وشركات الاتصالات والتك المالي والتجارة الإلكترونية والمصانع والجهات الحكومية وشركات الاستشارات، وأي مكان فيه بيانات ونظم محتاجة حد يفهم البزنس والتقنية مع بعض.",
M[0].x[3],
"مناسب لك لو بتحب الكمبيوتر والمنطق وحل المشاكل، ومش لازم تكون عبقري برمجة؛ التخصص بيجمع الإدارة والتكنولوجيا. ابدأ من أول سنة بـ SQL وExcel وPower BI وبعدين اتخصص: بيانات أو تحليل أعمال أو ERP أو إدارة منتجات.",
M[0].x[5]];
M[1].x.push("هتشتغل فين؟ في مكاتب المراجعة والشركات والمصانع والبنوك والجهات الحكومية، وفيه شغل ريموت. وبعدين بتتخصص في المراجعة أو الضرائب أو التكاليف أو التحليل المالي، ومعرفتك بنظم ERP هتفرق معاك.");
M[2].x.push("هتشتغل فين؟ في الشركات والمصانع والبنوك وشركات التوظيف والمنظمات. وتقدر تتخصص في التوظيف أو التدريب أو الرواتب أو التحليلات، ومعرفتك بنظم HRIS وPower BI بتخليك مختلف عن غيرك.");
M[3].x.push("هتشتغل فين؟ في الجهاز الإداري والمحليات والهيئات والمنظمات الأهلية والدولية، وفي شركات كتير في الجودة والمشتريات والمسؤولية المجتمعية. وفيه مسار بيجمع الإدارة العامة بالتحول الرقمي الحكومي.");


/* ===== عن التخصص: البنوك، التمويل، التسويق، الاقتصاد، الاكتواري (مواد الأكاديمية) ===== */
M[4].x.push("مواد التخصص في الأكاديمية (48 ساعة معتمدة: 33 إجباري و15 اختياري): إدارة البنوك، اقتصاديات البنوك، محاسبة المنشآت المالية، تحليل وتقييم المشاريع الاستثمارية، تسويق الخدمات المصرفية، إدارة المخاطر المالية للبنوك، سياسات الاستثمار المصرفية، وبعدها إدارة الجودة الشاملة وإدارة المشروعات الصغيرة والإدارة الإستراتيجية وبحث التخرج.",
"الاختياري بتختار منه 5 مقررات (15 ساعة) من: قوانين النقد والمصارف، إدارة المواد، تدريب عملي في مجال التخصص (بيتدرس في الكلية بالإضافة للتدريب الصيفي)، نظم الأعمال والتجارة الإلكترونية، تطبيقات الحاسب الآلي في مجال البنوك، الاتصال المرئي بالإنجليزي، والسياسات النقدية والائتمانية. وبنهاية الفصل الثامن لازم تعدي امتحان إجادة اللغة الإنجليزية اللي بيحدده قسم اللغات.",
"هتشتغل فين؟ في البنوك الحكومية والخاصة والأجنبية وشركات التمويل والخدمات المالية. ابدأ بدورات المعهد المصرفي المصري EBI وتابع برامج الخريجين في البنوك، وبعدين اتخصص في الائتمان أو الامتثال أو العمليات أو تمويل الشركات.",
"مناسب لك لو بتحب الأرقام والدقة والتعامل مع العملاء. اتعلم Excel والتحليل المالي من بدري، وحسّن إنجليزيك لأنه شرط في أغلب البنوك، واطلب تدريب صيفي في بنك من السنة التانية.");
M[5].x.push("مواد التخصص في الأكاديمية (48 ساعة معتمدة: 33 إجباري و15 اختياري): مبادئ الاستثمار، تمويل الشركات، التحليل المالي، أسواق رأس المال، إدارة محفظة الأوراق المالية، إدارة الاندماج والاستحواذ، وإدارة المواد، وبعدها إدارة الجودة الشاملة وإدارة المشروعات الصغيرة والإدارة الإستراتيجية وبحث التخرج.",
"الاختياري بتختار منه 5 مقررات (15 ساعة) من: قوانين البورصة والاستثمار، الاستثمار والتمويل طويل الأجل، نظم الأعمال والتجارة الإلكترونية، تحليل وتقييم المشاريع الاستثمارية، النمذجة والإدارة المالية قصيرة الأجل، تدريب عملي في مجال التخصص (بيتدرس في الكلية بالإضافة للتدريب الصيفي)، والإدارة المالية الدولية. وبنهاية الفصل الثامن لازم تعدي امتحان إجادة اللغة الإنجليزية.",
"هتشتغل فين؟ في شركات السمسرة وإدارة الأصول والبنوك والإدارات المالية في الشركات الكبيرة وصناديق الاستثمار. ابدأ بالنمذجة المالية وأساسيات البورصة، وفكر في CFA Level 1 من سنة تالتة لو هدفك الاستثمار.",
"مناسب لك لو بتحب الأرقام والتحليل ومتابعة الأسواق والشركات. الشغل بيعتمد على Excel والنماذج المالية والإنجليزي، وتقدر تبنيهم بمشاريع تقييم حقيقية لشركات مقيدة في البورصة.");
M[6].x.push("مواد التخصص في الأكاديمية (48 ساعة معتمدة: 33 إجباري و15 اختياري): بحوث التسويق، الاتصالات التسويقية، سلوك المستهلك، فن وإدارة البيع، التسويق الدولي، إدارة التسويق الإستراتيجي، وإدارة المواد، وبعدها إدارة الجودة الشاملة وإدارة المشروعات الصغيرة والإدارة الإستراتيجية وبحث التخرج.",
"الاختياري بتختار منه 5 مقررات (15 ساعة) من: نظم الأعمال والتجارة الإلكترونية، إدارة علاقات العملاء، الدراسات الحديثة في التسويق، تحليل وتقييم المشاريع الاستثمارية، تدريب عملي في مجال التخصص (بيتدرس في الكلية بالإضافة للتدريب الصيفي)، القانون التجاري، التسويق الإلكتروني، تسويق الخدمات، والاتصال المرئي بالإنجليزي. وبنهاية الفصل الثامن لازم تعدي امتحان إجادة اللغة الإنجليزية.",
"هتشتغل فين؟ في الشركات الكبيرة ووكالات الإعلان والسوشيال ميديا والمتاجر الإلكترونية وشركات الاتصالات والسلع الاستهلاكية، وفيه شغل ريموت وفري لانس كتير. اتخصص في التسويق الرقمي أو المبيعات أو المحتوى أو إدارة المتاجر أو بحوث السوق.",
"مناسب لك لو بتحب الإبداع وفهم الناس والتواصل ومعاك حس بالأرقام. ابني بورتفوليو حملات حقيقية (صفحة لنشاط طلابي أو مشروع صغير) وخد شهادات Google وMeta المجانية، لأن البورتفوليو بيفرق أكتر من الشهادة.");
M[7].x.push("مواد التخصص في الأكاديمية (48 ساعة معتمدة: 33 إجباري و15 اختياري): النظرية الاقتصادية الجزئية والكلية، اقتصاديات المالية العامة، التنمية الاقتصادية، الاقتصاد الدولي، اقتصاديات المشروع ودراسة الجدوى، الاقتصاد القياسي (مبني على مادة رياضيات سابقة)، السياسات الاقتصادية، دراسة اقتصادية متخصصة، تدريب عملي، وبحث التخرج.",
"الاختياري بتختار منه 5 مقررات (15 ساعة) من: اقتصاديات البنوك، اقتصاديات السكان، بورصات الأوراق المالية، اقتصاديات المرافق العامة، حلقة دراسة في الاقتصاد، التخطيط الاقتصادي، والمحاسبة القومية. وبنهاية الفصل الثامن لازم تعدي امتحان إجادة اللغة الإنجليزية.",
"هتشتغل فين؟ في الجهات الحكومية (التخطيط والمالية والبنك المركزي وCAPMAS) ومراكز البحوث والبنوك وشركات الاستثمار والمنظمات الدولية وشركات دراسات الجدوى. التحليل الكمي بـ Excel وPython أو Stata بيفرق جدًا.",
"مناسب لك لو بتحب تفهم ليه الأسعار والبطالة والاستثمار بتتحرك وبتحب التحليل والكتابة. اتعلم Excel والإحصاء وPython من بدري، واكتب تحليلات صغيرة على بيانات CAPMAS أو البنك الدولي علشان تبقى بورتفوليو.");
M[8].x.push("مواد التخصص في الأكاديمية (48 ساعة معتمدة: 33 إجباري و15 اختياري): تأمين الممتلكات والمسؤولية، تأمين الحياة والصحة، التفاضل والتكامل، نظرية الاحتمالات، الإدارة المالية، التمويل والاستثمار، إعادة التأمين، الطرق الإحصائية، النماذج المالية والاقتصادية، النماذج الاكتوارية، وبحث التخرج.",
"الاختياري بتختار منه 5 مقررات (15 ساعة) من: نمذجة الحياة الطارئة، إدارة المخاطر، النماذج والنمذجة العشوائية، صناديق المعاشات، نظرية التأمين الاجتماعي، الحوسبة والرياضيات الحسابية، دراسة الجدوى، والإحصاء اللامعلمي. وبنهاية الفصل الثامن لازم تعدي امتحان إجادة اللغة الإنجليزية.",
"هتشتغل فين؟ في شركات التأمين وإعادة التأمين وصناديق المعاشات والتأمينات الاجتماعية والبنوك وشركات الاستشارات والجهات الرقابية. الأكتواري محتاج امتحانات مهنية: IFoA (مادتي CS1 وCM1 ممكن تدخلهم حتى كغير عضو برسوم حوالي 385 جنيه إسترليني أو 248 بسعر مخفض لو ينطبق، وبتتغير)، أو SOA.",
"مناسب لك لو الرياضيات والإحصاء والاحتمالات نقطة قوة عندك وعندك صبر على المذاكرة. ابدأ R أو Python وSQL وExcel من بدري، وحاول تعدي CS1 أو CM1 وانت لسه في الدراسة علشان تتخرج ومعاك امتحان ناجح.");

M[9].x.push("مواد التخصص في الأكاديمية (48 ساعة معتمدة: 33 إجباري و15 اختياري): اقتصاديات الطاقة والبترول، إدارة مؤسسات الطاقة والبترول، التمويل في مؤسسات الطاقة والبترول، المحاسبة في مؤسسات الطاقة والبترول، سياسات واستراتيجيات الطاقة والبترول، تسويق الطاقة والبترول، وإدارة المواد، وبعدها إدارة الجودة الشاملة وإدارة المشروعات الصغيرة والإدارة الإستراتيجية وبحث التخرج.",
"الاختياري بتختار منه 5 مقررات (15 ساعة) من: تشريعات الطاقة والبترول، تحليل وتقييم المشاريع الاستثمارية، تطبيقات الحاسب الآلي في مجال الطاقة والبترول، نظم الأعمال والتجارة الإلكترونية، تدريب عملي في مجال التخصص (بيتدرس في الكلية بالإضافة للتدريب الصيفي)، العلاقات البترولية الدولية، والموارد الاقتصادية البترولية. وبنهاية الفصل الثامن لازم تعدي امتحان إجادة اللغة الإنجليزية.",
"هتشتغل فين؟ في شركات البترول والغاز والخدمات البترولية وشركات الكهرباء والطاقة المتجددة والجهات الحكومية في القطاع. الشغل هنا إداري ومالي وتعاقدي وسلامة، مش هندسي، فقوّي الإنجليزي والـ Excel.",
"مناسب لك لو بتحب قطاع الطاقة ومشروعاته الكبيرة والعقود والأرقام. الإنجليزي التقني مهم جدًا، وشهادات السلامة (NEBOSH/IOSH) بتفرق لو اتجهت للـ HSE.");
/* ===== مرتبات حسب القطاع + ريموت + جهات ===== */
const fk=n=>String(Math.round(n*2)/2).replace(/\.0$/,'');
const nums=s=>(s.match(/\d+–\d+/g)||[]).map(x=>x.split('–').map(Number)).filter(p=>p[1]>=6&&p[0]<p[1]);
const FAC=[[[.6,.55],[1,1],[1.35,1.5]],[[.6,.55],[1,1],[1.3,1.45]],[[.65,.6],[1,1],[1.35,1.5]],[[1,1],[1.25,1.3],[1.7,2]]];
const AV=[[/e-Government|Policy Analyst|Government Data/,'gm'],[/حكومي|Local Government|Public Budget|Public Procurement/,'g'],[/NGO|M&E|CSR/,'pm']];
const avail=t=>(AV.find(a=>a[0].test(t))||[0,'gpm'])[1];
const SAL3=[["حكومي","fa-landmark"],["قطاع خاص محلي","fa-building"],["شركة متعددة الجنسيات / منظمة دولية","fa-globe"]];
const SLB=j=>{const m=j.s.match(/^\d+–\d+ ألف (.+?) · \d+–\d+ ألف (.+)$/);return m?[m[1],m[2]]:['مبتدئ','سينيور']};
const SNO=j=>j.sn?`<p class="gnote" style="margin-top:.5rem">${j.sn}</p>`:'';
function SALX(i,j){const P=nums(j.s),av=avail(j.t),LB=SLB(j);let F=FAC[i].map(r=>r.slice());
 if(i==3){if(!av.includes('g')){F[1]=[1,1];F[2]=[1.6,1.8]}}else if(av=='g')F[0]=[1,1];
 const rg=(p,k,fl)=>p?`${fk(Math.max(p[0]*k,fl||0))}–${fk(Math.max(p[1]*k,fl?fl+2:0))}`:'';
 const head=H('Salary by sector','المرتب حسب نوع الشركة');
 const note='<p class="gnote" style="margin-bottom:.4rem"><b>ملحوظة:</b> تقسيم المرتب حسب نوع الشركة محسوب بنسب تقريبية من الرقم الأساسي للوظيفة، وهو مش أرقام فعلية لكل قطاع.</p><p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>';
 if(P.length<2)return head+`<div class="job"><div class="sal">${j.s}</div><p>الدخل هنا بيتحدد حسب العميل أو الشركة.</p></div>`+SNO(j)+note;
 return head+SAL3.map((s,k)=>{if(!av.includes('gpm'[k]))return `<div class="job"><h4>${s[0]}</h4><p>نادر أو مش موجود في المجال ده.</p></div>`;
  const a=rg(P[0],F[k][0],k==0?8:0),b=rg(P[1],F[k][1]);
  return `<div class="job"><h4><i aria-hidden="true" class="fa-solid ${s[1]}"></i> ${s[0]}</h4><div class="sal">${a} ألف ${LB[0]} · ${b} ألف ${LB[1]}</div></div>`}).join('')+SNO(j)+note}
const LV=["ضعيف","متوسط","عالي"],EZ=["صعب","متوسط","سهل"];
const RMT=[
[/Government Data/,1,1,1,"بيانات حكومية غالبًا جوه الجهة، بس مهارات التحليل نفسها تتباع ريموت."],
[/Data Analyst/,2,2,1,"طلب كبير على Upwork وFiverr وLinkedIn. محتاج بورتفوليو 3 مشاريع وإنجليزي كويس، والمنافسة عالية للمبتدئ."],
[/Business Process/,1,1,1,"استشارات عمليات لشركات صغيرة ريموت ممكنة بعد خبرة سنتين."],
[/Business & Systems/,1,1,0,"الريموت للي عنده خبرة سنتين+ وإنجليزي قوي. المبتدئ بيبدأ من شركة."],
[/UI\/UX/,2,2,1,"طلب عالي ومنافسة عالية. بورتفوليو Case Studies على Behance هو اللي بيفتح الباب."],
[/Data Engineer/,2,1,0,"ريموت مطلوب بس محتاج Python وSQL وسحابة بمستوى قوي."],
[/QA/,1,1,2,"أسهل مجال تقني للبداية، وفيه Testing ريموت لشركات خارجية، والمرتب أقل."],
[/DBA/,1,1,0,"إدارة قواعد بيانات ريموت لشركات صغيرة ممكنة بعد خبرة."],
[/Data Governance/,1,0,0,"مطلوب في شركات كبيرة غالبًا في مكان العمل."],
[/IT Project Manager/,1,0,0,"ريموت بعد خبرة وشهادة CAPM/PMP، والفري لانس قليل."],
[/Power BI/,2,2,1,"من أكتر المجالات المطلوبة ريموت وفري لانس. شهادة PL-300 ومشاريع منشورة بتفرق."],
[/Product Owner/,1,0,0,"ريموت بعد خبرة، والبداية عادةً من BA أو دعم منتج."],
[/IT Auditor/,1,0,0,"ريموت مع شركات استشارات ومكاتب كبيرة، ومحتاج ISO 27001 وخبرة."],
[/n8n|Automation/,2,2,2,"طلب عالي وسهل نسبيًا: Zapier وn8n وMake. بتبدأ بمشاريع صغيرة على Upwork وFiverr."],
[/Implementation/,1,0,1,"في شركات SaaS الريموت منتشر، والعميل غالبًا أجنبي، ومحتاج إنجليزي قوي."],
[/Digital Transformation/,0,1,0,"أغلب الشغل في الجهات والبنوك، والفري لانس استشارات بعد خبرة."],
[/Power Platform/,1,1,1,"Power Apps وPower Automate عليهم طلب متوسط ومنافسة أقل من البرمجة."],
[/MIS Officer/,0,0,1,"شغل داخل الشركة غالبًا."],
[/ERP Accounting/,2,2,1,"Odoo وQuickBooks وZoho عليهم طلب ريموت، والمحاسب اللي بيفهم ERP أندر."],
[/ERP/,1,2,0,"Odoo عليه فري لانس كتير، وSAP محتاج خبرة وشهادات."],
[/محاسب عام/,1,1,2,"مسك دفاتر وحسابات شركات صغيرة ممكنة ريموت، وأسهل بداية في المحاسبة."],
[/Cost/,1,1,1,"استشارات تكاليف لمصانع صغيرة ممكنة، والتكاليف غالبًا شغل مصنع."],
[/Tax/,1,2,1,"ضرائب مصر محلية: فري لانس مع مكاتب وشركات صغيرة (إقرارات وفاتورة إلكترونية)، والريموت الدولي أقل."],
[/Internal Auditor/,1,0,0,"ريموت جزئي في شركات كبيرة، ومحتاج خبرة."],
[/External Auditor/,0,0,1,"شغل مكاتب مراجعة بحضور، خصوصًا موسم المراجعة."],
[/Government Accountant/,0,0,1,"شغل جهة حكومية بحضور."],
[/FP&A/,2,1,0,"مطلوب ريموت في شركات خارجية، ومحتاج Excel ونمذجة قوية وإنجليزي ممتاز."],
[/Remote Bookkeeper/,2,2,2,"أسهل باب للدولار: QuickBooks وXero لشركات صغيرة. التزام بالمواعيد وإنجليزي مهم."],
[/Forensic/,1,0,0,"استشارات بعد خبرة وشهادة CFE."],
[/Treasury/,0,0,0,"شغل داخل الشركات والبنوك."],
[/Project Accountant/,0,1,1,"فيه فري لانس لمقاولين صغار، وأغلب الشغل في المواقع والشركات."],
[/IFRS/,1,1,0,"ريموت مع شركات خارجية بعد خبرة وشهادة IFRS أو ACCA."],
[/Tech Recruiter/,2,2,1,"توظيف المبرمجين ريموت لشركات خارجية وسوق الفري لانس شغال."],
[/Recruiter/,2,2,2,"Recruitment ريموت لشركات خارجية وفري لانس لشركات صغيرة وناشئة. بداية سهلة بـ LinkedIn."],
[/HR Generalist/,0,0,1,"شغل شركة بحضور."],
[/Payroll/,1,1,1,"رواتب شركات صغيرة ممكنة ريموت، ومحتاج تمكن في قانون العمل والتأمينات."],
[/L&D/,2,2,1,"تدريب أونلاين ومدرب مستقل. شهادة TOT وبورتفوليو ورش بتفتح فرص كتير."],
[/HR Analytics/,2,1,0,"طلب كويس ريموت، ومحتاج Power BI وإحصاء."],
[/Employee Relations/,0,0,0,"شغل داخل الشركة غالبًا."],
[/Employee Experience/,1,1,1,"استبيانات وبرامج احتفاظ ممكنة ريموت لشركات صغيرة."],
[/OD Consultant/,1,2,0,"استشارات تنظيمية مستقلة بعد 5+ سنين خبرة."],
[/HRIS/,1,1,1,"إعداد نظم HR وتقارير Power BI ممكن ريموت."],
[/Employer Branding/,2,2,2,"محتوى ولينكدإن للشركات ريموت، وبداية سهلة وبورتفوليو بيتبني بسرعة."],
[/Policy Analyst/,1,1,0,"مراكز أبحاث واستشارات دولية بعد خبرة وإنجليزي ممتاز."],
[/e-Government/,0,1,0,"أغلبه جهات حكومية، والفري لانس استشارات بعد خبرة."],
[/CSR/,1,0,1,"مبادرات وتقارير استدامة ممكنة ريموت مع شركات."],
[/Public Procurement|Public Budget|Local Government|موظف حكومي/,0,0,1,"شغل جهة حكومية بحضور."],
[/Public Project/,1,1,0,"PMP/CAPM بيفتح مشاريع ريموت، والبداية من جهة."],
[/Quality & Inst/,1,2,1,"استشارات ISO مستقلة بعد خبرة وشهادة Lead Auditor."],
[/NGO/,2,1,0,"المنظمات الدولية بتوظف ريموت، لكن التنافس شديد ومحتاج إنجليزي قوي وخبرة تطوع."],
[/PR Officer/,2,2,2,"كتابة وPR وسوشيال ميديا ريموت، وبداية سهلة بحسابات صغيرة."],
[/M&E/,2,2,1,"مستشارين M&E مستقلين مطلوبين مع المنظمات، ومحتاج KoboToolbox وExcel وPower BI."]];
const TIERS=[[/Government Data/,2],[/Tech Recruiter/,2],[/Data Analyst|Power BI|Data Engineer|n8n|Automation|UI\/UX/,1],[/ERP Accounting|FP&A|IFRS|HR Analytics/,3],[/Remote Bookkeeper|Recruiter|Employer Branding|PR Officer|محاسب عام|QA Tester/,4],[/./,2]];
const TV={1:["500–900","1,500–3,000","8–15","20–45"],2:["400–800","1,200–2,500","7–12","15–35"],3:["400–800","1,200–2,500","8–15","20–40"],4:["250–500","700–1,500","5–10","10–20"]};
function RSAL(j,r){const t=TV[TIERS.find(x=>x[0].test(j.t))[1]];let h='';
 if(r[1]>0)h+=`<div class="sal">ريموت كموظف: ${t[0]}$ شهريًا في البداية · ${t[1]}$ مع الخبرة</div>`;
 if(r[2]>0)h+=`<div class="sal">فري لانس: ${t[2]}$ في الساعة للمبتدئ · ${t[3]}$ للخبير</div>`;
 return h?h+'<p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>':''}
function RMTX(j){const r=RMT.find(x=>x[0].test(j.t))||[0,0,0,1,"الشغل ده محتاج حضور غالبًا، وفرص الريموت فيه قليلة."];
 return H('Remote & freelance','ريموت وفري لانس')+`<div class="job"><p><b>طلب الريموت:</b> ${LV[r[1]]} · <b>طلب الفري لانس:</b> ${LV[r[2]]} · <b>سهولة الدخول:</b> ${EZ[r[3]]}</p><p>${r[4]}</p>${RSAL(j,r)}<p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p></div>`}
const POOL={telecom:["اتصالات","Vodafone Egypt · Orange Egypt · e& Egypt · Telecom Egypt"],fintech:["تك مالي","Fawry · Paymob · valU · MNT-Halan"],ecom:["تجارة إلكترونية وتطبيقات","Noon · Amazon Egypt · Jumia · Talabat · Vezeeta · Luciq"],tech:["شركات تقنية","IBM Egypt · Microsoft Egypt · Raya · ITWorx · Siemens · Schneider Electric"],banks:["بنوك","CIB · البنك الأهلي المصري · بنك مصر · QNB Egypt · Banque du Caire · AAIB · HSBC Egypt"],big4:["مكاتب مراجعة","Deloitte · PwC · EY · KPMG · Mazars · Grant Thornton"],fmcg:["شركات سلع استهلاكية","Unilever · P&G · Nestlé · PepsiCo · Coca-Cola · Juhayna · Edita · Americana"],industry:["شركات ومصانع كبيرة","Elsewedy Electric · Orascom Construction · Talaat Moustafa Group · Ezz Steel"],erp:["شركات ERP","شركات تنفيذ SAP وOdoo وMicrosoft Dynamics (Partners)، وأقسام IT في الشركات الكبيرة"],govfin:["جهات حكومية مالية","وزارة المالية · مصلحة الضرائب المصرية · الجهاز المركزي للمحاسبات · الهيئة العامة للرقابة المالية · البنك المركزي المصري"],govgen:["جهات حكومية","جهاز التنظيم والإدارة (بوابة الوظائف الحكومية) · مجلس الوزراء · وزارة التخطيط · CAPMAS · المحافظات والمجالس المحلية · الأكاديمية الوطنية للتدريب"],govict:["جهات حكومية تقنية","ITIDA · وزارة الاتصالات MCIT · مركز المعلومات IDSC · هيئة الاستثمار GAFI"],intl:["منظمات دولية","UNDP · UNICEF · WFP · UNHCR · World Bank · GIZ · الاتحاد الأوروبي · Save the Children"],ngo:["جمعيات أهلية","مصر الخير · بنك الطعام المصري · مؤسسة أهل مصر · صناع الخير"],hrag:["توظيف ومراكز اتصال","Wuzzuf · Bayt · LinkedIn · Concentrix · Teleperformance"],fl:["منصات فري لانس","Upwork · Fiverr · Freelancer · مستقل · خمسات"]};
const EMPR=[[/Government Data/,"govict,govgen"],[/Data Analyst/,"telecom,fintech,ecom,banks,tech"],[/Business Process/,"banks,telecom,industry,tech"],[/Business & Systems/,"tech,banks,telecom,fintech"],[/UI\/UX/,"ecom,fintech,tech"],[/Data Engineer/,"telecom,fintech,ecom,banks"],[/QA Tester/,"tech,fintech,ecom"],[/DBA/,"banks,telecom,tech,govict"],[/Data Governance/,"banks,telecom,govict"],[/IT Project Manager/,"tech,telecom,banks,govict"],[/Power BI/,"telecom,banks,fmcg,ecom"],[/Product Owner/,"fintech,ecom,tech"],[/IT Auditor/,"banks,big4,govfin,telecom"],[/n8n|Automation/,"tech,banks,fintech,telecom,fl"],[/Implementation/,"erp,tech,fintech"],[/Digital Transformation/,"govict,banks,telecom,tech"],[/Power Platform/,"tech,erp,industry,banks"],[/MIS Officer/,"industry,fmcg,banks"],[/ERP Accounting/,"erp,industry,big4"],[/ERP/,"erp,tech,industry,banks"],
[/محاسب عام/,"fmcg,industry,banks"],[/Cost/,"industry,fmcg"],[/Tax/,"big4,fmcg,govfin"],[/Internal Auditor/,"banks,fmcg,industry,telecom"],[/External Auditor/,"big4"],[/Government Accountant/,"govfin"],[/FP&A/,"fmcg,banks,telecom"],[/Remote Bookkeeper/,"fl"],[/Forensic/,"big4,banks"],[/Treasury/,"banks,industry,fmcg"],[/Project Accountant/,"industry"],[/IFRS/,"big4,banks,industry"],
[/Tech Recruiter/,"tech,fintech,ecom,hrag"],[/Recruiter/,"hrag,fmcg,telecom,banks"],[/HR Generalist/,"industry,fmcg,banks,telecom"],[/Payroll/,"industry,fmcg,banks"],[/L&D/,"banks,telecom,fmcg,hrag,fl"],[/HR Analytics/,"telecom,banks,fmcg"],[/Employee Relations/,"industry,fmcg"],[/Employee Experience/,"telecom,fmcg,banks"],[/OD Consultant/,"banks,telecom,fmcg,hrag"],[/HRIS/,"telecom,banks,erp"],[/Employer Branding/,"fmcg,telecom,ecom,hrag"],
[/موظف حكومي|Local Government/,"govgen"],[/Policy Analyst/,"govgen,intl"],[/e-Government/,"govict,govgen,tech"],[/CSR/,"fmcg,banks,ngo"],[/Public Procurement/,"govgen,govfin"],[/Public Budget/,"govfin,govgen"],[/Public Project/,"govgen,intl,ngo"],[/Quality & Inst/,"govgen,industry,banks"],[/NGO|M&E/,"intl,ngo"],[/PR Officer/,"govgen,banks,fmcg"]];
function EMPX(i,j){const r=EMPR.find(x=>x[0].test(j.t));if(!r)return '';
 return H('Possible employers','جهات ممكن تشتغل أو تتدرب فيها')+r[1].split(',').map(k=>`<div class="job"><h4>${POOL[k][0]}</h4><p>${POOL[k][1]}</p></div>`).join('')+'<p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>'}
const OPP=[
{tr:["ITIDA + NTI (تدريب صيفي مجاني)","DEPI رواد مصر الرقمية","Huawei ICT Academy وSeeds for the Future","Orange Digital Center","IBM SkillsBuild (مجاني)","Cisco Networking Academy","برامج الخريجين والتدريب الصيفي في Vodafone وe& وCIB والأهلي وبنك مصر وQNB"],
 sec:[["حكومي","ITIDA · وزارة الاتصالات · مركز المعلومات IDSC · البنك المركزي"],["خاص محلي","Fawry · Paymob · valU · MNT-Halan · Vezeeta · Luciq · ITWorx · Raya"],["متعدد الجنسيات","IBM Egypt · Microsoft Egypt · Vodafone · Orange · Siemens · Schneider Electric · Amazon Egypt"]],
 roles:["Data / BI Analyst Intern","Junior Business Analyst","ERP / Odoo Trainee","MIS Officer","Digital Transformation Associate","QA Trainee"]},
{tr:["تدريب Big 4: Deloitte وPwC وEY وKPMG (غالبًا من سنة تالتة)","مكاتب Mazars وGrant Thornton","تدريب صيفي في CIB والأهلي وبنك مصر وQNB","وظائف مالية تدريبية في Unilever وP&G وNestlé وPepsiCo","دورات معهد البنوك المصري EBI","كورسات ACCA وCMA وIFRS"],
 sec:[["حكومي","وزارة المالية · مصلحة الضرائب · الجهاز المركزي للمحاسبات · الرقابة المالية"],["خاص محلي","Juhayna · Edita · Elsewedy Electric · Orascom · Talaat Moustafa · مكاتب محاسبة ومراجعة محلية"],["متعدد الجنسيات","Deloitte · PwC · EY · KPMG · Unilever · P&G · Nestlé · PepsiCo · HSBC Egypt"]],
 roles:["Audit Intern / Associate","Accountant Trainee","Tax Associate","Finance Intern","AP / AR Accountant","Cost Accountant Trainee"]},
{tr:["تدريب HR في Unilever وP&G وNestlé وPepsiCo","برامج Vodafone وOrange وe& (Talent وHR)","HR في بنوك مثل CIB والأهلي وQNB","Concentrix وTeleperformance (توظيف بحجم كبير)","منصات Wuzzuf وBayt للتعرف على السوق","كورسات CIPD وSHRM وAIHR"],
 sec:[["حكومي","الجهاز الإداري · أكاديميات ومعاهد حكومية · هيئات عامة"],["خاص محلي","Juhayna · Edita · Elsewedy Electric · Orascom · وكالات توظيف محلية"],["متعدد الجنسيات","Unilever · P&G · Nestlé · PepsiCo · Vodafone · Orange · Concentrix · Teleperformance"]],
 roles:["HR Intern","Recruitment Coordinator","Talent Acquisition Trainee","HR Admin Assistant","Payroll Assistant","L&D Coordinator"]},
{tr:["الأكاديمية الوطنية للتدريب NTA","مسابقات جهاز التنظيم والإدارة","برامج وزارة التخطيط والتنمية الاقتصادية","تدريب وتطوع UNDP وUNICEF وWFP وUN Volunteers","برامج GIZ والاتحاد الأوروبي","جمعيات مثل مصر الخير وبنك الطعام المصري","أقسام CSR في البنوك والشركات الكبيرة"],
 sec:[["حكومي","جهاز التنظيم والإدارة · مجلس الوزراء · وزارة التخطيط · CAPMAS · المحافظات والمحليات"],["خاص محلي","مصر الخير · بنك الطعام المصري · مؤسسة أهل مصر · أقسام CSR في بنوك وشركات"],["منظمات دولية","UNDP · UNICEF · WFP · UNHCR · World Bank · GIZ · الاتحاد الأوروبي"]],
 roles:["Program Assistant","Policy Research Assistant","M&E Assistant","Administrative Officer (حكومي)","CSR Coordinator","Project Coordinator"]}];
const WA=`<a class="wa" style="margin-top:.75rem" href="https://whatsapp.com/channel/0029VbCzDrwAjPXJcm9nox1O" target="_blank" rel="noopener"><i aria-hidden="true" class="fa-brands fa-whatsapp"></i><span><b>مش لازم تدور على التدريبات وفرص الشغل بنفسك</b><small>بنبعتهم أول بأول على قناة الواتساب، اشترك وخلّي الفرص توصلك.</small></span><i aria-hidden="true" class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
const OPPX=i=>{const o=OPP[i];return H('Training & opportunities','تدريب وفرص شغل')+WA+`<h3 class="gh3">تدريب وبرامج</h3>${li(o.tr)}<h3 class="gh3">جهات حسب القطاع</h3>${o.sec.map(s=>`<div class="job"><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join('')}<h3 class="gh3">وظايف تبدأ بيها</h3>${li(o.roles)}<h3 class="gh3">بتقدم فين؟</h3>${li(["LinkedIn وWuzzuf وBayt وForasna","صفحات Careers في الشركات والبنوك","بوابة الوظائف الحكومية (جهاز التنظيم والإدارة)","صفحات التقديم الرسمية للبرامج المجانية"])}<p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>`};
const LC=(t,d,u,ic)=>`<a class="job lnk" href="${u}" target="_blank" rel="noopener"><h4><i class="${ic||'fa-solid fa-arrow-up-right-from-square'}"></i> ${t}</h4><p>${d}</p></a>`;
const CL=[["إدراك Edraak","منصة عربية مجانية بشهادات إتمام","https://www.edraak.org/","fa-solid fa-book-open-reader"],["رواق Rwaq","مساقات عربية مجانية من جامعات ومتخصصين","https://www.rwaq.org/","fa-solid fa-book-open-reader"],["Almentor","كورسات عربي في الإدارة والمهارات","https://www.almentor.net/","fa-solid fa-chalkboard-user"],["Coursera","كورسات جامعات وشركات (Audit مجاني أو منحة مالية)","https://www.coursera.org/","fa-solid fa-graduation-cap"],["edX","كورسات هارفارد وMIT وغيرهم","https://www.edx.org/","fa-solid fa-building-columns"],["Google Digital Garage","كورسات تسويق ومهارات رقمية بشهادة","https://learndigital.withgoogle.com/digitalgarage","fa-brands fa-google"],["Microsoft Learn","Excel وPower BI وAzure مجانًا","https://learn.microsoft.com/training/","fa-brands fa-microsoft"],["Khan Academy بالعربي","أساسيات الرياضيات والإحصاء والاقتصاد","https://ar.khanacademy.org/","fa-solid fa-square-root-variable"],["NTI","المعهد القومي للاتصالات – برامج تدريب","https://www.nti.sci.eg/","fa-solid fa-building"],["Alison","كورسات مجانية بشهادات","https://alison.com/","fa-solid fa-award"]];
const ML=[
[["freeCodeCamp","تعلم الويب والبيانات والـ SQL مجانًا","https://www.freecodecamp.org/","fa-solid fa-code"],["Harvard CS50","أشهر كورس برمجة مجاني","https://cs50.harvard.edu/x/","fa-solid fa-laptop-code"],["Kaggle Learn","Python وSQL وتعلم الآلة بتمارين","https://www.kaggle.com/learn","fa-solid fa-database"],["SQLBolt","تمارين SQL تفاعلية","https://sqlbolt.com/","fa-solid fa-database"],["Power BI – Microsoft Learn","مسار Power BI الرسمي","https://learn.microsoft.com/training/powerplatform/power-bi","fa-solid fa-chart-column"],["Google Data Analytics","مسار شهادة تحليل البيانات","https://www.coursera.org/professional-certificates/google-data-analytics","fa-solid fa-chart-line"],["Odoo eLearning","تعلم Odoo ERP من المصدر","https://www.odoo.com/slides","fa-solid fa-boxes-stacked"],["roadmap.sh","خرائط طريق لكل مسار تقني","https://roadmap.sh/","fa-solid fa-route"],["Cisco Networking Academy","الشبكات والأمن السيبراني","https://www.netacad.com/","fa-solid fa-network-wired"]],
[["ACCA","أشهر شهادة محاسبة دولية","https://www.accaglobal.com/","fa-solid fa-certificate"],["CMA – IMA","محاسبة إدارية وتكاليف","https://www.imanet.org/","fa-solid fa-certificate"],["AICPA & CIMA","CPA وCGMA","https://www.aicpa-cima.com/","fa-solid fa-certificate"],["IFRS Foundation","معايير التقارير المالية الدولية","https://www.ifrs.org/","fa-solid fa-book"],["مصلحة الضرائب المصرية","القوانين والفاتورة الإلكترونية","https://www.eta.gov.eg/","fa-solid fa-file-invoice-dollar"],["IIA","معهد المراجعين الداخليين CIA","https://www.theiia.org/","fa-solid fa-clipboard-check"],["محاسبة لغير المحاسبين","كورسات على Coursera","https://www.coursera.org/search?query=accounting%20fundamentals","fa-solid fa-calculator"],["QuickBooks/Xero على Udemy","للشغل الريموت","https://www.udemy.com/courses/search/?q=quickbooks","fa-solid fa-laptop"],["ACFE","شهادة CFE للمحاسبة الجنائية","https://www.acfe.com/","fa-solid fa-magnifying-glass-dollar"]],
[["SHRM","شهادات SHRM-CP وSHRM-SCP","https://www.shrm.org/","fa-solid fa-certificate"],["HRCI","شهادات PHR وSPHR","https://www.hrci.org/","fa-solid fa-certificate"],["CIPD","شهادات الموارد البشرية البريطانية","https://www.cipd.org/","fa-solid fa-certificate"],["AIHR","كورسات HR Analytics وHR","https://www.aihr.com/","fa-solid fa-chart-pie"],["LinkedIn Learning","كورسات توظيف وقيادة","https://www.linkedin.com/learning/","fa-brands fa-linkedin"],["وزارة العمل المصرية","قانون العمل والتشريعات","https://www.manpower.gov.eg/","fa-solid fa-scale-balanced"],["HR على Coursera","كورسات إدارة الموارد البشرية","https://www.coursera.org/search?query=human%20resources","fa-solid fa-users"],["HR Analytics","تعلم تحليل بيانات الموارد البشرية","https://www.coursera.org/search?query=hr%20analytics","fa-solid fa-chart-pie"],["Train the Trainer","كورسات TOT على Udemy","https://www.udemy.com/courses/search/?q=train%20the%20trainer","fa-solid fa-chalkboard-user"]],
[["CAPMAS","الجهاز المركزي للتعبئة والإحصاء","https://www.capmas.gov.eg/","fa-solid fa-chart-simple"],["UN SDG:Learn","كورسات التنمية المستدامة","https://www.unsdglearn.org/","fa-solid fa-earth-africa"],["PMI","شهادات إدارة المشروعات PMP وCAPM","https://www.pmi.org/","fa-solid fa-diagram-project"],["World Bank OLC","كورسات سياسات وتنمية مجانية","https://olc.worldbank.org/","fa-solid fa-landmark"],["وزارة الاتصالات MCIT","التحول الرقمي والمبادرات","https://mcit.gov.eg/","fa-solid fa-laptop-code"],["مجلس الوزراء","القرارات والخدمات الحكومية","https://www.cabinet.gov.eg/","fa-solid fa-landmark"],["Public Administration","كورسات على Coursera","https://www.coursera.org/search?query=public%20administration","fa-solid fa-sitemap"],["Public Policy","كورسات على edX","https://www.edx.org/search?q=public%20policy","fa-solid fa-scroll"],["ISO 9001","تعلم الجودة والتطوير المؤسسي","https://www.udemy.com/courses/search/?q=iso%209001","fa-solid fa-medal"]]];
const q=encodeURIComponent;


const SK=[
["english",/$^/,"اللغة الإنجليزية للأعمال","كورس انجليزي للمبتدئين","business english",1],
["excel",/Excel|اكسيل/i,"Excel من الصفر","شرح اكسيل من الصفر","excel basics",1],
["prog",/$^/,"أساسيات البرمجة (Python)","بايثون من الصفر","python for beginners",1],
["softskills",/تواصل|عرض|تفاوض/,"مهارات التواصل والعرض","مهارات التواصل والعرض التقديمي","communication skills",1],
["accounting",/محاسب|مراجع|تكاليف|Account|Audit/i,"أساسيات المحاسبة","اساسيات المحاسبة المالية","accounting fundamentals",1],
["hrbasics",/موارد|HR |توظيف|Recruit|Talent|عاملين|رواتب|Payroll/i,"أساسيات الموارد البشرية","اساسيات ادارة الموارد البشرية","human resource management fundamentals",1],
["pubadmin",/حكوم|سياسات|Policy|عامة|محلية|Public|NGO/,"مبادئ الإدارة العامة","مبادئ الادارة العامة","public administration introduction",1],
["sql",/SQL/,"SQL لقواعد البيانات","تعلم SQL","sql for beginners",2],
["powerbi",/Power BI|Tableau|لوحات|BI /,"Power BI وتصوير البيانات","Power BI شرح","power bi data analysis",2],
["python",/Python/,"Python لتحليل البيانات","بايثون لتحليل البيانات","python data analysis",2],
["excelAdv",/Pivot|Power Query|Excel متقدم/,"Excel متقدم (Pivot وPower Query)","اكسيل متقدم","advanced excel",2],
["stat",/إحصاء|Stat|SPSS|بحوث/,"الإحصاء للأعمال","الاحصاء للمبتدئين","statistics for business",2],
["ba",/تحليل أعمال|Business Analy|User Stories|Product/,"تحليل الأعمال BA","تحليل الاعمال Business Analysis","business analysis fundamentals",2],
["costacc",/تكاليف|Cost/,"محاسبة التكاليف","محاسبة التكاليف","cost accounting",2],
["laborlaw",/قانون العمل|لوائح|عاملين|علاقات عمل|Employee Relations/,"قانون العمل المصري","شرح قانون العمل المصري","labor law basics",2],
["web",/ويب|Web|HTML|React|JavaScript|Frontend|Backend/,"تطوير الويب","تعلم تطوير الويب","web development bootcamp",2],
["network",/شبكات|Network|Cisco/,"أساسيات الشبكات","اساسيات الشبكات","computer networking basics",2],
["security",/أمن|Cyber|Security|SOC/,"الأمن السيبراني","الامن السيبراني للمبتدئين","cybersecurity fundamentals",2],
["uiux",/UI|UX|Figma/,"تصميم UI/UX","تصميم UI UX","ui ux design",2],
["git",/Git|GitHub/,"Git وGitHub","شرح Git و GitHub","git and github",2],
["writing",/كتابة|محتوى|PR |إعلام/,"الكتابة المهنية وإعداد التقارير","الكتابة المهنية","business writing",2],
["erp",/ERP|Odoo|SAP/,"أنظمة ERP (Odoo/SAP)","شرح اودو ERP","odoo erp",3],
["agile",/Agile|Scrum|Jira/,"Agile وScrum","اجايل سكرم","agile scrum",3],
["ifrs",/IFRS|معايير|مراجعة|قوائم/,"معايير IFRS","معايير التقارير المالية IFRS","ifrs fundamentals",3],
["tax",/ضريب|Tax|فاتورة/,"الضرائب والفاتورة الإلكترونية","الضرائب في مصر","taxation basics",3],
["audit",/مراجع|Audit|IIA/,"أساسيات المراجعة","اساسيات المراجعة","auditing fundamentals",3],
["finmodel",/FP&A|نمذجة|موازنات/,"النمذجة المالية","النمذجة المالية","financial modeling",3],
["qb",/QuickBooks|Xero|ريموت|Bookkeep/,"QuickBooks للمحاسبة","كويك بوكس","quickbooks",3],
["recruit",/توظيف|Recruit|Talent|Sourc/,"التوظيف واختيار المرشحين","التوظيف والمقابلات","recruitment fundamentals",3],
["payroll",/رواتب|Payroll|تأمينات|مزايا/,"الرواتب والتأمينات","حساب المرتبات والتأمينات","payroll basics",3],
["lnd",/TOT|L&D|تدريب المدربين|مسؤول تدريب/,"تدريب المدربين TOT","تدريب المدربين TOT","train the trainer",3],
["hranalytics",/HR Analytics|استبيانات|دوران/,"تحليلات الموارد البشرية","تحليلات الموارد البشرية","hr analytics",3],
["procure",/مشتريات|مناقصات|تعاقدات|Procurement/,"المشتريات والمناقصات","المشتريات والمناقصات","procurement basics",3],
["budget",/ميزانية|موازنة|Budget/,"الموازنة العامة","الموازنة العامة","public budgeting",3],
["pm",/PMP|CAPM|Project Manager|إدارة مشروعات|مدير مشروع|مشروعات عامة|PMO/,"إدارة المشروعات","ادارة المشروعات","project management fundamentals",3],
["iso",/ISO|جودة/,"الجودة وISO 9001","ISO 9001 شرح","iso 9001 quality management",3],
["cloud",/Cloud|Azure|AWS/,"الحوسبة السحابية","الحوسبة السحابية","cloud computing fundamentals",3],
["rpa",/RPA|UiPath/,"أتمتة RPA بـ UiPath","UiPath RPA","uipath rpa",3],
["lowcode",/Power Apps|Low-Code|Dataverse|Power Platform/,"Power Apps وPower Automate","Power Apps شرح","power apps power automate",3],
["ml",/تعلم الآلة|Machine|Artificial|ذكاء/,"تعلم الآلة والذكاء الاصطناعي","تعلم الآلة","machine learning",3],
["me",/M&E|تقييم أثر|مانحين|مقترحات/,"كتابة المقترحات وM&E","كتابة المقترحات للمانحين","monitoring and evaluation",3],
["acca",/ACCA|CMA|CIA|CPA|CFE/,"التحضير لشهادة ACCA/CMA","ACCA شرح","acca certification",4],
["shrm",/SHRM|CIPD|HRCI/,"شهادات SHRM/CIPD/HRCI","SHRM CP شرح","shrm cp exam prep",4],
["pmp",/PMP|CAPM/,"شهادة PMP/CAPM","PMP شرح","pmp exam prep",4],
["bankops",/بنك|Bank|Teller|Relationship|عمليات بنكية|Corporate Banker/,"أساسيات العمل المصرفي","اساسيات العمل المصرفي","banking fundamentals",1,[4]],
["econ",/اقتصاد|Econom|Policy/,"مبادئ الاقتصاد الجزئي والكلي","الاقتصاد الجزئي والكلي","microeconomics macroeconomics",1,[7,9]],
["digimkt",/تسويق|Marketer|Marketing|E-commerce|Brand|Content|Business Development/,"أساسيات التسويق الرقمي","التسويق الرقمي من الصفر","digital marketing fundamentals",1,[6]],
["prob",/احتمال|Actuar|أكتوار|Insurance|تأمين|ERM|معاشات/,"الاحتمالات والإحصاء","نظرية الاحتمالات","probability and statistics",1,[8]],
["creditrisk",/ائتمان|مخاطر|Credit|Risk|ERM/,"تحليل الائتمان وإدارة المخاطر","تحليل الائتمان","credit risk analysis",2,[4,8]],
["invest",/Invest|استثمار|Wealth|سمسار|Portfolio|Financial Analyst|VC|Relations/,"أساسيات الاستثمار وأسواق المال","اساسيات الاستثمار والبورصة","investing fundamentals",2,[5]],
["ads",/Digital Marketer|إعلان|تسويق رقمي|E-commerce|متجر/,"الإعلانات المدفوعة (Meta وGoogle)","اعلانات فيسبوك وجوجل","meta ads google ads",2,[6]],
["seo",/SEO|Content|محتوى/,"SEO وتسويق المحتوى","SEO شرح","seo basics",2,[6]],
["sales",/مبيعات|Sales|Business Development|بيع/,"فنون البيع والتفاوض","فن البيع والتفاوض","sales techniques negotiation",2,[6]],
["ecom",/E-commerce|متجر|إلكتروني/,"التجارة الإلكترونية وإدارة المتاجر","ادارة المتاجر الالكترونية","ecommerce store management",2,[6]],
["research",/بحث|Research|باحث|Brand|سوق/,"بحوث السوق والبحث العلمي","بحوث التسويق","market research methods",2,[6,7]],
["feas",/جدوى|Feasibility/,"دراسات الجدوى","دراسات الجدوى","feasibility study",2,[7,9]],
["actuarial",/أكتوار|Actuar|Pension|معاشات|Underwrit|اكتتاب/,"مدخل للعلوم الاكتوارية","علوم اكتوارية","actuarial science introduction",2,[8]],
["aml",/AML|Compliance|امتثال|غسل/,"الامتثال ومكافحة غسل الأموال","مكافحة غسل الاموال AML","aml compliance basics",3,[4]],
["econometrics",/Economic|Econom|اقتصادي|سياسات/,"الاقتصاد القياسي (Stata/EViews)","الاقتصاد القياسي","econometrics stata",3,[7]],
["cfa",/CFA|Investment|Wealth|Portfolio|استثمار/,"التحضير لـ CFA Level 1","CFA Level 1 شرح","cfa level 1",4,[5]],
["ifoa",/IFoA|SOA|Actuarial Analyst|أكتوار/,"امتحانات IFoA (CS1 وCM1)","امتحانات IFoA","ifoa cs1 cm1 exam prep",4,[8]],
["energy",/طاقة|Energy|Renewable|بترول/,"أساسيات اقتصاد الطاقة والبترول","اقتصاد الطاقة والبترول","energy economics basics",1,[9]],
["hse",/HSE|سلامة|NEBOSH|IOSH/,"السلامة والصحة المهنية HSE","السلامة والصحة المهنية","nebosh igc osh basics",3,[9]]];
const SKI=Object.fromEntries(SK.map(x=>[x[0],x]));
const BASE=[[["english","excel","prog"],["sql","powerbi","ba"],["agile","git"],["cloud"]],[["english","excel","accounting"],["excelAdv","costacc","stat"],["ifrs","erp"],["acca"]],[["english","excel","hrbasics","softskills"],["laborlaw","stat"],["hranalytics"],["shrm"]],[["english","excel","pubadmin"],["stat","writing"],["pm","budget"],["me"]]];
const TOOLS=['excel','excelAdv','sql','powerbi','python','git','web','network','security','uiux','erp','agile','cloud','ml','rpa','lowcode','stat'];
const PL=new Map();
const PLAN=(i,j,Y)=>{if(PL.has(j))return PL.get(j);const jt=j.t+' '+(j.r||'')+' '+(j.u||''),used=new Set(),out4=[];
for(let k=0;k<4;k++){let ids=[];SK.forEach(s=>{if((s[5]==k+1&&s[1].test(jt)&&(!s[6]||s[6].includes(i)))||(Y&&Y[k]&&TOOLS.includes(s[0])&&s[1].test(Y[k].join(' '))))ids.push(s[0])});ids.push(...BASE[i][k]);
ids=ids.filter(d=>!used.has(d)&&(used.add(d),1)).slice(0,5);out4.push(ids)}
PL.set(j,out4);return out4};
const YL=(i,j,k,Y)=>{const en=sp(j.t)[0],ar=sp(j.t)[1]||en,A=(u,t)=>`<a href="${u}" target="_blank" rel="noopener">${t}</a>`;
const row=(l,a,e)=>`<div class="sk"><span>${l}</span>${A('https://www.youtube.com/results?search_query='+q(a),'يوتيوب عربي')}${A('https://www.coursera.org/search?query='+q(e),'Coursera')}${A('https://www.udemy.com/courses/search/?q='+q(e),'Udemy')}</div>`;
let h=PLAN(i,j,Y)[k].map(d=>{const x=SKI[d];return row(x[2],x[3],x[4])}).join('');
const core=[null,[`أساسيات مجال ${ar}`,`${ar} للمبتدئين`,`${en} fundamentals`],[`تطبيق عملي ومشروع في ${ar}`,`${ar} مشروع عملي`,`${en} project`],[`التجهيز للتوظيف: CV ومقابلات ${ar}`,`${ar} مقابلة شخصية`,`${en} interview questions`]][k];
h+=core?row(...core):`<div class="sk"><span>مجاني بالعربي</span>${A('https://www.edraak.org/','إدراك')}${A('https://www.rwaq.org/','رواق')}${A('https://www.almentor.net/','Almentor')}</div>`;
return `<div class="skl"><b>🎓 كورسات ولينكات السنة دي</b>${h}</div>`};

/* ===== التخصصات الجديدة: إدارة الأعمال (بنوك + تمويل + تسويق)، الاقتصاد، العلوم الاكتوارية ===== */
const BA=[4,5,6,9];
const TABS=[[0,'fa-laptop-code'],[1,'fa-calculator'],['ba','fa-briefcase'],[2,'fa-users'],[7,'fa-chart-line'],[8,'fa-percent'],[3,'fa-landmark']];
const BAT=[[4,'fa-building-columns','Banking','إدارة البنوك'],[5,'fa-coins','Finance & Investment','التمويل والاستثمار'],[6,'fa-bullhorn','Marketing & E-commerce','التسويق والتجارة الإلكترونية'],[9,'fa-oil-well','Petroleum & Energy','المنشآت البترولية والطاقة']];
function setTab(i){[...tabs.children].forEach((b,x)=>b.setAttribute('aria-pressed',TABS[x][0]==(BA.includes(i)?'ba':i)))}
function showBA(){setTab('ba');
 out.innerHTML=`<h2 class="text-2xl md:text-3xl font-black text-white mb-2">إدارة الأعمال</h2><span class="hrs">48 ساعة معتمدة</span><p class="gp">تخصص رئيسي واحد بتختار جواه مسار: إدارة البنوك، أو التمويل والاستثمار، أو التسويق والتجارة الإلكترونية، أو إدارة المنشآت البترولية والطاقة. كل مسار له مجالات شغل وتدريب وكورسات ولينكات خاصة بيه.</p><h3 class="gh3">اختار المسار</h3><div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">${BAT.map(t=>`<button class="subj-card panel rounded-2xl p-4" style="--c:#2dd4bf" onclick="show(${t[0]})"><div class="subj-icon w-11 h-11 rounded-xl flex items-center justify-center mb-2"><i aria-hidden="true" class="fa-solid ${t[1]}"></i></div><div class="font-extrabold text-white text-sm" dir="ltr">${t[2]}</div><div class="ar">${t[3]}</div></button>`).join('')}</div><p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>`}

/* مضاعفات المرتب حسب القطاع (حكومي / خاص / متعدد الجنسيات) */
FAC.push([[.8,.75],[1,1],[1.3,1.45]],[[.6,.55],[1,1],[1.35,1.5]],[[.6,.55],[1,1],[1.35,1.5]],[[.6,.55],[1,1],[1.35,1.5]],[[.6,.55],[1,1],[1.35,1.5]],[[.8,.75],[1,1],[1.3,1.45]]);
AV.unshift([/Remote Bookkeeper/,'pm']);
AV.unshift([/VC Analyst|Investor Relations|Wealth Manager|Business Development|Digital Marketer|Content Manager|E-commerce|Brand & Market/,'pm']);

/* ريموت وفري لانس */
RMT.unshift(
[/Cyber/,1,1,0,"الأمن السيبراني ممكن ريموت مع شركات أمن خارجية بعد خبرة وشهادة زي Security+، لكن المبتدئ غالبًا بيبدأ من مركز عمليات أمن SOC أو شركة بحضور، والمنافسة على أول وظيفة عالية."],
[/Relationship Officer/,0,0,2,"شغل فرع بحضور، وفرص الريموت فيه شبه معدومة."],
[/Credit & Risk/,0,0,0,"تحليل الائتمان شغل داخل البنك بحضور، ومحتاج تحليل مالي قوي وإنجليزي."],
[/Banking Operations/,0,0,1,"عمليات البنك شغل داخلي بحضور، وغالبًا بيبدأ من برامج الخريجين أو التدريب."],
[/AML Compliance/,1,0,0,"الامتثال ممكن يبقى ريموت جزئي بعد خبرة، وشهادة CAMS من ACAMS بتفتح أبواب كتير."],
[/Corporate Banker/,0,0,0,"إدارة محفظة عملاء الشركات شغل علاقات وحضور، ومحتاج خبرة وتحليل مالي."],
[/Financial Analyst/,1,1,0,"التحليل المالي مطلوب ريموت لشركات خارجية، ومحتاج Excel ونمذجة مالية قوية وإنجليزي ممتاز."],
[/Policy & Investment/,1,0,0,"تحليل السياسات والاستثمار شغل جهات وبنوك استثمار ومراكز بحوث غالبًا بحضور."],
[/محلل استثمار/,1,1,0,"التحليل الاستثماري ريموت محدود، وغالبًا الشغل في شركات السمسرة والبنوك الاستثمارية بحضور، وCFA بيفرق."],
[/Wealth Manager/,0,0,0,"إدارة الثروات بتعتمد على علاقات العملاء والثقة، فالشغل بحضور وبعد خبرة."],
[/Investor Relations/,0,0,0,"علاقات المستثمرين شغل داخل الشركات المقيدة في البورصة."],
[/VC Analyst/,1,0,0,"صناديق رأس المال الجريء بتوظف عدد قليل، ومحتاج بورتفوليو تحليل ستارت أبس وإنجليزي قوي."],
[/Digital Marketer/,2,2,2,"طلب عالي ريموت وفري لانس (إعلانات، SEO، إدارة صفحات). بورتفوليو حملات حقيقية بيفرق أكتر من الشهادة."],
[/Business Development/,1,1,2,"المبيعات وتطوير الأعمال ممكن ريموت لشركات الخدمات والبرمجيات، والعمولات بتفرق في الدخل."],
[/Content Manager/,2,2,2,"كتابة وإدارة المحتوى مطلوبة ريموت وفري لانس، والمنافسة عالية والبورتفوليو هو الباب."],
[/E-commerce Manager/,1,1,1,"إدارة المتاجر الإلكترونية ممكن فري لانس لمتاجر صغيرة، والشغل في الشركات الكبيرة بحضور."],
[/Brand & Market Research/,1,1,1,"بحوث السوق ممكن ريموت وفري لانس مع وكالات وشركات ناشئة، وإتقان Excel وSPSS بيفرق."],
[/باحث ومحلل اقتصادي|Economic Researcher/,1,1,0,"البحث الاقتصادي ريموت محدود، لكن فيه فرص مع مراكز بحوث ومنظمات بعد خبرة وإنجليزي قوي."],
[/دراسات جدوى|Feasibility/,0,1,1,"دراسات الجدوى بتتعمل غالبًا لعملاء محليين بالجنيه (مشروعات صغيرة وطلبات تمويل)، وفيه فري لانس محلي لكن الريموت بالدولار قليل. البورتفوليو وسمعتك بيفتحوا الشغل."],
[/Economic Data Analyst/,2,2,1,"تحليل البيانات الاقتصادية مطلوب ريموت وفري لانس، ومحتاج Excel وPython أو R وSQL ولوحات Power BI."],
[/Development Consultant/,1,2,0,"استشارات التنمية مع منظمات وجهات مانحة ممكنة ريموت بعد خبرة، والتنافس شديد."],
[/Actuarial Analyst/,1,1,0,"الأكتواري ممكن يشتغل ريموت مع شركات تأمين خارجية لو معاه امتحانات مهنية (IFoA/SOA)، والبداية غالبًا من شركة تأمين أو استشارات."],
[/Insurance Risk/,1,0,0,"تحليل المخاطر والاكتتاب شغل داخل شركات التأمين غالبًا بحضور."],
[/Insurance Data Analyst/,2,1,1,"تحليل بيانات التأمين مطلوب ريموت لشركات خارجية، ومحتاج SQL وPython أو R وفهم أساسيات التأمين."],
[/Pension Analyst/,0,0,0,"المعاشات والتأمينات شغل جهات وصناديق بحضور."],
[/ERM Analyst/,1,0,0,"إدارة المخاطر المؤسسية ريموت جزئي بعد خبرة، وشهادة FRM من GARP بتفرق."],
[/Energy Admin/,0,0,1,"الشغل الإداري والمالي في شركات البترول داخل الشركة بحضور، وبيحتاج إنجليزي قوي."],
[/Energy Analyst/,1,1,0,"تحليل اقتصاد الطاقة مطلوب ريموت لشركات استشارات ومراكز أبحاث بعد خبرة، ومحتاج Excel وPython وكتابة تقارير بالإنجليزي."],
[/Procurement & Contracts/,0,0,0,"المشتريات والعقود في الطاقة شغل داخل الشركة بحضور، ومحتاج تمكن في المناقصات والعقود."],
[/Renewable Projects/,1,0,0,"منسقو مشروعات الطاقة المتجددة بيشتغلوا غالبًا في مواقع أو مكاتب الشركات، والريموت الجزئي ممكن بعد خبرة."],
[/HSE Officer/,0,0,1,"السلامة والبيئة شغل ميداني بحضور، وشهادة NEBOSH أو IOSH بتفتح فرص كتير."]
);
TIERS.unshift([/Financial Analyst|Actuarial Analyst|ERM Analyst/,3],[/Digital Marketer|Content Manager|E-commerce/,3],[/Business Development|Brand & Market/,4]);

/* جهات التوظيف */
POOL.insurance=["شركات تأمين","مصر للتأمين · مصر لتأمينات الحياة · Allianz Egypt · GIG Egypt · MetLife Egypt"];
POOL.brokers=["سمسرة وبنوك استثمار وإدارة أصول","EFG Holding · CI Capital · Beltone · Naeem · Thndr"];
POOL.agency=["وكالات إعلان وتسويق","وكالات إعلان وتسويق رقمي وسوشيال ميديا في القاهرة والإسكندرية · أقسام التسويق في الشركات الكبيرة"];
POOL.research=["مراكز بحوث ودراسات","معهد التخطيط القومي · مركز المعلومات IDSC · المركز المصري للدراسات الاقتصادية ECES · Economic Research Forum ERF · مركز الأهرام للدراسات"];
POOL.social=["تأمينات ومعاشات","الهيئة القومية للتأمين الاجتماعي · صناديق التأمين الخاصة · الهيئة العامة للرقابة المالية"];
POOL.energy=["شركات بترول وطاقة","Enppi · Petrojet · EPROM · Eni Egypt · bp Egypt · Shell Egypt · Apache Egypt"];
POOL.govenergy=["جهات حكومية في قطاع البترول","وزارة البترول والثروة المعدنية · الهيئة المصرية العامة للبترول EGPC · EGAS للغاز الطبيعي · ECHEM للبتروكيماويات · GANOPE (جنوب الوادي)"];
POOL.renew=["كهرباء وطاقة متجددة","وزارة الكهرباء والطاقة المتجددة · الشركة المصرية القابضة للكهرباء · ACWA Power · Scatec · AMEA Power"];
POOL.consult=["استشارات ودراسات جدوى","مكاتب استشارات اقتصادية ومالية وهندسية · Big 4 · بيوت خبرة محلية"];
EMPR.unshift(
[/Cyber/,"banks,telecom,fintech,govict,tech"],
[/QA/,"tech,fintech,ecom,telecom"],
[/Relationship Officer|Banking Operations/,"banks,fintech"],
[/Credit & Risk|Corporate Banker/,"banks,fintech"],
[/AML Compliance/,"banks,fintech,big4,govfin"],
[/Financial Analyst/,"fmcg,banks,telecom,brokers,industry"],
[/Policy & Investment/,"govgen,research,banks,intl"],
[/محلل استثمار/,"brokers,banks"],
[/Wealth Manager/,"banks,brokers"],
[/Investor Relations/,"industry,fmcg,banks,telecom,brokers"],
[/VC Analyst/,"fintech,tech,brokers"],
[/Digital Marketer/,"agency,ecom,fintech,telecom,fmcg,fl"],
[/Business Development/,"fmcg,telecom,tech,industry,banks"],
[/Content Manager/,"agency,ecom,telecom,fmcg,fl"],
[/E-commerce Manager/,"ecom,fmcg,fintech,fl"],
[/Brand & Market Research/,"fmcg,agency,telecom,banks"],
[/باحث ومحلل اقتصادي|Economic Researcher/,"research,govgen,banks,intl"],
[/دراسات جدوى|Feasibility/,"consult,banks,govgen,fl"],
[/Economic Data Analyst/,"research,govgen,banks,telecom"],
[/Development Consultant/,"intl,ngo,consult,govgen"],
[/Actuarial Analyst/,"insurance,big4,social,banks"],
[/Insurance Risk/,"insurance,banks,social"],
[/Insurance Data Analyst/,"insurance,telecom,fintech,big4"],
[/Pension Analyst/,"social,insurance,govfin"],
[/ERM Analyst/,"banks,insurance,big4,industry"],
[/Energy Admin/,"govenergy,energy,industry"],
[/Energy Analyst/,"govenergy,energy,research,intl"],
[/Procurement & Contracts/,"govenergy,energy,industry"],
[/Renewable Projects/,"renew,govenergy,energy"],
[/HSE Officer/,"energy,govenergy,industry,renew"]
);
IC.push(["Digital Marketer","fa-bullhorn"],["Relationship","fa-handshake"],["Insurance","fa-umbrella"],["Pension","fa-umbrella"],["ERM","fa-triangle-exclamation"],["Feasibility","fa-calculator"],["Development Consultant","fa-hand-holding-heart"],["Financial Analyst","fa-chart-pie"],["اقتصادي","fa-chart-line"],["Energy","fa-bolt"]);

/* تدريب وفرص شغل (نفس شكل باقي التخصصات) */
OPP.push(
{tr:["دورات المعهد المصرفي المصري EBI، وتابع برامجه للطلبة والخريجين (زي التدريب من أجل التوظيف TFE)","برامج الخريجين والتدريب الصيفي في CIB والأهلي وبنك مصر وQNB وبنك القاهرة","برامج Management Trainee في البنوك الخاصة والأجنبية","دورات الائتمان والتحليل المالي والمخاطر","شهادة CAMS لمكافحة غسل الأموال بعد خبرة","كورسات Excel والتحليل المالي والنمذجة"],
 sec:[["حكومي","البنك المركزي المصري · البنك الأهلي المصري · بنك مصر · بنك القاهرة · الهيئة العامة للرقابة المالية"],["خاص محلي","CIB · QNB Egypt · Faisal Islamic Bank · HDB · Credit Agricole Egypt · شركات تمويل مثل MNT-Halan وvalU"],["متعدد الجنسيات","HSBC Egypt · Emirates NBD Egypt · Mashreq Egypt · ADIB Egypt · بنك الإسكندرية (Intesa Sanpaolo)"]],
 roles:["Banking / Management Trainee","Relationship Officer Intern","Credit Analyst Intern","Operations Assistant","Compliance Intern","Branch Customer Service"]},
{tr:["تدريب في شركات السمسرة وإدارة الأصول (EFG Holding وCI Capital وBeltone وNaeem)","تابع برامج التثقيف الاستثماري في البورصة المصرية EGX والهيئة العامة للرقابة المالية","تدريب في الإدارات المالية بالبنوك والشركات الكبيرة","كورس Financial Modeling وValuation","جرّب تقييم شركة مقيدة في البورصة كمشروع بورتفوليو","التحضير لـ CFA Level 1 من سنة تالتة"],
 sec:[["حكومي","الهيئة العامة للرقابة المالية · البورصة المصرية EGX · وزارة المالية · البنك المركزي المصري · صندوق مصر السيادي"],["خاص محلي","EFG Holding · CI Capital · Beltone · Naeem · Thndr · شركات إدارة أصول وصناديق استثمار"],["متعدد الجنسيات","بنوك دولية (HSBC · Emirates NBD) · Big 4 · شركات استشارات مالية"]],
 roles:["Financial Analyst Intern","Equity Research Intern","Brokerage / Trading Assistant","Investment Banking Intern","Corporate Finance Intern","Wealth Management Trainee"]},
{tr:["تدريب صيفي في وكالات تسويق وسوشيال ميديا","برامج التسويق في Vodafone وOrange وe& وUnilever وP&G وNestlé","كورسات Google Skillshop (Ads وAnalytics) مجانية بشهادات","Meta Blueprint للإعلانات","HubSpot Academy (Inbound وContent Marketing) مجانًا","إدارة صفحة حقيقية لنشاط طلابي أو مشروع صغير وبناء بورتفوليو حملات"],
 sec:[["حكومي","نادر؛ غالبًا في أقسام العلاقات العامة والإعلام بالجهات الحكومية"],["خاص محلي","وكالات إعلان وسوشيال ميديا · Fawry · valU · Talabat · Noon · متاجر إلكترونية محلية"],["متعدد الجنسيات","Unilever · P&G · Nestlé · PepsiCo · Coca-Cola · Vodafone · Orange"]],
 roles:["Digital Marketing Intern","Social Media Assistant","Content Creator Intern","Sales Trainee","E-commerce Assistant","Market Research Intern"]},
{tr:["تدريب في معهد التخطيط القومي ومراكز البحوث (لو فيه فتح)","تابع برامج وزارة التخطيط والتنمية الاقتصادية ومجلس الوزراء","تدريب في البنك المركزي المصري وCAPMAS","تدريب وتطوع مع UNDP وWorld Bank وGIZ","كورسات Stata وEViews وR وPython للاقتصاد","تدريب في وحدات البحوث الاقتصادية بالبنوك وشركات الاستثمار"],
 sec:[["حكومي","وزارة التخطيط والتنمية الاقتصادية · وزارة المالية · البنك المركزي المصري · CAPMAS · معهد التخطيط القومي · مركز المعلومات IDSC"],["خاص محلي","وحدات البحوث الاقتصادية في البنوك وشركات الاستثمار · مكاتب الاستشارات ودراسات الجدوى · ECES"],["منظمات دولية","World Bank · UNDP · IFC · EBRD · GIZ · الاتحاد الأوروبي"]],
 roles:["Research Assistant","Economic Analyst Intern","Feasibility Study Assistant","Policy Research Assistant","Economic Data Analyst Intern","Development Program Assistant"]},
{tr:["تدريب في شركات التأمين (مصر للتأمين وAllianz Egypt وGIG Egypt وMetLife Egypt)","تدريب في الهيئة العامة للرقابة المالية وقطاع التأمين","تدريب في الهيئة القومية للتأمين الاجتماعي وصناديق المعاشات","تدريب في Big 4 (خدمات التأمين والمخاطر)","امتحانات IFoA: CS1 وCM1 ممكن غير الأعضاء يدخلوها (راجع الرسوم والمواعيد)","كورسات R وPython وSQL وExcel للاكتواري"],
 sec:[["حكومي","الهيئة العامة للرقابة المالية · الهيئة القومية للتأمين الاجتماعي · مصر للتأمين · وزارة المالية"],["خاص محلي","شركات تأمين خاصة مصرية · مكاتب استشارات اكتوارية · صناديق التأمين الخاصة"],["متعدد الجنسيات","Allianz Egypt · GIG Egypt · MetLife Egypt · Big 4 · شركات إعادة التأمين"]],
 roles:["Actuarial Intern","Insurance Analyst Trainee","Underwriting Assistant","Pension / Benefits Assistant","Risk Analyst Intern","Insurance Data Analyst Intern"]},
{tr:["تدريب صيفي في شركات قطاع البترول (Enppi وPetrojet وEPROM) والشركات الأجنبية","تابع برامج التدريب والتعيين في وزارة البترول والثروة المعدنية والهيئة المصرية العامة للبترول (لو فيه فتح)","تدريب في شركات الكهرباء والطاقة المتجددة (طاقة شمسية ورياح)","كورسات السلامة: NEBOSH IGC وIOSH Managing Safely لو اتجهت للـ HSE","كورسات اقتصاد الطاقة ودراسات الجدوى","تقوية الإنجليزي التقني والـ Excel المتقدم"],
 sec:[["حكومي","وزارة البترول والثروة المعدنية · EGPC · EGAS · ECHEM · وزارة الكهرباء والطاقة المتجددة · شركات قطاع البترول العامة"],["خاص محلي","شركات خدمات بترولية وهندسية مصرية · مقاولات ومحطات · شركات طاقة متجددة محلية"],["متعدد الجنسيات","Eni Egypt · bp Egypt · Shell Egypt · Apache Egypt · ACWA Power · Scatec"]],
 roles:["Admin / Finance Intern","Energy Analyst Intern","Procurement Assistant","Contracts Assistant","Renewable Projects Intern","HSE Trainee"]}
);

/* كورسات ولينكات */
ML.push(
[["المعهد المصرفي المصري EBI","الذراع التدريبي للبنك المركزي: دورات وشهادات مصرفية","https://ebi.gov.eg/","fa-solid fa-building-columns"],["البنك المركزي المصري","القوانين والتقارير والإحصاءات المصرفية","https://www.cbe.org.eg/","fa-solid fa-landmark"],["ACAMS","شهادة CAMS لمكافحة غسل الأموال","https://www.acams.org/","fa-solid fa-certificate"],["GARP – FRM","شهادة FRM لإدارة المخاطر","https://www.garp.org/","fa-solid fa-certificate"],["CFI – Corporate Finance Institute","كورسات تحليل مالي ونمذجة وبنوك","https://corporatefinanceinstitute.com/","fa-solid fa-chart-line"],["الهيئة العامة للرقابة المالية","تنظيم الأسواق والخدمات المالية غير المصرفية","https://www.fra.gov.eg/","fa-solid fa-scale-balanced"]],
[["CFA Institute","شهادة CFA وموارد التحليل الاستثماري","https://www.cfainstitute.org/","fa-solid fa-certificate"],["البورصة المصرية EGX","معلومات الأسهم المقيدة والتثقيف الاستثماري","https://www.egx.com.eg/","fa-solid fa-chart-line"],["CFI – Corporate Finance Institute","Financial Modeling وValuation","https://corporatefinanceinstitute.com/","fa-solid fa-calculator"],["Investopedia","شرح مبسط لمفاهيم الاستثمار والتمويل","https://www.investopedia.com/","fa-solid fa-book-open-reader"],["الهيئة العامة للرقابة المالية","تنظيم أسواق المال والتأمين والتمويل","https://www.fra.gov.eg/","fa-solid fa-scale-balanced"],["Khan Academy – Economics & Finance","أساسيات التمويل والاقتصاد مجانًا","https://www.khanacademy.org/economics-finance-domain","fa-solid fa-graduation-cap"]],
[["Google Skillshop","شهادات Ads وAnalytics مجانية","https://skillshop.withgoogle.com/","fa-brands fa-google"],["Meta Blueprint","كورسات وشهادات إعلانات فيسبوك وإنستجرام","https://www.facebook.com/business/learn","fa-brands fa-facebook"],["HubSpot Academy","Inbound Marketing وContent وSEO مجانًا","https://academy.hubspot.com/","fa-solid fa-bullhorn"],["Semrush Academy","SEO وإعلانات ومحتوى","https://www.semrush.com/academy/","fa-solid fa-magnifying-glass"],["Canva Design School","تصميم بوستات وهوية بصرية للمبتدئين","https://www.canva.com/designschool/","fa-solid fa-pen-ruler"],["CIM","شهادات التسويق البريطانية","https://www.cim.co.uk/","fa-solid fa-certificate"]],
[["CAPMAS","بيانات وإحصاءات مصر الرسمية","https://www.capmas.gov.eg/","fa-solid fa-chart-simple"],["البنك المركزي المصري","التضخم وأسعار الفائدة والتقارير النقدية","https://www.cbe.org.eg/","fa-solid fa-landmark"],["World Bank Open Data","بيانات اقتصادية عالمية مجانية","https://data.worldbank.org/","fa-solid fa-earth-africa"],["IMF","تقارير وبيانات الاقتصاد الكلي والدول","https://www.imf.org/","fa-solid fa-globe"],["Our World in Data","رسوم وبيانات بتبسّط الاقتصاد والتنمية","https://ourworldindata.org/","fa-solid fa-chart-line"],["Khan Academy – Economics","اقتصاد جزئي وكلي مجانًا","https://www.khanacademy.org/economics-finance-domain","fa-solid fa-graduation-cap"],["FRED","قاعدة بيانات اقتصادية للبحث والتحليل","https://fred.stlouisfed.org/","fa-solid fa-database"]],
[["IFoA","المعهد البريطاني للاكتواريين: منهج التأهيل وامتحانات CS1 وCM1","https://actuaries.org.uk/","fa-solid fa-certificate"],["SOA","جمعية الاكتواريين الأمريكية وامتحاناتها","https://www.soa.org/","fa-solid fa-certificate"],["CAS","جمعية اكتواريي الممتلكات والمسؤولية","https://www.casact.org/","fa-solid fa-certificate"],["R Project","لغة R المستخدمة في امتحان CS1","https://www.r-project.org/","fa-solid fa-code"],["Khan Academy – Statistics & Probability","الاحتمالات والإحصاء مجانًا","https://www.khanacademy.org/math/statistics-probability","fa-solid fa-percent"],["الهيئة العامة للرقابة المالية","منظم قطاع التأمين في مصر","https://www.fra.gov.eg/","fa-solid fa-scale-balanced"],["Kaggle Learn","Python وSQL وتحليل بيانات بتمارين","https://www.kaggle.com/learn","fa-solid fa-code"]],
[["الهيئة المصرية العامة للبترول EGPC","أخبار قطاع البترول المصري وشركاته","https://www.egpc.com.eg/","fa-solid fa-oil-well"],["IEA – International Energy Agency","تقارير وبيانات الطاقة عالميًا","https://www.iea.org/","fa-solid fa-bolt"],["U.S. EIA","بيانات وتحليلات أسواق الطاقة والبترول","https://www.eia.gov/","fa-solid fa-chart-line"],["OPEC","تقارير سوق البترول والإحصاءات","https://www.opec.org/","fa-solid fa-oil-well"],["IRENA","بيانات وتقارير الطاقة المتجددة","https://www.irena.org/","fa-solid fa-solar-panel"],["NEBOSH","شهادات السلامة والصحة المهنية","https://www.nebosh.org.uk/","fa-solid fa-helmet-safety"],["IOSH","كورسات وشهادات السلامة المهنية","https://iosh.com/","fa-solid fa-helmet-safety"],["CIPS","شهادات المشتريات والعقود","https://www.cips.org/","fa-solid fa-file-contract"]]
);

/* خطة الكورسات سنة بسنة للتخصصات الجديدة */
BASE.push(
[["english","excel","accounting","bankops"],["creditrisk","excelAdv","softskills"],["aml","finmodel"],[]],
[["english","excel","accounting","econ"],["finmodel","stat","invest"],["powerbi","python"],["cfa"]],
[["english","excel","digimkt","softskills"],["ads","seo","writing"],["ecom","powerbi"],["sales"]],
[["english","excel","econ","stat"],["econometrics","feas","python"],["powerbi","finmodel"],["writing"]],
[["english","excel","prob","stat"],["python","sql","actuarial"],["finmodel","powerbi"],["ifoa"]],
[["english","excel","energy"],["procure","feas","excelAdv"],["pm","iso","hse"],["pmp"]]
);

tabs.className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6';
TABS.forEach(t=>{const b=document.createElement('button');b.className='subj-card panel major-card rounded-2xl p-4';b.style.setProperty('--c','#2dd4bf');
const nm=t[0]=='ba'?'إدارة الأعمال':M[t[0]].n;
b.innerHTML=`<div class="subj-icon w-11 h-11 rounded-xl flex items-center justify-center mb-2"><i aria-hidden="true" class="fa-solid ${t[1]}"></i></div><div class="font-extrabold text-white text-sm">${nm}</div>`;
b.onclick=()=>t[0]=='ba'?showBA():show(t[0]);tabs.append(b)});

/* ===== روابط لكل صفحة + عنوان التاب + نقل الـ focus + ملاحظات ===== */
const _s=show,_j=job,_b=showBA;let _nav=false,_ready=false;
const _go=h=>{if(_nav||!_ready)return;try{if(location.hash!==h)history.pushState(null,'',h)}catch(e){}};
const _ttl=t=>{const s=document.getElementById('sr');if(s)s.textContent=t||'';document.title=t?t+' | SAMS Compass':'SAMS Compass | دليل التخصصات'};
const _foc=()=>{if(!_ready)return;const h=out.querySelector&&out.querySelector('h2');if(h){h.setAttribute('tabindex','-1');h.style.outline='none';h.focus({preventScroll:true})}};
const NEEDX=/UI\/UX|Cybersecurity|QA|DBA|Web|Low-Code/;
show=function(i,k){_s(i,k);_go(k?'#m'+i+'-'+k:'#m'+i);_ttl(M[i].n);_foc()};
showBA=function(){_b();_go('#ba');_ttl('إدارة الأعمال');_foc()};
job=function(i,x){_j(i,x);let h=out.innerHTML;if(i==0&&NEEDX.test(M[i].j[x].t))h=h.replace('</h2>','</h2><span class="hrs" style="margin:.4rem 0">محتاج تعلم ذاتي إضافي برا مواد المنهج</span>');out.innerHTML=h;_go('#m'+i+'-j'+x);_ttl(sp(M[i].j[x].t)[0]);_foc()};
/* ===== اختبار تحديد التخصص (٣٨ سؤال اختيار من متعدد) ===== */
const QK=['NUM','MATH','TECH','DATA','PEOPLE','SALES','CREATE','WRITE','RULES','MARKETS','PM','EXAMS','STABLE','REMOTE','ENERGY','ECON'];
const QL={NUM:'الأرقام والدقة',MATH:'الرياضيات والإحصاء',TECH:'التكنولوجيا والنظم',DATA:'تحليل البيانات',PEOPLE:'التعامل مع الناس',SALES:'الإقناع والمبيعات',CREATE:'الإبداع وصناعة المحتوى',WRITE:'الكتابة والبحث',RULES:'التنظيم واللوائح والقوانين',MARKETS:'الأسواق والفلوس والاستثمار',PM:'التخطيط وقيادة المشروعات',EXAMS:'الصبر على الامتحانات المهنية',STABLE:'الاستقرار الوظيفي',REMOTE:'الشغل عن بعد والفري لانس',ENERGY:'قطاع الطاقة والبترول',ECON:'فهم الاقتصاد والسياسات العامة'};
const QW=s=>{const o={};(s||'').replace(/([A-Z]+)(\d)/g,(_,k,n)=>{o[k]=+n;return ''});return o};
const QS=['بتحب تعمل إيه؟','شخصيتك وطريقتك في الشغل','مهاراتك وراحتك','أهدافك وظروفك'];
/* [قسم, نص السؤال, [[الاختيار, أوزان]], id اختياري] */
const QB=[
[0,'في مشروع جماعي في الكلية، غالبًا بتلاقي نفسك بتعمل إيه؟',[['بحسب الميزانية وأظبط الأرقام','NUM2 RULES1'],['أرتب الشغل والمواعيد وأتابع الكل','PM3 RULES1'],['أصمم الفكرة والشكل والعرض','CREATE3'],['أكلم الناس وأقنعهم وأمثّل الفريق','PEOPLE2 SALES2']]],
[0,'أي نشاط من دول بيشدك أكتر؟',[['أحلل جدول بيانات كبير وأطلع منه معلومة مفيدة','DATA3 NUM1'],['أبني موقع أو أداة أو أتمتة لشغل بيتعمل يدوي','TECH3'],['أكتب تقرير أو مقال بيشرح قضية','WRITE3'],['أتابع أسعار الأسهم والدولار والذهب','MARKETS3']]],
[0,'إيه أقرب حاجة لشغلك المفضل؟',[['أراجع تفاصيل وأكتشف الغلط','NUM2 RULES3'],['أفهم الناس وأساعدهم','PEOPLE3'],['أبيع أو أعمل صفقة','SALES3 MARKETS1'],['أبتكر حاجة جديدة من الصفر','CREATE2 TECH1 PM1']]],
[0,'معاك 10 آلاف جنيه فاضلين. أول تفكيرك هيبقى:',[['أشتري أسهم أو أدخل في استثمار وأتابعه','MARKETS3'],['أدخل بيها مشروع صغير وأبيع فيه','SALES2 PM1 MARKETS1'],['أصرف على كورسات وجهاز أتعلم بيهم مهارة','TECH1 DATA1 REMOTE2'],['أحطها في شهادة بنكية آمنة','STABLE2 NUM1']]],
[0,'أكتر نوع محتوى بتتفرج عليه أو بتقراه:',[['اقتصاد وأخبار فلوس وأسواق','MARKETS2 WRITE1'],['تقنية وجاجتس وبرمجة','TECH3'],['سوشيال ميديا وإعلانات وترندات','CREATE2 SALES1'],['سياسة وقضايا مجتمع وتنمية','WRITE2 RULES1 PEOPLE1 ECON1']]],
[0,'أي مادة من أيام المدرسة أو أول سنة كانت أحب ليك؟',[['رياضيات','MATH3 NUM1'],['محاسبة وحسابات تجارة','NUM3 RULES1'],['لغة وإنشاء ومواد نظرية','WRITE3'],['حاسب آلي','TECH3']]],
[0,'تفضل المشكلة اللي:',[['ليها إجابة واحدة صح ومحددة','NUM2 RULES2 MATH1'],['ليها أكتر من حل وتحتاج إبداع','CREATE2 PM1'],['محتاجة بيانات وأرقام وأنا أستنتج منها','DATA3'],['محتاجة إقناع ناس وتفاهم بينهم','PEOPLE2 SALES1']]],
[0,'أحسن إحساس في الشغل بالنسبة لك:',[['إني حليت مشكلة معقدة بالمنطق','TECH2 DATA1 MATH1'],['إن ناس اتبسطت أو استفادت بسببي','PEOPLE3'],['إني خلصت مشروع كبير في ميعاده','PM3'],['إن حساباتي طلعت مظبوطة للمليم','NUM2 RULES2']]],
[0,'لو هتدخل مسابقة أو هاكاثون، هتاخد دور:',[['المحلل اللي بيدرس الأرقام','DATA3'],['التقني اللي بيبني الحل','TECH3'],['المتحدث والمسوّق للفكرة','SALES2 CREATE1 PEOPLE1'],['المنظّم وقائد الفريق','PM3 PEOPLE1']]],
[0,'أي ورشة هتحضرها من غير تردد؟',[['Power BI وSQL','DATA2 TECH2'],['تصوير وتصميم وتسويق','CREATE3'],['مهارات تواصل وقيادة','PEOPLE2 PM1'],['بورصة وتحليل مالي','MARKETS3 NUM1']]],
[0,'لو اشتغلت جوه مؤسسة، الأقرب ليك:',[['أجهز بيانات وتقارير للإدارة','DATA2 NUM1 TECH1'],['أتابع العقود والإجراءات والالتزام باللوائح','RULES3'],['أدير فريق وأخطط وأتابع','PM3 PEOPLE1'],['أبني علاقات مع عملاء وشركاء','SALES2 PEOPLE2']]],
[0,'بتحب تقرا عن إيه أكتر؟',[['قوانين وإجراءات وإزاي الدولة بتشتغل','RULES2 WRITE2'],['بيزنس ومشروعات ناجحة','MARKETS1 SALES1 PM1'],['الأزمات الاقتصادية وتاريخ الفلوس','MARKETS1 WRITE1 MATH1 ECON2'],['علم النفس وسلوك الناس','PEOPLE2 WRITE1']]],
[1,'الأقرب لشخصيتك:',[['هادي ومنظم وبحب التفاصيل','RULES2 NUM1'],['اجتماعي وبحب أتعرف على ناس','PEOPLE3'],['فضولي وبحب أجرب أي أداة جديدة','TECH2 CREATE1'],['جريء وبحب التحدي والمخاطرة المحسوبة','MARKETS2 SALES1']]],
[1,'بتفضل الشغل:',[['لوحدي بتركيز عالي','DATA1 NUM1 REMOTE2'],['في فريق صغير متفاهم','PM1 PEOPLE1'],['وسط ناس كتير طول اليوم','PEOPLE3 SALES1'],['متنقل ومتغير كل يوم','SALES1 CREATE1 PM1']]],
[1,'بيئة الشغل اللي بتريحك:',[['قواعد ولوائح واضحة ومسار وظيفي معروف','RULES2 STABLE3'],['مرنة ومفتوحة للتجربة','CREATE1 REMOTE1 TECH1'],['تنافسية وفيها عمولات وتارجت','SALES3 MARKETS1'],['أكاديمية وبحثية','WRITE2 DATA1 MATH1']]],
[1,'لما بتاخد قرار مهم، بتعتمد على:',[['الأرقام والبيانات','DATA3'],['اللوائح والمنطق القانوني','RULES3'],['إحساسي بالناس وقراءة المواقف','PEOPLE3'],['التجربة والمخاطرة المحسوبة','MARKETS2 SALES1']]],
[1,'الشغل اللي بيخليك تنسى الوقت هو:',[['برمجة أو ضبط نظام أو أداة','TECH3'],['كتابة أو تصميم أو تصوير','CREATE3'],['قراءة وتلخيص وفهم موضوع بعمق','WRITE3'],['حل مسائل وأرقام','MATH2 NUM2']]],
[1,'الكلام قدام ناس (عرض أو مناقشة):',[['بحبه وببقى مرتاح','PEOPLE2 SALES2'],['كويس لو كنت محضّر','WRITE1 PM1'],['بتوتر بس بتعلم','PEOPLE1'],['بتجنبه قدر الإمكان','DATA1 TECH1 REMOTE1 NUM1']]],
[1,'أصحابك محتاجين حد ينظم رحلة أو فرح أو فعالية. هتبقى:',[['اللي بينظم كل حاجة ويتابعها','PM3 RULES1'],['اللي بيتصل بالناس ويظبط التفاهمات','PEOPLE2 SALES1'],['اللي بيحسب التكاليف ويقسمها','NUM3'],['اللي بيصمم الدعوة والشكل','CREATE3']]],
[1,'أنت أقرب لـ:',[['أحب أتقن مجال واحد بعمق','MATH1 EXAMS1 DATA1'],['أحب أجرب مجالات كتير','CREATE1 TECH1 SALES1'],['أحب أبقى اللي شايف الصورة الكبيرة وبيدير','PM3'],['أحب أخدم الناس والمجتمع','PEOPLE2 WRITE1 STABLE1']]],
[2,'الرياضيات بالنسبة لك:',[['قوي فيها وبحبها','MATH3 NUM1'],['كويس في الأساسيات والتطبيقات','MATH2 NUM1'],['مقبول','MATH1'],['ضعيف وبتتعبني','']]],
[2,'الإنجليزي عندك:',[['قوي: بقرا وأتكلم وأفهم محتوى أجنبي براحة','REMOTE1'],['كويس وبتحسن','REMOTE1'],['متوسط ومحتاج شغل','' ],['ضعيف دلوقتي','']],'eng'],
[2,'الإكسل والجداول:',[['شاطر وبحبه','DATA2 NUM1'],['أعرف الأساسيات','DATA1'],['لسه ما جربتش كتير',''],['بتجنبه','']]],
[2,'البرمجة:',[['اتعلمت شوية وبحبها','TECH3 DATA1'],['نفسي أتعلم بس لسه ما بدأتش','TECH1'],['مش مهتم أوي',''],['مش بحبها خالص','']]],
[2,'الكتابة:',[['بكتب كويس وبحب أشرح أفكاري','WRITE3 CREATE1'],['بكتب لو لازم','WRITE1'],['أفضّل الأرقام على الكلام','NUM1 DATA1'],['الكتابة بتتعبني','']]],
[2,'الشغل مع عملاء أو جمهور بشكل مباشر:',[['بحبه جدًا','PEOPLE3 SALES1'],['ممكن مع الوقت','PEOPLE1'],['أفضّل أشتغل بعيد عن العملاء','DATA1 TECH1 REMOTE1'],['مش مرتاح خالص','']]],
[2,'الدقة والتفاصيل المملة (مراجعة وتسويات):',[['بتعجبني وبحس بالإنجاز','NUM2 RULES3'],['أتحملها لو ليها هدف','NUM1 RULES1'],['بتملني بسرعة','CREATE1'],['مش مناسبة ليا','']]],
[3,'أهم حاجة تدور عليها في أول وظيفة:',[['استقرار وتأمين ومعاش','STABLE3 RULES1'],['مرتب عالي بسرعة','MARKETS1 SALES1 REMOTE1'],['تعلّم وخبرة وتطور','TECH1 DATA1 PM1'],['مرونة في المكان والوقت','REMOTE3']]],
[3,'لو الفرص متاحة قدامك، تختار:',[['وظيفة حكومية مضمونة','STABLE3'],['شركة محلية كبيرة','PM1 RULES1'],['شركة متعددة الجنسيات','REMOTE1 PM1 RULES1'],['مشروعي الخاص ولو بدايته صعبة','SALES2 MARKETS2 PM1']]],
[3,'الشغل عن بعد والفري لانس بالدولار:',[['هو هدفي الأول','REMOTE3'],['مهتم بيه كمصدر دخل إضافي','REMOTE2'],['ممكن بعد ما أخد خبرة','REMOTE1'],['مش مهتم، أحب أشتغل في مكان','STABLE1 PEOPLE1']]],
[3,'الشهادات المهنية الطويلة (ACCA وCFA وIFoA) بتاخد سنين وامتحانات صعبة:',[['مستعد، وهي هدفي','EXAMS3'],['ممكن شهادة واحدة مهمة','EXAMS2'],['أفضّل كورسات قصيرة وعملية','EXAMS1'],['مش عايز امتحانات كتير','']]],
[3,'تحمّل مسؤولية قرارات مالية كبيرة:',[['بحب وعايز مسؤولية','MARKETS2 NUM1 PM1'],['ممكن بعد خبرة','NUM1'],['أفضّل أنفذ وبس','RULES1'],['بتوترني','']]],
[3,'السفر والشغل الميداني (مواقع ومصانع وشركات):',[['بحبه جدًا','PM1 PEOPLE1 SALES1'],['مقبول',''],['أفضّل مكتب ثابت','RULES1 STABLE1'],['أفضّل أشتغل من البيت','REMOTE2 DATA1']]],
[3,'تفضّل نتيجة شغلك تبقى:',[['أرقام وتقارير بتتاخد بيها قرارات','DATA2 NUM1'],['منتج أو نظام شغّال الناس بتستخدمه','TECH3'],['ناس اتحسنت حياتهم أو أداؤهم','PEOPLE2 WRITE1 STABLE1'],['مبيعات وأرباح واضحة','SALES2 MARKETS2']]],
[3,'بعد 5 سنين بتتخيل نفسك:',[['خبير أرقام وبيانات ومطلوب في السوق','DATA3'],['مدير فريق أو مشروع','PM3'],['محلل أو مستثمر في أسواق المال','MARKETS3'],['مسؤول كبير في مؤسسة أو جهة','STABLE2 RULES1 WRITE1']]],
[3,'لو التخصص صعب في الأول وهتستحمل علشان مستقبل أحسن:',[['أكيد، أنا بصبر','EXAMS2 MATH1'],['لو في طريق واضح قدامي','RULES1 PM1'],['أفضّل حاجة أسهل وأسرع','SALES1 CREATE1'],['مش متأكد','']]],
[3,'أنهي قطاع نفسك تشتغل فيه؟',[['بنوك وتأمين','NUM1 RULES1 MATH1 MARKETS1'],['شركات تقنية وتطبيقات','TECH2 CREATE1'],['بترول وطاقة وشركات كبيرة','ENERGY3 PM1'],['حكومة وهيئات ومنظمات','STABLE2 WRITE1 RULES1'],['تجارة وتسويق وإعلان','SALES2 CREATE1']]],
[3,'شغل مرتبط بمشروعات ضخمة وعقود وشركات بترول وكهرباء:',[['ده اللي أنا عايزه','ENERGY3 PM1'],['مش بعيد عني','ENERGY1'],['مش مهتم',''],['ما أعرفش عنه كفاية','']]],
[3,'لما تسمع خبر عن ارتفاع الأسعار أو سعر الدولار، أول ميل عندك:',[['أدوّر على السبب الاقتصادي وأفكر في سياسات تحل المشكلة','ECON3 WRITE1'],['أفكر أحمي فلوسي أو أستثمر','MARKETS3'],['أحسب أثره على تكلفة المشروعات والشغل','NUM2 PM1'],['ما بهتمش بالموضوع ده','']]],
[3,'لو هتشتغل على بحث كبير، تحب تدرس:',[['أثر قرار حكومي على الأسعار والبطالة','ECON3 WRITE1 DATA1'],['أداء شركة وهل سعر سهمها عادل','MARKETS3 NUM1'],['احتمال وقوع حوادث ومخاطر على الناس وتسعيرها','MATH3 DATA1'],['رضا الموظفين وأسباب استقالتهم','PEOPLE2 DATA1']]],
].map(q=>({s:q[0],t:q[1],o:q[2].map(o=>({t:o[0],w:QW(o[1])})),id:q[3]}));

/* ملف كل تخصص: درجة أهمية كل ميل (٠–٥). الترتيب = ترتيب M بعد إعادة الترتيب */
const MV=[
'TECH5 DATA4 PM3 NUM2 RULES2 PEOPLE2 CREATE1 MATH2 REMOTE3',
'NUM5 RULES5 EXAMS2 DATA2 STABLE2 REMOTE2',
'PEOPLE5 SALES2 PM2 RULES2 WRITE1 CREATE1',
'RULES5 STABLE5 WRITE3 PM2 PEOPLE2 ECON1',
'NUM3 RULES3 PEOPLE4 SALES4 MARKETS2 STABLE3',
'MARKETS5 NUM4 DATA2 MATH2 EXAMS2 SALES1',
'CREATE5 SALES5 PEOPLE3 DATA3 WRITE2 REMOTE4',
'ECON5 WRITE4 DATA3 MATH3 MARKETS1 NUM2 STABLE1',
'MATH5 EXAMS5 NUM3 DATA3 RULES3',
'ENERGY5 PM3 RULES3 NUM3 STABLE3 MARKETS1'
].map(QW);
/* ملف كل مجال (الأولى تطابق الأدق). الريموت والحكومي بيتحسبوا كمان من بيانات الموقع نفسه */
const FR=[
['Economic Data Analyst','DATA5 MATH3 TECH2 NUM2 ECON3'],['Government Data Analyst','DATA4 STABLE4 RULES2 TECH2'],['Insurance Data Analyst','DATA5 MATH3 TECH3'],
['BI / Power BI','DATA5 TECH4 NUM2'],['HR Analytics','DATA5 PEOPLE2 NUM3 TECH2'],['Data Analyst','DATA5 TECH3 NUM2 MATH2 WRITE1'],
['Business & Systems','PM3 TECH3 DATA2 PEOPLE3 WRITE2 RULES2'],['ERP & Implementation','TECH3 PM3 PEOPLE3 RULES2 NUM2'],['Product Owner','PM5 PEOPLE3 TECH2 DATA2 SALES1'],
['MIS Officer','TECH3 DATA3 RULES3 STABLE3 NUM2'],['IT Auditor','RULES5 TECH3 DATA2 NUM2 STABLE2'],['UI/UX','CREATE5 TECH3 PEOPLE2 WRITE1'],
['Low-Code','TECH5 CREATE2 DATA1'],['QA &','TECH4 RULES3 DATA1'],['Cybersecurity','TECH5 RULES3 DATA2'],['DBA &','TECH5 DATA3 RULES3'],
['محاسب عام','NUM5 RULES4 STABLE2'],['Cost Accountant','NUM5 DATA2 RULES3'],['Tax Accountant','RULES5 NUM4'],['Internal Auditor','RULES5 NUM4 WRITE2 EXAMS2'],
['External Auditor','NUM4 RULES5 EXAMS3 PEOPLE1'],['Government Accountant','NUM4 RULES5 STABLE5'],['FP&A','NUM4 DATA4 MARKETS3 PM1 TECH1'],
['ERP Accounting','NUM3 TECH4 PEOPLE2 RULES2'],['Remote Bookkeeper','NUM4 REMOTE5 RULES2'],['Forensic','NUM4 RULES4 DATA3 WRITE2 EXAMS2'],
['Treasury','NUM4 MARKETS4 RULES2'],['Project Accountant','NUM4 PM3 RULES2'],['IFRS','NUM4 RULES5 WRITE2 EXAMS3'],
['Tech Recruiter','PEOPLE4 SALES3 TECH2'],['Recruiter','PEOPLE5 SALES3'],['HR Generalist','PEOPLE3 RULES4 STABLE2'],['Payroll','NUM4 RULES5'],
['L&D','PEOPLE4 CREATE3 WRITE2 PM2'],['Employee Relations','PEOPLE4 RULES4 WRITE2'],['Employee Experience','PEOPLE4 DATA2 CREATE2'],
['OD Consultant','PEOPLE3 PM3 WRITE3 DATA2'],['HRIS','TECH4 DATA3 RULES2 PEOPLE1'],['Employer Branding','CREATE4 PEOPLE3 WRITE2 SALES2'],
['موظف حكومي','RULES5 STABLE5 WRITE1'],['Policy & Investment','WRITE4 MARKETS3 RULES2 ECON4'],['Policy Analyst','WRITE5 DATA3 RULES3 ECON3'],
['e-Government','TECH3 RULES3 PM3 STABLE3'],['CSR','PEOPLE4 PM3 CREATE2 WRITE2'],['Public Procurement','RULES5 NUM3 STABLE4'],
['Public Budget','NUM4 RULES4 STABLE4'],['Public Project','PM5 RULES3 STABLE3 PEOPLE2'],['Local Government','PEOPLE3 RULES4 STABLE5'],
['Quality & Institutional','RULES4 PM3 DATA2 STABLE2'],['NGO','PEOPLE4 WRITE4 PM3'],['PR Officer','CREATE3 WRITE4 PEOPLE4 SALES1'],['M&E','DATA4 WRITE3 PM2 NUM2 ECON1'],
['Relationship Officer','PEOPLE4 SALES4 NUM2 STABLE2'],['Credit & Risk','NUM5 DATA3 RULES3 MARKETS2'],['Banking Operations','NUM3 RULES5 STABLE3'],
['AML','RULES5 DATA2 WRITE2 EXAMS1'],['Corporate Banker','MARKETS3 NUM4 SALES3 PEOPLE3'],
['Financial Analyst','NUM4 DATA4 MARKETS4'],['Investment Analyst','MARKETS5 NUM3 DATA3 MATH2 EXAMS2'],['Wealth Manager','MARKETS3 SALES4 PEOPLE4 EXAMS1'],
['Investor Relations','MARKETS3 WRITE3 PEOPLE3 NUM2'],['VC Analyst','MARKETS4 DATA3 WRITE2 SALES1'],
['Digital Marketer','CREATE4 DATA3 SALES3 TECH1'],['Business Development','SALES5 PEOPLE4 MARKETS2'],['Content Manager','CREATE5 WRITE4 PEOPLE1'],
['E-commerce','SALES3 DATA3 PM3 CREATE2 TECH2'],['Brand & Market','DATA4 WRITE3 CREATE2 MATH1'],
['Economic Researcher','WRITE5 DATA3 MATH2 STABLE2 ECON5'],['Feasibility','NUM4 DATA3 WRITE2 MARKETS2 ECON2'],['Development Consultant','WRITE4 PEOPLE3 DATA2 PM2 ECON3'],
['Actuarial Analyst','MATH5 NUM3 DATA4 EXAMS5'],['Insurance Risk','MATH3 NUM3 RULES3 DATA2'],['Pension','MATH3 NUM4 RULES3 STABLE3'],['ERM','MATH2 RULES3 DATA3 MARKETS2'],
['Energy Admin','NUM4 RULES3 PM2 ENERGY3'],['Energy Analyst','DATA4 MARKETS3 WRITE3 ENERGY3'],['Procurement & Contracts','RULES4 NUM3 SALES1 ENERGY3'],
['Renewable','PM5 ENERGY3'],['HSE','RULES5 PEOPLE2 PM2 ENERGY3']
].map(r=>[r[0],QW(r[1])]);
function fvec(i,j){const r=FR.find(x=>j.t.includes(x[0]));const v=Object.assign({},r?r[1]:MV[i]);
 const rm=RMT.find(x=>x[0].test(j.t));if(rm){const s=rm[1]+rm[2];if(s>0)v.REMOTE=Math.max(v.REMOTE||0,Math.round(s*1.25))}
 const av=avail(j.t);if(av.length<3&&av.includes('g'))v.STABLE=Math.max(v.STABLE||0,4);return v}

/* الحساب: كل ميل بيتحول لدرجة معيارية (z) مقارنة بالإجابة العشوائية، فمفيش ميل بياخد وزن زيادة عن غيره */
const QZ_KEY='sams_compass_qz_v1';
let qz={a:[],done:false,busy:false};
function qzLoad(){try{const s=localStorage.getItem(QZ_KEY);if(s){const d=JSON.parse(s);if(Array.isArray(d.a))qz.a=d.a.slice(0,QB.length);qz.done=!!d.done}}catch(e){}}
function qzSave(){try{localStorage.setItem(QZ_KEY,JSON.stringify({a:qz.a,done:qz.done}))}catch(e){}qzUpdateBanner()}
const qzN=()=>qz.a.filter(x=>x!=null&&x>=0).length;
function qzZ(){const raw={},mu={},va={},z={};QK.forEach(k=>{raw[k]=0;mu[k]=0;va[k]=0});
 QB.forEach((q,i)=>{const a=qz.a[i];if(a==null||a<0)return;
  QK.forEach(k=>{const ws=q.o.map(o=>o.w[k]||0),m=ws.reduce((x,y)=>x+y,0)/ws.length;
   mu[k]+=m;va[k]+=ws.reduce((x,y)=>x+(y-m)*(y-m),0)/ws.length;raw[k]+=q.o[a].w[k]||0})});
 QK.forEach(k=>{z[k]=va[k]>.0001?Math.max(-2.5,Math.min(2.5,(raw[k]-mu[k])/Math.sqrt(va[k]))):0});return z}
const qzSc=(v,z)=>{let s=0,w=0;for(const k in v){s+=v[k]*z[k];w+=v[k]}return w?s/w:0};
const qzPct=s=>Math.max(10,Math.min(97,Math.round((55+s*28)/5)*5));
function qzCalc(){const z=qzZ();const ms=M.map((m,i)=>({i,s:qzSc(MV[i],z)})).sort((a,b)=>b.s-a.s);
 ms.forEach(m=>{m.f=M[m.i].j.map((j,x)=>({x,s:qzSc(fvec(m.i,j),z)+.25*m.s})).sort((a,b)=>b.s-a.s)});return{z,ms}}

function qzUpdateBanner(){const btn=document.querySelector('.qz-cta');if(!btn)return;
 const tx=btn.querySelector('.qz-tx');if(!tx)return;
 const n=qzN();
 if(qz.done&&n>=15){const{ms}=qzCalc(),t=ms[0],m=M[t.i],topJob=sp(m.j[t.f[0].x].t)[0];
  tx.innerHTML=`<b>نتيجتك المحفوظة: ${m.n} (الأقرب ليك)</b><small>أنسب مجال: ${topJob} · دوس لعرض تفاصيل النتيجة أو تعديل إجاباتك</small>`}
 else if(n>0){tx.innerHTML=`<b>كمّل اختبار تحديد التخصص (متسجل ليك ${n} من ${QB.length} سؤال)</b><small>إجاباتك محفوظة تلقائيًا على جهازك · دوس تكمل من آخر سؤال وقفت عنده</small>`}
 else{tx.innerHTML=`<b>مش عارف تختار تخصصك؟ اعمل اختبار تحديد التخصص</b><small>40 سؤال اختيار من متعدد · حوالي 8 دقايق · ترشيح إرشادي للتخصص ومجال الشغل، مش حكم نهائي (وبتتحفظ النتيجة تلقائيًا)</small>`}}

/* الواجهة */
function qzMount(h){[...tabs.children].forEach(b=>b.setAttribute('aria-pressed','false'));clearTimeout(qzT);out.innerHTML=h;
 _go('#quiz');_ttl('اختبار تحديد التخصص');_foc();qz.busy=false;
 const r=out.getBoundingClientRect();if(r.top<0||r.top>innerHeight*.6)out.scrollIntoView({behavior:'smooth',block:'start'})}
function showQuiz(){if(qz.done&&qzN()>=15)return qzResult();qzIntro()}
function qzIntro(){const n=qzN(),has=n>0,nxt=qz.a.findIndex(x=>x==null);
 qzMount(`<h2 class="text-2xl md:text-3xl font-black text-white mb-2">اختبار تحديد التخصص</h2><span class="hrs">${QB.length} سؤال · حوالي 8 دقايق · حفظ تلقائي</span>
 <p class="gp">جاوب على أسئلة اختيار من متعدد عن ميولك وشخصيتك ومهاراتك وأهدافك، وفي الآخر هنرشحلك <b>التخصص الأنسب</b> وأقرب <b>مجالات الشغل</b> جواه، مع سبب الترشيح. إجاباتك ونتيجتك بتتسجل تلقائيًا عشان تلاقيها لما تفتح الموقع في أي وقت.</p>
 <ul class="c" style="margin:.8rem 0"><li>مفيش إجابة صح أو غلط</li><li>تقدر تتخطى أي سؤال</li><li>إجاباتك محفوظة تلقائيًا على متصفحك</li></ul>
 <p class="gnote" style="margin-top:1rem;padding-top:.6rem">النتيجة استرشادية مش حكم نهائي. اتحققها بتجربة كورس مجاني في المجال قبل ما تاخد القرار.</p>
 <div class="mt-4 flex flex-wrap gap-2">${has?`<button class="team-btn" onclick="qzAsk(${nxt>=0?nxt:0})"><i aria-hidden="true" class="fa-solid fa-play"></i> كمّل من حيث وقفت (${n} إجابة محفوظة)</button>${n>=15?`<button class="gtab" onclick="qzFinish()">شوف النتيجة المحفوظة</button>`:''}<button class="gtab" onclick="qzReset()">امسح الإجابات وابدأ من الأول</button>`:`<button class="team-btn" onclick="qzAsk(0)"><i aria-hidden="true" class="fa-solid fa-play"></i> ابدأ الاختبار</button>`}</div>`)}
function qzReset(){qz.a=[];qz.done=false;try{localStorage.removeItem(QZ_KEY)}catch(e){}qzUpdateBanner();qzAsk(0)}
function qzAsk(i){if(i<0)i=0;if(i>=QB.length)return qzFinish();const q=QB[i],n=qzN(),cur=qz.a[i];
 qzMount(`<div class="qz-bar"><span class="qz-pct">${i+1}/${QB.length}</span><div class="qz-prog" role="progressbar" aria-valuemin="0" aria-valuemax="${QB.length}" aria-valuenow="${i+1}"><i style="width:${Math.round((i+1)/QB.length*100)}%"></i></div></div>
 <p class="gp" style="margin:.7rem 0 0;color:var(--a2);font-weight:800;font-size:.85rem">${QS[q.s]}</p>
 <h2 class="qz-q">${q.t}</h2>
 <div role="group" aria-label="الاختيارات">${q.o.map((o,k)=>`<button class="qz-opt" aria-pressed="${cur===k}" onclick="qzPick(${i},${k})">${o.t}</button>`).join('')}</div>
 <div class="mt-4 flex flex-wrap items-center gap-2">${i>0?`<button class="gtab" onclick="qzAsk(${i-1})">← السابق</button>`:''}<button class="gtab" onclick="qzSkip(${i})">تخطي</button>${n>=15?`<button class="team-btn" style="margin-inline-start:auto" onclick="qzFinish()">شوف النتيجة دلوقتي</button>`:''}</div>`)}
let qzT=0;function qzPick(i,k){clearTimeout(qzT);qz.a[i]=k;qzSave();document.querySelectorAll('.qz-opt').forEach((b,x)=>b.setAttribute('aria-pressed',x==k));
 qzT=setTimeout(()=>{i<QB.length-1?qzAsk(i+1):qzFinish()},200)}
function qzSkip(i){if(qz.busy)return;qz.busy=true;if(qz.a[i]==null)qz.a[i]=-1;qzSave();i<QB.length-1?qzAsk(i+1):qzFinish()}
function qzFinish(){const n=qzN();
 if(n<15){const f=Math.max(0,qz.a.findIndex(x=>x==null||x<0));return qzMount(`<h2 class="text-2xl font-black text-white mb-2">محتاجين إجابات أكتر شوية</h2><p class="gp">جاوبت على ${n} سؤال بس. جاوب على 15 سؤال على الأقل علشان الترشيح يبقى مفيد.</p><button class="team-btn mt-3" onclick="qzAsk(${f})">كمّل الأسئلة</button>`)}
 qz.done=true;qzSave();qzResult()}
function qzTraits(i,z){const v=MV[i],t=QK.filter(k=>v[k]).map(k=>({k,c:v[k]*z[k],v:v[k],z:z[k]}));
 return{good:t.filter(x=>x.z>.3&&x.v>=3).sort((a,b)=>b.c-a.c).slice(0,3),warn:t.filter(x=>x.z<-.3&&x.v>=4).sort((a,b)=>a.c-b.c).slice(0,2)}}
function qzChoice(id){const i=QB.findIndex(q=>q.id===id);return i<0?null:qz.a[i]}
function qzResult(){const{z,ms}=qzCalc(),n=qzN(),t=ms[0],m=M[t.i],tr=qzTraits(t.i,z),near=ms[1].s>t.s-.12;
 const fcard=(i,f)=>{const j=M[i].j[f.x],rm=RMT.find(y=>y[0].test(j.t));
  return `<div class="job"><h4>${tt(j.t)}</h4><div class="sal">${j.s}</div>${SNO(j)}<p>${j.u}</p>${ddMini(i,j)}${rm?`<p style="font-size:.82rem;color:var(--mut)"><b>ريموت:</b> ${LV[rm[1]]} · <b>فري لانس:</b> ${LV[rm[2]]} · <b>سهولة الدخول:</b> ${EZ[rm[3]]}</p>`:''}<button class="gtab" onclick="show(${i});job(${i},${f.x})">افتح المجال وخريطة الطريق</button></div>`};
 const eng=qzChoice('eng'),tips=[];
 if(eng!=null&&eng>=2)tips.push('الإنجليزي هو أكبر مضاعف لفرصك في أي تخصص (وظايف أحسن وشغل ريموت). ابدأ بنص ساعة يوميًا من دلوقتي.');
 if(tr.warn.length)tips.push('التخصص ده بيعتمد جامد على '+tr.warn.map(x=>QL[x.k]).join(' و')+'، وإجاباتك بتقول إنها مش أقوى نقطة عندك دلوقتي. ده مش مانع (بتتعلم) بس جرب كورس مجاني فيها الأول وشوف هتستحملها ولا لأ.');
 tips.push('جرّب قبل ما تقرر: خد كورس مجاني من تاب "كورسات ولينكات" في التخصص، ولو حسيت بحماس كمّل.');
 const other=ms.slice(1,3).map((o,k)=>{const j=M[o.i].j[o.f[0].x];return `<div class="job"><h4>${M[o.i].n} <span class="qz-pct" style="font-size:.85rem">· الترتيب ${k+2}</span></h4><p>أنسب مجال ليك هناك: <b>${sp(j.t)[0]}</b>${sp(j.t)[1]?' ('+sp(j.t)[1]+')':''}</p><button class="gtab" onclick="show(${o.i})">شوف التخصص</button></div>`}).join('');
 qzMount(`<h2 class="text-2xl md:text-3xl font-black text-white mb-1">نتيجتك المحفوظة</h2><span class="hrs">على أساس ${n} إجابة · متسجلة تلقائيًا على جهازك</span>
 <div class="job" style="margin-top:1rem"><p style="margin:0;color:var(--a2);font-weight:800">${near?'التخصصين الأول والتاني قريبين جدًا منك، اقرأ الاتنين.':'أنسب تخصص ليك'}</p><h3 class="text-xl md:text-2xl font-black text-white" style="margin:.3rem 0">${m.n}${BA.includes(t.i)?' <small style="color:var(--mut);font-size:.7em">(ضمن إدارة الأعمال)</small>':''}</h3>
 <div class="qz-bar"><span class="qz-pct">الأقرب ليك حسب إجاباتك</span></div><p style="font-size:.82rem;color:var(--mut)">الاختبار بيقيس ميولك المعلنة مش قدراتك، وده ترتيب مش نسبة دقيقة.</p><p>${m.d}</p>
 ${tr.good.length?`<p><b>ليه رشحناه؟</b> إجاباتك بتميل قوي لـ: ${tr.good.map(x=>QL[x.k]).join('، ')}.</p>`:''}
 <button class="gtab" onclick="show(${t.i})">افتح التخصص كامل</button></div>
 <h3 class="gh3">أنسب مجالات الشغل جوه التخصص ده</h3>${t.f.slice(0,3).map(f=>fcard(t.i,f)).join('')}
 <h3 class="gh3">تخصصات تانية قريبة منك</h3>${other}
 <h3 class="gh3">نصايح قبل ما تقرر</h3><ul class="c" style="display:block">${tips.map(x=>`<li style="display:block;margin:.4rem 0;border-radius:14px;line-height:1.8">${x}</li>`).join('')}</ul>
 <p class="gnote"><b>آخر تحديث للموقع: 15 نوفمبر 2026.</b> الأرقام تقديرات تقريبية شهرية بالجنيه المصري مش مرتبطة بمصدر رسمي واحد، أغلبها للقاهرة والمدن الكبيرة، والشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت هو اللي بيقرّب الفرق. أسماء الشركات أمثلة مش ضمان إنها بتوظف دلوقتي، وللتأكد قارن الرقم بصفحات المرتبات في Wuzzuf وLinkedIn وGlassdoor واعتبره مؤشر مش وعد.</p>
 <div class="mt-4 flex flex-wrap gap-2"><button class="team-btn" onclick="qzAsk(0)"><i aria-hidden="true" class="fa-solid fa-rotate"></i> راجع إجاباتك</button><button class="gtab" onclick="qzReset()">اعمل الاختبار من الأول</button><button class="gtab" onclick="qzCopy()"><i aria-hidden="true" class="fa-regular fa-copy"></i> انسخ النتيجة</button></div>`)}
function qzCopy(){const{ms}=qzCalc(),t=ms[0],m=M[t.i],f=t.f.slice(0,3).map(x=>sp(M[t.i].j[x.x].t)[0]).join('، ');
 const s=`نتيجة اختبار SAMS Compass: أنسب تخصص ليا "${m.n}". أنسب المجالات: ${f}.`;
 try{navigator.clipboard.writeText(s).then(()=>alert('تم النسخ'),()=>prompt('انسخ النتيجة:',s))}catch(e){prompt('انسخ النتيجة:',s)}}

function _route(){const h=location.hash.slice(1);let m;_nav=true;
 try{if(h==='ba')showBA();else if(h==='quiz')showQuiz();
  else if(m=h.match(/^m(\d+)-j(\d+)$/)){const i=+m[1],x=+m[2];if(M[i]&&M[i].j[x]){show(i);job(i,x)}else show(0)}
  else if(m=h.match(/^m(\d+)(?:-(about|opp|links|jobs))?$/)){if(M[+m[1]])show(+m[1],m[2]);else show(0)}
  else show(0)}catch(e){show(0)}
 _nav=false}
qzLoad();qzUpdateBanner();
window.addEventListener('popstate',_route);
_route();_ready=true;
;
(function(){
  const cv=document.getElementById('bgfx'); if(!cv) return;
  const ctx=cv.getContext('2d');
  const reduce=window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches||matchMedia('(max-width:768px)').matches;
  let W=0,H=0,dpr=1,raf=0,t0=performance.now();
  const GAP=34, R=230;                       // dot spacing / cursor influence radius
  const mouse={x:-9999,y:-9999,sx:-9999,sy:-9999,on:false,v:0};
  const ripples=[];                          // click / tap waves
  const TEAL=[45,212,191], AMBER=[251,191,36];
  const orbs=[ {x:.18,y:.22,r:.42,c:'20,184,166',a:.13,s:.00006,p:0},
               {x:.82,y:.30,r:.36,c:'251,191,36',a:.07,s:.00008,p:2},
               {x:.55,y:.88,r:.46,c:'20,184,166',a:.09,s:.00005,p:4} ];
  const mix=(a,b,k)=>`rgb(${a[0]+(b[0]-a[0])*k|0},${a[1]+(b[1]-a[1])*k|0},${a[2]+(b[2]-a[2])*k|0})`;

  function resize(){
    dpr=Math.min(devicePixelRatio||1,2); W=innerWidth; H=innerHeight;
    cv.width=W*dpr; cv.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    if(reduce) draw(performance.now());
  }

  function draw(now){
    const t=now-t0;
    ctx.clearRect(0,0,W,H);

    // ease the cursor so the light feels fluid
    if(mouse.on){ mouse.sx+=(mouse.x-mouse.sx)*.14; mouse.sy+=(mouse.y-mouse.sy)*.14; }

    // 1) drifting colour orbs
    for(const o of orbs){
      const ox=(o.x+Math.sin(t*o.s*6+o.p)*.07)*W, oy=(o.y+Math.cos(t*o.s*5+o.p)*.06)*H, rr=o.r*Math.max(W,H)*.6;
      const g=ctx.createRadialGradient(ox,oy,0,ox,oy,rr);
      g.addColorStop(0,`rgba(${o.c},${o.a})`); g.addColorStop(1,`rgba(${o.c},0)`);
      ctx.fillStyle=g; ctx.fillRect(ox-rr,oy-rr,rr*2,rr*2);
    }

    // 2) spotlight following the cursor
    if(mouse.on){
      const g=ctx.createRadialGradient(mouse.sx,mouse.sy,0,mouse.sx,mouse.sy,R*1.5);
      g.addColorStop(0,'rgba(45,212,191,.16)'); g.addColorStop(.5,'rgba(45,212,191,.05)'); g.addColorStop(1,'rgba(45,212,191,0)');
      ctx.fillStyle=g; ctx.fillRect(mouse.sx-R*1.5,mouse.sy-R*1.5,R*3,R*3);
    }

    // 3) dot grid that bulges, repels and warms up near the cursor / ripples
    for(let i=ripples.length-1;i>=0;i--){ ripples[i].r+=7; if(ripples[i].r>Math.max(W,H)*.7) ripples.splice(i,1); }
    const cols=Math.ceil(W/GAP)+2, rows=Math.ceil(H/GAP)+2, offx=(W%GAP)/2, offy=(H%GAP)/2;
    for(let iy=-1;iy<rows;iy++){
      for(let ix=-1;ix<cols;ix++){
        let x=offx+ix*GAP, y=offy+iy*GAP, k=0, dx=0, dy=0;
        // slow ambient wave so the grid is alive even without the mouse
        const amb=(Math.sin(x*.012+t*.0007)+Math.cos(y*.014-t*.0006))*.5;
        if(mouse.on){
          const mx=x-mouse.sx, my=y-mouse.sy, d=Math.hypot(mx,my);
          if(d<R){ const f=1-d/R, e=f*f*(3-2*f); k=e; const push=e*16; if(d>.5){ dx+=mx/d*push; dy+=my/d*push; } }
        }
        for(const rp of ripples){
          const mx=x-rp.x, my=y-rp.y, d=Math.hypot(mx,my), w=Math.abs(d-rp.r);
          if(w<46){ const f=1-w/46, life=1-rp.r/(Math.max(W,H)*.7); k=Math.max(k,f*life); if(d>.5){ dx+=mx/d*f*14*life; dy+=my/d*f*14*life; } }
        }
        const rad=1+amb*.35+k*3.2, al=.16+amb*.05+k*.8;
        ctx.globalAlpha=Math.min(1,Math.max(0,al));
        ctx.fillStyle=k>.02?mix(TEAL,AMBER,Math.min(1,k*k*1.1)):'#8aa0c0';
        ctx.beginPath(); ctx.arc(x+dx,y+dy,Math.max(.4,rad),0,6.2832); ctx.fill();
      }
    }
    ctx.globalAlpha=1;
  }

  function loop(now){ draw(now); raf=requestAnimationFrame(loop); }
  function start(){ if(!raf && !reduce) raf=requestAnimationFrame(loop); }
  function stop(){ if(raf){ cancelAnimationFrame(raf); raf=0; } }

  addEventListener('pointermove',e=>{ if(!mouse.on){ mouse.sx=e.clientX; mouse.sy=e.clientY; } mouse.x=e.clientX; mouse.y=e.clientY; mouse.on=true; },{passive:true});
  addEventListener('pointerdown',e=>{ ripples.push({x:e.clientX,y:e.clientY,r:0}); if(ripples.length>4) ripples.shift(); },{passive:true});
  document.addEventListener('mouseleave',()=>{ mouse.on=false; });
  addEventListener('touchend',()=>{ mouse.on=false; },{passive:true});
  addEventListener('resize',resize);
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  resize(); if(reduce) draw(performance.now()); else start();


})();
;
/* ===== يوم الشغل العادي: [رقم التخصص، regex المجال، [مهام اليوم]، مش هتعمل، مناسب لو] ===== */
const DD=[
[0,/Data Analyst/,["بتستلم سؤال من الإدارة، مثلًا: ليه المبيعات نزلت الشهر ده؟","بتسحب الداتا من قاعدة البيانات بـ SQL وتنضفها (أرقام مكررة، خانات فاضية، أخطاء)","بتحللها في Excel أو Python وتدور على السبب","بتعمل Dashboard أو تقرير وتشرح النتيجة للمدير بكلام بسيط"],"مش بتبني برامج ولا مواقع، شغلك تجاوب أسئلة بالأرقام. وأغلب وقتك تنضيف بيانات مش رسم شارتات.","بتحب تدور على السبب ورا الأرقام وتتحمل شغل تفصيلي ومتكرر."],
[0,/Power BI Developer/,["بتبني نموذج بيانات بيربط جداول الشركة ببعض في Power BI","بتكتب معادلات DAX بتحسب المؤشرات (الربح، النمو، التارجت)","بتصمم Dashboards بتتحدث لوحدها كل يوم","بتتأكد إن الأرقام صح والتقرير سريع، وبتصلح لما يقع"],"الفرق بينه وبين محلل البيانات: المحلل بيجاوب سؤال ويمشي، وأنت بتبني نظام تقارير الناس بتستخدمه كل يوم.","بتحب تبني حاجة شغالة وتهتم بالتفاصيل التقنية."],
[0,/Business & Systems/,["بتقعد مع أصحاب الشغل (مبيعات، محاسبة) وتسألهم: بتعملوا الشغل ده إزاي وإيه اللي مضايقكم؟","بتكتب المطلوب في وثيقة أو User Stories بحيث المبرمج يفهمه من غير تخمين","بترسم العملية على draw.io","بتتابع المبرمجين وتختبر إن اللي اتبني هو اللي اتطلب"],"مش بتبرمج، وشغلك الأساسي اجتماعات وكتابة وتنسيق.","بتحب تسمع الناس وتترجم مشاكلهم لحلول واضحة، ومرتاح في الاجتماعات."],
[0,/ERP & Implementation/,["بتفهم دورة شغل الشركة: شراء، مخازن، مبيعات، حسابات","بتظبط النظام (Odoo أو SAP) على طريقتهم: صلاحيات، فواتير، تقارير","بترحّل بياناتهم من Excel للنظام الجديد","بتدرب الموظفين وتحل مشاكلهم بعد التشغيل"],"مش بتكتب نظام من الصفر، بتظبط نظام جاهز. وممكن تنتقل بين شركات وعملاء كتير.","بتحب الشرح والتدريب، وفاهم أساسيات المحاسبة والمخازن."],
[0,/Product Owner/,["بتحدد إيه اللي يتبني الأول وإيه يتأجل","بتكتب المطلوب وتحضر اجتماع الفريق اليومي (Scrum)","بتتابع الجدول والميزانية وتبلغ الإدارة بأي تأخير","بتتفاوض بين عميل عايز كل حاجة ومبرمجين وقتهم محدود"],"مش بتبرمج، وغالبًا مش بتبدأ بالدور ده، بتبدأ من محلل أعمال أو مساعد مشروعات.","بتحب تنظم وتاخد قرارات وتتحمل مسؤولية نتيجة فريق."],
[0,/MIS Officer/,["بتجهز التقارير الدورية (يومي وأسبوعي وشهري) من أنظمة الشركة","بتتأكد إن بيانات الأقسام متوافقة مع بعض","بتعدل في الأنظمة الداخلية وتحل مشاكل الموظفين فيها","بتجاوب طلبات الإدارة السريعة: عايزين رقم كذا النهاردة"],"شغل مستقر بس متكرر، وفرص الإبداع فيه أقل من شركات التقنية.","بتحب شغل منظم ومستقر وبتجيد Excel وSQL."],
[0,/IT Auditor/,["بتراجع مين له صلاحية على إيه في الأنظمة، وهل فيه نسخ احتياطية","بتقارن اللي بيحصل فعلًا باللي مكتوب في السياسات (ISO 27001)","بتفحص جودة البيانات وتدور على أخطاء وثغرات","بتكتب تقرير بالمخالفات والتوصيات وتتابع تصليحها"],"مش بتخترق ولا بتصلح بنفسك، بتفحص وتقيّم وتكتب.","دقيق ومنظم وبتكتب كويس، ومتحمل إنك اللي بيلاقي الغلط عند الناس."],
[0,/UI\/UX/,["بتسأل مستخدمين: بيتلخبطوا فين في التطبيق؟","بترسم الشاشات الأولية (Wireframes) وبعدين تصممها في Figma","بتعمل نموذج يتجرب وتختبره على ناس حقيقيين","بتسلم التصميم للمبرمجين وتتابع إنه اتنفذ صح"],"مش بتبرمج، ومش رسم حر: كل قرار في التصميم لازم له سبب.","عندك حس بصري وبتهتم بتجربة الناس، وبتتقبل نقد شغلك."],
[0,/Low-Code/,["بتبني صفحات أو تطبيقات أعمال (طلب إجازة، متابعة طلبات)","بتربطها بقاعدة بيانات","بتصلح الأخطاء اللي بتظهر لما المستخدمين يجربوها","بتتعلم أدوات جديدة باستمرار"],"مش بتبني أنظمة ضخمة زي خريج كلية حاسبات، والمجال ده محتاج تعلم ذاتي كبير برا المنهج.","بتحب تبني حاجة بإيدك وتتعلم ذاتيًا لساعات."],
[0,/QA/,["بتقرا المطلوب وتكتب حالات اختبار: لو دخلت رقم غلط يحصل إيه؟","بتجرب البرنامج بإيدك وتدور على أخطاء","بتسجل كل خطأ بوضوح (خطوات وصور) للمبرمج","بتتأكد إن التصليح مكسرش حاجة تانية، وبعدها تتعلم الأتمتة"],"مش بتصلح الأخطاء، بتلاقيها. ومحتاج صبر وحب للتفاصيل.","بتلاحظ التفاصيل الصغيرة وعايز بداية سهلة في الـ IT."],
[0,/Cybersecurity/,["بتراقب لوحة التنبيهات (SIEM) طول الوردية","بتحقق في كل تنبيه: هجوم حقيقي ولا إنذار كاذب؟","بتكتب تقرير الحادثة وتصعّد للمستوى الأعلى","بتفحص الثغرات وتحدّث السياسات الأمنية"],"مش اختراق زي الأفلام: أغلب الشغل مراقبة وتحليل، وأحيانًا ورديات ليلية.","صبور وفضولي وعندك استعداد تتعلم شبكات وLinux بعمق."],
[0,/DBA/,["بتتأكد إن قواعد البيانات شغالة وسريعة","بتعمل نسخ احتياطي وبتجرب إنه يرجع فعلًا","بتدي الصلاحيات للناس وتأمّن البيانات","بتصلح لما نظام يبطأ أو يقع، وساعات بره مواعيد الشغل"],"لو حصلت مشكلة الكل بيدور عليك، يعني فيه ضغط أوقات الأعطال.","منظم وهادي تحت الضغط وبتحب النظم من جوه."],
[1,/FP&A/,["بتجمع أرقام الأقسام وتجهز الموازنة السنوية","بتقارن الفعلي بالمخطط كل شهر وتشرح سبب الفرق","بتعمل سيناريوهات: لو المبيعات زادت 10٪ هيحصل إيه؟","بتعرض النتايج على المدير المالي"],"مش بتسجل قيود يومية زي المحاسب العام، بتحلل وتتوقع.","بتحب الأرقام وعايز تأثيرها على قرارات الشركة."],
[1,/Tax/,["بتجهز الإقرارات الضريبية (قيمة مضافة، دخل، مرتبات)","بتتابع الفواتير الإلكترونية وتتأكد إنها مقبولة","بتجهز المستندات لفحص مصلحة الضرائب","بتتابع تعديلات القوانين وتبلغ الشركة"],"مش أرقام بس: بتقرا قوانين كتير وبتتغير باستمرار.","بتحب القوانين والتفاصيل وتلتزم بمواعيد صارمة."],
[4,/Credit & Risk/,["بتستلم طلب تمويل من شركة أو فرد","بتحلل ميزانياتها وتحسب قدرتها على السداد","بتقيّم المخاطر وتكتب توصية: موافقة أو رفض أو بشروط","بتتابع العملاء بعد التمويل لو بدأوا يتأخروا"],"مش بتتعامل مع العملاء كتير زي خدمة العملاء، شغلك ورا الكواليس.","قوي في الأرقام والتحليل وبتفضل المكتب على التعامل مع الناس."],
[4,/AML/,["بتراجع تنبيهات المعاملات المشبوهة (تحويل كبير بدون مبرر)","بتتأكد من هوية العملاء الجدد (KYC)","بتحقق وتكتب تقارير للبنك المركزي أو وحدة مكافحة غسل الأموال","بتدرب الموظفين على اللوائح"],"مش بتقبض على حد، بتفحص وتبلّغ.","دقيق ومنظم وبتتحمل مسؤولية قانونية."],
[8,/Actuarial Analyst/,["بتبني نماذج إحصائية تحسب احتمال الوفاة أو الحوادث","بتحدد سعر وثيقة التأمين","بتحسب كام لازم الشركة تحتفظ بيه لتعويضات المستقبل","بتذاكر امتحانات مهنية بالتوازي مع الشغل"],"مش مبيعات تأمين: رياضيات وإحصاء كتير، والامتحانات المهنية بتاخد سنين.","الرياضيات نقطة قوة عندك وصبور على مذاكرة طويلة."],
[9,/HSE/,["بتلف في الموقع وتتأكد من الخوذ والسقالات والطفايات والإجراءات","بتعمل تدريبات سلامة للعمال","بتحقق في الحوادث وتكتب تقرير","بتصدر تصاريح الشغل الخطر"],"شغل ميداني في مواقع ممكن تكون بعيدة، مش مكتب.","مش بتخاف من الميدان وحازم وبتعرف تقنع الناس."],
[3,/M&E/,["بتحدد مؤشرات تقيس نجاح المشروع (كام شخص استفاد؟)","بتجمع بيانات بنزول ميداني واستبيانات","بتحللها وتكتب تقارير للجهة المانحة","بتقترح تعديلات لو المشروع مش بيحقق هدفه"],"مش بتنفذ المشروع نفسه، بتقيسه وتقيّمه.","بتحب الإحصاء والكتابة وعايز تقيس أثر حقيقي."]
];
DD.push(
[2,/Recruiter/,["بتنشر الوظيفة وتفرز مئات السير الذاتية","بتعمل مقابلة تليفون أولية وتجهز المرشحين للمدير","بتتابع العرض والتفاوض لحد ما المرشح يبدأ"],"مش بتقرر مين يتعين لوحدك، القرار للمدير. وفيه ضغط تارجت توظيف.","بتحب الكلام مع الناس وتقدر تقول لا بلطف."],
[2,/Payroll/,["بتحسب مرتبات الشهر: حضور وإجازات وخصومات وتأمينات وضرائب","بتراجع الأخطاء قبل الصرف وتجهز كشوف البنك","بتجاوب موظفين: ليه المرتب كذا؟"],"أي غلطة في رقم بتتحول لمشكلة مع موظف، فمفيش مجال للإهمال، وآخر الشهر ضغط.","دقيق وبتحافظ على السرية."],
[2,/L&D/,["بتسأل الأقسام: فريقكم محتاج يتدرب على إيه؟","بتصمم أو بتنسق برنامج تدريب وبتجيب المدرب","بتقيس بعد التدريب: الأداء اتحسن ولا لأ؟"],"مش بتدرّب دايمًا بنفسك، ساعات بتنظم وتتابع وتكتب تقارير.","بتحب الشرح والتنظيم وتتكلم قدام ناس."],
[6,/Digital Marketer/,["بتجهز حملة إعلانية على ميتا أو جوجل وتحدد الميزانية","بتتابع الأرقام يوميًا (تكلفة العميل والمبيعات) وتعدل","بتكتب أو تراجع الإعلانات والمحتوى مع المصمم"],"مش تصميم ولا نشر بس: نص الشغل أرقام وتحليل حملات.","بتحب الإبداع والأرقام مع بعض."],
[6,/Business Development/,["بتدور على عملاء جدد وتكلمهم (مكالمات وإيميل وزيارات)","بتعمل عروض أسعار وتتفاوض","بتتابع العميل بعد الصفقة وتحقق التارجت الشهري"],"دخلك مرتبط بالنتيجة، ورفض العملاء جزء يومي من الشغل.","اجتماعي وتتحمل الرفض وبتحب التحدي."],
[6,/Content Manager/,["بتخطط جدول محتوى الأسبوع للسوشيال والموقع","بتكتب وتراجع وتنسق مع مصمم ومصور","بتقيس أي منشور نجح ولماذا"],"مش كتابة حرة بس، فيه التزام بمواعيد وأرقام تفاعل ومنافسة عالية.","بتكتب كويس وبتتابع الترندات."],
[4,/Relationship Officer/,["بتقابل العملاء في الفرع وتفتح حسابات وبطاقات","بتعرض منتجات تمويل وادخار مناسبة للعميل","بتحل مشاكل العميل وبتحقق تارجت مبيعات"],"فيه تارجت مبيعات شهري، مش خدمة عملاء بس.","بتحب الناس والإقناع والتعامل اليومي."],
[4,/Banking Operations/,["بتنفذ التحويلات والاعتمادات وتراجعها","بتطابق حسابات اليوم وتصلح الفروق","بتلتزم بإجراءات وحدود صلاحية صارمة"],"شغل داخلي بعيد عن العملاء، متكرر ودقيق جدًا.","منظم وهادي ومحتاج استقرار."],
[5,/Financial Analyst/,["بتجمع أرقام الشركة وتبني نموذج في Excel","بتحلل الأداء والربحية وتتوقع الفترة الجاية","بتعرض توصياتك على الإدارة"],"مش بتسجل قيود، بتحلل وتتوقع. وExcel هو أداتك الأساسية.","بتحب الأرقام والنماذج والعرض."],
[5,/Wealth Manager/,["بتقابل العملاء وتفهم أهدافهم وقدرتهم على المخاطرة","بتقترح مزيج استثمار (صناديق وأسهم وسندات)","بتتابع المحفظة وتتواصل مع العميل في السوق الصعب"],"النجاح هنا بناء ثقة على سنين، ومش مبتدئ يبدأ بيه مباشرة.","اجتماعي وهادي وبتفهم أسواق المال."],
[7,/Economic Researcher/,["بتجمع بيانات (CAPMAS والبنك المركزي والبنك الدولي)","بتحللها بـ Excel أو Stata أو Python","بتكتب تقرير أو ورقة تحليل سياسات"],"أغلب وقتك قراءة وكتابة وتحليل، والمرتب في البداية متواضع.","بتحب البحث والكتابة والتفكير العميق."],
[9,/Procurement & Contracts/,["بتطرح مناقصة وتستلم العروض وتقارنها","بتتفاوض مع الموردين وتراجع بنود العقد","بتتابع التوريد والتأخير والدفعات"],"مسؤولية قانونية ومالية: أي بند غلط في العقد بيكلف الشركة.","دقيق وبتتفاوض وفاهم قانون وعقود."],
[3,/موظف حكومي/,["بتنفذ الإجراءات اللي القانون حددها وتراجع الأوراق","بتخدم مواطنين أو جهات داخلية وتحل شكاويهم","بتجهز تقارير وتتابع المشروعات في إدارتك"],"التقدم بالدرجات والأقدمية، والمرتب في البداية متواضع، والشغل روتيني.","محتاج استقرار ومعاش، ومرتاح مع الإجراءات."],
[3,/Policy Analyst/,["بتجمع بيانات عن مشكلة (مثلًا ازدحام الدعم)","بتقارن بدائل الحل وتكلفتها وأثرها","بتكتب ورقة سياسات بتوصية للمسؤول"],"مش بتصدر قرار، بتدعم صاحب القرار بدليل مكتوب.","بتحب التحليل والكتابة وتفهم الدولة."],
[1,/محاسب عام/,["بتسجل القيود اليومية وفواتير الشراء والبيع","بتطابق حساب البنك وبتحضر الميزانية الشهرية","بتتابع العملاء والموردين وبتجهز التقارير للمدير المالي"],"شغل متكرر ودقيق، وأغلب التقدم بيجي بشهادة (ACCA/CMA) أو تخصص.","بتحب الترتيب والدقة."],
[1,/External Auditor/,["بتروح الشركة العميلة وتفحص مستنداتها وقوائمها","بتختار عينات وتتأكد إنها صحيحة","بتكتب ملاحظات وتساعد في تقرير مراقب الحسابات"],"موسم المراجعة (آخر السنة) فيه ساعات طويلة وسفر للعملاء.","بتتحمل ضغط موسمي وتحب التعلم السريع."]
);
const GL=[[/\bSQL\b/,'SQL','لغة بتسأل بيها قاعدة البيانات وتطلع الأرقام اللي محتاجها.'],[/DAX/,'DAX','معادلات بتحسب مؤشرات (زي الربح والنمو) جوه Power BI.'],[/Power BI/,'Power BI','أداة من مايكروسوفت بتحول الأرقام لرسومات وتقارير تتحدث لوحدها.'],[/Dashboard|لوحات/,'Dashboard','شاشة واحدة فيها أهم أرقام الشغل برسومات.'],[/KYC/,'KYC','إجراءات التأكد من هوية العميل قبل التعامل معاه.'],[/SIEM/,'SIEM','نظام بيجمع تنبيهات الأمان من كل الأجهزة في مكان واحد.'],[/BPMN|UML/,'BPMN / UML','طرق رسم موحدة للعمليات أو النظم بحيث الكل يفهمها.'],[/User Stories/,'User Stories','جمل بسيطة بتوصف إيه اللي المستخدم محتاجه من النظام.'],[/Scrum|Agile/,'Agile / Scrum','أسلوب شغل على دورات قصيرة (أسبوعين) مع اجتماع يومي بسيط.'],[/ERP|Odoo|SAP/,'ERP','نظام واحد بيربط حسابات ومخازن ومبيعات الشركة.'],[/IFRS/,'IFRS','معايير دولية لكتابة القوائم المالية.'],[/ISO 27001/,'ISO 27001','معيار دولي لأمن المعلومات.'],[/Wireframe/,'Wireframe','رسم أولي بسيط لشكل الشاشة قبل التصميم.'],[/FP&A/,'FP&A','التخطيط والتحليل المالي: الموازنة والتوقعات.'],[/Figma/,'Figma','برنامج تصميم واجهات بيشتغل على المتصفح.']];
const ddMini=(i,j)=>{const d=DD.find(r=>r[0]==i&&r[1].test(j.t));return d?`<p style="font-size:.82rem;color:var(--mut)"><b>هتعمل:</b> ${d[2].slice(0,2).join('، ')}</p>`:''};
const _j2=job;
job=function(i,x){_j2(i,x);const j=M[i].j[x],d=DD.find(r=>r[0]==i&&r[1].test(j.t)),lad=out.querySelector('.lad');if(!lad)return;let h='';
 if(d)h+=Hd('A typical workday','يوم الشغل العادي بالضبط')+`<div class="job"><h4>في يوم شغل عادي هتعمل:</h4>${li(d[2])}</div><div class="job"><h4>اللي مش هتعمله / لازم تعرفه:</h4><p>${d[3]}</p></div><div class="job"><h4>مناسب لك لو:</h4><p>${d[4]}</p></div>`;
 const txt=j.t+' '+j.u+' '+j.r+' '+(d?d[2].join(' '):''),g=GL.filter(t=>t[0].test(txt));
 if(g.length)h+=Hd('Key terms','مصطلحات في الوظيفة دي')+g.map(t=>`<div class="job"><h4 dir="ltr" style="text-align:left">${t[1]}</h4><p>${t[2]}</p></div>`).join('');
 lad.insertAdjacentHTML('beforebegin',h)};
_route();
;
/* ===== إضافات: يوم الشغل العادي لوظايف ناقصة ===== */
DD.push(
[1,/Cost Accountant/,["بتحسب تكلفة كل منتج: خامات وعمالة ومصاريف مصنع","بتقارن التكلفة الفعلية بالمعيارية وتدور على سبب الفرق","بتساعد الإدارة تحدد سعر البيع وتقلل الهدر"],"مش بتسجل قيود عامة، شغلك مرتبط بالمصانع والإنتاج. لازم تفهم العملية الإنتاجية.","بتحب الأرقام التفصيلية ومش مضايقك زيارات المصنع."],
[1,/Internal Auditor/,["بتراجع إجراءات الأقسام داخل شركتك طول السنة","بتختبر الرقابة الداخلية وتدور على ثغرات أو تلاعب","بتكتب تقرير للإدارة العليا وتتابع التصليح"],"زملاءك ممكن ما يرحبوش بيك لأنك بتراجع شغلهم. محتاج هدوء ودبلوماسية.","بتحب الدقة والتحقق وتقدر تقول للناس ملاحظات صعبة بلباقة."],
[1,/Government Accountant/,["بتسجل الإيرادات والمصروفات على بنود الموازنة العامة","بتجهز حسابات ختامية وتراجع مستندات الصرف","بتلتزم بلوائح المالية وتتعامل مع الجهاز المركزي للمحاسبات"],"شغل روتيني بلوائح ثابتة، والترقي بالدرجة والأقدمية مش بالأداء.","بتفضل الاستقرار والتثبيت وعندك صبر على الروتين."],
[1,/Remote Bookkeeper/,["بتمسك دفاتر شركات أو مكاتب بره مصر على QuickBooks أو Xero","بتسجل الفواتير والمصروفات وتعمل التسويات البنكية","بتبعت تقرير شهري للعميل وبترد على أسئلته بالإنجليزي"],"مفيش مرتب ثابت أو تأمين، ولازم تدور على عملاء وتلتزم بمواعيدهم.","إنجليزيك كويس وبتقدر تشتغل لوحدك بانضباط."],
[1,/Treasury Officer/,["بتتابع رصيد الشركة اليومي في البنوك وتوقع الاحتياج للسيولة","بتجهز الشيكات والتحويلات وتتفاوض مع البنك على التسهيلات","بتتابع أسعار الصرف وتقترح كيف نحمي الشركة منها"],"أي غلطة في تحويل أو توقيع ممكن تكلف الشركة فلوس كتير، فالمسؤولية عالية.","منظم ودقيق وبتتحمل مسؤولية فلوس كبيرة."],
[2,/HR Generalist/,["بتجهز ملفات الموظفين الجدد وعقودهم وتأميناتهم","بتتابع الحضور والإجازات والجزاءات","بترد على أسئلة الموظفين وتحل مشاكلهم الصغيرة"],"شغل متنوع بس مليان ورق، وغالبًا الكل بيطلب منك حاجة في نفس الوقت.","بتحب التعامل مع الناس وبتحافظ على السرية."],
[2,/HR Analytics/,["بتسحب بيانات الموظفين من نظام HR وتنضفها","بتحسب مؤشرات زي معدل ترك الشغل ومتوسط الغياب (KPI)","بتعمل Dashboard بـ Power BI وتقول للإدارة سبب المشكلة"],"مش بتتعامل مع الموظفين مباشرة، شغلك على الأرقام. وبتحتاج SQL وExcel قوي.","بتحب الأرقام وفي نفس الوقت مهتم بالناس والموارد البشرية."],
[2,/Employee Relations/,["بتستقبل شكاوي الموظفين وبتحقق فيها بحياد","بتتابع المخالفات والإنذارات حسب قانون العمل","بتحل الخلافات بين الموظفين والمديرين وتقترح تحسينات"],"بتسمع مشاكل ناس كتير وممكن تحس بضغط نفسي. لازم تكون محايد حتى لو عاطفيًا متأثر.","هادي وعادل وتقدر تفضل محايد في الخلافات."],
[2,/HRIS Specialist/,["بتظبط نظام الموارد البشرية (HRIS) وبتضيف الموظفين والصلاحيات","بتربط نظام الحضور بالمرتبات وتصلح الأخطاء","بتطلع تقارير وتدرب فريق HR على النظام"],"شغل نصه تقني ونصه HR، ومحتاج تفهم القانون والنظام الاتنين.","بتحب التقنية وتفهم HR وتحب تحل مشاكل النظم."],
[3,/e-Government/,["بتساعد في رقمنة الخدمات الحكومية على بوابة مصر الرقمية","بتتابع الجهات وهي بتحول الورق لخدمات أونلاين","بتجمع شكاوي المواطنين من النظام وتحسنه"],"مشاريعها بطيئة بسبب البيروقراطية، ولازم تتعامل مع جهات كتير.","بتحب التقنية والخدمة العامة وصبور على الإجراءات."],
[3,/Public Procurement/,["بتجهز كراسات الشروط وبتطرح المناقصات والممارسات","بتتابع العروض وتراجعها حسب قانون المناقصات","بتتابع التوريد والمطابقة وتجهز الصرف"],"القانون صارم وأي خطأ إجرائي ممكن يلغي المناقصة. شغل ورقي بدرجة كبيرة.","دقيق وملتزم باللوائح ومش بتحب المجازفة."],
[3,/NGO Program Officer/,["بتنسق أنشطة المشروع مع الشركاء والمستفيدين","بتتابع الميزانية وتجهز تقارير الجهة المانحة","بتنزل ميدانيًا وتجمع بيانات الأثر"],"التمويل بيعتمد على منح بتنتهي، فالاستقرار أقل. وفيه تنقل وسفر ميداني.","بتحب تساعد الناس وإنجليزيك كويس في الكتابة."],
[3,/PR Officer/,["بتكتب بيانات صحفية وتتواصل مع الصحفيين","بتجهز فعاليات ومؤتمرات للجهة","بتتابع السوشيال ميديا والتغطيات وتتعامل مع الأزمات"],"ممكن تتصل بيك في أي وقت لو حصلت أزمة، وصورة الجهة على كتفك.","اجتماعي وبتكتب كويس وبتتصرف بسرعة."],
[4,/Corporate Banker/,["بتزور شركات وتعرض عليها قروض وتسهيلات","بتحلل القوائم المالية للشركة وتجهز دراسة ائتمانية","بتتابع العميل بعد التمويل وتتأكد من السداد"],"التارجت ضغط والعملاء الكبار مطلبهم عالي. بتحتاج شبكة علاقات.","بتحب التحليل والتواصل وتتحمل ضغط المبيعات."],
[5,/Investment Analyst/,["بتتابع أخبار الأسهم والشركات يوميًا","بتحلل القوائم المالية وتبني نموذج تقييم على Excel","بتكتب توصية (شراء أو بيع) وتعرضها على المدير"],"السوق بيتحرك ومفيش ضمان إن التوقع صح. ولازم رخصة الرقابة المالية.","بتحب السوق والمخاطرة المحسوبة وتتحمل الغلط."],
[5,/Investor Relations/,["بتجهز عروض النتائج لربع السنة للمستثمرين","بتجاوب أسئلة المحللين والمساهمين","بتنسق مع المالية والإدارة العليا قبل أي إعلان"],"الوظيفة موجودة غالبًا في شركات مقيدة في البورصة، فالفرص محدودة. وبتحتاج حذر شديد في الكلام.","بتحب الكلام المالي والعرض وتحافظ على سرية المعلومات."],
[6,/E-commerce Manager/,["بتتابع المبيعات والمخزون على المتجر الإلكتروني","بتظبط الأسعار والعروض وتحسن صفحات المنتجات","بتحلل الإعلانات ومعدل التحويل وتقرر الميزانية"],"أي عطل في الموقع وقت العروض بيخسر فلوس فورًا. ولازم متابعة يومية.","بتحب التجارة الأونلاين والأرقام والتجربة المستمرة."],
[6,/Brand & Market Research/,["بتصمم استبيانات وبتجمع بيانات العملاء","بتحلل المنافسين وتحدد حصة السوق","بتقدم نتايج وتوصيات لفريق التسويق"],"مش بتنفذ الحملات، شغلك بحث وتحليل وكتابة تقارير.","بتحب تفهم العميل ووراه البيانات."],
[7,/Feasibility Analyst/,["بتجمع بيانات السوق والتكاليف للمشروع المقترح","بتبني نموذج مالي بيحسب الربح ومدة استرداد رأس المال","بتكتب دراسة الجدوى وتوصي بالتنفيذ أو لأ"],"التوقعات بتعتمد على افتراضات، فلازم تفهم إن الرقم ممكن يتغير.","بتحب المشاريع والأرقام وكتابة التقارير."],
[7,/Economic Data Analyst/,["بتحمل بيانات من الجهاز المركزي للتعبئة والإحصاء والبنك الدولي","بتنضفها وتحللها على Python أو Stata","بتعمل رسومات وتقارير تفسر الاتجاهات الاقتصادية"],"شغل بحثي ومكتبي، ومش هتقابل عملاء كتير.","بتحب الإحصاء والبرمجة والاقتصاد."],
[8,/Insurance Risk Analyst/,["بتراجع طلبات التأمين وبتقيم مستوى الخطر","بتحدد القسط المناسب (Underwriting)","بتتابع نسبة الخسائر وتعدل التسعير"],"قراراتك ممكن ترفض عملاء، فلازم ثقة في تحليلك. وفيه اعتماد كبير على الإحصاء.","بتحب الإحصاء وتقدر تتخد قرارات بناءً على البيانات."],
[8,/Pension Analyst/,["بتحسب التزامات المعاشات المستقبلية","بتتابع اشتراكات المؤمَّن عليهم وبتجهز تقارير","بتتأكد من تطبيق قانون التأمينات"],"شغل طويل الأجل وتقني، ومعظمه في جهات حكومية أو صناديق.","بتحب الأرقام طويلة الأجل وبتفضل الاستقرار."],
[9,/Energy Admin/,["بتجهز ميزانيات المشروع وبتتابع الصرف","بتتعامل مع المقاولين والعقود وأوامر الشراء","بتكتب تقارير شهرية بالإنجليزي للإدارة"],"فيه مواقع بعيدة ونظام ورديات في بعض الشركات.","إنجليزيك قوي وبتحب الإدارة والمالية."],
[9,/Energy Analyst/,["بتتابع أسعار البترول والغاز والكهرباء","بتبني نموذج توقع للطلب والتكلفة على Excel","بتكتب تقرير يساعد الإدارة تقرر الاستثمار"],"فيه تقلبات سوق وتحتاج تفهم السياسات الدولية.","بتحب الاقتصاد والأخبار العالمية والتحليل."],
[9,/Renewable Projects/,["بتتابع جدول مشروع طاقة شمسية أو رياح","بتنسق بين المهندسين والمقاولين والجهات الحكومية","بتتابع التكلفة والتراخيص وتبلغ بالتأخير"],"مش مهندس، بس لازم تفهم الأساسيات الفنية. ومحتاج زيارات ميدانية (زي مشاريع أسوان).","بتحب المشاريع الميدانية وتهتم بالبيئة."],
);
GL.push(
[/KPI/,'KPI','مؤشر رقمي بيقيس نجاح حاجة معينة، زي نسبة المبيعات أو سرعة التوصيل.'],
[/CRM/,'CRM','نظام بيسجل بيانات العملاء ومتابعة الصفقات معاهم.'],
[/Incoterms/,'Incoterms','قواعد دولية بتحدد مين يتحمل تكلفة ومخاطر الشحن بين البايع والمشتري.'],
[/MVP/,'MVP','أبسط نسخة من المنتج بتتجرب على عملاء حقيقيين قبل التوسع.'],
[/Pitch/,'Pitch','عرض قصير بتقنع بيه مستثمر يدعم مشروعك.'],
[/Underwriting|Underwriter/,'Underwriting','تقييم خطر العميل وتحديد قسط التأمين المناسب ليه.'],
[/HRIS/,'HRIS','نظام بيحفظ بيانات الموظفين والحضور والمرتبات.'],
[/Dashboard/,'Dashboard','شاشة بتعرض أهم الأرقام برسومات سريعة.']
);
;
DD.push(
[1,/ERP Accounting Consultant/,["بتظبط الدليل المحاسبي وحسابات النظام (Odoo/SAP) عند العميل","بترحّل الأرصدة وتختبر القيود الآلية","بتدرب المحاسبين وتحل مشاكلهم بعد التشغيل"],"مش بتمسك دفاتر، بتظبط النظام. وبتنتقل بين عملاء ومواعيد تسليم.","بتفهم محاسبة وبتحب النظم والشرح."],
[1,/Forensic Accountant/,["بتفحص قيود وفواتير مشكوك فيها","بتتتبع الفلوس بين الحسابات وتدور على تلاعب","بتكتب تقرير ممكن يتقدم للنيابة أو المحكمة"],"شغل مثير بس نادر وبيحتاج خبرة، وممكن تشهد قدام المحكمة.","فضولي وصبور ومبتحبش تسيب خيط من غير ما تكمله."],
[1,/Project Accountant/,["بتتابع مصاريف كل مشروع مقاولات مقابل الموازنة","بتجهز مستخلصات العملاء ومدفوعات المقاولين","بتحسب الربحية وتبلغ مدير المشروع"],"فيه زيارات موقع وضغط وقت تسليم المستخلصات.","بتحب المشاريع الحقيقية ومتعود على التنقل."],
[1,/IFRS Financial Reporting/,["بتجمع أرصدة الأقسام وتجهز القوائم المالية","بتطبق معايير IFRS وتجهز الإيضاحات","بتقفل الشهر والسنة مع المراجعين"],"ضغط شديد وقت القفل، وبتحتاج متابعة تحديثات المعايير.","دقيق وبتحب المعايير والتفاصيل."],
[2,/Employee Experience/,["بتعمل استبيانات رضا الموظفين وتحللها","بتنظم فعاليات وبرامج استقبال الموظف الجديد (Onboarding)","بتقترح تحسينات بناءً على مؤشرات ترك الشغل"],"نتايج التحسين بتبان ببطء وبتعتمد على دعم الإدارة.","بتحب الناس والتنظيم وتقيس نتايجك بالأرقام."],
[2,/OD Consultant/,["بتحلل هيكل الشركة وطريقة اتخاذ القرار","بتعمل ورش وجلسات مع الإدارات","بتقدم خطة تغيير وبتتابع تنفيذها"],"غالبًا مش وظيفة بداية، بتحتاج خبرة HR أولًا.","بتحب تحليل المؤسسات وتقدر تقنع مديرين."],
[2,/Employer Branding/,["بتكتب محتوى عن الشغل في الشركة على LinkedIn","بتنظم حضور المعارض ومعسكرات التوظيف الجامعية","بتقيس عدد المتقدمين وجودتهم"],"قريبة من التسويق أكتر من HR التقليدي.","بتحب المحتوى والصورة العامة وHR مع بعض."],
[3,/CSR/,["بتخطط مبادرات مجتمعية مع جمعيات ومدارس","بتتابع ميزانية المبادرة وبتجمع أرقام الأثر","بتكتب تقرير سنوي وبتنسق التغطية الإعلامية"],"الميزانية بتتقلص في الأزمات، والأثر صعب يتقاس.","بتحب العمل المجتمعي وتنظم كويس."],
[3,/Public Budget Analyst/,["بتراجع طلبات الجهات للموازنة وبنودها","بتقارن المنصرف بالمخطط وبتجهز تقارير","بتساعد في إعداد الموازنة السنوية وفق وزارة المالية"],"مواعيد الموازنة السنوية ضاغطة، واللوائح صارمة.","بتحب Excel والأرقام العامة."],
[3,/Public Project Manager/,["بتتابع جدول مشروع حكومي وتنسق بين الجهات","بتراجع التقارير والتكلفة وبتبلغ المسؤولين","بتحل العوائق الإدارية والتراخيص"],"بيروقراطية كتير والقرار بيمر بمستويات متعددة.","صبور وبتحب التنسيق والمتابعة."],
[3,/Local Government Officer/,["بتتابع خدمات الحي أو المركز (نظافة، رخص، شكاوى)","بتنزل ميدانيًا وبتجهز تقارير للمحافظة","بتتعامل مع المواطنين يوميًا"],"احتكاك مباشر بالناس والشكاوي، والترقي بالدرجة.","بتحب الخدمة العامة وبتتحمل الضغط الاجتماعي."],
[3,/Quality & Institutional/,["بتوثق إجراءات الجهة وتقارنها بمعايير الجودة (ISO)","بتعمل مراجعات داخلية وتقترح تحسين","بتجهز الجهة للاعتماد (زي اعتماد الجامعات)"],"شغل ورق ومتابعة، ومقاومة التغيير بتبقى عادة.","منظم وبتحب التحسين المستمر."],
[3,/Government Data Analyst/,["بتجمع بيانات الجهة وتنضفها","بتعمل تقارير ولوحات لمتخذي القرار","بتتأكد من دقة الأرقام قبل النشر"],"البيانات غالبًا متفرقة وغير منظمة، فبتقضي وقت في التنضيف.","بتحب SQL وExcel وتهتم بالصالح العام."],
[5,/VC Analyst/,["بتفرز عشرات الشركات الناشئة أسبوعيًا","بتحلل السوق وفريق المؤسسين وبتقيّم الشركة","بتجهز مذكرة استثمار للشركاء"],"الفرص قليلة والمنافسة عالية، وأغلب الشركات بتفشل.","بتحب الابتكار وبتقدر تقرر بمعلومات ناقصة."],
[7,/Policy & Investment/,["بتدرس سياسات الاستثمار والحوافز","بتقارن بين الدول والقطاعات","بتكتب ورقة سياسات بتوصياتها"],"شغل بحثي وكتابي، وتأثيره بياخد وقت.","بتحب البحث والكتابة الواضحة."],
[7,/Development Consultant/,["بتحلل مشكلة تنموية (فقر، تشغيل) وبتصمم مشروع","بتكتب مقترح لمانح","بتتابع وتقيّم أثر المشروع"],"التعاقد غالبًا مؤقت على مشاريع، والسفر للمحافظات بيحصل.","بتحب التنمية وتكتب بالإنجليزي."],
[8,/Insurance Data Analyst/,["بتسحب بيانات المطالبات والوثائق بـ SQL","بتحلل الخسائر وتبني نماذج على Python/R","بتعرض الاتجاهات على الأكتواريين"],"أقرب لمحلل بيانات في سياق التأمين.","بتحب البيانات والإحصاء."],
[8,/ERM Analyst/,["بتسجل مخاطر الشركة (مالية، تشغيلية) في سجل مخاطر","بتقيس احتمال وأثر كل خطر","بتتابع الإدارات في تنفيذ خطط التخفيف"],"مفيش اتجاه واحد صح، بتقنع الإدارات مش بتأمرها.","بتحب التفكير في السيناريوهات وتتواصل كويس."]
);
GL.push(
[/Onboarding/,'Onboarding','خطوات استقبال الموظف الجديد وتعريفه بالشغل في أول أسابيعه.'],
[/ATS/,'ATS','نظام بيجمع ويفرز السير الذاتية للمتقدمين.'],
[/OKR/,'OKR','طريقة تحدد هدف وأرقام تقيس بيها تحقيقه.'],
[/ISO/,'ISO','معايير دولية للجودة والإجراءات.'],
[/Stata|SPSS|EViews/,'Stata / SPSS','برامج إحصاء بتحلل البيانات في الأبحاث.'],
[/Python/,'Python','لغة برمجة سهلة بتستخدم لتحليل البيانات وأتمتة الشغل.'],
[/R\b/,'R','لغة إحصاء بتستخدم في التحليل والنماذج.'],
[/IFoA|SOA/,'IFoA / SOA','هيئات بتدي شهادات الأكتواريين بامتحانات.'],
[/ERM|مخاطر/,'ERM','إدارة المخاطر على مستوى الشركة كلها.'],
[/Procurement|مشتريات|مناقصات/,'Procurement','عملية اختيار الموردين وشراء احتياج الشركة بأحسن سعر وجودة.'],
[/Budget|موازنة|موازنات/,'Budget','خطة أرقام لإيرادات ومصاريف فترة قادمة.'],
[/Audit|مراجع|مراجعة/,'Audit','فحص مستقل بيتأكد إن الأرقام والإجراءات صح.'],
[/AML|غسل أموال/,'AML','قواعد بتمنع تحويل فلوس غير مشروعة عن طريق البنوك.'],
[/Excel/,'Excel','برنامج جداول بيحسب ويحلل ويعمل رسومات.'],
[/Jira/,'Jira','أداة بتنظم مهام الفريق وتتابع تقدمها.'],
[/LinkedIn/,'LinkedIn','شبكة مهنية بتعرض سيرتك وبتدور فيها على فرص.']
);
;
(function(){
M[4].j.push({t:"أخصائي بنوك رقمية وتكنولوجيا مالية Digital Banking & FinTech Officer",s:"13–22 ألف مبتدئ · 45–85 ألف مدير",l:["Junior Officer", "Digital Officer", "Senior", "Product Manager", "Head of Digital"],u:"متابعة تطبيقات الموبايل البنكي والمحافظ الإلكترونية وتحليل استخدامها وتحسين تجربة العميل.",r:"فهم المنتجات البنكية، Excel، أساسيات SQL، وإنجليزي كويس.",w:"كورسات FinTech على Coursera، Excel وSQL، وتجربة تطبيقات البنوك والمحافظ الرقمية في مصر."},{t:"متداول خزينة بنكية Bank Treasury Dealer",s:"14–24 ألف مبتدئ · 50–95 ألف مدير",l:["Junior Dealer", "Dealer", "Senior Dealer", "Head of Treasury", "Treasurer"],u:"متابعة سيولة البنك وأسعار الصرف والفايدة، وتنفيذ صفقات العملة والأذون والسندات.",r:"اقتصاد كلي، رياضيات مالية، Excel، ودقة وتحمل ضغط.",w:"مادة الاقتصاد النقدي، شهادة ACI Dealing Certificate، ومتابعة نشرات البنك المركزي."});
M[5].j.push({t:"محلل أسهم Equity Research Analyst",s:"12–22 ألف مبتدئ · 45–90 ألف سينيور",l:["Research Assistant", "Analyst", "Senior Analyst", "Head of Research"],u:"تحليل القوائم المالية للشركات المقيدة وتقييم الأسهم وكتابة تقارير توصية.",r:"محاسبة مالية، Excel، نماذج التقييم DCF، وكتابة تقارير.",w:"مادة التحليل المالي، CFA Level 1 كهدف، ومتابعة البورصة المصرية EGX وبناء نموذج تقييم لشركة."},{t:"أخصائي مخاطر مالية Financial Risk Officer",s:"13–24 ألف مبتدئ · 45–90 ألف مدير",l:["Junior Risk Analyst", "Risk Officer", "Senior", "Risk Manager", "CRO"],u:"قياس مخاطر السوق والائتمان والسيولة ورفع تقارير للإدارة.",r:"إحصاء، Excel، فهم الأسواق، وأساسيات Python.",w:"مادة الإحصاء، شهادة FRM كهدف، وكورس مخاطر مالية على Coursera."});
M[6].j.push({t:"أخصائي إعلانات مدفوعة Paid Ads Specialist",s:"9–18 ألف مبتدئ · 35–70 ألف مدير",l:["Junior Media Buyer", "Paid Ads Specialist", "Senior", "Performance Manager", "Head of Performance"],u:"إدارة إعلانات ميتا وجوجل وتيك توك وقياس العائد وتحسين الحملات.",r:"Meta Ads وGoogle Ads، تحليل أرقام، وإبداع في صياغة الإعلان.",w:"شهادات Meta Blueprint وGoogle Ads (مجانية)، وتجربة حملة صغيرة بميزانية بسيطة."},{t:"أخصائي SEO وتحليلات تسويق SEO & Marketing Analytics",s:"10–19 ألف مبتدئ · 38–75 ألف مدير",l:["Junior SEO", "SEO Specialist", "Senior", "SEO Manager", "Head of Growth"],u:"تحسين ظهور المواقع في جوجل، تحليل الزوار والتحويلات، وكتابة تقارير نمو.",r:"Google Analytics وSearch Console، كتابة محتوى، وتفكير تحليلي.",w:"شهادة Google Analytics، أدوات SEO، وتحسين موقع حقيقي كمشروع."});
M[7].j.push({t:"محلل اقتصاد كلي Macro Analyst",s:"11–20 ألف مبتدئ · 40–80 ألف سينيور",l:["Research Assistant", "Macro Analyst", "Senior Analyst", "Chief Economist"],u:"متابعة التضخم والفايدة وسعر الصرف والناتج المحلي وكتابة تقارير للإدارة أو العملاء.",r:"اقتصاد كلي، إحصاء، Excel، وكتابة تقارير بإنجليزي.",w:"مواد الاقتصاد الكلي والقياسي، FRED وبيانات البنك الدولي، ونشر تحليل دوري على لينكدإن."},{t:"محلل تسعير ومنافسة Pricing & Competition Analyst",s:"11–20 ألف مبتدئ · 38–75 ألف مدير",l:["Junior Analyst", "Pricing Analyst", "Senior", "Pricing Manager"],u:"دراسة أسعار المنافسين والطلب ومرونة السعر واقتراح أسعار تعظم الربح.",r:"اقتصاد جزئي، Excel، SQL، وتفكير تحليلي.",w:"مادة الاقتصاد الجزئي، Excel وSQL، ومشروع تحليل أسعار منتج في السوق."});
M[8].j.push({t:"أكتواري تسعير Pricing Actuary",s:"14–26 ألف مبتدئ · 55–110 ألف سينيور",l:["Actuarial Trainee", "Pricing Analyst", "Pricing Actuary", "Senior", "Chief Actuary"],u:"حساب أسعار وثائق التأمين من الاحتمالات والخسائر المتوقعة وتحديثها.",r:"احتمالات وإحصاء، Excel، Python أو R، والامتحانات المهنية.",w:"امتحانات IFoA أو SOA الأولى (P وFM)، ومواد الاحتمالات والإحصاء الرياضي."},{t:"محلل احتياطيات تأمين Reserving Analyst",s:"13–24 ألف مبتدئ · 50–100 ألف سينيور",l:["Trainee", "Reserving Analyst", "Senior", "Head of Reserving"],u:"تقدير المبالغ اللي لازم الشركة تحجزها لتغطية المطالبات المستقبلية.",r:"إحصاء، Excel، فهم التأمين، ودقة.",w:"امتحانات أكتوارية أولية، Excel متقدم، وأساسيات R أو Python."});
M[9].j.push({t:"أخصائي مشتريات وعقود طاقة Energy Procurement & Contracts",s:"13–23 ألف مبتدئ · 45–90 ألف مدير",l:["Procurement Assistant", "Procurement Officer", "Senior", "Contracts Manager", "Head of Supply"],u:"تجهيز المناقصات والتفاوض مع الموردين ومتابعة عقود المعدات والخدمات.",r:"قانون عقود، تفاوض، Excel، وإنجليزي.",w:"مادة الإدارة والعقود، CIPS كهدف، وفهم المناقصات الحكومية."},{t:"أخصائي سلامة وبيئة HSE Officer",s:"12–22 ألف مبتدئ · 40–85 ألف مدير",l:["HSE Assistant", "HSE Officer", "Senior", "HSE Manager"],u:"متابعة اشتراطات السلامة والبيئة في المواقع والتحقيق في الحوادث والتدريب.",r:"معرفة لوائح السلامة، ملاحظة وتواصل، وشهادة مهنية.",w:"شهادة IOSH أو NEBOSH، وكورسات سلامة صناعية."});
DD.push(
[4,/FinTech/,["بتتابع أداء تطبيق الموبايل البنكي والمحافظ وتدور على أماكن الشكاوى", "بتحلل بيانات الاستخدام وتقترح تحسينات للمنتج", "بتنسق مع فريق التقنية والتسويق لإطلاق خدمة جديدة"],"مش بتبرمج التطبيق بنفسك، شغلك فهم العميل والمنتج.","بتحب التكنولوجيا والبنوك مع بعض."],
[4,/Treasury Dealer/,["بتتابع أسعار الصرف والفايدة طول اليوم", "بتنفذ صفقات العملة والأذون حسب حدود البنك", "بتجهز تقرير السيولة اليومي للإدارة"],"ضغط عالي وقرارات سريعة، ومش وظيفة بداية سهلة.","بتتحمل ضغط وبتحب متابعة الأسواق."],
[5,/Equity Research/,["بتقرأ القوائم المالية للشركات المقيدة", "بتبني نموذج تقييم في Excel", "بتكتب تقرير توصية بالشراء أو البيع"],"مش بتتداول بفلوسك، شغلك التحليل والكتابة.","بتحب الأسهم والتحليل والكتابة."],
[5,/Financial Risk/,["بتقيس مخاطر المحفظة والائتمان والسيولة", "بتحسب مؤشرات الخطر وتقارنها بالحدود", "بترفع تقرير للإدارة وتقترح تحوط"],"مش بتتخذ قرار الاستثمار، بتحذّر منه.","بتحب الإحصاء والحذر والدقة."],
[6,/Paid Ads/,["بتجهز حملة إعلانية بميزانية محددة", "بتراقب التكلفة والمبيعات وتوقف الضعيف", "بتجرب إعلانات مختلفة وتقارن"],"مش بتصمم كل الإعلانات بنفسك، وفلوس العميل مسؤوليتك.","بتحب الأرقام والتجربة السريعة."],
[6,/SEO/,["بتحلل كلمات البحث وأداء الموقع", "بتحسّن المقالات والصفحات", "بتكتب تقرير شهري بالزيارات والتحويلات"],"النتائج بتتأخر شهور.","بتحب التحليل والمحتوى مع بعض."],
[7,/Macro Analyst/,["بتتابع أرقام التضخم والفايدة والدولار", "بتحلل أثرها على الشركات والأسواق", "بتكتب ملخص أسبوعي للإدارة أو للعملاء"],"مش وظيفة بداية سهلة، وبتعتمد على إنجليزي وكتابة قوية.","بتحب تفهم الاقتصاد وتكتب عنه."],
[7,/Pricing & Competition/,["بتجمع أسعار المنافسين", "بتحلل أثر تغيير السعر على الطلب", "بتقترح أسعار جديدة وتتابع النتيجة"],"مش بتسوّق المنتج، شغلك الأرقام.","بتحب Excel والتحليل الاقتصادي."],
[8,/Pricing Actuary/,["بتحسب احتمال وقوع الخسائر", "بتبني نموذج سعر الوثيقة", "بتحدّث الأسعار حسب بيانات السوق"],"محتاج امتحانات مهنية صعبة بسنين.","بتحب الرياضيات والصبر."],
[8,/Reserving/,["بتجمع بيانات المطالبات", "بتقدر المبلغ المحجوز لتغطيتها", "بتقارن التقدير بالفعلي"],"شغل تحليل بحت قليل التواصل.","بتحب الإحصاء والدقة."],
[9,/Energy Procurement/,["بتجهز مناقصة لمعدات أو خدمة", "بتقارن عروض الموردين وتتفاوض", "بتتابع تنفيذ العقد والتسليم"],"أي عقد غلط ممكن يكلف كتير.","بتحب التفاوض والتفاصيل القانونية."],
[9,/HSE/,["بتفتش على المواقع والمعدات", "بتكتب تقرير حادثة وتقترح تصليح", "بتدرب العمال على السلامة"],"شغل ميداني وفيه مسؤولية كبيرة.","بتحب الشغل الميداني والالتزام."]
);
RMT.unshift([/Paid Ads|SEO/,2,2,2,"طلب عالي ومنافسة عالية، وأسهل بداية بحسابات صغيرة وبورتفوليو حملات."],[/FinTech/,1,0,1,"غالبًا جوه بنك أو شركة تك مالي، والريموت بعد خبرة."],[/Demand & Inventory/,1,1,0,"التحليل ريموت ممكن بعد خبرة، والبداية من شركة."]);
EMPR.unshift([/Digital Banking|Treasury Dealer|Equity Research|Financial Risk/,"banks,fintech"],[/Paid Ads|SEO/,"ecom,telecom,fmcg"],[/Macro Analyst|Pricing & Competition/,"banks,intl,fmcg"],[/Pricing Actuary|Reserving/,"banks,intl"],[/Energy Procurement|HSE/,"industry,intl"]);
})();
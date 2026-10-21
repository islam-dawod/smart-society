'use strict';
/* Smart Society — trilingual content (Arabic / English / Hebrew).
   One shared layout, three languages, two directions (ar + he = RTL, en = LTR).
   All visible copy lives here; app.js and motion.js read the active language. */

const I18N = {

/* ===================================================================== */
/* ARABIC                                                                */
/* ===================================================================== */
ar:{
 dir:'rtl', code:'ar', name:'العربية', short:'ع',
 strings:{
  'meta.title':'سمارت سوسايتي — ذكاء اصطناعي للجميع',
  'meta.desc':'سمارت سوسايتي تتيح المعرفة والأدوات في مجال الذكاء الاصطناعي للتعليم والمجتمع والأعمال الصغيرة. تعرّفوا على مسارات التعلّم وفرص الشراكة.',
  'og.title':'سمارت سوسايتي — المستقبل يخصّنا جميعاً',
  'og.desc':'معرفة وأدوات في مجال الذكاء الاصطناعي للتعليم والمجتمع والأعمال الصغيرة.',
  'skip':'تخطَّ إلى المحتوى',
  'brand.sub':'جمعية سمارت سوسايتي',
  'nav.about':'قصّتنا',
  'nav.programs':'البرامج',
  'nav.knowledge':'مركز المعرفة',
  'nav.partners':'الشركاء والداعمون',
  'nav.finder':'اعثر على مسارك',
  'menu.toggle':'القائمة',
  'lang.aria':'اختيار اللغة',
  'hero.eyebrow':'ذكاء اصطناعي × فرصة اجتماعية',
  'hero.h1':'المستقبل يخصّ<br><span>الجميع<span class="period">.</span></span>',
  'hero.p':'ذكاء اصطناعي للجميع.<br>معرفة وأدوات للتعلّم والعمل والإبداع والتقدّم.<br>نحن هنا لنفتح الباب — مع المجتمع معاً.',
  'hero.action':'خطوتكم الأولى',
  'hero.partners':'نبني شراكة',
  'hero.artAria':'رسم تجريدي لروابط بين الناس والمعرفة والفرص',
  'hero.label1':'نتعلّم',
  'hero.label2':'نبدع',
  'hero.label3':'نتقدّم',
  'hero.core':'FOR EVERYONE',
  'hero.caption':'أناس متّصلون. إمكانات جديدة.',
  'hero.tagline':'نفتح الوصول إلى المعرفة. نبني القدرة.',
  'hero.discover':'واصلوا الاكتشاف',
  'hero.status':'برامج قيد التطوير',
  'ticker':['نتعلّم','نبدع','نتقدّم','نشارك'],
  'ticker.latin':'AI FOR ALL',
  'about.labelNum':'01 / قصّتنا',
  'about.labelEn':'ACCESS TO OPPORTUNITY',
  'about.h2':'التكنولوجيا تتقدّم.<br><span class="muted">نفتح للجميع<br>طريقاً للمشاركة.</span>',
  'about.lead':'الفرصة تبدأ بشرحٍ واضح، بمكانٍ للتدرّب، وبشخصٍ يمكن سؤاله.',
  'about.p1':'سمارت سوسايتي جمعية مسجّلة تتيح المعرفة والمعلومات والأدوات في مجالات الذكاء الاصطناعي والتكنولوجيا والعالم الرقمي — مع تركيز على الفئات ذات الوصول المحدود إلى المعرفة والتدريب.',
  'about.p2':'نطوّر برامج تنطلق من احتياجات الناس: مهمة دراسية، بحث عن عمل، رسالة إلى زبون أو فكرة للمجتمع. نتعلّم ونجرّب ونتحقّق، كي نواصل بقدرة واستقلالية أكبر.',
  'about.link':'كيف نتعلّم معاً',
  'programs.labelNum':'02 / برامجنا',
  'programs.labelEn':'من المعرفة إلى الحياة نفسها',
  'programs.h2':'طريقكم.<br><span class="accent">والأدوات للتقدّم.</span>',
  'programs.p':'ثلاثة مسارات تمهيدية.<br>كلٌّ منها يبدأ باحتياج وينتهي بنتاجٍ مفيد.',
  'programs.note':'المسارات مخطّطة. تُنشر المواعيد واللغات والتكاليف والتعديلات لكل دورة على حدة.',
  'finder.eyebrow':'طريقكم يبدأ من هنا',
  'finder.h2':'ماذا تريدون أن<br><span class="accent">تفعلوا بالذكاء الاصطناعي؟</span>',
  'finder.p':'اختاروا لمن النشاط.<br>سنقترح نقطة بداية تناسبكم.',
  'finder.foot':'يمكن البدء حتى دون خبرة سابقة في الذكاء الاصطناعي.',
  'finder.opt1':'لمدرسة',
  'finder.opt2':'لي أو لمجتمعي',
  'finder.opt3':'لعملي',
  'finder.tiny':'نقطة بدايتكم',
  'finder.resultMeta3':'مسار مخطّط',
  'finder.button':'ماذا سنتعلّم في المسار؟',
  'approach.labelNum':'03 / طريقتنا',
  'approach.labelEn':'HUMAN FIRST. AI NEXT.',
  'approach.h2':'نتعلّم أن نفعل.<br><span class="muted">نتعلّم أن نتحقّق.</span>',
  'approach.p':'الأدوات تتغيّر.<br>والقدرة على التعلّم تبقى معكم.',
  'approach.s1t':'نُصغي','approach.s1p':'نحدّد الاحتياج والخبرة السابقة وعوائق المشاركة.',
  'approach.s2t':'نجرّب','approach.s2p':'نتدرّب على مهمة من الدراسة أو العمل أو المشروع.',
  'approach.s3t':'نتحقّق','approach.s3p':'نقارن المعلومات ونحافظ على الخصوصية ونحسّن.',
  'approach.s4t':'نواصل','approach.s4p':'نخرج بنتاجٍ وبطريقةٍ لمواصلة التعلّم باستقلالية.',
  'knowledge.labelNum':'04 / نبدأ بالفهم',
  'knowledge.labelEn':'معرفة يمكن استخدامها',
  'knowledge.h2':'أدوات صغيرة.<br><span class="accent">خطوة مهمة.</span>',
  'knowledge.p':'ثلاثة أدلّة أولى<br>للاستخدام الواعي للذكاء الاصطناعي.',
  'partners.labelNum':'05 / شراكة ذات أثر',
  'partners.labelEn':'OPPORTUNITY, TOGETHER.',
  'partners.h2':'معرفتكم.<br>هي الخطوة التالية<br><span class="accent">لشخصٍ آخر.</span>',
  'partners.lead':'للشركات والصناديق وأصحاب المهن الراغبين في فتح الفرص داخل المجتمع.',
  'partners.p':'يمكن المساعدة في تمويل التدريب، والإرشاد، والتجهيزات، وتأهيل مرشدين محلّيين. لكل برنامج نحدّد الجمهور المستهدف والميزانية ونتائج يمكن قياسها والإبلاغ عنها.',
  'partners.button':'نبني شراكة',
  'partners.o1t':'نتبنّى مجموعة','partners.o1p':'تمويل دورة تعلّم في مدرسة أو مجتمع.',
  'partners.o2t':'نُحضر المعرفة','partners.o2p':'إرشاد مهني ومرافقة من موظفين متطوّعين.',
  'partners.o3t':'نفتح الوصول','partners.o3p':'تجهيزات وتعديلات لغوية ودعم للمشاركة.',
  'partners.note':'تُنشر الشراكات والنتائج الفعلية بعد الاعتماد والتحقّق.',
  'faq.eyebrow':'قبل أن نبدأ',
  'faq.h2':'جيّد أنكم سألتم.',
  'faq.q1':'هل يلزم خبرة سابقة في الذكاء الاصطناعي؟',
  'faq.a1':'المسارات التمهيدية مناسبة للمبتدئين أيضاً. قبل الانضمام نفحص مستوى الانطلاق ومتطلّبات المسار. ولمن يحتاج يمكن تخطيط مرحلة تمهيدية للمهارات الرقمية.',
  'faq.q2':'هل النشاط مجّاني؟',
  'faq.a2':'تُنشر تكلفة المشاركة وإمكانات الدعم على حدة لكل دورة، بعد تحديد الميزانية والشركاء.',
  'faq.q3':'هل يمكن طلب نشاط لمدرسة أو مجموعة؟',
  'faq.a3':'تُبنى البرامج لتُلائم الجمهور المحلّي. يمكن إعداد طلب نشاط وتفصيل الجمهور المستهدف وعدد المشاركين واللغة والاحتياجات. تُنشر تفاصيل التواصل مع افتتاح النشاط.',
  'faq.q4':'هل تُضمن وظيفة أو زيادة في المبيعات؟',
  'faq.a4':'التدريبات موجّهة لتطوير المهارات وتحسين العمليات. التوظيف والمبيعات يتأثّران بعوامل أخرى، ولا يوجد التزام بنتيجةٍ كهذه.',
  'faq.q5':'بأيّ اللغات يُقام التدريب؟',
  'faq.a5':'تُفصّل لغات الإرشاد والتعديلات المتاحة لكل دورة. مواءمة النشاط بالعبرية والعربية جزء من تخطيط الجمعية، رهناً بالطاقم والموارد.',
  'contact.eyebrow':'ثمّة مكان لخطوتكم التالية',
  'contact.h2':'لنفتح<br><span class="accent">الإمكانات.</span>',
  'contact.p':'للتعلّم. لطلب نشاط. لإحضار المعرفة إلى المجتمع.<br>جهّزوا طلباً يساعد على تحديد الخطوة التالية.',
  'contact.button':'إعداد طلب نشاط',
  'contact.note':'النشاط قيد الإنشاء. تُنشر تفاصيل التواصل ومواعيد التسجيل لاحقاً.',
  'footer.sub':'جمعية سمارت سوسايتي<br>رقم الجمعية 580848505',
  'footer.top':'العودة إلى الأعلى',
  'footer.tagline':'ذكاء اصطناعي للجميع.',
  'footer.transparency':'الشفافية',
  'footer.privacy':'الخصوصية',
  'footer.accessibility':'إتاحة الوصول',
  'footer.copy':'© 2026 سمارت سوسايتي',
  'panel.close':'إغلاق التفاصيل',
  'dialog.whatLearn':'ماذا سنتعلّم؟',
  'dialog.whatKnow':'ما المهمّ معرفته؟',
  'dialog.programNote':'تُنشر المواعيد والمكان واللغات والتجهيزات والتكلفة وشروط المشاركة لكل دورة بعد اعتمادها.',
  'dialog.requestBtn':'إعداد طلب نشاط',
  'guide.note':'دليل أساسي · حُدّث في 15 تشرين الأول 2026',
  'request.partnerLabel':'شراكة مع الجمعية',
  'request.activityLabel':'تخطيط نشاط',
  'request.partnerTitle':'نحدّد الشراكة.',
  'request.activityTitle':'نجهّز الخطوة التالية.',
  'request.intro':'حدّدوا الاحتياج وأنتجوا طلباً منظّماً لحفظه لديكم. تُنشر تفاصيل التواصل مع افتتاح النشاط.',
  'request.org':'اسم المؤسّسة أو المجموعة',
  'request.optional':'(اختياري)',
  'request.type':'مجال النشاط',
  'request.optSchool':'المدارس',
  'request.optCommunity':'المجتمع والتشغيل',
  'request.optBusiness':'الأعمال الصغيرة',
  'request.optPartner':'الشراكة والدعم',
  'request.goal':'ماذا تريدون أن تحقّقوا؟',
  'request.required':'(إلزامي)',
  'request.goalPh':'الجمهور المستهدف، الهدف، حجم المجموعة والاحتياجات الخاصّة',
  'request.note':'لا حاجة لإدخال معلومات شخصية أو حسّاسة. لا يُرسَل الطلب إلى الجمعية وليس تسجيلاً في النشاط.',
  'request.submit':'حفظ الطلب كملفّ',
  'request.success':'جُهّز الطلب للتنزيل. يمكنكم حفظه واستخدامه عند فتح باب الطلبات.',
  'request.fileTitle':'سمارت سوسايتي — طلب نشاط أو شراكة',
  'request.fileOrg':'المؤسّسة أو المجموعة',
  'request.fileNotSpecified':'غير محدّد',
  'request.fileDomain':'المجال',
  'request.filePromote':'ما نودّ تحقيقه',
  'request.fileFooter':'مستند تحضير فقط. لم يُرسَل الطلب إلى الجمعية.',
  'motion.pause':'إيقاف الحركة','motion.play':'تشغيل الحركة','motion.reduced':'حركة مخفّضة',
  'motion.pauseAria':'إيقاف الحركة في الموقع','motion.playAria':'تشغيل الحركة في الموقع','motion.reducedAria':'حركة مخفّضة حسب إعداد الجهاز'
 },
 programs:{
  school:{label:'التعليم والمدارس',title:'نتعلّم أن نسأل، نُبدع، ونتحقّق.',length:'10 لقاءات',output:'مشروع ختامي',copy:'مسار للطلاب يجمع بين التجربة والتحقّق من المعلومات ومشروع مرتبط باحتياج في المجتمع.',
   row:{tag:'التعليم والمدارس',title:'فضولٌ يتحوّل إلى قدرة.',metaMain:'10 لقاءات',metaSub:'تفكير وإبداع ومشروع مجتمعي'},
   intro:'مسار مخطّط من 10 لقاءات مدّة كلٍّ منها 90 دقيقة. نفتح الفضول والتفكير النقدي والقدرة على شرح كيف استخدمنا الذكاء الاصطناعي. تُلاءم الأعمار والأدوات والحسابات وفق سياسة المدرسة وشروط استخدام الأدوات.',
   sessions:[['نتعرّف على الأدوات','نرصد استخدامات مألوفة ونقارن القدرات والحدود.'],['نسأل بشكل أفضل','نصوغ هدفاً وسياقاً ومتطلّبات ونحسّن الطلب.'],['نتعلّم مع الذكاء الاصطناعي','نعدّ شرحاً وأسئلة تدريب ونتحقّق مقابل مادّة التعلّم.'],['نفحص الإجابات','نرصد الأخطاء ونقارن الادّعاءات بمصادر مناسبة.'],['نُبدع ونحرّر','نطوّر نصّاً ونوثّق مساهمة الطالب.'],['نستخدم بمسؤولية','نتدرّب على قرارات حول الخصوصية والتحيّز والنشر.'],['نختار احتياجاً مجتمعياً','نحدّد مشكلة وجمهوراً مستهدفاً للمشروع.'],['نطوّر نتاجاً','نبني مسوّدة دليل أو نشاط أو مادّة توعية.'],['نحسّن بالتغذية الراجعة','نفحص الدقّة وسهولة الاستخدام وإتاحة الوصول.'],['نعرض ونشرح','نشارك النتاج وعملية العمل.']],
   closing:'مواءمة مقترحة: في الابتدائي نشاط موجّه؛ في الإعدادي استقصاء وعمل جماعي؛ في الثانوي مشاريع أكثر تركيباً. يراعي التقييم طريقة العمل والتحقّق والمساهمة الشخصية.'},
  community:{label:'المجتمع والتشغيل',title:'نبدأ من حياتكم.',length:'8 لقاءات',output:'مهمّة شخصية',copy:'تعرّفٌ تدريجي على الذكاء الاصطناعي عبر الكتابة وفهم المعلومات والتخطيط والتعلّم. نبدأ بمهمّة تهمّكم.',
   row:{tag:'المجتمع والتشغيل',title:'نبدأ من حياتكم.',metaMain:'8 لقاءات',metaSub:'أمان رقمي واستخدام مستقلّ'},
   intro:'مسار مخطّط من 8 لقاءات مدّة كلٍّ منها ساعتان. نتعلّم بوتيرة تناسب المجموعة، نتدرّب على مهام يومية ونبني الثقة للاستخدام المستقلّ. قبل الانضمام نفحص اللغة والخبرة الرقمية والوصول إلى جهاز وإنترنت.',
   sessions:[['تعرّف وتجربة','نحدّد هدفاً شخصياً وننفّذ مهمّة افتتاحية.'],['طلبات وأسئلة متابعة','نبني قالباً شخصياً لصياغة الطلب.'],['نفهم المعلومات','نبسّط نصّاً نموذجياً ونلخّصه ونتحقّق من المعنى.'],['نكتب رسالة','نصوغ رسالة أو خطاباً باستخدام تفاصيل افتراضية.'],['نخطّط ونتعلّم','نبني خطّة مهام أو نتعلّم موضوعاً جديداً.'],['نعرض القدرات','نصف خبرة ومهارات ونستعدّ لمقابلة مهنية.'],['نحفظ ونتحقّق','نتدرّب على الخصوصية وتمييز المعلومات التي تحتاج فحصاً.'],['نواصل بأنفسنا','ننجز مهمّة شخصية ونبني خطّة لـ 30 يوماً.']],
   closing:'يمكن تخطيط مرحلة تمهيدية للمهارات الرقمية حسب الحاجة. تُفصّل تعديلات اللغة وإتاحة الوصول لكل دورة وفق الطاقم والموارد.'},
  business:{label:'الأعمال الصغيرة',title:'أدوات عملية لعملكم.',length:'8 لقاءات',output:'عملية عمل مُختبَرة',copy:'نختار مهمّة تتكرّر في العمل، نجرّب أداة ذكاء اصطناعي، ونفحص ما تحسّن في وقت العمل أو في جودة النتيجة.',
   row:{tag:'الأعمال الصغيرة',title:'أدوات جديدة لعملكم.',metaMain:'8 لقاءات',metaSub:'تسويق وخدمة وعمليات عمل'},
   intro:'مسار مخطّط من 8 لقاءات مدّة كلٍّ منها ساعتان. نركّز على مهام التسويق والخدمة والتشغيل، مع تدريب بين اللقاءات. يختار كل صاحب عمل عمليةً واحدة لتحسينها ويوثّق نقطة البداية.',
   sessions:[['نرسم خريطة العمل','نختار مهمّة ومقياس وقت أو جودة.'],['نبني طلبات متكرّرة','ننشئ مكتبة طلبات وقواعد عمل.'],['نشحذ عرض القيمة','نحدّد جمهوراً واحتياجاً ووصف خدمة.'],['نخطّط المحتوى','نعدّ روزنامة محتوى شهرية وثلاث مسوّدات.'],['نحسّن الاستجابة','نبني مخزون أسئلة شائعة وإجابات معتمدة.'],['ننظّم العمل','نجهّز إجراءً أو قالباً لمهمّة متكرّرة.'],['نفحص التحسّن','نقارن العملية بنقطة البداية في ظروف مماثلة.'],['نُرسّخ ونواصل','نبني عدّة عمل وخطّة لـ 30 يوماً.']],
   closing:'تُفحص النتاجات ويعتمدها صاحب العمل قبل الاستخدام. لا تُدخَل معلومات شخصية أو سرّية دون ترتيب مناسب. لا يوجد التزام بزيادة في المبيعات أو الأرباح.'}
 },
 guides:{
  prompt:{label:'دليل للمبتدئين / صياغة الطلبات',title:'كيف نطلب إجابة مفيدة؟',
   card:{type:'للمبتدئين / الطلبات',title:'كيف نطلب<br>إجابةً مفيدة؟',hint:'هدف. سياق. بنية.'},
   body:'<p>طلبٌ واضح يساعد على توجيه النتيجة. نبدأ بالهدف، نضيف السياق، نحدّد الجمهور، ونذكر البنية المطلوبة.</p><ol><li>ماذا نريد أن نُعدّ أو نفهم؟</li><li>لمن الإجابة موجّهة؟</li><li>أيّ معلومات يُسمح للأداة باستخدامها؟</li><li>بأيّ طول وأسلوب وبنية نريد الإجابة؟</li></ol><h3>مثال للتدريب</h3><p>اصِغ رسالة قصيرة لزبائن مخبز حول تغيير ساعات العمل. استخدم فقط التفاصيل التي سأرفقها ولا تختلق ساعات أو أسعاراً. اكتب بعربية بسيطة، في أربعة أسطر كحدّ أقصى.</p><h3>قبل استخدام النتيجة</h3><p>نفحص التفاصيل، ونحرّر الصياغة، ونلائمها لمن سيقرأ. وإن نقصت معلومة، نكمّلها بأنفسنا أو نطلب من الأداة بيان ما ينقص.</p>'},
  verify:{label:'دليل للمبتدئين / التحقّق من المعلومات',title:'إجابةٌ تبدو صحيحة. كيف نتحقّق؟',
   card:{type:'للمبتدئين / التحقّق',title:'إجابةٌ تبدو صحيحة.<br>كيف نتحقّق؟',hint:'مصدر وتاريخ وسياق.'},
   body:'<p>الصياغة الواثقة ليست دليلاً على الصحّة. نفحص الادّعاءات المهمّة للمهمّة قبل النشر أو اتخاذ القرار.</p><ol><li>نحدّد الأسماء والأرقام والتواريخ والوعود القابلة للفحص.</li><li>نبحث عن مصدر مناسب للموضوع، ويُفضّل المصدر الرسمي.</li><li>نتأكّد أنّ المعلومة محدّثة وتخصّ المكان والسياق نفسه.</li><li>نصحّح أو نحذف الادّعاءات التي لم نتمكّن من التحقّق منها.</li></ol><h3>مثال للتدريب</h3><p>وصلتكم قائمة خدمات في المجتمع؟ تحقّقوا منها لدى مواقع الجهات أو بالتواصل معها. الرابط الذي قدّمته الأداة لا يزال يحتاج فتحاً وفحصاً.</p><p>في المواضيع المهنية المركّبة نتوجّه إلى صاحب الاختصاص المناسب.</p>'},
  privacy:{label:'دليل للمبتدئين / الخصوصية',title:'ماذا نُبقي خارج الطلب؟',
   card:{type:'للمبتدئين / الخصوصية',title:'ماذا نُبقي<br>خارج الطلب؟',hint:'نشارك بتقدير.'},
   body:'<p>قبل رفع نصّ أو ملفّ إلى الأداة، نفحص أيّ معلومات يتضمّن وما ترتيبات الاستخدام في المؤسّسة.</p><ul><li>الأسماء وأرقام الهوية والعناوين.</li><li>معلومات شخصية عن طلاب أو زبائن.</li><li>كلمات المرور وبيانات الدخول.</li><li>مستندات داخلية وأسرار تجارية.</li></ul><h3>طريقة بسيطة للتدريب</h3><p>نستبدل المعلومات الحقيقية ببيانات افتراضية. وعند الحاجة إلى معلومات حقيقية، نفحص مسبقاً الصلاحيات وشروط الأداة وترتيبات المؤسّسة.</p><p>غير متأكّدين إن كان يُسمح بالمشاركة؟ نتوقّف ونتحقّق مع الشخص المسؤول.</p>'}
 },
 infos:{
  transparency:{label:'تفاصيل الجمعية',title:'شفافية ومعلومات للجمهور',body:'<p>اسم الجمعية: جمعية سمارت سوسايتي.<br>الاسم بالإنجليزية: SMART SOCIETY (R.A.).<br>رقم الجمعية: 580848505.<br>تاريخ التسجيل حسب الشهادة: 06/10/2026.</p><p>هدف الجمعية هو إتاحة المعرفة والمعلومات والأدوات في مجالات الذكاء الاصطناعي والتكنولوجيا والعالم الرقمي، وخاصّة للفئات ذات الوصول المحدود إلى المعرفة والتدريب في هذه المجالات.</p><p>البرامج المعروضة في الموقع قيد التطوير. تُنشر تقارير النشاط وبيانات الأثر وتفاصيل الشركاء بعد الجمع والتحقّق والاعتماد.</p>'},
  privacy:{label:'معلومات للزوّار',title:'الخصوصية في الموقع',body:'<p>في النسخة الحالية من الموقع لا تُرسَل طلبات ولا تُستلَم مدفوعات. أداة إعداد الطلب تنشئ ملفّاً على جهازكم؛ تفاصيل الطلب لا تُرسَل إلى الجمعية عبرها.</p><p>لا يوجد في الموقع أداة تحليل سلوك أو مكوّنات إعلان أضفناها نحن. يستخدم الموقع خطوطاً خارجية من Google؛ تحميلها ينشئ طلباً إلى المزوّد. قد تعالج خدمة الاستضافة بيانات اتصال وتشغيل وفق شروطها.</p><p>يُحفظ تفضيل الحركة على الجهاز لتذكّر اختياركم في الزيارة القادمة. تُضاف تفاصيل التواصل وسياسة محدّثة قبل فتح التسجيل واستقبال الطلبات.</p>'},
  accessibility:{label:'استخدام الموقع',title:'إتاحة الوصول واستخدام مريح',body:'<p>صُمّم الموقع مع تصفّح بلوحة المفاتيح، وتركيز مرئي، وترتيب للعناوين، وتسميات لعناصر التحكّم. يمكن تكبير العرض عبر المتصفّح، والتخطيط يلائم أيضاً الشاشات الضيّقة.</p><p>تُفعَّل الحركة المخفّضة وفق إعداد الجهاز. المحتوى والإجراءات الأساسية لا تعتمد على تمرير الفأرة.</p><p>هذه نسخة قيد الإنشاء. يُستكمَل فحص إتاحة الوصول المهني وتفاصيل جهة التواصل للإبلاغ عن صعوبة قبل الفتح للجمهور.</p>'}
 }
},

/* ===================================================================== */
/* ENGLISH                                                               */
/* ===================================================================== */
en:{
 dir:'ltr', code:'en', name:'English', short:'EN',
 strings:{
  'meta.title':'Smart Society — AI for everyone',
  'meta.desc':'Smart Society opens access to knowledge and tools in artificial intelligence for education, community and small business. Explore the learning tracks and partnership options.',
  'og.title':'Smart Society — The future belongs to all of us',
  'og.desc':'Knowledge and tools in artificial intelligence for education, community and small business.',
  'skip':'Skip to content',
  'brand.sub':'Smart Society (R.A.)',
  'nav.about':'Our story',
  'nav.programs':'Programs',
  'nav.knowledge':'Knowledge hub',
  'nav.partners':'Partners & supporters',
  'nav.finder':'Find your track',
  'menu.toggle':'Menu',
  'lang.aria':'Choose language',
  'hero.eyebrow':'Artificial intelligence × social opportunity',
  'hero.h1':'The future belongs<br><span>to everyone<span class="period">.</span></span>',
  'hero.p':'AI for everyone.<br>Knowledge and tools to learn, work, create and advance.<br>We are here to open the door — together with the community.',
  'hero.action':'Your first step',
  'hero.partners':'Build a partnership',
  'hero.artAria':'Abstract illustration of connections between people, knowledge and opportunity',
  'hero.label1':'Learn',
  'hero.label2':'Create',
  'hero.label3':'Advance',
  'hero.core':'FOR EVERYONE',
  'hero.caption':'People connected. New possibilities.',
  'hero.tagline':'Opening access to knowledge. Building capability.',
  'hero.discover':'Keep exploring',
  'hero.status':'Programs in development',
  'ticker':['Learn','Create','Advance','Share'],
  'ticker.latin':'AI FOR ALL',
  'about.labelNum':'01 / Our story',
  'about.labelEn':'ACCESS TO OPPORTUNITY',
  'about.h2':'Technology moves forward.<br><span class="muted">We open a way<br>for everyone to take part.</span>',
  'about.lead':'Opportunity begins with a clear explanation, a place to practice and a person you can ask.',
  'about.p1':'Smart Society is a registered nonprofit that opens access to knowledge, information and tools in artificial intelligence, technology and the digital world — with a focus on groups that have limited access to knowledge and training.',
  'about.p2':'We develop programs that begin with people’s real needs: a study task, a job search, a message to a customer or an idea for the community. We learn, experiment and verify, so you can continue with greater capability and independence.',
  'about.link':'How we learn together',
  'programs.labelNum':'02 / Our programs',
  'programs.labelEn':'FROM KNOWLEDGE TO LIFE ITSELF',
  'programs.h2':'Your path.<br><span class="accent">The tools to move forward.</span>',
  'programs.p':'Three starting tracks.<br>Each begins with a need and ends with a useful result.',
  'programs.note':'The tracks are planned. Dates, languages, costs and accommodations will be published separately for each cohort.',
  'finder.eyebrow':'Your path starts here',
  'finder.h2':'What would you like<br><span class="accent">to do with AI?</span>',
  'finder.p':'Choose who the activity is for.<br>We’ll suggest a starting point that fits you.',
  'finder.foot':'You can begin even without prior AI experience.',
  'finder.opt1':'For a school',
  'finder.opt2':'For me or my community',
  'finder.opt3':'For my business',
  'finder.tiny':'Your starting point',
  'finder.resultMeta3':'Planned track',
  'finder.button':'What will the track cover?',
  'approach.labelNum':'03 / Our approach',
  'approach.labelEn':'HUMAN FIRST. AI NEXT.',
  'approach.h2':'Learn to do.<br><span class="muted">Learn to check.</span>',
  'approach.p':'The tools change.<br>The ability to learn stays with you.',
  'approach.s1t':'Listen','approach.s1p':'We identify the need, prior experience and barriers to taking part.',
  'approach.s2t':'Try','approach.s2p':'We practice a task from studies, work or the business.',
  'approach.s3t':'Verify','approach.s3p':'We cross-check information, protect privacy and improve.',
  'approach.s4t':'Continue','approach.s4p':'You leave with a result and a way to keep learning independently.',
  'knowledge.labelNum':'04 / Starting to understand',
  'knowledge.labelEn':'KNOWLEDGE YOU CAN USE',
  'knowledge.h2':'Small tools.<br><span class="accent">A meaningful step.</span>',
  'knowledge.p':'Three first guides<br>for the thoughtful use of AI.',
  'partners.labelNum':'05 / Partnership with impact',
  'partners.labelEn':'OPPORTUNITY, TOGETHER.',
  'partners.h2':'Your knowledge.<br>Someone else’s<br><span class="accent">next step.</span>',
  'partners.lead':'For companies, foundations and professionals who want to open opportunities in the community.',
  'partners.p':'You can help fund training, mentoring, equipment and the training of local guides. For each program we define the target audience, budget and results we can measure and report on.',
  'partners.button':'Build a partnership',
  'partners.o1t':'Adopt a group','partners.o1p':'Fund a learning cohort in a school or community.',
  'partners.o2t':'Bring the knowledge','partners.o2p':'Professional mentoring and support from volunteer staff.',
  'partners.o3t':'Open access','partners.o3p':'Equipment, language accommodations and support to participate.',
  'partners.note':'Partnerships and actual results will be published after approval and verification.',
  'faq.eyebrow':'Before you begin',
  'faq.h2':'Good that you asked.',
  'faq.q1':'Do I need prior experience with AI?',
  'faq.a1':'The introductory tracks are suitable for beginners too. Before joining, we review the starting level and the track requirements. For those who need it, a preliminary digital-skills stage can be planned.',
  'faq.q2':'Is the activity free of charge?',
  'faq.a2':'Participation costs and subsidy options will be published separately for each cohort, after the budget and partners are set.',
  'faq.q3':'Can I request an activity for a school or group?',
  'faq.a3':'The programs are built to fit the local audience. You can prepare an activity request detailing the target audience, number of participants, language and needs. Contact details will be published when the activity opens.',
  'faq.q4':'Is a job or a rise in sales guaranteed?',
  'faq.a4':'The trainings are meant to develop skills and improve processes. Employment and sales are affected by other factors, and no such outcome is guaranteed.',
  'faq.q5':'In which languages is the training held?',
  'faq.a5':'Instruction languages and available accommodations will be detailed for each cohort. Offering activities in Hebrew and Arabic is part of the association’s planning, subject to staff and resources.',
  'contact.eyebrow':'There is room for your next step',
  'contact.h2':'Let’s open<br><span class="accent">possibilities.</span>',
  'contact.p':'To learn. To request an activity. To bring knowledge to the community.<br>Prepare a request that helps define the next step.',
  'contact.button':'Prepare an activity request',
  'contact.note':'The activity is being set up. Contact details and registration dates will be published later.',
  'footer.sub':'Smart Society (R.A.)<br>Association no. 580848505',
  'footer.top':'Back to top',
  'footer.tagline':'AI for everyone.',
  'footer.transparency':'Transparency',
  'footer.privacy':'Privacy',
  'footer.accessibility':'Accessibility',
  'footer.copy':'© 2026 Smart Society',
  'panel.close':'Close details',
  'dialog.whatLearn':'What will we learn?',
  'dialog.whatKnow':'What’s important to know?',
  'dialog.programNote':'Dates, location, languages, equipment, cost and participation terms will be published for each cohort once approved.',
  'dialog.requestBtn':'Prepare an activity request',
  'guide.note':'Basic guide · updated 15 October 2026',
  'request.partnerLabel':'Partnership with the association',
  'request.activityLabel':'Activity planning',
  'request.partnerTitle':'Let’s define the partnership.',
  'request.activityTitle':'Let’s prepare the next step.',
  'request.intro':'Define the need and produce an organized request to keep for yourself. Contact details will be published when the activity opens.',
  'request.org':'Organization or group name',
  'request.optional':'(optional)',
  'request.type':'Activity area',
  'request.optSchool':'Schools',
  'request.optCommunity':'Community & employment',
  'request.optBusiness':'Small business',
  'request.optPartner':'Partnership & support',
  'request.goal':'What would you like to advance?',
  'request.required':'(required)',
  'request.goalPh':'Target audience, goal, group size and special needs',
  'request.note':'No need to enter personal or sensitive information. The request is not sent to the association and is not a registration for the activity.',
  'request.submit':'Save the request as a file',
  'request.success':'The request is ready to download. You can save it and use it when requests open.',
  'request.fileTitle':'Smart Society — activity or partnership request',
  'request.fileOrg':'Organization or group',
  'request.fileNotSpecified':'Not specified',
  'request.fileDomain':'Area',
  'request.filePromote':'What we’d like to advance',
  'request.fileFooter':'Preparation document only. The request was not sent to the association.',
  'motion.pause':'Pause motion','motion.play':'Enable motion','motion.reduced':'Reduced motion',
  'motion.pauseAria':'Pause motion on the site','motion.playAria':'Enable motion on the site','motion.reducedAria':'Reduced motion per device preference'
 },
 programs:{
  school:{label:'Education & schools',title:'Learn to ask, create and verify.',length:'10 sessions',output:'Final project',copy:'A track for students combining hands-on experience, fact-checking and a project connected to a community need.',
   row:{tag:'Education & schools',title:'Curiosity that becomes capability.',metaMain:'10 sessions',metaSub:'Thinking, creating and a community project'},
   intro:'A planned track of 10 sessions, 90 minutes each. We open curiosity, critical thinking and the ability to explain how we used AI. Age, tools and accounts are adapted to the school’s policy and the tools’ terms of use.',
   sessions:[['Meet the tools','Recognize familiar uses and compare capabilities and limits.'],['Ask better','Frame a goal, context and requirements, and refine the request.'],['Learn with AI','Prepare an explanation and practice questions and check against the material.'],['Check answers','Spot errors and compare claims with suitable sources.'],['Create and edit','Develop text and document the student’s contribution.'],['Use responsibly','Practice decisions about privacy, bias and publishing.'],['Choose a community need','Define a problem and target audience for the project.'],['Develop a result','Build a draft guide, activity or awareness material.'],['Improve with feedback','Check accuracy, usability and accessibility.'],['Present and explain','Share the result and the working process.']],
   closing:'Suggested adaptation: guided activity in primary; inquiry and teamwork in middle school; more complex projects in high school. Assessment considers the working process, verification and personal contribution.'},
  community:{label:'Community & employment',title:'Start from your own life.',length:'8 sessions',output:'A personal task',copy:'A gradual introduction to AI through writing, understanding information, planning and learning. We start from a task that matters to you.',
   row:{tag:'Community & employment',title:'Start from your own life.',metaMain:'8 sessions',metaSub:'Digital confidence and independent use'},
   intro:'A planned track of 8 sessions, two hours each. We learn at a pace that fits the group, practice everyday tasks and build confidence for independent use. Before joining we check language, digital experience and access to a device and the internet.',
   sessions:[['Get to know and try','Define a personal goal and carry out an opening task.'],['Requests and follow-ups','Build a personal template for framing a request.'],['Understand information','Simplify and summarize a sample text and check its meaning.'],['Write a message','Compose a message or letter using sample details.'],['Plan and learn','Build a task plan or learn a new topic.'],['Present abilities','Describe experience and skills and prepare for a professional conversation.'],['Keep and verify','Practice privacy and spotting information that needs checking.'],['Continue on your own','Complete a personal task and build a 30-day plan.']],
   closing:'A preliminary digital-skills stage can be planned as needed. Language and accessibility accommodations will be detailed for each cohort, subject to staff and resources.'},
  business:{label:'Small business',title:'Practical tools for your business.',length:'8 sessions',output:'A tested workflow',copy:'Pick a recurring task in the business, try an AI tool, and check what improved in working time or in the quality of the result.',
   row:{tag:'Small business',title:'New tools for your business.',metaMain:'8 sessions',metaSub:'Marketing, service and workflows'},
   intro:'A planned track of 8 sessions, two hours each. We focus on marketing, service and operations tasks, with practice between sessions. Each owner chooses one process to improve and documents the starting point.',
   sessions:[['Map the business','Choose a task and a time or quality measure.'],['Build repeat requests','Create a request library and working rules.'],['Sharpen the value offer','Define an audience, a need and a service description.'],['Plan content','Prepare a monthly content calendar and three drafts.'],['Improve the response','Build a bank of frequent questions and approved answers.'],['Organize the work','Prepare a procedure or template for a recurring task.'],['Check the improvement','Compare the process to the starting point under similar conditions.'],['Embed and continue','Build a working kit and a 30-day plan.']],
   closing:'Results are reviewed and approved by the owner before use. Personal or confidential information is not entered without a suitable arrangement. There is no commitment to a rise in sales or profit.'}
 },
 guides:{
  prompt:{label:'Beginner guide / Framing requests',title:'How do you ask for a useful answer?',
   card:{type:'Beginners / Requests',title:'How do you ask for<br>a useful answer?',hint:'Goal. Context. Structure.'},
   body:'<p>A clear request helps steer the result. Start with the goal, add context, define the audience and state the structure you want.</p><ol><li>What do you want to prepare or understand?</li><li>Who is the answer for?</li><li>What information may the tool use?</li><li>In what length, style and structure do you want the answer?</li></ol><h3>A practice example</h3><p>Write a short message to a bakery’s customers about a change in opening hours. Use only the details I attach and don’t invent hours or prices. Write in simple language, up to four lines.</p><h3>Before using the result</h3><p>Check the details, edit the wording and adapt it to whoever will read it. If information is missing, complete it yourself or ask the tool to state what’s missing.</p>'},
  verify:{label:'Beginner guide / Checking information',title:'An answer sounds right. How do you check?',
   card:{type:'Beginners / Checking',title:'An answer sounds right.<br>How do you check?',hint:'Source, date and context.'},
   body:'<p>Confident wording is no proof of accuracy. Check the claims that matter to the task before publishing or deciding.</p><ol><li>Mark names, numbers, dates and promises that can be checked.</li><li>Look for a source suited to the topic, preferably the official one.</li><li>Make sure the information is current and refers to the same place and context.</li><li>Correct or remove claims you couldn’t verify.</li></ol><h3>A practice example</h3><p>Received a list of community services? Check it against the organizations’ websites or by contacting them. A link the tool provided still needs to be opened and checked.</p><p>For complex professional matters, turn to the relevant professional.</p>'},
  privacy:{label:'Beginner guide / Privacy',title:'What do you keep out of the request?',
   card:{type:'Beginners / Privacy',title:'What do you keep<br>out of the request?',hint:'Share with judgment.'},
   body:'<p>Before uploading text or a file to the tool, check what information it contains and what the usage arrangements are in your organization.</p><ul><li>Names, ID numbers and addresses.</li><li>Personal information about students or customers.</li><li>Passwords and access details.</li><li>Internal documents and trade secrets.</li></ul><h3>A simple way to practice</h3><p>Replace the real information with sample data. When real information is needed, check permissions, the tool’s terms and the organization’s arrangements in advance.</p><p>Not sure whether sharing is allowed? Stop and check with the person in charge.</p>'}
 },
 infos:{
  transparency:{label:'Association details',title:'Transparency and public information',body:'<p>Association name: Smart Society (R.A.).<br>Name in English: SMART SOCIETY (R.A.).<br>Association number: 580848505.<br>Registration date per the certificate: 06/10/2026.</p><p>The association’s purpose is to open access to knowledge, information and tools in artificial intelligence, technology and the digital world, and in particular for groups with limited access to knowledge and training in these fields.</p><p>The programs shown on the site are in development. Activity reports, impact data and partner details will be published after collection, verification and approval.</p>'},
  privacy:{label:'Visitor information',title:'Privacy on the site',body:'<p>In the current version of the site, no requests are sent and no payments are received. The request-preparation tool creates a file on your device; the request details are not sent to the association through it.</p><p>The site has no behavior-analytics tool or advertising components added by us. The site uses external fonts from Google; loading them creates a request to the provider. The hosting service may process connection and operational data under its terms.</p><p>The motion preference is saved on your device to remember your choice on your next visit. Contact details and an updated policy will be added before registration and requests open.</p>'},
  accessibility:{label:'Using the site',title:'Accessibility and comfortable use',body:'<p>The site was designed with keyboard navigation, a visible focus, a heading order and labels for controls. You can enlarge the view through the browser, and the layout also suits narrow screens.</p><p>Reduced motion is applied according to the device preference. Essential content and actions do not depend on mouse hover.</p><p>This is a version under construction. A professional accessibility review and contact details for reporting a difficulty will be completed before opening to the public.</p>'}
 }
},

/* ===================================================================== */
/* HEBREW (source)                                                       */
/* ===================================================================== */
he:{
 dir:'rtl', code:'he', name:'עברית', short:'עב',
 strings:{
  'meta.title':'סמארט סוסיאטי — בינה מלאכותית לכולם',
  'meta.desc':'סמארט סוסיאטי מנגישה ידע וכלים בתחום הבינה המלאכותית לחינוך, לקהילה ולעסקים קטנים. הכירו את מסלולי הלמידה ואת האפשרויות לשותפות.',
  'og.title':'סמארט סוסיאטי — העתיד שייך לכולנו',
  'og.desc':'ידע וכלים בתחום הבינה המלאכותית לחינוך, לקהילה ולעסקים קטנים.',
  'skip':'דילוג לתוכן',
  'brand.sub':'סמארט סוסיאטי ע״ר',
  'nav.about':'הסיפור שלנו',
  'nav.programs':'התכניות',
  'nav.knowledge':'מרכז ידע',
  'nav.partners':'שותפים ותומכים',
  'nav.finder':'מוצאים מסלול',
  'menu.toggle':'תפריט',
  'lang.aria':'בחירת שפה',
  'hero.eyebrow':'בינה מלאכותית × הזדמנות חברתית',
  'hero.h1':'העתיד שייך<br><span>לכולנו<span class="period">.</span></span>',
  'hero.p':'בינה מלאכותית לכולם.<br>ידע וכלים ללמוד, לעבוד, ליצור ולהתקדם.<br>אנחנו כאן כדי לפתוח את הדלת — יחד עם הקהילה.',
  'hero.action':'הצעד הראשון שלכם',
  'hero.partners':'בונים שותפות',
  'hero.artAria':'איור מופשט של חיבורים בין אנשים ידע והזדמנויות',
  'hero.label1':'ללמוד',
  'hero.label2':'ליצור',
  'hero.label3':'להתקדם',
  'hero.core':'FOR EVERYONE',
  'hero.caption':'אנשים מחוברים. אפשרויות חדשות.',
  'hero.tagline':'פותחים גישה לידע. מפתחים יכולת.',
  'hero.discover':'ממשיכים לגלות',
  'hero.status':'תכניות בפיתוח',
  'ticker':['לומדים','יוצרים','מתקדמים','משתפים'],
  'ticker.latin':'AI FOR ALL',
  'about.labelNum':'01 / הסיפור שלנו',
  'about.labelEn':'ACCESS TO OPPORTUNITY',
  'about.h2':'הטכנולוגיה מתקדמת.<br><span class="muted">פותחים לכולם<br>דרך להשתתף.</span>',
  'about.lead':'הזדמנות מתחילה בהסבר ברור, במקום לתרגל ובאדם שאפשר לשאול.',
  'about.p1':'סמארט סוסיאטי היא עמותה רשומה המנגישה ידע, מידע וכלים בתחום הבינה המלאכותית, הטכנולוגיה והעולם הדיגיטלי — בדגש על אוכלוסיות בעלות נגישות מוגבלת לידע ולהכשרה.',
  'about.p2':'אנחנו מפתחים תכניות שמתחילות בצרכים של אנשים: משימת לימודים, חיפוש עבודה, פנייה ללקוח או רעיון לקהילה. לומדים, מתנסים ובודקים, כדי להמשיך עם יותר יכולת ועצמאות.',
  'about.link':'איך נלמד יחד',
  'programs.labelNum':'02 / התכניות שלנו',
  'programs.labelEn':'מהידע אל החיים עצמם',
  'programs.h2':'הדרך שלכם.<br><span class="accent">הכלים להתקדם.</span>',
  'programs.p':'שלושה מסלולי פתיחה.<br>כל אחד מתחיל בצורך ומסתיים בתוצר שימושי.',
  'programs.note':'המסלולים מתוכננים. מועדים, שפות, עלויות והתאמות יפורסמו לכל מחזור בנפרד.',
  'finder.eyebrow':'הדרך שלכם מתחילה כאן',
  'finder.h2':'מה תרצו<br><span class="accent">לעשות עם AI?</span>',
  'finder.p':'בחרו עבור מי הפעילות.<br>נציע נקודת התחלה שמתאימה לכם.',
  'finder.foot':'אפשר להתחיל גם בלי ניסיון ב־AI.',
  'finder.opt1':'לבית ספר',
  'finder.opt2':'לי או לקהילה',
  'finder.opt3':'לעסק שלי',
  'finder.tiny':'נקודת ההתחלה שלכם',
  'finder.resultMeta3':'מסלול מתוכנן',
  'finder.button':'מה נלמד במסלול?',
  'approach.labelNum':'03 / הדרך שלנו',
  'approach.labelEn':'HUMAN FIRST. AI NEXT.',
  'approach.h2':'לומדים לעשות.<br><span class="muted">לומדים לבדוק.</span>',
  'approach.p':'הכלים משתנים.<br>היכולת ללמוד נשארת איתכם.',
  'approach.s1t':'מקשיבים','approach.s1p':'מזהים צורך, ניסיון קודם וחסמים להשתתפות.',
  'approach.s2t':'מתנסים','approach.s2p':'מתרגלים משימה מהלימודים, מהעבודה או מהעסק.',
  'approach.s3t':'בודקים','approach.s3p':'מצליבים מידע, שומרים על פרטיות ומשפרים.',
  'approach.s4t':'ממשיכים','approach.s4p':'יוצאים עם תוצר ודרך להמשיך ללמוד באופן עצמאי.',
  'knowledge.labelNum':'04 / מתחילים להבין',
  'knowledge.labelEn':'ידע שאפשר להשתמש בו',
  'knowledge.h2':'כלים קטנים.<br><span class="accent">צעד משמעותי.</span>',
  'knowledge.p':'שלושה מדריכים ראשונים<br>לשימוש מושכל בבינה מלאכותית.',
  'partners.labelNum':'05 / שותפות עם השפעה',
  'partners.labelEn':'OPPORTUNITY, TOGETHER.',
  'partners.h2':'הידע שלכם.<br>הצעד הבא<br><span class="accent">של מישהו אחר.</span>',
  'partners.lead':'לחברות, לקרנות ולאנשי מקצוע שרוצים לפתוח הזדמנויות בקהילה.',
  'partners.p':'אפשר לסייע במימון הכשרה, בחונכות, בציוד ובהכשרת מדריכים מקומיים. לכל תכנית נגדיר קהל יעד, תקציב ותוצאות שנוכל למדוד ולדווח עליהן.',
  'partners.button':'בונים שותפות',
  'partners.o1t':'מאמצים קבוצה','partners.o1p':'מימון מחזור למידה בבית ספר או בקהילה.',
  'partners.o2t':'מביאים את הידע','partners.o2p':'חונכות מקצועית וליווי של עובדים מתנדבים.',
  'partners.o3t':'פותחים גישה','partners.o3p':'ציוד, התאמות שפה ותמיכה בהשתתפות.',
  'partners.note':'שותפויות ותוצאות פעילות יפורסמו לאחר אישור ואימות.',
  'faq.eyebrow':'לפני שמתחילים',
  'faq.h2':'טוב ששאלתם.',
  'faq.q1':'צריך ניסיון קודם בבינה מלאכותית?',
  'faq.a1':'מסלולי המבוא מיועדים גם למתחילים. לפני הצטרפות נבחן את רמת הפתיחה ואת דרישות המסלול. למי שזקוקים לכך ניתן לתכנן שלב מקדים של מיומנויות דיגיטליות.',
  'faq.q2':'הפעילות ללא תשלום?',
  'faq.a2':'עלות ההשתתפות ואפשרויות הסבסוד יפורסמו בנפרד לכל מחזור, לאחר הגדרת התקציב והשותפים.',
  'faq.q3':'אפשר להזמין פעילות לבית ספר או לקבוצה?',
  'faq.a3':'התכניות נבנות להתאמה לקהל המקומי. אפשר להכין בקשת פעילות ולפרט קהל יעד, מספר משתתפים, שפה וצרכים. פרטי יצירת הקשר יפורסמו עם פתיחת הפעילות.',
  'faq.q4':'האם מובטחת עבודה או עלייה במכירות?',
  'faq.a4':'ההכשרות נועדו לפיתוח מיומנויות ולשיפור תהליכים. תעסוקה ומכירות מושפעות מגורמים נוספים, ואין התחייבות לתוצאה כזו.',
  'faq.q5':'באילו שפות מתקיימת ההכשרה?',
  'faq.a5':'שפות ההדרכה וההתאמות הזמינות יפורטו בכל מחזור. התאמת פעילות בעברית ובערבית היא חלק מתכנון העמותה, בכפוף לצוות ולמשאבים.',
  'contact.eyebrow':'יש מקום לצעד הבא שלכם',
  'contact.h2':'בואו נפתח<br><span class="accent">אפשרויות.</span>',
  'contact.p':'ללמוד. להזמין פעילות. להביא ידע לקהילה.<br>הכינו בקשה שתעזור להגדיר את הצעד הבא.',
  'contact.button':'הכנת בקשת פעילות',
  'contact.note':'הפעילות נמצאת בהקמה. פרטי קשר ומועדי הרשמה יפורסמו בהמשך.',
  'footer.sub':'סמארט סוסיאטי ע״ר<br>מספר עמותה 580848505',
  'footer.top':'חזרה למעלה',
  'footer.tagline':'בינה מלאכותית לכולם.',
  'footer.transparency':'שקיפות',
  'footer.privacy':'פרטיות',
  'footer.accessibility':'נגישות',
  'footer.copy':'© 2026 סמארט סוסיאטי',
  'panel.close':'סגירת הפירוט',
  'dialog.whatLearn':'מה נלמד?',
  'dialog.whatKnow':'מה חשוב לדעת?',
  'dialog.programNote':'מועדים, מקום, שפות, ציוד, עלות ותנאי השתתפות יפורסמו לכל מחזור לאחר אישורו.',
  'dialog.requestBtn':'הכנת בקשת פעילות',
  'guide.note':'מדריך בסיסי · עודכן ב־15 באוקטובר 2026',
  'request.partnerLabel':'שותפות עם העמותה',
  'request.activityLabel':'תכנון פעילות',
  'request.partnerTitle':'מגדירים את השותפות.',
  'request.activityTitle':'מכינים את הצעד הבא.',
  'request.intro':'הגדירו את הצורך והפיקו בקשה מסודרת לשמירה אצלכם. פרטי יצירת קשר יפורסמו עם פתיחת הפעילות.',
  'request.org':'שם ארגון או קבוצה',
  'request.optional':'(רשות)',
  'request.type':'תחום הפעילות',
  'request.optSchool':'בתי ספר',
  'request.optCommunity':'קהילה ותעסוקה',
  'request.optBusiness':'עסקים קטנים',
  'request.optPartner':'שותפות ותמיכה',
  'request.goal':'מה תרצו לקדם?',
  'request.required':'(חובה)',
  'request.goalPh':'קהל היעד, המטרה, היקף הקבוצה וצרכים מיוחדים',
  'request.note':'אין צורך להזין מידע אישי או רגיש. הבקשה אינה נשלחת לעמותה ואינה הרשמה לפעילות.',
  'request.submit':'שמירת הבקשה כקובץ',
  'request.success':'הבקשה הוכנה להורדה. אפשר לשמור אותה ולהשתמש בה עם פתיחת הפניות.',
  'request.fileTitle':'סמארט סוסיאטי — בקשת פעילות או שותפות',
  'request.fileOrg':'ארגון או קבוצה',
  'request.fileNotSpecified':'לא צוין',
  'request.fileDomain':'תחום',
  'request.filePromote':'מה נרצה לקדם',
  'request.fileFooter':'מסמך הכנה בלבד. הבקשה לא נשלחה לעמותה.',
  'motion.pause':'השהיית תנועה','motion.play':'הפעלת תנועה','motion.reduced':'תנועה מופחתת',
  'motion.pauseAria':'השהיית תנועה באתר','motion.playAria':'הפעלת תנועה באתר','motion.reducedAria':'תנועה מופחתת לפי העדפת המכשיר'
 },
 programs:{
  school:{label:'חינוך ובתי ספר',title:'לומדים לשאול, ליצור ולבדוק.',length:'10 מפגשים',output:'פרויקט מסכם',copy:'מסלול לתלמידים המשלב התנסות, בדיקת מידע ופרויקט הקשור לצורך בקהילה.',
   row:{tag:'חינוך ובתי ספר',title:'סקרנות שהופכת ליכולת.',metaMain:'10 מפגשים',metaSub:'חשיבה, יצירה ופרויקט קהילתי'},
   intro:'מסלול מתוכנן של 10 מפגשים בני 90 דקות. נפתח סקרנות, חשיבה ביקורתית ויכולת להסביר כיצד השתמשנו בבינה מלאכותית. התאמת הגיל, הכלים והחשבונות תיעשה לפי מדיניות בית הספר ותנאי השימוש של הכלים.',
   sessions:[['מכירים את הכלים','מזהים שימושים מוכרים ומשווים יכולות ומגבלות.'],['שואלים טוב יותר','מנסחים מטרה, הקשר ודרישות ומשפרים בקשה.'],['לומדים עם AI','מכינים הסבר ושאלות תרגול ובודקים מול חומר הלימוד.'],['בודקים תשובות','מאתרים טעויות ומשווים טענות למקורות מתאימים.'],['יוצרים ועורכים','מפתחים טקסט ומתעדים את תרומת התלמיד.'],['משתמשים באחריות','מתרגלים החלטות על פרטיות, הטיות ופרסום.'],['בוחרים צורך בקהילה','מגדירים בעיה וקהל יעד לפרויקט.'],['מפתחים תוצר','בונים טיוטת מדריך, פעילות או חומר הסברה.'],['משפרים עם משוב','בודקים דיוק, שימושיות ונגישות.'],['מציגים ומסבירים','משתפים את התוצר ואת תהליך העבודה.']],
   closing:'התאמה מוצעת: ביסודי פעילות מונחית; בחטיבה חקר ועבודת צוות; בתיכון פרויקטים מורכבים יותר. הערכה תתייחס לדרך העבודה, לבדיקה ולתרומה האישית.'},
  community:{label:'קהילה ותעסוקה',title:'מתחילים מהחיים שלכם.',length:'8 מפגשים',output:'משימה אישית',copy:'היכרות הדרגתית עם AI דרך כתיבה, הבנת מידע, תכנון ולמידה. מתחילים ממשימה שחשובה לכם.',
   row:{tag:'קהילה ותעסוקה',title:'מתחילים מהחיים שלכם.',metaMain:'8 מפגשים',metaSub:'ביטחון דיגיטלי ושימוש עצמאי'},
   intro:'מסלול מתוכנן של 8 מפגשים בני שעתיים. נלמד בקצב המתאים לקבוצה, נתרגל משימות יום־יומיות ונבנה ביטחון לשימוש עצמאי. לפני ההצטרפות נבדוק שפה, ניסיון דיגיטלי וגישה למכשיר ולאינטרנט.',
   sessions:[['היכרות והתנסות','מגדירים מטרה אישית ומבצעים משימת פתיחה.'],['בקשות ושאלות המשך','בונים תבנית אישית לניסוח בקשה.'],['מבינים מידע','מפשטים ומסכמים טקסט לדוגמה ובודקים את המשמעות.'],['כותבים פנייה','מנסחים הודעה או מכתב באמצעות פרטים מדומים.'],['מתכננים ולומדים','בונים תכנית משימות או למידת נושא חדש.'],['מציגים יכולות','מתארים ניסיון ומיומנויות ומתכוננים לשיחה מקצועית.'],['שומרים ובודקים','מתרגלים פרטיות וזיהוי מידע שדורש בדיקה.'],['ממשיכים לבד','משלימים משימה אישית ובונים תכנית ל־30 יום.']],
   closing:'ניתן לתכנן שלב מקדים למיומנויות דיגיטליות לפי הצורך. התאמות שפה ונגישות יפורטו לכל מחזור בהתאם לצוות ולמשאבים.'},
  business:{label:'עסקים קטנים',title:'כלים מעשיים לעסק שלכם.',length:'8 מפגשים',output:'תהליך עבודה שנבדק',copy:'בוחרים משימה שחוזרת בעסק, מתנסים בכלי AI ובודקים מה השתפר בזמן העבודה או באיכות התוצאה.',
   row:{tag:'עסקים קטנים',title:'כלים חדשים לעסק שלכם.',metaMain:'8 מפגשים',metaSub:'שיווק, שירות ותהליכי עבודה'},
   intro:'מסלול מתוכנן של 8 מפגשים בני שעתיים. נתמקד במשימות שיווק, שירות ותפעול, עם תרגול בין המפגשים. כל בעל עסק יבחר תהליך אחד לשיפור ויתעד את נקודת ההתחלה.',
   sessions:[['ממפים את העסק','בוחרים משימה ומדד זמן או איכות.'],['בונים בקשות חוזרות','יוצרים ספריית בקשות וכללי עבודה.'],['מחדדים הצעת ערך','מגדירים קהל, צורך ותיאור שירות.'],['מתכננים תוכן','מכינים לוח תוכן חודשי ושלוש טיוטות.'],['משפרים את המענה','בונים מאגר שאלות נפוצות ותשובות מאושרות.'],['מארגנים עבודה','מכינים נוהל או תבנית למשימה חוזרת.'],['בודקים את השיפור','משווים את התהליך לנקודת ההתחלה בתנאים דומים.'],['מטמיעים וממשיכים','בונים ערכת עבודה ותכנית ל־30 יום.']],
   closing:'התוצרים נבדקים ומאושרים בידי בעל העסק לפני שימוש. לא מזינים מידע אישי או סודי ללא הסדר מתאים. אין התחייבות לעלייה במכירות או ברווח.'}
 },
 guides:{
  prompt:{label:'מדריך למתחילים / ניסוח בקשות',title:'איך מבקשים תשובה שימושית?',
   card:{type:'מתחילים / בקשות',title:'איך מבקשים<br>תשובה שימושית?',hint:'מטרה. הקשר. מבנה.'},
   body:'<p>בקשה ברורה עוזרת לכוון את התוצאה. מתחילים במטרה, מוסיפים הקשר, מגדירים קהל ומציינים את המבנה הרצוי.</p><ol><li>מה רוצים להכין או להבין?</li><li>למי התשובה מיועדת?</li><li>איזה מידע מותר לכלי להשתמש בו?</li><li>באיזה אורך, סגנון ומבנה נרצה לקבל תשובה?</li></ol><h3>דוגמה לתרגול</h3><p>נסח הודעה קצרה ללקוחות של מאפייה על שינוי שעות פתיחה. השתמש רק בפרטים שאצרף ואל תמציא שעות או מחירים. כתוב בעברית פשוטה, עד ארבע שורות.</p><h3>לפני השימוש בתוצאה</h3><p>בודקים פרטים, עורכים את הניסוח ומתאימים אותו למי שיקרא. אם חסר מידע, משלימים אותו בעצמנו או מבקשים מהכלי לציין מה חסר.</p>'},
  verify:{label:'מדריך למתחילים / בדיקת מידע',title:'תשובה נשמעת נכונה. איך בודקים?',
   card:{type:'מתחילים / בדיקה',title:'תשובה נשמעת נכונה.<br>איך בודקים?',hint:'מקור, תאריך והקשר.'},
   body:'<p>ניסוח בטוח אינו אישור לנכונות. בודקים את הטענות שחשובות למשימה לפני פרסום או קבלת החלטה.</p><ol><li>מסמנים שמות, מספרים, תאריכים והבטחות שאפשר לבדוק.</li><li>מחפשים מקור שמתאים לנושא, עדיף המקור הרשמי.</li><li>מוודאים שהמידע עדכני ומתייחס לאותו מקום והקשר.</li><li>מתקנים או מסירים טענות שלא הצלחנו לאמת.</li></ol><h3>דוגמה לתרגול</h3><p>קיבלתם רשימת שירותים בקהילה? בדקו מול אתרי הגופים או באמצעות פנייה אליהם. קישור שהכלי סיפק עדיין דורש פתיחה ובדיקה.</p><p>בנושאים מקצועיים מורכבים פונים לאיש המקצוע המתאים.</p>'},
  privacy:{label:'מדריך למתחילים / פרטיות',title:'מה שומרים מחוץ לבקשה?',
   card:{type:'מתחילים / פרטיות',title:'מה שומרים<br>מחוץ לבקשה?',hint:'משתפים מתוך שיקול דעת.'},
   body:'<p>לפני שמעלים טקסט או קובץ לכלי, בודקים איזה מידע הוא מכיל ומהם הסדרי השימוש בארגון.</p><ul><li>שמות, מספרי זהות וכתובות.</li><li>מידע אישי על תלמידים או לקוחות.</li><li>סיסמאות ופרטי גישה.</li><li>מסמכים פנימיים וסודות עסקיים.</li></ul><h3>דרך פשוטה לתרגל</h3><p>מחליפים את המידע האמיתי בנתונים מדומים. כשיש צורך במידע אמיתי, בודקים מראש את ההרשאות, תנאי הכלי והסדרי הארגון.</p><p>לא בטוחים אם מותר לשתף? עוצרים ובודקים עם האדם האחראי.</p>'}
 },
 infos:{
  transparency:{label:'פרטי עמותה',title:'שקיפות ומידע לציבור',body:'<p>שם העמותה: סמארט סוסיאטי ע״ר.<br>שם באנגלית: SMART SOCIETY (R.A.).<br>מספר עמותה: 580848505.<br>תאריך רישום לפי התעודה: 06/10/2026.</p><p>מטרת העמותה היא הנגשת ידע, מידע וכלים בתחום הבינה המלאכותית, הטכנולוגיה והעולם הדיגיטלי, ובפרט לאוכלוסיות בעלות נגישות מוגבלת לידע ולהכשרה בתחומים אלה.</p><p>התכניות המוצגות באתר נמצאות בפיתוח. דוחות פעילות, נתוני השפעה ופרטי שותפים יפורסמו לאחר איסוף, אימות ואישור.</p>'},
  privacy:{label:'מידע למבקרים',title:'פרטיות באתר',body:'<p>בגרסה הנוכחית של האתר אין שליחת פניות או קבלת תשלומים. כלי הכנת הבקשה יוצר קובץ במכשיר שלכם; פרטי הבקשה אינם נשלחים לעמותה באמצעותו.</p><p>אין באתר כלי ניתוח התנהגות או רכיבי פרסום שהוטמעו על ידינו. האתר משתמש בגופנים חיצוניים של Google; טעינתם יוצרת בקשה לספק. שירות האירוח עשוי לעבד נתוני חיבור ותפעול לפי תנאיו.</p><p>העדפת התנועה נשמרת במכשיר כדי לזכור את בחירתכם בביקור הבא. פרטי קשר ומדיניות מעודכנת יתווספו לפני פתיחת הרשמה ואיסוף פניות.</p>'},
  accessibility:{label:'שימוש באתר',title:'נגישות ושימוש נוח',body:'<p>האתר תוכנן עם ניווט מקלדת, מוקד נראה, סדר כותרות ותוויות לבקרות. ניתן להגדיל את התצוגה באמצעות הדפדפן, והפריסה מתאימה גם למסכים צרים.</p><p>תנועה מצומצמת מופעלת בהתאם להעדפת המכשיר. תוכן ופעולות חיוניות אינם תלויים בריחוף עכבר.</p><p>זוהי גרסה בהקמה. בדיקת נגישות מקצועית ופרטי איש קשר לדיווח על קושי יושלמו לפני פתיחה לציבור.</p>'}
 }
}
};

/* ---- Language engine -------------------------------------------------- */
const SS = (() => {
 const SUPPORTED = ['ar','en','he'];
 const STORE = 'ss-lang';
 function pick(){
  try{const s=localStorage.getItem(STORE);if(SUPPORTED.includes(s))return s;}catch{}
  const nav=(navigator.languages||[navigator.language||'']).map(x=>String(x).slice(0,2).toLowerCase());
  for(const n of nav)if(SUPPORTED.includes(n))return n;
  return 'ar';
 }
 let lang = pick();
 const listeners = [];
 const api = {
  get lang(){return lang;},
  supported:SUPPORTED,
  data(){return I18N[lang];},
  dict(l){return I18N[l||lang];},
  t(key){const d=I18N[lang].strings;return (key in d)?d[key]:key;},
  onChange(fn){listeners.push(fn);},
  setLang(l){
   if(!SUPPORTED.includes(l)||l===lang)return;
   lang=l;try{localStorage.setItem(STORE,l);}catch{}
   apply();listeners.forEach(fn=>{try{fn(lang);}catch{}});
  },
  apply(){apply();}
 };
 function apply(){
  const d=I18N[lang];const root=document.documentElement;
  root.setAttribute('lang',d.code);
  root.setAttribute('dir',d.dir);
  // title + meta
  document.title=d.strings['meta.title'];
  setMeta('name','description',d.strings['meta.desc']);
  setMeta('property','og:title',d.strings['og.title']);
  setMeta('property','og:description',d.strings['og.desc']);
  setMeta('property','og:locale',d.code+'_IL');
  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el=>{
   const v=d.strings[el.getAttribute('data-i18n')];
   if(v==null)return;
   if(v.indexOf('<')>-1)el.innerHTML=v;else el.textContent=v;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
   const v=d.strings[el.getAttribute('data-i18n-aria')];if(v!=null)el.setAttribute('aria-label',v);
  });
  // ticker (words + latin marker)
  buildTicker(d);
  // language switcher pressed-state
  document.querySelectorAll('[data-lang]').forEach(b=>{
   b.setAttribute('aria-pressed',String(b.getAttribute('data-lang')===lang));
  });
 }
 function setMeta(attr,name,val){
  let m=document.head.querySelector(`meta[${attr}="${name}"]`);
  if(!m){m=document.createElement('meta');m.setAttribute(attr,name);document.head.appendChild(m);}
  m.setAttribute('content',val);
 }
 function buildTicker(d){
  const host=document.querySelector('[data-ticker]');
  if(!host)return;
  // If motion.js has already wrapped the ticker, rebuild inside the moving track groups instead.
  const groups=host.querySelectorAll('.ticker-group');
  const build=target=>{
   target.innerHTML='';
   const words=d.strings['ticker'];const latin=d.strings['ticker.latin'];
   const seq=[...words,latin,...words.slice(0,2)];
   seq.forEach((w,i)=>{
    if(i>0){const b=document.createElement('b');b.textContent='×';target.appendChild(b);}
    const s=document.createElement('span');
    if(w===latin)s.setAttribute('dir','ltr');
    s.textContent=w;target.appendChild(s);
   });
  };
  if(groups.length)groups.forEach(build);else build(host);
 }
 return api;
})();

if(typeof window!=='undefined'){window.I18N=I18N;window.SS=SS;}
// Deferred scripts run after the DOM is parsed, so the first paint is localized.
SS.apply();

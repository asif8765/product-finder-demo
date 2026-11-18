'use strict';
const S={fopen:innerWidth>=760,lang:localStorage.getItem('pf_lang')||'en',P:[],N:[],M:null,f:null,shown:40,nsort:['score',-1],ntab:'table'};
const CAT_UR={"Beauty & Personal Care":"خوبصورتی اور ذاتی نگہداشت","Clothing":"کپڑے","Health & Fitness":"صحت اور فٹنس","Home & Kitchen Gadgets":"گھر اور کچن گیجٹس","Kids & Toys":"بچے اور کھلونے","Men's Accessories & Watches":"مردوں کی اشیاء اور گھڑیاں","Men's Fashion":"مردوں کا فیشن","Mobile Accessories":"موبائل ایکسیسریز","Winter Items":"سردیوں کی اشیاء","Women's Fashion & Accessories":"خواتین کا فیشن اور اشیاء"};
const T={en:{
appName:'Product Finder Demo',banner:'Demo only · estimated data · not a live product',
nHome:'Home',nFinder:'Finder',nNiches:'Niches',nCalc:'Margin',nSeasons:'Seasons',nTracker:'Tracker',
dataLabel:'Pakistani e-commerce market (marketplaces plus individual stores)',
heroT:'Find products that sell in Pakistan',heroS:'Real market listings, scored the way leading product research tools do it: demand, competition, search trend and COD margin after courier.',
snap:'Snapshot: {0}',fListings:'listings checked',fGood:'good products (Rs 500–3,000, steady demand, light to courier, 4+ stars)',fNiches:'niches with real demand',fShort:'niches pass search trend and margin checks',
topIdeas:'Top winning ideas',topSub:'Ranked by Opportunity Score (1–10). Tap any idea for the products behind it.',
allNiches:'See all {0} niches',openFinder:'Open Product Finder',
estUnits:'est. units/month',estRev:'est. revenue/month',margin:'est. earning/order',listings:'listings',sellers:'sellers',
lblOpp:'Opportunity',lblSat:'Saturated',tier10:'Hot pick',tier7:'Strong opportunity',tier5:'Worth a closer look',tier3:'Explore other ideas',
finderT:'Product Finder',finderS:'Filter every tracked listing like a product database. All numbers are estimated.',
fCat:'Category',any:'Any',fPmin:'Price from (Rs)',fPmax:'Price to (Rs)',fUnits:'Min est. monthly units',fRev:'Max competitor reviews',fRating:'Min rating',fMargin:'Min earning/order (Rs)',fSeason:'Season',fBeat:'Beatable competition only',beatPill:'Beatable',
sort:'Sort by',filters:'Filters',sUnits:'Est. monthly units',sRevn:'Est. monthly revenue',sMargin:'Earning per order',sScore:'Opportunity Score',sPriceA:'Price, low to high',sRevA:'Fewest reviews',
results:'{0} products match',more:'Show more',reset:'Reset filters',presets:'Quick picks',pWinter:'Winter now',pBeat:'Beatable + good margin',pUnder:'Under Rs 1,000',pWed:'Wedding season',
noRes:'No products match yet. Try widening a filter.',reviews:'reviews',rating:'rating',off:'{0}% off',
nichesT:'Niche view',nichesS:'Compare whole niches: demand against competition, how much the top 3 hold, and where search is heading.',
tTable:'Table',tChart:'Demand vs competition',
cNiche:'Niche',cScore:'Score',cUnits:'Est. units/mo',cDemand:'Demand',cComp:'Competition',cTop3:'Top 3 share',cTop10:'Avg reviews, top 10',cTrend:'Trend (4 wks)',cSat:'Flag',cListings:'Listings',
chartX:'Competition →',sweet:'Sweet spot',chartY:'Demand →',chartNote:'Top-left is the sweet spot: high demand, competition a newcomer can beat. Bubble size = est. monthly units.',
nicheDetail:'Niche details',steps:'Product hunting steps',st1:'Good products found',st2:'Real demand',st3:'Search or social interest',st4:'Healthy COD margin',
priceBand:'Typical price band',top3:'Top 3 hold',top10:'Top 10 average',satIdx:'Listings per 100 monthly sales',productsIn:'Products in this niche',
evid:'Evidence',why:'Why it sells',
evSrc:'Multiple sources agree: seen in {0} market sources',evSrc1:'Seen in {0} market source so far',evSocial:'Social buzz: {0} is trending',evSocialNo:'Social buzz: tracking begins with nightly updates',
evAds:'Ads running for {0} months (since {1})',evAdsNo:'No long-running ads yet, so there is room to be early',
evUp:'Search trend: up {0}% over the last 4 weeks',evDown:'Search trend: between peaks right now ({0}%)',evFlat:'Search trend: steady',evNoTrend:'Search trend: coming with keyword tracking',
evProof:'Proven product: {0} sold through wholesale suppliers',evBasisSold:'Estimate based on the listing\'s sold count',evBasisRev:'Estimate based on review count',evBasisRank:'Estimate based on store best-seller position',
evSeason:'In season: {0}',
wUnits:'High demand: about {0} units a month (estimated) across the market.',wBeat:'Top listings average only {0} reviews, so a new seller can still stand out.',wSat:'Popular and crowded: stand out with a bundle, better photos or a sharper price.',
wMargin:'Healthy margin after the Rs 200 courier.',wUp:'Search interest is rising.',wSocial:'People are talking about it on social media.',wAds:'Sellers have kept ads running for {0} months, a sign it keeps selling.',wWinter:'Winter is here, so demand is in season now.',
wSweet:'Priced in the Rs 500–999 sweet spot, where the most units sell.',wOff:'Listed at {0}% off, which helps buyers say yes.',wStars:'Buyers rate it {0} stars.',wDemand:'Steady demand across the market.',
pdT:'Product details',band:'Price band',price:'Price',costEst:'est. product cost',costSup:'from supplier prices',costAss:'assumed at 45% of price',
calcThis:'Open in margin calculator',watch:'Add to tracker',watching:'In tracker',importBtn:'Import from wholesaler (coming soon)',back:'Back',
calcT:'Margin calculator',calcS:'See what you earn on each COD order after product cost, courier and other costs.',
iPrice:'Selling price to customer (Rs)',iCost:'Product cost (Rs)',iCourier:'Courier (Rs)',iPack:'Packaging (Rs)',iFee:'Platform or payment fee (% of price)',iAds:'Ad cost per order (Rs)',iOrders:'Orders per month',
oEarn:'Earning per order',oMargin:'Margin on price',oBreak:'Break-even price',oMonthly:'Monthly earning at {0} orders',oROI:'Return on product cost',oTotal:'Total cost per order',
calcTip:'Tip: raise the price a little, or sell a bundle of 2, to spread the Rs 200 courier over more value.',
seasonsT:'Season calendar for Pakistan',seasonsS:'Plan ahead: what rises when. Islamic dates follow the moon, so they are approximate.',now:'Now',soon:'Coming up',ideasFor:'Ideas for this season',
trackerT:'Tracker',trackerS:'Your watchlist, saved on this device. With nightly updates it will show how sales and prices move.',emptyT:'Nothing saved yet. Tap ☆ on any product or niche to track it.',
saved:'Saved {0}',remove:'Remove',typeP:'Product',typeN:'Niche',
foot:'Product Finder Demo · sample built from a public market snapshot · all sales and earnings are estimates · not affiliated with any marketplace',
estimated:'estimated',score:'Opportunity Score',demoNote:'Demo: estimates come from one snapshot. Nightly tracking will turn them into true monthly sales.',
months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
se:{winter:'Winter',wedding:'Wedding season',ramadan:'Ramadan',eid:'Eid ul Fitr',adha:'Eid ul Adha',school:'Back to school',sale:'11.11 and 12.12 sales',summer:'Summer'}
},ur:{
appName:'پروڈکٹ فائنڈر ڈیمو',banner:'صرف ڈیمو · تخمینی ڈیٹا · یہ لائیو پروڈکٹ نہیں',
nHome:'ہوم',nFinder:'فائنڈر',nNiches:'نِچز',nCalc:'منافع',nSeasons:'سیزن',nTracker:'ٹریکر',
dataLabel:'پاکستانی ای کامرس مارکیٹ (مارکیٹ پلیسز اور انفرادی اسٹورز)',
heroT:'پاکستان میں بکنے والی پروڈکٹس تلاش کریں',heroS:'اصل مارکیٹ لسٹنگز، اسی طریقے سے اسکور کی گئیں جیسے بڑے پروڈکٹ ریسرچ ٹولز کرتے ہیں: ڈیمانڈ، مقابلہ، سرچ ٹرینڈ اور کوریئر کے بعد COD منافع۔',
snap:'اسنیپ شاٹ: {0}',fListings:'لسٹنگز چیک کی گئیں',fGood:'اچھی پروڈکٹس (500 سے 3,000 روپے، مستقل ڈیمانڈ، ہلکی، 4+ اسٹار)',fNiches:'نِچز جن میں اصل ڈیمانڈ ہے',fShort:'نِچز جو سرچ ٹرینڈ اور منافع کی جانچ میں کامیاب',
topIdeas:'بہترین بکنے والے آئیڈیاز',topSub:'آپرچونٹی اسکور (1 سے 10) کے مطابق۔ کسی بھی آئیڈیا پر ٹیپ کر کے اس کی پروڈکٹس دیکھیں۔',
allNiches:'تمام {0} نِچز دیکھیں',openFinder:'پروڈکٹ فائنڈر کھولیں',
estUnits:'تخمینی یونٹس/ماہ',estRev:'تخمینی آمدنی/ماہ',margin:'تخمینی کمائی/آرڈر',listings:'لسٹنگز',sellers:'سیلرز',
lblOpp:'موقع',lblSat:'زیادہ مقابلہ',tier10:'زبردست موقع',tier7:'اچھا موقع',tier5:'مزید دیکھیں',tier3:'دوسرے آئیڈیاز دیکھیں',
finderT:'پروڈکٹ فائنڈر',finderS:'ہر ٹریک کی گئی لسٹنگ کو فلٹر کریں۔ تمام نمبر تخمینی ہیں۔',
fCat:'کیٹیگری',any:'کوئی بھی',fPmin:'قیمت سے (روپے)',fPmax:'قیمت تک (روپے)',fUnits:'کم از کم تخمینی ماہانہ یونٹس',fRev:'مقابلے کے زیادہ سے زیادہ ریویوز',fRating:'کم از کم ریٹنگ',fMargin:'کم از کم کمائی/آرڈر (روپے)',fSeason:'سیزن',fBeat:'صرف وہ جہاں مقابلہ جیتا جا سکے',beatPill:'جیتنے کے قابل',
sort:'ترتیب',filters:'فلٹرز',sUnits:'تخمینی ماہانہ یونٹس',sRevn:'تخمینی ماہانہ آمدنی',sMargin:'فی آرڈر کمائی',sScore:'آپرچونٹی اسکور',sPriceA:'قیمت، کم سے زیادہ',sRevA:'کم ترین ریویوز',
results:'{0} پروڈکٹس ملیں',more:'مزید دکھائیں',reset:'فلٹر صاف کریں',presets:'فوری انتخاب',pWinter:'ابھی سردیاں',pBeat:'آسان مقابلہ + اچھا منافع',pUnder:'1,000 روپے سے کم',pWed:'شادیوں کا سیزن',
noRes:'ابھی کوئی پروڈکٹ نہیں ملی۔ فلٹر تھوڑا کھولیں۔',reviews:'ریویوز',rating:'ریٹنگ',off:'{0}٪ رعایت',
nichesT:'نِچ ویو',nichesS:'پوری نِچز کا موازنہ: ڈیمانڈ بمقابلہ مقابلہ، ٹاپ 3 کا حصہ، اور سرچ کا رخ۔',
tTable:'ٹیبل',tChart:'ڈیمانڈ بمقابلہ مقابلہ',
cNiche:'نِچ',cScore:'اسکور',cUnits:'تخمینی یونٹس/ماہ',cDemand:'ڈیمانڈ',cComp:'مقابلہ',cTop3:'ٹاپ 3 کا حصہ',cTop10:'ٹاپ 10 کے اوسط ریویوز',cTrend:'ٹرینڈ (4 ہفتے)',cSat:'نشان',cListings:'لسٹنگز',
chartX:'مقابلہ ←',sweet:'بہترین جگہ',chartY:'ڈیمانڈ ←',chartNote:'اوپر بائیں بہترین جگہ ہے: زیادہ ڈیمانڈ اور ایسا مقابلہ جو نیا سیلر جیت سکے۔ دائرے کا سائز = تخمینی ماہانہ یونٹس۔',
nicheDetail:'نِچ کی تفصیل',steps:'پروڈکٹ تلاش کے مراحل',st1:'اچھی پروڈکٹس ملیں',st2:'اصل ڈیمانڈ',st3:'سرچ یا سوشل دلچسپی',st4:'اچھا COD منافع',
priceBand:'عام قیمت کی حد',top3:'ٹاپ 3 کا حصہ',top10:'ٹاپ 10 اوسط',satIdx:'ہر 100 ماہانہ سیلز پر لسٹنگز',productsIn:'اس نِچ کی پروڈکٹس',
evid:'ثبوت',why:'یہ کیوں بکتی ہے',
evSrc:'کئی ذرائع متفق: {0} مارکیٹ ذرائع میں نظر آئی',evSrc1:'اب تک {0} مارکیٹ ذریعے میں نظر آئی',evSocial:'سوشل میڈیا پر چرچا: {0} ٹرینڈ میں',evSocialNo:'سوشل چرچا: رات کی اپڈیٹس کے ساتھ ٹریکنگ شروع ہوگی',
evAds:'اشتہارات {0} ماہ سے چل رہے ہیں ({1} سے)',evAdsNo:'ابھی لمبے اشتہارات نہیں، جلدی شروع کرنے کا موقع',
evUp:'سرچ ٹرینڈ: پچھلے 4 ہفتوں میں {0}٪ اضافہ',evDown:'سرچ ٹرینڈ: ابھی دو عروج کے درمیان ({0}٪)',evFlat:'سرچ ٹرینڈ: مستحکم',evNoTrend:'سرچ ٹرینڈ: کی ورڈ ٹریکنگ کے ساتھ آئے گا',
evProof:'آزمودہ پروڈکٹ: ہول سیل سپلائرز کے ذریعے {0} فروخت',evBasisSold:'تخمینہ لسٹنگ کی سولڈ تعداد پر مبنی',evBasisRev:'تخمینہ ریویوز کی تعداد پر مبنی',evBasisRank:'تخمینہ اسٹور کی بیسٹ سیلر پوزیشن پر مبنی',
evSeason:'سیزن میں: {0}',
wUnits:'زیادہ ڈیمانڈ: مارکیٹ میں تقریباً {0} یونٹس ماہانہ (تخمینی)۔',wBeat:'ٹاپ لسٹنگز کے اوسطاً صرف {0} ریویوز ہیں، نیا سیلر بھی نمایاں ہو سکتا ہے۔',wSat:'مقبول اور مصروف: بنڈل، بہتر تصاویر یا بہتر قیمت سے نمایاں ہوں۔',
wMargin:'200 روپے کوریئر کے بعد بھی اچھا منافع۔',wUp:'سرچ میں دلچسپی بڑھ رہی ہے۔',wSocial:'سوشل میڈیا پر لوگ اس کی بات کر رہے ہیں۔',wAds:'سیلرز {0} ماہ سے اشتہار چلا رہے ہیں، یعنی یہ بکتی رہتی ہے۔',wWinter:'سردیاں آ گئی ہیں، ڈیمانڈ ابھی سیزن میں ہے۔',
wSweet:'500 سے 999 روپے کی بہترین قیمت میں، جہاں سب سے زیادہ یونٹس بکتے ہیں۔',wOff:'{0}٪ رعایت پر، جس سے خریدار آسانی سے ہاں کہتے ہیں۔',wStars:'خریداروں کی ریٹنگ {0} اسٹار۔',wDemand:'مارکیٹ میں مستقل ڈیمانڈ۔',
pdT:'پروڈکٹ کی تفصیل',band:'قیمت کی حد',price:'قیمت',costEst:'تخمینی لاگت',costSup:'سپلائر قیمتوں سے',costAss:'قیمت کا 45٪ فرض',
calcThis:'منافع کیلکولیٹر میں کھولیں',watch:'ٹریکر میں شامل کریں',watching:'ٹریکر میں ہے',importBtn:'ہول سیلر سے امپورٹ (جلد آ رہا ہے)',back:'واپس',
calcT:'منافع کیلکولیٹر',calcS:'دیکھیں ہر COD آرڈر پر پروڈکٹ لاگت، کوریئر اور دیگر خرچوں کے بعد آپ کیا کماتے ہیں۔',
iPrice:'گاہک کے لیے قیمت (روپے)',iCost:'پروڈکٹ لاگت (روپے)',iCourier:'کوریئر (روپے)',iPack:'پیکنگ (روپے)',iFee:'پلیٹ فارم یا ادائیگی فیس (قیمت کا ٪)',iAds:'فی آرڈر اشتہار خرچ (روپے)',iOrders:'ماہانہ آرڈرز',
oEarn:'فی آرڈر کمائی',oMargin:'قیمت پر منافع',oBreak:'برابر قیمت (بریک ایون)',oMonthly:'{0} آرڈرز پر ماہانہ کمائی',oROI:'پروڈکٹ لاگت پر واپسی',oTotal:'فی آرڈر کل خرچ',
calcTip:'مشورہ: قیمت تھوڑی بڑھائیں یا 2 کا بنڈل بیچیں تاکہ 200 روپے کوریئر زیادہ قیمت پر تقسیم ہو۔',
seasonsT:'پاکستان کا سیزن کیلنڈر',seasonsS:'پہلے سے تیاری کریں: کب کیا بکتا ہے۔ اسلامی تاریخیں چاند پر منحصر ہیں، اس لیے اندازاً ہیں۔',now:'ابھی',soon:'آنے والا',ideasFor:'اس سیزن کے آئیڈیاز',
trackerT:'ٹریکر',trackerS:'آپ کی واچ لسٹ، اسی ڈیوائس پر محفوظ۔ رات کی اپڈیٹس کے ساتھ سیلز اور قیمتوں کی تبدیلی دکھائے گا۔',emptyT:'ابھی کچھ محفوظ نہیں۔ کسی بھی پروڈکٹ یا نِچ پر ☆ دبائیں۔',
saved:'{0} کو محفوظ کیا',remove:'ہٹائیں',typeP:'پروڈکٹ',typeN:'نِچ',
foot:'پروڈکٹ فائنڈر ڈیمو · عوامی مارکیٹ اسنیپ شاٹ سے بنایا گیا نمونہ · تمام سیلز اور کمائی تخمینی ہیں · کسی مارکیٹ پلیس سے وابستہ نہیں',
estimated:'تخمینی',score:'آپرچونٹی اسکور',demoNote:'ڈیمو: تخمینے ایک اسنیپ شاٹ سے ہیں۔ رات کی ٹریکنگ انہیں اصل ماہانہ سیلز میں بدلے گی۔',
months:['جنوری','فروری','مارچ','اپریل','مئی','جون','جولائی','اگست','ستمبر','اکتوبر','نومبر','دسمبر'],
se:{winter:'سردیاں',wedding:'شادیوں کا سیزن',ramadan:'رمضان',eid:'عید الفطر',adha:'عید الاضحیٰ',school:'اسکول کی واپسی',sale:'11.11 اور 12.12 سیلز',summer:'گرمیاں'}
}};
const t=(k,...a)=>{let s=(T[S.lang][k]??T.en[k]??k);if(typeof s==='string')a.forEach((v,i)=>s=s.replace('{'+i+'}',v));return s};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>n==null||isNaN(n)?'–':Math.round(n).toLocaleString('en-US');
const rs=n=>(S.lang==='ur'?'روپے ':'Rs ')+fmt(n);
const cat=c=>S.lang==='ur'?(CAT_UR[c]||c):c;
const nname=n=>S.lang==='ur'?n.ur:n.idea;
const tier=s=>s>=8?t('tier10'):s>=6?t('tier7'):s>=4?t('tier5'):t('tier3');
const badge=s=>`<span class="badge s${s}" title="${esc(t('score'))}">${s}</span>`;
const label=n=>n.short?(n.sat?`<span class="pill sat">${t('lblSat')}</span>`:`<span class="pill opp">${t('lblOpp')}</span>`):'';
const est=()=>`<span class="pill est">${t('estimated')}</span>`;
const monthName=s=>{if(!s)return'';const[y,m]=s.split('-');return t('months')[+m-1]+' '+y};
// ---------- storage
const W={get(){try{return JSON.parse(localStorage.getItem('pf_watch')||'[]')}catch(e){return[]}},set(v){localStorage.setItem('pf_watch',JSON.stringify(v))},
 has(ty,id){return this.get().some(x=>x.ty===ty&&x.id===id)},
 toggle(ty,id){let v=this.get();if(this.has(ty,id))v=v.filter(x=>!(x.ty===ty&&x.id===id));else{const o={ty,id,at:new Date().toISOString().slice(0,10)};if(ty==='p'){o.price=S.P[id].p;o.u=S.P[id].u}else{o.score=S.N[id].score}v.unshift(o)}this.set(v)}};
const star=(ty,id)=>`<button class="star ${W.has(ty,id)?'on':''}" data-star="${ty}:${id}" aria-label="${esc(t('watch'))}">${W.has(ty,id)?'★':'☆'}</button>`;
// ---------- evidence & why
function evidence(n,p){const E=[];if(!n)return E;
 E.push(['🧭',n.src>=2?t('evSrc',n.src):t('evSrc1',Math.max(1,n.src))]);
 E.push(['💬',n.tag?t('evSocial',esc(n.tag)):t('evSocialNo')]);
 E.push(['📣',n.adm?t('evAds',n.adm,monthName(n.ads)):t('evAdsNo')]);
 E.push(['🔎',n.tv==null?t('evNoTrend'):n.tv>0?t('evUp','+'+n.tv):n.tv<0?t('evDown',n.tv):t('evFlat')]);
 if(n.gsold>0)E.push(['📦',t('evProof',fmt(n.gsold))]);
 if(n.tags.length)E.push(['📅',t('evSeason',n.tags.map(k=>t('se')[k]).join(', '))]);
 if(p)E.push(['📊',p.conf==='sold'?t('evBasisSold'):p.conf==='reviews'?t('evBasisRev'):t('evBasisRank')]);
 return E}
function why(n,p){const W_=[];if(n){
 if(n.units>=1000)W_.push(t('wUnits',fmt(n.units)));
 if(n.beat&&n.top10!=null)W_.push(t('wBeat',fmt(n.top10)));
 if(n.mpct>=0.33)W_.push(t('wMargin'));
 if(n.tv>0)W_.push(t('wUp'));
 if(n.tag)W_.push(t('wSocial'));
 if(n.adm>=6)W_.push(t('wAds',n.adm));
 if(n.tags.includes('winter'))W_.push(t('wWinter'));
 if(n.sat)W_.push(t('wSat'));}
 if(p){if(p.p>=500&&p.p<=999)W_.push(t('wSweet'));if(p.op&&p.op>p.p){const d=Math.round(100*(1-p.p/p.op));if(d>=20)W_.push(t('wOff',d))}if(p.rt>=4.3)W_.push(t('wStars',p.rt.toFixed(1)))}
 if(!W_.length)W_.push(t('wDemand'));return W_}
// ---------- views
function nav(){const items=[['home','🏠','nHome'],['finder','🔍','nFinder'],['niches','🧩','nNiches'],['calc','🧮','nCalc'],['seasons','📅','nSeasons'],['tracker','⭐','nTracker']];
 const r=(location.hash.split('/')[1]||'home').split('?')[0];const cur={niche:'niches',p:'finder'}[r]||r;
 document.getElementById('topnav').innerHTML=items.map(([k,i,l])=>`<a href="#/${k}" class="${cur===k?'on':''}">${t(l)}</a>`).join('');
 document.getElementById('bottomnav').innerHTML=items.map(([k,i,l])=>`<a href="#/${k}" class="${cur===k?'on':''}"><span class="i">${i}</span>${t(l)}</a>`).join('')}
function ideaCard(n){return `<div class="card idea" data-go="#/niche/${n.i}">${badge(n.score)}<div class="body">
 <h3>${esc(nname(n))}</h3><div>${label(n)}<span class="pill">${tier(n.score)}</span><span class="pill">${esc(cat(n.cat))}</span></div>
 <div class="kv"><span><b>${fmt(n.units)}</b> ${t('estUnits')}</span>${n.margin>0?`<span><b>${rs(n.margin)}</b> ${t('margin')}</span>`:''}<span><b>${fmt(n.sellers)}</b> ${t('sellers')}</span></div>
 <div class="small muted" style="margin-top:4px">${esc(why(n).slice(0,2).join(' '))}</div></div>${star('n',n.i)}</div>`}
function vHome(){const M=S.M,f=M.funnel,mx=f[0];const short=S.N.filter(n=>n.short);
 const st=[[f[0],'fListings'],[f[1],'fGood'],[f[2],'fNiches'],[f[3],'fShort']];
 return `<section class="card hero"><h1>${t('heroT')}</h1><p class="muted">${t('heroS')}</p>
 <div class="funnel">${st.map(([v,l],i)=>`<div class="fstep"><div class="fbar" style="width:${[68,52,38,30][i]}%">${fmt(v)}</div><div class="lab">${t(l)}</div></div>`).join('')}</div>
 <p class="small muted" style="margin:12px 0 0">${esc(t('dataLabel'))} · ${t('snap',S.lang==='ur'?'18 نومبر 2026':M.date)}</p></section>
 <div class="row" style="margin-top:12px"><a class="btn" href="#/finder">🔍 ${t('openFinder')}</a><a class="btn ghost" href="#/niches">${t('allNiches',S.N.length)}</a></div>
 <h2>${t('topIdeas')}</h2><p class="muted small" style="margin-top:-6px">${t('topSub')} ${est()}</p>
 <div class="grid g2">${short.map(ideaCard).join('')}</div>`}
const DEF={cat:'',pmin:'',pmax:'',units:'',rev:'',rating:'',margin:'',season:'',beat:false,sort:'u'};
function getF(){if(!S.f){try{S.f=Object.assign({},DEF,JSON.parse(sessionStorage.getItem('pf_f')||'{}'))}catch(e){S.f={...DEF}}}return S.f}
function filterP(){const f=getF(),num=v=>v===''||v==null?null:+v;const pmin=num(f.pmin),pmax=num(f.pmax),u=num(f.units),rv=num(f.rev),rt=num(f.rating),mg=num(f.margin);
 let r=S.P.filter(p=>(!f.cat||p.c===f.cat)&&(pmin==null||p.p>=pmin)&&(pmax==null||p.p<=pmax)&&(u==null||p.u>=u)&&(rv==null||p.rev<=rv)&&(rt==null||(p.rt||0)>=rt)&&(mg==null||p.m>=mg)&&(!f.season||p.tg.includes(f.season))&&(!f.beat||p.beat));
 const sc=p=>p.n>=0?S.N[p.n].score:0;
 const K={u:p=>-p.u,r:p=>-p.u*p.p,m:p=>-p.m,s:p=>-(sc(p)*1e6+p.u),pa:p=>p.p,ra:p=>p.rev*1e3-p.u}[f.sort]||(p=>-p.u);
 return r.sort((a,b)=>K(a)-K(b))}
function prodCard(p){const n=p.n>=0?S.N[p.n]:null;return `<div class="card prod" data-go="#/p/${p.id}">${n?badge(n.score):'<span class="badge s1">–</span>'}<div class="body" style="flex:1;min-width:0">
 <div class="t">${esc(p.t)}</div>${n?`<div class="small muted">${esc(nname(n))}</div>`:''}
 <div>${n?label(n):''}${p.beat?`<span class="pill opp">✓ ${t('beatPill')}</span>`:''}${p.tg.slice(0,2).map(k=>`<span class="pill season">${t('se')[k]}</span>`).join('')}</div>
 <div class="kv"><span><b>${rs(p.p)}</b>${p.op?` <s class="small">${fmt(p.op)}</s>`:''}</span><span><b>${fmt(p.u)}</b> ${t('estUnits')}</span><span><b>${rs(p.u*p.p)}</b> ${t('estRev')}</span><span><b>${rs(p.m)}</b> ${t('margin')}</span><span><b>${fmt(p.rev)}</b> ${t('reviews')}</span>${p.rt?`<span>★ <b>${p.rt.toFixed(1)}</b></span>`:''}</div></div>${star('p',p.id)}</div>`}
function nAct(){const f=getF();return Object.keys(DEF).filter(k=>k!=='sort'&&f[k]!==DEF[k]&&f[k]!=='').length}
function vFinder(){const f=getF();const cats=[...new Set(S.N.map(n=>n.cat))].sort();const R=filterP();
 const opt=(v,l,cur)=>`<option value="${esc(v)}" ${String(cur)===String(v)?'selected':''}>${esc(l)}</option>`;
 const inp=(k,l,ph)=>`<label>${t(l)}<input type="number" inputmode="numeric" data-f="${k}" value="${esc(f[k])}" placeholder="${ph||''}"></label>`;
 return `<h1>${t('finderT')}</h1><p class="muted">${t('finderS')}</p>
 <div class="row small" style="margin-bottom:10px"><span class="muted">${t('presets')}:</span>
 <button class="btn ghost" data-preset="winter">❄️ ${t('pWinter')}</button><button class="btn ghost" data-preset="beat">✓ ${t('pBeat')}</button><button class="btn ghost" data-preset="under">${t('pUnder')}</button><button class="btn ghost" data-preset="wedding">💍 ${t('pWed')}</button></div>
 <div class="finder"><details class="card fbox" ${S.fopen?'open':''}><summary>⚙️ ${t('filters')}${nAct()?` · ${nAct()}`:''}</summary><div class="filters" style="margin-top:10px">
 <label>${t('fCat')}<select data-f="cat">${opt('',t('any'),f.cat)}${cats.map(c=>opt(c,cat(c),f.cat)).join('')}</select></label>
 <label>${t('fSeason')}<select data-f="season">${opt('',t('any'),f.season)}${Object.keys(T.en.se).map(k=>opt(k,t('se')[k],f.season)).join('')}</select></label>
 ${inp('pmin','fPmin','500')}${inp('pmax','fPmax','3000')}${inp('units','fUnits','5')}${inp('rev','fRev','150')}${inp('rating','fRating','4')}${inp('margin','fMargin','250')}
 <label class="chk"><input type="checkbox" data-f="beat" ${f.beat?'checked':''}> ${t('fBeat')}</label>
 <label style="grid-column:1/-1">${t('sort')}<select data-f="sort">${[['u','sUnits'],['r','sRevn'],['m','sMargin'],['s','sScore'],['pa','sPriceA'],['ra','sRevA']].map(([v,l])=>opt(v,t(l),f.sort)).join('')}</select></label>
 <button class="btn ghost" data-reset style="grid-column:1/-1;justify-content:center">${t('reset')}</button></div></details>
 <div><div class="row" style="margin-bottom:8px"><b id="rc">${t('results',fmt(R.length))}</b>${est()}</div>
 <div class="plist">${R.length?R.slice(0,S.shown).map(prodCard).join(''):`<div class="card empty muted">${t('noRes')}</div>`}</div>
 ${R.length>S.shown?`<div class="row" style="justify-content:center;margin-top:12px"><button class="btn ghost" data-more>${t('more')}</button></div>`:''}</div></div>`}
function vNiches(){const [k,d]=S.nsort;const cols=[['score','cScore'],['idea','cNiche'],['units','cUnits'],['D','cDemand'],['C','cComp'],['top3','cTop3'],['top10','cTop10'],['tv','cTrend'],['sat','cSat']];
 const L=[...S.N].sort((a,b)=>{let x=a[k],y=b[k];if(k==='idea'){x=nname(a);y=nname(b);return d*x.localeCompare(y)}x=x??-1e9;y=y??-1e9;return d*((x>y)-(x<y))});
 const bar=(v,c)=>`<div class="bar ${c||''}"><i style="width:${Math.round((v||0)*100)}%"></i></div>`;
 const table=`<div class="tablewrap"><table><thead><tr>${cols.map(([c,l])=>`<th data-ns="${c}">${t(l)}${k===c?(d>0?' ▲':' ▼'):''}</th>`).join('')}</tr></thead><tbody>
 ${L.map(n=>`<tr data-go="#/niche/${n.i}" style="cursor:pointer"><td>${badge(n.score)}</td><td><b>${esc(nname(n))}</b><div class="small muted">${esc(cat(n.cat))}</div></td><td>${fmt(n.units)}</td><td>${bar(n.D)}</td><td>${bar(n.C,'c')}</td>
 <td>${n.top3!=null?Math.round(n.top3*100)+'%':'–'}</td><td>${n.top10!=null?fmt(n.top10):'–'}</td><td>${n.tv==null?'–':(n.tv>0?'↑ +':n.tv<0?'↓ ':'→ ')+n.tv+'%'}</td><td>${label(n)}</td></tr>`).join('')}</tbody></table></div>`;
 const w=640,h=420,pd=44;const Cs=S.N.map(n=>n.C),Ds=S.N.map(n=>n.D),c0=Math.min(...Cs)-.03,c1=Math.max(...Cs)+.03,d0=Math.min(...Ds)-.03,d1=Math.max(...Ds)+.03;const med=a=>[...a].sort((x,y)=>x-y)[a.length>>1];const sx=c=>pd+(c-c0)/(c1-c0)*(w-2*pd),sy=v=>h-pd-(v-d0)/(d1-d0)*(h-2*pd);const mu=Math.max(...S.N.map(n=>n.units))||1;
 const chart=`<svg class="scatter" viewBox="0 0 ${w} ${h}" role="img"><rect x="${pd}" y="${pd}" width="${sx(med(Cs))-pd}" height="${sy(med(Ds))-pd}" fill="#f0fdf4"/><text x="${pd+8}" y="${pd+18}" font-size="12" fill="#166534">★ ${esc(t('sweet'))}</text>
 <line x1="${pd}" y1="${h-pd}" x2="${w-pd}" y2="${h-pd}" stroke="#94a3b8"/><line x1="${pd}" y1="${pd}" x2="${pd}" y2="${h-pd}" stroke="#94a3b8"/>
 <text x="${w/2}" y="${h-12}" text-anchor="middle" font-size="13" fill="#5b6875">${t('chartX')}</text><text x="14" y="${h/2}" text-anchor="middle" font-size="13" fill="#5b6875" transform="rotate(-90 14 ${h/2})">${t('chartY')}</text>
 ${S.N.map(n=>`<a href="#/niche/${n.i}"><circle cx="${sx(n.C)}" cy="${sy(n.D)}" r="${4+14*Math.sqrt(n.units/mu)}" fill="${n.sat?'#7c3aed':n.short?'#16a34a':'#0ea5e9'}" fill-opacity=".55" stroke="#fff"><title>${esc(nname(n))} · ${n.score}/10 · ${fmt(n.units)}</title></circle></a>`).join('')}
 ${S.N.filter(n=>n.short).map(n=>`<text x="${sx(n.C)+6}" y="${sy(n.D)-6}" font-size="10" fill="#14202b">${esc(nname(n).split(/[ (]/)[0])}</text>`).join('')}</svg>
 <p class="small muted">${t('chartNote')} <span class="pill opp">● ${t('lblOpp')}</span><span class="pill sat">● ${t('lblSat')}</span></p>`;
 return `<h1>${t('nichesT')}</h1><p class="muted">${t('nichesS')} ${est()}</p><div class="tabs" style="margin-bottom:10px"><button data-ntab="table" class="${S.ntab==='table'?'on':''}">${t('tTable')}</button><button data-ntab="chart" class="${S.ntab==='chart'?'on':''}">${t('tChart')}</button></div>${S.ntab==='table'?table:chart}`}
function metric(v,l){return `<div class="metric"><b>${v}</b><span>${l}</span></div>`}
function vNiche(i){const n=S.N[i];if(!n)return vHome();const P=S.P.filter(p=>p.n===i).slice(0,30);
 const stp=[['s1','st1'],['s2','st2'],['s3','st3'],['s4','st4']];
 return `<a href="#/niches" class="small">← ${t('back')}</a><div class="row" style="margin-top:8px">${badge(n.score)}<h1 style="flex:1">${esc(nname(n))}</h1>${star('n',i)}</div>
 <div>${label(n)}<span class="pill">${tier(n.score)}</span><span class="pill">${esc(cat(n.cat))}</span>${n.tags.map(k=>`<span class="pill season">${t('se')[k]}</span>`).join('')}${est()}</div>
 <div class="grid g4" style="margin-top:12px">${metric(fmt(n.units),t('estUnits'))}${metric(rs(n.rev),t('estRev'))}${metric(n.margin>0?rs(n.margin):'–',t('margin'))}${metric(n.p25?rs(n.p25)+'–'+fmt(n.p75):'–',t('priceBand'))}
 ${metric(fmt(n.listings),t('listings'))}${metric(fmt(n.sellers),t('sellers'))}${metric(n.top3!=null?Math.round(n.top3*100)+'%':'–',t('top3'))}${metric(n.top10!=null?fmt(n.top10)+' '+t('reviews'):'–',t('top10'))}</div>
 <div class="grid g2" style="margin-top:12px"><div class="card"><h3>${t('steps')}</h3><ul class="ev">${stp.map(([k,l])=>`<li><span class="ic">${n[k]?'✅':'⏳'}</span>${t(l)}</li>`).join('')}</ul></div>
 <div class="card"><h3>${t('evid')}</h3><ul class="ev">${evidence(n).map(([i_,s])=>`<li><span class="ic">${i_}</span><span>${s}</span></li>`).join('')}</ul></div></div>
 <div class="note" style="margin-top:12px"><h3>${t('why')}</h3>${why(n).map(s=>`<div>• ${esc(s)}</div>`).join('')}</div>
 <h2>${t('productsIn')}</h2><div class="plist">${P.map(prodCard).join('')||`<div class="card muted">–</div>`}</div>`}
function vProduct(id){const p=S.P[id];if(!p)return vFinder();const n=p.n>=0?S.N[p.n]:null;
 return `<a href="javascript:history.back()" class="small">← ${t('back')}</a><div class="row" style="margin-top:8px">${n?badge(n.score):''}<h1 style="flex:1">${esc(p.t)}</h1>${star('p',p.id)}</div>
 ${n?`<div><a href="#/niche/${n.i}">${esc(nname(n))}</a> · ${label(n)}<span class="pill">${tier(n.score)}</span>${est()}</div>`:''}
 <div class="grid g4" style="margin-top:12px">${metric(rs(p.p)+(p.op?` <s class="small muted">${fmt(p.op)}</s>`:''),t('price'))}${metric(fmt(p.u),t('estUnits'))}${metric(rs(p.u*p.p),t('estRev'))}${metric(rs(p.m),t('margin'))}
 ${metric(n&&n.p25?rs(n.p25)+'–'+fmt(n.p75):'–',t('band'))}${metric(fmt(p.rev),t('reviews'))}${metric(p.rt?'★ '+p.rt.toFixed(1):'–',t('rating'))}${metric(rs(p.mc),t('costEst')+' · '+(p.cb==='supplier'?t('costSup'):t('costAss')))}</div>
 <div class="grid g2" style="margin-top:12px"><div class="card"><h3>${t('evid')}</h3><ul class="ev">${evidence(n,p).map(([i_,s])=>`<li><span class="ic">${i_}</span><span>${s}</span></li>`).join('')}</ul></div>
 <div class="note"><h3>${t('why')}</h3>${why(n,p).map(s=>`<div>• ${esc(s)}</div>`).join('')}</div></div>
 <div class="row" style="margin-top:14px"><a class="btn" href="#/calc?p=${p.p}&c=${p.mc}">🧮 ${t('calcThis')}</a><button class="btn" disabled title="coming soon">⬇️ ${t('importBtn')}</button></div>
 <p class="small muted">${t('demoNote')}</p>`}
function vCalc(){const q=new URLSearchParams(location.hash.split('?')[1]||'');const v={p:q.get('p')||1500,c:q.get('c')||1000,co:200,pk:30,fee:5,ad:0,n:60};
 const f=(k,l)=>`<label>${t(l)}<input type="number" inputmode="decimal" data-c="${k}" value="${v[k]}"></label>`;
 return `<h1>${t('calcT')}</h1><p class="muted">${t('calcS')}</p><div class="grid g2"><div class="card filters" style="grid-template-columns:1fr 1fr">
 ${f('p','iPrice')}${f('c','iCost')}${f('co','iCourier')}${f('pk','iPack')}${f('fee','iFee')}${f('ad','iAds')}${f('n','iOrders')}</div>
 <div><div class="grid g2" id="calcOut"></div><p class="note small" style="margin-top:12px">💡 ${t('calcTip')}</p>
 <div class="row" style="margin-top:10px"><button class="btn" disabled>⬇️ ${t('importBtn')}</button></div></div></div>`}
function calc(){const g=k=>+(document.querySelector(`[data-c="${k}"]`)?.value||0);const p=g('p'),c=g('c'),co=g('co'),pk=g('pk'),fee=g('fee')/100,ad=g('ad'),n=g('n');
 const tot=c+co+pk+ad+p*fee,pr=p-tot,mp=p?pr/p*100:0,be=fee<1?(c+co+pk+ad)/(1-fee):0;
 const o=document.getElementById('calcOut');if(!o)return;
 o.innerHTML=[[rs(pr),t('oEarn'),pr>0],[mp.toFixed(1)+'%',t('oMargin')],[rs(be),t('oBreak')],[rs(pr*n),t('oMonthly',fmt(n))],[(c?pr/c*100:0).toFixed(0)+'%',t('oROI')],[rs(tot),t('oTotal')]]
  .map(([a,b,ok])=>`<div class="metric out" ${ok?'style="border-color:#86efac;background:#f0fdf4"':''}><b>${a}</b><span>${b}</span></div>`).join('')}
const SEASONS=[{k:'winter',when:{en:'Nov – Feb',ur:'نومبر – فروری'},now:1,tip:{en:'Live now. Heaters peak in January; blankets, hoodies and humidifiers are rising.',ur:'ابھی جاری۔ ہیٹر جنوری میں عروج پر؛ کمبل، ہوڈیز اور ہیومیڈیفائر بڑھ رہے ہیں۔'}},
 {k:'wedding',when:{en:'Nov – Mar',ur:'نومبر – مارچ'},now:1,tip:{en:'Live now. Share bridal, jewellery, makeup and gift picks.',ur:'ابھی جاری۔ دلہن، جیولری، میک اپ اور تحائف کی پروڈکٹس شیئر کریں۔'}},
 {k:'sale',when:{en:'11 Nov and 12 Dec',ur:'11 نومبر اور 12 دسمبر'},soon:1,tip:{en:'12.12 is next. Plan offers on gadgets and beauty two weeks before.',ur:'اگلا 12.12 ہے۔ گیجٹس اور بیوٹی کی آفرز دو ہفتے پہلے تیار کریں۔'}},
 {k:'ramadan',when:{en:'About 8 Feb – 9 Mar 2027',ur:'تقریباً 8 فروری – 9 مارچ 2027'},tip:{en:'Start content 3 weeks ahead: kitchen gadgets, serving and storage.',ur:'3 ہفتے پہلے مواد شروع کریں: کچن گیجٹس، سرونگ اور اسٹوریج۔'}},
 {k:'eid',when:{en:'Around 10 Mar 2027',ur:'تقریباً 10 مارچ 2027'},tip:{en:'Clothing, mehndi, jewellery, watches and gifts.',ur:'کپڑے، مہندی، جیولری، گھڑیاں اور تحائف۔'}},
 {k:'school',when:{en:'Mar – Apr and Aug',ur:'مارچ – اپریل اور اگست'},tip:{en:'Bags, lunch boxes, bottles and learning toys.',ur:'بیگ، لنچ باکس، بوتلیں اور تعلیمی کھلونے۔'}},
 {k:'adha',when:{en:'Around 17 May 2027',ur:'تقریباً 17 مئی 2027'},tip:{en:'Kitchen tools, choppers, storage and cookers.',ur:'کچن کے اوزار، چاپر، اسٹوریج اور ککر۔'}},
 {k:'summer',when:{en:'Apr – Aug',ur:'اپریل – اگست'},tip:{en:'Sunglasses, bottles and phone stands for travel.',ur:'دھوپ کے چشمے، بوتلیں اور سفر کے لیے فون اسٹینڈ۔'}}];
function vSeasons(){return `<h1>${t('seasonsT')}</h1><p class="muted">${t('seasonsS')}</p><div class="card">${SEASONS.map(s=>{const ns=S.N.filter(n=>n.tags.includes(s.k)).sort((a,b)=>b.score-a.score).slice(0,8);
 return `<div class="month ${s.now?'now':''}" style="${s.now?'border-radius:10px;padding:10px':''}"><div class="when">${s.when[S.lang]}${s.now?`<div><span class="pill season">${t('now')}</span></div>`:s.soon?`<div><span class="pill est">${t('soon')}</span></div>`:''}</div>
 <div style="flex:1"><h3>${t('se')[s.k]}</h3><div class="small">${s.tip[S.lang]}</div><div style="margin-top:6px">${ns.map(n=>`<a class="pill" href="#/niche/${n.i}">${n.score} · ${esc(nname(n))}</a>`).join('')}</div>
 <a class="small" href="#/finder" data-presetlink="${s.k}">${t('ideasFor')} →</a></div></div>`}).join('')}</div>`}
function vTracker(){const L=W.get();return `<h1>${t('trackerT')}</h1><p class="muted">${t('trackerS')}</p>${L.length?`<div class="plist">${L.map(x=>{
 if(x.ty==='p'){const p=S.P[x.id];if(!p)return'';return `<div><div class="small muted">${t('typeP')} · ${t('saved',x.at)}</div>${prodCard(p)}</div>`}
 const n=S.N[x.id];if(!n)return'';return `<div><div class="small muted">${t('typeN')} · ${t('saved',x.at)}</div>${ideaCard(n)}</div>`}).join('')}</div>`:`<div class="card empty muted">${t('emptyT')}</div>`}`}
// ---------- router
function render(){const h=location.hash||'#/home';const [_,r,a]=h.split('?')[0].split('/');let html;
 if(r==='finder')html=vFinder();else if(r==='niches')html=vNiches();else if(r==='niche')html=vNiche(+a);else if(r==='p')html=vProduct(+a);
 else if(r==='calc')html=vCalc();else if(r==='seasons')html=vSeasons();else if(r==='tracker')html=vTracker();else html=vHome();
 document.getElementById('app').innerHTML=html;nav();if(r==='calc')calc();
 document.getElementById('banner').textContent=t('banner')+' · '+t('dataLabel');document.getElementById('foot').textContent=t('foot');
 document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));document.title=t('appName')}
function rerenderFinder(){sessionStorage.setItem('pf_f',JSON.stringify(S.f));const y=scrollY;const a=document.activeElement?.dataset?.f;render();window.scrollTo(0,y);if(a){const e=document.querySelector(`[data-f="${a}"]`);if(e&&e.type==='number'){e.focus();const l=e.value.length;try{e.setSelectionRange(l,l)}catch(_){}}}}
const PRESETS={winter:{season:'winter'},beat:{beat:true,margin:250,units:5},under:{pmax:999,units:5},wedding:{season:'wedding'}};
document.addEventListener('click',e=>{const st=e.target.closest('[data-star]');if(st){e.stopPropagation();const[ty,id]=st.dataset.star.split(':');W.toggle(ty,+id);const y=scrollY;render();scrollTo(0,y);return}
 const pr=e.target.closest('[data-preset]');if(pr){S.f={...DEF,...PRESETS[pr.dataset.preset]};S.shown=40;rerenderFinder();return}
 const pl=e.target.closest('[data-presetlink]');if(pl){S.f={...DEF,season:pl.dataset.presetlink};sessionStorage.setItem('pf_f',JSON.stringify(S.f))}
 if(e.target.closest('[data-reset]')){S.f={...DEF};rerenderFinder();return}
 if(e.target.closest('[data-more]')){S.shown+=40;rerenderFinder();return}
 const ns=e.target.closest('[data-ns]');if(ns){const k=ns.dataset.ns;S.nsort=[k,S.nsort[0]===k?-S.nsort[1]:(k==='idea'?1:-1)];render();return}
 const nt=e.target.closest('[data-ntab]');if(nt){S.ntab=nt.dataset.ntab;render();return}
 const go=e.target.closest('[data-go]');if(go&&!e.target.closest('a')){location.hash=go.dataset.go}});
let tm;document.addEventListener('input',e=>{const k=e.target.dataset.f;if(k){getF();S.f[k]=e.target.type==='checkbox'?e.target.checked:e.target.value;S.shown=40;clearTimeout(tm);tm=setTimeout(rerenderFinder,e.target.type==='number'?350:0)}
 if(e.target.dataset.c)calc()});
document.addEventListener('toggle',e=>{if(e.target.classList?.contains('fbox'))S.fopen=e.target.open},true);
window.addEventListener('hashchange',()=>{S.shown=40;render();window.scrollTo(0,0)});
function setLang(l){S.lang=l;localStorage.setItem('pf_lang',l);document.documentElement.lang=l;document.documentElement.dir=l==='ur'?'rtl':'ltr';document.getElementById('langBtn').textContent=l==='ur'?'English':'اردو';render()}
document.getElementById('langBtn').onclick=()=>setLang(S.lang==='ur'?'en':'ur');
Promise.all(['products','niches','meta'].map(n=>fetch('data/'+n+'.json').then(r=>r.json()))).then(([P,N,M])=>{S.P=P;S.N=N;S.M=M;setLang(S.lang);window.__ready=true});

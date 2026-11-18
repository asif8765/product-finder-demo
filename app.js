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
wMargin:'Healthy margin after the Rs 200 courier.',wUp:'Search interest is rising.',wSocial:'People are talking about it on social media.',wAds:'Earlier research recorded sellers advertising for {0} months.',wWinter:'Winter is here, so demand is in season now.',
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
const T2={en:{
nKw:'Keywords',nHow:'How it works',nMore:'More',
heroS:'Real market listings, scored the way leading product research tools do it: demand, competition, search interest and COD earning after courier.',
foot:'Product Finder Demo · built from snapshots of the Pakistani e-commerce market (marketplaces plus individual stores) · all sales and earnings are estimates · not affiliated with any marketplace',
evAds:'Earlier research note: sellers advertised this for {0} months (since {1}). Recorded 18 Nov 2026; awaiting a fresh check',evAdsNo:'Early for ads: room to be one of the first sellers advertising it',
adPill:'Ads {0} mo',pAds:'Long-running ads',fAds:'Long-running ads only',fMc:'Matched supplier cost only',
wAds:'Earlier research recorded sellers advertising for {0} months.',
costEst:'product cost',costM:'matched supplier cost',costN:'supplier price level for this niche',costE:'estimated cost (45% of price)',
matchedTo:'Matched to a similar wholesale item: “{0}” ({1}% title match).',costTip:'Use your own supplier quote in the margin calculator for an exact figure.',
trackStart:'Tracking started {0}',snapsN:'{0} nightly snapshots so far',
hist:'Sales history',histStart:'Tracking started {0}. Daily sales, price and review changes will show here after the next nightly update.',
histStartN:'Tracking started {0}. Daily sales and score changes will show here after the next nightly update.',
u7:'est. units, last 7 days',u30:'est. units, last 30 days',hSold:'Sold count',hPrice:'Price',hRev:'Reviews',hUnits:'Est. monthly units',hScore:'Opportunity Score',hWeek:'Est. units per week',
sinceD:'{0} since {1}',noChange:'no change',
trackerS:'Your watchlist, saved on this device. Each item shows what changed since you saved it.',
trkSince:'Since you saved on {0}',trkWait:'Saved {0}. Changes will show after the next nightly update.',
trkPrice:'Price',trkUnits:'Est. units/month',trkRev:'Reviews',trkScore:'Score',
demoNote:'Demo: estimates come from nightly market snapshots. Tracking started {0}; sales speed gets sharper with every night of data.',
preview:'Preview with simulated history, for layout testing only',
sU7:'Est. units, last 7 days',
chartMore:'Also shortlisted:',
kwT:'Keyword demand',kwS:'Type a product in English or Roman Urdu (for example razai, ghari, kurta) to see demand, competition and earning potential across the market.',
kwPh:'e.g. heater, razai, power bank',kwGo:'Check',kwTry:'Try:',kwNone:'No listings match “{0}” yet. Try a shorter or different word.',
kwMatches:'matching listings',kwMed:'typical price',kwRange:'price range',kwTop10:'avg reviews, top 10 listings',kwSellers:'sellers',kwTop3:'top 3 sellers hold',kwMargin:'typical earning/order',
kwTrendT:'Search interest, last 12 months',kwTrendUp:'Search interest up {0}% over the last 4 weeks',kwTrendDown:'Search interest is between peaks right now ({0}%)',kwTrendFlat:'Search interest is steady',kwTrendNone:'Search interest for this exact word is coming with keyword tracking.',
kwNiche:'Based on the {0} niche',kwNiches:'Niches for this keyword',kwTopL:'Top listings for this keyword',kwScoreT:'Keyword Opportunity Score',kwAlso:'Also searched as: {0}',kwWhy:'What stands out',
kwWUnits:'About {0} units a month (estimated) sell across these listings.',kwWBeat:'Top listings average only {0} reviews, so a new seller can stand out.',kwWSpread:'Sales are spread across {0} sellers.',kwWMargin:'Typical earning is about {0} per order after the Rs 200 courier.',kwWUp:'Search interest is rising.',kwWSeason:'In season now.',kwWAds:'Earlier research recorded sellers advertising for {0} months.',kwWBase:'A steady product with buyers across the market.',
howT:'How scores work',howS:'The Product Finder follows the 4-step product hunting method used by leading product research tools, tuned for COD selling in Pakistan.',
h1T:'1. Find good products',h1:'We check every tracked listing and keep the ones priced Rs 500–3,000, selling at least 5 units a month, light enough to courier easily, and rated 4 stars or more.',
h2T:'2. Check the niche has real demand',h2:'Similar products are grouped into niches. A niche qualifies when it sells about 150 or more units a month. We also show how open it is: when the top 10 listings average 150 reviews or fewer, a new seller can stand out, and we show how much of the sales the top 3 hold.',
h3T:'3. Confirm buyers are interested',h3:'We look for rising search interest, social media buzz, sellers who have kept ads running for months, and the season.',
h4T:'4. Check your COD earning',h4:'We take the typical selling price and subtract the product cost, the Rs 200 courier and 5% for fees and packaging. A niche passes at Rs 250 or more per order, or a margin of 25% or more.',
hsT:'The Opportunity Score (1–10)',hs:'Every niche, and every keyword you check, gets one score that blends four parts:',
hsD:'Demand (35%): sales, search interest, social buzz and proof from several market sources.',hsC:'Room to compete (25%): fewer listings, fewer reviews on the top sellers, and sales spread across many sellers.',
hsM:'Margin (20%): what you keep after courier and fees.',hsTm:'Timing (20%): search direction, the season and, as nightly data builds, whether sales are speeding up.',
hsTiers:'8–10 is a hot pick, 6–7 a strong opportunity, 4–5 worth a closer look.',
hsalT:'How sales are estimated',hsal:'Every night we save a snapshot of the market. Sales speed comes from how much each listing’s sold count grows between snapshots, the same idea product research tools use with sales rank. While history builds up, monthly units are estimated from the total sold count, or from reviews at about {0} sales per review. All figures are estimates.',
hcostT:'How product cost is set',hcost:'When a similar wholesale item is listed, we use its price as the matched supplier cost. Otherwise we use the niche’s supplier price level, or an estimated cost of 45% of the selling price. You can always enter your own cost in the margin calculator.',
hkwT:'Keyword demand',hkw:'The keyword tool runs the same checks on any word you type, in English or Roman Urdu, so you can test an idea before you source it.',
seeHow:'How scores work',seeSeasons:'Season calendar',seeKw:'Check a keyword',
},ur:{
nKw:'کی ورڈز',nHow:'طریقہ کار',nMore:'مزید',
heroS:'اصل مارکیٹ لسٹنگز، اسی طریقے سے اسکور کی گئیں جیسے بڑے پروڈکٹ ریسرچ ٹولز کرتے ہیں: ڈیمانڈ، مقابلہ، سرچ میں دلچسپی اور کوریئر کے بعد COD کمائی۔',
foot:'پروڈکٹ فائنڈر ڈیمو · پاکستانی ای کامرس مارکیٹ (مارکیٹ پلیسز اور انفرادی اسٹورز) کے اسنیپ شاٹس سے بنایا گیا · تمام سیلز اور کمائی تخمینی ہیں · کسی مارکیٹ پلیس سے وابستہ نہیں',
evAds:'پچھلی تحقیق: سیلرز نے {0} ماہ ({1} سے) اشتہار چلائے۔ 18 نومبر 2026 کا نوٹ؛ تازہ جانچ جلد ہوگی',evAdsNo:'اشتہارات میں ابھی ابتدا ہے: پہلے اشتہار دینے والوں میں شامل ہونے کا موقع',
adPill:'اشتہار {0} ماہ',pAds:'لمبے عرصے کے اشتہارات',fAds:'صرف لمبے عرصے کے اشتہارات والی',fMc:'صرف ملائی گئی سپلائر لاگت والی',
wAds:'سیلرز {0} ماہ سے اشتہار چلا رہے ہیں، یعنی یہ بکتی رہتی ہے۔',
costEst:'پروڈکٹ لاگت',costM:'ملتی جلتی سپلائر لاگت',costN:'اس نِچ میں سپلائر قیمت کی سطح',costE:'تخمینی لاگت (قیمت کا 45٪)',
matchedTo:'ملتے جلتے ہول سیل آئٹم سے ملایا گیا: “{0}” ({1}٪ عنوان میچ)۔',costTip:'درست حساب کے لیے منافع کیلکولیٹر میں اپنے سپلائر کی قیمت ڈالیں۔',
trackStart:'ٹریکنگ {0} سے شروع',snapsN:'اب تک {0} رات کے اسنیپ شاٹس',
hist:'سیلز کی تاریخ',histStart:'ٹریکنگ {0} سے شروع ہوئی۔ روزانہ سیلز، قیمت اور ریویوز کی تبدیلی اگلی رات کی اپڈیٹ کے بعد یہاں نظر آئے گی۔',
histStartN:'ٹریکنگ {0} سے شروع ہوئی۔ روزانہ سیلز اور اسکور کی تبدیلی اگلی رات کی اپڈیٹ کے بعد یہاں نظر آئے گی۔',
u7:'تخمینی یونٹس، پچھلے 7 دن',u30:'تخمینی یونٹس، پچھلے 30 دن',hSold:'فروخت کی تعداد',hPrice:'قیمت',hRev:'ریویوز',hUnits:'تخمینی ماہانہ یونٹس',hScore:'آپرچونٹی اسکور',hWeek:'تخمینی ہفتہ وار یونٹس',
sinceD:'{1} سے {0}',noChange:'کوئی تبدیلی نہیں',
trackerS:'آپ کی واچ لسٹ، اسی ڈیوائس پر محفوظ۔ ہر آئٹم دکھاتا ہے کہ محفوظ کرنے کے بعد کیا بدلا۔',
trkSince:'{0} کو محفوظ کرنے کے بعد سے',trkWait:'{0} کو محفوظ کیا۔ تبدیلیاں اگلی رات کی اپڈیٹ کے بعد نظر آئیں گی۔',
trkPrice:'قیمت',trkUnits:'تخمینی یونٹس/ماہ',trkRev:'ریویوز',trkScore:'اسکور',
demoNote:'ڈیمو: تخمینے رات کے مارکیٹ اسنیپ شاٹس سے ہیں۔ ٹریکنگ {0} سے شروع ہوئی؛ ہر رات کے ڈیٹا سے سیلز کی رفتار مزید درست ہوتی جائے گی۔',
preview:'نقلی تاریخ کے ساتھ پیش نظارہ، صرف ڈیزائن جانچنے کے لیے',
sU7:'تخمینی یونٹس، پچھلے 7 دن',
chartMore:'مزید شارٹ لسٹ نِچز:',
kwT:'کی ورڈ ڈیمانڈ',kwS:'انگریزی یا رومن اردو میں پروڈکٹ لکھیں (مثلاً razai، ghari، kurta) اور پوری مارکیٹ میں ڈیمانڈ، مقابلہ اور کمائی کا اندازہ دیکھیں۔',
kwPh:'مثلاً heater، razai، power bank',kwGo:'دیکھیں',kwTry:'آزمائیں:',kwNone:'“{0}” سے ابھی کوئی لسٹنگ نہیں ملی۔ چھوٹا یا مختلف لفظ آزمائیں۔',
kwMatches:'ملتی جلتی لسٹنگز',kwMed:'عام قیمت',kwRange:'قیمت کی حد',kwTop10:'ٹاپ 10 لسٹنگز کے اوسط ریویوز',kwSellers:'سیلرز',kwTop3:'ٹاپ 3 سیلرز کا حصہ',kwMargin:'عام کمائی/آرڈر',
kwTrendT:'سرچ میں دلچسپی، پچھلے 12 ماہ',kwTrendUp:'پچھلے 4 ہفتوں میں سرچ میں دلچسپی {0}٪ بڑھی',kwTrendDown:'سرچ میں دلچسپی ابھی دو عروج کے درمیان ہے ({0}٪)',kwTrendFlat:'سرچ میں دلچسپی مستحکم ہے',kwTrendNone:'اس لفظ کی سرچ دلچسپی کی ورڈ ٹریکنگ کے ساتھ آئے گی۔',
kwNiche:'{0} نِچ کی بنیاد پر',kwNiches:'اس کی ورڈ کی نِچز',kwTopL:'اس کی ورڈ کی ٹاپ لسٹنگز',kwScoreT:'کی ورڈ آپرچونٹی اسکور',kwAlso:'یہ بھی تلاش کیا گیا: {0}',kwWhy:'نمایاں باتیں',
kwWUnits:'ان لسٹنگز میں تقریباً {0} یونٹس ماہانہ (تخمینی) بکتے ہیں۔',kwWBeat:'ٹاپ لسٹنگز کے اوسطاً صرف {0} ریویوز ہیں، نیا سیلر بھی نمایاں ہو سکتا ہے۔',kwWSpread:'سیلز {0} سیلرز میں بٹی ہوئی ہیں۔',kwWMargin:'200 روپے کوریئر کے بعد عام کمائی تقریباً {0} فی آرڈر۔',kwWUp:'سرچ میں دلچسپی بڑھ رہی ہے۔',kwWSeason:'ابھی سیزن میں ہے۔',kwWAds:'سیلرز {0} ماہ سے اس کے اشتہار چلا رہے ہیں۔',kwWBase:'مارکیٹ بھر میں خریداروں والی مستحکم پروڈکٹ۔',
howT:'اسکور کیسے بنتا ہے',howS:'پروڈکٹ فائنڈر وہی 4 مرحلوں والا پروڈکٹ تلاش کا طریقہ استعمال کرتا ہے جو بڑے پروڈکٹ ریسرچ ٹولز کرتے ہیں، پاکستان میں COD سیلنگ کے مطابق۔',
h1T:'1. اچھی پروڈکٹس تلاش کریں',h1:'ہم ہر ٹریک کی گئی لسٹنگ دیکھتے ہیں اور وہ رکھتے ہیں جن کی قیمت 500 سے 3,000 روپے ہو، جو مہینے میں کم از کم 5 یونٹس بکیں، کوریئر کے لیے ہلکی ہوں اور 4 یا زیادہ اسٹار ریٹنگ رکھتی ہوں۔',
h2T:'2. دیکھیں کہ نِچ میں اصل ڈیمانڈ ہے',h2:'ملتی جلتی پروڈکٹس کو نِچز میں رکھا جاتا ہے۔ جو نِچ مہینے میں تقریباً 150 یا زیادہ یونٹس بیچے وہ کامیاب ہے۔ ہم یہ بھی دکھاتے ہیں کہ اس میں کتنی گنجائش ہے: اگر ٹاپ 10 لسٹنگز کے اوسطاً 150 یا کم ریویوز ہوں تو نیا سیلر نمایاں ہو سکتا ہے، اور ٹاپ 3 کا سیلز میں حصہ بھی دکھاتے ہیں۔',
h3T:'3. خریداروں کی دلچسپی کی تصدیق',h3:'ہم بڑھتی سرچ دلچسپی، سوشل میڈیا پر چرچا، مہینوں سے اشتہار چلانے والے سیلرز اور سیزن دیکھتے ہیں۔',
h4T:'4. اپنی COD کمائی دیکھیں',h4:'ہم عام فروخت قیمت میں سے پروڈکٹ لاگت، 200 روپے کوریئر اور فیس و پیکنگ کے لیے 5٪ نکالتے ہیں۔ فی آرڈر 250 روپے یا زیادہ، یا 25٪ یا زیادہ منافع پر نِچ کامیاب ہے۔',
hsT:'آپرچونٹی اسکور (1 سے 10)',hsT2:'',hs:'ہر نِچ اور آپ کا چیک کیا گیا ہر کی ورڈ ایک اسکور پاتا ہے جو چار حصوں سے بنتا ہے:',
hsD:'ڈیمانڈ (35٪): سیلز، سرچ دلچسپی، سوشل چرچا اور کئی مارکیٹ ذرائع کا ثبوت۔',hsC:'مقابلے کی گنجائش (25٪): کم لسٹنگز، ٹاپ سیلرز کے کم ریویوز، اور زیادہ سیلرز میں بٹی سیلز۔',
hsM:'منافع (20٪): کوریئر اور فیس کے بعد آپ کے پاس کیا بچتا ہے۔',hsTm:'وقت (20٪): سرچ کا رخ، سیزن، اور رات کے ڈیٹا کے ساتھ یہ کہ سیلز تیز ہو رہی ہیں یا نہیں۔',
hsTiers:'8 سے 10 زبردست موقع، 6 سے 7 اچھا موقع، 4 سے 5 مزید دیکھنے کے قابل۔',
hsalT:'سیلز کا اندازہ کیسے لگتا ہے',hsal:'ہر رات ہم مارکیٹ کا اسنیپ شاٹ محفوظ کرتے ہیں۔ سیلز کی رفتار اس سے معلوم ہوتی ہے کہ اسنیپ شاٹس کے درمیان ہر لسٹنگ کی فروخت کی تعداد کتنی بڑھی، وہی خیال جو پروڈکٹ ریسرچ ٹولز سیلز رینک کے ساتھ استعمال کرتے ہیں۔ جب تک تاریخ بنتی ہے، ماہانہ یونٹس کل فروخت سے یا ریویوز سے (تقریباً {0} فروخت فی ریویو) اندازاً نکالے جاتے ہیں۔ تمام اعداد تخمینی ہیں۔',
hcostT:'پروڈکٹ لاگت کیسے طے ہوتی ہے',hcost:'جب ملتا جلتا ہول سیل آئٹم موجود ہو تو اس کی قیمت ملتی جلتی سپلائر لاگت کے طور پر لی جاتی ہے۔ ورنہ نِچ کی سپلائر قیمت کی سطح، یا فروخت قیمت کا 45٪ تخمینی لاگت لی جاتی ہے۔ آپ منافع کیلکولیٹر میں ہمیشہ اپنی لاگت ڈال سکتے ہیں۔',
hkwT:'کی ورڈ ڈیمانڈ',hkw:'کی ورڈ ٹول آپ کے لکھے ہر لفظ پر، انگریزی یا رومن اردو میں، یہی جانچ کرتا ہے تاکہ آپ سورس کرنے سے پہلے آئیڈیا پرکھ سکیں۔',
seeHow:'اسکور کیسے بنتا ہے',seeSeasons:'سیزن کیلنڈر',seeKw:'کی ورڈ چیک کریں',
}};
Object.assign(T.en,T2.en);Object.assign(T.ur,T2.ur);
Object.assign(T.en,{noLimit:'No limit',cohortNote:'Niche sold counts and reviews include listings tracked that night; newly added listings can change the totals.',cAds:'Ads (months)',pDemand:'Demand',pRoom:'Room to compete',pMargin:'Margin',pTiming:'Timing'});
Object.assign(T.ur,{noLimit:'کوئی حد نہیں',cohortNote:'نِچ کی کل فروخت اور ریویوز اس رات ٹریک کی گئی لسٹنگز کے ہیں؛ نئی لسٹنگز سے کل تعداد بدل سکتی ہے۔',cAds:'اشتہارات (ماہ)',pDemand:'ڈیمانڈ',pRoom:'مقابلے کی گنجائش',pMargin:'منافع',pTiming:'وقت'});
const t=(k,...a)=>{let s=(T[S.lang][k]??T.en[k]??k);if(typeof s==='string')a.forEach((v,i)=>s=s.split('{'+i+'}').join(v));return s};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>n==null||isNaN(n)?'–':Math.round(n).toLocaleString('en-US');
const rs=n=>(S.lang==='ur'?'روپے ':'Rs ')+fmt(n);
const cat=c=>S.lang==='ur'?(CAT_UR[c]||c):c;
const nname=n=>S.lang==='ur'?n.ur:n.idea;
const nshort=n=>S.lang==='ur'?n.shu:n.sh;
const tier=s=>s>=8?t('tier10'):s>=6?t('tier7'):s>=4?t('tier5'):t('tier3');
const badge=s=>`<span class="badge s${s}" title="${esc(t('score'))}">${s}</span>`;
const label=n=>n.short?(n.sat?`<span class="pill sat">${t('lblSat')}</span>`:`<span class="pill opp">${t('lblOpp')}</span>`):'';
const adPill=n=>n&&n.adm>=6?`<span class="pill ad">📣 ${t('adPill',n.adm)}</span>`:'';
const est=()=>`<span class="pill est">${t('estimated')}</span>`;
const monthName=s=>{if(!s)return'';const[y,m]=s.split('-');return t('months')[+m-1]+' '+y};
const dDate=iso=>{if(!iso)return'';const[y,m,d]=iso.split('-');return S.lang==='ur'?`${+d} ${T.ur.months[+m-1]} ${y}`:`${+d} ${T.en.months[+m-1]} ${y}`};
const dShort=iso=>{if(!iso)return'';const[y,m,d]=iso.split('-');return `${+d} ${t('months')[+m-1]}`};
const sgn=v=>v>0?'+'+fmt(v):v<0?'−'+fmt(-v):'0';
const hasHist=()=>S.M.snaps>=2;
const nByKey=k=>S.NK[k]??(/^\d+$/.test(k)?S.N[+k]:null);
// ---------- sparkline
function spark(vals,o={}){const v=(vals||[]).map(x=>x==null?null:+x);const pts=v.map((y,i)=>[i,y]).filter(p=>p[1]!=null);if(pts.length<2)return'';
 const w=o.w||120,h=o.h||34,pd=3,xs=v.length-1||1;let lo=Math.min(...pts.map(p=>p[1])),hi=Math.max(...pts.map(p=>p[1]));if(hi===lo){hi+=1;lo-=1}
 const X=i=>pd+(w-2*pd)*i/xs,Y=y=>h-pd-(h-2*pd)*(y-lo)/(hi-lo);const d=pts.map((p,j)=>(j?'L':'M')+X(p[0]).toFixed(1)+' '+Y(p[1]).toFixed(1)).join(' ');
 const c=o.c||'#0f766e',l=pts[pts.length-1];
 return `<svg class="spark" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true"><path d="${d} L${X(l[0]).toFixed(1)} ${h-pd} L${X(pts[0][0]).toFixed(1)} ${h-pd} Z" fill="${c}" fill-opacity=".10"/><path d="${d}" fill="none" stroke="${c}" stroke-width="1.8" stroke-linejoin="round"/><circle cx="${X(l[0]).toFixed(1)}" cy="${Y(l[1]).toFixed(1)}" r="2.6" fill="${c}"/></svg>`}
function firstLast(a){const v=(a||[]).filter(x=>x!=null);return v.length?[v[0],v[v.length-1]]:[null,null]}
// ---------- storage (stable keys; entries from the first demo used row numbers and are dropped)
const W={get(){try{return JSON.parse(localStorage.getItem('pf_watch')||'[]').filter(x=>typeof x.id==='string')}catch(e){return[]}},set(v){localStorage.setItem('pf_watch',JSON.stringify(v))},
 has(ty,id){return this.get().some(x=>x.ty===ty&&x.id===id)},
 toggle(ty,id){let v=this.get();if(this.has(ty,id))v=v.filter(x=>!(x.ty===ty&&x.id===id));else{const o={ty,id,at:new Date().toISOString().slice(0,10),sd:S.M.iso};
  if(ty==='p'){const p=S.PK[id];Object.assign(o,{price:p.p,u:p.u,rev:p.rev,sold:soldNow(p)})}else{const n=S.NK[id];Object.assign(o,{score:n.score,u:n.units,l:n.listings})}v.unshift(o)}this.set(v)}};
const star=(ty,id)=>`<button class="star ${W.has(ty,id)?'on':''}" data-star="${ty}:${id}" aria-label="${esc(t('watch'))}">${W.has(ty,id)?'★':'☆'}</button>`;
function ph(p){return S.H.p&&S.H.p[p.k]}
function soldNow(p){const h=ph(p);return h?firstLast(h[1])[1]:null}
// ---------- evidence & why
function evidence(n,p){const E=[];if(!n)return E;
 E.push(['🧭',n.src>=2?t('evSrc',n.src):t('evSrc1',Math.max(1,n.src))]);
 E.push(['📣',n.adm?t('evAds',n.adm,monthName(n.ads)):t('evAdsNo')]);
 E.push(['💬',n.tag?t('evSocial',esc(n.tag)):t('evSocialNo')]);
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
const costLabel=cb=>cb==='m'?t('costM'):cb==='n'?t('costN'):t('costE');
// ---------- views
const NAV=[['home','🏠','nHome'],['finder','🔍','nFinder'],['kw','🔤','nKw'],['niches','🧩','nNiches'],['calc','🧮','nCalc'],['tracker','⭐','nTracker']];
const NAV_TOP=[...NAV.slice(0,5),['seasons','📅','nSeasons'],['how','💡','nHow'],NAV[5]];
function nav(){const r=(location.hash.split('/')[1]||'home').split('?')[0];const cur={niche:'niches',p:'finder'}[r]||r;
 document.getElementById('topnav').innerHTML=NAV_TOP.map(([k,i,l])=>`<a href="#/${k}" class="${cur===k?'on':''}">${t(l)}</a>`).join('');
 document.getElementById('bottomnav').innerHTML=NAV.map(([k,i,l])=>`<a href="#/${k}" class="${cur===k?'on':''}"><span class="i">${i}</span>${t(l)}</a>`).join('')}
function ideaCard(n){const sp=n.h?spark(n.h.u,{w:90,h:26}):'';return `<div class="card idea" data-go="#/niche/${n.k}">${badge(n.score)}<div class="body">
 <h3>${esc(nname(n))}</h3><div>${label(n)}<span class="pill">${tier(n.score)}</span>${adPill(n)}<span class="pill">${esc(cat(n.cat))}</span></div>
 <div class="kv"><span><b>${fmt(n.units)}</b> ${t('estUnits')}</span>${n.margin>0?`<span><b>${rs(n.margin)}</b> ${t('margin')}</span>`:''}<span><b>${fmt(n.sellers)}</b> ${t('sellers')}</span>${sp?`<span class="sp">${sp}</span>`:''}</div>
 <div class="small muted" style="margin-top:4px">${esc(why(n).slice(0,2).join(' '))}</div></div>${star('n',n.k)}</div>`}
function trackLine(){const M=S.M;return `${t('trackStart',dDate(M.first))} · ${t('snapsN',fmt(M.snaps))}`}
function previewBar(){return S.M.preview?`<div class="note small" style="margin-bottom:10px;background:#fff7ed;border-color:#fed7aa">🧪 ${t('preview')}</div>`:''}
function vHome(){const M=S.M,f=M.funnel;const short=S.N.filter(n=>n.short);
 const st=[[f[0],'fListings'],[f[1],'fGood'],[f[2],'fNiches'],[f[3],'fShort']];
 return `${previewBar()}<section class="card hero"><h1>${t('heroT')}</h1><p class="muted">${t('heroS')}</p>
 <div class="funnel">${st.map(([v,l],i)=>`<div class="fstep"><div class="fbar" style="width:${[68,52,38,30][i]}%">${fmt(v)}</div><div class="lab">${t(l)}</div></div>`).join('')}</div>
 <p class="small muted" style="margin:12px 0 0">${esc(t('dataLabel'))} · ${t('snap',dDate(M.iso))} · ${trackLine()}</p></section>
 <div class="row" style="margin-top:12px"><a class="btn" href="#/finder">🔍 ${t('openFinder')}</a><a class="btn ghost" href="#/kw">🔤 ${t('seeKw')}</a><a class="btn ghost" href="#/niches">${t('allNiches',S.N.length)}</a></div>
 <div class="row small" style="margin-top:8px"><a href="#/how">💡 ${t('seeHow')}</a><span class="muted">·</span><a href="#/seasons">📅 ${t('seeSeasons')}</a></div>
 <h2>${t('topIdeas')}</h2><p class="muted small" style="margin-top:-6px">${t('topSub')} ${est()}</p>
 <div class="grid g2">${short.map(ideaCard).join('')}</div>`}
const DEF={cat:'',pmin:'',pmax:'',units:'',rev:'',rating:'',margin:'',season:'',beat:false,ads:false,mc:false,sort:'u'};
function getF(){if(!S.f){try{S.f=Object.assign({},DEF,JSON.parse(sessionStorage.getItem('pf_f')||'{}'))}catch(e){S.f={...DEF}}}return S.f}
function filterP(){const f=getF(),num=v=>v===''||v==null||isNaN(+v)?null:+v;const pmin=num(f.pmin),pmax=num(f.pmax),u=num(f.units),rv=num(f.rev),rt=num(f.rating),mg=num(f.margin);
 let r=S.P.filter(p=>(!f.cat||p.c===f.cat)&&(pmin==null||p.p>=pmin)&&(pmax==null||p.p<=pmax)&&(u==null||p.u>=u)&&(rv==null||p.rev<=rv)&&(rt==null||(p.rt||0)>=rt)&&(mg==null||p.m>=mg)&&(!f.season||p.tg.includes(f.season))&&(!f.beat||p.beat)&&(!f.ads||(p.n>=0&&S.N[p.n].adm>=6))&&(!f.mc||p.cb==='m'));
 const sc=p=>p.n>=0?S.N[p.n].score:0;
 const K={u:p=>-p.u,w:p=>-(p.u7||0),r:p=>-p.u*p.p,m:p=>-p.m,s:p=>-(sc(p)*1e6+p.u),pa:p=>p.p,ra:p=>p.rev*1e3-p.u}[f.sort]||(p=>-p.u);
 return r.sort((a,b)=>K(a)-K(b))}
function prodCard(p){const n=p.n>=0?S.N[p.n]:null;const h=ph(p);const sp=h?spark(h[1],{w:80,h:24}):'';
 return `<div class="card prod" data-go="#/p/${p.k}">${n?badge(n.score):'<span class="badge s1">–</span>'}<div class="body" style="flex:1;min-width:0">
 <div class="t">${esc(p.t)}</div>${n?`<div class="small muted">${esc(nname(n))}</div>`:''}
 <div>${n?label(n):''}${p.beat?`<span class="pill opp">✓ ${t('beatPill')}</span>`:''}${adPill(n)}${p.cb==='m'?`<span class="pill mc">✓ ${t('costM')}</span>`:''}${p.tg.slice(0,2).map(k=>`<span class="pill season">${t('se')[k]}</span>`).join('')}</div>
 <div class="kv"><span><b>${rs(p.p)}</b>${p.op?` <s class="small">${fmt(p.op)}</s>`:''}</span><span><b>${fmt(p.u)}</b> ${t('estUnits')}</span>${hasHist()&&p.u7!=null?`<span><b>${fmt(p.u7)}</b> ${t('u7')}</span>`:''}<span><b>${rs(p.u*p.p)}</b> ${t('estRev')}</span><span><b>${rs(p.m)}</b> ${t('margin')}</span><span><b>${fmt(p.rev)}</b> ${t('reviews')}</span>${p.rt?`<span>★ <b>${p.rt.toFixed(1)}</b></span>`:''}${sp?`<span class="sp">${sp}</span>`:''}</div></div>${star('p',p.k)}</div>`}
function nAct(){const f=getF();return Object.keys(DEF).filter(k=>k!=='sort'&&f[k]!==DEF[k]&&f[k]!=='').length}
function vFinder(){const f=getF();const cats=[...new Set(S.N.map(n=>n.cat))].sort();const R=filterP();
 const opt=(v,l,cur)=>`<option value="${esc(v)}" ${String(cur)===String(v)?'selected':''}>${esc(l)}</option>`;
 const inp=(k,l,dec)=>`<label>${t(l)}<input type="text" inputmode="${dec?'decimal':'numeric'}" ${dec?'data-dec="1"':''} autocomplete="off" data-f="${k}" data-num="1" value="${esc(f[k])}" placeholder="${esc(t('noLimit'))}"></label>`;
 const sorts=[['u','sUnits'],...(hasHist()?[['w','sU7']]:[]),['r','sRevn'],['m','sMargin'],['s','sScore'],['pa','sPriceA'],['ra','sRevA']];
 return `<h1>${t('finderT')}</h1><p class="muted">${t('finderS')}</p>
 <div class="row small" style="margin-bottom:10px"><span class="muted">${t('presets')}:</span>
 <button class="btn ghost" data-preset="winter">❄️ ${t('pWinter')}</button><button class="btn ghost" data-preset="beat">✓ ${t('pBeat')}</button><button class="btn ghost" data-preset="ads">📣 ${t('pAds')}</button><button class="btn ghost" data-preset="under">${t('pUnder')}</button><button class="btn ghost" data-preset="wedding">💍 ${t('pWed')}</button></div>
 <div class="finder"><details class="card fbox" ${S.fopen?'open':''}><summary>⚙️ ${t('filters')}<span id="fcnt">${nAct()?` · ${nAct()}`:''}</span></summary><div class="filters" style="margin-top:10px">
 <label>${t('fCat')}<select data-f="cat">${opt('',t('any'),f.cat)}${cats.map(c=>opt(c,cat(c),f.cat)).join('')}</select></label>
 <label>${t('fSeason')}<select data-f="season">${opt('',t('any'),f.season)}${Object.keys(T.en.se).map(k=>opt(k,t('se')[k],f.season)).join('')}</select></label>
 ${inp('pmin','fPmin')}${inp('pmax','fPmax')}${inp('units','fUnits')}${inp('rev','fRev')}${inp('rating','fRating',1)}${inp('margin','fMargin')}
 <label class="chk"><input type="checkbox" data-f="beat" ${f.beat?'checked':''}> ${t('fBeat')}</label>
 <label class="chk"><input type="checkbox" data-f="ads" ${f.ads?'checked':''}> ${t('fAds')}</label>
 <label class="chk"><input type="checkbox" data-f="mc" ${f.mc?'checked':''}> ${t('fMc')}</label>
 <label style="grid-column:1/-1">${t('sort')}<select data-f="sort">${sorts.map(([v,l])=>opt(v,t(l),f.sort)).join('')}</select></label>
 <button class="btn ghost" data-reset style="grid-column:1/-1;justify-content:center">${t('reset')}</button></div></details>
 <div id="fres">${finderRes(R)}</div></div>`}
function finderRes(R){return `<div class="row" style="margin-bottom:8px"><b id="rc">${t('results',fmt(R.length))}</b>${est()}</div>
 <div class="plist">${R.length?R.slice(0,S.shown).map(prodCard).join(''):`<div class="card empty muted">${t('noRes')}</div>`}</div>
 ${R.length>S.shown?`<div class="row" style="justify-content:center;margin-top:12px"><button class="btn ghost" data-more>${t('more')}</button></div>`:''}`}
// Update only the results and the filter count, never the inputs, so typing (and clearing) a field is never interrupted.
function updateFinder(){sessionStorage.setItem('pf_f',JSON.stringify(S.f));const el=document.getElementById('fres');if(!el){render();return}
 el.innerHTML=finderRes(filterP());const c=document.getElementById('fcnt');if(c)c.textContent=nAct()?` · ${nAct()}`:''}
// Keep only digits (and one decimal point where allowed). Empty stays empty: it means "no limit". Caret position is preserved.
function cleanNum(el){const dec=!!el.dataset.dec;let v=el.value.replace(dec?/[^\d.]/g:/\D/g,'');if(dec){const i=v.indexOf('.');if(i>=0)v=v.slice(0,i+1)+v.slice(i+1).replace(/\./g,'')}
 if(v!==el.value){const pos=Math.max(0,(el.selectionStart??v.length)-(el.value.length-v.length));el.value=v;try{el.setSelectionRange(pos,pos)}catch(_){}}return v}
// label placement: greedy, tries 6 spots around each bubble, skips a label rather than overlapping
function placeLabels(items,w,h,fs,pdL){const placed=[],cw=fs*(S.lang==='ur'?0.5:0.56);
 items.forEach(it=>placed.push({x0:it.x-2,y0:it.y-2,x1:it.x+2,y1:it.y+2}));placed.push({x0:pdL,y0:pdL,x1:pdL+12+fs*0.56*(t('sweet').length+2),y1:pdL+fs+8});
 const cx=(placeLabels.c||(placeLabels.c=document.createElement('canvas').getContext('2d')));cx.font=`${fs}px ${getComputedStyle(document.body).fontFamily}`;
 return items.map(it=>{const tw=Math.max(cx.measureText(it.text).width,it.text.length*cw*0.6)+4,th=fs;const r=it.r;
  const C=[[r+3,th*0.35,'start'],[-r-3,th*0.35,'end'],[0,-r-4,'middle'],[0,r+th,'middle'],[r*0.7+2,-r*0.7-2,'start'],[-r*0.7-2,-r*0.7-2,'end'],[r*0.7+2,r*0.7+th,'start'],[-r*0.7-2,r*0.7+th,'end']];
  for(const[dx,dy,a]of C){const x=it.x+dx,y=it.y+dy;const x0=a==='start'?x:a==='end'?x-tw:x-tw/2;const b={x0:x0-2,y0:y-th*1.05,x1:x0+tw,y1:y+th*0.4};
   if(b.x0<pdL||b.x1>w-2||b.y0<2||b.y1>h-pdL)continue;if(placed.some(p=>!(b.x1<p.x0||b.x0>p.x1||b.y1<p.y0||b.y0>p.y1)))continue;placed.push(b);return{...it,lx:x,ly:y,anchor:a}}
  return{...it,skip:true}})}
function vNiches(){const [k,d]=S.nsort;const cols=[['score','cScore'],['idea','cNiche'],['units','cUnits'],['D','cDemand'],['C','cComp'],['top3','cTop3'],['top10','cTop10'],['tv','cTrend'],['adm','cAds'],['sat','cSat']];
 const L=[...S.N].sort((a,b)=>{let x=a[k],y=b[k];if(k==='idea'){x=nname(a);y=nname(b);return d*x.localeCompare(y)}x=x??-1e9;y=y??-1e9;return d*((x>y)-(x<y))});
 const bar=(v,c)=>`<div class="bar ${c||''}"><i style="width:${Math.round((v||0)*100)}%"></i></div>`;
 const table=`<div class="tablewrap"><table><thead><tr>${cols.map(([c,l])=>`<th data-ns="${c}">${t(l)}${k===c?(d>0?' ▲':' ▼'):''}</th>`).join('')}</tr></thead><tbody>
 ${L.map(n=>`<tr data-go="#/niche/${n.k}" style="cursor:pointer"><td>${badge(n.score)}</td><td><b>${esc(nname(n))}</b><div class="small muted">${esc(cat(n.cat))}</div></td><td>${fmt(n.units)}</td><td>${bar(n.D)}</td><td>${bar(n.C,'c')}</td>
 <td>${n.top3!=null?Math.round(n.top3*100)+'%':'–'}</td><td>${n.top10!=null?fmt(n.top10):'–'}</td><td>${n.tv==null?'–':(n.tv>0?'↑ +':n.tv<0?'↓ ':'→ ')+n.tv+'%'}</td><td>${n.adm?fmt(n.adm):'–'}</td><td>${label(n)}</td></tr>`).join('')}</tbody></table></div>`;
 const mob=innerWidth<760,w=640,h=mob?560:440,pd=mob?40:46,fs=mob?19:12;const Cs=S.N.map(n=>n.C),Ds=S.N.map(n=>n.D),c0=Math.min(...Cs)-.03,c1=Math.max(...Cs)+.03,d0=Math.min(...Ds)-.03,d1=Math.max(...Ds)+.03;
 const med=a=>[...a].sort((x,y)=>x-y)[a.length>>1];const sx=c=>pd+(c-c0)/(c1-c0)*(w-2*pd),sy=v=>h-pd-(v-d0)/(d1-d0)*(h-2*pd);const mu=Math.max(...S.N.map(n=>n.units))||1;
 const rr=n=>(mob?5:4)+(mob?16:14)*Math.sqrt(n.units/mu);
 const lab=placeLabels(S.N.filter(n=>n.short).sort((a,b)=>b.score-a.score||b.units-a.units).map(n=>({n,x:sx(n.C),y:sy(n.D),r:rr(n),text:nshort(n)})),w,h,fs,pd);
 const skipped=lab.filter(x=>x.skip).map(x=>x.n);
 const chart=`<svg class="scatter" viewBox="0 0 ${w} ${h}" role="img" style="direction:ltr"><rect x="${pd}" y="${pd}" width="${sx(med(Cs))-pd}" height="${sy(med(Ds))-pd}" fill="#f0fdf4"/><text x="${pd+8}" y="${pd+fs+4}" font-size="${fs}" fill="#166534">★ ${esc(t('sweet'))}</text>
 <line x1="${pd}" y1="${h-pd}" x2="${w-pd}" y2="${h-pd}" stroke="#94a3b8"/><line x1="${pd}" y1="${pd}" x2="${pd}" y2="${h-pd}" stroke="#94a3b8"/>
 <text x="${w/2}" y="${h-10}" text-anchor="middle" font-size="${fs+1}" fill="#5b6875">${t('chartX')}</text><text x="${fs}" y="${h/2}" text-anchor="middle" font-size="${fs+1}" fill="#5b6875" transform="rotate(-90 ${fs} ${h/2})">${t('chartY')}</text>
 ${S.N.map(n=>`<a href="#/niche/${n.k}"><circle cx="${sx(n.C)}" cy="${sy(n.D)}" r="${rr(n)}" fill="${n.sat?'#7c3aed':n.short?'#16a34a':'#0ea5e9'}" fill-opacity=".5" stroke="#fff"><title>${esc(nname(n))} · ${n.score}/10 · ${fmt(n.units)}</title></circle></a>`).join('')}
 ${lab.filter(x=>!x.skip).map(x=>`<text class="nl" x="${x.lx.toFixed(1)}" y="${x.ly.toFixed(1)}" text-anchor="${x.anchor}" font-size="${fs}" fill="#14202b" paint-order="stroke" stroke="#fff" stroke-width="3" stroke-linejoin="round">${esc(x.text)}</text>`).join('')}</svg>
 <p class="small muted">${t('chartNote')} <span class="pill opp">● ${t('lblOpp')}</span><span class="pill sat">● ${t('lblSat')}</span></p>
 ${skipped.length?`<div class="small"><span class="muted">${t('chartMore')}</span> ${skipped.map(n=>`<a class="pill" href="#/niche/${n.k}">${n.score} · ${esc(nshort(n))}</a>`).join('')}</div>`:''}`;
 return `<h1>${t('nichesT')}</h1><p class="muted">${t('nichesS')} ${est()}</p><div class="tabs" style="margin-bottom:10px"><button data-ntab="table" class="${S.ntab==='table'?'on':''}">${t('tTable')}</button><button data-ntab="chart" class="${S.ntab==='chart'?'on':''}">${t('tChart')}</button></div>${S.ntab==='table'?table:chart}`}
function metric(v,l){return `<div class="metric"><b>${v}</b><span>${l}</span></div>`}
function histBlock(title,vals,fmtv,c){const [a,b]=firstLast(vals);const sp=spark(vals,{w:150,h:40,c});return `<div class="hb"><div class="small muted">${title}</div><div class="row" style="gap:10px;flex-wrap:nowrap"><b>${fmtv(b)}</b>${sp}</div><div class="small ${b>a?'up':b<a?'down':'muted'}">${b===a?t('noChange'):t('sinceD',(fmtv===rs?(b>a?'+':'−')+rs(Math.abs(b-a)):sgn(b-a)),dShort(S.H.d[0]))}</div></div>`}
function histCardN(n){if(!n.h)return `<div class="card hist"><h3>📈 ${t('hist')}</h3><p class="small muted" style="margin:0">${t('histStartN',dDate(S.M.first))}</p></div>`;
 return `<div class="card hist"><h3>📈 ${t('hist')}</h3><div class="grid g3">${histBlock(t('hUnits'),n.h.u,fmt)}${histBlock(t('hWeek'),n.h.w,fmt,'#0ea5e9')}${histBlock(t('hScore'),n.h.s,fmt,'#7c3aed')}${histBlock(t('hSold'),n.h.sold,fmt)}${histBlock(t('hPrice'),n.h.p,rs,'#f59e0b')}${histBlock(t('hRev'),n.h.rv,fmt,'#7c3aed')}</div><p class="small muted">${t('cohortNote')}</p></div>`}
function histCardP(p){const h=ph(p);if(!h)return `<div class="card hist"><h3>📈 ${t('hist')}</h3><p class="small muted" style="margin:0">${t('histStart',dDate(S.M.first))}</p></div>`;
 return `<div class="card hist"><h3>📈 ${t('hist')}</h3><div class="grid g3">${histBlock(t('hSold'),h[1],fmt)}${histBlock(t('hPrice'),h[0],rs,'#f59e0b')}${histBlock(t('hRev'),h[2],fmt,'#7c3aed')}</div></div>`}
function vNiche(key){const n=nByKey(key);if(!n)return vHome();const i=n.i;const P=S.P.filter(p=>p.n===i).slice(0,30);
 const stp=[['s1','st1'],['s2','st2'],['s3','st3'],['s4','st4']];
 return `${previewBar()}<a href="#/niches" class="small">← ${t('back')}</a><div class="row" style="margin-top:8px">${badge(n.score)}<h1 style="flex:1">${esc(nname(n))}</h1>${star('n',n.k)}</div>
 <div>${label(n)}<span class="pill">${tier(n.score)}</span>${adPill(n)}<span class="pill">${esc(cat(n.cat))}</span>${n.tags.map(k=>`<span class="pill season">${t('se')[k]}</span>`).join('')}${est()}</div>
 <div class="grid g4" style="margin-top:12px">${metric(fmt(n.units),t('estUnits'))}${metric(rs(n.rev),t('estRev'))}${metric(n.margin>0?rs(n.margin):'–',t('margin'))}${metric(n.p25?rs(n.p25)+'–'+fmt(n.p75):'–',t('priceBand'))}
 ${metric(fmt(n.listings),t('listings'))}${metric(fmt(n.sellers),t('sellers'))}${metric(n.top3!=null?Math.round(n.top3*100)+'%':'–',t('top3'))}${metric(n.top10!=null?fmt(n.top10)+' '+t('reviews'):'–',t('top10'))}
 ${hasHist()?metric(fmt(n.u7),t('u7'))+metric(fmt(n.u30),t('u30')):''}${n.cost?metric(rs(n.cost),t('costEst')+' · '+costLabel(n.cb)):''}</div>
 <div style="margin-top:12px">${histCardN(n)}</div>
 <div class="grid g2" style="margin-top:12px"><div class="card"><h3>${t('steps')}</h3><ul class="ev">${stp.map(([k,l])=>`<li><span class="ic">${n[k]?'✅':'⏳'}</span>${t(l)}</li>`).join('')}</ul></div>
 <div class="card"><h3>${t('evid')}</h3><ul class="ev">${evidence(n).map(([i_,s])=>`<li><span class="ic">${i_}</span><span>${s}</span></li>`).join('')}</ul></div></div>
 <div class="note" style="margin-top:12px"><h3>${t('why')}</h3>${why(n).map(s=>`<div>• ${esc(s)}</div>`).join('')}</div>
 <h2>${t('productsIn')}</h2><div class="plist">${P.map(prodCard).join('')||`<div class="card muted">–</div>`}</div>`}
function vProduct(key){const p=S.PK[key];if(!p)return vFinder();const n=p.n>=0?S.N[p.n]:null;
 return `${previewBar()}<a href="javascript:history.back()" class="small">← ${t('back')}</a><div class="row" style="margin-top:8px">${n?badge(n.score):''}<h1 style="flex:1">${esc(p.t)}</h1>${star('p',p.k)}</div>
 ${n?`<div><a href="#/niche/${n.k}">${esc(nname(n))}</a> · ${label(n)}<span class="pill">${tier(n.score)}</span>${adPill(n)}${est()}</div>`:''}
 <div class="grid g4" style="margin-top:12px">${metric(rs(p.p)+(p.op?` <s class="small muted">${fmt(p.op)}</s>`:''),t('price'))}${metric(fmt(p.u),t('estUnits'))}${metric(rs(p.u*p.p),t('estRev'))}${metric(rs(p.m),t('margin'))}
 ${hasHist()&&p.u7!=null?metric(fmt(p.u7),t('u7'))+metric(fmt(p.u30),t('u30')):''}
 ${metric(n&&n.p25?rs(n.p25)+'–'+fmt(n.p75):'–',t('band'))}${metric(fmt(p.rev),t('reviews'))}${metric(p.rt?'★ '+p.rt.toFixed(1):'–',t('rating'))}${metric(rs(p.mc),t('costEst')+' · '+costLabel(p.cb))}</div>
 <p class="small muted" style="margin:8px 0 0">${p.cb==='m'?'✓ '+esc(t('matchedTo',p.mt,Math.round(p.ms*100)))+' ':''}${t('costTip')}</p>
 <div style="margin-top:12px">${histCardP(p)}</div>
 <div class="grid g2" style="margin-top:12px"><div class="card"><h3>${t('evid')}</h3><ul class="ev">${evidence(n,p).map(([i_,s])=>`<li><span class="ic">${i_}</span><span>${s}</span></li>`).join('')}</ul></div>
 <div class="note"><h3>${t('why')}</h3>${why(n,p).map(s=>`<div>• ${esc(s)}</div>`).join('')}</div></div>
 <div class="row" style="margin-top:14px"><a class="btn" href="#/calc?p=${p.p}&c=${p.mc}">🧮 ${t('calcThis')}</a><button class="btn" disabled title="coming soon">⬇️ ${t('importBtn')}</button></div>
 <p class="small muted">${t('demoNote',dDate(S.M.first))}</p>`}
// ---------- keyword demand
const pctOf=(arr,v)=>{if(!arr||!arr.length)return .5;let c=0;for(const x of arr)if(x<=v)c++;return c/arr.length};
const clamp=v=>Math.max(0,Math.min(1,v));
function kwAlts(tok){const s=new Set([tok]);(S.K.syn[tok]||[]).forEach(x=>s.add(x));return [...s].map(a=>a.split(' '))}
function tokHit(words,q){if(q.length<3)return words.includes(q);const q2=q.length>3&&q.endsWith('s')?q.slice(0,-1):q;return words.some(w=>w.startsWith(q2))}
function kwSearch(q){const raw=(q||'').toLowerCase().replace(/[^\p{L}\p{N}\s'-]/gu,' ').trim();if(!raw)return null;
 const toks=raw.split(/\s+/).filter(Boolean);const groups=toks.map(kwAlts);
 const M=S.P.filter(p=>groups.every(g=>g.some(alt=>alt.every(a=>tokHit(p._kw,a)))));
 const also=[...new Set(toks.flatMap(x=>S.K.syn[x]||[]))].filter(x=>!toks.includes(x));
 if(!M.length)return{raw,M,also};
 const units=M.reduce((s,p)=>s+p.u,0);const pr=M.map(p=>p.p).sort((a,b)=>a-b);const q_=f=>pr[Math.min(pr.length-1,Math.floor(f*pr.length))];
 const top=[...M].sort((a,b)=>b.u-a.u);const top10=top.slice(0,10);const t10=top10.reduce((s,p)=>s+p.rev,0)/top10.length;
 const bySl={};M.forEach(p=>{bySl[p.sl]=(bySl[p.sl]||0)+p.u});const sv=Object.values(bySl).sort((a,b)=>b-a);const top3=units?sv.slice(0,3).reduce((a,b)=>a+b,0)/units:null;
 const mg=M.map(p=>p.m).sort((a,b)=>a-b),mp=M.map(p=>p.m/p.p).sort((a,b)=>a-b);const medM=mg[mg.length>>1],medMp=mp[mp.length>>1];
 const nc={};M.forEach(p=>{if(p.n>=0)nc[p.n]=(nc[p.n]||0)+p.u});const nl=Object.entries(nc).sort((a,b)=>b[1]-a[1]).map(([i])=>S.N[+i]);const dom=nl[0]||null;
 let tr=null,trKey=null;const cands=[raw,...toks.flatMap(x=>S.K.syn[x]||[]),...also];
 for(const c of cands){if(S.K.tr[c]){tr=S.K.tr[c];trKey=c;break}}
 if(!tr&&raw.length>=4){for(const k of Object.keys(S.K.tr)){if(k.includes(raw)||raw.includes(k)){tr=S.K.tr[k];trKey=k;break}}}
 const tv=tr&&tr.v!=null?tr.v:(dom?dom.tv:null);
 const D=pctOf(S.M.pct.u,Math.log1p(units));const C=0.35*pctOf(S.M.pct.l,Math.log1p(M.length))+0.35*pctOf(S.M.pct.r,t10)+0.30*(top3??.5);
 const Mg=clamp(medMp/0.5);const tvv=tv==null?.5:clamp(.5+tv/100);const sea=dom&&dom.season==='winter'?1:.6;const Tt=.6*tvv+.4*sea;
 const score=Math.max(1,Math.min(10,Math.round(1+9*(.35*D+.25*(1-C)+.2*Mg+.2*Tt))));
 return{raw,M,also,units,p10:q_(.1),p90:q_(.9),med:q_(.5),t10,sellers:sv.length,top3,medM,medMp,nl,dom,tr,trKey,tv,score,parts:{D,C,M:Mg,T:Tt},top}}
function vKw(){const q=new URLSearchParams(location.hash.split('?')[1]||'').get('q')||'';
 return `<h1>${t('kwT')}</h1><p class="muted">${t('kwS')}</p>
 <form class="kwform" id="kwForm"><input type="search" id="kwIn" value="${esc(q)}" placeholder="${esc(t('kwPh'))}" autocomplete="off" enterkeyhint="search" aria-label="${esc(t('kwT'))}"><button class="btn" type="submit">${t('kwGo')}</button></form>
 <div class="row small" style="margin:8px 0 4px"><span class="muted">${t('kwTry')}</span>${S.K.sugg.map(s=>`<a class="pill" href="#/kw?q=${encodeURIComponent(s)}">${esc(s)}</a>`).join('')}</div>
 <div id="kwRes">${kwResults(q)}</div>`}
function kwResults(q){const r=kwSearch(q);if(!r)return'';if(!r.M.length)return `<div class="card empty muted">${esc(t('kwNone',q))}</div>`;
 const par=[[t('pDemand'),r.parts.D],[t('pRoom'),1-r.parts.C],[t('pMargin'),r.parts.M],[t('pTiming'),r.parts.T]];
 const W_=[];if(r.units>=150)W_.push(t('kwWUnits',fmt(r.units)));if(r.t10<=150)W_.push(t('kwWBeat',fmt(r.t10)));if(r.sellers>=10&&(r.top3??1)<.5)W_.push(t('kwWSpread',fmt(r.sellers)));
 if(r.medM>=250)W_.push(t('kwWMargin',rs(r.medM)));if(r.tv>0)W_.push(t('kwWUp'));if(r.dom&&r.dom.tags.includes('winter'))W_.push(t('kwWSeason'));if(r.dom&&r.dom.adm>=6)W_.push(t('kwWAds',r.dom.adm));if(!W_.length)W_.push(t('kwWBase'));
 const trTxt=r.tv==null?t('kwTrendNone'):r.tv>0?t('kwTrendUp','+'+r.tv):r.tv<0?t('kwTrendDown',r.tv):t('kwTrendFlat');
 return `<div class="card kwhead" style="margin-top:10px"><div class="row" style="flex-wrap:nowrap;align-items:flex-start">${badge(r.score)}<div style="flex:1;min-width:0"><h3 style="margin:0">${t('kwScoreT')}: “${esc(r.raw)}”</h3>
 <div><span class="pill">${tier(r.score)}</span>${est()}${r.dom?`<span class="pill">${esc(t('kwNiche',nname(r.dom)))}</span>`:''}</div>${r.also.length?`<div class="small muted">${esc(t('kwAlso',r.also.join(', ')))}</div>`:''}</div></div>
 <div class="parts">${par.map(([l,v])=>`<div><span class="small muted">${l}</span><div class="bar"><i style="width:${Math.round(v*100)}%"></i></div></div>`).join('')}</div></div>
 <div class="grid g4" style="margin-top:12px">${metric(fmt(r.M.length),t('kwMatches'))}${metric(fmt(r.units),t('estUnits'))}${metric(rs(r.med),t('kwMed'))}${metric(rs(r.p10)+'–'+fmt(r.p90),t('kwRange'))}
 ${metric(fmt(r.t10),t('kwTop10'))}${metric(fmt(r.sellers),t('kwSellers'))}${metric(r.top3!=null?Math.round(r.top3*100)+'%':'–',t('kwTop3'))}${metric(rs(r.medM),t('kwMargin'))}</div>
 <div class="grid g2" style="margin-top:12px"><div class="card"><h3>🔎 ${t('kwTrendT')}</h3>${r.tr&&r.tr.s?`<div class="trendsp">${spark(r.tr.s,{w:300,h:60})}</div>`:''}<p class="small" style="margin:6px 0 0">${trTxt}</p>
 ${r.dom?`<p class="small" style="margin:6px 0 0">📣 ${r.dom.adm?t('evAds',r.dom.adm,monthName(r.dom.ads)):t('evAdsNo')}</p>`:''}</div>
 <div class="note"><h3>${t('kwWhy')}</h3>${W_.map(s=>`<div>• ${esc(s)}</div>`).join('')}</div></div>
 ${r.nl.length?`<h2>${t('kwNiches')}</h2><div>${r.nl.slice(0,6).map(n=>`<a class="pill" href="#/niche/${n.k}">${n.score} · ${esc(nname(n))}</a>`).join('')}</div>`:''}
 <h2>${t('kwTopL')}</h2><div class="plist">${r.top.slice(0,12).map(prodCard).join('')}</div>`}
// ---------- how scores work
function vHow(){const blk=(i,ti,tx)=>`<div class="card how"><div class="hnum">${i}</div><div><h3>${t(ti)}</h3><p>${t(tx)}</p></div></div>`;
 return `<h1>${t('howT')}</h1><p class="muted">${t('howS')}</p><div class="grid g2">${blk('1','h1T','h1')}${blk('2','h2T','h2')}${blk('3','h3T','h3')}${blk('4','h4T','h4')}</div>
 <div class="card" style="margin-top:12px"><h3>${t('hsT')}</h3><p>${t('hs')}</p><ul class="ev">${[['📈','hsD'],['🚪','hsC'],['💰','hsM'],['⏱️','hsTm']].map(([i,k])=>`<li><span class="ic">${i}</span><span>${t(k)}</span></li>`).join('')}</ul>
 <p class="small" style="margin-top:10px">${badge(9)} ${badge(7)} ${badge(5)} ${t('hsTiers')}</p></div>
 <div class="grid g3" style="margin-top:12px"><div class="card"><h3>${t('hsalT')}</h3><p class="small">${t('hsal',S.M.spr?S.M.spr.toFixed(1):'5')}</p></div><div class="card"><h3>${t('hcostT')}</h3><p class="small">${t('hcost')}</p></div><div class="card"><h3>${t('hkwT')}</h3><p class="small">${t('hkw')}</p><a class="btn ghost" href="#/kw">🔤 ${t('seeKw')}</a></div></div>
 <p class="small muted" style="margin-top:12px">${esc(t('dataLabel'))} · ${trackLine()}</p>`}
function vCalc(){const q=new URLSearchParams(location.hash.split('?')[1]||'');const v={p:q.get('p')||1500,c:q.get('c')||1000,co:200,pk:30,fee:5,ad:0,n:60};
 const f=(k,l)=>`<label>${t(l)}<input type="text" inputmode="decimal" data-dec="1" autocomplete="off" data-c="${k}" value="${esc(v[k])}" placeholder="0"></label>`;
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
 <div style="flex:1"><h3>${t('se')[s.k]}</h3><div class="small">${s.tip[S.lang]}</div><div style="margin-top:6px">${ns.map(n=>`<a class="pill" href="#/niche/${n.k}">${n.score} · ${esc(nname(n))}</a>`).join('')}</div>
 <a class="small" href="#/finder" data-presetlink="${s.k}">${t('ideasFor')} →</a></div></div>`}).join('')}</div>`}
// ---------- tracker: changes since saved
function chg(label,a,b,money){if(a==null||b==null)return'';const d=b-a;const cls=d>0?'up':d<0?'down':'muted';
 const v=d===0?t('noChange'):(money?(d>0?'+':'−')+rs(Math.abs(d)):sgn(d));return `<span class="chg"><span class="muted">${label}</span> <b class="${cls}">${v}</b></span>`}
function histAt(arr,dates,iso){if(!arr)return null;let v=null;for(let i=0;i<dates.length;i++){if(dates[i]<=iso&&arr[i]!=null)v=arr[i]}return v}
function trackerDelta(x){const newer=S.M.iso>(x.sd||'');
 if(!newer)return `<div class="small muted trk">🕒 ${t('trkWait',dDate(x.at))}</div>`;
 let parts='';
 if(x.ty==='p'){const p=S.PK[x.id];const h=ph(p);let sold0=x.sold;if(h&&sold0==null)sold0=histAt(h[1],S.H.d,x.sd);
  parts=chg(t('trkPrice'),x.price,p.p,true)+chg(t('trkUnits'),x.u,p.u)+chg(t('trkRev'),x.rev,p.rev)+(h&&sold0!=null?chg(t('hSold'),sold0,soldNow(p)):'')}
 else{const n=S.NK[x.id];parts=chg(t('trkScore'),x.score,n.score)+chg(t('trkUnits'),x.u,n.units)+chg(t('listings'),x.l,n.listings)}
 return `<div class="small trk"><div class="muted">📌 ${t('trkSince',dDate(x.at))}</div><div class="row" style="gap:4px 14px">${parts}</div></div>`}
function vTracker(){const L=W.get().filter(x=>x.ty==='p'?S.PK[x.id]:S.NK[x.id]);return `${previewBar()}<h1>${t('trackerT')}</h1><p class="muted">${t('trackerS')}</p><p class="small muted">${trackLine()}</p>${L.length?`<div class="plist">${L.map(x=>{
 if(x.ty==='p'){const p=S.PK[x.id];return `<div><div class="small muted">${t('typeP')} · ${t('saved',dDate(x.at))}</div>${prodCard(p)}${trackerDelta(x)}</div>`}
 const n=S.NK[x.id];return `<div><div class="small muted">${t('typeN')} · ${t('saved',dDate(x.at))}</div>${ideaCard(n)}${trackerDelta(x)}</div>`}).join('')}</div>`:`<div class="card empty muted">${t('emptyT')}</div>`}`}
// ---------- router
function render(){const h=location.hash||'#/home';const [_,r,a]=h.split('?')[0].split('/');let html;
 if(r==='finder')html=vFinder();else if(r==='niches')html=vNiches();else if(r==='niche')html=vNiche(decodeURIComponent(a||''));else if(r==='p')html=vProduct(decodeURIComponent(a||''));
 else if(r==='kw')html=vKw();else if(r==='how')html=vHow();
 else if(r==='calc')html=vCalc();else if(r==='seasons')html=vSeasons();else if(r==='tracker')html=vTracker();else html=vHome();
 document.getElementById('app').innerHTML=html;nav();if(r==='calc')calc();
 document.getElementById('banner').textContent=t('banner')+' · '+t('dataLabel');document.getElementById('foot').textContent=t('foot');
 document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));document.title=t('appName')}
function rerenderFinder(){sessionStorage.setItem('pf_f',JSON.stringify(S.f));const y=scrollY;const a=document.activeElement?.dataset?.f;render();window.scrollTo(0,y);if(a){const e=document.querySelector(`[data-f="${a}"]`);if(e&&e.type==='number'){e.focus();const l=e.value.length;try{e.setSelectionRange(l,l)}catch(_){}}}}
const PRESETS={winter:{season:'winter'},beat:{beat:true,margin:250,units:5},ads:{ads:true},under:{pmax:999,units:5},wedding:{season:'wedding'}};
document.addEventListener('click',e=>{const st=e.target.closest('[data-star]');if(st){e.stopPropagation();const i=st.dataset.star.indexOf(':');W.toggle(st.dataset.star.slice(0,i),st.dataset.star.slice(i+1));const y=scrollY;render();scrollTo(0,y);return}
 const pr=e.target.closest('[data-preset]');if(pr){S.f={...DEF,...PRESETS[pr.dataset.preset]};S.shown=40;rerenderFinder();return}
 const pl=e.target.closest('[data-presetlink]');if(pl){S.f={...DEF,season:pl.dataset.presetlink};sessionStorage.setItem('pf_f',JSON.stringify(S.f))}
 if(e.target.closest('[data-reset]')){S.f={...DEF};rerenderFinder();return}
 if(e.target.closest('[data-more]')){S.shown+=40;updateFinder();return}
 const ns=e.target.closest('[data-ns]');if(ns){const k=ns.dataset.ns;S.nsort=[k,S.nsort[0]===k?-S.nsort[1]:(k==='idea'?1:-1)];render();return}
 const nt=e.target.closest('[data-ntab]');if(nt){S.ntab=nt.dataset.ntab;render();return}
 const go=e.target.closest('[data-go]');if(go&&!e.target.closest('a')){location.hash=go.dataset.go}});
document.addEventListener('submit',e=>{if(e.target.id==='kwForm'){e.preventDefault();const v=document.getElementById('kwIn').value.trim();location.hash='#/kw'+(v?'?q='+encodeURIComponent(v):'')}});
let tm,tk;document.addEventListener('input',e=>{if(e.target.id==='kwIn'){clearTimeout(tk);const v=e.target.value;tk=setTimeout(()=>{document.getElementById('kwRes').innerHTML=kwResults(v);history.replaceState(null,'','#/kw'+(v.trim()?'?q='+encodeURIComponent(v.trim()):''))},350);return}
 const k=e.target.dataset.f;if(k){getF();S.f[k]=e.target.type==='checkbox'?e.target.checked:e.target.dataset.num?cleanNum(e.target):e.target.value;S.shown=40;clearTimeout(tm);tm=setTimeout(updateFinder,e.target.dataset.num?300:0)}
 if(e.target.dataset.c){cleanNum(e.target);calc()}});
document.addEventListener('toggle',e=>{if(e.target.classList?.contains('fbox'))S.fopen=e.target.open},true);
window.addEventListener('hashchange',()=>{S.shown=40;render();window.scrollTo(0,0)});
let rz;window.addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(()=>{if((location.hash||'').startsWith('#/niches')&&S.ntab==='chart')render()},250)});
function setLang(l){S.lang=l;localStorage.setItem('pf_lang',l);document.documentElement.lang=l;document.documentElement.dir=l==='ur'?'rtl':'ltr';document.getElementById('langBtn').textContent=l==='ur'?'English':'اردو';render()}
document.getElementById('langBtn').onclick=()=>setLang(S.lang==='ur'?'en':'ur');
fetch('data/meta.json?t='+Date.now()).then(r=>r.json()).then(M=>{const v='?v='+encodeURIComponent((M.iso||'')+'-'+(M.built||''));
 return Promise.all(['products','niches','history','kw'].map(n=>fetch('data/'+n+'.json'+v).then(r=>r.json()))).then(([P,N,H,K])=>{
 S.M=M;S.P=P;S.N=N;S.H=H||{d:[],p:{}};S.K=K||{syn:{},tr:{},sugg:[]};S.PK={};S.NK={};P.forEach(p=>{S.PK[p.k]=p;p._kw=(p.kw||p.t.toLowerCase()).split(' ')});N.forEach(n=>S.NK[n.k]=n);
 setLang(S.lang);window.__ready=true})});

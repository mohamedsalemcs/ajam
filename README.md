# أجام — Ajam Real Estate Website

موقع عقاري سعودي، **عربي / RTL** بالكامل، يعمل **دون اتصال** (خطوط وصور وشعارات محلية).
مبني بـ **React + Vite + Tailwind CSS**.

## الأساس البصري — نظام التصميم (Design System)

- **الاتجاه:** RTL فقط (`<html dir="rtl" lang="ar">`).
- **الألوان:** رموز العلامة الكاملة (Heritage Red / Teal / Gold / Mint / Neutrals) في
  [tailwind.config.js](tailwind.config.js).
- **الخطوط (محلية):** Tajawal للعناوين، IBM Plex Sans Arabic للنصوص — ملفات `.woff2`
  داخل [assets/Fonts](assets/Fonts) و [public/assets/Fonts](public/assets/Fonts)،
  بدون أي اتصال بـ Google Fonts أو CDN.
- **الشعار:** أصول العلامة الرسمية فقط من [assets/Brand](assets/Brand).
- **الصور:** صور عقارية محلية مولّدة كـ SVG ([ProjectImage](src/components/media/ProjectImage.jsx)) — لا صور خارجية.
- **المكوّنات:** [src/components/ui](src/components/ui), [src/components/layout](src/components/layout), [src/components/project](src/components/project).

## الصفحات النهائية (Final Pages)

| المسار | الصفحة |
|---|---|
| `/` | الرئيسية — هيرو سينمائي، إحصاءات متحركة، مشاريع، فرص، آراء عملاء |
| `/projects` | قائمة المشاريع — بطاقات بالصور + فلترة (الحالة/الحي/النوع) |
| `/projects/:slug` | **تفاصيل المشروع** — معرض صور بـ lightbox، جدول الوحدات (متاح/محجوز/مباع)، خطط السداد، المرافق، المخطط، الموقع، **كتيب المشروع داخل الصفحة فقط**، نموذج تسجيل اهتمام، شريط إجراءات لاصق |
| `/investor` | الاستثمار — حاسبة عائد تفاعلية + فرص |
| `/about` | من نحن — القصة، الركائز، الخط الزمني، الاعتمادات، سجل الإنجاز |
| `/faq` | الأسئلة الشائعة |
| `/contact` | تواصل معنا — نموذج بأنواع طلبات (prefill من المشروع) |
| `/privacy` · `/terms` | الصفحات القانونية |

**لا توجد صفحة «مركز تحميل».** كتيب كل مشروع يعيش داخل صفحة المشروع فقط.

### الصور (offline)
صور عقارية حقيقية محمّلة مرة واحدة محليًا في [assets/Images](assets/Images) وتُقدَّم من `public/assets/Images` — لا CDN ولا روابط خارجية.

### الحركة (Motion)
[Reveal](src/components/motion/Reveal.jsx) (scroll-reveal) · [Counter](src/components/motion/Counter.jsx) (أرقام متحركة) · Ken-Burns للصور · معرض lightbox · شريط إجراءات لاصق.

> مرجع الهوية الحقيقي: ajamksa.com · مرجع التصميم: [Design System](references/AJAM_Design_System_Claude_Guide_AR_RTL_Offline.md)

## التشغيل

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # ناتج الإنتاج في dist/
```

## بنية الأصول (offline-first)

```
assets/Brand     شعارات العلامة (default / secondary / app-icon)
assets/Fonts     ملفات الخطوط المحلية .woff2
public/assets    نسخة الأصول التي يقدّمها Vite على المسار /assets/...
```

## المراحل القادمة

| المرحلة | النطاق |
|---|---|
| 2 | الصفحة الرئيسية + من نحن + التنقّل والفوتر |
| 3 | قائمة المشاريع + صفحة تفاصيل المشروع |
| 4 | طبقة التحويل + التواصل + المستثمر/ROI |
| 5 | SEO + المدوّنة + الجاهزية التشغيلية |

كل مرحلة تُسلّم وتُراجَع قبل الانتقال للتالية.

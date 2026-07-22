"use client";

import { useEffect, useState } from "react";
import { Search, Menu as MenuIcon, X, ChevronDown, FileText, Headphones, PackageSearch, ArrowLeft, SlidersHorizontal } from "lucide-react";

type Lang = "fa" | "en";

const products = [
  { key: "ink", code: "01", titleFa: "مرکب چاپ افست", titleEn: "Offset Printing Inks", descFa: "مرکب‌های چهاررنگ Process با ثبات رنگ، خشک‌شوندگی کنترل‌شده و عملکرد مطمئن در تیراژ بالا.", descEn: "Process inks engineered for consistent color, controlled drying and reliable high-volume performance.", tags: ["CMYK", "Sheet-fed", "Speedy Series"], tone: "ink" },
  { key: "blanket", code: "02", titleFa: "بلنکت چاپ", titleEn: "Printing Blankets", descFa: "بلنکت‌های حرفه‌ای برای چاپ شیت، بسته‌بندی و UV با انتقال دقیق نقطه و دوام صنعتی.", descEn: "Professional sheet-fed, packaging and UV blankets with precise dot transfer and industrial durability.", tags: ["Sheet-fed", "UV", "Packaging"], tone: "blanket" },
  { key: "chemical", code: "03", titleFa: "مواد شیمیایی چاپ", titleEn: "Pressroom Chemicals", descFa: "محلول‌های تخصصی برای شست‌وشو، نگهداری و بهینه‌سازی عملکرد ماشین‌آلات چاپ.", descEn: "Specialized solutions for cleaning, maintenance and optimized pressroom performance.", tags: ["Blanket Wash", "Fountain", "Plate Care"], tone: "chemical" },
  { key: "supply", code: "04", titleFa: "ملزومات چاپخانه", titleEn: "Pressroom Consumables", descFa: "مجموعه‌ای انتخاب‌شده از اقلام مصرفی و فنی برای جریان کاری بدون توقف چاپخانه.", descEn: "A curated range of technical consumables for uninterrupted pressroom workflows.", tags: ["Consumables", "Tools", "Support"], tone: "supply" },
];

const slides = [
  { image: "./images/hero-press.png", kickerFa: "مواد چاپ و تأمین صنعتی", kickerEn: "PRINTING MATERIALS / INDUSTRIAL SUPPLY", titleFa: <>فراتر از محصول،<br/>ساختن اعتماد.</>, titleEn: <>Beyond products,<br/>building confidence.</>, bodyFa: "سیوان نوا پارسی ما، تأمین‌کننده تخصصی مواد مصرفی چاپ برای مجموعه‌هایی است که کیفیت فنی و تأمین پایدار را جدی می‌گیرند.", bodyEn: "Specialized printing materials for businesses that value technical quality, continuity and dependable supply." },
  { image: "./images/hero-inks.png", kickerFa: "مرکب‌های تخصصی چاپ افست", kickerEn: "PROFESSIONAL OFFSET INKS", titleFa: <>رنگ دقیق،<br/>در هر تیراژ.</>, titleEn: <>Precise color,<br/>run after run.</>, bodyFa: "مرکب‌های Process با ثبات رنگ، خشک‌شوندگی کنترل‌شده و عملکرد مطمئن برای چاپ حرفه‌ای و تیراژهای مستمر.", bodyEn: "Process inks with color consistency, controlled drying and dependable performance for professional pressrooms." },
  { image: "./images/hero-blanket.png", kickerFa: "بلنکت‌های حرفه‌ای چاپ", kickerEn: "PREMIUM PRINTING BLANKETS", titleFa: <>انتقال بی‌نقص،<br/>دوام واقعی.</>, titleEn: <>Perfect transfer,<br/>lasting performance.</>, bodyFa: "بلنکت‌های تخصصی شیت، بسته‌بندی و UV با انتقال دقیق نقطه و ساختار مقاوم برای عملکرد صنعتی.", bodyEn: "Specialized sheet-fed, packaging and UV blankets engineered for precise dot transfer and industrial durability." },
];

const catalogImages: Record<string, string> = { ink: "./images/hero-inks.png", blanket: "./images/hero-blanket.png", chemical: "./images/hero-press.png", supply: "./images/hero-press.png" };

export default function Home() {
  const [lang, setLang] = useState<Lang>("fa");
  const [menu, setMenu] = useState(false);
  const [inquiry, setInquiry] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [catalogFilter, setCatalogFilter] = useState("all");
  const [activeSlide, setActiveSlide] = useState(0);
  const fa = lang === "fa";

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setSearchOpen(true); }
      if (event.key === "Escape") { setSearchOpen(false); setMegaOpen(false); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const nav = fa
    ? [["محصولات", "#products"], ["مزیت سیوان", "#why"], ["درباره ما", "#about"], ["تماس", "#contact"]]
    : [["Products", "#products"], ["Why Seeone", "#why"], ["About", "#about"], ["Contact", "#contact"]];

  return (
    <main dir={fa ? "rtl" : "ltr"} className={fa ? "lang-fa" : "lang-en"}>
      <header className="commerce-header">
        <div className="utility-bar"><span>{fa ? "تأمین تخصصی مواد مصرفی صنعت چاپ و بسته‌بندی" : "Specialized printing & packaging consumables"}</span><div><a href="mailto:info@see1ne.com">info@see1ne.com</a><span>تهران، ایران</span><button onClick={() => setLang(fa ? "en" : "fa")}>{fa ? "English" : "فارسی"}</button></div></div>
        <div className="main-bar">
          <a className="commerce-logo approved-logo" href="#top" aria-label="SEEONE home"><span className="logo-line"><b>SEE</b><i className="orbit-one"><strong>1</strong><em></em></i><b>NE</b></span><span className="logo-company">SIVAN NOVA PARSIMA</span><span className="logo-fa">سیوان نوا پارسی ما</span></a>
          <button className="catalog-trigger" onClick={() => setMegaOpen(!megaOpen)}><MenuIcon size={19}/><span>{fa ? "دسته‌بندی محصولات" : "Product categories"}</span><ChevronDown size={15}/></button>
          <button className="global-search" onClick={() => setSearchOpen(true)}><Search size={19}/><span>{fa ? "جست‌وجو در نام، مدل یا کاربرد محصول..." : "Search by name, model or application..."}</span><kbd>⌘ K</kbd></button>
          <div className="commerce-actions"><button onClick={() => setInquiry(true)}><FileText size={20}/><span>{fa ? "استعلام قیمت" : "Request quote"}</span></button><button onClick={() => setMenu(!menu)} className="mobile-menu"><MenuIcon size={23}/></button></div>
        </div>
        <div className="nav-bar"><nav className={menu ? "commerce-nav open" : "commerce-nav"}>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}<a href="#catalog">{fa ? "کاتالوگ فنی" : "Technical catalog"}</a></nav><div className="nav-services"><span><Headphones size={15}/>{fa ? "مشاوره فنی" : "Technical support"}</span><span><PackageSearch size={15}/>{fa ? "پیگیری درخواست" : "Track inquiry"}</span></div></div>
        {megaOpen && <div className="mega-menu"><div className="mega-title"><span>{fa ? "گروه‌های محصول" : "Product divisions"}</span><button onClick={() => setMegaOpen(false)}><X size={20}/></button></div><div className="mega-grid">{products.map(p => <a href="#catalog" key={p.key} onClick={() => {setCatalogFilter(p.key);setMegaOpen(false)}}><span>0{products.indexOf(p)+1}</span><div><b>{fa ? p.titleFa : p.titleEn}</b><small>{p.tags.join("  /  ")}</small></div><ArrowLeft size={18}/></a>)}</div><div className="mega-foot"><span>SEEONE INDUSTRIAL CATALOG 2026</span><button onClick={() => setInquiry(true)}>{fa ? "دریافت مشاوره انتخاب محصول" : "Get product selection support"}<ArrowLeft size={16}/></button></div></div>}
      </header>

      <section className="editorial-hero" id="top">
        <div className="slider-rail" aria-label={fa ? "کنترل اسلایدها" : "Slide controls"}>
          {slides.map((_, index) => <button key={index} className={activeSlide === index ? "active" : ""} onClick={() => setActiveSlide(index)} aria-label={`${fa ? "اسلاید" : "Slide"} ${index + 1}`}><span>0{index + 1}</span><i></i></button>)}
        </div>
        <div className="slider-visual">
          {slides.map((slide, index) => <img key={slide.image} src={slide.image} alt="" className={activeSlide === index ? "active" : ""} />)}
          <div className="image-label"><span>SEEONE</span><span>INDUSTRIAL / {String(activeSlide + 1).padStart(2, "0")}</span></div>
        </div>
        <div className="slider-copy" key={`${activeSlide}-${lang}`}>
          <div className="eyebrow">{fa ? slides[activeSlide].kickerFa : slides[activeSlide].kickerEn}</div>
          <h1>{fa ? slides[activeSlide].titleFa : slides[activeSlide].titleEn}</h1>
          <p>{fa ? slides[activeSlide].bodyFa : slides[activeSlide].bodyEn}</p>
          <div className="hero-actions"><a href="#products" className="quote">{fa ? "مشاهده محصولات" : "Explore products"}<b>←</b></a><button className="text-link dark" onClick={() => setInquiry(true)}>{fa ? "مشاوره تخصصی" : "Talk to a specialist"}</button></div>
          <div className="slider-progress"><span>0{activeSlide + 1}</span><i><b key={activeSlide}></b></i><span>0{slides.length}</span></div>
        </div>
        <div className="vertical-note">SCROLL TO EXPLORE <i></i></div>
      </section>

      <section className="media-showcase">
        <div className="media-intro"><span>SEEONE / KNOWLEDGE & APPLICATION</span><h2>{fa ? <>از کنترل کیفیت تا<br/>نتیجه نهایی چاپ</> : <>From quality control<br/>to the final print</>}</h2><p>{fa ? "محصول مناسب زمانی ارزش ایجاد می‌کند که با شناخت فنی، کنترل دقیق و کاربرد درست همراه باشد." : "The right product creates value when paired with technical knowledge, precise control and correct application."}</p><button onClick={() => setInquiry(true)}>{fa ? "گفتگو با کارشناس فنی" : "Talk to a technical specialist"}<ArrowLeft size={17}/></button></div>
        <article className="media-feature quality"><img src="./images/quality-control.png" alt={fa ? "کنترل کیفیت مرکب چاپ" : "Printing ink quality control"}/><div><span>01 / QUALITY CONTROL</span><h3>{fa ? "دقت قابل اندازه‌گیری" : "Measurable precision"}</h3><p>{fa ? "ارزیابی رنگ، پایداری و عملکرد پیش از مصرف" : "Color, stability and performance evaluation before use"}</p></div></article>
        <article className="media-feature press"><img src="./images/pressroom-wide.png" alt={fa ? "ماشین چاپ افست صنعتی" : "Industrial offset press"}/><div><span>02 / PRESSROOM PERFORMANCE</span><h3>{fa ? "عملکرد در مقیاس واقعی" : "Real-scale performance"}</h3></div></article>
        <article className="media-feature packaging"><img src="./images/packaging-applications.png" alt={fa ? "کاربردهای چاپ و بسته‌بندی" : "Print and packaging applications"}/><div><span>03 / APPLICATIONS</span><h3>{fa ? "کیفیتی که دیده می‌شود" : "Quality you can see"}</h3></div></article>
      </section>

      <section className="catalog-shell" id="catalog">
        <div className="catalog-heading" id="products"><div><span>SEEONE / PRODUCT CATALOG</span><h2>{fa ? "محصولات تخصصی چاپ" : "Professional printing supplies"}</h2><p>{fa ? "انتخاب دقیق بر اساس کاربرد، نوع ماشین و نیاز فنی چاپخانه" : "Select by application, press type and technical requirement."}</p></div><button onClick={() => setInquiry(true)}><FileText size={18}/>{fa ? "استعلام چند محصول" : "Multi-product inquiry"}</button></div>
        <div className="catalog-toolbar"><div className="category-tabs"><button className={catalogFilter === "all" ? "active" : ""} onClick={() => setCatalogFilter("all")}>{fa ? "همه محصولات" : "All products"}<small>{products.length}</small></button>{products.map(p => <button key={p.key} className={catalogFilter === p.key ? "active" : ""} onClick={() => setCatalogFilter(p.key)}>{fa ? p.titleFa : p.titleEn}</button>)}</div><button className="filter-button"><SlidersHorizontal size={17}/>{fa ? "فیلتر فنی" : "Technical filters"}</button></div>
        <div className="catalog-content"><aside><div className="filter-head"><b>{fa ? "فیلتر محصولات" : "Filter products"}</b><span>{fa ? "پاک کردن" : "Clear"}</span></div>{[[fa ? "نوع چاپ" : "Print process", ["Sheet-fed Offset", "UV Offset", "Packaging"]],[fa ? "کاربرد" : "Application", ["Commercial", "Packaging", "Industrial"]],[fa ? "وضعیت" : "Availability", [fa ? "موجود" : "In stock", fa ? "قابل سفارش" : "On request"]]].map(([title,items]) => <div className="filter-group" key={String(title)}><b>{String(title)}<ChevronDown size={14}/></b>{(items as string[]).map(item => <label key={item}><input type="checkbox"/><span>{item}</span></label>)}</div>)}</aside><div className="catalog-products">{products.filter(p => catalogFilter === "all" || p.key === catalogFilter).map((p,index) => <article className="catalog-card" key={p.key}><div className="card-media"><img src={catalogImages[p.key]} alt={fa ? p.titleFa : p.titleEn}/><span>{fa ? "کاتالوگ ۱۴۰۵" : "2026 CATALOG"}</span><button aria-label={fa ? "مشاهده سریع" : "Quick view"} onClick={() => setInquiry(true)}><Search size={18}/></button></div><div className="card-body"><div className="card-code">SEE-{p.code} / {p.key.toUpperCase()}</div><h3>{fa ? p.titleFa : p.titleEn}</h3><p>{fa ? p.descFa : p.descEn}</p><div className="card-specs">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-status"><span><i></i>{fa ? "موجود / قابل تأمین" : "Available / supplied"}</span><small>{fa ? "قیمت پس از استعلام" : "Price on request"}</small></div><div className="card-actions"><button onClick={() => setInquiry(true)}>{fa ? "درخواست قیمت" : "Request quote"}</button><button>{fa ? "مشخصات فنی" : "Technical data"}<ArrowLeft size={16}/></button></div></div></article>)}</div></div>
      </section>

      <section className="proof-strip">
        <div><strong>4</strong><span>{fa ? "گروه تخصصی محصول" : "SPECIALIZED PRODUCT LINES"}</span></div>
        <div><strong>360°</strong><span>{fa ? "پشتیبانی چرخه چاپ" : "PRESSROOM SUPPORT"}</span></div>
        <div><strong>B2B</strong><span>{fa ? "راهکار ویژه کسب‌وکار" : "BUILT FOR BUSINESS"}</span></div>
        <div><strong>01</strong><span>{fa ? "یک شریک، یک استاندارد" : "ONE PARTNER, ONE STANDARD"}</span></div>
      </section>

      <section className="why" id="why">
        <div className="why-heading"><div className="section-no light">02 / {fa ? "چرا سیوان" : "WHY SEEONE"}</div><h2>{fa ? <>تأمین، فقط خرید کالا نیست.<br/><em>یک تعهد بلندمدت است.</em></> : <>Supply is more than sourcing.<br/><em>It is a long-term commitment.</em></>}</h2></div>
        <div className="value-grid">
          {[
            ["01", fa ? "انتخاب فنی" : "Technical selection", fa ? "هر محصول بر اساس عملکرد واقعی در چاپخانه ارزیابی و انتخاب می‌شود." : "Every product is evaluated and selected for real pressroom performance."],
            ["02", fa ? "تأمین پایدار" : "Reliable supply", fa ? "برنامه‌ریزی موجودی و شبکه تأمین برای کاهش ریسک توقف تولید." : "Inventory planning and supply networks designed to reduce downtime risk."],
            ["03", fa ? "پشتیبانی تخصصی" : "Expert support", fa ? "از انتخاب محصول تا مصرف بهینه، کنار تیم فنی شما می‌مانیم." : "From product selection to optimal use, we support your technical team."],
            ["04", fa ? "نگاه اقتصادی" : "Commercial value", fa ? "تعادل دقیق میان کیفیت، دوام و هزینه واقعی هر تیراژ." : "A precise balance of quality, durability and true cost per run."],
          ].map(v => <article key={v[0]}><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></article>)}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-mark"><span>SEE</span><b>1</b><span>NE</span></div>
        <div className="about-copy"><div className="section-no">03 / {fa ? "درباره ما" : "ABOUT US"}</div><h2>{fa ? "از واردات تخصصی تا تولید؛ یک مسیر روشن." : "From specialized import to production—a clear path."}</h2><p>{fa ? "سیوان نوا پارسی ما با برند SEEONE، یک مجموعه B2B در حوزه صنعت چاپ و بسته‌بندی است. ما با شناخت بازار ایران و همکاری با تولیدکنندگان معتبر، زنجیره‌ای مطمئن از انتخاب، واردات، پشتیبانی و توسعه محصول می‌سازیم." : "Sivan Nova Parsima, under the SEEONE brand, is a B2B printing and packaging company. Combining local market insight with trusted manufacturing partners, we build a dependable chain from selection and import to support and product development."}<br/><br/>{fa ? "چشم‌انداز ما توسعه محصولات OEM و ODM و حرکت مرحله‌ای به‌سوی تولید داخلی با استانداردهای بین‌المللی است." : "Our vision is to develop OEM and ODM products and progressively move toward local production at international standards."}</p><div className="roadmap"><span><b>01</b>{fa ? "واردات" : "Import"}</span><i></i><span><b>02</b>OEM</span><i></i><span><b>03</b>ODM</span><i></i><span><b>04</b>{fa ? "تولید" : "Production"}</span></div></div>
      </section>

      <section className="cta" id="contact"><div className="cta-lines"></div>
        <div><span>{fa ? "شروع یک همکاری مطمئن" : "START A RELIABLE PARTNERSHIP"}</span><h2>{fa ? <>برای انتخاب بهتر،<br/>با ما گفتگو کنید.</> : <>Let’s find the right<br/>solution together.</>}</h2></div>
        <button onClick={() => setInquiry(true)}>{fa ? "ارسال درخواست" : "Send an inquiry"}<b>↗</b></button>
      </section>

      <footer><div className="commerce-logo approved-logo footer-logo"><span className="logo-line"><b>SEE</b><i className="orbit-one"><strong>1</strong><em></em></i><b>NE</b></span><span className="logo-company">SIVAN NOVA PARSIMA</span><span className="logo-fa">سیوان نوا پارسی ما</span><span className="footer-tagline">Beyond products, building confidence.</span></div><div><span>{fa ? "مرکب چاپ" : "PRINTING INKS"}</span><span>{fa ? "بلنکت" : "BLANKETS"}</span><span>{fa ? "مواد شیمیایی" : "CHEMICALS"}</span><span>{fa ? "ملزومات" : "CONSUMABLES"}</span></div><div><a href="mailto:info@see1ne.com">INFO@SEE1NE.COM</a><a href="https://see1ne.com">WWW.SEE1NE.COM</a><span>TEHRAN, IRAN</span></div><small>© 2026 SEEONE. ALL RIGHTS RESERVED.</small></footer>

      {searchOpen && <div className="search-overlay" onMouseDown={() => setSearchOpen(false)}><div className="search-panel" onMouseDown={e => e.stopPropagation()}><div className="search-input"><Search size={24}/><input autoFocus placeholder={fa ? "نام، کد، کاربرد یا گروه محصول را وارد کنید..." : "Search name, code, application or category..."}/><button onClick={() => setSearchOpen(false)}><X size={21}/></button></div><div className="search-suggestions"><span>{fa ? "جست‌وجوهای پیشنهادی" : "Suggested searches"}</span><div>{[fa ? "مرکب Process چهاررنگ" : "CMYK process inks",fa ? "بلنکت UV" : "UV blanket",fa ? "محلول شست‌وشوی بلنکت" : "Blanket wash",fa ? "ملزومات چاپ بسته‌بندی" : "Packaging consumables"].map(term => <button key={term}>{term}<ArrowLeft size={14}/></button>)}</div></div></div></div>}

      {inquiry && <div className="modal-wrap" role="dialog" aria-modal="true" onMouseDown={() => setInquiry(false)}><div className="modal" onMouseDown={e => e.stopPropagation()}><button className="close" onClick={() => setInquiry(false)}>×</button><div className="section-no">{fa ? "درخواست قیمت و مشاوره" : "QUOTE & CONSULTATION"}</div><h2>{fa ? "درباره نیازتان بگویید." : "Tell us what you need."}</h2><form onSubmit={e => {e.preventDefault(); setInquiry(false); alert(fa ? "درخواست شما ثبت شد." : "Your inquiry has been received.");}}><label>{fa ? "نام و نام خانوادگی" : "Full name"}<input required /></label><label>{fa ? "نام شرکت" : "Company"}<input /></label><label>{fa ? "شماره تماس" : "Phone number"}<input required inputMode="tel" /></label><label>{fa ? "محصول موردنظر" : "Product"}<select><option>{fa ? "مرکب چاپ" : "Printing inks"}</option><option>{fa ? "بلنکت چاپ" : "Printing blankets"}</option><option>{fa ? "مواد شیمیایی" : "Pressroom chemicals"}</option><option>{fa ? "سایر ملزومات" : "Other consumables"}</option></select></label><label className="full">{fa ? "توضیحات" : "Message"}<textarea rows={3}></textarea></label><button className="submit">{fa ? "ثبت درخواست" : "Submit inquiry"}<b>↗</b></button></form></div></div>}
    </main>
  );
}

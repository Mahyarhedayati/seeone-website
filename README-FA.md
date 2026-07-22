# وب‌سایت SEEONE — نسخه GitHub Pages

این نسخه کاملاً استاتیک است و روی GitHub Pages بدون سرور Node اجرا می‌شود.

## انتشار

1. در GitHub یک Repository جدید با نام `seeone-website` بسازید.
2. تمام فایل‌های این پوشه را در شاخه `main` آپلود کنید.
3. در Repository وارد `Settings > Pages` شوید.
4. در بخش `Build and deployment`، گزینه `Source` را روی `GitHub Actions` قرار دهید.
5. اجرای خودکار Workflow را از تب `Actions` بررسی کنید.

پس از پایان Workflow، سایت روی آدرس مشابه زیر فعال می‌شود:

`https://USERNAME.github.io/seeone-website/`

## اتصال دامنه see1ne.com

در `Settings > Pages > Custom domain` دامنه `see1ne.com` را وارد کنید. سپس رکوردهای DNS نمایش‌داده‌شده توسط GitHub را در پنل دامنه ثبت و گزینه `Enforce HTTPS` را فعال کنید.

## اجرای محلی

```bash
npm install
npm run dev
```

## نکته فرم تماس

GitHub Pages سرویس سمت‌سرور ندارد. فرم فعلی رابط نمایشی دارد؛ برای ارسال واقعی درخواست‌ها باید بعداً به سرویس ایمیل، فرم خارجی یا API متصل شود.

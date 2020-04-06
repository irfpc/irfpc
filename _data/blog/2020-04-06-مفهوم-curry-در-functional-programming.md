---
template: BlogPost
path: /curry
date: 2020-04-06T20:14:42.873Z
title: مفهوم curry در Functional Programming
thumbnail: /assets/photo_2020-04-05_01-23-26.jpg
---
قانون curry یعنی هر function در هر application (همان call کردن) صرفا اجازه داره حداکثر یک argument را به عنوان ورودی دریافت کنه. چه اهمیتی داره؟
باعث تفاوت بین دو قطعه کد بالا میشه.
نسخه uncurriedAdd دوتا argument را به عنوان ورودی دریافت میکنه (پس قانون curry را رعایت نمیکنه).
این موضوع باعث شده که که uncurriedAdd با map قابل ترکیب نباشه و برای استفاده از آن داخل map مجبوریم از یک function واسط استفاده کنیم.

نسخه curriedAdd اما همانطور که میبینید به صورت نصف و نیمه apply شده (partial application) و خیلی راحت و بدون فانکشن واسط با map ترکیب شده.
---
template: BlogPost
path: /curry
author: محمد حسنی
date: 2020-04-06T21:55:01.623Z
title: مفهوم curry در Functional Programming
thumbnail: /assets/1_2j8ff2kfbhekmv6pcj2fwg.png
metaDescription: >-
  <meta property="og:title" content="Currly" />

  <meta property="og:type" content="website" />

  <meta property="og:url" content="https://iranfpcommunity.netlify.com/curry/"
  />

  <meta property="og:image"
  content="blob:https://iranfpcommunity.netlify.com/4703073a-76fb-49f9-a129-fad6f764fe5b"
  />

  <meta property=”og:description” content=”قانون curry یعنی هر function در هر
  application (همان call کردن) صرفا اجازه داره حداکثر یک argument را به عنوان
  ورودی دریافت کنه.” />
---
![curry](/assets/photo_2020-04-05_01-23-26.jpg)

![uncurry](/assets/photo_2020-04-05_01-23-28.jpg)

قانون curry یعنی هر function در هر application (همان call کردن) صرفا اجازه داره حداکثر یک argument را به عنوان ورودی دریافت کنه. چه اهمیتی داره؟ باعث تفاوت بین دو قطعه کد بالا میشه.
نسخه uncurriedAdd دوتا argument را به عنوان ورودی دریافت میکنه (پس قانون curry را رعایت نمیکنه).
این موضوع باعث شده که که uncurriedAdd با map قابل ترکیب نباشه و برای استفاده از آن داخل map مجبوریم از یک function واسط استفاده کنیم.

نسخه curriedAdd اما همانطور که میبینید به صورت نصف و نیمه apply شده (partial application) و خیلی راحت و بدون فانکشن واسط با map ترکیب شده.
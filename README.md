# Polaris

[![Author](https://img.shields.io/badge/author-Frans%20Jesky-lightgrey.svg?style=flat&color=%23673ab7)](https://github.com/fransjesky)

An open-source foundation for building modern, scalable, i18n-ready blogs with Next.js.

Polaris is a developer-focused blog template built with scalability, customization, and internationalization in mind. It provides a clean foundation for creating content-driven websites while keeping the project structure flexible enough to grow with your needs.

## Features

- **Next.js** with the App Router
- **i18n support** with locale-based routing and dictionaries
- **Markdown-powered** content for writing and managing blog posts
- **Dark and light mode** support
- **TypeScript** for type-safe development
- **Scalable project structure** designed for customization and future growth
- **Responsive design** for desktop and mobile

## i18n Core Mechanism

Polaris uses a lightweight, dictionary-based i18n system built on the Next.js App Router, without an external i18n library. The locale is determined by the URL, mapped to its corresponding translation dictionary, and made reusable across Server Components through a centralized `getDictionary()` function.

### Locale and Dictionary Mapping

The `[lang]` dynamic route determines the current locale:

```text
/en → English
/ja → Japanese
```

Each supported locale is mapped to its corresponding dictionary:

```TypeScript
const dictionaries = {
  en: () => import("@/dictionaries/en.json"),
  ja: () => import("@/dictionaries/ja.json"),
};

export type Locale = keyof typeof dictionaries;
```

The Locale type is derived from the dictionary mapping, so adding a new dictionary automatically extends the supported locale type.

### Centralized Dictionary Access

`getDictionary()` obtains the current locale through `lang()`, validates it, and loads the corresponding dictionary:

```TypeScript
export const getDictionary = async () => {
  const locale = await lang();

  if (!hasLocale(locale)) notFound();

  return dictionaries[locale]();
};
```

Server Components can then access the current translations without repeatedly retrieving `params.lang`:

```TypeScript
const dict = await getDictionary();
```

This centralizes locale and dictionary access, making it reusable across Server Components. Unsupported locales result in a 404 response.

### Language Switching

The language selector uses Next.js `Link` to navigate between supported locales. The available language metadata is stored in the dictionary and mapped into individual links:

```TypeScript
const dict = await getDictionary();
const languages = dict.system.locale;

{languages.map((lang) => (
  <Link key={lang.locale} href={`/${lang.locale}`}>
    {lang.name}
  </Link>
))}
```

Each language entry provides its display name and locale code:

```json
[
  { "name": "english", "locale": "en" },
  { "name": "japanese", "locale": "ja" }
]
```

The map() creates a Link for each language, resulting in:

```text
English  → /en
Japanese → /ja
```

When a user selects a language, `Link` navigates to the corresponding locale route. Next.js resolves the new `[lang]` value, and `getDictionary()` loads the matching dictionary for the page.

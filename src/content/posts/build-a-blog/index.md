---
title: Building a blog
excerpt: Detailing how I made this blog.
heroImage: ./images/colored-pencil.jpg
heroImageAlt: Colored pencil lined up on top of white surface
heroImageCredit: <a href="https://unsplash.com/photos/colored-pencil-lined-up-on-top-of-white-surface-l3N9Q27zULw" class="italic" target="_blank">Jess Bailey (@jessbaileydesigns)</a> on <a href="https://unsplash.com" class="italic" target="_blank">Unsplash</a>
category: Series
tags: [blog]
draft: true
---

## Introduction

In my [first post](../first-post.md) I wrote that I originally tried to build a site with [Gatsby](https://www.gatsbyjs.com). Gatsby was a nice acquaintance, and my first exposure to a static site generator. It really wasn't Gatsby's fault that I never really published the site; I found a nice blog template by [nehalist](https://github.com/nehalist) ([gatsby-theme-nehalem](https://github.com/nehalist/gatsby-theme-nehalem)) that gave me most of what I wanted. But I ran into a lot of problems with the markdown remark/rehype pipeline. This was the first half of 2020, and [unified](https://unifiedjs.com) was in transition ti ESM-only modules. I could not get several of the plugins I felt I needed to work, and some of the plugins that worked had bugs because of the transition.

During 2023 [Astro](https://astro.build) kept being mentioned as an easy-to-learn, yet powerful, site generator, so I decided to give it a try.

This series of posts details my journey with Astro, and how I built this site.

## The _Build A Blog_ series

- [Starting an Astro blog](./build-a-blog/start)

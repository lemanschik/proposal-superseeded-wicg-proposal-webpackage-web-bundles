# web-bundels

> References of Failed Designs:
> 
> * [Make resource loading better with ESM and Web Bundles](https://docs.google.com/document/d/1ynJTJTdhs1t5awscawO7jomcJwsm_FnSN-qxEvbpqyM/edit?resourcekey=0-i88WuDArpBpCGihCKUuGRw)
> * [rollup-plugin-webbundle](https://github.com/GoogleChromeLabs/rollup-plugin-webbundle)
> * [Bundle Dependencies](https://github.com/WICG/webpackage/blob/main/extensions/proposals/dependencies-section.md)

## The Solution
We use ECMAScript Modules for everything and cache them inside serviceWorkers serviceWorkers are a bundle cache unit which can be seeded by multiple ways
this solves all use cases from directly single file deploy till multi file deploy via HTTP3 

the needed patterns.

- Content Indexed IDS with a aggreed or identify able hash algorythm like sha512::my-name::9823798dhaisxc-....
  - That solves the cross context referencing cashing and other developer issues like injections as also incremental builds and upgrade when building a larger stack
  - as you will always create a new virtual or real entrypoint with new content ids you get a new hash also for that module (cascading hashing)
  
share able via webrtc for local development and for lan groups as also shareable via static content cash servers like cloudflare. 

## Features
- Integrated Module management with best out of Package Management patterns and abilitys
- Highly reuseable storage format directly useable in most environments without modification
- Highly instrumentable and shim able injections everything versioned out of the box.
- commit branch able directly on load and live. 
- API Versioning


## Format
a web bundle is a ECMAScript Module you can import it directly and use its exports directly. 
```js


```

if you want or need to transform it into a other format you load it via fetch and use the .text() output apply your modifications and import via data:url the modified module

## API Versioning
There are 2 ways to hash the module content one is hash based on the text content this is good for development for consistent api development you can use a nice extra feature i call it API based hashing it simply uses Object.keys of the Module then the toString representation of the export keys. 
this saves us from tracking api stability as we know the api is the same. this allows automated API versioning

## Content Versioning
The Main Versioning algorythm to use 


# deprecation before creation 
i do not know what happens but there exists https://github.com/lemanschik/webpackage which shows that they did some drafts around a hpack fromat 
i do not know what they are doing there but some one needs to stop that asap before we get the next big dependencie matrix 
when some one ships only that format it is like a web destruction.  

The main problem is it destroys the readablity of the web and it needs to get preserved because of code reuse and also because of security audits
i will never want to open fileaccess to code that is obfusicated like that so it is a total blocker that thing

is === Kernel PANIC

# web-bundels

Core fundamental concepts Compose Modules out of Content Hashed Modules into Modules and cache the steps between that incremental or at last supply module references used to transform the other module references.

Web bundels are always ECMAScript Modules which can also consist out of exported rollupModuleBundle caches as this are only serialized module representations and additional meta. 


> References of Failed Designs:
> 
> * [Make resource loading better with ESM and Web Bundles](https://docs.google.com/document/d/1ynJTJTdhs1t5awscawO7jomcJwsm_FnSN-qxEvbpqyM/edit?resourcekey=0-i88WuDArpBpCGihCKUuGRw)
> * [rollup-plugin-webbundle](https://github.com/GoogleChromeLabs/rollup-plugin-webbundle)
> * [Bundle Dependencies](https://github.com/WICG/webpackage/blob/main/extensions/proposals/dependencies-section.md)

## The Solution
We use ECMAScript Modules for everything and cache them inside serviceWorkers serviceWorkers are a bundle cache unit which can be seeded by multiple ways
this solves all use cases from directly single file deploy till multi file deploy via HTTP3 as it is always Origin Wide intercepting requests even for 3th party cross origin resources.

the needed patterns.

- Content Indexed IDS with a aggreed or identify able hash algorythm like ```sha512::my-name::9823798dhaisxc-....```
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

as every fetch goes through the serviceWorker this adds barSpecifier resolver to the bundle the serviceWorker also handles all 3th party requests by default even for none origin resources it handels still the whole origin.

## API Versioning
There are 2 ways to hash the module content one is hash based on the text content this is good for development for consistent api development you can use a nice extra feature i call it API based hashing it simply uses Object.keys of the Module then the toString representation of the export keys. 
this saves us from tracking api stability as we know the api is the same. this allows automated API versioning

```js

import('sha512::my-name::9823798dhaisxc-....').then(m=>{
for (const [key, val] of Object.entries(m)) {
  // hashing the export keys and values.toString() representation 
}


})
```



## Content Versioning
The Main Versioning algorythm to use 

serviceWorker.js
```js

// every fetch gets content hashed when stored and returned content hashed also add map for the content hashed items

```

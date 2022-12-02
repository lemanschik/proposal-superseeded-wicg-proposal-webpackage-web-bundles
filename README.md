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

- Content Indexed IDS with a aggreed or identify able hash algorythm like sha512:my-name-9823798dhaisxc-....
  - That solves the cross context referencing cashing and other developer issues like injections as also incremental builds and upgrade when building a larger stack
  - as you will always create a new virtual or real entrypoint with new content ids you get a new hash also for that module (cascading hashing)
  



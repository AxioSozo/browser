### gecko-2x idle (profile pass)

**parent pid 2825** — 98 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 84 | 4.0 | GC / CC 37, Idle 17, Other 12, JavaScript 10 | 1 / 14 / 68 | gc_cc 37, poll_wait 23, harness_diagnostics 4, memcpy_memset 2 |
| DOM Worker | 7 | 0.3 | Idle 5, DOM 1, JavaScript 1, Other 0 | 0 / 2 / 5 | worker_messaging 5, poll_wait 5 |
| Socket Thread | 2 | 0.1 | Other 2 | 0 / 0 / 2 | poll_wait 2 |
| IPC I/O Parent | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Renderer | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| SwComposite | 1 | 0.0 | Other 1 | 0 / 0 / 1 | memcpy_memset 0 |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| BgIOThreadPool #3 | 0 | 0.0 | Other 0, Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 52; `poll [libc.so.6]` 21; `mprotect [libc.so.6]` 2; `read [libc.so.6]` 1; `sendmsg [libc.so.6]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 1; `ensureShutdownBlocker (resource://services-settings/Database.sys.mjs:6` 1; `madvise [libc.so.6]` 1

**tab pid 3088** — 28 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 24 | 1.1 | Idle 16, GC / CC 3, JavaScript 2, Other 1 | 0 / 3 / 20 | poll_wait 17, gc_cc 3, harness_diagnostics 3, memcpy_memset 1 |
| IPC I/O Child | 4 | 0.2 | Idle 4 | 0 / 0 / 4 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 16; `[libxul.so]` 6; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `mmap64 [libc.so.6]` 1; `write [libc.so.6]` 0; `[]` 0; `pthread_self [libc.so.6]` 0

**tab pid 3016** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1

**tab pid 3163** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0


### gecko-2x raf-nosampler (profile pass)

**parent pid 3887** — 410 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 239 | 7.9 | Graphics 151, Idle 88, Profiler 0 | 0 / 0 / 239 | webrender_render 151, poll_wait 88, memcpy_memset 3 |
| SwComposite | 46 | 1.5 | Other 46 | 0 / 0 / 46 | memcpy_memset 3 |
| WRRenderBackend#0 | 41 | 1.4 | Other 41 | 0 / 0 / 41 | memcpy_memset 0 |
| Compositor | 32 | 1.1 | Idle 31, Other 1, Profiler 0 | 0 / 0 / 32 | poll_wait 31, memcpy_memset 0, paint_layout 0, webrender_render 0 |
| WRSceneBuilder#0 | 30 | 1.0 | Other 30 | 0 / 0 / 30 | memcpy_memset 0, poll_wait 0 |
| GeckoMain | 10 | 0.3 | Idle 8, JavaScript 2, Other 0 | 1 / 1 / 8 | poll_wait 8, harness_diagnostics 2, mozafterpaint_events 0 |
| IPC I/O Parent | 7 | 0.2 | Idle 7, Other 0, Profiler 0 | 0 / 0 / 7 | poll_wait 0 |
| WRSceneBuilderLP#0 | 3 | 0.1 | Other 3 | 0 / 0 / 3 |  |

Main thread, top self: `poll [libc.so.6]` 8; `[libxul.so]` 1; `sandbox.cloneInto (chrome://remote/content/marionette/evaluate.sys.mjs` 1; `mprotect [libc.so.6]` 1; `[libX11.so.6]` 0; `recvmsg [libc.so.6]` 0; `clock_gettime@GLIBC_2.2.5 [libc.so.6]` 0; `XFilterEvent [libX11.so.6]` 0

**tab pid 4150** — 127 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 115 | 3.8 | Idle 84, Graphics 11, Layout 8, Other 4 | 0 / 2 / 113 | poll_wait 85, paint_layout 16, gc_cc 3, memcpy_memset 1 |
| IPC I/O Child | 10 | 0.3 | Idle 10, Other 0 | 0 / 0 / 10 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 84; `[libxul.so]` 23; `[]` 2; `sendmsg [libc.so.6]` 1; `__strlen_evex [libc.so.6]` 1; `[linux-vdso.so.1]` 1; `mmap64 [libc.so.6]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 1

**tab pid 4079** — 1 ms CPU in the window

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

**tab pid 4060** — 1 ms CPU in the window

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


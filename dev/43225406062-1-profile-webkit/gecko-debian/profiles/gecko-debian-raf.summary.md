### gecko-debian raf (profile pass)

**parent pid 8188** — 642 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 337 | 11.0 | Graphics 247, Idle 90 | 0 / 0 / 337 | webrender_render 247, poll_wait 94, memcpy_memset 12 |
| WRRenderBackend#0 | 79 | 2.6 | Other 79 | 0 / 0 / 79 | memcpy_memset 1, poll_wait 0 |
| GeckoMain | 69 | 2.3 | GC / CC 33, Idle 21, Other 7, JavaScript 5 | 0 / 5 / 64 | gc_cc 33, poll_wait 26, harness_diagnostics 4, paint_layout 2 |
| WRSceneBuilder#0 | 55 | 1.8 | Other 55 | 0 / 0 / 55 | poll_wait 1, memcpy_memset 1 |
| Compositor | 49 | 1.6 | Idle 48, Other 1 | 0 / 0 / 49 | poll_wait 48, paint_layout 1, webrender_render 0, memcpy_memset 0 |
| SwComposite | 29 | 1.0 | Other 29 | 0 / 0 / 29 | memcpy_memset 2 |
| IPC I/O Parent | 11 | 0.4 | Idle 11, Other 0, Profiler 0 | 0 / 0 / 11 | poll_wait 0 |
| WRSceneBuilderLP#0 | 5 | 0.2 | Other 5 | 0 / 0 / 5 |  |

Main thread, top self: `[libxul.so]` 37; `__syscall_cancel_arch [libc.so.6]` 26; `__tls_get_addr [ld-linux-x86-64.so.2]` 2; `mprotect [libc.so.6]` 1; `[libgdk-3.so.0]` 1; `[axiosozo-dev]` 1; `[unknown]` 0; `__memset_evex_unaligned_erms [libc.so.6]` 0

**tab pid 8457** — 241 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 220 | 7.2 | Idle 106, Graphics 39, Layout 33, Other 14 | 0 / 12 / 208 | poll_wait 106, paint_layout 55, gc_cc 7, memcpy_memset 3 |
| IPC I/O Child | 17 | 0.6 | Idle 16, Other 0, Profiler 0 | 0 / 0 / 17 | memcpy_memset 0 |
| Timer | 5 | 0.2 | Other 5, Profiler 0 | 0 / 0 / 5 | poll_wait 5 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 111; `[libxul.so]` 82; `[]` 6; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 5; `__lll_lock_wait [libc.so.6]` 4; `__pthread_mutex_unlock_usercnt [libc.so.6]` 2; `__memset_evex_unaligned_erms [libc.so.6]` 2; `__strlen_evex [libc.so.6]` 1

**tab pid 8345** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0

**tab pid 8463** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1


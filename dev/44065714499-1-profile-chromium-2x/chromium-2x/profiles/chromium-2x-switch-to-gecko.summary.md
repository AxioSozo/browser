### chromium-2x switch-to-gecko (profile pass)

**parent pid 4071** — 440 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| BgIOThreadPool #1 | 275 | 1.7 | Other 274, Idle 0 | 0 / 0 / 275 | memcpy_memset 0, poll_wait 0 |
| GeckoMain | 58 | 0.4 | JavaScript 17, Idle 17, Layout 11, Graphics 6 | 2 / 25 / 31 | poll_wait 17, paint_layout 9, harness_diagnostics 7, subprocess_pipe_io 3 |
| DOM Worker | 56 | 0.4 | GC / CC 22, Other 18, JavaScript 15, Idle 1 | 0 / 0 / 56 | subprocess_pipe_io 56, gc_cc 22, poll_wait 16, memcpy_memset 5 |
| Renderer | 29 | 0.2 | Graphics 27, Idle 2 | 0 / 0 / 29 | webrender_render 27, poll_wait 2, memcpy_memset 0 |
| IPC I/O Parent | 6 | 0.0 | Idle 6, Other 0 | 0 / 0 / 6 |  |
| Compositor | 4 | 0.0 | Idle 4, Other 0 | 0 / 0 / 4 | poll_wait 4, memcpy_memset 0 |
| SwComposite | 4 | 0.0 | Other 4 | 0 / 0 / 4 | memcpy_memset 1 |
| WRRenderBackend#0 | 2 | 0.0 | Other 2 | 0 / 0 / 2 |  |

Main thread, top self: `[libxul.so]` 30; `poll [libc.so.6]` 17; `[unknown]` 3; `[axiosozo-dev]` 2; `mprotect [libc.so.6]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 1; `syscall [libc.so.6]` 1; `prettyObject (chrome://remote/content/shared/Format.sys.mjs:81:24)[90]` 1

**tab pid 4262** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 6 | 0.0 | Idle 4, DOM 2, Other 0 | 0 / 2 / 4 | poll_wait 4 |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 4; `[libxul.so]` 2; `[]` 0; `__strlen_evex [libc.so.6]` 0; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0

**tab pid 4223** — 5 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 3 | 0.0 | Idle 3, Other 0, Profiler 0 | 0 / 0 / 3 | poll_wait 3 |
| Timer | 2 | 0.0 | Other 2 | 0 / 0 / 2 | poll_wait 2 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 3; `sendmsg [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 0

**tab pid 4777** — 5 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 4 | 0.0 | Idle 3, Layout 0, Other 0 | 0 / 0 / 4 | poll_wait 3 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 3; `[libxul.so]` 0; `sendmsg [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0


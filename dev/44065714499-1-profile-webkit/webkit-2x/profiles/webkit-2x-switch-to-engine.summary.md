### webkit-2x switch-to-engine (profile pass)

**parent pid 8797** — 113 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 42 | 13.0 | JavaScript 23, Layout 6, Idle 4, Graphics 4 | 1 / 26 / 16 | harness_diagnostics 8, paint_layout 7, poll_wait 6, engine_stream_read 6 |
| DOM Worker | 21 | 6.5 | JavaScript 19, Profiler 1, Other 0 | 0 / 0 / 21 | subprocess_pipe_io 21, poll_wait 17 |
| Renderer | 21 | 6.3 | Graphics 18, Idle 2 | 0 / 0 / 21 | webrender_render 18, memcpy_memset 3, poll_wait 2 |
| BackgroundThreadPool #2 | 16 | 5.0 | Other 13, Idle 3 | 0 / 0 / 16 | memcpy_memset 4, poll_wait 3 |
| Compositor | 4 | 1.3 | Idle 3, Other 1 | 0 / 0 / 4 | poll_wait 3 |
| WRRenderBackend#0 | 2 | 0.7 | Other 2 | 0 / 0 / 2 |  |
| SwComposite | 2 | 0.6 | Other 2 | 0 / 0 / 2 |  |
| WRSceneBuilder#0 | 2 | 0.5 | Other 2 | 0 / 0 / 2 |  |

Main thread, top self: `[libxul.so]` 26; `__syscall_cancel_arch [libc.so.6]` 6; `mprotect [libc.so.6]` 4; `[unknown]` 1; `__strlen_avx2 [libc.so.6]` 1; `[axiosozo-dev]` 1; `filter (self-hosted:183:21)[5]` 1; `pthread_rwlock_rdlock@GLIBC_2.2.5 [libc.so.6]` 1

**tab pid 9488** — 20 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 19 | 5.9 | Other 12, JavaScript 3, DOM 3, Idle 2 | 0 / 4 / 15 | memcpy_memset 3, poll_wait 2, json_metadata 2 |
| IPC I/O Child | 0 | 0.1 | Idle 0 | 0 / 0 / 0 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 11; `__syscall_cancel_arch [libc.so.6]` 3; `memset [ld-linux-x86-64.so.2]` 2; `[]` 2; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `readlink [libc.so.6]` 0

**tab pid 9344** — 2 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 2 | 0.5 | Idle 1, Graphics 0, Profiler 0 | 0 / 0 / 2 | poll_wait 1, paint_layout 0 |
| IPC I/O Child | 0 | 0.1 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0; `__lll_lock_wake [libc.so.6]` 0

**tab pid 9482** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.4 | Idle 1, GC / CC 1 | 0 / 0 / 1 | poll_wait 1, gc_cc 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `mprotect [libc.so.6]` 1


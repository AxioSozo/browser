### webkit-2x idle (profile pass)

**parent pid 8797** — 286 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 156 | 7.4 | Idle 126, JavaScript 12, Other 7, GC / CC 6 | 2 / 13 / 141 | poll_wait 131, harness_diagnostics 14, gc_cc 6, engine_stream_read 2 |
| DOM Worker | 110 | 5.2 | JavaScript 109, Profiler 1 | 0 / 0 / 110 | subprocess_pipe_io 110, poll_wait 109, memcpy_memset 1 |
| Timer | 19 | 0.9 | Other 19, Profiler 0 | 0 / 0 / 19 | poll_wait 19, memcpy_memset 0 |
| Socket Thread | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| IPC I/O Parent | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| BgIOThreadPool #2 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Renderer | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| WRWorker#0 | 0 | 0.0 | Other 0 | 0 / 0 / 0 |  |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 130; `[libxul.so]` 18; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `[unknown]` 1; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `send (chrome://remote/content/marionette/server.sys.mjs:416:7)[76]` 1; `[linux-vdso.so.1]` 1; `__lll_lock_wait [libc.so.6]` 1

**tab pid 9488** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

**tab pid 8955** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

**tab pid 9482** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0


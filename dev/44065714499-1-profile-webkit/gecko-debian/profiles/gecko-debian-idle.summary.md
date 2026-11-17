### gecko-debian idle (profile pass)

**parent pid 8175** — 18 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 12 | 0.6 | JavaScript 5, Idle 5, DOM 1, Graphics 1 | 0 / 6 / 5 | poll_wait 5, harness_diagnostics 4, subprocess_pipe_io 1, paint_layout 1 |
| Compositor | 2 | 0.1 | Other 1, Idle 1 | 0 / 0 / 2 | poll_wait 1, memcpy_memset 1, webrender_render 0 |
| DOM Worker | 1 | 0.1 | Other 1, Idle 1 | 0 / 0 / 1 | worker_messaging 1, poll_wait 1 |
| IPC I/O Parent | 1 | 0.1 | Idle 1 | 0 / 0 / 1 |  |
| Socket Thread | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Renderer | 0 | 0.0 | Idle 0, Graphics 0 | 0 / 0 / 0 | poll_wait 0, memcpy_memset 0, webrender_render 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| WRSceneBuilder#0 | 0 | 0.0 | Other 0 | 0 / 0 / 0 |  |

Main thread, top self: `[libxul.so]` 6; `__syscall_cancel_arch [libc.so.6]` 5; `mprotect [libc.so.6]` 0

**tab pid 8427** — 30 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 25 | 1.2 | Idle 15, GC / CC 4, Other 3, JavaScript 2 | 0 / 2 / 24 | poll_wait 16, gc_cc 4, harness_diagnostics 2, memcpy_memset 0 |
| IPC I/O Child | 4 | 0.2 | Idle 4, Other 0 | 0 / 0 / 4 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 16; `[libxul.so]` 8; `__tls_get_addr [ld-linux-x86-64.so.2]` 1; `__memmove_avx_unaligned_erms [libc.so.6]` 0; `[unknown]` 0; `[]` 0; `pthread_mutexattr_settype@GLIBC_2.2.5 [libc.so.6]` 0; `__strlen_avx2 [libc.so.6]` 0

**tab pid 8342** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0, Profiler 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0; `[libxul.so]` 0

**tab pid 8320** — 1 ms CPU in the window

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


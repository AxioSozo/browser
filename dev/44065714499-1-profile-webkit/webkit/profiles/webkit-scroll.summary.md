### webkit scroll (profile pass)

**parent pid 7161** — 952 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 487 | 23.2 | Idle 276, JavaScript 93, Other 53, DOM 25 | 13 / 97 / 377 | poll_wait 324, engine_stream_read 55, harness_diagnostics 32, subprocess_pipe_io 18 |
| DOM Worker | 249 | 11.8 | JavaScript 231, Profiler 16, Other 1 | 0 / 0 / 249 | subprocess_pipe_io 249, poll_wait 205, memcpy_memset 3 |
| BackgroundThreadPool #3 | 55 | 2.6 | Idle 45, Other 8, Graphics 1, Profiler 1 | 0 / 0 / 55 | poll_wait 45, memcpy_memset 8, image_container 1 |
| Renderer | 50 | 2.4 | Idle 42, Graphics 8 | 0 / 0 / 50 | poll_wait 43, webrender_render 8, memcpy_memset 2 |
| WRRenderBackend#0 | 30 | 1.4 | Other 30 | 0 / 0 / 30 | memcpy_memset 0 |
| Compositor | 23 | 1.1 | Idle 23, Other 0, Graphics 0 | 0 / 0 / 23 | poll_wait 23, webrender_render 0 |
| SwComposite | 21 | 1.0 | Other 21 | 0 / 0 / 21 | memcpy_memset 0 |
| Timer | 21 | 1.0 | Other 21, Profiler 0 | 0 / 0 / 21 | poll_wait 20 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 306; `[libxul.so]` 119; `[unknown]` 12; `__memset_avx2_unaligned_erms [libc.so.6]` 4; `[axiosozo-dev]` 4; `mprotect [libc.so.6]` 4; `bufferLength (chrome://browser/content/axiosozo/EngineStreamClient.sys` 2; `__strlen_avx2 [libc.so.6]` 2

**tab pid 7717** — 1 ms CPU in the window

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

**tab pid 7330** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

**tab pid 7357** — 1 ms CPU in the window

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


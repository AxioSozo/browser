### gecko scroll (profile pass)

**parent pid 4049** — 984 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 674 | 33.2 | Graphics 614, Idle 58, Other 1, Profiler 1 | 0 / 0 / 674 | webrender_render 615, poll_wait 60, memcpy_memset 8 |
| GeckoMain | 105 | 5.2 | Idle 67, Other 18, Graphics 7, Layout 5 | 0 / 7 / 97 | poll_wait 88, paint_layout 9, harness_diagnostics 5, subprocess_pipe_io 1 |
| WRRenderBackend#0 | 77 | 3.8 | Other 77 | 0 / 0 / 77 | poll_wait 1, memcpy_memset 0 |
| SwComposite | 62 | 3.1 | Other 62 | 0 / 0 / 62 | memcpy_memset 8 |
| Compositor | 31 | 1.5 | Idle 30, Other 1, Profiler 0 | 0 / 0 / 31 | poll_wait 30, webrender_render 0 |
| WRSceneBuilder#0 | 22 | 1.1 | Other 22 | 0 / 0 / 22 | memcpy_memset 1, poll_wait 0 |
| IPC I/O Parent | 8 | 0.4 | Idle 7, Other 0, Profiler 0 | 0 / 0 / 8 | poll_wait 0 |
| Socket Thread | 1 | 0.1 | Other 1 | 0 / 0 / 1 | poll_wait 1 |

Main thread, top self: `poll [libc.so.6]` 68; `[libxul.so]` 21; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 2; `mprotect [libc.so.6]` 2; `[libgobject-2.0.so.0]` 1; `recvmsg [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1; `[libgdk-3.so.0]` 1

**tab pid 4294** — 119 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 103 | 5.1 | Idle 64, Graphics 15, Other 11, GC / CC 4 | 0 / 4 / 100 | poll_wait 67, paint_layout 17, gc_cc 4, harness_diagnostics 3 |
| IPC I/O Child | 14 | 0.7 | Idle 14, Other 0 | 0 / 0 / 14 |  |
| Timer | 1 | 0.1 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 65; `[libxul.so]` 28; `[]` 2; `sendmsg [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `read [libc.so.6]` 1; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 1; `getcontext [libc.so.6]` 1

**tab pid 4215** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1

**tab pid 4380** — 1 ms CPU in the window

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


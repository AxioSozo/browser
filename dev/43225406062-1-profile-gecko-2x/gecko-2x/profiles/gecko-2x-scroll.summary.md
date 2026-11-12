### gecko-2x scroll (profile pass)

**parent pid 2825** — 1534 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 1172 | 57.2 | Graphics 1117, Idle 54, Other 1 | 0 / 0 / 1172 | webrender_render 1117, poll_wait 55, memcpy_memset 0 |
| SwComposite | 137 | 6.7 | Other 137 | 0 / 0 / 137 | memcpy_memset 13 |
| GeckoMain | 94 | 4.6 | Idle 62, Other 12, Graphics 9, JavaScript 7 | 0 / 7 / 87 | poll_wait 81, paint_layout 9, harness_diagnostics 4, memcpy_memset 0 |
| WRRenderBackend#0 | 73 | 3.5 | Other 73 | 0 / 0 / 73 | memcpy_memset 0, poll_wait 0 |
| Compositor | 25 | 1.2 | Idle 25, Other 0, Profiler 0 | 0 / 0 / 25 | poll_wait 25, paint_layout 0, memcpy_memset 0 |
| WRSceneBuilder#0 | 20 | 1.0 | Other 20, Profiler 0 | 0 / 0 / 20 | poll_wait 0, memcpy_memset 0 |
| IPC I/O Parent | 7 | 0.3 | Idle 7, Other 0 | 0 / 0 / 7 | poll_wait 0 |
| WRSceneBuilderLP#0 | 1 | 0.1 | Other 1 | 0 / 0 / 1 |  |

Main thread, top self: `poll [libc.so.6]` 65; `[libxul.so]` 21; `recvmsg [libc.so.6]` 2; `[libgobject-2.0.so.0]` 1; `[unknown]` 1; `read [libc.so.6]` 1; `writev [libc.so.6]` 0; `g_hash_table_lookup_extended [libglib-2.0.so.0]` 0

**tab pid 3088** — 101 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 88 | 4.3 | Idle 58, Graphics 11, Other 6, GC / CC 5 | 0 / 3 / 85 | poll_wait 60, paint_layout 12, gc_cc 5, harness_diagnostics 2 |
| IPC I/O Child | 12 | 0.6 | Idle 12, Other 0, Profiler 0 | 0 / 0 / 12 |  |
| Timer | 1 | 0.1 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 60; `[libxul.so]` 22; `[]` 2; `[unknown]` 1; `sendmsg [libc.so.6]` 1; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 0

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

**tab pid 3165** — 1 ms CPU in the window

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


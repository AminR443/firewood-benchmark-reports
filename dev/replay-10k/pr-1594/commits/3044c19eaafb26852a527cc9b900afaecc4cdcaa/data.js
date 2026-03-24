window.BENCHMARK_DATA = {
  "lastUpdate": 1774335856176,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR Compare": [
      {
        "commit": {
          "author": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "committer": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "id": "3044c19eaafb26852a527cc9b900afaecc4cdcaa",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-24T00:03:40Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/3044c19eaafb26852a527cc9b900afaecc4cdcaa"
        },
        "date": 1774335812675,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 102145539,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 102145539,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "committer": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "id": "3044c19eaafb26852a527cc9b900afaecc4cdcaa",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-24T00:03:40Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/3044c19eaafb26852a527cc9b900afaecc4cdcaa"
        },
        "date": 1774335855761,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 62094629,
            "unit": "ns/op\t      1000 commits\t   4979312 ns/commit\t  56852489 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 62094629,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 4979312,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 56852489,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}
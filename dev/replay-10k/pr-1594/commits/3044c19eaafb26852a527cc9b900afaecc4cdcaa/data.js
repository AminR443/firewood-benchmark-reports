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
          "message": "feat: better scripts 2",
          "timestamp": "2026-03-24T00:03:40Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/3044c19eaafb26852a527cc9b900afaecc4cdcaa"
        },
        "date": 1774335812675,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.102145539,
            "unit": "s/op",
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
          "message": "feat: better scripts 2",
          "timestamp": "2026-03-24T00:03:40Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/3044c19eaafb26852a527cc9b900afaecc4cdcaa"
        },
        "date": 1774335855761,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.062094629,
            "unit": "s/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/commit",
            "value": 0.004979312,
            "unit": "s/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/propose-on-db",
            "value": 0.056852489,
            "unit": "s/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}
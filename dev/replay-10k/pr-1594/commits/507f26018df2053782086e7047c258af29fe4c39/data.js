window.BENCHMARK_DATA = {
  "lastUpdate": 1774275053772,
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
          "id": "507f26018df2053782086e7047c258af29fe4c39",
          "message": "feat: update log file",
          "timestamp": "2026-03-20T20:06:49Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/507f26018df2053782086e7047c258af29fe4c39"
        },
        "date": 1774274982488,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.108021724,
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
          "id": "507f26018df2053782086e7047c258af29fe4c39",
          "message": "feat: update log file",
          "timestamp": "2026-03-20T20:06:49Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/507f26018df2053782086e7047c258af29fe4c39"
        },
        "date": 1774275052704,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.06769037,
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
            "value": 0.005390718,
            "unit": "s/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/propose-on-db",
            "value": 0.062000077,
            "unit": "s/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}
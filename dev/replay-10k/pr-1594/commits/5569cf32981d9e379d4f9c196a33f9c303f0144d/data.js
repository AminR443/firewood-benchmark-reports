window.BENCHMARK_DATA = {
  "lastUpdate": 1774397635654,
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
          "id": "5569cf32981d9e379d4f9c196a33f9c303f0144d",
          "message": "fix: new comment",
          "timestamp": "2026-03-24T21:47:08Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/5569cf32981d9e379d4f9c196a33f9c303f0144d"
        },
        "date": 1774397568594,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.105023091,
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
          "id": "5569cf32981d9e379d4f9c196a33f9c303f0144d",
          "message": "fix: new comment",
          "timestamp": "2026-03-24T21:47:08Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/5569cf32981d9e379d4f9c196a33f9c303f0144d"
        },
        "date": 1774397635225,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.064954801,
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
            "value": 0.005110774,
            "unit": "s/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/propose-on-db",
            "value": 0.059562105,
            "unit": "s/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}
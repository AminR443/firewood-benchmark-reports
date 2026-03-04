window.BENCHMARK_DATA = {
  "lastUpdate": 1772649457370,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR": [
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
          "id": "4db6b706d20b9ed3984297ebc4b23e803309452e",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-04T00:09:14Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/4db6b706d20b9ed3984297ebc4b23e803309452e"
        },
        "date": 1772649457020,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 6251467206,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 6251467206,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n4 procs"
          }
        ]
      }
    ]
  }
}
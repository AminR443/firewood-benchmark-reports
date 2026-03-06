window.BENCHMARK_DATA = {
  "lastUpdate": 1772833464468,
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
          "id": "b63653dca9bf1282317ecf7da3aea19133d586c4",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-06T11:55:19Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/b63653dca9bf1282317ecf7da3aea19133d586c4"
        },
        "date": 1772833464168,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 156242715,
            "unit": "ns/op\t      1000 commits\t    374218 ns/\t  31404977 ns/commit\t 123101344 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 156242715,
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
            "name": "BenchmarkReplayLog - ns/",
            "value": 374218,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 31404977,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 123101344,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}
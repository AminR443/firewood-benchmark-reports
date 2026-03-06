window.BENCHMARK_DATA = {
  "lastUpdate": 1772760179480,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR Commit": [
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
          "id": "e74a03af17daf7ac2755bc82c0607264334f440f",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-05T19:15:38Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/e74a03af17daf7ac2755bc82c0607264334f440f"
        },
        "date": 1772760179151,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 153820696,
            "unit": "ns/op\t      1000 commits\t    379448 ns/\t  30594557 ns/commit\t 121500099 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 153820696,
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
            "value": 379448,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 30594557,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 121500099,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}
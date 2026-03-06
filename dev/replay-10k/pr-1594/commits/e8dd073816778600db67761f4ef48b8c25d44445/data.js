window.BENCHMARK_DATA = {
  "lastUpdate": 1772759176716,
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
          "id": "e8dd073816778600db67761f4ef48b8c25d44445",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-05T19:15:38Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/e8dd073816778600db67761f4ef48b8c25d44445"
        },
        "date": 1772759176386,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 159676836,
            "unit": "ns/op\t      1000 commits\t    396545 ns/\t  31736288 ns/commit\t 126168964 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 159676836,
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
            "value": 396545,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 31736288,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 126168964,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}
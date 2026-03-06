window.BENCHMARK_DATA = {
  "lastUpdate": 1772819811879,
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
          "id": "ee53052e358fd6bcb775c65689f0ca555c19daf9",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-06T11:55:19Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/ee53052e358fd6bcb775c65689f0ca555c19daf9"
        },
        "date": 1772819811566,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 160714709,
            "unit": "ns/op\t      1000 commits\t    381438 ns/\t  32964854 ns/commit\t 125988888 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 160714709,
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
            "value": 381438,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 32964854,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 125988888,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}
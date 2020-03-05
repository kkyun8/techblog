# cheat sheet

### Branch&Checkout

##### local の他のブランチから特定のファイル取得

```bash
git checkout branch_name -- file_name
```

##### remote ブランチをそのまま local に

```bash
git checkout -b local_branch_name origin/remote_branch_name
```

##### Branch Delete

```bash
git checkout -D local_branch_name
```

### Git Log

```bash
git log --stat
```

```bash
git log --name-status
```

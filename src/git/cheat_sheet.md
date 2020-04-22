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

##### Remote Branch List

```bash
git branch -r
```

##### Local & Remote Branch List

```bash
git branch -a
```

##### Get Remote Branch

```bash
git checkout -t origin/BRANCH_NAME
```

### Git Log

```bash
git log --stat
```

```bash
git log --name-status
```

### Merge、Commit Rollback

##### git log で ORIG_HEAD 確認

```bash
git log
commit 326fc9f70d022afdd31b0072dbbae003783d77ed
Author: yourname <yourname@yourmail.com>
Date:   Mon Jul 16 23:17:56 2012 +0900

    test commit

commit 48eec1ddf73a7fb508ef664efd6b3d873631742f
Author: yourname <yourname@yourmail.com>
Date:   Mon Jul 16 23:16:14 2012 +0900

    first commit
```

##### reset で　ロールバック

```bash
git reset --hard 326fc9f70d022afdd31b0072dbbae003783d77ed
```

### Git Stash

##### 作業中のもの Stash 保存

```bash
git stash
```

##### 保存された Stash 確認

```bash
git stash list
```

##### 保存された Stash を workspace に戻して、stash 一覧から削除

```bash
git stash pop
```

##### Apply

```bash
git stash apply //最近のもの対象
git stash apply [stash]
```

##### Delete

```bash
git stash drop //最近のもの対象
git stash drop [stash]
```

##### 間違った Stash を取り消し

```bash
git stash show -p | git apply -R //最近のもの対象
git stash show -p [stash 이름] | git apply -R
```

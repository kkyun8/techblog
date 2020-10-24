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

##### Get Remote Branch

```bash
git checkout -t origin/BRANCH_NAME
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

### Git Log

```bash
git log --stat
```

```bash
git log --name-status
```

### repository を fork して、git 環境を作る

github、bitbuket などの CUI??Web から fork をクリックして指定した環境に fork repository を作成する
＊fork で作成された branch からは元の repository

すると、指定された環境に repository が作成される、fork した物をローカルに clone する

元の repository を remote 追加

```bash
git remote add main(origin以外設定) URL
```

自由に作業して、push or pull request で元の repository にデーターを追加する

### Merge、Commit Rollback して、push 履歴を取り消す

##### ①git log で ORIG_HEAD 確認

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

##### ②reset で　ロールバック

reset すると、指定したコミットが最後のコミットの状態になる

```bash
git reset --hard 326fc9f70d022afdd31b0072dbbae003783d77ed
```

##### ③reset した物を remote に 強制 Push する

ローカルのヒストリがリモートのヒストリより過去なので、普通の Push を使ったらエラーが発生する

```bash
git push origin master //error
```

force を使って Push する
＊Commit を取り消すより、強制的に戻すことに近い

```bash
git push -f origin master
```

##### revert で不要な commit を削除した revert commit 追加

TODO:

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
git stash show -p [stash 名] | git apply -R
```

### Git Clean

```bash
git clean -f <path> //file削除
git clean -fd //file dir削除
git clean -fd --dry-run //check
```

### Git Diff

```bash
git diff --name-status //変更されたファイル名とステータス
git diff --name-only
```

### Etc

コミット大文字、小文字認識設定（フォルダー名を大文字 → 小文字にしても git は認識しない）

```bash
git config core.ignorecase false
```

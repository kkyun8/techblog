# Spring boot

## Spring Boot VS Spring

簡単に言うと、既存 Spring でプロジェクト環境設定する作業が不便だったので
SpringBoot では AutoConfiguration を活用して面倒い設定作業を簡単にできるようになった

## Maven VS Gradle

Spring Boot プロジェクトを作成する際に、ビルド管理を Maven or Gradle どっちかにしないと行けないか

### Maven

・ビルド情報を pom.xml で管理する\_ちょっとわかりにくい
・＊ライブラリ、プラグインをダウンロードしたらローカルのキャッシに保存する

### Gradle

・オープンソース、アンドロイド OS ビルド用に採択
・Groovy、Domain-specific-language（\*.yml）で管理する\_簡単
・大規模プロジェクト用（multi-project）ビルドサポート、ビルド時間が短くなる

### 比較ポイント

・maven 의 경우 멀티 프로젝트에서 특정 설정을 다른 모듈에서 사용하려면 상속을 받아야 하지만 gradle 은 설정 주입 방식을 제공한다.
・maven は multi-project の特定設定を他のモジュール で使いたいなら、「承継」しないと行けないか、
gradle は「設定注入方式」になる

・또한 Gradle은 concurrent에 안전한 캐시를 허용한다.
・Gradle は concurrent に安全なキャッシを許可する

＊Gradle が最新のバージョンなので、やっぱり Gradle がいいところが多い、、

## JPA

```
Spring Data JPA は、Java Persistence API（JPA）のリポジトリサポートを提供します。JPA データソースにアクセスする必要があるアプリケーションの開発を容易にします。
```

https://spring.pleiades.io/spring-data/jpa/docs/current/reference/html/#preface

### Paging

### Validate Custom

基本、Spring Boot の　@Validate を使ったら、Request を受けた際に、バリデーションチェックが行うようになってるか、
以下の方法ならバリデーションチェックタイミングをずらすことができる。

```java
// 以下をimport
import javax.validation.ConstraintViolation;
import javax.validation.Validator;
.
.
.
    @Autowired
    public Validator validator;
.
.
.
    // errorResultにチェック後のエラーメッセージが出力される
    Set<ConstraintViolation<searchBean>> errorResult = validator.validate(searchBean);

```

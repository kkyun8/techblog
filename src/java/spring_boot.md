# Spring boot

## Spring Boot VS Spring

簡単に言うと、既存 Spring でプロジェクト環境設定する作業が不便だったので
SpringBoot では AutoConfiguration を活用して（spring-boot-starter-\*）面倒い設定作業を簡単にできるようになった

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

### Entity

```Java
@Entity
@Table(name = "user")
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long seq;

    @Column(name = "email")
    private String email;

    @Lob
    @Column(name="password")
    private String password;

    @Column(name = "name")
    private String name;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="create_at")
    private Date createAt;

}
```

@Entity：JPA で利用する Entity を指定する。name 設定も可能。

@Table、@Column：マッピングテーブル、カラム指定。カラムの size、length 定義も可能。

@GeneratedValue：基本キー設定。

```Java
     @GeneratedValue(strategy = GenerationType.AUTO)  //DBによってIDENTITY、SEQUENCE、TABLEの中で自動選択
     @GeneratedValue(strategy = GenerationType.IDENTITY)  //mysql、PostgresSQL、SQL Server、DB2なら利用可能
     @GeneratedValue(strategy = GenerationType.SEQUENCE)  //DBシーケンス、PostgresSQL、DB2、H2なら利用可能
     @GeneratedValue(strategy = GenerationType.TABLE)  //キー作成テーブル可能
```

@Temporal：カラムが日付タイプの場合

@Enumerated：カラムを ENUM タイプで使いたい場合

### Paging

Entity 作成->Repository 作成->JpaRepository を extends するだけでページング可能

```Java
/** UserRepository */
public interface UserRepository extends JpaRepository<User, Long>
{
}

/** UserRepositoryTest */
@Test
public void save()
{
	userRepository.save(User.builder().userId("user1").password("pass1").build());
}

@Test
public void findAll()
{
	userRepository.findAll();
}
```

パラメーターを Page or List の設定でページング処理ができるか、パラメーターを Page にした方が細かい処理ができる

```Java
Page<Member> findByName (String name, Pageable pageable);

List<Member> findByName (String name, Pageable pageable);
```

JPA のページングサポート関数については以下の PageImpl を参考

https://spring.pleiades.io/spring-data/commons/docs/current/api/org/springframework/data/domain/PageImpl.html

### SQL Custom JPQL/NativeQuery

SQL をカスタムしたい場合、JPQL or NativeQuery を利用する。

NativeQuery は文字の通りに java に書いた sql をそのまま実行すること。

JPQL は「Java Persistence Query Language」JPA で使用できるクエリ言語。
sql 内に if 文みたいな物を作成可能
https://spring.pleiades.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation

```Java
// NativeQuery
@Query(
 value = “SELECT * FROM USERS u WHERE u.status = 1”,
 nativeQuery = true)
Collection<User> findAllActiveUsersNative();

// JPQL
@Query(**”SELECT u FROM User u WHERE u.status = 1”**)
Collection<User> findAllActiveUsers();

```

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

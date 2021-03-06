# cheat sheet

## 特徴

### symbol

### hash

```ruby
strhash={"key1" => "value1", "key2" => "value2", "key3" => "value3"}
symbolhash={key1: "value1", key2: "value2", key3: "value3"}
p strhash["key1"] # => "value1"
p strhash[:key1]  # => nil
  
p symbolhash["key1"]# => nil
p symbolhash[:key1] # => "value1"
```

## Controller Model

### Create

```bash
rails generate controller users
rails g model users
```

### Delete

```bash
rails destroy controller user
rails destroy model user
```

## Migrate

### Migrate function

```bash
rails db:migrate
```

やり直し

```bash
rails db:rollback
rails db:migrate VERSION=0
```

リセット（ db:reset->db:seedも実行される）

```bash
db:reset
db:migrate:reset
```

### Migrate class

キャメルケースorケバブケースでクラス作成

```bash
rails generate migration クラス名
rails generate migration Addカラム名Toテーブル名 カラム名:データ型
rails g migration change_datatype_カラム名_of_テーブル名
rails g migration removeカラム名_to_テーブル名 カラム名 of removeカラム名_From_テーブル名

rails generate migration delete_users
class DeleteUsers < ActiveRecord::Migration[5.1]
  def change
    drop_table :users
  end
end
```

クラス削除

```bash
rails destroy migration クラス名
```

### Column

カラム追加

```ruby
class AddUsersToName < ActiveRecord::Migration
  def change
    add_column :users, :admin, :boolean, default: false, null: false, after: :password
  end
end
```

カラム削除

```ruby
class RemoveUsersToName < ActiveRecord::Migration
  def change
    remove_column :users, :name #Table > Column
  end
end
```

## Model

### 複数のprimary-key composite_primary_keys

RalisからDBに複数のprimary-keyを設定したい場合、以下のライブラリーを使ったら便利

<https://github.com/composite-primary-keys/composite_primary_keys>

config/environments/development.rb

```ruby
  # ...
  require 'composite_primary_keys'
end
```

Migrate

```ruby
    create_table :parents, primary_key: %w(name address) do |t|
      t.string  :name,    limit: 16,  default: '',  null: false
      t.string  :address, limit: 255, default: '',  null: false
      t.timestamps
    end
```

Model

```ruby
class User < ApplicationRecord
  self.primary_keys = :name, :address #<-
end
```

### Association

belongs_to「1対1」=

```ruby
class User < ApplicationRecord
  belongs_to :company #対象モデル名 users.company_idが基準（メイン）
end
```

has_one「1対1」=

```ruby
class User < ApplicationRecord
  has_one :company #対象モデル名 users.idが基準（メイン）
end
```

belongs_to has_one

```ruby
class User < ApplicationRecord
  belongs_to :company #users.company_id->company.id
end
class Company < ApplicationRecord
  has_one :user #user.company_id→company.id
end
```

has_many「1対多」IN

```ruby
class User < ApplicationRecord
  has_many :company #対象モデル名 users.idが基準（メイン） -> company.user_id
end
```

#### through（has_one か has_manyどっちかが必要）

has_one through「A対B」&「B対C」JOIN

```ruby
class User < ApplicationRecord
  has_one :homes # homes.user_id
  has_one :postal_code, through: :homes
end

class Home < ApplicationRecord
  belongs_to :users
  has_one :postal_code
end

class PostalCode < ApplicationRecord
  belongs_to :home # postal_code.home_id
end
```

has_many through「1対多」&「多対多」JOIN

```ruby
class User < ApplicationRecord
  has_many :companies
  has_many :staffs, through: :companies #company.user_id company.staff_id
end

class Company < ApplicationRecord
 #company.user_id company.staff_id
  belongs_to :users
  belongs_to :staffs
end

class Staff < ApplicationRecord
  has_many :companies
  has_many :users, through: :companies #company.user_id company.staff_id
end
```

has_and_belongs_to_many「多対多」（２つのテーブルのみ、結合用のテーブルが必要。）

```ruby
 #テーブル「head_item」が存在。head_item.head.id head_item.item.id
class Head < ApplicationRecord
  has_and_belongs_to_many :item
end

class Item < ApplicationRecord
  has_and_belongs_to_many :head
end
```

<!-- 
has_many :through関連付け
has_one :through関連付け
belongs_toとhas_oneのどちらを選ぶか
has_many :throughとhas_and_belongs_to_manyのどちらを選ぶか -->

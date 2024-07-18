create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  username varchar(255) not null
);

CREATE TABLE blog_category (
  id INT NOT NULL PRIMARY KEY auto_increment,
  alimentation TINYINT(1) NOT NULL DEFAULT 0,
  phytotherapy TINYINT(1) NOT NULL DEFAULT 0,
  aromatherapy TINYINT(1) NOT NULL DEFAULT 0,
  naturopathy TINYINT(1) NOT NULL DEFAULT 0
  );

  CREATE TABLE article (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content LONGTEXT NOT NULL,
  publication_date DATETIME NOT NULL,
  edit_date DATETIME NULL,
  blog_category_id INT NOT NULL,
  user_id INT unsigned NOT NULL,
  CONSTRAINT fk_article_blog_category
    FOREIGN KEY (blog_category_id)
    REFERENCES blog_category (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_article_user1
    FOREIGN KEY (user_id)
    REFERENCES user (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
    );


CREATE TABLE review (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  publication_date DATETIME NOT NULL,
  edit_date DATETIME NULL,
  content LONGTEXT NOT NULL,
  user_id INT unsigned NOT NULL,
  article_id INT NOT NULL,
  CONSTRAINT fk_review_user
    FOREIGN KEY (user_id)
    REFERENCES user (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_review_article
    FOREIGN KEY (article_id)
    REFERENCES article (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
    );

CREATE TABLE message (
  id INT PRIMARY KEY NOT NULL auto_increment,
  username VARCHAR(90) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message LONGTEXT NOT NULL,
  topic VARCHAR(45) NOT NULL,
  sending_time DATETIME NOT NULL
);

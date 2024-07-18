CREATE TABLE article (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(255) not null,
  title varchar(255) not null,
  category varchar(255),
  publication_date DATETIME NOT NULL,
  edit_date DATETIME NULL,
  content LONGTEXT NOT NULL,
  image_url varchar(255),
  alt_text varchar(255)
);


CREATE TABLE review (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(255) not null,
  email varchar(255) not null,
  title varchar(255) not null,
  publication_date DATETIME NOT NULL,
  edit_date DATETIME NULL,
  content LONGTEXT NOT NULL
);

CREATE TABLE message (
  id INT PRIMARY KEY NOT NULL auto_increment,
  username VARCHAR(90) NOT NULL,
  email VARCHAR(255) NOT NULL,
  title VARCHAR(90) NOT NULL,
  message LONGTEXT NOT NULL,
  topic VARCHAR(45) NOT NULL,
  sending_time DATETIME NOT NULL
);

CREATE TABLE about (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content LONGTEXT NOT NULL,
  image_url varchar(255),
  alt_text varchar(255)
);

CREATE TABLE consultation (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content LONGTEXT NOT NULL,
  image_url varchar(255),
  alt_text varchar(255)
);
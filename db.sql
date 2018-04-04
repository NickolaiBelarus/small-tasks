CREATE DATABASE test_db;
USE test_db;

CREATE TABLE users (  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,  username VARCHAR(80),  fullname VARCHAR(80),  password VARCHAR(100),  role VARCHAR(30),  status VARCHAR(30));
SHOW TABLES;
DESCRIBE users;
INSERT INTO `users` (`id`,`username`,`fullname`,`password`,`role`) VALUES (NULL, "superjo1994", "John Smith","123", 'guest');
INSERT INTO `users` (`id`,`username`,`fullname`,`password`,`role`) VALUES (NULL, "jbrown500", "John Brown","qwerty", 'user');
INSERT INTO `users` (`id`,`username`,`fullname`,`password`,`role`) VALUES (NULL, "robbinshunter", "Tom Robbins","56457yt43", 'admin');
INSERT INTO `users` (`id`,`username`,`fullname`,`password`,`role`) VALUES (NULL, "tina.turner1992", "Tina Turner","1992", 'user');
SELECT * FROM users;

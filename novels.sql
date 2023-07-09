CREATE DATABASE k_greatNovelsDB;

USE k_greatNovelsDB;

CREATE USER 'k_greatNovels_user'@"%" IDENTIFIED WITH mysql_native_password BY 'gr8Novels';

GRANT ALL ON k_greatNovelsDB.* TO 'k_greatNovels_user'@'%';

CREATE TABLE authors (
    id INT auto_increment,
    nameFirst VARCHAR(255) NOT NULL,
    nameLast VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE genres (
    id INT auto_increment,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE novels (
    id INT auto_increment,
    title VARCHAR(255) NOT NULL,
    authorId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
    FOREIGN KEY (authorId) REFERENCES authors(id)
);

CREATE TABLE novelGenres (
    id INT auto_increment,
    novelId INT NOT NULL,
    genreId INT NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
    FOREIGN KEY (novelId) REFERENCES novels(id),
    FOREIGN KEY (genreId) REFERENCES genres(id)
);

INSERT INTO authors (nameFirst, nameLast) VALUES (
    "Bram", "Stoker"),
    ("Oscar", "Wilde"),
    ("Alice", "Walker"),
    ("Leo", "Tolstoy"),
    ("Charles", "Dickens"),
    ("Arthur", "Miller"),
    ("Alexandre", "Dumas"),
    ("Arthur Conan", "Doyle"),
    ("Robert Louis", "Stevenson"),
    ("Fyodor", "Dostoyevsky"),
    ("Agatha", "Christie"),
    ("Ray", "Bradbury"),
    ("George", "Orwell"),
    ("H.G.", "Wells"),
    ("Chinua", "Achebe");

    INSERT INTO genres (name) VALUES (
    "Fiction"),
    ("Horror"),
    ("Fantasy"),
    ("Gothic"),
    ("Historical Fiction"),
    ("War"),
    ("Russian Literature"),
    ("Drama"),
    ("Plays"),
    ("Adventure"),
    ("French Literature"),
    ("Mystery"),
    ("Crime"),
    ("Thriller"),
    ("Science Fiction"),
    ("Dystopia"),
    ("Time Travel"),
    ("African Literature");

    INSERT INTO novels (title, authorId) VALUES (
    "Dracula", 1),
    ("The Picture of Dorian Gray", 2),
    ("The Color Purple", 3),
    ("War and Peace", 4),
    ("A Tale of Two Cities", 5),
    ("The Crucible", 6),
    ("The Three Musketeers", 7),
    ("The Hound of the Baskervilles", 8),
    ("The Strange Case of Dr. Jekyll and Mr. Hyde", 9),
    ("Crime and Punishment", 10),
    ("Murder on the Orient Express", 11),
    ("Fahrenheit 451", 12),
    ("Animal Farm", 13),
    ("The Time Machine", 14),
    ("Things Fall Apart", 15);

INSERT INTO novelGenres (novelId, genreId) VALUES (
    1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 2),
    (2, 3),
    (2, 4),
    (3, 1),
    (3, 5),
    (4, 1),
    (4, 5),
    (4, 6),
    (4, 7),
    (5, 1),
    (5, 5),
    (6, 1),
    (6, 5),
    (6, 8),
    (6, 9),
    (7, 1),
    (7, 5),
    (7, 10),
    (7, 11),
    (8, 1),
    (8, 12),
    (8, 13),
    (8, 14),
    (9, 1),
    (9, 12),
    (9, 15),
    (9, 2),
    (10, 1),
    (10, 7),
    (10, 12),
    (11, 1),
    (11, 12),
    (12, 1),
    (12, 15),
    (12, 16),
    (13, 1),
    (13, 15),
    (13, 16),
    (14, 1),
    (14, 15),
    (14, 17),
    (15, 1),
    (15, 5),
    (15, 18);


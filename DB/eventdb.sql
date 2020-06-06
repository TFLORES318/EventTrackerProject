-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventDB` ;

-- -----------------------------------------------------
-- Schema eventDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventDB` DEFAULT CHARACTER SET utf8 ;
USE `eventDB` ;

-- -----------------------------------------------------
-- Table `book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book` ;

CREATE TABLE IF NOT EXISTS `book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `author` VARCHAR(100) NOT NULL,
  `pages` INT NOT NULL,
  `summary` VARCHAR(1000) NOT NULL,
  `create_date` DATETIME NOT NULL,
  `update_date` DATETIME NULL,
  `enabled` TINYINT NOT NULL DEFAULT 1,
  `cover_image_url` BLOB NULL,
  `genre` VARCHAR(100) NOT NULL,
  `year_published` VARCHAR(4) NULL,
  `publisher` VARCHAR(1000) NULL,
  `isbn` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `book`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventDB`;
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (1, 'Test', 'Test ', 100, 'Testing', '2020-06-04 19:26:00', NULL, 1, NULL, 'Test', NULL, NULL, NULL);
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (2, 'One Day in December', 'Josie Silver', 393, 'A story about love at first sight over the course of 10 years. Missed opportunities, life events continuing but the love is all still present of Laurie and Jack, while Jack is in a serious relationship with Sarah, when that is over, when Laurie gets married... This book will make you believe that you should always take a chance and make you think about the chances you missed.', '2020-06-04 19:45:00', NULL, 1, NULL, 'Romance', '2018', 'Penguin Random House', '9780525574682');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (3, 'Something in the Water', 'Catherine Steadman', 354, 'Erin and Mark are newlyweds who are as happy can be. During their dream honeymoon, they come across a mysterious and shocking discovery deep in the waters of Bora Bora. This secret has the potential to better their lives... or tear them apart. ', '2020-06-04 19:48:00', NULL, 1, NULL, 'Thriller', '2018', 'Penguin Random House', '9781524797188');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (4, 'Then She Was Gone', 'Lisa Jewell', 384, 'In 2005, 15 year old Ellie Mack disappears never to be seen again until 10 years later... when her remains are discovered. Ellie\'s mother, Laurel is finally able to lay her daughter to rest after a grueling search and years of agony. But despite what seems like closure, Laurel soon meets a man named Floyd, whose nine year old daughter Poppy eerily reminds her of Ellie. Now, unanswered questions come back into Laurel\'s head - where was Ellie this whole time, what exactly happened to her and who was involved? ', '2020-06-04 19:53:00', NULL, 1, NULL, 'Mystery', '2017', 'Atria Books', '9781501154652');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (5, 'An American Marriage', 'Tayari Jones', 308, 'Newlyweds Celestial and Roy are figuring out their lives together as their careers are growing and some differences cause some distance in their marriage. What seemed like a married couples\' normal issues soon grow into life changing circumstances when Roy is accused of rape. Celestial knows Roy did not commit this crime and stays devoted to Roy while he is sentenced to twelve years in prison. Celestial soon confides in Roy\'s best man and best friend, Andre and begins to lose the love she once had for Roy. Suddenly, Roy\'s conviction is overturned seven years early and what follows is the guilt and uncomforting feeling of trying to navigate back into real life when so much has changed.', '2020-06-04 20:01:00', NULL, 1, NULL, 'Novel', '2018', 'Workman Publishing Company', '9781616201340');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (6, 'Sharp Objects', 'Gillian Flynn', 328, 'Journalist Camille Preaker returns to her hometown of Wind Gap, Missouri to cover the death of two little girls. Camille is not happy to go back to her hometown which holds terrible memories and horrible secrets of her past. Back in Wind Gap, Camille stays at her mother\'s house to avoid spending money in a hotel and there gets to know her half sister Ama, who seems to hold all the secrets of the murders in this town. ', '2020-06-04 20:07:00', NULL, 1, NULL, 'Mystery', '2006', 'Shaye Areheart Books', '9780307341556');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (7, 'The Art of Racing in the Rain', 'Garth Stein', 321, 'During his final moments, Enzo the dog recounts his life. From being picked at a puppy farm by his owner Denny, to Denny meeting and soon marrying Eve, to soon becoming a big brother to his human sister Zoe. Denny, a race car driver, has showed Enzo his driving videos throughout his life. Enzo, picturing the events of his life as he is driving a race car, tells a beautiful story of the triumphs, hardships and happy moments of him and his best friend\'s years together.', '2020-06-04 20:18:00', NULL, 1, NULL, 'Novel', '2008', 'HarperCollins', '9780061537936');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (8, 'The Wife Between Us', 'Greer Hendricks', 346, 'It\'s about a jealous wife, obsessed with her replacement. It\'s about a younger woman set to marry the man she loves. The first wife seems like a disaster; her replacement is the perfect woman. You will assume you know the motives, the history, the anatomy of the relationships. But when you read on, you\'ll realize nothing is what it seems.', '2020-06-04 20:21:00', NULL, 1, NULL, 'Thriller', '2018', 'Macmillan Publishers', '9781250130945');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (9, 'The Good Daughter', 'Karin Slaughter', 550, 'Twenty-eight years ago, Charlotte and Samantha Quinn\'s happy small-town family life was torn apart by a terrifying attack on their family home. It left their mother dead. It left their father — Pikeville\'s notorious defense attorney — devastated. Twenty-eight years later, and Charlie has followed in her father\'s footsteps to become a lawyer herself — the ideal good daughter. But when violence comes to Pikeville again — and a shocking tragedy leaves the whole town traumatized — Charlie is plunged into a nightmare. Not only is she the first witness on the scene, but it\'s a case that unleashes the terrible memories she\'s spent so long trying to suppress. Because the shocking truth about the crime that destroyed her family nearly thirty years ago won\'t stay buried forever.', '2020-06-04 20:25:00', NULL, 1, NULL, 'Mystery', '2017', 'William Morrow', '9780062430243');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (10, 'The Woman in the Window', 'A.J. Finn', 608, 'Anna Fox lives alone—a recluse in her New York City home, unable to venture outside. She spends her day drinking wine (maybe too much), watching old movies, recalling happier times . . . and spying on her neighbors. Then the Russells move into the house across the way: a father, mother, their teenaged son. The perfect family. But when Anna, gazing out her window one night, sees something she shouldn’t, her world begins to crumble—and its shocking secrets are laid bare. What is real? What is imagined? Who is in danger? Who is in control? In this diabolically gripping thriller, no one—and nothing—is what it seems.', '2020-06-04 20:28:00', NULL, 1, NULL, 'Mystery', '2018', 'HarperCollins', '9780062791450');
INSERT INTO `book` (`id`, `title`, `author`, `pages`, `summary`, `create_date`, `update_date`, `enabled`, `cover_image_url`, `genre`, `year_published`, `publisher`, `isbn`) VALUES (11, 'How Not to Die Alone', 'Richard Roper', 336, 'All Andrew wants is to be normal. That\'s why his coworkers believe he has the perfect wife and two children waiting at home for him after a long day. But the truth is, his life isn\'t exactly as people think. When a new coworker, Peggy, starts to take an interest in Andrew\'s life, Andrew wants to tell the truth but is it too late? Does it matter - as his little white lie is about to catch up with him. Because in all of Andrew\'s efforts to fit in, he\'s forgotten one important thing: how to really live. And maybe, it\'s finally time for him to start.', '2020-06-04 20:35:00', NULL, 1, NULL, 'Novel', '2019', 'G.P. Putnam\'s Sons', '9780525539889');

COMMIT;


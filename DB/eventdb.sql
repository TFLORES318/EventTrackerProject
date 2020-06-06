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
  `year_published` YEAR NULL,
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

COMMIT;


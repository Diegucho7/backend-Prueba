-- Active: 1732252777500@@localhost@3307
 
  USE `Prueba`;
  
  DROP TABLE IF EXISTS `users`;

 CREATE TABLE IF NOT EXISTS `users` (
        `id` CHAR(60) PRIMARY KEY DEFAULT (UUID()),
        `name` VARCHAR(255) NOT NULL,
        `last_name` VARCHAR(255) NOT NULL,
        `phone` CHAR(10) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `address` VARCHAR(255) NOT NULL
       
        )
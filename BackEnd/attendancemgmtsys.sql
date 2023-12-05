-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2023 at 02:32 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+08:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendancemgmtsys`
--

CREATE DATABASE attendancemgmtsys;
USE attendancemgmtsys;

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `addressID` int(11) NOT NULL,
  `street` varchar(32) NOT NULL,
  `barangay` varchar(32) NOT NULL,
  `postalCode` varchar(32) DEFAULT NULL,
  `city_municipality` varchar(32) NOT NULL,
  `province` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



-- --------------------------------------------------------

--
-- Table structure for table `daysession`
--

CREATE TABLE `daysession` (
  `sessionID` int(11) NOT NULL,
  `employeeID` int(11) NOT NULL,
  `reasonID` int(11) DEFAULT NULL,
  `timeIn` DATETIME DEFAULT NULL,
  `timeOut` DATETIME DEFAULT NULL,
  `dayStatus` enum('paid_leave','absent','present','non_work','late','inspect','excused','pending') NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employeeID` int(11) NOT NULL,
  `firstName` varchar(32) NOT NULL,
  `middleName` varchar(32) DEFAULT NULL,
  `lastName` varchar(32) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `civilStatus` enum('Single','Married','Widow','Legally Separated') NOT NULL,
  `addressID` int(11) NOT NULL,
  `birthDate` date NOT NULL,
  `jobPosition` varchar(32) NOT NULL,
  `currentStatus` enum('Fired','Working Employee') NOT NULL DEFAULT 'Working Employee',
  `contactNumber` varchar(16) NOT NULL,
  `email` varchar(128) DEFAULT NULL,
  `biometric` varchar(255) DEFAULT NULL,
  `imageDir` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



-- --------------------------------------------------------

--
-- Table structure for table `excusereason`
--

CREATE TABLE `excusereason` (
  `reasonID` int(11) NOT NULL,
  `reason` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `holidays`
--

CREATE TABLE `holidays` (
  `holidaysID` int(11) NOT NULL,
  `holidayName` varchar(32) NOT NULL,
  `holidayDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `leavesID` int(11) NOT NULL,
  `leaveName` varchar(32) NOT NULL,
  `defaultDays` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `leaveDays`(
`leaveDaysID` INT AUTO_INCREMENT PRIMARY KEY,
`leaveID` INT NOT NULL,
`employeeID` INT NOT NULL,
`daysLeft` TINYINT NOT NULL,
`activeYear` DATE NOT NULL
);


-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `logID` int(11) NOT NULL,
  `generatedBy` int(11) DEFAULT NULL,
  `dateGenerated` DATETIME DEFAULT NOW() NOT NULL,
  `changeDesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `shiftID` int(11) NOT NULL,
  `employeeID` int(11) NOT NULL,
  `reasonID` int(11) DEFAULT NULL,
  `timeIn` time DEFAULT NULL,
  `timeOut` time DEFAULT NULL,
  `leaveID` int(11) DEFAULT NULL,
  `shiftDate` date NOT NULL,
  `isWork` enum('True','False') DEFAULT 'True' NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `employeeID` int(11) NOT NULL UNIQUE,
  `userPassword` varchar(64) NOT NULL,
  `position` enum('Management','Admin','Suspended') NOT NULL,
  `lastLogin` DATETIME DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`addressID`);

--
-- Indexes for table `daysession`
--
ALTER TABLE `daysession`
  ADD PRIMARY KEY (`sessionID`),
  ADD KEY `fk_session_employeeID` (`employeeID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employeeID`),
  ADD KEY `fk_employee_address` (`addressID`),
  ADD UNIQUE (email);

--
-- Indexes for table `excusereason`
--
ALTER TABLE `excusereason`
  ADD PRIMARY KEY (`reasonID`);

--
-- Indexes for table `holidays`
--
ALTER TABLE `holidays`
  ADD PRIMARY KEY (`holidaysID`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`leavesID`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`logID`),
  ADD KEY `fk_logs_createdBy` (`generatedBy`) USING BTREE;

--
-- Indexes for table `shift`
--
ALTER TABLE `shift`
  ADD PRIMARY KEY (`shiftID`),
  ADD KEY `fk_shift_employeeID` (`employeeID`) USING BTREE,
  ADD KEY `fk_shift_leaveID` (`leaveID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`),
  ADD KEY `fk_user_employeeID` (`employeeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `daysession`
--
ALTER TABLE `daysession`
  MODIFY `sessionID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employeeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `excusereason`
--
ALTER TABLE `excusereason`
  MODIFY `reasonID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `holidays`
--
ALTER TABLE `holidays`
  MODIFY `holidaysID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `leavesID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `logID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shift`
--
ALTER TABLE `shift`
  MODIFY `shiftID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `daysession`
--
ALTER TABLE `daysession`
  ADD CONSTRAINT `fk_session_employeeID` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`),
  ADD CONSTRAINT `fk_session_reasonID` FOREIGN KEY (`reasonID`) REFERENCES `excusereason` (`reasonID`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fk_employee_address` FOREIGN KEY (`addressID`) REFERENCES `address` (`addressID`);

--
-- Constraints for table `excusereason`
--

--
-- Constraints for table `leavesDays`
--

ALTER TABLE `leaveDays`
  ADD CONSTRAINT `fk_leaveDays_leaveID` FOREIGN KEY(`leaveID`) REFERENCES `leaves`(`leavesID`),
  ADD CONSTRAINT `fk_leaveDays_employeeID` FOREIGN KEY(`employeeID`) REFERENCES `employee`(`employeeID`);

--
-- Constraints for table `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `fk_logs_generatedBy` FOREIGN KEY (`generatedBy`) REFERENCES `user` (`userID`);

--
-- Constraints for table `shift`
--
ALTER TABLE `shift`
  ADD CONSTRAINT `fk_shift_employeeID` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`),
  ADD CONSTRAINT `fk_shift_leaveID` FOREIGN KEY (`leaveID`) REFERENCES `leaves` (`leavesID`),
  ADD CONSTRAINT `fk_shift_reasonID` FOREIGN KEY (`reasonID`) REFERENCES `excusereason` (`reasonID`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_employeeID` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO `address` (street, barangay, city_municipality, province) VALUES
('Grove','Tarmac','Mandaue','Cebu'),
('Leaf','Palpa','Minglanilla','Cebu'),
('Tintay','Merkado','Bogo','Cebu'),
('Dimasalang Street', 'Kamputhaw', 'Mandaue', 'Cebu'),
('M. J. Cuenco Avenue', 'Duljo Fatima', 'Bantayan', 'Cebu'),
('Dimasalang Street', 'Guadalupe', 'Carcar City', 'Cebu'),
('Noli Me Tangere Street', 'Pit-os', 'Bantayan', 'Cebu'),
('Noli Me Tangere Street', 'Guadalupe', 'Cebu City', 'Cebu'),
('S. D. Tecson Street', 'Luz', 'Toledo City', 'Cebu'),
('M. J. Cuenco Avenue', 'Pit-os', 'Carcar City', 'Cebu'),
('S. D. Tecson Street', 'Adlaon', 'Cebu City', 'Cebu'),
('P. Del Rosario Street', 'Duljo Fatima', 'Cebu City', 'Cebu'),
('A. Soriano Jr Avenue', 'Luz', 'Mandaue', 'Cebu'),
('P. Del Rosario Street', 'Guadalupe', 'Lapu-Lapu City', 'Cebu'),
('S. D. Tecson Street', 'Luz', 'Lapu-Lapu City', 'Cebu'),
('M. J. Cuenco Avenue', 'Pit-os', 'Mandaue', 'Cebu'),
('Dimasalang Street', 'Luz', 'Carcar City', 'Cebu'),
('P. Del Rosario Street', 'Pit-os', 'Mandaue', 'Cebu'),
('Noli Me Tangere Street', 'Kamputhaw', 'Mandaue', 'Cebu'),
('P. Del Rosario Street', 'Pit-os', 'Lapu-Lapu City', 'Cebu'),
('S. D. Tecson Street', 'Luz', 'Toledo City', 'Cebu'),
('A. Soriano Jr Avenue', 'Duljo Fatima', 'Lapu-Lapu City', 'Cebu'),
('A. Soriano Jr Avenue', 'Busay', 'Cebu City', 'Cebu'),
('P. Del Rosario Street', 'Busay', 'Toledo City', 'Cebu'),
('P. Del Rosario Street', 'Guadalupe', 'Bantayan', 'Cebu'),
('S. D. Tecson Street', 'Pit-os', 'Toledo City', 'Cebu'),
('P. Del Rosario Street', 'Pit-os', 'Cebu City', 'Cebu'),
('S. D. Tecson Street', 'Busay', 'Carcar City', 'Cebu'),
('A. Soriano Jr Avenue', 'Busay', 'Toledo City', 'Cebu'),
('S. D. Tecson Street', 'Guadalupe', 'Mandaue', 'Cebu'),
('Dimasalang Street', 'Kamputhaw', 'Toledo City', 'Cebu'),
('Noli Me Tangere Street', 'Busay', 'Toledo City', 'Cebu'),
('M. J. Cuenco Avenue', 'Adlaon', 'Toledo City', 'Cebu'),
('Dimasalang Street', 'Pit-os', 'Toledo City', 'Cebu'),
('P. Del Rosario Street', 'Kamputhaw', 'Lapu-Lapu City', 'Cebu'),
('Dimasalang Street', 'Kamputhaw', 'Cebu City', 'Cebu'),
('S. D. Tecson Street', 'Kamputhaw', 'Cebu City', 'Cebu'),
('Dimasalang Street', 'Adlaon', 'Mandaue', 'Cebu'),
('A. Soriano Jr Avenue', 'Kamputhaw', 'Bantayan', 'Cebu'),
('Dimasalang Street', 'Adlaon', 'Mandaue', 'Cebu'),
('P. Del Rosario Street', 'Guadalupe', 'Mandaue', 'Cebu'),
 ('A. Soriano Jr Avenue', 'Guadalupe', 'Carcar City', 'Cebu'),
 ('P. Del Rosario Street', 'Pit-os', 'Mandaue', 'Cebu'),
 ('S. D. Tecson Street', 'Adlaon', 'Toledo City', 'Cebu'),
 ('M. J. Cuenco Avenue', 'Guadalupe', 'Cebu City', 'Cebu'),
 ('P. Del Rosario Street', 'Duljo Fatima', 'Lapu-Lapu City', 'Cebu'),
 ('M. J. Cuenco Avenue', 'Guadalupe', 'Toledo City', 'Cebu'),
 ('Noli Me Tangere Street', 'Adlaon', 'Carcar City', 'Cebu'),
 ('P. Del Rosario Street', 'Kamputhaw', 'Carcar City', 'Cebu'),
 ('Noli Me Tangere Street', 'Duljo Fatima', 'Bantayan', 'Cebu'),
 ('Dimasalang Street', 'Guadalupe', 'Carcar City', 'Cebu'),
 ('A. Soriano Jr Avenue', 'Duljo Fatima', 'Bantayan', 'Cebu'),
 ('Dimasalang Street', 'Kamputhaw', 'Mandaue', 'Cebu');

INSERT INTO `employee` (firstName,middleName,lastName,gender,civilStatus,addressID,birthDate,jobPosition,currentStatus,contactNumber,email,imageDir) VALUES
('Joselito','Loser','Yap','Male','Single','1','2003-11-28','Janitor',"Working Employee",'01234567890','joselito@gmail.com','1_Employee.png'),
('Lance','Big','Ramoose','Male','Legally Separated','2','2003-09-06','Janitor', "Working Employee",'01234567891','lance@gmail.com','2_Employee.png'),
('Simon','Something','Montana','Male','Widowed','3','2003-9-28','Janitor',"Working Employee",'01234567892','simon@gmail.com','3_Employee.png'),
('Jocko', 'A', 'Yukhnov', 'Male', 'Legally Separated', '4', '1975-01-29', 'Human Resources', 'Fired', '2114345834', 'jyukhnov0@yelp.com','4_Employee.png'),
('Alisha', 'A', 'Goodredge', 'Female', 'Legally Separated', '5', '1971-06-19', 'Plant Factory Worker', 'Working Employee', '3554763618', 'agoodredge1@imageshack.us','5_Employee.png'),
('Wat', 'Q', 'Harrild', 'Male', 'Single', '6', '1977-10-29', 'Inventory Clerk', 'Working Employee', '4522753171', 'wharrild2@hubpages.com','6_Employee.png'),
('Roseanna', 'N', 'Doyley', 'Female', 'Widow', '7', '1996-04-30', 'Finance', 'Working Employee', '9104500575', 'rdoyley3@cbslocal.com','7_Employee.png'),
('Bertrand', 'X', 'Trask', 'Male', 'Single', '8', '1997-08-28', 'Plant Factory Worker', 'Working Employee', '9457945033', 'btrask4@guardian.co.uk','8_Employee.png'),
('Paule', 'S', 'Steggles', 'Female', 'Legally Separated','9', '1987-08-19', 'Finance', 'Working Employee', '7252805601', 'psteggles5@issuu.com','9_Employee.png'),
('Sampson', 'X', 'Breckon', 'Male', 'Legally Separated', '10', '1999-08-31', 'Factory Worker', 'Fired', '7643244269', 'sbreckon6@networkadvertising.org','10_Employee.png'),
('Corilla', 'T', 'Point', 'Female', 'Widow', '11', '1992-02-14', 'Driver', 'Working Employee', '6024092682', 'cpoint7@gravatar.com','11_Employee.png'),
('Melba', 'N', 'Montes', 'Female', 'Single', '12', '1996-02-29', 'Plant Factory Worker', 'Fired', '1855290060', 'mmontes8@linkedin.com','12_Employee.png'),
('Retha', 'C', 'Hatton', 'Female', 'Legally Separated', '13', '1993-05-09', 'Plant Factory Worker', 'Working Employee', '8915517419', 'rhatton9@virginia.edu','13_Employee.png'),
('Gauthier', 'E', 'Fozard', 'Male', 'Legally Separated', '14', '1978-09-10', 'Finance', 'Fired', '4438972484', 'gfozarda@skyrock.com','14_Employee.png'),
('Tedd', 'E', 'Heinsen', 'Male', 'Married', '15', '1984-12-13', 'Plant Factory Worker', 'Working Employee', '7145952457', 'theinsenb@rambler.ru','15_Employee.png'),
('Julissa', 'R', 'Penhalewick', 'Female', 'Single', '16', '1989-12-17', 'Plant Factory Worker', 'Working Employee', '9426023026', 'jpenhalewickc@bing.com','16_Employee.png'),
('Rozanna', 'Y', 'Smidmoor', 'Female', 'Widow', '17', '1990-12-28', 'Plant Factory Worker', 'Working Employee', '9371704764', 'rsmidmoord@about.com','17_Employee.png'),
('Barthel', 'L', 'McMorran', 'Male', 'Single', '18', '1986-08-28', 'Factory Worker', 'Working Employee', '1516465520', 'bmcmorrane@t.co','18_Employee.png'),
('Jacquelyn', 'B', 'Dawson', 'Female', 'Widow', '19', '1994-10-24', 'Plant Factory Worker', 'Working Employee', '8413350635', 'jdawsonf@plala.or.jp','19_Employee.png'),
('Jacob', 'M', 'Di Biagi', 'Male', 'Single', '20', '1990-10-14', 'Factory Worker', 'Working Employee', '7419463996', 'jdibiagig@bloglines.com','20_Employee.png'),
('Dietrich', 'U', 'Coe', 'Male', 'Legally Separated', '21', '1990-11-22', 'Plant Factory Worker', 'Working Employee', '3895217039', 'dcoeh@prlog.org','21_Employee.png'),
('Marylou', 'J', 'Cock', 'Bigender', 'Single', '22', '1993-01-17', 'Plant Factory Worker', 'Working Employee', '1707491623', 'mcocki@purevolume.com','22_Employee.png'),
('Eldin', 'Y', 'Menure', 'Male', 'Single', '23', '2000-08-25', 'Factory Worker', 'Working Employee', '6031696567', 'emenurej@dmoz.org','23_Employee.png'),
('Hilliard', 'Y', 'Lough', 'Bigender', 'Single', '24', '1979-05-29', 'Plant Factory Worker', 'Fired', '7994705352', 'hloughk@themeforest.net','24_Employee.png'),
('Windy', 'O', 'Littleproud', 'Female', 'Married', '25', '1992-05-16', 'Factory Worker', 'Fired', '1666108626', 'wlittleproudl@newyorker.com','25_Employee.png'),
('Jamey', 'V', 'Mousdall', 'Male', 'Single', '26', '2000-05-11', 'Plant Factory Worker', 'Working Employee', '8718641497', 'jmousdallm@boston.com','26_Employee.png'),
('Gene', 'V', 'Barnwille', 'Male', 'Widow', '27', '1982-11-15', 'Plant Factory Worker', 'Working Employee', '4101051922', 'gbarnwillen@storify.com','27_Employee.png'),
('Gilligan', 'C', 'Trickett', 'Female', 'Married', '28', '1999-01-20', 'Factory Worker', 'Working Employee', '9303975403', 'gtricketto@tinyurl.com','28_Employee.png'),
('Margette', 'W', 'Petrowsky', 'Female', 'Married', '29', '1978-08-15', 'Inventory Clerk', 'Working Employee', '5722454936', 'mpetrowskyp@bigcartel.com','29_Employee.png'),
('Cobby', 'G', 'McGee', 'Male', 'Married', '30', '1978-05-27', 'Plant Factory Worker', 'Working Employee', '6537558085', 'cmcgeeq@wisc.edu','30_Employee.png'),
('Alica', 'K', 'Beecroft', 'Female', 'Legally Separated', '31', '1995-08-08', 'Factory Worker', 'Working Employee', '4938784349', 'abeecroftr@google.com.au','31_Employee.png'),
('Susanetta', 'D', 'Whooley', 'Female', 'Married', '32', '1976-06-03', 'Factory Worker', 'Working Employee', '6774669186', 'swhooleys@wikispaces.com','32_Employee.png'),
('Farlee', 'L', 'Greser', 'Male', 'Legally Separated', '33', '1998-07-01', 'Factory Worker', 'Fired', '4136288611', 'fgresert@vinaora.com','33_Employee.png'),
('Atlante', 'E', 'Avesque', 'Female', 'Legally Separated', '34', '1999-11-01', 'Driver', 'Working Employee', '1859335872', 'aavesqueu@stanford.edu','34_Employee.png'),
('Riobard', 'H', 'Kirsche', 'Male', 'Single', '35', '1978-12-16', 'Human Resources', 'Fired', '1112685185', 'rkirschev@google.it','35_Employee.png'),
('Wyatan', 'L', 'Freed', 'Genderfluid', 'Widow', '36', '1974-03-15', 'Driver', 'Fired', '4348446673', 'wfreedw@behance.net','36_Employee.png'),
('Shurlock', 'F', 'Wollard', 'Male', 'Legally Separated', '37', '1980-06-06', 'Factory Worker', 'Working Employee', '4229122308', 'swollardx@deliciousdays.com','37_Employee.png'),
('Kessia', 'H', 'Geerdts', 'Female', 'Married', '38', '1971-04-11', 'Factory Worker', 'Fired', '7138558275', 'kgeerdtsy@boston.com','38_Employee.png'),
('Sheila', 'K', 'Santon', 'Female', 'Single', '39', '1977-11-13', 'Plant Factory Worker', 'Fired', '8323338316', 'ssantonz@google.es','39_Employee.png'),
('Erek', 'P', 'Lauks', 'Male', 'Married', '40', '1982-04-11', 'Factory Worker', 'Working Employee', '2189868855', 'elauks10@usnews.com','40_Employee.png'),
('Bonnee', 'V', 'Cubbinelli', 'Female', 'Married', '41', '1987-04-19', 'Plant Factory Worker', 'Fired', '9965636793', 'bcubbinelli11@vk.com','41_Employee.png'),
('Cornela', 'L', 'Fillon', 'Female', 'Widow', '42', '2000-01-18', 'Plant Factory Worker', 'Working Employee', '4974230511', 'cfillon12@fema.gov','42_Employee.png'),
('Ebonee', 'K', 'Bewfield', 'Female', 'Married', '43', '1979-10-13', 'Driver', 'Working Employee', '6136451675', 'ebewfield13@cdbaby.com','43_Employee.png'),
('Marsh', 'S', 'Freebury', 'Male', 'Widow', '44', '1979-03-26', 'Factory Worker', 'Working Employee', '3554901166', 'mfreebury14@de.vu','44_Employee.png'),
('Aline', 'B', 'Pavelin', 'Female', 'Widow', '45', '1994-02-06', 'Plant Factory Worker', 'Working Employee', '8345291031', 'apavelin15@icq.com','45_Employee.png'),
('Marisa', 'I', 'Massot', 'Female', 'Married', '46', '1982-07-04', 'Driver', 'Working Employee', '2773442888', 'mmassot16@woothemes.com','46_Employee.png'),
('Herman', 'C', 'Courtonne', 'Male', 'Legally Separated', '47', '1979-05-04', 'Driver', 'Working Employee', '5199308377', 'hcourtonne17@tmall.com','47_Employee.png'),
('Agnes', 'P', 'Mimmack', 'Female', 'Married', '48', '1973-07-20', 'Plant Factory Worker', 'Working Employee', '6687623296', 'amimmack18@discuz.net','48_Employee.png'),
('Leigha', 'M', 'Knapton', 'Female', 'Single', '49', '1987-05-16', 'Factory Worker', 'Working Employee', '7525916977', 'lknapton19@bbb.org','49_Employee.png'),
('Jdavie', 'P', 'Witt', 'Male', 'Married', '50', '1996-07-13', 'Finance', 'Fired', '3239584592', 'jwitt1a@issuu.com','50_Employee.png'),
('Yard', 'T', 'Courtman', 'Male', 'Legally Separated', '51', '1979-11-19', 'Plant Factory Worker', 'Working Employee', '9992462160', 'ycourtman1b@chron.com','51_Employee.png'),
('Tommie', 'G', 'Bartrap', 'Male', 'Widow', '52', '1988-03-21', 'Plant Factory Worker', 'Working Employee', '2914312975', 'tbartrap1c@clickbank.net','52_Employee.png'),
('Elia', 'V', 'Nowak', 'Male', 'Widow', '53', '1978-02-06', 'Driver', 'Working Employee', '1436292952', 'enowak1d@feedburner.com','53_Employee.png');
INSERT INTO `holidays` (holidayName,holidayDate) VALUES
('Bonifacio Day','2023-11-27'),
("All Saints' Day",'2023-11-1'),
("All Souls' Day", '2023-11-2'),
("New Years Day", '2024-1-1'),
("Labor Day", '2024-5-1'),
("Independence Day", '2024-6-12'),
("Rizal Day",'2023-12-30'),
("Christmas Day",'2023-12-25') 
;
INSERT INTO `leaves` (`leavesID`, `leaveName`,`defaultDays`) VALUES
(1, 'Sick Leave',5),
(2, 'Maternal Leave',105),
(3, 'Paternity Leave',7),
(4, 'Parental Leave',7),
(5, 'Special Leave for Women',62),
(6, 'Victims of Violence Leave',10),
(7, 'Bereavement Leave',5),
(8, 'Vacation Leave',5);
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
  `leaveDaysID` int(11) DEFAULT NULL,
  `shiftDate` date NOT NULL
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
  ADD KEY `fk_shift_leaveID` (`leaveDaysID`);

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
  ADD CONSTRAINT `fk_shift_leaveDaysID` FOREIGN KEY (`leaveDaysID`) REFERENCES `leaveDays` (`leaveDaysID`),
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
('Jocko', 'Anton', 'Yukhnov', 'Male', 'Legally Separated', '4', '1975-01-29', 'Human Resources', 'Fired', '2114345834', 'jyukhnov0@yelp.com','4_Employee.png'),
('Alisha', 'Ana', 'Goodredge', 'Female', 'Legally Separated', '5', '1971-06-19', 'Plant Factory Worker', 'Working Employee', '3554763618', 'agoodredge1@imageshack.us','5_Employee.png'),
('Wat', 'Quin', 'Harrild', 'Male', 'Single', '6', '1977-10-29', 'Inventory Clerk', 'Working Employee', '4522753171', 'wharrild2@hubpages.com','6_Employee.png'),
('Roseanna', 'Norman', 'Doyley', 'Female', 'Widow', '7', '1996-04-30', 'Finance', 'Working Employee', '9104500575', 'rdoyley3@cbslocal.com','7_Employee.png'),
('Bertrand', 'Xelos', 'Trask', 'Male', 'Single', '8', '1997-08-28', 'Plant Factory Worker', 'Working Employee', '9457945033', 'btrask4@guardian.co.uk','8_Employee.png'),
('Paule', 'Sandra', 'Steggles', 'Female', 'Legally Separated','9', '1987-08-19', 'Finance', 'Working Employee', '7252805601', 'psteggles5@issuu.com','9_Employee.png'),
('Sampson', 'Xinson', 'Breckon', 'Male', 'Legally Separated', '10', '1999-08-31', 'Factory Worker', 'Fired', '7643244269', 'sbreckon6@networkadvertising.org','10_Employee.png'),
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
INSERT INTO `leavedays` (`leaveDaysID`, `leaveID`, `employeeID`, `daysLeft`, `activeYear`) VALUES
(1, 1, 2, 5, '2023-12-06'),
(2, 2, 2, 105, '2023-12-06'),
(3, 3, 2, 7, '2023-12-06'),
(4, 4, 2, 7, '2023-12-06'),
(5, 5, 2, 62, '2023-12-06'),
(6, 6, 2, 10, '2023-12-06'),
(7, 7, 2, 5, '2023-12-06'),
(8, 8, 2, 5, '2023-12-06'),
(9, 1, 12, 5, '2023-12-06'),
(10, 2, 12, 105, '2023-12-06'),
(11, 3, 12, 7, '2023-12-06'),
(12, 4, 12, 7, '2023-12-06'),
(13, 5, 12, 62, '2023-12-06'),
(14, 6, 12, 10, '2023-12-06'),
(15, 7, 12, 5, '2023-12-06'),
(16, 8, 12, 5, '2023-12-06'),
(17, 1, 11, 5, '2023-12-06'),
(18, 2, 11, 105, '2023-12-06'),
(19, 3, 11, 7, '2023-12-06'),
(20, 4, 11, 7, '2023-12-06'),
(21, 5, 11, 62, '2023-12-06'),
(22, 6, 11, 10, '2023-12-06'),
(23, 7, 11, 5, '2023-12-06'),
(24, 8, 11, 5, '2023-12-06'),
(25, 1, 4, 5, '2023-12-06'),
(26, 2, 4, 105, '2023-12-06'),
(27, 3, 4, 7, '2023-12-06'),
(28, 4, 4, 7, '2023-12-06'),
(29, 5, 4, 62, '2023-12-06'),
(30, 6, 4, 10, '2023-12-06'),
(31, 7, 4, 5, '2023-12-06'),
(32, 8, 4, 5, '2023-12-06'),
(33, 1, 6, 5, '2023-12-06'),
(34, 2, 6, 105, '2023-12-06'),
(35, 3, 6, 7, '2023-12-06'),
(36, 4, 6, 7, '2023-12-06'),
(37, 5, 6, 62, '2023-12-06'),
(38, 6, 6, 10, '2023-12-06'),
(39, 7, 6, 5, '2023-12-06'),
(40, 8, 6, 5, '2023-12-06'),
(41, 1, 13, 5, '2023-12-06'),
(42, 2, 13, 105, '2023-12-06'),
(43, 3, 13, 7, '2023-12-06'),
(44, 4, 13, 7, '2023-12-06'),
(45, 5, 13, 62, '2023-12-06'),
(46, 6, 13, 10, '2023-12-06'),
(47, 7, 13, 5, '2023-12-06'),
(48, 8, 13, 5, '2023-12-06'),
(49, 1, 14, 5, '2023-12-06'),
(50, 2, 14, 105, '2023-12-06'),
(51, 3, 14, 7, '2023-12-06'),
(52, 4, 14, 7, '2023-12-06'),
(53, 5, 14, 62, '2023-12-06'),
(54, 6, 14, 10, '2023-12-06'),
(55, 7, 14, 5, '2023-12-06'),
(56, 8, 14, 5, '2023-12-06'),
(57, 1, 15, 5, '2023-12-06'),
(58, 2, 15, 105, '2023-12-06'),
(59, 3, 15, 7, '2023-12-06'),
(60, 4, 15, 7, '2023-12-06'),
(61, 5, 15, 62, '2023-12-06'),
(62, 6, 15, 10, '2023-12-06'),
(63, 7, 15, 5, '2023-12-06'),
(64, 8, 15, 5, '2023-12-06'),
(65, 1, 16, 5, '2023-12-06'),
(66, 2, 16, 105, '2023-12-06'),
(67, 3, 16, 7, '2023-12-06'),
(68, 4, 16, 7, '2023-12-06'),
(69, 5, 16, 62, '2023-12-06'),
(70, 6, 16, 10, '2023-12-06'),
(71, 7, 16, 5, '2023-12-06'),
(72, 8, 16, 5, '2023-12-06'),
(73, 1, 17, 5, '2023-12-06'),
(74, 2, 17, 105, '2023-12-06'),
(75, 3, 17, 7, '2023-12-06'),
(76, 4, 17, 7, '2023-12-06'),
(77, 5, 17, 62, '2023-12-06'),
(78, 6, 17, 10, '2023-12-06'),
(79, 7, 17, 5, '2023-12-06'),
(80, 8, 17, 5, '2023-12-06'),
(81, 1, 18, 5, '2023-12-06'),
(82, 2, 18, 105, '2023-12-06'),
(83, 3, 18, 7, '2023-12-06'),
(84, 4, 18, 7, '2023-12-06'),
(85, 5, 18, 62, '2023-12-06'),
(86, 6, 18, 10, '2023-12-06'),
(87, 7, 18, 5, '2023-12-06'),
(88, 8, 18, 5, '2023-12-06'),
(89, 1, 20, 5, '2023-12-06'),
(90, 2, 20, 105, '2023-12-06'),
(91, 3, 20, 7, '2023-12-06'),
(92, 4, 20, 7, '2023-12-06'),
(93, 5, 20, 62, '2023-12-06'),
(94, 6, 20, 10, '2023-12-06'),
(95, 7, 20, 5, '2023-12-06'),
(96, 8, 20, 5, '2023-12-06'),
(97, 1, 23, 5, '2023-12-06'),
(98, 2, 23, 105, '2023-12-06'),
(99, 3, 23, 7, '2023-12-06'),
(100, 4, 23, 7, '2023-12-06'),
(101, 5, 23, 62, '2023-12-06'),
(102, 6, 23, 10, '2023-12-06'),
(103, 7, 23, 5, '2023-12-06'),
(104, 8, 23, 5, '2023-12-06'),
(105, 1, 21, 5, '2023-12-06'),
(106, 2, 21, 105, '2023-12-06'),
(107, 3, 21, 7, '2023-12-06'),
(108, 4, 21, 7, '2023-12-06'),
(109, 5, 21, 62, '2023-12-06'),
(110, 6, 21, 10, '2023-12-06'),
(111, 7, 21, 5, '2023-12-06'),
(112, 8, 21, 5, '2023-12-06'),
(113, 1, 3, 5, '2023-12-06'),
(114, 2, 3, 105, '2023-12-06'),
(115, 3, 3, 7, '2023-12-06'),
(116, 4, 3, 7, '2023-12-06'),
(117, 5, 3, 62, '2023-12-06'),
(118, 6, 3, 10, '2023-12-06'),
(119, 7, 3, 5, '2023-12-06'),
(120, 8, 3, 5, '2023-12-06'),
(121, 1, 19, 5, '2023-12-06'),
(122, 2, 19, 105, '2023-12-06'),
(123, 3, 19, 7, '2023-12-06'),
(124, 4, 19, 7, '2023-12-06'),
(125, 5, 19, 62, '2023-12-06'),
(126, 6, 19, 10, '2023-12-06'),
(127, 7, 19, 5, '2023-12-06'),
(128, 8, 19, 5, '2023-12-06'),
(129, 1, 25, 5, '2023-12-06'),
(130, 2, 25, 105, '2023-12-06'),
(131, 3, 25, 7, '2023-12-06'),
(132, 4, 25, 7, '2023-12-06'),
(133, 5, 25, 62, '2023-12-06'),
(134, 6, 25, 10, '2023-12-06'),
(135, 7, 25, 5, '2023-12-06'),
(136, 8, 25, 5, '2023-12-06'),
(137, 1, 27, 5, '2023-12-06'),
(138, 2, 27, 105, '2023-12-06'),
(139, 3, 27, 7, '2023-12-06'),
(140, 4, 27, 7, '2023-12-06'),
(141, 5, 27, 62, '2023-12-06'),
(142, 6, 27, 10, '2023-12-06'),
(143, 7, 27, 5, '2023-12-06'),
(144, 8, 27, 5, '2023-12-06'),
(145, 1, 29, 5, '2023-12-06'),
(146, 2, 29, 105, '2023-12-06'),
(147, 3, 29, 7, '2023-12-06'),
(148, 4, 29, 7, '2023-12-06'),
(149, 5, 29, 62, '2023-12-06'),
(150, 6, 29, 10, '2023-12-06'),
(151, 7, 29, 5, '2023-12-06'),
(152, 8, 29, 5, '2023-12-06'),
(153, 1, 28, 5, '2023-12-06'),
(154, 2, 28, 105, '2023-12-06'),
(155, 3, 28, 7, '2023-12-06'),
(156, 4, 28, 7, '2023-12-06'),
(157, 5, 28, 62, '2023-12-06'),
(158, 6, 28, 10, '2023-12-06'),
(159, 7, 28, 5, '2023-12-06'),
(160, 8, 28, 5, '2023-12-06'),
(161, 1, 26, 5, '2023-12-06'),
(162, 2, 26, 105, '2023-12-06'),
(163, 3, 26, 7, '2023-12-06'),
(164, 4, 26, 7, '2023-12-06'),
(165, 5, 26, 62, '2023-12-06'),
(166, 6, 26, 10, '2023-12-06'),
(167, 7, 26, 5, '2023-12-06'),
(168, 8, 26, 5, '2023-12-06'),
(169, 1, 24, 5, '2023-12-06'),
(170, 2, 24, 105, '2023-12-06'),
(171, 3, 24, 7, '2023-12-06'),
(172, 4, 24, 7, '2023-12-06'),
(173, 5, 24, 62, '2023-12-06'),
(174, 6, 24, 10, '2023-12-06'),
(175, 7, 24, 5, '2023-12-06'),
(176, 8, 24, 5, '2023-12-06'),
(177, 1, 7, 5, '2023-12-06'),
(178, 2, 7, 105, '2023-12-06'),
(179, 3, 7, 7, '2023-12-06'),
(180, 4, 7, 7, '2023-12-06'),
(181, 5, 7, 62, '2023-12-06'),
(182, 6, 7, 10, '2023-12-06'),
(183, 7, 7, 5, '2023-12-06'),
(184, 8, 7, 5, '2023-12-06'),
(185, 1, 1, 5, '2023-12-06'),
(186, 2, 1, 105, '2023-12-06'),
(187, 3, 1, 7, '2023-12-06'),
(188, 4, 1, 7, '2023-12-06'),
(189, 5, 1, 62, '2023-12-06'),
(190, 6, 1, 10, '2023-12-06'),
(191, 7, 1, 5, '2023-12-06'),
(192, 8, 1, 5, '2023-12-06'),
(193, 1, 5, 5, '2023-12-06'),
(194, 2, 5, 105, '2023-12-06'),
(195, 3, 5, 7, '2023-12-06'),
(196, 4, 5, 7, '2023-12-06'),
(197, 5, 5, 62, '2023-12-06'),
(198, 6, 5, 10, '2023-12-06'),
(199, 7, 5, 5, '2023-12-06'),
(200, 8, 5, 5, '2023-12-06'),
(201, 1, 22, 5, '2023-12-06'),
(202, 2, 22, 105, '2023-12-06'),
(203, 3, 22, 7, '2023-12-06'),
(204, 4, 22, 7, '2023-12-06'),
(205, 5, 22, 62, '2023-12-06'),
(206, 6, 22, 10, '2023-12-06'),
(207, 7, 22, 5, '2023-12-06'),
(208, 8, 22, 5, '2023-12-06'),
(209, 1, 9, 5, '2023-12-06'),
(210, 2, 9, 105, '2023-12-06'),
(211, 3, 9, 7, '2023-12-06'),
(212, 4, 9, 7, '2023-12-06'),
(213, 5, 9, 62, '2023-12-06'),
(214, 6, 9, 10, '2023-12-06'),
(215, 7, 9, 5, '2023-12-06'),
(216, 8, 9, 5, '2023-12-06'),
(217, 1, 32, 5, '2023-12-06'),
(218, 2, 32, 105, '2023-12-06'),
(219, 3, 32, 7, '2023-12-06'),
(220, 4, 32, 7, '2023-12-06'),
(221, 5, 32, 62, '2023-12-06'),
(222, 6, 32, 10, '2023-12-06'),
(223, 7, 32, 5, '2023-12-06'),
(224, 8, 32, 5, '2023-12-06'),
(225, 1, 30, 5, '2023-12-06'),
(226, 2, 30, 105, '2023-12-06'),
(227, 3, 30, 7, '2023-12-06'),
(228, 4, 30, 7, '2023-12-06'),
(229, 5, 30, 62, '2023-12-06'),
(230, 6, 30, 10, '2023-12-06'),
(231, 7, 30, 5, '2023-12-06'),
(232, 8, 30, 5, '2023-12-06'),
(233, 1, 10, 5, '2023-12-06'),
(234, 2, 10, 105, '2023-12-06'),
(235, 3, 10, 7, '2023-12-06'),
(236, 4, 10, 7, '2023-12-06'),
(237, 5, 10, 62, '2023-12-06'),
(238, 6, 10, 10, '2023-12-06'),
(239, 7, 10, 5, '2023-12-06'),
(240, 8, 10, 5, '2023-12-06'),
(241, 1, 37, 5, '2023-12-06'),
(242, 2, 37, 105, '2023-12-06'),
(243, 3, 37, 7, '2023-12-06'),
(244, 4, 37, 7, '2023-12-06'),
(245, 5, 37, 62, '2023-12-06'),
(246, 6, 37, 10, '2023-12-06'),
(247, 7, 37, 5, '2023-12-06'),
(248, 8, 37, 5, '2023-12-06'),
(249, 1, 31, 5, '2023-12-06'),
(250, 2, 31, 105, '2023-12-06'),
(251, 3, 31, 7, '2023-12-06'),
(252, 4, 31, 7, '2023-12-06'),
(253, 5, 31, 62, '2023-12-06'),
(254, 6, 31, 10, '2023-12-06'),
(255, 7, 31, 5, '2023-12-06'),
(256, 8, 31, 5, '2023-12-06'),
(257, 1, 8, 5, '2023-12-06'),
(258, 2, 8, 105, '2023-12-06'),
(259, 3, 8, 7, '2023-12-06'),
(260, 4, 8, 7, '2023-12-06'),
(261, 5, 8, 62, '2023-12-06'),
(262, 6, 8, 10, '2023-12-06'),
(263, 7, 8, 5, '2023-12-06'),
(264, 8, 8, 5, '2023-12-06'),
(265, 1, 33, 5, '2023-12-06'),
(266, 2, 33, 105, '2023-12-06'),
(267, 3, 33, 7, '2023-12-06'),
(268, 4, 33, 7, '2023-12-06'),
(269, 5, 33, 62, '2023-12-06'),
(270, 6, 33, 10, '2023-12-06'),
(271, 7, 33, 5, '2023-12-06'),
(272, 8, 33, 5, '2023-12-06'),
(273, 1, 34, 5, '2023-12-06'),
(274, 2, 34, 105, '2023-12-06'),
(275, 3, 34, 7, '2023-12-06'),
(276, 4, 34, 7, '2023-12-06'),
(277, 5, 34, 62, '2023-12-06'),
(278, 6, 34, 10, '2023-12-06'),
(279, 7, 34, 5, '2023-12-06'),
(280, 8, 34, 5, '2023-12-06'),
(281, 1, 35, 5, '2023-12-06'),
(282, 2, 35, 105, '2023-12-06'),
(283, 3, 35, 7, '2023-12-06'),
(284, 4, 35, 7, '2023-12-06'),
(285, 5, 35, 62, '2023-12-06'),
(286, 6, 35, 10, '2023-12-06'),
(287, 7, 35, 5, '2023-12-06'),
(288, 8, 35, 5, '2023-12-06'),
(289, 1, 41, 5, '2023-12-06'),
(290, 2, 41, 105, '2023-12-06'),
(291, 3, 41, 7, '2023-12-06'),
(292, 4, 41, 7, '2023-12-06'),
(293, 5, 41, 62, '2023-12-06'),
(294, 6, 41, 10, '2023-12-06'),
(295, 7, 41, 5, '2023-12-06'),
(296, 8, 41, 5, '2023-12-06'),
(297, 1, 36, 5, '2023-12-06'),
(298, 2, 36, 105, '2023-12-06'),
(299, 3, 36, 7, '2023-12-06'),
(300, 4, 36, 7, '2023-12-06'),
(301, 5, 36, 62, '2023-12-06'),
(302, 6, 36, 10, '2023-12-06'),
(303, 7, 36, 5, '2023-12-06'),
(304, 8, 36, 5, '2023-12-06'),
(305, 1, 40, 5, '2023-12-06'),
(306, 2, 40, 105, '2023-12-06'),
(307, 3, 40, 7, '2023-12-06'),
(308, 4, 40, 7, '2023-12-06'),
(309, 5, 40, 62, '2023-12-06'),
(310, 6, 40, 10, '2023-12-06'),
(311, 7, 40, 5, '2023-12-06'),
(312, 8, 40, 5, '2023-12-06'),
(313, 1, 38, 5, '2023-12-06'),
(314, 2, 38, 105, '2023-12-06'),
(315, 3, 38, 7, '2023-12-06'),
(316, 4, 38, 7, '2023-12-06'),
(317, 5, 38, 62, '2023-12-06'),
(318, 6, 38, 10, '2023-12-06'),
(319, 7, 38, 5, '2023-12-06'),
(320, 8, 38, 5, '2023-12-06'),
(321, 1, 44, 5, '2023-12-06'),
(322, 2, 44, 105, '2023-12-06'),
(323, 3, 44, 7, '2023-12-06'),
(324, 4, 44, 7, '2023-12-06'),
(325, 5, 44, 62, '2023-12-06'),
(326, 6, 44, 10, '2023-12-06'),
(327, 7, 44, 5, '2023-12-06'),
(328, 8, 44, 5, '2023-12-06'),
(329, 1, 42, 5, '2023-12-06'),
(330, 2, 42, 105, '2023-12-06'),
(331, 3, 42, 7, '2023-12-06'),
(332, 4, 42, 7, '2023-12-06'),
(333, 5, 42, 62, '2023-12-06'),
(334, 6, 42, 10, '2023-12-06'),
(335, 7, 42, 5, '2023-12-06'),
(336, 8, 42, 5, '2023-12-06'),
(337, 1, 46, 5, '2023-12-06'),
(338, 2, 46, 105, '2023-12-06'),
(339, 3, 46, 7, '2023-12-06'),
(340, 4, 46, 7, '2023-12-06'),
(341, 5, 46, 62, '2023-12-06'),
(342, 6, 46, 10, '2023-12-06'),
(343, 7, 46, 5, '2023-12-06'),
(344, 8, 46, 5, '2023-12-06'),
(345, 1, 39, 5, '2023-12-06'),
(346, 2, 39, 105, '2023-12-06'),
(347, 3, 39, 7, '2023-12-06'),
(348, 4, 39, 7, '2023-12-06'),
(349, 5, 39, 62, '2023-12-06'),
(350, 6, 39, 10, '2023-12-06'),
(351, 7, 39, 5, '2023-12-06'),
(352, 8, 39, 5, '2023-12-06'),
(353, 1, 53, 5, '2023-12-06'),
(354, 2, 53, 105, '2023-12-06'),
(355, 3, 53, 7, '2023-12-06'),
(356, 4, 53, 7, '2023-12-06'),
(357, 5, 53, 62, '2023-12-06'),
(358, 6, 53, 10, '2023-12-06'),
(359, 7, 53, 5, '2023-12-06'),
(360, 8, 53, 5, '2023-12-06'),
(361, 1, 43, 5, '2023-12-06'),
(362, 2, 43, 105, '2023-12-06'),
(363, 3, 43, 7, '2023-12-06'),
(364, 4, 43, 7, '2023-12-06'),
(365, 5, 43, 62, '2023-12-06'),
(366, 6, 43, 10, '2023-12-06'),
(367, 7, 43, 5, '2023-12-06'),
(368, 8, 43, 5, '2023-12-06'),
(369, 1, 45, 5, '2023-12-06'),
(370, 2, 45, 105, '2023-12-06'),
(371, 3, 45, 7, '2023-12-06'),
(372, 4, 45, 7, '2023-12-06'),
(373, 5, 45, 62, '2023-12-06'),
(374, 6, 45, 10, '2023-12-06'),
(375, 7, 45, 5, '2023-12-06'),
(376, 8, 45, 5, '2023-12-06'),
(377, 1, 50, 5, '2023-12-06'),
(378, 2, 50, 105, '2023-12-06'),
(379, 3, 50, 7, '2023-12-06'),
(380, 4, 50, 7, '2023-12-06'),
(381, 5, 50, 62, '2023-12-06'),
(382, 6, 50, 10, '2023-12-06'),
(383, 7, 50, 5, '2023-12-06'),
(384, 8, 50, 5, '2023-12-06'),
(385, 1, 47, 5, '2023-12-06'),
(386, 2, 47, 105, '2023-12-06'),
(387, 3, 47, 7, '2023-12-06'),
(388, 4, 47, 7, '2023-12-06'),
(389, 5, 47, 62, '2023-12-06'),
(390, 6, 47, 10, '2023-12-06'),
(391, 7, 47, 5, '2023-12-06'),
(392, 8, 47, 5, '2023-12-06'),
(393, 1, 49, 5, '2023-12-06'),
(394, 2, 49, 105, '2023-12-06'),
(395, 3, 49, 7, '2023-12-06'),
(396, 4, 49, 7, '2023-12-06'),
(397, 5, 49, 62, '2023-12-06'),
(398, 6, 49, 10, '2023-12-06'),
(399, 7, 49, 5, '2023-12-06'),
(400, 8, 49, 5, '2023-12-06'),
(401, 1, 51, 5, '2023-12-06'),
(402, 2, 51, 105, '2023-12-06'),
(403, 3, 51, 7, '2023-12-06'),
(404, 4, 51, 7, '2023-12-06'),
(405, 5, 51, 62, '2023-12-06'),
(406, 6, 51, 10, '2023-12-06'),
(407, 7, 51, 5, '2023-12-06'),
(408, 8, 51, 5, '2023-12-06'),
(409, 1, 48, 5, '2023-12-06'),
(410, 2, 48, 105, '2023-12-06'),
(411, 3, 48, 7, '2023-12-06'),
(412, 4, 48, 7, '2023-12-06'),
(413, 5, 48, 62, '2023-12-06'),
(414, 6, 48, 10, '2023-12-06'),
(415, 7, 48, 5, '2023-12-06'),
(416, 8, 48, 5, '2023-12-06'),
(417, 1, 52, 5, '2023-12-06'),
(418, 2, 52, 105, '2023-12-06'),
(419, 3, 52, 7, '2023-12-06'),
(420, 4, 52, 7, '2023-12-06'),
(421, 5, 52, 62, '2023-12-06'),
(422, 6, 52, 10, '2023-12-06'),
(423, 7, 52, 5, '2023-12-06'),
(424, 8, 52, 5, '2023-12-06');
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
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendancemgmtsys`
--

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

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`addressID`, `street`, `barangay`, `postalCode`, `city_municipality`, `province`) VALUES
(1, 'bruh', 'bro', 'bro', 'bro', 'bro'),
(2, 'bruh', 'bro', 'bro', 'bro', 'bro');

-- --------------------------------------------------------

--
-- Table structure for table `daysession`
--

CREATE TABLE `daysession` (
  `sessionID` int(11) NOT NULL,
  `employeeID` int(11) NOT NULL,
  `timeIn` datetime DEFAULT NULL,
  `timeOut` datetime DEFAULT NULL,
  `dayStatus` enum('paid_leave','absent','present','non_work','late','inspect','excused','pending') NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `daysession`
--

INSERT INTO `daysession` (`sessionID`, `employeeID`, `timeIn`, `timeOut`, `dayStatus`) VALUES
(2, 1, '2023-11-19 15:15:36', '2023-11-19 23:15:36', 'present'),
(3, 1, '2023-11-19 10:20:10', NULL, 'present'),
(4, 1, '2023-11-19 10:20:10', NULL, 'present');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employeeID` int(11) NOT NULL,
  `firstName` varchar(32) NOT NULL,
  `middleName` varchar(32) DEFAULT NULL,
  `lastName` varchar(32) NOT NULL,
  `addressID` int(11) NOT NULL,
  `birthDate` date NOT NULL,
  `jobPosition` varchar(32) NOT NULL,
  `currentStatus` enum('Fired','Working Employee') NOT NULL DEFAULT 'Working Employee',
  `contactNumber` varchar(16) NOT NULL,
  `email` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employeeID`, `firstName`, `middleName`, `lastName`, `addressID`, `birthDate`, `jobPosition`, `currentStatus`, `contactNumber`, `email`) VALUES
(1, 'Bro', 'Bro', 'Bruh', 1, '2003-09-06', 'Janitor', 'Working Employee', '0123456890', 'bigbro@gmail.com'),
(2, 'Bro', 'Bro', 'Bruh', 2, '2003-09-06', 'Janitor', 'Working Employee', '0123456890', 'bigbro@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `excusereason`
--

CREATE TABLE `excusereason` (
  `reasonID` int(11) NOT NULL,
  `sessionID` int(11) NOT NULL,
  `reason` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `excusereason`
--

INSERT INTO `excusereason` (`reasonID`, `sessionID`, `reason`) VALUES
(1, 3, 'Explosive Diarrhea');

-- --------------------------------------------------------

--
-- Table structure for table `holidays`
--

CREATE TABLE `holidays` (
  `holidaysID` int(11) NOT NULL,
  `holidayName` varchar(32) NOT NULL,
  `holidayDesc` varchar(100) DEFAULT NULL,
  `holidayDate` date NOT NULL,
  `holidayType` enum('Special','Regular') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `leavesID` int(11) NOT NULL,
  `leaveName` varchar(32) NOT NULL,
  `leaveDesc` varchar(100) DEFAULT NULL,
  `daysLeft` tinyint(4) NOT NULL,
  `employeeID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `logID` int(11) NOT NULL,
  `generatedBy` int(11) DEFAULT NULL,
  `dateGenerated` datetime NOT NULL,
  `changeDesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `shiftID` int(11) NOT NULL,
  `employeeID` int(11) NOT NULL,
  `timeIn` time DEFAULT NULL,
  `timeOut` time DEFAULT NULL,
  `leaveID` int(11) DEFAULT NULL,
  `shiftDate` date NOT NULL,
  `isWork` enum('True','False') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shift`
--

INSERT INTO `shift` (`shiftID`, `employeeID`, `timeIn`, `timeOut`, `leaveID`, `shiftDate`, `isWork`) VALUES
(1, 1, '08:00:00', '17:00:00', NULL, '2023-09-06', 'True');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `employeeID` int(11) NOT NULL,
  `userPassword` varchar(32) NOT NULL,
  `position` enum('Management','Admin','Suspended') NOT NULL,
  `lastLogin` datetime DEFAULT NULL,
  `email` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `employeeID`, `userPassword`, `position`, `lastLogin`, `email`) VALUES
(1, 1, 'abc@123a', 'Admin', '2023-11-19 14:12:12', 'user@gmail.com');

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
  ADD KEY `fk_employee_address` (`addressID`);

--
-- Indexes for table `excusereason`
--
ALTER TABLE `excusereason`
  ADD PRIMARY KEY (`reasonID`),
  ADD KEY `fk_excuseReason_sessionID` (`sessionID`);

--
-- Indexes for table `holidays`
--
ALTER TABLE `holidays`
  ADD PRIMARY KEY (`holidaysID`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`leavesID`),
  ADD KEY `fk_leaves_employeeID` (`employeeID`);

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
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `daysession`
--
ALTER TABLE `daysession`
  MODIFY `sessionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `excusereason`
--
ALTER TABLE `excusereason`
  MODIFY `reasonID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `holidays`
--
ALTER TABLE `holidays`
  MODIFY `holidaysID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `leavesID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `logID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shift`
--
ALTER TABLE `shift`
  MODIFY `shiftID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `daysession`
--
ALTER TABLE `daysession`
  ADD CONSTRAINT `fk_session_employeeID` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fk_employee_address` FOREIGN KEY (`addressID`) REFERENCES `address` (`addressID`);

--
-- Constraints for table `excusereason`
--
ALTER TABLE `excusereason`
  ADD CONSTRAINT `fk_excuseReason_sessionID` FOREIGN KEY (`sessionID`) REFERENCES `daysession` (`sessionID`);

--
-- Constraints for table `leaves`
--
ALTER TABLE `leaves`
  ADD CONSTRAINT `fk_leaves_employeeID` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`);

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
  ADD CONSTRAINT `fk_shift_leaveID` FOREIGN KEY (`leaveID`) REFERENCES `leaves` (`leavesID`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_employeeID` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

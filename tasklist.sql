-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2026 at 10:21 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tasklist`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasktbl`
--

CREATE TABLE `tasktbl` (
  `taskId` int(11) NOT NULL,
  `taskTitle` text NOT NULL,
  `taskDesc` text NOT NULL,
  `status` text NOT NULL,
  `timeAdded` datetime NOT NULL,
  `timeFinished` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tasktbl`
--

INSERT INTO `tasktbl` (`taskId`, `taskTitle`, `taskDesc`, `status`, `timeAdded`, `timeFinished`, `userId`) VALUES
(1, 'Wash Dishess1', 'Finish all dirty dishesaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdsa asdadas asd asd as dassssasd asd asdad ', 'Ongoing', '2025-10-28 10:00:00', '0000-00-00 00:00:00', 1),
(2, '123132asd', 'asd2', 'Cancel', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, '123sda', '123aa', 'Finished', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(4, 'asdasdsad', '231', 'Cancel', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(5, 'Read a book', 'Discover a new exciting story by reading ', 'Finished', '0000-00-00 00:00:00', NULL, 1),
(6, 'Workout Chest muscles', 'do bench press ', '', '2026-02-17 17:18:01', NULL, 1),
(7, '123asd44', '123asdxcz', '', '2026-02-28 23:27:30', NULL, 1),
(8, 'Complete Project Proposal', 'Draft and finalize the Q2 project proposal document.', '', '2026-03-04 19:02:50', NULL, 1),
(9, 'Team Meeting', 'Attend the weekly sync-up meeting with the development team.', '', '2026-03-04 19:02:50', NULL, 1),
(10, 'Code Review', 'Review pull requests submitted by team members.', '', '2026-03-04 19:02:50', NULL, 1),
(11, 'Database Backup', 'Perform scheduled backup of the production database.', '', '2026-03-04 19:02:50', NULL, 1),
(12, 'Update Documentation', 'Revise API documentation with recent endpoint changes.', '', '2026-03-04 19:02:50', NULL, 1),
(13, 'Bug Fix - Login Issue', 'Investigate and resolve user login authentication bug.', '', '2026-03-04 19:02:50', NULL, 1),
(14, 'Client Follow-up', 'Send follow-up email to client regarding feedback.', '', '2026-03-04 19:02:50', NULL, 1),
(15, 'UI Improvements', 'Enhance dashboard layout for better user experience.', '', '2026-03-04 19:02:50', NULL, 1),
(16, 'Security Audit', 'Run security audit and patch identified vulnerabilities.', '', '2026-03-04 19:02:50', NULL, 1),
(17, 'Deploy to Staging', 'Deploy latest build to staging environment for testing.', '', '2026-03-04 19:02:50', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `age` int(11) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `age`, `password`) VALUES
(1, 'p', 22, '1'),
(3, '1', 32, '2'),
(7, 'RJ DDSs', 24, 't@asty'),
(10, 'Philip ', 25, 'P@@PS122');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasktbl`
--
ALTER TABLE `tasktbl`
  ADD PRIMARY KEY (`taskId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasktbl`
--
ALTER TABLE `tasktbl`
  MODIFY `taskId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasktbl`
--
ALTER TABLE `tasktbl`
  ADD CONSTRAINT `tasktbl_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

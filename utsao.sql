-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2025 at 10:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `utsao`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `s.no` int(11) NOT NULL,
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `location` varchar(400) NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`s.no`, `id`, `name`, `phone`, `email`, `location`, `message`, `date`) VALUES
(7, '50164118-c603-4619-8bfd-701cb5700b9c', 'Abhi', '9205632082', 'abhishek.singh92056@gmail.com', 'delhi', 'web testing', '2025-10-09 15:51:44'),
(8, '3a6150ac-8b8b-4d70-b87f-e70a0a9c797a', 'Yug', '9205632082', 'abhishek.singh92056@gmail.com', 'delhi', 'web testing', '2025-10-10 14:14:34'),
(9, 'bb272db0-c8a8-464d-8bc1-9b9fa26fe840', 'Dev', '9205632082', 'abhishek.singh92056@gmail.com', 'delhi', 'web testing', '2025-10-10 14:21:59');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `meta_title` varchar(200) NOT NULL,
  `short_content` varchar(400) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `meta_title`, `short_content`, `content`, `image`, `url`) VALUES
(1, 'Premium Gifts', 'Premium Gifts', 'Take your gift-giving to the next level with our Premium Gifts collection, a curated selection of gourmet items of the best quality, packaged beautifully.', 'Take your gift-giving to the next level with our Premium Gifts collection, a curated selection of gourmet items of the best quality, packaged beautifully. Each box will contain a variety of high-end nuts (almonds, cashews, pistachios) and a variety of dried fruits (dates, apricots), gourmet chocolates, and handmade sweets. Great for corporate acknowledgment gifts, celebrating milestones, or simply saying thank you.', 'premiumGifts1.jpg', 'premium-gifts'),
(2, 'Combo Pack', 'Combo Pack', 'Unique and all-purpose, the Comb Pack combines matching items in one beautiful package.', 'Unique and all-purpose, the Comb Pack combines matching items in one beautiful package. Most Comb Packs are bundles of dry fruits (such as walnuts and raisins), nut clusters, and gourmet snack mixes. Ideal for gifts of a small', 'comboPack.jpg', 'combo-pack'),
(3, 'Premium Gifts 2', 'Premium Gifts 2', 'A polished follow-up to our flagship product, Premium Gifts 2 offers a unique assortment of our signature items in upgraded packaging.', 'A polished follow-up to our flagship product, Premium Gifts 2 offers a unique assortment of our signature items in upgraded packaging. Look for a mixture of roasted nuts, a variety of seed mixes, and gourmet trail mixes studded with cranberries or goji; plus luxury chocolates or honey jars. Crafted for a sense of distinctiveness or specialty.', 'premiumGifts2.1.png', 'premium-gifts-2'),
(4, 'Combo Christmas Gifts', 'Combo Christmas Gifts', 'Experience the season with our Combo Christmas Gifts  charming assortments wrapped in holiday themes!', 'Experience the season with our Combo Christmas Gifts  charming assortments wrapped in holiday themes! This combination of traditional dried fruits, figs and dates, with seasonal treats of spiced nuts, cinnamon flavored treats, chocolate coated nuts, and festive cookies is perfect for sharing joy with clients, colleagues, or loved ones´. ', 'comboChristmasGifts.jpg', 'combo-christmas-gifts'),
(5, 'Christmas Gifts', 'Christmas Gifts', 'Beginning the classic Christmas Gifts collection, the spirit of the holiday is encapsulated in a beautifully designed box.', 'Beginning the classic Christmas Gifts collection, the spirit of the holiday is encapsulated in a beautifully designed box. Inside you will find assorted nuts (almonds, pistachios), dried fruits, gourmet chocolates, and festive cookies or biscuits all evoke warmth, thankfulness, and good cheer for the season.', 'ChristmasGifts.jpg', 'christmas-gifts'),
(6, 'Christmas Gifts 2', 'Christmas Gifts 2', 'Our seasonal favorite, Christmas Gifts 2 has been revitalized to provide you with alternative flavor combinations and presentation styles.', 'Our seasonal favorite, Christmas Gifts 2 has been revitalized to provide you with alternative flavor combinations and presentation styles. This could include caramelized nuts, mixes of nuts and fruit, dark chocolate bites or seasonal candies and fudge, all designed to excite and impress.', 'ChristmanGifts2.1.jpg', 'christmas-gifts-2'),
(7, 'Christmas Gifts 3', 'Christmas Gifts 3', 'For those who wish to enhance from the usual, Christmas Gifts 3 is a premium, indulgent set that includes hand-roasted nuts, exotic dried fruits (dried cherries or mango slices), luxury chocolates with nuts, gourmet honey or jams, and artisan confections.', 'For those who wish to enhance from the usual, Christmas Gifts 3 is a premium, indulgent set that includes hand-roasted nuts, exotic dried fruits (dried cherries or mango slices), luxury chocolates with nuts, gourmet honey or jams, and artisan confections. The ideal gift for VIP clients', 'ChristmanGifts3.1.jpg', 'christmas-gifts-3'),
(8, 'Christmas Gifts 4', 'Christmas Gifts 4', 'Christmas Gifts 4 is a winter-themed hamper with a curated color palette with holiday accents.', 'Christmas Gifts 4 is a winter-themed hamper with a curated color palette with holiday accents. It is filled with a selection of nut blends, seeds, spiced dried fruit, high-quality chocolates, and possibly even artisan candy', 'ChristmanGifts4.1.jpg', 'christmas-gifts-4'),
(9, 'Christmas Gifts 5', 'Christmas Gifts 5', 'The ultimate seasonal regalia Christmas Gifts 5.', 'The ultimate seasonal regalia Christmas Gifts 5. This extravagant hamper now includes access to a curated collection of products from our signature range: nut medley (almonds, cashews, pistachios, walnuts) raw nuts, luxury dried fruits, specialty chocolates, organic honey jars, gourmet cookies, and optional gift cards and/or branding. Great for impressively extravagant gifting experiences.', 'ChristmanGifts5.1.jpg', 'christmas-gifts-5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`s.no`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `s.no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

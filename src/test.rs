use chrono::*;

use crate::chrono_util::*;
use crate::dates::*;
use crate::ical::*;

#[test]
fn test_date_of_last_weekday(){
	assert_eq!(date_of_last_weekday(Weekday::Mon,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,17)));
	assert_eq!(date_of_last_weekday(Weekday::Tue,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,18)));
	assert_eq!(date_of_last_weekday(Weekday::Wed,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,19)));
	assert_eq!(date_of_last_weekday(Weekday::Thu,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,20)));
	assert_eq!(date_of_last_weekday(Weekday::Fri,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,14)));
	assert_eq!(date_of_last_weekday(Weekday::Sat,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,15)));
	assert_eq!(date_of_last_weekday(Weekday::Sun,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,16)));
}

#[test]
fn test_date_of_next_weekday(){
	assert_eq!(date_of_next_weekday(Weekday::Mon,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,24)));
	assert_eq!(date_of_next_weekday(Weekday::Tue,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,25)));
	assert_eq!(date_of_next_weekday(Weekday::Wed,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,26)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,27)));
	assert_eq!(date_of_next_weekday(Weekday::Fri,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,28)));
	assert_eq!(date_of_next_weekday(Weekday::Sat,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,22)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,23)));
}

#[test]
fn test_date_of_last_weekday_or_today(){
	assert_eq!(date_of_last_weekday_or_today(Weekday::Mon,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,17)));
	assert_eq!(date_of_last_weekday_or_today(Weekday::Tue,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,18)));
	assert_eq!(date_of_last_weekday_or_today(Weekday::Wed,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,19)));
	assert_eq!(date_of_last_weekday_or_today(Weekday::Thu,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,20)));
	assert_eq!(date_of_last_weekday_or_today(Weekday::Fri,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,21)));
	assert_eq!(date_of_last_weekday_or_today(Weekday::Sat,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,15)));
	assert_eq!(date_of_last_weekday_or_today(Weekday::Sun,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,16)));
}

#[test]
fn test_date_of_next_weekday_or_today(){
	assert_eq!(date_of_next_weekday_or_today(Weekday::Mon,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,24)));
	assert_eq!(date_of_next_weekday_or_today(Weekday::Tue,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,25)));
	assert_eq!(date_of_next_weekday_or_today(Weekday::Wed,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,26)));
	assert_eq!(date_of_next_weekday_or_today(Weekday::Thu,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,27)));
	assert_eq!(date_of_next_weekday_or_today(Weekday::Fri,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,21)));
	assert_eq!(date_of_next_weekday_or_today(Weekday::Sat,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,22)));
	assert_eq!(date_of_next_weekday_or_today(Weekday::Sun,NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,06,23)));
}

#[test]
fn test_date_of_first_weekday_of_month(){
	assert_eq!(date_of_first_weekday_of_month(Weekday::Mon,2019,06),Some(NaiveDate::from_ymd(2019,06,03)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Tue,2019,06),Some(NaiveDate::from_ymd(2019,06,04)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Wed,2019,06),Some(NaiveDate::from_ymd(2019,06,05)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Thu,2019,06),Some(NaiveDate::from_ymd(2019,06,06)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Fri,2019,06),Some(NaiveDate::from_ymd(2019,06,07)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Sat,2019,06),Some(NaiveDate::from_ymd(2019,06,01)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Sun,2019,06),Some(NaiveDate::from_ymd(2019,06,02)));

	assert_eq!(date_of_first_weekday_of_month(Weekday::Mon,2019,07),Some(NaiveDate::from_ymd(2019,07,01)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Tue,2019,07),Some(NaiveDate::from_ymd(2019,07,02)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Wed,2019,07),Some(NaiveDate::from_ymd(2019,07,03)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Thu,2019,07),Some(NaiveDate::from_ymd(2019,07,04)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Fri,2019,07),Some(NaiveDate::from_ymd(2019,07,05)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Sat,2019,07),Some(NaiveDate::from_ymd(2019,07,06)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Sun,2019,07),Some(NaiveDate::from_ymd(2019,07,07)));

	assert_eq!(date_of_first_weekday_of_month(Weekday::Mon,2019,01),Some(NaiveDate::from_ymd(2019,01,07)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Tue,2019,01),Some(NaiveDate::from_ymd(2019,01,01)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Wed,2019,01),Some(NaiveDate::from_ymd(2019,01,02)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Thu,2019,01),Some(NaiveDate::from_ymd(2019,01,03)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Fri,2019,01),Some(NaiveDate::from_ymd(2019,01,04)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Sat,2019,01),Some(NaiveDate::from_ymd(2019,01,05)));
	assert_eq!(date_of_first_weekday_of_month(Weekday::Sun,2019,01),Some(NaiveDate::from_ymd(2019,01,06)));
}

#[test]
fn test_date_of_last_weekday_of_month(){
	assert_eq!(date_of_last_weekday_of_month(Weekday::Mon,2019,06),Some(NaiveDate::from_ymd(2019,06,24)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Tue,2019,06),Some(NaiveDate::from_ymd(2019,06,25)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Wed,2019,06),Some(NaiveDate::from_ymd(2019,06,26)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Thu,2019,06),Some(NaiveDate::from_ymd(2019,06,27)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Fri,2019,06),Some(NaiveDate::from_ymd(2019,06,28)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Sat,2019,06),Some(NaiveDate::from_ymd(2019,06,29)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Sun,2019,06),Some(NaiveDate::from_ymd(2019,06,30)));

	assert_eq!(date_of_last_weekday_of_month(Weekday::Mon,2019,07),Some(NaiveDate::from_ymd(2019,07,29)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Tue,2019,07),Some(NaiveDate::from_ymd(2019,07,30)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Wed,2019,07),Some(NaiveDate::from_ymd(2019,07,31)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Thu,2019,07),Some(NaiveDate::from_ymd(2019,07,25)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Fri,2019,07),Some(NaiveDate::from_ymd(2019,07,26)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Sat,2019,07),Some(NaiveDate::from_ymd(2019,07,27)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Sun,2019,07),Some(NaiveDate::from_ymd(2019,07,28)));

	assert_eq!(date_of_last_weekday_of_month(Weekday::Mon,2019,12),Some(NaiveDate::from_ymd(2019,12,30)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Tue,2019,12),Some(NaiveDate::from_ymd(2019,12,31)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Wed,2019,12),Some(NaiveDate::from_ymd(2019,12,25)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Thu,2019,12),Some(NaiveDate::from_ymd(2019,12,26)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Fri,2019,12),Some(NaiveDate::from_ymd(2019,12,27)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Sat,2019,12),Some(NaiveDate::from_ymd(2019,12,28)));
	assert_eq!(date_of_last_weekday_of_month(Weekday::Sun,2019,12),Some(NaiveDate::from_ymd(2019,12,29)));
}

#[test]
fn test_days_in_month(){
	//Common year. Not divisible by 4
	assert_eq!(days_in_month(2019,01),Some(31));
	assert_eq!(days_in_month(2019,02),Some(28));
	assert_eq!(days_in_month(2019,03),Some(31));
	assert_eq!(days_in_month(2019,04),Some(30));
	assert_eq!(days_in_month(2019,05),Some(31));
	assert_eq!(days_in_month(2019,06),Some(30));
	assert_eq!(days_in_month(2019,07),Some(31));
	assert_eq!(days_in_month(2019,08),Some(31));
	assert_eq!(days_in_month(2019,09),Some(30));
	assert_eq!(days_in_month(2019,10),Some(31));
	assert_eq!(days_in_month(2019,11),Some(30));
	assert_eq!(days_in_month(2019,12),Some(31));

	//Leap year. Divisible by 4, not divisible by 100
	assert_eq!(days_in_month(2004,01),Some(31));
	assert_eq!(days_in_month(2004,02),Some(29));
	assert_eq!(days_in_month(2004,03),Some(31));
	assert_eq!(days_in_month(2004,04),Some(30));
	assert_eq!(days_in_month(2004,05),Some(31));
	assert_eq!(days_in_month(2004,06),Some(30));
	assert_eq!(days_in_month(2004,07),Some(31));
	assert_eq!(days_in_month(2004,08),Some(31));
	assert_eq!(days_in_month(2004,09),Some(30));
	assert_eq!(days_in_month(2004,10),Some(31));
	assert_eq!(days_in_month(2004,11),Some(30));
	assert_eq!(days_in_month(2004,12),Some(31));

	//Common year. Divisible by 4, divisible by 100, not divisible by 400
	assert_eq!(days_in_month(2100,01),Some(31));
	assert_eq!(days_in_month(2100,02),Some(28));
	assert_eq!(days_in_month(2100,03),Some(31));
	assert_eq!(days_in_month(2100,04),Some(30));
	assert_eq!(days_in_month(2100,05),Some(31));
	assert_eq!(days_in_month(2100,06),Some(30));
	assert_eq!(days_in_month(2100,07),Some(31));
	assert_eq!(days_in_month(2100,08),Some(31));
	assert_eq!(days_in_month(2100,09),Some(30));
	assert_eq!(days_in_month(2100,10),Some(31));
	assert_eq!(days_in_month(2100,11),Some(30));
	assert_eq!(days_in_month(2100,12),Some(31));

	//Leap year. Divisible by 4, divisible by 100, divisible by 400
	assert_eq!(days_in_month(2000,01),Some(31));
	assert_eq!(days_in_month(2000,02),Some(29));
	assert_eq!(days_in_month(2000,03),Some(31));
	assert_eq!(days_in_month(2000,04),Some(30));
	assert_eq!(days_in_month(2000,05),Some(31));
	assert_eq!(days_in_month(2000,06),Some(30));
	assert_eq!(days_in_month(2000,07),Some(31));
	assert_eq!(days_in_month(2000,08),Some(31));
	assert_eq!(days_in_month(2000,09),Some(30));
	assert_eq!(days_in_month(2000,10),Some(31));
	assert_eq!(days_in_month(2000,11),Some(30));
	assert_eq!(days_in_month(2000,12),Some(31));
}

#[test]
fn test_month_succ(){
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,01,21)),Some(NaiveDate::from_ymd(2019,02,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,02,21)),Some(NaiveDate::from_ymd(2019,03,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,03,21)),Some(NaiveDate::from_ymd(2019,04,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,04,21)),Some(NaiveDate::from_ymd(2019,05,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,05,21)),Some(NaiveDate::from_ymd(2019,06,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,06,21)),Some(NaiveDate::from_ymd(2019,07,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,07,21)),Some(NaiveDate::from_ymd(2019,08,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,08,21)),Some(NaiveDate::from_ymd(2019,09,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,09,21)),Some(NaiveDate::from_ymd(2019,10,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,10,21)),Some(NaiveDate::from_ymd(2019,11,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,11,21)),Some(NaiveDate::from_ymd(2019,12,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2019,12,21)),Some(NaiveDate::from_ymd(2020,01,21)));

	assert_eq!(month_succ(NaiveDate::from_ymd(2004,01,21)),Some(NaiveDate::from_ymd(2004,02,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,02,21)),Some(NaiveDate::from_ymd(2004,03,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,03,21)),Some(NaiveDate::from_ymd(2004,04,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,04,21)),Some(NaiveDate::from_ymd(2004,05,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,05,21)),Some(NaiveDate::from_ymd(2004,06,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,06,21)),Some(NaiveDate::from_ymd(2004,07,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,07,21)),Some(NaiveDate::from_ymd(2004,08,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,08,21)),Some(NaiveDate::from_ymd(2004,09,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,09,21)),Some(NaiveDate::from_ymd(2004,10,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,10,21)),Some(NaiveDate::from_ymd(2004,11,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,11,21)),Some(NaiveDate::from_ymd(2004,12,21)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,12,21)),Some(NaiveDate::from_ymd(2005,01,21)));

	assert_eq!(month_succ(NaiveDate::from_ymd(2004,01,31)),None);
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,03,31)),None);
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,05,31)),None);
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,07,31)),Some(NaiveDate::from_ymd(2004,08,31)));
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,08,31)),None);
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,10,31)),None);
	assert_eq!(month_succ(NaiveDate::from_ymd(2004,12,31)),Some(NaiveDate::from_ymd(2005,01,31)));
}

/**
 * Källa: https://sv.wikipedia.org/wiki/P%C3%A5skdagen#P%C3%A5skdagen_olika_%C3%A5r_i_nutid
 */
#[test]
fn test_påskdagen(){
	assert_eq!(påskdagen(1800),Some(NaiveDate::from_ymd(1800,04,13)));
	assert_eq!(påskdagen(1801),Some(NaiveDate::from_ymd(1801,04,5)));
	assert_eq!(påskdagen(1802),Some(NaiveDate::from_ymd(1802,04,25)));
	assert_eq!(påskdagen(1803),Some(NaiveDate::from_ymd(1803,04,10)));
	assert_eq!(påskdagen(1804),Some(NaiveDate::from_ymd(1804,04,1)));
	assert_eq!(påskdagen(1805),Some(NaiveDate::from_ymd(1805,04,21)));
	assert_eq!(påskdagen(1806),Some(NaiveDate::from_ymd(1806,04,6)));
	assert_eq!(påskdagen(1807),Some(NaiveDate::from_ymd(1807,03,29)));
	assert_eq!(påskdagen(1808),Some(NaiveDate::from_ymd(1808,04,17)));
	assert_eq!(påskdagen(1809),Some(NaiveDate::from_ymd(1809,04,2)));
	assert_eq!(påskdagen(1810),Some(NaiveDate::from_ymd(1810,04,22)));
	assert_eq!(påskdagen(1811),Some(NaiveDate::from_ymd(1811,04,14)));
	assert_eq!(påskdagen(1812),Some(NaiveDate::from_ymd(1812,03,29)));
	assert_eq!(påskdagen(1813),Some(NaiveDate::from_ymd(1813,04,18)));
	assert_eq!(påskdagen(1814),Some(NaiveDate::from_ymd(1814,04,10)));
	assert_eq!(påskdagen(1815),Some(NaiveDate::from_ymd(1815,03,26)));
	assert_eq!(påskdagen(1816),Some(NaiveDate::from_ymd(1816,04,14)));
	assert_eq!(påskdagen(1817),Some(NaiveDate::from_ymd(1817,04,6)));
	assert_eq!(påskdagen(1818),Some(NaiveDate::from_ymd(1818,03,29)));
	assert_eq!(påskdagen(1819),Some(NaiveDate::from_ymd(1819,04,11)));
	assert_eq!(påskdagen(1820),Some(NaiveDate::from_ymd(1820,04,2)));
	assert_eq!(påskdagen(1821),Some(NaiveDate::from_ymd(1821,04,22)));
	assert_eq!(påskdagen(1822),Some(NaiveDate::from_ymd(1822,04,7)));
	assert_eq!(påskdagen(1823),Some(NaiveDate::from_ymd(1823,03,30)));
	assert_eq!(påskdagen(1824),Some(NaiveDate::from_ymd(1824,04,18)));
	assert_eq!(påskdagen(1825),Some(NaiveDate::from_ymd(1825,04,3)));
	assert_eq!(påskdagen(1826),Some(NaiveDate::from_ymd(1826,03,26)));
	assert_eq!(påskdagen(1827),Some(NaiveDate::from_ymd(1827,04,15)));
	assert_eq!(påskdagen(1828),Some(NaiveDate::from_ymd(1828,04,6)));
	assert_eq!(påskdagen(1829),Some(NaiveDate::from_ymd(1829,04,19)));
	assert_eq!(påskdagen(1830),Some(NaiveDate::from_ymd(1830,04,11)));
	assert_eq!(påskdagen(1831),Some(NaiveDate::from_ymd(1831,04,3)));
	assert_eq!(påskdagen(1832),Some(NaiveDate::from_ymd(1832,04,22)));
	assert_eq!(påskdagen(1833),Some(NaiveDate::from_ymd(1833,04,7)));
	assert_eq!(påskdagen(1834),Some(NaiveDate::from_ymd(1834,03,30)));
	assert_eq!(påskdagen(1835),Some(NaiveDate::from_ymd(1835,04,19)));
	assert_eq!(påskdagen(1836),Some(NaiveDate::from_ymd(1836,04,3)));
	assert_eq!(påskdagen(1837),Some(NaiveDate::from_ymd(1837,03,26)));
	assert_eq!(påskdagen(1838),Some(NaiveDate::from_ymd(1838,04,15)));
	assert_eq!(påskdagen(1839),Some(NaiveDate::from_ymd(1839,03,31)));
	assert_eq!(påskdagen(1840),Some(NaiveDate::from_ymd(1840,04,19)));
	assert_eq!(påskdagen(1841),Some(NaiveDate::from_ymd(1841,04,11)));
	assert_eq!(påskdagen(1842),Some(NaiveDate::from_ymd(1842,03,27)));
	assert_eq!(påskdagen(1843),Some(NaiveDate::from_ymd(1843,04,16)));
	assert_eq!(påskdagen(1844),Some(NaiveDate::from_ymd(1844,04,7)));
	assert_eq!(påskdagen(1845),Some(NaiveDate::from_ymd(1845,03,23)));
	assert_eq!(påskdagen(1846),Some(NaiveDate::from_ymd(1846,04,12)));
	assert_eq!(påskdagen(1847),Some(NaiveDate::from_ymd(1847,04,4)));
	assert_eq!(påskdagen(1848),Some(NaiveDate::from_ymd(1848,04,23)));
	assert_eq!(påskdagen(1849),Some(NaiveDate::from_ymd(1849,04,8)));
	assert_eq!(påskdagen(1850),Some(NaiveDate::from_ymd(1850,03,31)));
	assert_eq!(påskdagen(1851),Some(NaiveDate::from_ymd(1851,04,20)));
	assert_eq!(påskdagen(1852),Some(NaiveDate::from_ymd(1852,04,11)));
	assert_eq!(påskdagen(1853),Some(NaiveDate::from_ymd(1853,03,27)));
	assert_eq!(påskdagen(1854),Some(NaiveDate::from_ymd(1854,04,16)));
	assert_eq!(påskdagen(1855),Some(NaiveDate::from_ymd(1855,04,8)));
	assert_eq!(påskdagen(1856),Some(NaiveDate::from_ymd(1856,03,23)));
	assert_eq!(påskdagen(1857),Some(NaiveDate::from_ymd(1857,04,12)));
	assert_eq!(påskdagen(1858),Some(NaiveDate::from_ymd(1858,04,4)));
	assert_eq!(påskdagen(1859),Some(NaiveDate::from_ymd(1859,04,24)));
	assert_eq!(påskdagen(1860),Some(NaiveDate::from_ymd(1860,04,8)));
	assert_eq!(påskdagen(1861),Some(NaiveDate::from_ymd(1861,03,31)));
	assert_eq!(påskdagen(1862),Some(NaiveDate::from_ymd(1862,04,20)));
	assert_eq!(påskdagen(1863),Some(NaiveDate::from_ymd(1863,04,5)));
	assert_eq!(påskdagen(1864),Some(NaiveDate::from_ymd(1864,03,27)));
	assert_eq!(påskdagen(1865),Some(NaiveDate::from_ymd(1865,04,16)));
	assert_eq!(påskdagen(1866),Some(NaiveDate::from_ymd(1866,04,1)));
	assert_eq!(påskdagen(1867),Some(NaiveDate::from_ymd(1867,04,21)));
	assert_eq!(påskdagen(1868),Some(NaiveDate::from_ymd(1868,04,12)));
	assert_eq!(påskdagen(1869),Some(NaiveDate::from_ymd(1869,03,28)));
	assert_eq!(påskdagen(1870),Some(NaiveDate::from_ymd(1870,04,17)));
	assert_eq!(påskdagen(1871),Some(NaiveDate::from_ymd(1871,04,9)));
	assert_eq!(påskdagen(1872),Some(NaiveDate::from_ymd(1872,03,31)));
	assert_eq!(påskdagen(1873),Some(NaiveDate::from_ymd(1873,04,13)));
	assert_eq!(påskdagen(1874),Some(NaiveDate::from_ymd(1874,04,5)));
	assert_eq!(påskdagen(1875),Some(NaiveDate::from_ymd(1875,03,28)));
	assert_eq!(påskdagen(1876),Some(NaiveDate::from_ymd(1876,04,16)));
	assert_eq!(påskdagen(1877),Some(NaiveDate::from_ymd(1877,04,1)));
	assert_eq!(påskdagen(1878),Some(NaiveDate::from_ymd(1878,04,21)));
	assert_eq!(påskdagen(1879),Some(NaiveDate::from_ymd(1879,04,13)));
	assert_eq!(påskdagen(1880),Some(NaiveDate::from_ymd(1880,03,28)));
	assert_eq!(påskdagen(1881),Some(NaiveDate::from_ymd(1881,04,17)));
	assert_eq!(påskdagen(1882),Some(NaiveDate::from_ymd(1882,04,9)));
	assert_eq!(påskdagen(1883),Some(NaiveDate::from_ymd(1883,03,25)));
	assert_eq!(påskdagen(1884),Some(NaiveDate::from_ymd(1884,04,13)));
	assert_eq!(påskdagen(1885),Some(NaiveDate::from_ymd(1885,04,5)));
	assert_eq!(påskdagen(1886),Some(NaiveDate::from_ymd(1886,04,25)));
	assert_eq!(påskdagen(1887),Some(NaiveDate::from_ymd(1887,04,10)));
	assert_eq!(påskdagen(1888),Some(NaiveDate::from_ymd(1888,04,1)));
	assert_eq!(påskdagen(1889),Some(NaiveDate::from_ymd(1889,04,21)));
	assert_eq!(påskdagen(1890),Some(NaiveDate::from_ymd(1890,04,6)));
	assert_eq!(påskdagen(1891),Some(NaiveDate::from_ymd(1891,03,29)));
	assert_eq!(påskdagen(1892),Some(NaiveDate::from_ymd(1892,04,17)));
	assert_eq!(påskdagen(1893),Some(NaiveDate::from_ymd(1893,04,2)));
	assert_eq!(påskdagen(1894),Some(NaiveDate::from_ymd(1894,03,25)));
	assert_eq!(påskdagen(1895),Some(NaiveDate::from_ymd(1895,04,14)));
	assert_eq!(påskdagen(1896),Some(NaiveDate::from_ymd(1896,04,5)));
	assert_eq!(påskdagen(1897),Some(NaiveDate::from_ymd(1897,04,18)));
	assert_eq!(påskdagen(1898),Some(NaiveDate::from_ymd(1898,04,10)));
	assert_eq!(påskdagen(1899),Some(NaiveDate::from_ymd(1899,04,2)));
	assert_eq!(påskdagen(1900),Some(NaiveDate::from_ymd(1900,04,15)));
	assert_eq!(påskdagen(1901),Some(NaiveDate::from_ymd(1901,04,7)));
	assert_eq!(påskdagen(1902),Some(NaiveDate::from_ymd(1902,03,30)));
	assert_eq!(påskdagen(1903),Some(NaiveDate::from_ymd(1903,04,12)));
	assert_eq!(påskdagen(1904),Some(NaiveDate::from_ymd(1904,04,3)));
	assert_eq!(påskdagen(1905),Some(NaiveDate::from_ymd(1905,04,23)));
	assert_eq!(påskdagen(1906),Some(NaiveDate::from_ymd(1906,04,15)));
	assert_eq!(påskdagen(1907),Some(NaiveDate::from_ymd(1907,03,31)));
	assert_eq!(påskdagen(1908),Some(NaiveDate::from_ymd(1908,04,19)));
	assert_eq!(påskdagen(1909),Some(NaiveDate::from_ymd(1909,04,11)));
	assert_eq!(påskdagen(1910),Some(NaiveDate::from_ymd(1910,03,27)));
	assert_eq!(påskdagen(1911),Some(NaiveDate::from_ymd(1911,04,16)));
	assert_eq!(påskdagen(1912),Some(NaiveDate::from_ymd(1912,04,7)));
	assert_eq!(påskdagen(1913),Some(NaiveDate::from_ymd(1913,03,23)));
	assert_eq!(påskdagen(1914),Some(NaiveDate::from_ymd(1914,04,12)));
	assert_eq!(påskdagen(1915),Some(NaiveDate::from_ymd(1915,04,4)));
	assert_eq!(påskdagen(1916),Some(NaiveDate::from_ymd(1916,04,23)));
	assert_eq!(påskdagen(1917),Some(NaiveDate::from_ymd(1917,04,8)));
	assert_eq!(påskdagen(1918),Some(NaiveDate::from_ymd(1918,03,31)));
	assert_eq!(påskdagen(1919),Some(NaiveDate::from_ymd(1919,04,20)));
	assert_eq!(påskdagen(1920),Some(NaiveDate::from_ymd(1920,04,4)));
	assert_eq!(påskdagen(1921),Some(NaiveDate::from_ymd(1921,03,27)));
	assert_eq!(påskdagen(1922),Some(NaiveDate::from_ymd(1922,04,16)));
	assert_eq!(påskdagen(1923),Some(NaiveDate::from_ymd(1923,04,1)));
	assert_eq!(påskdagen(1924),Some(NaiveDate::from_ymd(1924,04,20)));
	assert_eq!(påskdagen(1925),Some(NaiveDate::from_ymd(1925,04,12)));
	assert_eq!(påskdagen(1926),Some(NaiveDate::from_ymd(1926,04,4)));
	assert_eq!(påskdagen(1927),Some(NaiveDate::from_ymd(1927,04,17)));
	assert_eq!(påskdagen(1928),Some(NaiveDate::from_ymd(1928,04,8)));
	assert_eq!(påskdagen(1929),Some(NaiveDate::from_ymd(1929,03,31)));
	assert_eq!(påskdagen(1930),Some(NaiveDate::from_ymd(1930,04,20)));
	assert_eq!(påskdagen(1931),Some(NaiveDate::from_ymd(1931,04,5)));
	assert_eq!(påskdagen(1932),Some(NaiveDate::from_ymd(1932,03,27)));
	assert_eq!(påskdagen(1933),Some(NaiveDate::from_ymd(1933,04,16)));
	assert_eq!(påskdagen(1934),Some(NaiveDate::from_ymd(1934,04,1)));
	assert_eq!(påskdagen(1935),Some(NaiveDate::from_ymd(1935,04,21)));
	assert_eq!(påskdagen(1936),Some(NaiveDate::from_ymd(1936,04,12)));
	assert_eq!(påskdagen(1937),Some(NaiveDate::from_ymd(1937,03,28)));
	assert_eq!(påskdagen(1938),Some(NaiveDate::from_ymd(1938,04,17)));
	assert_eq!(påskdagen(1939),Some(NaiveDate::from_ymd(1939,04,9)));
	assert_eq!(påskdagen(1940),Some(NaiveDate::from_ymd(1940,03,24)));
	assert_eq!(påskdagen(1941),Some(NaiveDate::from_ymd(1941,04,13)));
	assert_eq!(påskdagen(1942),Some(NaiveDate::from_ymd(1942,04,5)));
	assert_eq!(påskdagen(1943),Some(NaiveDate::from_ymd(1943,04,25)));
	assert_eq!(påskdagen(1944),Some(NaiveDate::from_ymd(1944,04,9)));
	assert_eq!(påskdagen(1945),Some(NaiveDate::from_ymd(1945,04,1)));
	assert_eq!(påskdagen(1946),Some(NaiveDate::from_ymd(1946,04,21)));
	assert_eq!(påskdagen(1947),Some(NaiveDate::from_ymd(1947,04,6)));
	assert_eq!(påskdagen(1948),Some(NaiveDate::from_ymd(1948,03,28)));
	assert_eq!(påskdagen(1949),Some(NaiveDate::from_ymd(1949,04,17)));
	assert_eq!(påskdagen(1950),Some(NaiveDate::from_ymd(1950,04,9)));
	assert_eq!(påskdagen(1951),Some(NaiveDate::from_ymd(1951,03,25)));
	assert_eq!(påskdagen(1952),Some(NaiveDate::from_ymd(1952,04,13)));
	assert_eq!(påskdagen(1953),Some(NaiveDate::from_ymd(1953,04,5)));
	assert_eq!(påskdagen(1954),Some(NaiveDate::from_ymd(1954,04,18)));
	assert_eq!(påskdagen(1955),Some(NaiveDate::from_ymd(1955,04,10)));
	assert_eq!(påskdagen(1956),Some(NaiveDate::from_ymd(1956,04,1)));
	assert_eq!(påskdagen(1957),Some(NaiveDate::from_ymd(1957,04,21)));
	assert_eq!(påskdagen(1958),Some(NaiveDate::from_ymd(1958,04,6)));
	assert_eq!(påskdagen(1959),Some(NaiveDate::from_ymd(1959,03,29)));
	assert_eq!(påskdagen(1960),Some(NaiveDate::from_ymd(1960,04,17)));
	assert_eq!(påskdagen(1961),Some(NaiveDate::from_ymd(1961,04,2)));
	assert_eq!(påskdagen(1962),Some(NaiveDate::from_ymd(1962,04,22)));
	assert_eq!(påskdagen(1963),Some(NaiveDate::from_ymd(1963,04,14)));
	assert_eq!(påskdagen(1964),Some(NaiveDate::from_ymd(1964,03,29)));
	assert_eq!(påskdagen(1965),Some(NaiveDate::from_ymd(1965,04,18)));
	assert_eq!(påskdagen(1966),Some(NaiveDate::from_ymd(1966,04,10)));
	assert_eq!(påskdagen(1967),Some(NaiveDate::from_ymd(1967,03,26)));
	assert_eq!(påskdagen(1968),Some(NaiveDate::from_ymd(1968,04,14)));
	assert_eq!(påskdagen(1969),Some(NaiveDate::from_ymd(1969,04,6)));
	assert_eq!(påskdagen(1970),Some(NaiveDate::from_ymd(1970,03,29)));
	assert_eq!(påskdagen(1971),Some(NaiveDate::from_ymd(1971,04,11)));
	assert_eq!(påskdagen(1972),Some(NaiveDate::from_ymd(1972,04,2)));
	assert_eq!(påskdagen(1973),Some(NaiveDate::from_ymd(1973,04,22)));
	assert_eq!(påskdagen(1974),Some(NaiveDate::from_ymd(1974,04,14)));
	assert_eq!(påskdagen(1975),Some(NaiveDate::from_ymd(1975,03,30)));
	assert_eq!(påskdagen(1976),Some(NaiveDate::from_ymd(1976,04,18)));
	assert_eq!(påskdagen(1977),Some(NaiveDate::from_ymd(1977,04,10)));
	assert_eq!(påskdagen(1978),Some(NaiveDate::from_ymd(1978,03,26)));
	assert_eq!(påskdagen(1979),Some(NaiveDate::from_ymd(1979,04,15)));
	assert_eq!(påskdagen(1980),Some(NaiveDate::from_ymd(1980,04,6)));
	assert_eq!(påskdagen(1981),Some(NaiveDate::from_ymd(1981,04,19)));
	assert_eq!(påskdagen(1982),Some(NaiveDate::from_ymd(1982,04,11)));
	assert_eq!(påskdagen(1983),Some(NaiveDate::from_ymd(1983,04,3)));
	assert_eq!(påskdagen(1984),Some(NaiveDate::from_ymd(1984,04,22)));
	assert_eq!(påskdagen(1985),Some(NaiveDate::from_ymd(1985,04,7)));
	assert_eq!(påskdagen(1986),Some(NaiveDate::from_ymd(1986,03,30)));
	assert_eq!(påskdagen(1987),Some(NaiveDate::from_ymd(1987,04,19)));
	assert_eq!(påskdagen(1988),Some(NaiveDate::from_ymd(1988,04,3)));
	assert_eq!(påskdagen(1989),Some(NaiveDate::from_ymd(1989,03,26)));
	assert_eq!(påskdagen(1990),Some(NaiveDate::from_ymd(1990,04,15)));
	assert_eq!(påskdagen(1991),Some(NaiveDate::from_ymd(1991,03,31)));
	assert_eq!(påskdagen(1992),Some(NaiveDate::from_ymd(1992,04,19)));
	assert_eq!(påskdagen(1993),Some(NaiveDate::from_ymd(1993,04,11)));
	assert_eq!(påskdagen(1994),Some(NaiveDate::from_ymd(1994,04,3)));
	assert_eq!(påskdagen(1995),Some(NaiveDate::from_ymd(1995,04,16)));
	assert_eq!(påskdagen(1996),Some(NaiveDate::from_ymd(1996,04,7)));
	assert_eq!(påskdagen(1997),Some(NaiveDate::from_ymd(1997,03,30)));
	assert_eq!(påskdagen(1998),Some(NaiveDate::from_ymd(1998,04,12)));
	assert_eq!(påskdagen(1999),Some(NaiveDate::from_ymd(1999,04,4)));
	assert_eq!(påskdagen(2000),Some(NaiveDate::from_ymd(2000,04,23)));
	assert_eq!(påskdagen(2001),Some(NaiveDate::from_ymd(2001,04,15)));
	assert_eq!(påskdagen(2002),Some(NaiveDate::from_ymd(2002,03,31)));
	assert_eq!(påskdagen(2003),Some(NaiveDate::from_ymd(2003,04,20)));
	assert_eq!(påskdagen(2004),Some(NaiveDate::from_ymd(2004,04,11)));
	assert_eq!(påskdagen(2005),Some(NaiveDate::from_ymd(2005,03,27)));
	assert_eq!(påskdagen(2006),Some(NaiveDate::from_ymd(2006,04,16)));
	assert_eq!(påskdagen(2007),Some(NaiveDate::from_ymd(2007,04,8)));
	assert_eq!(påskdagen(2008),Some(NaiveDate::from_ymd(2008,03,23)));
	assert_eq!(påskdagen(2009),Some(NaiveDate::from_ymd(2009,04,12)));
	assert_eq!(påskdagen(2010),Some(NaiveDate::from_ymd(2010,04,4)));
	assert_eq!(påskdagen(2011),Some(NaiveDate::from_ymd(2011,04,24)));
	assert_eq!(påskdagen(2012),Some(NaiveDate::from_ymd(2012,04,8)));
	assert_eq!(påskdagen(2013),Some(NaiveDate::from_ymd(2013,03,31)));
	assert_eq!(påskdagen(2014),Some(NaiveDate::from_ymd(2014,04,20)));
	assert_eq!(påskdagen(2015),Some(NaiveDate::from_ymd(2015,04,5)));
	assert_eq!(påskdagen(2016),Some(NaiveDate::from_ymd(2016,03,27)));
	assert_eq!(påskdagen(2017),Some(NaiveDate::from_ymd(2017,04,16)));
	assert_eq!(påskdagen(2018),Some(NaiveDate::from_ymd(2018,04,1)));
	assert_eq!(påskdagen(2019),Some(NaiveDate::from_ymd(2019,04,21)));
	assert_eq!(påskdagen(2020),Some(NaiveDate::from_ymd(2020,04,12)));
	assert_eq!(påskdagen(2021),Some(NaiveDate::from_ymd(2021,04,4)));
	assert_eq!(påskdagen(2022),Some(NaiveDate::from_ymd(2022,04,17)));
	assert_eq!(påskdagen(2023),Some(NaiveDate::from_ymd(2023,04,9)));
	assert_eq!(påskdagen(2024),Some(NaiveDate::from_ymd(2024,03,31)));
	assert_eq!(påskdagen(2025),Some(NaiveDate::from_ymd(2025,04,20)));
	assert_eq!(påskdagen(2026),Some(NaiveDate::from_ymd(2026,04,5)));
	assert_eq!(påskdagen(2027),Some(NaiveDate::from_ymd(2027,03,28)));
	assert_eq!(påskdagen(2028),Some(NaiveDate::from_ymd(2028,04,16)));
	assert_eq!(påskdagen(2029),Some(NaiveDate::from_ymd(2029,04,1)));
	assert_eq!(påskdagen(2030),Some(NaiveDate::from_ymd(2030,04,21)));
	assert_eq!(påskdagen(2031),Some(NaiveDate::from_ymd(2031,04,13)));
	assert_eq!(påskdagen(2032),Some(NaiveDate::from_ymd(2032,03,28)));
	assert_eq!(påskdagen(2033),Some(NaiveDate::from_ymd(2033,04,17)));
	assert_eq!(påskdagen(2034),Some(NaiveDate::from_ymd(2034,04,9)));
	assert_eq!(påskdagen(2035),Some(NaiveDate::from_ymd(2035,03,25)));
	assert_eq!(påskdagen(2036),Some(NaiveDate::from_ymd(2036,04,13)));
	assert_eq!(påskdagen(2037),Some(NaiveDate::from_ymd(2037,04,5)));
	assert_eq!(påskdagen(2038),Some(NaiveDate::from_ymd(2038,04,25)));
	assert_eq!(påskdagen(2039),Some(NaiveDate::from_ymd(2039,04,10)));
	assert_eq!(påskdagen(2040),Some(NaiveDate::from_ymd(2040,04,1)));
	assert_eq!(påskdagen(2041),Some(NaiveDate::from_ymd(2041,04,21)));
	assert_eq!(påskdagen(2042),Some(NaiveDate::from_ymd(2042,04,6)));
	assert_eq!(påskdagen(2043),Some(NaiveDate::from_ymd(2043,03,29)));
	assert_eq!(påskdagen(2044),Some(NaiveDate::from_ymd(2044,04,17)));
	assert_eq!(påskdagen(2045),Some(NaiveDate::from_ymd(2045,04,9)));
	assert_eq!(påskdagen(2046),Some(NaiveDate::from_ymd(2046,03,25)));
	assert_eq!(påskdagen(2047),Some(NaiveDate::from_ymd(2047,04,14)));
	assert_eq!(påskdagen(2048),Some(NaiveDate::from_ymd(2048,04,5)));
	assert_eq!(påskdagen(2049),Some(NaiveDate::from_ymd(2049,04,18)));
	assert_eq!(påskdagen(2050),Some(NaiveDate::from_ymd(2050,04,10)));
	assert_eq!(påskdagen(2051),Some(NaiveDate::from_ymd(2051,04,2)));
	assert_eq!(påskdagen(2052),Some(NaiveDate::from_ymd(2052,04,21)));
	assert_eq!(påskdagen(2053),Some(NaiveDate::from_ymd(2053,04,6)));
	assert_eq!(påskdagen(2054),Some(NaiveDate::from_ymd(2054,03,29)));
	assert_eq!(påskdagen(2055),Some(NaiveDate::from_ymd(2055,04,18)));
	assert_eq!(påskdagen(2056),Some(NaiveDate::from_ymd(2056,04,2)));
	assert_eq!(påskdagen(2057),Some(NaiveDate::from_ymd(2057,04,22)));
	assert_eq!(påskdagen(2058),Some(NaiveDate::from_ymd(2058,04,14)));
	assert_eq!(påskdagen(2059),Some(NaiveDate::from_ymd(2059,03,30)));
	assert_eq!(påskdagen(2060),Some(NaiveDate::from_ymd(2060,04,18)));
	assert_eq!(påskdagen(2061),Some(NaiveDate::from_ymd(2061,04,10)));
	assert_eq!(påskdagen(2062),Some(NaiveDate::from_ymd(2062,03,26)));
	assert_eq!(påskdagen(2063),Some(NaiveDate::from_ymd(2063,04,15)));
	assert_eq!(påskdagen(2064),Some(NaiveDate::from_ymd(2064,04,6)));
	assert_eq!(påskdagen(2065),Some(NaiveDate::from_ymd(2065,03,29)));
	assert_eq!(påskdagen(2066),Some(NaiveDate::from_ymd(2066,04,11)));
	assert_eq!(påskdagen(2067),Some(NaiveDate::from_ymd(2067,04,3)));
	assert_eq!(påskdagen(2068),Some(NaiveDate::from_ymd(2068,04,22)));
	assert_eq!(påskdagen(2069),Some(NaiveDate::from_ymd(2069,04,14)));
	assert_eq!(påskdagen(2070),Some(NaiveDate::from_ymd(2070,03,30)));
	assert_eq!(påskdagen(2071),Some(NaiveDate::from_ymd(2071,04,19)));
	assert_eq!(påskdagen(2072),Some(NaiveDate::from_ymd(2072,04,10)));
	assert_eq!(påskdagen(2073),Some(NaiveDate::from_ymd(2073,03,26)));
	assert_eq!(påskdagen(2074),Some(NaiveDate::from_ymd(2074,04,15)));
	assert_eq!(påskdagen(2075),Some(NaiveDate::from_ymd(2075,04,7)));
	assert_eq!(påskdagen(2076),Some(NaiveDate::from_ymd(2076,04,19)));
	assert_eq!(påskdagen(2077),Some(NaiveDate::from_ymd(2077,04,11)));
	assert_eq!(påskdagen(2078),Some(NaiveDate::from_ymd(2078,04,3)));
	assert_eq!(påskdagen(2079),Some(NaiveDate::from_ymd(2079,04,23)));
	assert_eq!(påskdagen(2080),Some(NaiveDate::from_ymd(2080,04,7)));
	assert_eq!(påskdagen(2081),Some(NaiveDate::from_ymd(2081,03,30)));
	assert_eq!(påskdagen(2082),Some(NaiveDate::from_ymd(2082,04,19)));
	assert_eq!(påskdagen(2083),Some(NaiveDate::from_ymd(2083,04,4)));
	assert_eq!(påskdagen(2084),Some(NaiveDate::from_ymd(2084,03,26)));
	assert_eq!(påskdagen(2085),Some(NaiveDate::from_ymd(2085,04,15)));
	assert_eq!(påskdagen(2086),Some(NaiveDate::from_ymd(2086,03,31)));
	assert_eq!(påskdagen(2087),Some(NaiveDate::from_ymd(2087,04,20)));
	assert_eq!(påskdagen(2088),Some(NaiveDate::from_ymd(2088,04,11)));
	assert_eq!(påskdagen(2089),Some(NaiveDate::from_ymd(2089,04,3)));
	assert_eq!(påskdagen(2090),Some(NaiveDate::from_ymd(2090,04,16)));
	assert_eq!(påskdagen(2091),Some(NaiveDate::from_ymd(2091,04,8)));
	assert_eq!(påskdagen(2092),Some(NaiveDate::from_ymd(2092,03,30)));
	assert_eq!(påskdagen(2093),Some(NaiveDate::from_ymd(2093,04,12)));
	assert_eq!(påskdagen(2094),Some(NaiveDate::from_ymd(2094,04,4)));
	assert_eq!(påskdagen(2095),Some(NaiveDate::from_ymd(2095,04,24)));
	assert_eq!(påskdagen(2096),Some(NaiveDate::from_ymd(2096,04,15)));
	assert_eq!(påskdagen(2097),Some(NaiveDate::from_ymd(2097,03,31)));
	assert_eq!(påskdagen(2098),Some(NaiveDate::from_ymd(2098,04,20)));
	assert_eq!(påskdagen(2099),Some(NaiveDate::from_ymd(2099,04,12)));
}

//Sources: https://www.kalender-365.se/helgdagar/2019.html
#[test]
fn test_pingstdagen(){
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2019).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2019,06,9)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2020).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2020,05,31)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2021).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2021,05,23)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2022).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2022,06,05)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2023).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2023,05,28)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2024).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2024,05,19)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2025).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2025,06,08)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2026).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2026,05,24)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2027).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2027,05,16)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2028).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2028,06,04)));
	assert_eq!(date_of_next_weekday(Weekday::Sun,påskdagen(2029).unwrap() + Duration::weeks(6)),Some(NaiveDate::from_ymd(2029,05,20)));
}

//Sources: https://www.kalender-365.se/helgdagar/2019.html
#[test]
fn test_kristihimmelsfärdsdag(){
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2019).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2019,05,30)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2020).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2020,05,21)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2021).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2021,05,13)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2022).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2022,05,26)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2023).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2023,05,18)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2024).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2024,05,09)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2025).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2025,05,29)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2026).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2026,05,14)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2027).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2027,05,06)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2028).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2028,05,25)));
	assert_eq!(date_of_next_weekday(Weekday::Thu,påskdagen(2029).unwrap() + Duration::weeks(5)),Some(NaiveDate::from_ymd(2029,05,10)));
}

//Sources: https://www.kalender-365.se/helgdagar/2019.html
#[test]
fn test_midsommardagen(){
	assert_eq!(midsommardagen(2019),Some(NaiveDate::from_ymd(2019,06,22)));
	assert_eq!(midsommardagen(2020),Some(NaiveDate::from_ymd(2020,06,20)));
	assert_eq!(midsommardagen(2021),Some(NaiveDate::from_ymd(2021,06,26)));
	assert_eq!(midsommardagen(2022),Some(NaiveDate::from_ymd(2022,06,25)));
	assert_eq!(midsommardagen(2023),Some(NaiveDate::from_ymd(2023,06,24)));
	assert_eq!(midsommardagen(2024),Some(NaiveDate::from_ymd(2024,06,22)));
	assert_eq!(midsommardagen(2025),Some(NaiveDate::from_ymd(2025,06,21)));
	assert_eq!(midsommardagen(2026),Some(NaiveDate::from_ymd(2026,06,20)));
	assert_eq!(midsommardagen(2027),Some(NaiveDate::from_ymd(2027,06,26)));
	assert_eq!(midsommardagen(2028),Some(NaiveDate::from_ymd(2028,06,24)));
	assert_eq!(midsommardagen(2029),Some(NaiveDate::from_ymd(2029,06,23)));
}

//Sources: https://www.kalender-365.se/helgdagar/2019.html
#[test]
fn test_allahelgonsdag(){
	assert_eq!(allahelgonsdag(2019),Some(NaiveDate::from_ymd(2019,11,2)));
	assert_eq!(allahelgonsdag(2020),Some(NaiveDate::from_ymd(2020,10,31)));
	assert_eq!(allahelgonsdag(2021),Some(NaiveDate::from_ymd(2021,11,6)));
	assert_eq!(allahelgonsdag(2022),Some(NaiveDate::from_ymd(2022,11,5)));
	assert_eq!(allahelgonsdag(2023),Some(NaiveDate::from_ymd(2023,11,4)));
	assert_eq!(allahelgonsdag(2024),Some(NaiveDate::from_ymd(2024,11,2)));
	assert_eq!(allahelgonsdag(2025),Some(NaiveDate::from_ymd(2025,11,1)));
	assert_eq!(allahelgonsdag(2026),Some(NaiveDate::from_ymd(2026,10,31)));
	assert_eq!(allahelgonsdag(2027),Some(NaiveDate::from_ymd(2027,11,6)));
	assert_eq!(allahelgonsdag(2028),Some(NaiveDate::from_ymd(2028,11,4)));
	assert_eq!(allahelgonsdag(2029),Some(NaiveDate::from_ymd(2029,11,3)));
}

//Sources: https://en.wikipedia.org/wiki/Thanksgiving_(United_States)#Table_of_dates_(1985%E2%80%932029)
#[test]
fn test_thanksgiving(){
	assert_eq!(thanksgiving(1985),Some(NaiveDate::from_ymd(1985,11,28)));
	assert_eq!(thanksgiving(1986),Some(NaiveDate::from_ymd(1986,11,27)));
	assert_eq!(thanksgiving(1987),Some(NaiveDate::from_ymd(1987,11,26)));
	assert_eq!(thanksgiving(1988),Some(NaiveDate::from_ymd(1988,11,24)));
	assert_eq!(thanksgiving(1989),Some(NaiveDate::from_ymd(1989,11,23)));
	assert_eq!(thanksgiving(1990),Some(NaiveDate::from_ymd(1990,11,22)));
	assert_eq!(thanksgiving(1991),Some(NaiveDate::from_ymd(1991,11,28)));
	assert_eq!(thanksgiving(1992),Some(NaiveDate::from_ymd(1992,11,26)));
	assert_eq!(thanksgiving(1993),Some(NaiveDate::from_ymd(1993,11,25)));
	assert_eq!(thanksgiving(1994),Some(NaiveDate::from_ymd(1994,11,24)));
	assert_eq!(thanksgiving(1995),Some(NaiveDate::from_ymd(1995,11,23)));
	assert_eq!(thanksgiving(1996),Some(NaiveDate::from_ymd(1996,11,28)));
	assert_eq!(thanksgiving(1997),Some(NaiveDate::from_ymd(1997,11,27)));
	assert_eq!(thanksgiving(1998),Some(NaiveDate::from_ymd(1998,11,26)));
	assert_eq!(thanksgiving(1999),Some(NaiveDate::from_ymd(1999,11,25)));
	assert_eq!(thanksgiving(2000),Some(NaiveDate::from_ymd(2000,11,23)));
	assert_eq!(thanksgiving(2001),Some(NaiveDate::from_ymd(2001,11,22)));
	assert_eq!(thanksgiving(2002),Some(NaiveDate::from_ymd(2002,11,28)));
	assert_eq!(thanksgiving(2003),Some(NaiveDate::from_ymd(2003,11,27)));
	assert_eq!(thanksgiving(2004),Some(NaiveDate::from_ymd(2004,11,25)));
	assert_eq!(thanksgiving(2005),Some(NaiveDate::from_ymd(2005,11,24)));
	assert_eq!(thanksgiving(2006),Some(NaiveDate::from_ymd(2006,11,23)));
	assert_eq!(thanksgiving(2007),Some(NaiveDate::from_ymd(2007,11,22)));
	assert_eq!(thanksgiving(2008),Some(NaiveDate::from_ymd(2008,11,27)));
	assert_eq!(thanksgiving(2009),Some(NaiveDate::from_ymd(2009,11,26)));
	assert_eq!(thanksgiving(2010),Some(NaiveDate::from_ymd(2010,11,25)));
	assert_eq!(thanksgiving(2011),Some(NaiveDate::from_ymd(2011,11,24)));
	assert_eq!(thanksgiving(2012),Some(NaiveDate::from_ymd(2012,11,22)));
	assert_eq!(thanksgiving(2013),Some(NaiveDate::from_ymd(2013,11,28)));
	assert_eq!(thanksgiving(2014),Some(NaiveDate::from_ymd(2014,11,27)));
	assert_eq!(thanksgiving(2015),Some(NaiveDate::from_ymd(2015,11,26)));
	assert_eq!(thanksgiving(2016),Some(NaiveDate::from_ymd(2016,11,24)));
	assert_eq!(thanksgiving(2017),Some(NaiveDate::from_ymd(2017,11,23)));
	assert_eq!(thanksgiving(2018),Some(NaiveDate::from_ymd(2018,11,22)));
	assert_eq!(thanksgiving(2019),Some(NaiveDate::from_ymd(2019,11,28)));
	assert_eq!(thanksgiving(2020),Some(NaiveDate::from_ymd(2020,11,26)));
	assert_eq!(thanksgiving(2021),Some(NaiveDate::from_ymd(2021,11,25)));
	assert_eq!(thanksgiving(2022),Some(NaiveDate::from_ymd(2022,11,24)));
	assert_eq!(thanksgiving(2023),Some(NaiveDate::from_ymd(2023,11,23)));
	assert_eq!(thanksgiving(2024),Some(NaiveDate::from_ymd(2024,11,28)));
	assert_eq!(thanksgiving(2025),Some(NaiveDate::from_ymd(2025,11,27)));
	assert_eq!(thanksgiving(2026),Some(NaiveDate::from_ymd(2026,11,26)));
	assert_eq!(thanksgiving(2027),Some(NaiveDate::from_ymd(2027,11,25)));
	assert_eq!(thanksgiving(2028),Some(NaiveDate::from_ymd(2028,11,23)));
	assert_eq!(thanksgiving(2029),Some(NaiveDate::from_ymd(2029,11,22)));
}

//Sources: https://sv.wikipedia.org/wiki/Sommartid
#[test]
fn test_sommartid(){
	assert_eq!(sommartid(1915),None);
	assert_eq!(sommartid(1916),Some(NaiveDate::from_ymd(1916,05,15)));
	assert_eq!(sommartid(1917),None);
	assert_eq!(sommartid(1979),None);
	assert_eq!(sommartid(1980),Some(NaiveDate::from_ymd(1980,04,06)));
	assert_eq!(sommartid(1981),Some(NaiveDate::from_ymd(1981,03,29)));
	assert_eq!(sommartid(1982),Some(NaiveDate::from_ymd(1982,03,28)));
	assert_eq!(sommartid(1983),Some(NaiveDate::from_ymd(1983,03,27)));
	assert_eq!(sommartid(1984),Some(NaiveDate::from_ymd(1984,03,25)));
	assert_eq!(sommartid(1985),Some(NaiveDate::from_ymd(1985,03,31)));
	assert_eq!(sommartid(1986),Some(NaiveDate::from_ymd(1986,03,30)));
	assert_eq!(sommartid(1987),Some(NaiveDate::from_ymd(1987,03,29)));
	assert_eq!(sommartid(1988),Some(NaiveDate::from_ymd(1988,03,27)));
	assert_eq!(sommartid(1989),Some(NaiveDate::from_ymd(1989,03,26)));
	assert_eq!(sommartid(1990),Some(NaiveDate::from_ymd(1990,03,25)));
	assert_eq!(sommartid(1991),Some(NaiveDate::from_ymd(1991,03,31)));
	assert_eq!(sommartid(1992),Some(NaiveDate::from_ymd(1992,03,29)));
	assert_eq!(sommartid(1993),Some(NaiveDate::from_ymd(1993,03,28)));
	assert_eq!(sommartid(1994),Some(NaiveDate::from_ymd(1994,03,27)));
	assert_eq!(sommartid(1995),Some(NaiveDate::from_ymd(1995,03,26)));
	assert_eq!(sommartid(1996),Some(NaiveDate::from_ymd(1996,03,31)));
	assert_eq!(sommartid(1997),Some(NaiveDate::from_ymd(1997,03,30)));
	assert_eq!(sommartid(1998),Some(NaiveDate::from_ymd(1998,03,29)));
	assert_eq!(sommartid(1999),Some(NaiveDate::from_ymd(1999,03,28)));
	assert_eq!(sommartid(2000),Some(NaiveDate::from_ymd(2000,03,26)));
	assert_eq!(sommartid(2001),Some(NaiveDate::from_ymd(2001,03,25)));
	assert_eq!(sommartid(2002),Some(NaiveDate::from_ymd(2002,03,31)));
	assert_eq!(sommartid(2003),Some(NaiveDate::from_ymd(2003,03,30)));
	assert_eq!(sommartid(2004),Some(NaiveDate::from_ymd(2004,03,28)));
	assert_eq!(sommartid(2005),Some(NaiveDate::from_ymd(2005,03,27)));
	assert_eq!(sommartid(2006),Some(NaiveDate::from_ymd(2006,03,26)));
	assert_eq!(sommartid(2007),Some(NaiveDate::from_ymd(2007,03,25)));
	assert_eq!(sommartid(2008),Some(NaiveDate::from_ymd(2008,03,30)));
	assert_eq!(sommartid(2009),Some(NaiveDate::from_ymd(2009,03,29)));
	assert_eq!(sommartid(2010),Some(NaiveDate::from_ymd(2010,03,28)));
	assert_eq!(sommartid(2011),Some(NaiveDate::from_ymd(2011,03,27)));
	assert_eq!(sommartid(2012),Some(NaiveDate::from_ymd(2012,03,25)));
	assert_eq!(sommartid(2013),Some(NaiveDate::from_ymd(2013,03,31)));
	assert_eq!(sommartid(2014),Some(NaiveDate::from_ymd(2014,03,30)));
	assert_eq!(sommartid(2015),Some(NaiveDate::from_ymd(2015,03,29)));
	assert_eq!(sommartid(2016),Some(NaiveDate::from_ymd(2016,03,27)));
	assert_eq!(sommartid(2017),Some(NaiveDate::from_ymd(2017,03,26)));
	assert_eq!(sommartid(2018),Some(NaiveDate::from_ymd(2018,03,25)));
	assert_eq!(sommartid(2019),Some(NaiveDate::from_ymd(2019,03,31)));
	assert_eq!(sommartid(2020),Some(NaiveDate::from_ymd(2020,03,29)));
}

//Sources: https://sv.wikipedia.org/wiki/Sommartid
#[test]
fn test_vintertid(){
	assert_eq!(vintertid(1915),None);
	assert_eq!(vintertid(1916),Some(NaiveDate::from_ymd(1916,09,30)));
	assert_eq!(vintertid(1917),None);
	assert_eq!(vintertid(1979),None);
	assert_eq!(vintertid(1980),Some(NaiveDate::from_ymd(1980,09,28)));
	assert_eq!(vintertid(1981),Some(NaiveDate::from_ymd(1981,09,27)));
	assert_eq!(vintertid(1982),Some(NaiveDate::from_ymd(1982,09,26)));
	assert_eq!(vintertid(1983),Some(NaiveDate::from_ymd(1983,09,25)));
	assert_eq!(vintertid(1984),Some(NaiveDate::from_ymd(1984,09,30)));
	assert_eq!(vintertid(1985),Some(NaiveDate::from_ymd(1985,09,29)));
	assert_eq!(vintertid(1986),Some(NaiveDate::from_ymd(1986,09,28)));
	assert_eq!(vintertid(1987),Some(NaiveDate::from_ymd(1987,09,27)));
	assert_eq!(vintertid(1988),Some(NaiveDate::from_ymd(1988,09,25)));
	assert_eq!(vintertid(1989),Some(NaiveDate::from_ymd(1989,09,24)));
	assert_eq!(vintertid(1990),Some(NaiveDate::from_ymd(1990,09,30)));
	assert_eq!(vintertid(1991),Some(NaiveDate::from_ymd(1991,09,29)));
	assert_eq!(vintertid(1992),Some(NaiveDate::from_ymd(1992,09,27)));
	assert_eq!(vintertid(1993),Some(NaiveDate::from_ymd(1993,09,26)));
	assert_eq!(vintertid(1994),Some(NaiveDate::from_ymd(1994,09,25)));
	assert_eq!(vintertid(1995),Some(NaiveDate::from_ymd(1995,09,24)));
	assert_eq!(vintertid(1996),Some(NaiveDate::from_ymd(1996,10,27)));
	assert_eq!(vintertid(1997),Some(NaiveDate::from_ymd(1997,10,26)));
	assert_eq!(vintertid(1998),Some(NaiveDate::from_ymd(1998,10,25)));
	assert_eq!(vintertid(1999),Some(NaiveDate::from_ymd(1999,10,31)));
	assert_eq!(vintertid(2000),Some(NaiveDate::from_ymd(2000,10,29)));
	assert_eq!(vintertid(2001),Some(NaiveDate::from_ymd(2001,10,28)));
	assert_eq!(vintertid(2002),Some(NaiveDate::from_ymd(2002,10,27)));
	assert_eq!(vintertid(2003),Some(NaiveDate::from_ymd(2003,10,26)));
	assert_eq!(vintertid(2004),Some(NaiveDate::from_ymd(2004,10,31)));
	assert_eq!(vintertid(2005),Some(NaiveDate::from_ymd(2005,10,30)));
	assert_eq!(vintertid(2006),Some(NaiveDate::from_ymd(2006,10,29)));
	assert_eq!(vintertid(2007),Some(NaiveDate::from_ymd(2007,10,28)));
	assert_eq!(vintertid(2008),Some(NaiveDate::from_ymd(2008,10,26)));
	assert_eq!(vintertid(2009),Some(NaiveDate::from_ymd(2009,10,25)));
	assert_eq!(vintertid(2010),Some(NaiveDate::from_ymd(2010,10,31)));
	assert_eq!(vintertid(2011),Some(NaiveDate::from_ymd(2011,10,30)));
	assert_eq!(vintertid(2012),Some(NaiveDate::from_ymd(2012,10,28)));
	assert_eq!(vintertid(2013),Some(NaiveDate::from_ymd(2013,10,27)));
	assert_eq!(vintertid(2014),Some(NaiveDate::from_ymd(2014,10,26)));
	assert_eq!(vintertid(2015),Some(NaiveDate::from_ymd(2015,10,25)));
	assert_eq!(vintertid(2016),Some(NaiveDate::from_ymd(2016,10,30)));
	assert_eq!(vintertid(2017),Some(NaiveDate::from_ymd(2017,10,29)));
	assert_eq!(vintertid(2018),Some(NaiveDate::from_ymd(2018,10,28)));
	assert_eq!(vintertid(2019),Some(NaiveDate::from_ymd(2019,10,27)));
	assert_eq!(vintertid(2020),Some(NaiveDate::from_ymd(2020,10,25)));
}

#[test]
fn test_write_ical_calendar_file(){
	use std::error::Error;
	use std::fs::File;
	use std::io::prelude::*;
	use std::path::Path;

	let str = calendar(2019).to_string();

	let path = Path::new("test.ics");
	let path_pretty = path.display();

	let mut file = match File::create(&path){
		Ok(file) => file,
		Err(e) => panic!("Cannot create file: \"{}\" ({})",path_pretty,e.description()),
	};

	if let Err(e) = file.write_all(str.as_bytes()){
		panic!("Cannot write to file: \"{}\" ({})",path_pretty,e.description());
	}
}

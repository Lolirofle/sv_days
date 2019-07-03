use chrono::*;

pub type Year = i32;

/**
 * The day with the specified weekday strictly earlier than the specified date.
 */
pub fn date_of_last_weekday(weekday: Weekday,date: NaiveDate) -> Option<NaiveDate>{
	let mut days = (weekday.num_days_from_monday() as i64) - (date.weekday().num_days_from_monday() as i64);
	if days >= 0{days-= 7;}
	date.checked_add_signed(Duration::days(days))
}

/**
 * The day with the specified weekday strictly later than the specified date.
 */
pub fn date_of_next_weekday(weekday: Weekday,date: NaiveDate) -> Option<NaiveDate>{
	let mut days = (weekday.num_days_from_monday() as i64) - (date.weekday().num_days_from_monday() as i64);
	if days <= 0{days+= 7;}
	date.checked_add_signed(Duration::days(days))
}

/**
 * The day with the specified weekday at or earlier than the specified date.
 */
pub fn date_of_last_weekday_or_today(weekday: Weekday,date: NaiveDate) -> Option<NaiveDate>{
	let mut days = (weekday.num_days_from_monday() as i64) - (date.weekday().num_days_from_monday() as i64);
	if days > 0{days-= 7;}
	date.checked_add_signed(Duration::days(days))
}

/**
 * The day with the specified weekday at or later than the specified date.
 */
pub fn date_of_next_weekday_or_today(weekday: Weekday,date: NaiveDate) -> Option<NaiveDate>{
	let mut days = (weekday.num_days_from_monday() as i64) - (date.weekday().num_days_from_monday() as i64);
	if days < 0{days+= 7;}
	date.checked_add_signed(Duration::days(days))
}

/**
 * The date one month later with the same day number. None if the same day number does not exist the next month.
 * Note: Assumes that there are 12 months every year.
 */
pub fn month_succ(date: NaiveDate) -> Option<NaiveDate>{
	match date.month(){
		12 => date.with_month(01).and_then(|date| date.with_year(date.year()+1)),
		m  => date.with_month(m+1)
	}
}

/**
 * The number of days of the specified month in the specified year.
 */
pub fn days_in_month(year: Year,month: u32) -> Option<u8>{
	let this_month = NaiveDate::from_ymd_opt(year,month,01)?;
	let next_month = month_succ(this_month)?;
	Some((next_month - this_month).num_days() as u8)
}

/**
 * In the specified year and month, the date of the first occurring weekday which is equal to the specified one.
 * Note: Assumes that a month is longer or have equal length as a week (At least 7 days).
 */
pub fn date_of_first_weekday_of_month(weekday: Weekday,year: Year,month: u32) -> Option<NaiveDate>{
	let date = NaiveDate::from_ymd_opt(year,month,01)?;
	date_of_next_weekday_or_today(weekday,date)
}

/**
 * In the specified year and month, the date of the last occurring weekday which is equal to the specified one.
 * Note: Assumes that a month is longer or have equal length as a week (At least 7 days).
 */
pub fn date_of_last_weekday_of_month(weekday: Weekday,year: Year,month: u32) -> Option<NaiveDate>{
	let days = days_in_month(year,month)?;
	let date = NaiveDate::from_ymd_opt(year,month,days as u32)?;
	date_of_last_weekday_or_today(weekday,date)
}

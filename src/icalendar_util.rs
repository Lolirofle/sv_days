use chrono::Weekday;
use core::fmt::Write;
use icalendar::*;

/**
 * Mainly an extension trait for a `Component`. Used to implement an API for the "RDATE" property.
 * `Param` are for the different types of parameters in the "RDATE" property.
 */
pub trait ComponentRecurring<Param>{
	fn recurring(&mut self,param: Param) -> &mut Self;
}
pub mod recurring_param{
	use chrono::*;
	use core::fmt;
	use core::fmt::Write;
	use icalendar::*;

	/**
	 * A parameter for a single datetime in a recurring event.
	 */
	pub struct DateTime<'l,TZ: TimeZone>(&'l chrono::DateTime<TZ>);
	impl<'l,TZ> super::ComponentRecurring<DateTime<'l,TZ>> for Event where
		TZ: TimeZone,
		TZ::Offset: fmt::Display
	{
		fn recurring(&mut self,datetime: DateTime<'l,TZ>) -> &mut Self{
			let str = datetime.0.format("%Y%m%dT%H%M%S").to_string();

			self.add_property("RDATE",str.as_ref());
			self
		}
	}

	/**
	 * A parameter for multiple datetimes in a recurring event.
	 */
	pub struct DateTimes<I>(I);
	impl<I> super::ComponentRecurring<DateTimes<I>> for Event where
		I: IntoIterator<Item = NaiveDateTime>
	{
		fn recurring(&mut self,datetimes: DateTimes<I>) -> &mut Self{
			let mut iter = datetimes.0.into_iter();

			if let Some(datetime) = iter.next(){
				const PREFIX: &'static str = "VALUE=DATE-TIME:";
				let mut value = String::with_capacity(PREFIX.len() + iter.size_hint().0*(6+1+6 + 1));

				let _ = write!(value,"{}{}",PREFIX,datetime.format("%Y%m%dT%H%M%S"));
				for datetime in iter{
					let _ = write!(value,",{}",datetime.format("%Y%m%dT%H%M%S"));
				}

				self.add_property("RDATE",value.as_ref());
			}

			self
		}
	}

	/**
	 * A parameter for multiple dates in a recurring event.
	 */
	pub struct Dates<I>(I);
	impl<I> super::ComponentRecurring<Dates<I>> for Event where
		I: IntoIterator<Item = NaiveDate>
	{
		fn recurring(&mut self,dates: Dates<I>) -> &mut Self{
			let mut iter = dates.0.into_iter();

			if let Some(date) = iter.next(){
				const PREFIX: &'static str = "VALUE=DATE:";
				let mut value = String::with_capacity(PREFIX.len() + iter.size_hint().0*(6 + 1));

				let _ = write!(value,"{}{}",PREFIX,date.format("%Y%m%d"));
				for date in iter{
					let _ = write!(value,",{}",date.format("%Y%m%d"));
				}

				self.add_property("RDATE",value.as_ref());
			}

			self
		}
	}

	/**
	 * A parameter for multiple periods in a recurring event.
	 * The tuple represents a start datetime and an end datetime.
	 */
	pub struct Period<I>(I);
	impl<I> super::ComponentRecurring<Period<I>> for Event where
		I: IntoIterator<Item = (NaiveDateTime,NaiveDateTime)>
	{
		fn recurring(&mut self,period: Period<I>) -> &mut Self{
			let mut iter = period.0.into_iter();

			if let Some((date_begin,date_end)) = iter.next(){
				const PREFIX: &'static str = "VALUE=PERIOD:";
				let mut value = String::with_capacity(PREFIX.len() + iter.size_hint().0*(6+1+6 + 1));

				let _ = write!(value,"{}{}/{}",PREFIX,date_begin.format("%Y%m%dT%H%M%S"),date_end.format("%Y%m%dT%H%M%S"));
				for (date_begin,date_end) in iter{
					let _ = write!(value,",{}/{}",date_begin.format("%Y%m%dT%H%M%S"),date_end.format("%Y%m%dT%H%M%S"));
				}

				self.add_property("RDATE",value.as_ref());
			}

			self
		}
	}
}

/**
 * Mainly an extension trait for a `Component`. Used to implement an API for the "RRULE" property.
 * The `recur_rule` function constructs a builder type that one can use to specify the parameters for the "RRULE" property.
 * Example:
 * ```rust
 *   use chrono::offset::TimeZone;
 *   use chrono::Utc;
 *   use icalendar::{Component,Event};
 *   use sverige_dagar::icalendar_util::recur_rule_param::*;
 *   use sverige_dagar::icalendar_util::{ComponentRecurRule,RecurRuleParamBuilder};
 *
 *   let event = Event::new()
 *   	.summary("Something that happens once every two years in a row 5 times starting from 1985-03-19")
 *   	.start_date(Utc.ymd(1985,03,19))
 *   	.recur_rule(Frequency::Yearly)
 *   		.end(End::Count(5))
 *   		.interval(2)
 *   		.done()
 *   	.done()
 *   ;
 * ```
 */
pub trait ComponentRecurRule<'l,'s> where{
	type Builder: RecurRuleParamBuilder<'s>;

	fn recur_rule(&'l mut self,freq: recur_rule_param::Frequency) -> Self::Builder;
}
pub mod recur_rule_param{
	use chrono::*;
	use core::fmt;

	pub enum Frequency{
		Secondly,
		Minutely,
		Hourly,
		Daily,
		Weekly,
		Monthly,
		Yearly,
	}
	impl fmt::Display for Frequency{
		fn fmt(&self,f: &mut fmt::Formatter) -> fmt::Result{use Frequency::*; match self{
			Secondly => f.write_str("SECONDLY"),
			Minutely => f.write_str("MINUTELY"),
			Hourly   => f.write_str("HOURLY"),
			Daily    => f.write_str("DAILY"),
			Weekly   => f.write_str("WEEKLY"),
			Monthly  => f.write_str("MONTHLY"),
			Yearly   => f.write_str("YEARLY"),
		}}
	}

	pub enum End{
		Forever,
		Until(NaiveDateTime),
		Count(usize),
	}
}
pub trait RecurRuleParamBuilder<'s>{
	type Out;

	fn end(&'s mut self,end: recur_rule_param::End) -> &'s mut Self;
	fn interval(&'s mut self,n: usize) -> &'s mut Self;
	fn by_second<I: IntoIterator<Item = u8>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_minute<I: IntoIterator<Item = u8>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_hour<I: IntoIterator<Item = u8>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_day<I: IntoIterator<Item = (i8,Weekday)>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_month_day<I: IntoIterator<Item = i8>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_year_day<I: IntoIterator<Item = i16>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_week_no<I: IntoIterator<Item = i8>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_month<I: IntoIterator<Item = u8>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_set_pos<I: IntoIterator<Item = i16>>(&'s mut self,vals: I) -> &'s mut Self;
	fn by_weekday(&'s mut self,val: Weekday) -> &'s mut Self;
	fn done(&'s mut self) -> Self::Out;
}

pub struct RecurRuleParam<'l,T>(&'l mut T,String);
impl<'l,T> RecurRuleParam<'l,T>{
	pub fn add_property(&mut self,key: &str,value: &str) -> &mut Self{
		if let Ok(_) = write!(self.1,";{}={}",key,value){}
		self
	}

	pub fn to_string(&self) -> &str{
		self.1.as_ref()
	}
}
impl<'l,'s: 'l,T> RecurRuleParamBuilder<'s> for RecurRuleParam<'l,T> where
	T: Component
{
	type Out = &'l mut T;

	fn end(&'s mut self,end: recur_rule_param::End) -> &'s mut Self{
		use recur_rule_param::End::*;
		match end{
			Forever         => (),
			Until(datetime) => if let Ok(_) = write!(self.1,";UNTIL={}",datetime.format("%Y%m%dT%H%M%S")){},
			Count(count)    => if let Ok(_) = write!(self.1,";COUNT={}",count){},
		};
		self
	}

	fn interval(&'s mut self,n: usize) -> &'s mut Self{
		if let Ok(_) = write!(self.1,";INTERVAL={}",n){}
		self
	}

	fn by_second<I: IntoIterator<Item = u8>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}
	fn by_minute<I: IntoIterator<Item = u8>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}
	fn by_hour<I: IntoIterator<Item = u8>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}
	fn by_day<I: IntoIterator<Item = (i8,Weekday)>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}
	fn by_month_day<I: IntoIterator<Item = i8>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}
	fn by_year_day<I: IntoIterator<Item = i16>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}
	fn by_week_no<I: IntoIterator<Item = i8>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}
	fn by_month<I: IntoIterator<Item = u8>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}
	fn by_set_pos<I: IntoIterator<Item = i16>>(&'s mut self,vals: I) -> &'s mut Self{unimplemented!()}

	fn by_weekday(&'s mut self,val: Weekday) -> &'s mut Self{
		use Weekday::*;
		let abbr = match val{
			Mon => "MO",
			Tue => "TU",
			Wed => "WE",
			Thu => "TH",
			Fri => "FR",
			Sat => "SA",
			Sun => "SU",
		};
		if let Ok(_) = write!(self.1,";WKST={}",abbr){}
		self
	}

	fn done(&'s mut self) -> Self::Out{
		self.0.add_property("RRULE",self.1.as_ref());
		self.0
	}
}

impl<'l,'s: 'l> ComponentRecurRule<'l,'s> for Event{
	type Builder = RecurRuleParam<'l,Self>;

	fn recur_rule(&'l mut self,freq: recur_rule_param::Frequency) -> Self::Builder{
		let mut str = String::with_capacity(50);
		if let Ok(_) = write!(str,"FREQ={}",freq){}
		RecurRuleParam(self,str)
	}
}

use chrono::*;
use chrono::offset::{FixedOffset,TimeZone};
use icalendar::*;

use crate::chrono_util::*;
use crate::dates::*;

pub fn calendar(year: Year) -> Calendar{
	let mut cal = Calendar::new();
	let tz_offset = FixedOffset::east(1 * 60*60); //TODO: Actually depends on daylight saving time (DST) ("sommartid/vintertid") for each date, but it should not matter because there are no events which depends on time. Also, I mix UTC and this timezone everywhere

	/////////////////////////////////////////////////////////////////
	// Easter related days

	if let Some(easter) = påskdagen(year){
		(try{cal.push(Event::new()
			.summary("Skärtorsdagen")
			.all_day(Date::<FixedOffset>::from_utc(date_of_last_weekday(Weekday::Thu,easter)?,tz_offset))
			.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY") //TODO: HOLIDAY fram till och med år 1772
			.description("\"Thursday of mysteries\"")
			.done()
		)}): Option<_>;

		//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
		(try{cal.push(Event::new()
			.summary("Långfredagen")
			.all_day(Date::<FixedOffset>::from_utc(date_of_last_weekday(Weekday::Fri,easter)?,tz_offset))
			.add_multi_property("CATEGORIES","HOLIDAY")
			.done()
		)}): Option<_>;

		(try{cal.push(Event::new()
			.summary("Påskafton")
			.all_day(Date::<FixedOffset>::from_utc(easter.pred_opt()?,tz_offset))
			.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY")
			.description("Jesu uppståndelse")
			.done()
		)}): Option<_>;

		//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
		(try{cal.push(Event::new()
			.summary("Påskdagen")
			.all_day(Date::<FixedOffset>::from_utc(easter,tz_offset))
			.add_multi_property("CATEGORIES","HOLIDAY")
			.add_multi_property("CATEGORIES","FLAGDAY")
			.description("Jesu uppståndelse")
			.done()
		)}): Option<_>;

		//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
		(try{cal.push(Event::new()
			.summary("Annandag påsk")
			.all_day(Date::<FixedOffset>::from_utc(easter.succ_opt()?,tz_offset))
			.add_multi_property("CATEGORIES","HOLIDAY")
			.done()
		)}): Option<_>;

		//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
		(try{cal.push(Event::new()
			.summary("Kristi himmelsfärdsdag")
			.all_day(Date::<FixedOffset>::from_utc(date_of_next_weekday(Weekday::Thu,easter.checked_add_signed(Duration::weeks(5))?)?,tz_offset))
			.add_multi_property("CATEGORIES","HOLIDAY")
			.done()
		)}): Option<_>;

		(try{cal.push(Event::new()
			.summary("Pingstafton")
			.all_day(Date::<FixedOffset>::from_utc(date_of_next_weekday(Weekday::Sun,easter.checked_add_signed(Duration::weeks(6))?)?.pred_opt()?,tz_offset))
			.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY")
			.done()
		)}): Option<_>;

		//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
		(try{cal.push(Event::new()
			.summary("Pingstdagen")
			.all_day(Date::<FixedOffset>::from_utc(date_of_next_weekday(Weekday::Sun,easter.checked_add_signed(Duration::weeks(6))?)?,tz_offset))
			.add_multi_property("CATEGORIES","HOLIDAY")
			.add_multi_property("CATEGORIES","FLAGDAY")
			.done()
		)}): Option<_>;
	}

	/////////////////////////////////////////////////////////////////
	// Officially recognized days

	//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
	cal.push(Event::new()
		.summary("Nyårsdagen")
		.all_day(Utc.ymd(year,01,01))
		.add_multi_property("CATEGORIES","HOLIDAY")
		.add_multi_property("CATEGORIES","FLAGDAY")
		.done()
	);

	cal.push(Event::new()
		.summary("Trettondagsafton")
		.all_day(Utc.ymd(year,01,05))
		.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY")
		.done()
	);

	//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
	cal.push(Event::new()
		.summary("Trettondedag jul")
		.all_day(Utc.ymd(year,01,06))
		.add_multi_property("CATEGORIES","HOLIDAY")
		.description("\"Epifania\"/\"Theofania\", en högtid kopplat till kristendomen.")
		.done()
	);

	cal.push(Event::new()
		.summary("Tjugondedag jul")
		.all_day(Utc.ymd(year,01,13))
		.description("Slutet på julhögtiden. \"Kasta ut granen och plocka undan juldekorationerna\"-dagen.")
		.done()
	);

	if year >= 1992{cal.push(Event::new()
		.summary("Samernas nationaldag")
		.all_day(Utc.ymd(year,02,06))
		.description("Datumet valdes till minne av det första samiska landsmötet.")
		.done()
	);}

	if year >= 1956{cal.push(Event::new()
		.summary("Alla hjärtans dag")
		.all_day(Utc.ymd(year,02,14))
		.done()
	);}

	if year >= 1684{cal.push(Event::new()
		.summary("Våffeldagen")
		.all_day(Utc.ymd(year,03,25))
		.description("Tidigare \"Jungfru Marie bebådelsedag\"/\"Vårfrudagen\" som har blivit till \"Våffeldagen\", en dag man äter våfflor.")
		.done()
	);}

	cal.push(Event::new()
		.summary("Första april")
		.all_day(Utc.ymd(year,04,01))
		.done()
	);

	cal.push(Event::new()
		.summary("Valborgsmässoafton")
		.all_day(Utc.ymd(year,04,30))
		.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY")
		.description("\"Saint Walpurgis night\"/\"Sankt Walpurgisnacht\"/\"Valborg\", en högtid vars ursprung är från Tyskland, men som nu har koppling med heliga Valborg.")
		.done()
	);

	cal.push(Event::new()
		.summary("Första maj / Arbetarrörelsens dag")
		.all_day(Utc.ymd(year,05,01))
		.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY")
		.add_multi_property("CATEGORIES","FLAGDAY")
		.done()
	);

	if year >= 2008{cal.push(Event::new()
		.summary("Veterandagen")
		.all_day(Utc.ymd(year,05,29))
		.description("Till minne av krigsveteranger. Datumet står för grundandet av United Nations Truce Supervision Organization (UNTSO) som iakttog vapenvilan efter FN:s första fredsbevarande uppdrag vid 1948 års arabisk-israeliska krig.")
		.add_multi_property("CATEGORIES","FLAGDAY")
		.done()
	);}

	//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
	if year >= 1983{cal.push(Event::new()
		.summary("Sveriges nationaldag")
		.all_day(Utc.ymd(year,06,06))
		.add_multi_property("CATEGORIES","HOLIDAY")
		.add_multi_property("CATEGORIES","FLAGDAY")
		.description("Tidigare \"Svenska flaggans dag\". Det är kopplat till att Gustav Vasa valdes till kung 1523 och bröt Kalmarunionen, men även till \"1809 års regeringsform\" som skrevs på 1809.")
		.done()
	);}

	//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
	if let Some(midsommardagen) = midsommardagen(year){
		(try{cal.push(Event::new()
			.summary("Midsommarafton")
			.all_day(Date::<FixedOffset>::from_utc(midsommardagen.pred_opt()?,tz_offset))
			.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY")
			.location("Sverige")
			.description("En högtid kopplat till men som inte nödvändigtvis faller på sommarsolståndet. Fredagen efter eller på 19:e juni.")
			.done()
		)}): Option<_>;

		(try{cal.push(Event::new()
			.summary("Midsommardagen")
			.all_day(Date::<FixedOffset>::from_utc(midsommardagen,tz_offset))
			.add_multi_property("CATEGORIES","HOLIDAY")
			.add_multi_property("CATEGORIES","FLAGDAY")
			.location("Sverige")
			.description("En högtid kopplat till men som inte nödvändigtvis faller på sommarsolståndet. Lördagen efter eller på 20:e juni.")
			.done()
		)}): Option<_>;
	}

	if year >= 1947{cal.push(Event::new()
		.summary("FN-dagen")
		.all_day(Utc.ymd(year,10,24))
		.description("Datumet står för när FN-stadgan trädde i kraft 1945.")
		.add_multi_property("CATEGORIES","FLAGDAY")
		.done()
	);}

	cal.push(Event::new()
		.summary("Halloween")
		.all_day(Utc.ymd(year,10,31))
		.description("\"All hallows evening\", en högtid som sägs komma från vikningar till engelsktalande öar och tillbaka.")
		.done()
	);

	cal.push(Event::new()
		.summary("Allhelgonadagen")
		.all_day(Utc.ymd(year,11,01))
		.description("Den gamla \"Alla helgons dag\" som har samma datum varje år.")
		.done()
	);

	//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
	(try{cal.push(Event::new()
		.summary("Alla helgons dag")
		.all_day(Date::<FixedOffset>::from_utc(allahelgonsdag(year)?,tz_offset))
		.add_multi_property("CATEGORIES","HOLIDAY")
		.location("Sverige")
		.done()
	)}): Option<_>;

	cal.push(Event::new()
		.summary("Gustav Adolfsdagen")
		.all_day(Utc.ymd(year,11,06))
		.description("Datumet står för när Kung Gustav II Adolf dog 1632.")
		.add_multi_property("CATEGORIES","FLAGDAY")
		.done()
	);

	cal.push(Event::new()
		.summary("Mårtensafton / Mårten Gås")
		.all_day(Utc.ymd(year,11,10))
		.done()
	);

	if year >= 1896{cal.push(Event::new()
		.summary("Nobeldagen")
		.all_day(Utc.ymd(year,12,10))
		.description("Datumet står för när Alfred Nobel dog 1896. Det är också under detta datum som nobelprisen delas ut.")
		.add_multi_property("CATEGORIES","FLAGDAY")
		.done()
	);}

	if year >= 1900{cal.push(Event::new()
		.summary("Lucia")
		.all_day(Utc.ymd(year,12,13))
		.done()
	);}

	if year >= 0{
		if let Some(fjärde_advent) = date_of_last_weekday_or_today(Weekday::Sun,NaiveDate::from_ymd(year,12,24)){
			(try{cal.push(Event::new()
				.summary("Fjärde advent")
				.all_day(Date::<FixedOffset>::from_utc(fjärde_advent,tz_offset))
				.done()
			)}): Option<_>;

			(try{cal.push(Event::new()
				.summary("Tredje advent")
				.all_day(Date::<FixedOffset>::from_utc(fjärde_advent.checked_add_signed(Duration::weeks(-1))?,tz_offset))
				.done()
			)}): Option<_>;

			(try{cal.push(Event::new()
				.summary("Andra advent")
				.all_day(Date::<FixedOffset>::from_utc(fjärde_advent.checked_add_signed(Duration::weeks(-2))?,tz_offset))
				.done()
			)}): Option<_>;

			(try{cal.push(Event::new()
				.summary("Första advent")
				.all_day(Date::<FixedOffset>::from_utc(fjärde_advent.checked_add_signed(Duration::weeks(-3))?,tz_offset))
				.done()
			)}): Option<_>;
		}

		cal.push(Event::new()
			.summary("Julafton")
			.all_day(Utc.ymd(year,12,24))
			.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY")
			.done()
		);

		//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
		cal.push(Event::new()
			.summary("Juldagen")
			.all_day(Utc.ymd(year,12,25))
			.add_multi_property("CATEGORIES","HOLIDAY")
			.add_multi_property("CATEGORIES","FLAGDAY")
			.done()
		);

		//Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
		cal.push(Event::new()
			.summary("Annandag jul")
			.all_day(Utc.ymd(year,12,26))
			.add_multi_property("CATEGORIES","HOLIDAY")
			.done()
		);
	}

	cal.push(Event::new()
		.summary("Nyårsafton")
		.all_day(Utc.ymd(year,12,31))
		.add_multi_property("CATEGORIES","INOFFICIALHOLIDAY")
		.done()
	);

	/////////////////////////////////////////////////////////////////
	// Other days

	//Källor: https://www.internationalwomensday.com/About
	if year >= 1909{cal.push(Event::new()
		.summary("Internationella kvinnodagen")
		.all_day(Utc.ymd(year,03,08))
		.done()
	);}

	//Källor: https://www.piday.org/ , https://en.wikipedia.org/wiki/Pi_Day
	if year >= 1988{cal.push(Event::new()
		.summary("Pidagen (π)")
		.all_day(Utc.ymd(year,03,14))
		.done()
	);}

	//Källor: https://en.wikipedia.org/wiki/White_Day , http://iroha-japan.net/iroha/A01_event/06_wd.html
	if year >= 1978{cal.push(Event::new()
		.summary("Vita dagen")
		.location("Japan")
		.all_day(Utc.ymd(year,03,14))
		.done()
	);}

	(try{cal.push(Event::new()
		.summary("Sommartid (UTC+1 → UTC+2)")
		.location("Sverige")
		.all_day(Date::<FixedOffset>::from_utc(sommartid(year)?,tz_offset))
		.description("Sommartid (Daylight Saving Time, DST) upphör. Klockan flyttas en timme fram. Sverige byter tidszon från CET/UTC+1 (Central European Time) till EET/UTC+2 (Eastern European Time).")
		.done()
	)}): Option<_>;

	//Källor: https://en.wikipedia.org/wiki/Black_Day_(South_Korea) , https://ko.wikipedia.org/wiki/%EB%B8%94%EB%9E%99%EB%8D%B0%EC%9D%B4
	if year >= 1990{cal.push(Event::new()
		.summary("Svarta dagen")
		.location("Sydkorea")
		.all_day(Utc.ymd(year,04,14))
		.done()
	);}

	//Källor: http://svenskafriluftsdagen.se/om-dagen/
	if year >= 2014{cal.push(Event::new()
		.summary("Svenska friluftsdagen")
		.location("Sverige")
		.all_day(Utc.ymd(year,04,29))
		.done()
	);}

	//Källor: https://www.starwars.com/star-wars-day , https://en.wikipedia.org/wiki/Star_Wars_Day
	if year >= 2011{cal.push(Event::new()
		.summary("Star Wars-dagen")
		.all_day(Utc.ymd(year,05,04))
		.description("\"May the fourth be with you\"")
		.done()
	);}

	//Källor: https://sv.wikipedia.org/wiki/Mors_dag
	if year >= 1905{(try{cal.push(Event::new()
		.summary("Mors dag")
		.all_day(Date::<FixedOffset>::from_utc(date_of_last_weekday_of_month(Weekday::Sun,year,05)?,tz_offset))
		.done()
	)}): Option<_>;}

	cal.push(Event::new()
		.summary("Sommarsolståndet")
		.location("Jorden")
		.start_date(Utc.ymd(year,06,20))
		.end_date  (Utc.ymd(year,06,22))
		.done()
	);

	//Källor: https://worldemojiday.com/
	if year >= 2014{cal.push(Event::new()
		.summary("Emojidagen")
		.all_day(Utc.ymd(year,07,17))
		.description("Stiftats av hemsidan \"Emojipedia\".")
		.done()
	);}

	//Källor: https://www.nordiskamuseet.se/aretsdagar/surstrommingspremiaren
	if year >= 1940{(try{cal.push(Event::new()
		.summary("Surströmmingspremiären")
		.all_day(Date::<FixedOffset>::from_utc(date_of_first_weekday_of_month(Weekday::Thu,year,08)?.checked_add_signed(Duration::weeks(2))?,tz_offset))
		.done()
	)}): Option<_>;}

	//Källor: https://www.raa.se/evenemang-och-upplevelser/arkeologidagen/
	if year >= 2001{(try{cal.push(Event::new()
		.summary("Arkeologidagen")
		.all_day(Date::<FixedOffset>::from_utc(date_of_last_weekday_of_month(Weekday::Sun,year,08)?,tz_offset))
		.done()
	)}): Option<_>;}

	//Källor: https://geologinsdag.nu/om-oss/
	if year >= 2001{(try{cal.push(Event::new()
		.summary("Geologins dag")
		.all_day(Date::<FixedOffset>::from_utc(date_of_first_weekday_of_month(Weekday::Sat,year,09)?.checked_add_signed(Duration::weeks(1))?,tz_offset))
		.done()
	)}): Option<_>;}

	//Källor: https://sv.wikipedia.org/wiki/Internationella_barndagen#Sverige
	if year >= 1999{(try{cal.push(Event::new()
		.summary("Internationella barndagen")
		.location("Sverige")
		.all_day(Date::<FixedOffset>::from_utc(date_of_last_weekday_of_month(Weekday::Mon,year,10)?,tz_offset))
		.done()
	)}): Option<_>;}

	(try{cal.push(Event::new()
		.summary("Vintertid (UTC+2 → UTC+1)")
		.location("Sverige")
		.all_day(Date::<FixedOffset>::from_utc(vintertid(year)?,tz_offset))
		.description("Sommartid (Daylight Saving Time, DST) upphör. Klockan flyttas en timme tillbaka. Sverige byter tidszon från EET/UTC+2 (Eastern European Time) till CET/UTC+1 (Central European Time).")
		.done()
	)}): Option<_>;

	//Källor: https://worldvegetarianday.navs-online.org/about/about-wvd/
	if year >= 1977{cal.push(Event::new()
		.summary("Vegetariska världsdagen")
		.all_day(Utc.ymd(year,10,01))
		.description("\"World Vegetarian Day\".")
		.done()
	);}

	//Källor: https://www.worldanimalday.org.uk/about_us , https://web.archive.org/web/20121007012833/http://www.djurensratt.se/djurens-dag
	if year >= 1931{cal.push(Event::new()
		.summary("Djurens dag")
		.all_day(Utc.ymd(year,10,04))
		.description("\"World Animal Day\".")
		.done()
	);}

	//Källor: http://kanelbullensdag.se/sa-har-firar-vi-kanelbullens-dag/ , http://kanelbullensdag.se/
	if year >= 1999{cal.push(Event::new()
		.summary("Kanelbullens dag")
		.location("Sverige")
		.all_day(Utc.ymd(year,10,04))
		.done()
	);}

	//Källor: https://sv.wikipedia.org/wiki/Fars_dag
	if year >= 1910{(try{cal.push(Event::new()
		.summary("Fars dag")
		.all_day(Date::<FixedOffset>::from_utc(date_of_last_weekday_of_month(Weekday::Sun,year,11)?.checked_add_signed(Duration::weeks(1))?,tz_offset))
		.done()
	)}): Option<_>;}

	//Källor: https://sv.wikipedia.org/wiki/Black_Friday
	if year >= 2010{(try{cal.push(Event::new()
		.summary("Black Friday")
		.all_day(Date::<FixedOffset>::from_utc(thanksgiving(year)?.succ_opt()?,tz_offset))
		.done()
	)}): Option<_>;}

	//Källor: http://webarchive.loc.gov/all/20121224030153/http://www.worldveganmonth.net/
	if year >= 1994{cal.push(Event::new()
		.summary("Internationella vegandagen")
		.all_day(Utc.ymd(year,11,01))
		.description("\"World Vegan Month\".")
		.done()
	);}

	//Källor: http://internationalmensday.com/founders-statement/
	if year >= 1999{cal.push(Event::new()
		.summary("Internationella mansdagen")
		.all_day(Utc.ymd(year,11,19))
		.done()
	);}

	//Källor: https://unicef.se/barnkonventionen/barnkonventionens-dag , https://sv.wikipedia.org/wiki/Barnens_dag
	if year >= 1989{cal.push(Event::new()
		.summary("Barnens dag")
		.all_day(Utc.ymd(year,11,20))
		.description("Födelsedagen av FN:s konvention om barnets rättighter")
		.done()
	);}

	cal.push(Event::new()
		.summary("Vintersolståndet")
		.location("Jorden")
		.start_date(Utc.ymd(year,12,20))
		.end_date  (Utc.ymd(year,12,23))
		.done()
	);

	cal
}

//Internationella filosofidagen Tredje tordagen i november 2002



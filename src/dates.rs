use chrono::*;

use crate::chrono_util::*;

/**
 * Källor: https://sv.wikipedia.org/wiki/P%C3%A5skdagen#Ber%C3%A4kning_av_p%C3%A5skdagens_datum (2019-06-21 14:42)
 * Citerat:
 *   Den tyske matematikern Carl Friedrich Gauss kom fram till att man med några uträkningar kunde beräkna påskdagens datum för ett visst år. För att beräkna påskdagen i Sverige till och med år 1752 ska julianska värden på M och N användas och gregorianska från och med år 1753. Vidare måste för 1700-tal och 1800-tal hänsyn tas till de avvikelser som beskrivits ovan.
 *   1: Dela årtalet med 19, 4 och 7 och kalla resterna a, b respektive c.
 *   2: Dividera 19 × a + M med 30. Kalla resten d. (För juliansk kalender är M = 15 för alla år, och för gregoriansk kalender är M = 23 åren 1700-1899, = 24 åren 1900-2199).
 *   3: Dividera 2b + 4c + 6d + N med 7. Kalla resten e. (För juliansk kalender är N = 6 för alla år, och för gregoriansk kalender är N = 3 åren 1700-1799, = 4 åren 1800-1899, = 5 åren 1900-2099).
 *   Då infaller påskdagen den (22 + d + e) mars eller om d + e > 9, den (d + e - 9) april. OBS! Får man att påskdagen infaller den 26 april skall man alltid i stället ta den 19 april (till exempel 1981, 2076).
 *   Skulle uträkningen ge den 25 april inträffar påskdagen i stället den 18 april om d=28, e=6 och samtidigt 11 × M + 11 dividerat med 30 ger en rest < 19 (till exempel 1954, 2049).
 */
pub fn gauss_easter(year: Year,m: u32,n: u32) -> NaiveDate{
	let a: u32 = (year % 19) as u32;
	let b: u32 = (year % 4)  as u32;
	let c: u32 = (year % 7)  as u32;
	let d: u32 = (19*a + m) % 30;
	let e: u32 = (2*b + 4*c + 6*d + n) % 7;

	if d+e > 9{
		NaiveDate::from_ymd(year,04,match d+e-9{
			25 if d==28 && e==6 && (11*m + 11) % 30 < 19 => 18,
			26 => 19,
			f  => f
		})
	}else{
		NaiveDate::from_ymd(year,03,22+d+e)
	}
}

/**
 * Källor: https://sv.wikipedia.org/wiki/P%C3%A5skdagen#Ber%C3%A4kning_av_p%C3%A5skdagens_datum (2019-06-21 14:42)
 * Citerat:
 *   I Sverige gjorde man ett försök till kalenderreform i början av 1700-talet, vilket innebar att den svenska kalendern under perioden 1 mars 1700 till 30 februari 1712 gick en dag före den julianska kalendern, för att därefter återgå till den julianska kalendern genom att låta februari 1712 ha 30 dagar. Detta innebar att påskdagen vissa år kom att infalla vid avvikande tidpunkt i Sverige, nämligen 2 april 1705, 18 april 1709 och 26 mars 1711. Det slutliga bytet från juliansk kalender (gamla stilen) till gregoriansk kalender (nya stilen) skedde 1753 genom att låta februari ha endast 17 dagar. Kalenderbytet innebär att man måste använda olika sätt att beräkna påskdagen före och efter 1753.[7]
 *   Beräkning av tidpunkt för påskdagen i Sverige kompliceras ytterligare genom att man under perioden 1740 till 1844 ansåg att påskdagen borde beräknas utgående från den verkliga, astronomiskt bestämda, vårdagjämningen och fullmånen. Trots att den verkliga vårdagjämningen ligger nära den 21 mars i den gregorianska kalendern, ledde denna beräkningsmetod för vissa år till ett annat resultat än de kyrkliga beräkningarna, nämligen 1802 (25 april), 1805 (21 april) och 1818 (29 mars). Under perioden 1740 till 1753, då man fortfarande använde den gamla stilen, uppkom många avvikelser från påskdagen beräknad från den ecklesiastiska vårdagjämningen och fullmånen, och bäst är att här använda en tabell över när påsken inföll. Man kan bland annat notera att påsken kom att firas före den 22 mars tre gånger, nämligen 14 mars 1742, 18 mars 1744 och 18 mars 1750. -Måltid.- Påskdagen åt man till middag smör, lutfisk och gröt.[8] Dagen efter påskdagen kallades förr för skittelördag,då sopades gården och möbler tvättades. Då koktes påskägg, gula, röda, blåa och svarta.[9] Se även Blåmåndagen, askonsdagen och skärtorsdagen. 
 * Notering: Alltid på en söndag.
 * Övriga relaterade datum:
 *   Kristi himmelsfärdsdag: 40 dagar efter påsk
 *   Pingstdagen: 10 dagar efter Kristi himmelsfärdsdag
 */
pub fn påskdagen(year: Year) -> Option<NaiveDate>{match year{
	year if year < 1740 => Some(gauss_easter(year,15,6)), //Julian calendar parameters
	1740                => Some(NaiveDate::from_ymd(1740,04,06)),
	1741                => Some(NaiveDate::from_ymd(1741,03,22)),
	1742                => Some(NaiveDate::from_ymd(1742,03,14)),
	1743                => Some(NaiveDate::from_ymd(1743,04,03)),
	1744                => Some(NaiveDate::from_ymd(1744,03,18)),
	1745                => Some(NaiveDate::from_ymd(1745,04,07)),
	1746                => Some(NaiveDate::from_ymd(1746,03,30)),
	1747                => Some(NaiveDate::from_ymd(1747,03,22)),
	1748                => Some(NaiveDate::from_ymd(1748,04,03)),
	1749                => Some(NaiveDate::from_ymd(1749,03,26)),
	1750                => Some(NaiveDate::from_ymd(1750,03,18)),
	1751                => Some(NaiveDate::from_ymd(1751,03,31)),
	1752                => Some(NaiveDate::from_ymd(1752,03,22)),
	1753..=1799         => Some(gauss_easter(year,23,3)), //Gregorian calendar parameters
	1802                => Some(NaiveDate::from_ymd(1802,04,25)),
	1805                => Some(NaiveDate::from_ymd(1805,04,21)),
	1818                => Some(NaiveDate::from_ymd(1818,03,29)),
	1800..=1899         => Some(gauss_easter(year,23,4)), //Gregorian calendar parameters
	1900..=2099         => Some(gauss_easter(year,24,5)), //Gregorian calendar parameters
	_                   => None
}}

/**
 * Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
 */
pub fn midsommardagen(year: Year) -> Option<NaiveDate>{
	date_of_next_weekday_or_today(Weekday::Sat,NaiveDate::from_ymd(year,06,20))
}

/**
 * Källor: https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1989253-om-allmanna-helgdagar_sfs-1989-253
 */
pub fn allahelgonsdag(year: Year) -> Option<NaiveDate>{
	date_of_next_weekday_or_today(Weekday::Sat,NaiveDate::from_ymd(year,10,31))
}

/**
 * Källor: https://sv.wikipedia.org/wiki/Black_Friday
 */
pub fn thanksgiving(year: Year) -> Option<NaiveDate>{
	date_of_next_weekday_or_today(Weekday::Thu,NaiveDate::from_ymd(year,11,01))?.checked_add_signed(Duration::weeks(3))
}

/**
 * Källor: https://sv.wikipedia.org/wiki/Sommartid
 */
pub fn sommartid(year: Year) -> Option<NaiveDate>{match year{
	year if year < 1916 => None,
	1916                => Some(NaiveDate::from_ymd(year,05,15)),
	1917..=1979         => None,
	1980                => date_of_first_weekday_of_month(Weekday::Sun,year,04),
	year if year > 1980 => date_of_last_weekday_of_month(Weekday::Sun,year,03),
	_                   => None
}}

/**
 * Källor: https://sv.wikipedia.org/wiki/Sommartid
 */
pub fn vintertid(year: Year) -> Option<NaiveDate>{match year{
	year if year < 1916 => None,
	1916                => Some(NaiveDate::from_ymd(year,09,30)),
	1917..=1979         => None,
	1980..=1995         => date_of_last_weekday_of_month(Weekday::Sun,year,09),
	year if year > 1995 => date_of_last_weekday_of_month(Weekday::Sun,year,10),
	_                   => None
}}

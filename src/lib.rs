#![feature(non_ascii_idents)]
#![feature(try_blocks)]
#![feature(type_ascription)]

extern crate chrono;
extern crate icalendar;

#[cfg(test)] pub mod test;

pub mod chrono_util;
pub mod dates;
pub mod ical;

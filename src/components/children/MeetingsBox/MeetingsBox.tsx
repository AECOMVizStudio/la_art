const MeetingsBox: React.FC = () => {
  return (
    <div className="p-2 md:p-6 rounded-2xl border-2 border-gray-300 md:border-0">
      {/* Responsive two-column layout: stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-gray-300 divide-y-2 md:divide-y-0 md:divide-x-2 font-normal">
        <div className="pr-0 md:pr-4 pb-4 md:pb-0 space-y-4  text-black">
          {/* Left column */}
          <h2 className="text-xl font-bold">In-Person Public Meeting</h2>
          <p>
            Saturday, July 19, 2025<br />
            10:00 AM - 12:00 PM<br />
            Casa Italiana at St. Peter's Italian Church, 1051 N Broadway, Los Angeles, CA 90012
          </p>
          <p>
            Limited parking is available on site. Attendees are encouraged to take transit or utilize street parking.
          </p>
          <p>
            <span className="font-bold">Please note:</span> To ensure a safe and equitable meeting for all, each attendee is asked to respect the meeting format so that all attendees have an opportunity to speak with the project team. Each attendee is expected to maintain a conversational tone, and to treat all other attendees, including project team members, with respect. Posters, signs and bullhorns are not allowed in the meeting. Any attendee behaving in a manner inconsistent with the meeting format will be asked to leave the meeting.
          </p>
        </div>
        <div className="pt-4 md:pt-0 pl-0 md:pl-4 space-y-4 text-black">
          {/* Right column */}
          <h2 className="text-xl font-bold">Virtual Information Session</h2>
          <p>
            Wednesday, July 23, 2025<br />
            6:00 - 7:00 PM
          </p>
          <p>
            <a href="https://us06web.zoom.us/j/81465260300" className="underline flex-wrap">
              https://us06web.zoom.us/j/81465260300
            </a>
          </p>
          <p>
            Or join by telephone:<br />
            (669) 900-6833 US<br />
            (888) 475-4499 US Toll Free
          </p>
          <p>Webinar ID: 814 6526 0300</p>
          <p>
            Following the virtual information session, a recording will be available on this website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MeetingsBox
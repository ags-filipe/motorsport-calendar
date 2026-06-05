const SERIES = {
  INDYCAR: { label: 'IndyCar',       c: '#c87818' },
  WEC:     { label: 'WEC',           c: '#2080cc' },
  IMSA:    { label: 'IMSA',          c: '#2a9020' },
  GTWCE:   { label: 'GT WC Europe',  c: '#c02828' },
  GTWCA:   { label: 'GT WC America', c: '#c04e0a' },
  IGTC:    { label: 'IGTC',          c: '#7038c8' },
  ELMS:    { label: 'ELMS',          c: '#0a8888' },
};

const WATCH = {
  sky:    { label: 'Sky / NOW TV',    c: '#0062b3', icon: 'ti-device-tv',    url: 'https://www.sky.com/shop/tv/sports' },
  tnt:    { label: 'TNT / discovery+',c: '#d95f00', icon: 'ti-player-play',  url: 'https://www.tntsports.co.uk' },
  yt:     { label: 'Free · YouTube',  c: '#bb2200', icon: 'ti-brand-youtube', url: null },
  fiawec: { label: 'FIAWEC+',         c: '#1a4a8a', icon: 'ti-player-play',  url: 'https://plus.fiawec.com' },
};

const SERIES_WATCH = {
  INDYCAR: ['sky'],
  WEC:     ['tnt', 'fiawec'],
  IMSA:    ['yt'],
  GTWCE:   ['sky', 'yt'],
  GTWCA:   ['yt'],
  IGTC:    ['yt'],
  ELMS:    ['tnt', 'yt', 'fiawec'],
};

const SERIES_YT = {
  IMSA:  'https://www.youtube.com/@IMSA',
  GTWCE: 'https://www.youtube.com/@GTWorld',
  GTWCA: 'https://www.youtube.com/@GTWorld',
  IGTC:  'https://www.youtube.com/@GTWorld',
  ELMS:  'https://www.youtube.com/@EuropeanLeMansSeriesOfficial',
};

const MONTHS = [
  'January', 'February', 'March',     'April',   'May',      'June',
  'July',    'August',   'September', 'October', 'November', 'December',
];

const RACES = [
  {m:0, d:"Jan 21–25",    s:["IMSA"],          n:"Rolex 24 at Daytona",              v:"Daytona International Speedway, FL",   t:"24H",        },
  {m:1, d:"Feb 13–15",    s:["IGTC"],          n:"Bathurst 12 Hour",                 v:"Mount Panorama, AUS",                  t:"12H",        },
  {m:2, d:"Mar 1",        s:["INDYCAR"],        n:"Firestone GP of St. Petersburg",   v:"St. Petersburg, FL",                                   },
  {m:2, d:"Mar 7",        s:["INDYCAR"],        n:"Good Ranchers 250",                v:"Phoenix Raceway, AZ",                  t:"Oval",       },
  {m:2, d:"Mar 15",       s:["INDYCAR"],        n:"Grand Prix of Arlington",          v:"Streets of Arlington, TX",                             },
  {m:2, d:"Mar 18–21",    s:["IMSA"],           n:"12 Hours of Sebring",              v:"Sebring International Raceway, FL",    t:"12H",        },
  {m:2, d:"Mar 27–29",    s:["GTWCA"],          n:"Sonoma",                           v:"Sonoma Raceway, CA",                                   },
  {m:2, d:"Mar 29",       s:["INDYCAR"],        n:"Alabama Indy Grand Prix",          v:"Barber Motorsports Park, AL",                          },
  {m:3, d:"Apr 10–12",    s:["GTWCE"],          n:"Paul Ricard",                      v:"Le Castellet, FRA",                    t:"Sprint + 6H",},
  {m:3, d:"Apr 12",       s:["ELMS"],           n:"4 Hours of Barcelona",             v:"Circuit de Barcelona-Catalunya",       t:"4H",         },
  {m:3, d:"Apr 17–18",    s:["IMSA"],           n:"Grand Prix of Long Beach",         v:"Long Beach, CA",                                       },
  {m:3, d:"Apr 19",       s:["INDYCAR"],        n:"Acura Grand Prix of Long Beach",   v:"Long Beach, CA",                                       },
  {m:3, d:"Apr 19",       s:["WEC"],            n:"6 Hours of Imola",                 v:"Imola, ITA",                           t:"6H",         },
  {m:3, d:"Apr 24–26",    s:["GTWCA"],          n:"Circuit of the Americas",          v:"Austin, TX",                                           },
  {m:4, d:"May 1–3",      s:["IMSA"],           n:"Laguna Seca",                      v:"WeatherTech Raceway, CA",                              },
  {m:4, d:"May 2–3",      s:["GTWCE"],          n:"Brands Hatch",                     v:"Brands Hatch, GBR",                    t:"Sprint",     },
  {m:4, d:"May 3",        s:["ELMS"],           n:"4 Hours of Le Castellet",          v:"Circuit Paul Ricard, FRA",             t:"4H",         },
  {m:4, d:"May 7–9",      s:["WEC"],            n:"6 Hours of Spa-Francorchamps",     v:"Spa-Francorchamps, BEL",               t:"6H",         },
  {m:4, d:"May 8–10",     s:["GTWCA"],          n:"Sebring",                          v:"Sebring International Raceway, FL",                    },
  {m:4, d:"May 9",        s:["INDYCAR"],        n:"Sonsio Grand Prix",                v:"Indianapolis Road Course, IN",                         },
  {m:4, d:"May 14–17",    s:["IGTC"],           n:"Nürburgring 24 Hours",             v:"Nürburgring Nordschleife, GER",        t:"24H",        },
  {m:4, d:"May 24",       s:["INDYCAR"],        n:"Indianapolis 500",                 v:"Indianapolis Motor Speedway, IN",      t:"500mi",      },
  {m:4, d:"May 28–31",    s:["GTWCE"],          n:"Monza",                            v:"Autodromo Nazionale Monza, ITA",       t:"Sprint + 3H",},
  {m:4, d:"May 29–30",    s:["IMSA"],           n:"Detroit Grand Prix",               v:"Detroit Street Circuit, MI",                           },
  {m:4, d:"May 31",       s:["INDYCAR"],        n:"Chevrolet Detroit Grand Prix",     v:"Detroit Street Circuit, MI",                           },
  {m:5, d:"Jun 7",        s:["INDYCAR"],        n:"Bommarito Automotive Group 500",   v:"WWT Raceway, Madison IL",              t:"Oval"},
  {m:5, d:"Jun 10–14",    s:["WEC"],            n:"24 Hours of Le Mans",              v:"Circuit de la Sarthe, FRA",            t:"24H"},
  {m:5, d:"Jun 12–14",    s:["GTWCA"],          n:"Road Atlanta",                     v:"Road Atlanta, GA"},
  {m:5, d:"Jun 25–28",    s:["IGTC","GTWCE"],   n:"CrowdStrike 24 Hours of Spa",      v:"Spa-Francorchamps, BEL",               t:"24H"},
  {m:5, d:"Jun 25–28",    s:["IMSA"],           n:"Watkins Glen 6 Hours",             v:"Watkins Glen International, NY",       t:"6H"},
  {m:6, d:"Jul 5",        s:["INDYCAR"],        n:"Honda Indy 200 at Mid-Ohio",       v:"Mid-Ohio Sports Car Course, OH"},
  {m:6, d:"Jul 5",        s:["ELMS"],           n:"4 Hours of Imola",                 v:"Imola, ITA",                           t:"4H"},
  {m:6, d:"Jul 10–12",    s:["IMSA"],           n:"Canadian Tire Motorsport Park",    v:"Bowmanville, ON"},
  {m:6, d:"Jul 12",       s:["WEC"],            n:"6 Hours of São Paulo",             v:"Interlagos, BRA",                      t:"6H"},
  {m:6, d:"Jul 17–19",    s:["GTWCE"],          n:"Sprint Cup round 5",               v:"TBC",                                  t:"Sprint"},
  {m:6, d:"Jul 20",       s:["INDYCAR"],        n:"Music City Grand Prix",            v:"Nashville Superspeedway, TN",          t:"Oval"},
  {m:6, d:"Jul 21",       s:["INDYCAR"],        n:"XPEL Grand Prix at Road America",  v:"Road America, Elkhart Lake WI"},
  {m:6, d:"Jul 30–Aug 2", s:["IMSA"],           n:"Road America 6 Hours",             v:"Road America, Elkhart Lake WI",        t:"6H"},
  {m:6, d:"Jul 31–Aug 2", s:["GTWCE"],          n:"Sprint Cup round 6",               v:"TBC",                                  t:"Sprint"},
  {m:7, d:"Aug 9",        s:["INDYCAR"],        n:"Grand Prix of Portland",           v:"Portland International Raceway, OR"},
  {m:7, d:"Aug 16",       s:["INDYCAR"],        n:"Indy at Markham",                  v:"Streets of Markham, ON"},
  {m:7, d:"Aug 20–23",    s:["IMSA"],           n:"VIRginia International Raceway",   v:"Alton, VA"},
  {m:7, d:"Aug 23",       s:["INDYCAR"],        n:"Freedom 250 — Washington D.C.",    v:"Washington D.C."},
  {m:7, d:"Aug 28–30",    s:["GTWCA"],          n:"Road America",                     v:"Road America, Elkhart Lake WI"},
  {m:7, d:"Aug 28–30",    s:["GTWCE"],          n:"Nürburgring",                      v:"Nürburgring, GER",                     t:"Sprint + 3H"},
  {m:7, d:"Aug 29",       s:["INDYCAR"],        n:"Milwaukee Mile 250 — Race 1",      v:"Milwaukee Mile, WI",                   t:"Oval"},
  {m:7, d:"Aug 30",       s:["INDYCAR"],        n:"Milwaukee Mile 250 — Race 2",      v:"Milwaukee Mile, WI",                   t:"Oval"},
  {m:8, d:"Sep 6",        s:["INDYCAR"],        n:"Grand Prix of Monterey",           v:"WeatherTech Raceway Laguna Seca, CA"},
  {m:8, d:"Sep 6",        s:["WEC"],            n:"Lone Star Le Mans",                v:"Circuit of the Americas, Austin TX",   t:"6H"},
  {m:8, d:"Sep 11–13",    s:["IGTC"],           n:"Suzuka 1000km",                    v:"Suzuka International Circuit, JPN",    t:"~6H"},
  {m:8, d:"Sep 18–20",    s:["IMSA"],           n:"Battle on the Bricks",             v:"Indianapolis Motor Speedway, IN"},
  {m:8, d:"Sep 18–20",    s:["GTWCE"],          n:"Sprint Cup round 8",               v:"TBC",                                  t:"Sprint"},
  {m:8, d:"Sep 25–27",    s:["GTWCA"],          n:"Barber Motorsports Park",          v:"Birmingham, AL"},
  {m:8, d:"Sep TBC",      s:["ELMS"],           n:"4 Hours of Silverstone",           v:"Silverstone Circuit, GBR",             t:"4H"},
  {m:8, d:"Sep 27",       s:["WEC"],            n:"6 Hours of Fuji",                  v:"Fuji Speedway, JPN",                   t:"6H"},
  {m:9, d:"Oct 1–3",      s:["IMSA"],           n:"Petit Le Mans",                    v:"Road Atlanta, Braselton GA",           t:"10H"},
  {m:9, d:"Oct 2–4",      s:["GTWCE"],          n:"Sprint Cup round 9",               v:"TBC",                                  t:"Sprint"},
  {m:9, d:"Oct 8–10",     s:["IGTC","GTWCA"],   n:"Indianapolis 8 Hour",              v:"Indianapolis Motor Speedway, IN",      t:"8H"},
  {m:9, d:"Oct 10",       s:["ELMS"],           n:"4 Hours of Portimão",              v:"Algarve International Circuit, POR",   t:"4H"},
  {m:9, d:"Oct 16–18",    s:["GTWCE"],          n:"Portimão",                         v:"Algarve International Circuit, POR",   t:"3H EC"},
  {m:9, d:"Oct 24",       s:["WEC"],            n:"Qatar 1812 Km",                    v:"Lusail International Circuit, QAT",    t:"~8H"},
  {m:10,d:"Nov 7",        s:["WEC"],            n:"8 Hours of Bahrain",               v:"Bahrain International Circuit, BHR",   t:"8H"},
];

RACES.forEach(r => {
  r.w    = [...new Set(r.s.flatMap(s => SERIES_WATCH[s] ?? []))];
  r.ytUrl = r.s.map(s => SERIES_YT[s]).find(Boolean) ?? null;
});

let activeS = Object.fromEntries(Object.keys(SERIES).map(k => [k, true]));
let activeW = Object.fromEntries(Object.keys(WATCH).map(k => [k, false]));

function anyWActive() {
  return Object.values(activeW).some(Boolean);
}

function visible() {
  return RACES.filter(r => {
    const seriesMatch = r.s.some(s => activeS[s]);
    const watchMatch  = !anyWActive() || r.w.some(w => activeW[w]);
    return seriesMatch && watchMatch;
  });
}

function renderFilters() {
  document.getElementById('sf').innerHTML = Object.entries(SERIES).map(([k, v]) => `
    <button class="filter-btn" data-active="${activeS[k]}" style="--btn-color:${v.c}"
            onclick="toggleS('${k}')" aria-pressed="${activeS[k]}">
      <span class="filter-btn__dot"></span>${v.label}
    </button>`).join('');

  document.getElementById('wf').innerHTML = Object.entries(WATCH).map(([k, v]) => `
    <button class="filter-btn" data-active="${activeW[k]}" style="--btn-color:${v.c}"
            onclick="toggleW('${k}')" aria-pressed="${activeW[k]}">
      <i class="ti ${v.icon}" aria-hidden="true"></i>${v.label}
    </button>`).join('');
}

function renderCalendar() {
  const vis   = visible();
  const wNote = anyWActive() ? ' · filtered by broadcaster' : '';
  document.getElementById('stats').textContent = `${vis.length} events${wNote}`;

  const byMonth = {};
  vis.forEach(r => { (byMonth[r.m] ??= []).push(r); });

  if (!Object.keys(byMonth).length) {
    document.getElementById('calendar').innerHTML = '<p class="empty-state">No events match the selected filters.</p>';
    return;
  }

  document.getElementById('calendar').innerHTML = Object.entries(byMonth)
    .sort(([a], [b]) => +a - +b)
    .map(([m, races]) => `
      <div class="month-block">
        <div class="month-header">
          <span class="month-name">${MONTHS[+m]}</span>
          <div class="month-divider"></div>
          <span class="month-count">${races.length}</span>
        </div>
        <div class="event-grid">
          ${races.map(renderCard).join('')}
        </div>
      </div>`).join('');
}

function renderCard(r) {
  const primaryColor = SERIES[r.s[0]].c;

  const seriesBadges = r.s.map(s =>
    `<span class="badge badge--series" style="--series-color:${SERIES[s].c}">${SERIES[s].label}</span>`
  ).join('');

  const formatBadge = r.t ? `<span class="badge badge--format">${r.t}</span>` : '';

  const watchBadges = r.w.map(wk => {
    const wb  = WATCH[wk];
    const url = wk === 'yt' ? (r.ytUrl ?? 'https://www.youtube.com') : wb.url;
    return `<a class="badge badge--watch" href="${url}" style="--watch-color:${wb.c}" target="_blank" rel="noopener">
      <i class="ti ${wb.icon}" aria-hidden="true"></i>${wb.label}
    </a>`;
  }).join('');

  return `
    <div class="event-card" style="--series-color:${primaryColor}">
      <div class="event-card__badges">${seriesBadges}${formatBadge}</div>
      <div class="event-card__name">${r.n}</div>
      <div class="event-card__meta">${r.d} · ${r.v}</div>
      ${watchBadges ? `<div class="event-card__watch">${watchBadges}</div>` : ''}
    </div>`;
}

function render() { renderFilters(); renderCalendar(); }
function toggleS(k)  { activeS[k] = !activeS[k]; render(); }
function toggleW(k)  { activeW[k] = !activeW[k]; render(); }
function toggleAllS() {
  const allOn = Object.values(activeS).every(Boolean);
  Object.keys(activeS).forEach(k => { activeS[k] = !allOn; });
  render();
}

render();

import Card from './components/Card.js';
import CategoryFilters from './components/CategoryFilters.js';
import Cta from './components/Cta.js';
import FooterComponent from './components/Footer.js';
import Grid from './components/Grid.js';
import Navigation from './components/Navigation.js';
import PlayerTable from './components/PlayerTable.js';
import Tabs from './components/Tabs.js';
const { createApp } = Vue;

createApp({
  components: {
    Navigation,
    Grid,
    Card,
    Cta,
    Tabs,
    CategoryFilters,
    PlayerTable,
    FooterComponent,
  },
  data() {
    return {
      teams: [
        { name: 'Arizona Cardinals', value: '1' },
        { name: 'Atlanta Falcons', value: '2' },
        { name: 'Baltimore Ravens', value: '3' },
        { name: 'Buffalo Bills', value: '4' },
        { name: 'Carolina Panthers', value: '5' },
        { name: 'Chicago Bears', value: '6' },
        { name: 'Cincinnati Bengals', value: '7' },
        { name: 'Cleveland Browns', value: '8' },
        { name: 'Dallas Cowboys', value: '9' },
        { name: 'Denver Broncos', value: '10' },
        { name: 'Detroit Lions', value: '11' },
        { name: 'Green Bay Packers', value: '12' },
        { name: 'Houston Texans', value: '13' },
        { name: 'Indianapolis Colts', value: '14' },
        { name: 'Jacksonville Jaguars', value: '15' },
        { name: 'Kansas City Chiefs', value: '16' },
        { name: 'Las Vegas Raiders', value: '23' },
        { name: 'Los Angeles Chargers', value: '26' },
        { name: 'Los Angeles Rams', value: '29' },
        { name: 'Miami Dolphins', value: '17' },
        { name: 'Minnesota Vikings', value: '18' },
        { name: 'New England Patriots', value: '19' },
        { name: 'New Orleans Saints', value: '20' },
        { name: 'New York Giants', value: '21' },
        { name: 'New York Jets', value: '22' },
        { name: 'Philadelphia Eagles', value: '24' },
        { name: 'Pittsburgh Steelers', value: '25' },
        { name: 'Rookie', value: '34' },
        { name: 'San Francisco 49ers', value: '28' },
        { name: 'Seattle Seahawks', value: '27' },
        { name: 'Tampa Bay Buccaneers', value: '30' },
        { name: 'Tennessee Titans', value: '31' },
        { name: 'Washington Commanders', value: '32' },
      ],
      selectedOption: '1',
      selectedCategory: 'Offense',
      sortPlayersOrder: {
        Offense: 'asc',
        Defense: 'asc',
      },
      selectedPosition: 'QB',
      rosters: {
        1: {
          team: 'Arizona Cardinals',
          positions: {
            Offense: {
              QB: [
                { name: 'Kyler Murray', number: 1 },
                { name: 'Colt McCoy', number: 12 },
              ],
              RB: [
                { name: 'James Conner', number: 6 },
                { name: 'Keontay Ingram', number: 30 },
              ],
              WR: [
                { name: 'Marquise Brown', number: 2 },
                { name: 'Rondale Moore', number: 4 },
                { name: 'DeAndre Hopkins', number: 10 },
              ],
              TE: [
                { name: 'Zach Ertz', number: 86 },
                { name: 'Trey McBride', number: 85 },
              ],
            },
            Defense: {
              DL: [
                { name: 'J.J. Watt', number: 99 },
                { name: 'Zach Allen', number: 94 },
              ],
              LB: [
                { name: 'Isaiah Simmons', number: 9 },
                { name: 'Zaven Collins', number: 25 },
              ],
              CB: [
                { name: 'Byron Murphy', number: 7 },
                { name: 'Marco Wilson', number: 20 },
              ],
              S: [
                { name: 'Budda Baker', number: 3 },
                { name: 'Jalen Thompson', number: 34 },
              ],
            },
          },
        },
        2: {
          team: 'Atlanta Falcons',
          positions: {
            Offense: {
              QB: [
                { name: 'Desmond Ridder', number: 4 },
                { name: 'Taylor Heinicke', number: 5 },
              ],
              RB: [
                { name: 'Tyler Allgeier', number: 25 },
                { name: 'Bijan Robinson', number: 7 },
              ],
              WR: [
                { name: 'Drake London', number: 5 },
                { name: 'Mack Hollins', number: 18 },
                { name: 'Scotty Miller', number: 12 },
              ],
              TE: [
                { name: 'Kyle Pitts', number: 8 },
                { name: 'Jonnu Smith', number: 81 },
              ],
            },
            Defense: {
              DL: [{ name: 'Grady Jarrett', number: 97 }],
              LB: [{ name: 'Deion Jones', number: 45 }],
              CB: [{ name: 'A.J. Terrell', number: 24 }],
              S: [{ name: 'Jaylinn Hawkins', number: 32 }],
            },
          },
        },
        3: {
          team: 'Baltimore Ravens',
          positions: {
            Offense: {
              QB: [
                { name: 'Lamar Jackson', number: 8 },
                { name: 'Tyler Huntley', number: 2 },
              ],
              RB: [
                { name: 'J.K. Dobbins', number: 27 },
                { name: 'Gus Edwards', number: 35 },
              ],
              WR: [
                { name: 'Odell Beckham Jr.', number: 3 },
                { name: 'Rashod Bateman', number: 7 },
                { name: 'Nelson Agholor', number: 15 },
              ],
              TE: [
                { name: 'Mark Andrews', number: 89 },
                { name: 'Isaiah Likely', number: 80 },
              ],
            },
            Defense: {
              DL: [{ name: 'Calais Campbell', number: 93 }],
              LB: [{ name: 'Patrick Queen', number: 6 }],
              CB: [{ name: 'Marlon Humphrey', number: 44 }],
              S: [{ name: 'Marcus Williams', number: 32 }],
            },
          },
        },
        4: {
          team: 'Buffalo Bills',
          positions: {
            Offense: {
              QB: [
                { name: 'Josh Allen', number: 17 },
                { name: 'Kyle Allen', number: 9 },
              ],
              RB: [
                { name: 'James Cook', number: 28 },
                { name: 'Damien Harris', number: 22 },
              ],
              WR: [
                { name: 'Stefon Diggs', number: 14 },
                { name: 'Gabe Davis', number: 13 },
                { name: 'Trent Sherfield', number: 16 },
              ],
              TE: [
                { name: 'Dawson Knox', number: 88 },
                { name: 'Dalton Kincaid', number: 86 },
              ],
            },
            Defense: {
              DL: [{ name: 'Ed Oliver', number: 91 }],
              LB: [{ name: 'Matt Milano', number: 58 }],
              CB: [{ name: "Tre'Davious White", number: 27 }],
              S: [{ name: 'Jordan Poyer', number: 21 }],
            },
          },
        },
        5: {
          team: 'Carolina Panthers',
          positions: {
            Offense: {
              QB: [
                { name: 'Bryce Young', number: 9 },
                { name: 'Andy Dalton', number: 14 },
              ],
              RB: [
                { name: 'Miles Sanders', number: 6 },
                { name: 'Chuba Hubbard', number: 30 },
              ],
              WR: [
                { name: 'Adam Thielen', number: 19 },
                { name: 'DJ Chark', number: 17 },
                { name: 'Laviska Shenault Jr.', number: 15 },
              ],
              TE: [
                { name: 'Hayden Hurst', number: 81 },
                { name: 'Tommy Tremble', number: 82 },
              ],
            },
            Defense: {
              DL: [{ name: 'Derrick Brown', number: 95 }],
              LB: [{ name: 'Shaq Thompson', number: 7 }],
              CB: [{ name: 'Jaycee Horn', number: 8 }],
              S: [{ name: 'Jeremy Chinn', number: 21 }],
            },
          },
        },
        6: {
          team: 'Chicago Bears',
          positions: {
            Offense: {
              QB: [
                { name: 'Justin Fields', number: 1 },
                { name: 'P.J. Walker', number: 15 },
              ],
              RB: [
                { name: 'Khalil Herbert', number: 24 },
                { name: "D'Onta Foreman", number: 21 },
              ],
              WR: [
                { name: 'Darnell Mooney', number: 11 },
                { name: 'Chase Claypool', number: 10 },
                { name: 'Velus Jones Jr.', number: 12 },
              ],
              TE: [
                { name: 'Cole Kmet', number: 85 },
                { name: 'Robert Tonyan', number: 18 },
              ],
            },
            Defense: {
              DL: [{ name: 'Justin Jones', number: 93 }],
              LB: [
                { name: 'Tremaine Edmunds', number: 49 },
                { name: 'T.J. Edwards', number: 57 },
              ],
              CB: [{ name: 'Jaylon Johnson', number: 33 }],
              S: [{ name: 'Eddie Jackson', number: 4 }],
            },
          },
        },
        7: {
          team: 'Cincinnati Bengals',
          positions: {
            Offense: {
              QB: [{ name: 'Joe Burrow', number: 9 }],
              RB: [
                { name: 'Joe Mixon', number: 28 },
                { name: 'Trayveon Williams', number: 32 },
              ],
              WR: [
                { name: "Ja'Marr Chase", number: 1 },
                { name: 'Tee Higgins', number: 5 },
                { name: 'Tyler Boyd', number: 83 },
              ],
              TE: [{ name: 'Irv Smith Jr.', number: 81 }],
            },
            Defense: {
              DL: [{ name: 'D.J. Reader', number: 98 }],
              LB: [{ name: 'Logan Wilson', number: 55 }],
              CB: [{ name: 'Chidobe Awuzie', number: 22 }],
              S: [{ name: 'Jessie Bates', number: 30 }],
            },
          },
        },
        8: {
          team: 'Cleveland Browns',
          positions: {
            Offense: {
              QB: [{ name: 'Deshaun Watson', number: 4 }],
              RB: [
                { name: 'Nick Chubb', number: 24 },
                { name: 'Jerome Ford', number: 34 },
              ],
              WR: [
                { name: 'Amari Cooper', number: 2 },
                { name: 'Donovan Peoples-Jones', number: 11 },
                { name: 'Elijah Moore', number: 8 },
              ],
              TE: [{ name: 'David Njoku', number: 85 }],
            },
            Defense: {
              DL: [{ name: 'Myles Garrett', number: 95 }],
              LB: [{ name: 'Jeremiah Owusu-Koramoah', number: 6 }],
              CB: [{ name: 'Denzel Ward', number: 21 }],
              S: [{ name: 'Grant Delpit', number: 22 }],
            },
          },
        },
        9: {
          team: 'Dallas Cowboys',
          positions: {
            Offense: {
              QB: [{ name: 'Dak Prescott', number: 4 }],
              RB: [
                { name: 'Tony Pollard', number: 20 },
                { name: 'Malik Davis', number: 34 },
              ],
              WR: [
                { name: 'CeeDee Lamb', number: 88 },
                { name: 'Michael Gallup', number: 13 },
                { name: 'Brandin Cooks', number: 3 },
              ],
              TE: [{ name: 'Jake Ferguson', number: 87 }],
            },
            Defense: {
              DL: [{ name: 'DeMarcus Lawrence', number: 90 }],
              LB: [{ name: 'Micah Parsons', number: 11 }],
              CB: [{ name: 'Trevon Diggs', number: 7 }],
              S: [{ name: 'Jayron Kearse', number: 27 }],
            },
          },
        },
        10: {
          team: 'Denver Broncos',
          positions: {
            Offense: {
              QB: [{ name: 'Russell Wilson', number: 3 }],
              RB: [
                { name: 'Javonte Williams', number: 33 },
                { name: 'Samaje Perine', number: 25 },
              ],
              WR: [
                { name: 'Jerry Jeudy', number: 10 },
                { name: 'Courtland Sutton', number: 14 },
                { name: 'KJ Hamler', number: 1 },
              ],
              TE: [{ name: 'Greg Dulcich', number: 80 }],
            },
            Defense: {
              DL: [{ name: 'D.J. Jones', number: 97 }],
              LB: [{ name: 'Josey Jewell', number: 47 }],
              CB: [{ name: 'Patrick Surtain II', number: 2 }],
              S: [{ name: 'Justin Simmons', number: 31 }],
            },
          },
        },
        11: {
          team: 'Detroit Lions',
          positions: {
            Offense: {
              QB: [{ name: 'Jared Goff', number: 16 }],
              RB: [
                { name: 'David Montgomery', number: 5 },
                { name: 'Jahmyr Gibbs', number: 26 },
              ],
              WR: [
                { name: 'Amon-Ra St. Brown', number: 14 },
                { name: 'Jameson Williams', number: 9 },
                { name: 'Kalif Raymond', number: 11 },
              ],
              TE: [{ name: 'Sam LaPorta', number: 87 }],
            },
            Defense: {
              DL: [{ name: 'Aidan Hutchinson', number: 97 }],
              LB: [{ name: 'Alex Anzalone', number: 34 }],
              CB: [{ name: 'Cameron Sutton', number: 1 }],
              S: [{ name: 'Tracy Walker', number: 21 }],
            },
          },
        },
        12: {
          team: 'Green Bay Packers',
          positions: {
            Offense: {
              QB: [{ name: 'Jordan Love', number: 10 }],
              RB: [
                { name: 'Aaron Jones', number: 33 },
                { name: 'AJ Dillon', number: 28 },
              ],
              WR: [
                { name: 'Christian Watson', number: 9 },
                { name: 'Romeo Doubs', number: 87 },
                { name: 'Jayden Reed', number: 11 },
              ],
              TE: [{ name: 'Luke Musgrave', number: 88 }],
            },
            Defense: {
              DL: [{ name: 'Kenny Clark', number: 97 }],
              LB: [{ name: "De'Vondre Campbell", number: 59 }],
              CB: [{ name: 'Jaire Alexander', number: 23 }],
              S: [{ name: 'Darnell Savage', number: 26 }],
            },
          },
        },
        13: {
          team: 'Houston Texans',
          positions: {
            Offense: {
              QB: [{ name: 'C.J. Stroud', number: 7 }],
              RB: [
                { name: 'Dameon Pierce', number: 31 },
                { name: 'Devin Singletary', number: 25 },
              ],
              WR: [
                { name: 'Nico Collins', number: 12 },
                { name: 'Robert Woods', number: 2 },
                { name: 'Tank Dell', number: 13 },
              ],
              TE: [{ name: 'Dalton Schultz', number: 86 }],
            },
            Defense: {
              DL: [{ name: 'Maliek Collins', number: 96 }],
              LB: [{ name: 'Christian Kirksey', number: 58 }],
              CB: [{ name: 'Derek Stingley Jr.', number: 24 }],
              S: [{ name: 'Jalen Pitre', number: 5 }],
            },
          },
        },
        14: {
          team: 'Indianapolis Colts',
          positions: {
            Offense: {
              QB: [{ name: 'Anthony Richardson', number: 5 }],
              RB: [
                { name: 'Jonathan Taylor', number: 28 },
                { name: 'Zack Moss', number: 21 },
              ],
              WR: [
                { name: 'Michael Pittman Jr.', number: 11 },
                { name: 'Alec Pierce', number: 14 },
                { name: 'Josh Downs', number: 1 },
              ],
              TE: [{ name: 'Mo Alie-Cox', number: 81 }],
            },
            Defense: {
              DL: [{ name: 'DeForest Buckner', number: 99 }],
              LB: [{ name: 'Shaquille Leonard', number: 53 }],
              CB: [{ name: 'Kenny Moore', number: 23 }],
              S: [{ name: 'Rodney Thomas II', number: 25 }],
            },
          },
        },
        15: {
          team: 'Jacksonville Jaguars',
          positions: {
            Offense: {
              QB: [{ name: 'Trevor Lawrence', number: 16 }],
              RB: [
                { name: 'Travis Etienne', number: 1 },
                { name: 'Tank Bigsby', number: 4 },
              ],
              WR: [
                { name: 'Calvin Ridley', number: 0 },
                { name: 'Zay Jones', number: 7 },
                { name: 'Christian Kirk', number: 13 },
              ],
              TE: [{ name: 'Evan Engram', number: 17 }],
            },
            Defense: {
              DL: [{ name: 'Roy Robertson-Harris', number: 95 }],
              LB: [{ name: 'Foyesade Oluokun', number: 23 }],
              CB: [{ name: 'Tyson Campbell', number: 32 }],
              S: [{ name: 'Andre Cisco', number: 5 }],
            },
          },
        },
        16: {
          team: 'Kansas City Chiefs',
          positions: {
            Offense: {
              QB: [{ name: 'Patrick Mahomes', number: 15 }],
              RB: [
                { name: 'Isiah Pacheco', number: 10 },
                { name: 'Jerick McKinnon', number: 1 },
              ],
              WR: [
                { name: 'Marquez Valdes-Scantling', number: 11 },
                { name: 'Skyy Moore', number: 24 },
                { name: 'Kadarius Toney', number: 19 },
              ],
              TE: [{ name: 'Travis Kelce', number: 87 }],
            },
            Defense: {
              DL: [{ name: 'Chris Jones', number: 95 }],
              LB: [{ name: 'Nick Bolton', number: 32 }],
              CB: [{ name: "L'Jarius Sneed", number: 38 }],
              S: [{ name: 'Justin Reid', number: 20 }],
            },
          },
        },
        17: {
          team: 'Miami Dolphins',
          positions: {
            Offense: {
              QB: [{ name: 'Tua Tagovailoa', number: 1 }],
              RB: [
                { name: 'Raheem Mostert', number: 31 },
                { name: 'Devon Achane', number: 28 },
              ],
              WR: [
                { name: 'Tyreek Hill', number: 10 },
                { name: 'Jaylen Waddle', number: 17 },
                { name: 'Braxton Berrios', number: 0 },
              ],
              TE: [{ name: 'Durham Smythe', number: 81 }],
            },
            Defense: {
              DL: [{ name: 'Christian Wilkins', number: 94 }],
              LB: [{ name: 'Jerome Baker', number: 55 }],
              CB: [{ name: 'Xavien Howard', number: 25 }],
              S: [{ name: 'Jevon Holland', number: 8 }],
            },
          },
        },
        18: {
          team: 'Minnesota Vikings',
          positions: {
            Offense: {
              QB: [{ name: 'Kirk Cousins', number: 8 }],
              RB: [
                { name: 'Alexander Mattison', number: 2 },
                { name: 'Ty Chandler', number: 32 },
              ],
              WR: [
                { name: 'Justin Jefferson', number: 18 },
                { name: 'K.J. Osborn', number: 17 },
                { name: 'Jordan Addison', number: 3 },
              ],
              TE: [{ name: 'T.J. Hockenson', number: 87 }],
            },
            Defense: {
              DL: [{ name: 'Harrison Phillips', number: 97 }],
              LB: [{ name: 'Eric Kendricks', number: 54 }],
              CB: [{ name: 'Byron Murphy', number: 7 }],
              S: [{ name: 'Harrison Smith', number: 22 }],
            },
          },
        },
        19: {
          team: 'New England Patriots',
          positions: {
            Offense: {
              QB: [{ name: 'Mac Jones', number: 10 }],
              RB: [
                { name: 'Rhamondre Stevenson', number: 38 },
                { name: 'Ezekiel Elliott', number: 15 },
              ],
              WR: [
                { name: 'DeVante Parker', number: 1 },
                { name: 'JuJu Smith-Schuster', number: 7 },
                { name: 'Kendrick Bourne', number: 84 },
              ],
              TE: [
                { name: 'Hunter Henry', number: 85 },
                { name: 'Mike Gesicki', number: 88 },
              ],
            },
            Defense: {
              DL: [{ name: 'Lawrence Guy', number: 93 }],
              LB: [{ name: "Ja'Whaun Bentley", number: 8 }],
              CB: [{ name: 'Jonathan Jones', number: 31 }],
              S: [{ name: 'Kyle Dugger', number: 23 }],
            },
          },
        },
        20: {
          team: 'New Orleans Saints',
          positions: {
            Offense: {
              QB: [{ name: 'Derek Carr', number: 4 }],
              RB: [
                { name: 'Alvin Kamara', number: 41 },
                { name: 'Jamaal Williams', number: 30 },
              ],
              WR: [
                { name: 'Chris Olave', number: 12 },
                { name: 'Michael Thomas', number: 13 },
                { name: 'Rashid Shaheed', number: 89 },
              ],
              TE: [{ name: 'Juwan Johnson', number: 83 }],
            },
            Defense: {
              DL: [{ name: 'Cameron Jordan', number: 94 }],
              LB: [{ name: 'Demario Davis', number: 56 }],
              CB: [{ name: 'Marshon Lattimore', number: 23 }],
              S: [{ name: 'Tyrann Mathieu', number: 32 }],
            },
          },
        },
        21: {
          team: 'New York Giants',
          positions: {
            Offense: {
              QB: [{ name: 'Daniel Jones', number: 8 }],
              RB: [
                { name: 'Saquon Barkley', number: 26 },
                { name: 'Matt Breida', number: 31 },
              ],
              WR: [
                { name: 'Darius Slayton', number: 86 },
                { name: 'Isaiah Hodgins', number: 18 },
                { name: "Wan'Dale Robinson", number: 17 },
              ],
              TE: [{ name: 'Darren Waller', number: 12 }],
            },
            Defense: {
              DL: [{ name: 'Dexter Lawrence', number: 97 }],
              LB: [{ name: 'Bobby Okereke', number: 58 }],
              CB: [{ name: "Adoree' Jackson", number: 22 }],
              S: [{ name: 'Xavier McKinney', number: 29 }],
            },
          },
        },
        22: {
          team: 'New York Jets',
          positions: {
            Offense: {
              QB: [{ name: 'Aaron Rodgers', number: 8 }],
              RB: [
                { name: 'Breece Hall', number: 20 },
                { name: 'Dalvin Cook', number: 33 },
              ],
              WR: [
                { name: 'Garrett Wilson', number: 17 },
                { name: 'Allen Lazard', number: 10 },
                { name: 'Mecole Hardman', number: 6 },
              ],
              TE: [{ name: 'Tyler Conklin', number: 83 }],
            },
            Defense: {
              DL: [{ name: 'Quinnen Williams', number: 95 }],
              LB: [{ name: 'C.J. Mosley', number: 57 }],
              CB: [{ name: 'Sauce Gardner', number: 1 }],
              S: [{ name: 'Jordan Whitehead', number: 3 }],
            },
          },
        },
        23: {
          team: 'Las Vegas Raiders',
          positions: {
            Offense: {
              QB: [{ name: 'Jimmy Garoppolo', number: 10 }],
              RB: [
                { name: 'Josh Jacobs', number: 28 },
                { name: 'Ameer Abdullah', number: 22 },
              ],
              WR: [
                { name: 'Davante Adams', number: 17 },
                { name: 'Hunter Renfrow', number: 13 },
                { name: 'Jakobi Meyers', number: 16 },
              ],
              TE: [{ name: 'Austin Hooper', number: 81 }],
            },
            Defense: {
              DL: [{ name: 'Maxx Crosby', number: 98 }],
              LB: [{ name: 'Divine Deablo', number: 5 }],
              CB: [{ name: 'Nate Hobbs', number: 39 }],
              S: [{ name: "Tre'von Moehrig", number: 25 }],
            },
          },
        },
        24: {
          team: 'Philadelphia Eagles',
          positions: {
            Offense: {
              QB: [{ name: 'Jalen Hurts', number: 1 }],
              RB: [
                { name: "D'Andre Swift", number: 0 },
                { name: 'Kenneth Gainwell', number: 14 },
              ],
              WR: [
                { name: 'A.J. Brown', number: 11 },
                { name: 'DeVonta Smith', number: 6 },
                { name: 'Quez Watkins', number: 16 },
              ],
              TE: [{ name: 'Dallas Goedert', number: 88 }],
            },
            Defense: {
              DL: [{ name: 'Fletcher Cox', number: 91 }],
              LB: [{ name: 'Haason Reddick', number: 7 }],
              CB: [{ name: 'Darius Slay', number: 2 }],
              S: [{ name: 'Reed Blankenship', number: 32 }],
            },
          },
        },
        25: {
          team: 'Pittsburgh Steelers',
          positions: {
            Offense: {
              QB: [{ name: 'Kenny Pickett', number: 8 }],
              RB: [
                { name: 'Najee Harris', number: 22 },
                { name: 'Jaylen Warren', number: 30 },
              ],
              WR: [
                { name: 'Diontae Johnson', number: 18 },
                { name: 'George Pickens', number: 14 },
                { name: 'Calvin Austin III', number: 19 },
              ],
              TE: [{ name: 'Pat Freiermuth', number: 88 }],
            },
            Defense: {
              DL: [{ name: 'Cameron Heyward', number: 97 }],
              LB: [{ name: 'T.J. Watt', number: 90 }],
              CB: [{ name: 'Levi Wallace', number: 29 }],
              S: [{ name: 'Minkah Fitzpatrick', number: 39 }],
            },
          },
        },
        26: {
          team: 'Los Angeles Chargers',
          positions: {
            Offense: {
              QB: [{ name: 'Justin Herbert', number: 10 }],
              RB: [
                { name: 'Austin Ekeler', number: 30 },
                { name: 'Joshua Kelley', number: 25 },
              ],
              WR: [
                { name: 'Keenan Allen', number: 13 },
                { name: 'Mike Williams', number: 81 },
                { name: 'Quentin Johnston', number: 1 },
              ],
              TE: [{ name: 'Gerald Everett', number: 7 }],
            },
            Defense: {
              DL: [{ name: 'Sebastian Joseph-Day', number: 69 }],
              LB: [{ name: 'Joey Bosa', number: 97 }],
              CB: [{ name: 'J.C. Jackson', number: 27 }],
              S: [{ name: 'Derwin James', number: 3 }],
            },
          },
        },
        27: {
          team: 'Seattle Seahawks',
          positions: {
            Offense: {
              QB: [{ name: 'Geno Smith', number: 7 }],
              RB: [
                { name: 'Kenneth Walker III', number: 9 },
                { name: 'Zach Charbonnet', number: 26 },
              ],
              WR: [
                { name: 'DK Metcalf', number: 14 },
                { name: 'Tyler Lockett', number: 16 },
                { name: 'Jaxon Smith-Njigba', number: 11 },
              ],
              TE: [{ name: 'Noah Fant', number: 87 }],
            },
            Defense: {
              DL: [{ name: 'Jarran Reed', number: 90 }],
              LB: [{ name: 'Bobby Wagner', number: 54 }],
              CB: [{ name: 'Tariq Woolen', number: 27 }],
              S: [{ name: 'Jamal Adams', number: 33 }],
            },
          },
        },
        28: {
          team: 'San Francisco 49ers',
          positions: {
            Offense: {
              QB: [{ name: 'Brock Purdy', number: 13 }],
              RB: [
                { name: 'Christian McCaffrey', number: 23 },
                { name: 'Elijah Mitchell', number: 25 },
              ],
              WR: [
                { name: 'Deebo Samuel', number: 19 },
                { name: 'Brandon Aiyuk', number: 11 },
                { name: 'Jauan Jennings', number: 15 },
              ],
              TE: [{ name: 'George Kittle', number: 85 }],
            },
            Defense: {
              DL: [{ name: 'Nick Bosa', number: 97 }],
              LB: [{ name: 'Fred Warner', number: 54 }],
              CB: [{ name: 'Charvarius Ward', number: 7 }],
              S: [{ name: 'Talanoa Hufanga', number: 29 }],
            },
          },
        },
        29: {
          team: 'Los Angeles Rams',
          positions: {
            Offense: {
              QB: [{ name: 'Matthew Stafford', number: 9 }],
              RB: [
                { name: 'Cam Akers', number: 3 },
                { name: 'Kyren Williams', number: 23 },
              ],
              WR: [
                { name: 'Cooper Kupp', number: 10 },
                { name: 'Van Jefferson', number: 12 },
                { name: 'Puka Nacua', number: 17 },
              ],
              TE: [{ name: 'Tyler Higbee', number: 89 }],
            },
            Defense: {
              DL: [{ name: 'Aaron Donald', number: 99 }],
              LB: [{ name: 'Ernest Jones', number: 50 }],
              CB: [{ name: 'Jalen Ramsey', number: 5 }],
              S: [{ name: 'Jordan Fuller', number: 4 }],
            },
          },
        },
        30: {
          team: 'Tampa Bay Buccaneers',
          positions: {
            Offense: {
              QB: [{ name: 'Baker Mayfield', number: 6 }],
              RB: [
                { name: 'Rachaad White', number: 29 },
                { name: 'Chase Edmonds', number: 2 },
              ],
              WR: [
                { name: 'Mike Evans', number: 13 },
                { name: 'Chris Godwin', number: 14 },
                { name: 'Russell Gage', number: 17 },
              ],
              TE: [{ name: 'Cade Otton', number: 88 }],
            },
            Defense: {
              DL: [{ name: 'Vita Vea', number: 50 }],
              LB: [{ name: 'Lavonte David', number: 54 }],
              CB: [{ name: 'Carlton Davis', number: 24 }],
              S: [{ name: 'Antoine Winfield Jr.', number: 31 }],
            },
          },
        },
        31: {
          team: 'Tennessee Titans',
          positions: {
            Offense: {
              QB: [{ name: 'Ryan Tannehill', number: 17 }],
              RB: [
                { name: 'Derrick Henry', number: 22 },
                { name: 'Tyjae Spears', number: 32 },
              ],
              WR: [
                { name: 'Treylon Burks', number: 16 },
                { name: 'Nick Westbrook-Ikhine', number: 15 },
                { name: 'Kyle Philips', number: 18 },
              ],
              TE: [{ name: 'Chigoziem Okonkwo', number: 85 }],
            },
            Defense: {
              DL: [{ name: 'Jeffery Simmons', number: 98 }],
              LB: [{ name: 'Harold Landry', number: 58 }],
              CB: [{ name: 'Kristian Fulton', number: 26 }],
              S: [{ name: 'Kevin Byard', number: 31 }],
            },
          },
        },
        32: {
          team: 'Washington Commanders',
          positions: {
            Offense: {
              QB: [{ name: 'Sam Howell', number: 14 }],
              RB: [
                { name: 'Brian Robinson Jr.', number: 8 },
                { name: 'Antonio Gibson', number: 24 },
              ],
              WR: [
                { name: 'Terry McLaurin', number: 17 },
                { name: 'Curtis Samuel', number: 10 },
                { name: 'Jahan Dotson', number: 1 },
              ],
              TE: [{ name: 'Logan Thomas', number: 82 }],
            },
            Defense: {
              DL: [
                { name: 'Jonathan Allen', number: 93 },
                { name: 'Daron Payne', number: 94 },
              ],
              LB: [{ name: 'Jamin Davis', number: 52 }],
              CB: [{ name: 'Kendall Fuller', number: 29 }],
              S: [{ name: 'Kamren Curl', number: 31 }],
            },
          },
        },
      },
    };
  },
  computed: {
    selectedTeamName() {
      return (
        this.teams.find((team) => team.value === this.selectedOption)?.name ||
        ''
      );
    },
    selectedTeamPositions() {
      return (
        this.rosters[this.selectedOption]?.positions[this.selectedCategory] ||
        {}
      );
    },
  },
  methods: {
    toggleSortOrder() {
      this.sortPlayersOrder[this.selectedCategory] =
        this.sortPlayersOrder[this.selectedCategory] === 'asc' ? 'desc' : 'asc';
    },
  },
  template: `
    <navigation></navigation>
    <grid :selectedHeader="selectedTeamName"></grid>
    <card class="mt2 mb3" :showImage="true" heading="Select Team" :selectedHeader="selectedTeamName">
      <div class="flex flex-row align-center justify-center">
        <label class="mr2" for="depthchartform-teamid">Choose a team:</label>
        <select id="depthchartform-teamid" v-model="selectedOption">
          <option v-for="team in teams" :key="team.value" :value="team.value">{{ team.name }}</option>
        </select>
      </div>
    </card>
    <category-filters :selectedCategory="selectedCategory" @update:selectedCategory="selectedCategory = $event"></category-filters>
    <tabs :selectedCategory="selectedCategory" :selectedPosition="selectedPosition" @update:selectedPosition="selectedPosition = $event"></tabs>
    <card class="mt3 mb3" :heading="selectedTeamName + ' ' + selectedCategory">
      <button class="bg-dark-blue white b br2 f6 pointer ph3 pv2" @click="toggleSortOrder">
        Sort {{ sortPlayersOrder[selectedCategory] === 'asc' ? 'Descending' : 'Ascending'}}
      </button>
      <h3>{{ selectedPosition }} Players:</h3>
      <player-table :players="selectedTeamPositions[selectedPosition]" :sortOrder="sortPlayersOrder[selectedCategory]"></player-table>
    </card>
  `,
}).mount('#app');

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
        { name: 'Arizona Cardinals', value: '1', imgTag: 'ARI' },
        { name: 'Atlanta Falcons', value: '2', imgTag: 'ATL' },
        { name: 'Baltimore Ravens', value: '3', imgTag: 'BAL' },
        { name: 'Buffalo Bills', value: '4', imgTag: 'BUF' },
        { name: 'Carolina Panthers', value: '5', imgTag: 'CAR' },
        { name: 'Chicago Bears', value: '6', imgTag: 'CHI' },
        { name: 'Cincinnati Bengals', value: '7', imgTag: 'CIN' },
        { name: 'Cleveland Browns', value: '8', imgTag: 'CLE' },
        { name: 'Dallas Cowboys', value: '9', imgTag: 'DAL' },
        { name: 'Denver Broncos', value: '10', imgTag: 'DEN' },
        { name: 'Detroit Lions', value: '11', imgTag: 'DET' },
        { name: 'Green Bay Packers', value: '12', imgTag: 'GB' },
        { name: 'Houston Texans', value: '13', imgTag: 'HOU' },
        { name: 'Indianapolis Colts', value: '14', imgTag: 'IND' },
        { name: 'Jacksonville Jaguars', value: '15', imgTag: 'JAC' },
        { name: 'Kansas City Chiefs', value: '16', imgTag: 'KC' },
        { name: 'Las Vegas Raiders', value: '23', imgTag: 'LVR' },
        { name: 'Los Angeles Chargers', value: '26', imgTag: 'LAC' },
        { name: 'Los Angeles Rams', value: '29', imgTag: 'LAR' },
        { name: 'Miami Dolphins', value: '17', imgTag: 'MIA' },
        { name: 'Minnesota Vikings', value: '18', imgTag: 'MIN' },
        { name: 'New England Patriots', value: '19', imgTag: 'NE' },
        { name: 'New Orleans Saints', value: '20', imgTag: 'NO' },
        { name: 'New York Giants', value: '21', imgTag: 'NYG' },
        { name: 'New York Jets', value: '22', imgTag: 'NYJ' },
        { name: 'Philadelphia Eagles', value: '24', imgTag: 'PHI' },
        { name: 'Pittsburgh Steelers', value: '25', imgTag: 'PIT' },
        { name: 'Rookie', value: '34', imgTag: null },
        { name: 'San Francisco 49ers', value: '28', imgTag: 'SF' },
        { name: 'Seattle Seahawks', value: '27', imgTag: 'SEA' },
        { name: 'Tampa Bay Buccaneers', value: '30', imgTag: 'TB' },
        { name: 'Tennessee Titans', value: '31', imgTag: 'TEN' },
        { name: 'Washington Commanders', value: '32', imgTag: 'WAS' },
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
                { name: 'Joshua Dobbs', number: 9 },
              ],
              RB: [
                { name: 'James Conner', number: 6 },
                { name: 'Emari Demercado', number: 31 },
                { name: 'Keaontay Ingram', number: 30 },
                { name: 'Corey Clement', number: 23 },
              ],
              LWR: [
                { name: 'Marquise Brown', number: 2 },
                { name: 'Michael Wilson', number: 14 },
              ],
              RWR: [
                { name: 'Rondale Moore', number: 4 },
                { name: 'Greg Dortch', number: 83 },
              ],
              SWR: [{ name: 'Zach Pascal', number: 0 }],
              TE: [
                { name: 'Zach Ertz', number: 86 },
                { name: 'Trey McBride', number: 85 },
                { name: 'Geoff Swaim', number: 87 },
              ],
            },
            Defense: {
              DL: [
                { name: 'Jonathan Ledbetter', number: 93 },
                { name: 'Leki Fotu', number: 95 },
              ],
              LB: [
                { name: 'Zaven Collins', number: 25 },
                { name: 'Dennis Gardeck', number: 45 },
                { name: 'Kyzir White', number: 7 },
              ],
              CB: [
                { name: 'Marco Wilson', number: 20 },
                { name: "Kei'Trel Clark", number: 13 },
                { name: 'Starling Thomas V', number: 28 },
              ],
              S: [
                { name: 'Budda Baker', number: 3 },
                { name: 'Jalen Thompson', number: 34 },
                { name: 'K’Von Wallace', number: 22 },
              ],
              K: [{ name: 'Matt Prater', number: 5 }],
              P: [{ name: 'Nolan Cooney', number: 9 }],
            },
          },
        },
        2: {
          team: 'Atlanta Falcons',
          positions: {
            Offense: {
              QB: [
                { name: 'Desmond Ridder', number: 9 },
                { name: 'Taylor Heinicke', number: 4 },
              ],
              RB: [
                { name: 'Bijan Robinson', number: 7 },
                { name: 'Tyler Allgeier', number: 25 },
                { name: 'Cordarrelle Patterson', number: 84 },
              ],
              LWR: [
                { name: 'Drake London', number: 5 },
                { name: 'KhaDarel Hodge', number: 12 },
              ],
              RWR: [
                { name: 'Mack Hollins', number: 18 },
                { name: 'Josh Ali', number: 83 },
              ],
              SWR: [
                { name: 'Scott Miller', number: 16 },
                { name: 'Penny Hart', number: 19 },
              ],
              TE: [
                { name: 'Kyle Pitts', number: 8 },
                { name: 'Jonnu Smith', number: 81 },
                { name: 'Parker Hesse', number: 46 },
              ],
            },
            Defense: {
              DL: [
                { name: 'Grady Jarrett', number: 97 },
                { name: 'David Onyemata', number: 90 },
                { name: 'Calais Campbell', number: 93 },
              ],
              LB: [
                { name: 'Troy Andersen', number: 44 },
                { name: 'Kaden Elliss', number: 55 },
                { name: 'Lorenzo Carter', number: 9 },
              ],
              CB: [
                { name: 'A.J. Terrell', number: 24 },
                { name: 'Jeff Okudah', number: 1 },
                { name: 'Dee Alford', number: 37 },
              ],
              S: [
                { name: 'Jessie Bates III', number: 3 },
                { name: 'Richie Grant', number: 27 },
                { name: 'Jaylinn Hawkins', number: 32 },
              ],
              K: [{ name: 'Younghoe Koo', number: 7 }],
              P: [{ name: 'Bradley Pinion', number: 13 }],
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
                { name: 'Josh Johnson', number: 17 },
              ],
              RB: [
                { name: 'Gus Edwards', number: 35 },
                { name: 'Justice Hill', number: 43 },
                { name: 'Melvin Gordon', number: 34 },
                { name: 'Keaton Mitchell', number: 21 },
              ],
              LWR: [
                { name: 'Odell Beckham Jr.', number: 3 },
                { name: 'Nelson Agholor', number: 15 },
              ],
              RWR: [
                { name: 'Rashod Bateman', number: 7 },
                { name: 'Devin Duvernay', number: 13 },
              ],
              SWR: [{ name: 'Zay Flowers', number: 4 }],
              TE: [
                { name: 'Mark Andrews', number: 89 },
                { name: 'Isaiah Likely', number: 80 },
                { name: 'Charlie Kolar', number: 88 },
              ],
            },
            Defense: {
              DL: [{ name: 'Broderick Washington', number: 96 }],
              DE: [
                { name: 'Justin Madubuike', number: 92 },
                { name: 'Jadeveon Clowney', number: 24 },
              ],
              DT: [{ name: 'Michael Pierce', number: 58 }],
              LB: [
                { name: 'Roquan Smith', number: 0 },
                { name: 'Patrick Queen', number: 6 },
              ],
              CB: [
                { name: 'Marlon Humphrey', number: 44 },
                { name: 'Rock Ya-Sin', number: 23 },
                { name: 'Ronald Darby', number: 28 },
              ],
              S: [
                { name: 'Kyle Hamilton', number: 14 },
                { name: 'Marcus Williams', number: 32 },
                { name: 'Geno Stone', number: 26 },
              ],
              K: [{ name: 'Justin Tucker', number: 9 }],
              P: [{ name: 'Jordan Stout', number: 11 }],
              LS: [{ name: 'Nick Moore', number: 46 }],
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
                { name: 'Matt Barkley', number: 11 },
              ],
              RB: [
                { name: 'James Cook', number: 28 },
                { name: 'Latavius Murray', number: 33 },
                { name: 'Damien Harris', number: 22 },
                { name: 'Ty Johnson', number: 25 },
              ],
              LWR: [
                { name: 'Stefon Diggs', number: 14 },
                { name: 'Khalil Shakir', number: 10 },
              ],
              RWR: [
                { name: 'Gabe Davis', number: 13 },
                { name: 'Deonte Harty', number: 11 },
              ],
              SWR: [{ name: 'Trent Sherfield', number: 16 }],
              TE: [
                { name: 'Dawson Knox', number: 88 },
                { name: 'Dalton Kincaid', number: 86 },
                { name: 'Quintin Morris', number: 85 },
              ],
            },
            Defense: {
              DL: [
                { name: 'DaQuan Jones', number: 92 },
                { name: 'Ed Oliver', number: 91 },
              ],
              DE: [
                { name: 'Leonard Floyd', number: 56 },
                { name: 'Greg Rousseau', number: 50 },
                { name: 'A.J. Epenesa', number: 57 },
              ],
              DT: [{ name: 'Jordan Phillips', number: 97 }],
              LB: [
                { name: 'Matt Milano', number: 58 },
                { name: 'Terrel Bernard', number: 43 },
                { name: 'Dorian Williams', number: 42 },
              ],
              CB: [
                { name: "Tre'Davious White", number: 27 },
                { name: 'Christian Benford', number: 47 },
                { name: 'Kaiir Elam', number: 24 },
              ],
              S: [
                { name: 'Jordan Poyer', number: 21 },
                { name: 'Micah Hyde', number: 23 },
                { name: 'Damar Hamlin', number: 3 },
              ],
              K: [{ name: 'Tyler Bass', number: 2 }],
              P: [{ name: 'Sam Martin', number: 8 }],
              LS: [{ name: 'Reid Ferguson', number: 69 }],
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
                { name: 'Raheem Blackshear', number: 20 },
                { name: 'Laviska Shenault Jr.', number: 15 },
              ],
              LWR: [{ name: 'Adam Thielen', number: 19 }],
              RWR: [{ name: 'DJ Chark', number: 17 }],
              SWR: [{ name: 'Jonathan Mingo', number: 15 }],
              TE: [
                { name: 'Hayden Hurst', number: 81 },
                { name: 'Tommy Tremble', number: 82 },
              ],
            },
            Defense: {
              DL: [
                { name: 'Derrick Brown', number: 95 },
                { name: 'DeShawn Williams', number: 90 },
              ],
              DE: [
                { name: 'Brian Burns', number: 0 },
                { name: 'Justin Houston', number: 50 },
              ],
              DT: [{ name: 'Shy Tuttle', number: 99 }],
              LB: [
                { name: 'Shaq Thompson', number: 7 },
                { name: 'Frankie Luvu', number: 49 },
              ],
              CB: [
                { name: 'Jaycee Horn', number: 8 },
                { name: 'Donte Jackson', number: 26 },
              ],
              S: [
                { name: 'Vonn Bell', number: 24 },
                { name: 'Xavier Woods', number: 25 },
              ],
              P: [{ name: 'Johnny Hekker', number: 10 }],
              K: [{ name: 'Eddy Pineiro', number: 4 }],
              LS: [{ name: 'J.J. Jansen', number: 44 }],
            },
          },
        },
        6: {
          team: 'Chicago Bears',
          positions: {
            Offense: {
              QB: [
                { name: 'Justin Fields', number: 1 },
                { name: 'Tyson Bagent', number: 17 },
              ],
              RB: [
                { name: 'Khalil Herbert', number: 24 },
                { name: "D'Onta Foreman", number: 21 },
                { name: 'Roschon Johnson', number: 23 },
                { name: 'Travis Homer', number: 25 },
              ],
              LWR: [{ name: 'Darnell Mooney', number: 11 }],
              RWR: [{ name: 'DJ Moore', number: 2 }],
              SWR: [{ name: 'Chase Claypool', number: 10 }],
              TE: [
                { name: 'Cole Kmet', number: 85 },
                { name: 'Robert Tonyan', number: 18 },
              ],
            },
            Defense: {
              DL: [
                { name: 'Justin Jones', number: 93 },
                { name: 'Andrew Billings', number: 97 },
              ],
              DE: [
                { name: 'DeMarcus Walker', number: 95 },
                { name: 'Yannick Ngakoue', number: 91 },
              ],
              LB: [
                { name: 'Tremaine Edmunds', number: 49 },
                { name: 'T.J. Edwards', number: 53 },
              ],
              CB: [
                { name: 'Jaylon Johnson', number: 33 },
                { name: 'Kyler Gordon', number: 6 },
              ],
              S: [
                { name: 'Eddie Jackson', number: 4 },
                { name: 'Jaquan Brisker', number: 9 },
              ],
              P: [{ name: 'Trenton Gill', number: 16 }],
              K: [{ name: 'Cairo Santos', number: 2 }],
              LS: [{ name: 'Patrick Scales', number: 48 }],
            },
          },
        },
        7: {
          team: 'Cincinnati Bengals',
          positions: {
            Offense: {
              QB: [
                { name: 'Joe Burrow', number: 9 },
                { name: 'Jake Browning', number: 6 },
              ],
              RB: [
                { name: 'Joe Mixon', number: 28 },
                { name: 'Trayveon Williams', number: 32 },
                { name: 'Chris Evans', number: 25 },
                { name: 'Chase Brown', number: 30 },
              ],
              LWR: [{ name: "Ja'Marr Chase", number: 1 }],
              RWR: [{ name: 'Tee Higgins', number: 5 }],
              SWR: [{ name: 'Tyler Boyd', number: 83 }],
              TE: [
                { name: 'Irv Smith Jr.', number: 81 },
                { name: 'Drew Sample', number: 89 },
              ],
            },
            Defense: {
              DL: [
                { name: 'D.J. Reader', number: 98 },
                { name: 'B.J. Hill', number: 92 },
              ],
              DE: [
                { name: 'Sam Hubbard', number: 94 },
                { name: 'Trey Hendrickson', number: 91 },
              ],
              LB: [
                { name: 'Logan Wilson', number: 55 },
                { name: 'Germaine Pratt', number: 57 },
              ],
              CB: [
                { name: 'Chidobe Awuzie', number: 22 },
                { name: 'Mike Hilton', number: 21 },
              ],
              S: [
                { name: 'Dax Hill', number: 23 },
                { name: 'Nick Scott', number: 33 },
              ],
              P: [{ name: 'Brad Robbins', number: 10 }],
              K: [{ name: 'Evan McPherson', number: 2 }],
              LS: [{ name: 'Cal Adomitis', number: 48 }],
            },
          },
        },
        8: {
          team: 'Cleveland Browns',
          positions: {
            Offense: {
              QB: [
                { name: 'Deshaun Watson', number: 4 },
                { name: 'Dorian Thompson-Robinson', number: 17 },
              ],
              RB: [
                { name: 'Jerome Ford', number: 34 },
                { name: 'Kareem Hunt', number: 27 },
                { name: 'Pierre Strong Jr.', number: 20 },
              ],
              LWR: [{ name: 'Amari Cooper', number: 2 }],
              RWR: [{ name: 'Donovan Peoples-Jones', number: 11 }],
              SWR: [{ name: 'Elijah Moore', number: 8 }],
              TE: [
                { name: 'David Njoku', number: 85 },
                { name: 'Harrison Bryant', number: 88 },
              ],
            },
            Defense: {
              DL: [
                { name: 'Dalvin Tomlinson', number: 94 },
                { name: 'Jordan Elliott', number: 96 },
              ],
              DE: [
                { name: 'Myles Garrett', number: 95 },
                { name: "Za'Darius Smith", number: 99 },
              ],
              LB: [
                { name: 'Anthony Walker Jr.', number: 5 },
                { name: 'Jeremiah Owusu-Koramoah', number: 28 },
              ],
              CB: [
                { name: 'Denzel Ward', number: 21 },
                { name: 'Greg Newsome II', number: 20 },
              ],
              S: [
                { name: 'Grant Delpit', number: 22 },
                { name: 'Juan Thornhill', number: 1 },
              ],
              P: [{ name: 'Corey Bojorquez', number: 13 }],
              K: [{ name: 'Dustin Hopkins', number: 7 }],
              LS: [{ name: 'Charley Hughlett', number: 47 }],
            },
          },
        },
      },
      9: {
        team: 'Dallas Cowboys',
        positions: {
          Offense: {
            QB: [
              { name: 'Dak Prescott', number: 4 },
              { name: 'Cooper Rush', number: 10 },
              { name: 'Trey Lance', number: 15 },
            ],
            RB: [
              { name: 'Tony Pollard', number: 20 },
              { name: 'Rico Dowdle', number: 23 },
              { name: 'Deuce Vaughn', number: 42 },
            ],
            LWR: [{ name: 'Michael Gallup', number: 13 }],
            RWR: [{ name: 'CeeDee Lamb', number: 88 }],
            SWR: [{ name: 'Brandin Cooks', number: 3 }],
            TE: [
              { name: 'Jake Ferguson', number: 87 },
              { name: 'Luke Schoonmaker', number: 86 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Osa Odighizuwa', number: 97 },
              { name: 'Mazi Smith', number: 58 },
            ],
            DE: [
              { name: 'DeMarcus Lawrence', number: 90 },
              { name: 'Micah Parsons', number: 11 },
              { name: 'Dorance Armstrong', number: 92 },
            ],
            LB: [
              { name: 'Leighton Vander Esch', number: 55 },
              { name: 'Damone Clark', number: 33 },
            ],
            CB: [
              { name: 'Trevon Diggs', number: 7 },
              { name: 'Stephon Gilmore', number: 21 },
              { name: 'DaRon Bland', number: 26 },
            ],
            S: [
              { name: 'Jayron Kearse', number: 27 },
              { name: 'Donovan Wilson', number: 6 },
              { name: 'Malik Hooker', number: 28 },
            ],
            P: [{ name: 'Bryan Anger', number: 5 }],
            K: [{ name: 'Brandon Aubrey', number: 17 }],
            LS: [{ name: 'Trent Sieg', number: 47 }],
          },
        },
      },
      10: {
        team: 'Denver Broncos',
        positions: {
          Offense: {
            QB: [
              { name: 'Russell Wilson', number: 3 },
              { name: 'Jarrett Stidham', number: 4 },
            ],
            RB: [
              { name: 'Javonte Williams', number: 33 },
              { name: 'Samaje Perine', number: 25 },
              { name: 'Jaleel McLaughlin', number: 38 },
            ],
            LWR: [{ name: 'Courtland Sutton', number: 14 }],
            RWR: [{ name: 'Jerry Jeudy', number: 10 }],
            SWR: [{ name: 'Marvin Mims Jr.', number: 19 }],
            TE: [
              { name: 'Adam Trautman', number: 82 },
              { name: 'Greg Dulcich', number: 80 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Zach Allen', number: 99 },
              { name: 'Jonathan Harris', number: 92 },
              { name: 'D.J. Jones', number: 97 },
            ],
            LB: [
              { name: 'Josey Jewell', number: 47 },
              { name: 'Alex Singleton', number: 49 },
              { name: 'Randy Gregory', number: 5 },
              { name: 'Jonathon Cooper', number: 53 },
              { name: 'Nik Bonitto', number: 42 },
            ],
            CB: [
              { name: 'Patrick Surtain II', number: 2 },
              { name: 'Damarri Mathis', number: 27 },
            ],
            S: [
              { name: 'Justin Simmons', number: 31 },
              { name: 'Kareem Jackson', number: 22 },
            ],
            P: [{ name: 'Riley Dixon', number: 9 }],
            K: [{ name: 'Wil Lutz', number: 5 }],
            LS: [{ name: 'Mitchell Fraboni', number: 46 }],
          },
        },
      },
      11: {
        team: 'Detroit Lions',
        positions: {
          Offense: {
            QB: [
              { name: 'Jared Goff', number: 16 },
              { name: 'Teddy Bridgewater', number: 5 },
            ],
            RB: [
              { name: 'David Montgomery', number: 5 },
              { name: 'Jahmyr Gibbs', number: 26 },
              { name: 'Craig Reynolds', number: 46 },
            ],
            LWR: [{ name: 'Amon-Ra St. Brown', number: 14 }],
            RWR: [{ name: 'Josh Reynolds', number: 8 }],
            SWR: [{ name: 'Kalif Raymond', number: 11 }],
            TE: [
              { name: 'Sam LaPorta', number: 87 },
              { name: 'Brock Wright', number: 89 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Aidan Hutchinson', number: 97 },
              { name: 'Alim McNeill', number: 54 },
            ],
            LB: [
              { name: 'Alex Anzalone', number: 34 },
              { name: 'Jack Campbell', number: 46 },
            ],
            CB: [
              { name: 'Cameron Sutton', number: 1 },
              { name: 'Emmanuel Moseley', number: 4 },
              { name: 'Jerry Jacobs', number: 39 },
            ],
            S: [
              { name: 'Tracy Walker III', number: 21 },
              { name: 'Kerby Joseph', number: 31 },
            ],
            P: [{ name: 'Jack Fox', number: 3 }],
            K: [{ name: 'Riley Patterson', number: 36 }],
            LS: [{ name: 'Scott Daly', number: 47 }],
          },
        },
      },
      12: {
        team: 'Green Bay Packers',
        positions: {
          Offense: {
            QB: [
              { name: 'Jordan Love', number: 10 },
              { name: 'Sean Clifford', number: 8 },
            ],
            RB: [
              { name: 'Aaron Jones', number: 33 },
              { name: 'AJ Dillon', number: 28 },
              { name: 'Patrick Taylor', number: 27 },
            ],
            LWR: [{ name: 'Romeo Doubs', number: 87 }],
            RWR: [{ name: 'Christian Watson', number: 9 }],
            SWR: [{ name: 'Jayden Reed', number: 11 }],
            TE: [
              { name: 'Luke Musgrave', number: 88 },
              { name: 'Tucker Kraft', number: 85 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Kenny Clark', number: 97 },
              { name: 'Devonte Wyatt', number: 95 },
            ],
            DE: [
              { name: 'Rashan Gary', number: 52 },
              { name: 'Preston Smith', number: 91 },
            ],
            LB: [
              { name: 'Quay Walker', number: 7 },
              { name: "De'Vondre Campbell", number: 59 },
            ],
            CB: [
              { name: 'Jaire Alexander', number: 23 },
              { name: 'Rasul Douglas', number: 29 },
            ],
            S: [
              { name: 'Darnell Savage', number: 26 },
              { name: 'Rudy Ford', number: 20 },
            ],
            P: [{ name: 'Daniel Whelan', number: 19 }],
            K: [{ name: 'Anders Carlson', number: 17 }],
            LS: [{ name: 'Matt Orzech', number: 43 }],
          },
        },
      },
      13: {
        team: 'Houston Texans',
        positions: {
          Offense: {
            QB: [
              { name: 'C.J. Stroud', number: 7 },
              { name: 'Davis Mills', number: 10 },
            ],
            RB: [
              { name: 'Dameon Pierce', number: 31 },
              { name: 'Devin Singletary', number: 25 },
              { name: 'Mike Boone', number: 26 },
            ],
            LWR: [{ name: 'Nico Collins', number: 12 }],
            RWR: [{ name: 'Robert Woods', number: 2 }],
            SWR: [{ name: 'Tank Dell', number: 13 }],
            TE: [
              { name: 'Dalton Schultz', number: 86 },
              { name: 'Teagan Quitoriano', number: 84 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Maliek Collins', number: 96 },
              { name: 'Sheldon Rankins', number: 98 },
            ],
            DE: [
              { name: 'Jonathan Greenard', number: 52 },
              { name: 'Will Anderson Jr.', number: 51 },
            ],
            LB: [
              { name: 'Denzel Perryman', number: 54 },
              { name: 'Christian Harris', number: 48 },
            ],
            CB: [
              { name: 'Derek Stingley Jr.', number: 24 },
              { name: 'Steven Nelson', number: 21 },
            ],
            S: [
              { name: 'Jalen Pitre', number: 5 },
              { name: 'Jimmie Ward', number: 1 },
            ],
            P: [{ name: 'Cameron Johnston', number: 11 }],
            K: [{ name: "Ka'imi Fairbairn", number: 7 }],
            LS: [{ name: 'Jon Weeks', number: 46 }],
          },
        },
      },
      14: {
        team: 'Indianapolis Colts',
        positions: {
          Offense: {
            QB: [
              { name: 'Anthony Richardson', number: 5 },
              { name: 'Gardner Minshew', number: 10 },
            ],
            RB: [
              { name: 'Jonathan Taylor', number: 28 },
              { name: 'Zack Moss', number: 21 },
              { name: 'Deon Jackson', number: 35 },
            ],
            LWR: [{ name: 'Michael Pittman Jr.', number: 11 }],
            RWR: [{ name: 'Alec Pierce', number: 14 }],
            SWR: [{ name: 'Josh Downs', number: 1 }],
            TE: [
              { name: 'Mo Alie-Cox', number: 81 },
              { name: 'Kylen Granson', number: 83 },
              { name: 'Jelani Woods', number: 80 },
            ],
          },
          Defense: {
            DL: [
              { name: 'DeForest Buckner', number: 99 },
              { name: 'Grover Stewart', number: 90 },
            ],
            DE: [
              { name: 'Kwity Paye', number: 51 },
              { name: 'Samson Ebukam', number: 52 },
            ],
            LB: [
              { name: 'Shaquille Leonard', number: 53 },
              { name: 'Zaire Franklin', number: 44 },
            ],
            CB: [
              { name: 'Kenny Moore II', number: 23 },
              { name: 'Dallis Flowers', number: 33 },
            ],
            S: [
              { name: 'Rodney Thomas II', number: 25 },
              { name: 'Julian Blackmon', number: 32 },
            ],
            P: [{ name: 'Rigoberto Sanchez', number: 8 }],
            K: [{ name: 'Matt Gay', number: 7 }],
            LS: [{ name: 'Luke Rhodes', number: 46 }],
          },
        },
      },
      15: {
        team: 'Jacksonville Jaguars',
        positions: {
          Offense: {
            QB: [
              { name: 'Trevor Lawrence', number: 16 },
              { name: 'C.J. Beathard', number: 3 },
            ],
            RB: [
              { name: 'Travis Etienne Jr.', number: 1 },
              { name: 'Tank Bigsby', number: 4 },
              { name: "D'Ernest Johnson", number: 25 },
            ],
            LWR: [{ name: 'Calvin Ridley', number: 0 }],
            RWR: [{ name: 'Zay Jones', number: 7 }],
            SWR: [{ name: 'Christian Kirk', number: 13 }],
            TE: [
              { name: 'Evan Engram', number: 17 },
              { name: 'Brenton Strange', number: 85 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Roy Robertson-Harris', number: 95 },
              { name: 'Foley Fatukasi', number: 94 },
            ],
            DE: [
              { name: 'Josh Allen', number: 41 },
              { name: 'Travon Walker', number: 44 },
            ],
            LB: [
              { name: 'Foyesade Oluokun', number: 23 },
              { name: 'Devin Lloyd', number: 33 },
            ],
            CB: [
              { name: 'Tyson Campbell', number: 32 },
              { name: 'Darious Williams', number: 31 },
            ],
            S: [
              { name: 'Andre Cisco', number: 5 },
              { name: 'Rayshawn Jenkins', number: 2 },
            ],
            P: [{ name: 'Logan Cooke', number: 9 }],
            K: [{ name: 'Brandon McManus', number: 10 }],
            LS: [{ name: 'Ross Matiscik', number: 46 }],
          },
        },
      },
      16: {
        team: 'Kansas City Chiefs',
        positions: {
          Offense: {
            QB: [
              { name: 'Patrick Mahomes', number: 15 },
              { name: 'Blaine Gabbert', number: 4 },
            ],
            RB: [
              { name: 'Isiah Pacheco', number: 10 },
              { name: 'Jerick McKinnon', number: 1 },
              { name: 'Clyde Edwards-Helaire', number: 25 },
            ],
            LWR: [{ name: 'Marquez Valdes-Scantling', number: 11 }],
            RWR: [{ name: 'Kadarius Toney', number: 19 }],
            SWR: [{ name: 'Skyy Moore', number: 24 }],
            TE: [
              { name: 'Travis Kelce', number: 87 },
              { name: 'Noah Gray', number: 83 },
              { name: 'Blake Bell', number: 81 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Chris Jones', number: 95 },
              { name: 'Derrick Nnadi', number: 91 },
            ],
            DE: [
              { name: 'George Karlaftis', number: 56 },
              { name: 'Charles Omenihu', number: 90 },
            ],
            LB: [
              { name: 'Nick Bolton', number: 32 },
              { name: 'Willie Gay Jr.', number: 50 },
              { name: 'Drue Tranquill', number: 23 },
            ],
            CB: [
              { name: "L'Jarius Sneed", number: 38 },
              { name: 'Trent McDuffie', number: 21 },
              { name: 'Jaylen Watson', number: 35 },
            ],
            S: [
              { name: 'Justin Reid', number: 20 },
              { name: 'Bryan Cook', number: 6 },
            ],
            P: [{ name: 'Tommy Townsend', number: 5 }],
            K: [{ name: 'Harrison Butker', number: 7 }],
            LS: [{ name: 'James Winchester', number: 41 }],
          },
        },
      },
      17: {
        team: 'Miami Dolphins',
        positions: {
          Offense: {
            QB: [
              { name: 'Tua Tagovailoa', number: 1 },
              { name: 'Mike White', number: 14 },
            ],
            RB: [
              { name: 'Raheem Mostert', number: 31 },
              { name: "De'Von Achane", number: 28 },
              { name: 'Salvon Ahmed', number: 26 },
            ],
            LWR: [{ name: 'Tyreek Hill', number: 10 }],
            RWR: [{ name: 'Jaylen Waddle', number: 17 }],
            SWR: [{ name: 'Braxton Berrios', number: 0 }],
            TE: [
              { name: 'Durham Smythe', number: 81 },
              { name: 'Tyler Kroft', number: 48 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Christian Wilkins', number: 94 },
              { name: 'Raekwon Davis', number: 98 },
            ],
            DE: [
              { name: 'Emmanuel Ogbah', number: 91 },
              { name: 'Jaelan Phillips', number: 15 },
            ],
            LB: [
              { name: 'Jerome Baker', number: 55 },
              { name: 'David Long Jr.', number: 51 },
            ],
            CB: [
              { name: 'Xavien Howard', number: 25 },
              { name: 'Kader Kohou', number: 28 },
            ],
            S: [
              { name: 'Jevon Holland', number: 8 },
              { name: 'DeShon Elliott', number: 20 },
            ],
            P: [{ name: 'Jake Bailey', number: 14 }],
            K: [{ name: 'Jason Sanders', number: 7 }],
            LS: [{ name: 'Blake Ferguson', number: 44 }],
          },
        },
      },
      18: {
        team: 'Minnesota Vikings',
        positions: {
          Offense: {
            QB: [
              { name: 'Kirk Cousins', number: 8 },
              { name: 'Nick Mullens', number: 12 },
            ],
            RB: [
              { name: 'Alexander Mattison', number: 2 },
              { name: 'Ty Chandler', number: 32 },
              { name: 'Kene Nwangwu', number: 26 },
            ],
            LWR: [{ name: 'Justin Jefferson', number: 18 }],
            RWR: [{ name: 'K.J. Osborn', number: 17 }],
            SWR: [{ name: 'Jordan Addison', number: 3 }],
            TE: [
              { name: 'T.J. Hockenson', number: 87 },
              { name: 'Josh Oliver', number: 84 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Harrison Phillips', number: 97 },
              { name: 'Khyiris Tonga', number: 95 },
            ],
            DE: [
              { name: 'Danielle Hunter', number: 99 },
              { name: 'Marcus Davenport', number: 0 },
            ],
            LB: [
              { name: 'Jordan Hicks', number: 58 },
              { name: 'Brian Asamoah II', number: 33 },
            ],
            CB: [
              { name: 'Byron Murphy Jr.', number: 7 },
              { name: 'Andrew Booth Jr.', number: 23 },
            ],
            S: [
              { name: 'Harrison Smith', number: 22 },
              { name: 'Camryn Bynum', number: 24 },
            ],
            P: [{ name: 'Ryan Wright', number: 14 }],
            K: [{ name: 'Greg Joseph', number: 1 }],
            LS: [{ name: 'Andrew DePaola', number: 42 }],
          },
        },
      },
      19: {
        team: 'New England Patriots',
        positions: {
          Offense: {
            QB: [
              { name: 'Mac Jones', number: 10 },
              { name: 'Bailey Zappe', number: 4 },
            ],
            RB: [
              { name: 'Rhamondre Stevenson', number: 38 },
              { name: 'Ezekiel Elliott', number: 15 },
              { name: 'Ty Montgomery', number: 14 },
            ],
            LWR: [{ name: 'DeVante Parker', number: 1 }],
            RWR: [{ name: 'Kendrick Bourne', number: 84 }],
            SWR: [{ name: 'JuJu Smith-Schuster', number: 7 }],
            TE: [
              { name: 'Hunter Henry', number: 85 },
              { name: 'Mike Gesicki', number: 88 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Lawrence Guy', number: 93 },
              { name: 'Davon Godchaux', number: 92 },
            ],
            DE: [
              { name: 'Deatrich Wise Jr.', number: 91 },
              { name: 'Matthew Judon', number: 9 },
            ],
            LB: [
              { name: "Ja'Whaun Bentley", number: 8 },
              { name: 'Jahlani Tavai', number: 48 },
            ],
            CB: [
              { name: 'Jonathan Jones', number: 31 },
              { name: 'Marcus Jones', number: 25 },
            ],
            S: [
              { name: 'Kyle Dugger', number: 23 },
              { name: 'Jabrill Peppers', number: 3 },
            ],
            P: [{ name: 'Bryce Baringer', number: 17 }],
            K: [{ name: 'Chad Ryland', number: 38 }],
            LS: [{ name: 'Joe Cardona', number: 49 }],
          },
        },
      },
      20: {
        team: 'New Orleans Saints',
        positions: {
          Offense: {
            QB: [
              { name: 'Derek Carr', number: 4 },
              { name: 'Jameis Winston', number: 2 },
            ],
            RB: [
              { name: 'Alvin Kamara', number: 41 },
              { name: 'Jamaal Williams', number: 30 },
              { name: 'Kendre Miller', number: 25 },
            ],
            LWR: [{ name: 'Michael Thomas', number: 13 }],
            RWR: [{ name: 'Chris Olave', number: 12 }],
            SWR: [{ name: 'Rashid Shaheed', number: 89 }],
            TE: [
              { name: 'Juwan Johnson', number: 83 },
              { name: 'Foster Moreau', number: 87 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Cameron Jordan', number: 94 },
              { name: 'Nathan Shepherd', number: 93 },
            ],
            DE: [
              { name: 'Carl Granderson', number: 96 },
              { name: 'Payton Turner', number: 98 },
            ],
            LB: [
              { name: 'Demario Davis', number: 56 },
              { name: 'Pete Werner', number: 20 },
            ],
            CB: [
              { name: 'Marshon Lattimore', number: 23 },
              { name: 'Paulson Adebo', number: 29 },
            ],
            S: [
              { name: 'Tyrann Mathieu', number: 32 },
              { name: 'Marcus Maye', number: 6 },
            ],
            P: [{ name: 'Lou Hedley', number: 6 }],
            K: [{ name: 'Blake Grupe', number: 19 }],
            LS: [{ name: 'Zach Wood', number: 49 }],
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
            QB: [
              { name: 'Aaron Rodgers', number: 8 },
              { name: 'Zach Wilson', number: 2 },
            ],
            RB: [
              { name: 'Breece Hall', number: 20 },
              { name: 'Dalvin Cook', number: 33 },
              { name: 'Michael Carter', number: 32 },
            ],
            LWR: [{ name: 'Garrett Wilson', number: 17 }],
            RWR: [{ name: 'Allen Lazard', number: 10 }],
            SWR: [{ name: 'Mecole Hardman Jr.', number: 6 }],
            TE: [
              { name: 'Tyler Conklin', number: 83 },
              { name: 'C.J. Uzomah', number: 87 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Quinnen Williams', number: 95 },
              { name: 'Solomon Thomas', number: 94 },
            ],
            DE: [
              { name: 'Carl Lawson', number: 58 },
              { name: 'John Franklin-Myers', number: 91 },
            ],
            LB: [
              { name: 'C.J. Mosley', number: 57 },
              { name: 'Quincy Williams', number: 56 },
            ],
            CB: [
              { name: 'Sauce Gardner', number: 1 },
              { name: 'D.J. Reed', number: 4 },
            ],
            S: [
              { name: 'Jordan Whitehead', number: 3 },
              { name: 'Tony Adams', number: 22 },
            ],
            P: [{ name: 'Thomas Morstead', number: 6 }],
            K: [{ name: 'Greg Zuerlein', number: 9 }],
            LS: [{ name: 'Thomas Hennessy', number: 42 }],
          },
        },
      },
      23: {
        team: 'Las Vegas Raiders',
        positions: {
          Offense: {
            QB: [
              { name: 'Jimmy Garoppolo', number: 10 },
              { name: 'Brian Hoyer', number: 7 },
            ],
            RB: [
              { name: 'Josh Jacobs', number: 28 },
              { name: 'Ameer Abdullah', number: 22 },
              { name: 'Zamir White', number: 35 },
            ],
            LWR: [{ name: 'Davante Adams', number: 17 }],
            RWR: [{ name: 'Jakobi Meyers', number: 16 }],
            SWR: [{ name: 'Hunter Renfrow', number: 13 }],
            TE: [
              { name: 'Austin Hooper', number: 81 },
              { name: 'Michael Mayer', number: 87 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Maxx Crosby', number: 98 },
              { name: 'Bilal Nichols', number: 91 },
            ],
            DE: [
              { name: 'Chandler Jones', number: 55 },
              { name: 'Tyree Wilson', number: 9 },
            ],
            LB: [
              { name: 'Divine Deablo', number: 5 },
              { name: 'Robert Spillane', number: 41 },
            ],
            CB: [
              { name: 'Nate Hobbs', number: 39 },
              { name: 'Marcus Peters', number: 24 },
            ],
            S: [
              { name: "Tre'von Moehrig", number: 25 },
              { name: 'Marcus Epps', number: 1 },
            ],
            P: [{ name: 'AJ Cole', number: 6 }],
            K: [{ name: 'Daniel Carlson', number: 2 }],
            LS: [{ name: 'Jacob Bobenmoyer', number: 46 }],
          },
        },
      },
      24: {
        team: 'Philadelphia Eagles',
        positions: {
          Offense: {
            QB: [
              { name: 'Jalen Hurts', number: 1 },
              { name: 'Marcus Mariota', number: 8 },
            ],
            RB: [
              { name: "D'Andre Swift", number: 0 },
              { name: 'Kenneth Gainwell', number: 14 },
              { name: 'Boston Scott', number: 35 },
            ],
            LWR: [{ name: 'A.J. Brown', number: 11 }],
            RWR: [{ name: 'DeVonta Smith', number: 6 }],
            SWR: [{ name: 'Quez Watkins', number: 16 }],
            TE: [
              { name: 'Dallas Goedert', number: 88 },
              { name: 'Jack Stoll', number: 89 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Fletcher Cox', number: 91 },
              { name: 'Jordan Davis', number: 90 },
            ],
            DE: [
              { name: 'Brandon Graham', number: 55 },
              { name: 'Josh Sweat', number: 94 },
            ],
            LB: [
              { name: 'Haason Reddick', number: 7 },
              { name: 'Nakobe Dean', number: 17 },
            ],
            CB: [
              { name: 'Darius Slay', number: 2 },
              { name: 'James Bradberry', number: 24 },
            ],
            S: [
              { name: 'Reed Blankenship', number: 32 },
              { name: 'Terrell Edmunds', number: 26 },
            ],
            P: [{ name: 'Arryn Siposs', number: 8 }],
            K: [{ name: 'Jake Elliott', number: 4 }],
            LS: [{ name: 'Rick Lovato', number: 45 }],
          },
        },
      },
      25: {
        team: 'Pittsburgh Steelers',
        positions: {
          Offense: {
            QB: [
              { name: 'Kenny Pickett', number: 8 },
              { name: 'Mitch Trubisky', number: 10 },
            ],
            RB: [
              { name: 'Najee Harris', number: 22 },
              { name: 'Jaylen Warren', number: 30 },
              { name: 'Anthony McFarland Jr.', number: 26 },
            ],
            LWR: [{ name: 'George Pickens', number: 14 }],
            RWR: [{ name: 'Allen Robinson II', number: 11 }],
            SWR: [{ name: 'Calvin Austin III', number: 19 }],
            TE: [
              { name: 'Pat Freiermuth', number: 88 },
              { name: 'Darnell Washington', number: 80 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Cameron Heyward', number: 97 },
              { name: 'Larry Ogunjobi', number: 99 },
            ],
            DE: [
              { name: 'T.J. Watt', number: 90 },
              { name: 'Alex Highsmith', number: 56 },
            ],
            LB: [
              { name: 'Cole Holcomb', number: 55 },
              { name: 'Elandon Roberts', number: 50 },
            ],
            CB: [
              { name: 'Patrick Peterson', number: 20 },
              { name: 'Levi Wallace', number: 29 },
            ],
            S: [
              { name: 'Minkah Fitzpatrick', number: 39 },
              { name: 'Keanu Neal', number: 31 },
            ],
            P: [{ name: 'Pressley Harvin III', number: 6 }],
            K: [{ name: 'Chris Boswell', number: 9 }],
            LS: [{ name: 'Christian Kuntz', number: 46 }],
          },
        },
      },
      26: {
        team: 'Los Angeles Chargers',
        positions: {
          Offense: {
            QB: [
              { name: 'Justin Herbert', number: 10 },
              { name: 'Easton Stick', number: 2 },
            ],
            RB: [
              { name: 'Austin Ekeler', number: 30 },
              { name: 'Joshua Kelley', number: 25 },
              { name: 'Isaiah Spiller', number: 28 },
            ],
            LWR: [{ name: 'Keenan Allen', number: 13 }],
            RWR: [{ name: 'Mike Williams', number: 81 }],
            SWR: [{ name: 'Quentin Johnston', number: 1 }],
            TE: [
              { name: 'Gerald Everett', number: 7 },
              { name: 'Donald Parham Jr.', number: 89 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Sebastian Joseph-Day', number: 69 },
              { name: 'Austin Johnson', number: 98 },
            ],
            DE: [
              { name: 'Joey Bosa', number: 97 },
              { name: 'Khalil Mack', number: 52 },
            ],
            LB: [
              { name: 'Eric Kendricks', number: 6 },
              { name: 'Kenneth Murray Jr.', number: 9 },
            ],
            CB: [
              { name: 'J.C. Jackson', number: 27 },
              { name: 'Asante Samuel Jr.', number: 26 },
            ],
            S: [
              { name: 'Derwin James Jr.', number: 3 },
              { name: 'Alohi Gilman', number: 32 },
            ],
            P: [{ name: 'J.K. Scott', number: 16 }],
            K: [{ name: 'Cameron Dicker', number: 15 }],
            LS: [{ name: 'Josh Harris', number: 47 }],
          },
        },
      },
      27: {
        team: 'Seattle Seahawks',
        positions: {
          Offense: {
            QB: [
              { name: 'Geno Smith', number: 7 },
              { name: 'Drew Lock', number: 2 },
            ],
            RB: [
              { name: 'Kenneth Walker III', number: 9 },
              { name: 'Zach Charbonnet', number: 26 },
              { name: 'DeeJay Dallas', number: 31 },
            ],
            LWR: [{ name: 'DK Metcalf', number: 14 }],
            RWR: [{ name: 'Tyler Lockett', number: 16 }],
            SWR: [{ name: 'Jaxon Smith-Njigba', number: 11 }],
            TE: [
              { name: 'Noah Fant', number: 87 },
              { name: 'Will Dissly', number: 89 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Jarran Reed', number: 90 },
              { name: 'Bryan Mone', number: 92 },
            ],
            DE: [
              { name: 'Uchenna Nwosu', number: 10 },
              { name: 'Darrell Taylor', number: 52 },
            ],
            LB: [
              { name: 'Bobby Wagner', number: 54 },
              { name: 'Jordyn Brooks', number: 56 },
            ],
            CB: [
              { name: 'Tariq Woolen', number: 27 },
              { name: 'Devon Witherspoon', number: 21 },
            ],
            S: [
              { name: 'Jamal Adams', number: 33 },
              { name: 'Quandre Diggs', number: 6 },
            ],
            P: [{ name: 'Michael Dickson', number: 4 }],
            K: [{ name: 'Jason Myers', number: 5 }],
            LS: [{ name: 'Carson Tinker', number: 46 }],
          },
        },
      },
      28: {
        team: 'San Francisco 49ers',
        positions: {
          Offense: {
            QB: [
              { name: 'Brock Purdy', number: 13 },
              { name: 'Sam Darnold', number: 14 },
            ],
            RB: [
              { name: 'Christian McCaffrey', number: 23 },
              { name: 'Elijah Mitchell', number: 25 },
              { name: 'Jordan Mason', number: 24 },
            ],
            LWR: [{ name: 'Brandon Aiyuk', number: 11 }],
            RWR: [{ name: 'Deebo Samuel', number: 19 }],
            SWR: [{ name: 'Jauan Jennings', number: 15 }],
            TE: [
              { name: 'George Kittle', number: 85 },
              { name: 'Charlie Woerner', number: 89 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Arik Armstead', number: 91 },
              { name: 'Javon Hargrave', number: 93 },
            ],
            DE: [
              { name: 'Nick Bosa', number: 97 },
              { name: 'Drake Jackson', number: 95 },
            ],
            LB: [
              { name: 'Fred Warner', number: 54 },
              { name: 'Dre Greenlaw', number: 57 },
            ],
            CB: [
              { name: 'Charvarius Ward', number: 7 },
              { name: 'Deommodore Lenoir', number: 38 },
            ],
            S: [
              { name: 'Talanoa Hufanga', number: 29 },
              { name: 'Tashaun Gipson Sr.', number: 31 },
            ],
            P: [{ name: 'Mitch Wishnowsky', number: 18 }],
            K: [{ name: 'Jake Moody', number: 4 }],
            LS: [{ name: 'Taybor Pepper', number: 46 }],
          },
        },
      },
      29: {
        team: 'Los Angeles Rams',
        positions: {
          Offense: {
            QB: [
              { name: 'Matthew Stafford', number: 9 },
              { name: 'Brett Rypien', number: 4 },
            ],
            RB: [
              { name: 'Kyren Williams', number: 23 },
              { name: 'Ronnie Rivers', number: 30 },
              { name: 'Zach Evans', number: 38 },
            ],
            LWR: [{ name: 'Van Jefferson', number: 12 }],
            RWR: [{ name: 'Tutu Atwell', number: 15 }],
            SWR: [{ name: 'Puka Nacua', number: 17 }],
            TE: [
              { name: 'Tyler Higbee', number: 89 },
              { name: 'Brycen Hopkins', number: 88 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Aaron Donald', number: 99 },
              { name: 'Bobby Brown III', number: 95 },
            ],
            DE: [
              { name: 'Michael Hoecht', number: 97 },
              { name: 'Kobie Turner', number: 91 },
            ],
            LB: [
              { name: 'Ernest Jones', number: 53 },
              { name: 'Christian Rozeboom', number: 56 },
            ],
            CB: [
              { name: 'Cobie Durant', number: 14 },
              { name: 'Ahkello Witherspoon', number: 44 },
            ],
            S: [
              { name: 'Jordan Fuller', number: 4 },
              { name: 'Russ Yeast', number: 2 },
            ],
            P: [{ name: 'Ethan Evans', number: 42 }],
            K: [{ name: 'Brett Maher', number: 31 }],
            LS: [{ name: 'Alex Ward', number: 42 }],
          },
        },
      },
      30: {
        team: 'Tampa Bay Buccaneers',
        positions: {
          Offense: {
            QB: [
              { name: 'Baker Mayfield', number: 6 },
              { name: 'Kyle Trask', number: 2 },
            ],
            RB: [
              { name: 'Rachaad White', number: 29 },
              { name: "Ke'Shawn Vaughn", number: 21 },
              { name: 'Sean Tucker', number: 44 },
            ],
            LWR: [{ name: 'Mike Evans', number: 13 }],
            RWR: [{ name: 'Chris Godwin', number: 14 }],
            SWR: [{ name: 'Trey Palmer', number: 10 }],
            TE: [
              { name: 'Cade Otton', number: 88 },
              { name: 'Ko Kieft', number: 41 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Vita Vea', number: 50 },
              { name: 'Logan Hall', number: 90 },
            ],
            DE: [
              { name: 'Shaquil Barrett', number: 58 },
              { name: 'Joe Tryon-Shoyinka', number: 9 },
            ],
            LB: [
              { name: 'Lavonte David', number: 54 },
              { name: 'Devin White', number: 45 },
            ],
            CB: [
              { name: 'Carlton Davis III', number: 24 },
              { name: 'Jamel Dean', number: 35 },
            ],
            S: [
              { name: 'Antoine Winfield Jr.', number: 31 },
              { name: 'Ryan Neal', number: 23 },
            ],
            P: [{ name: 'Jake Camarda', number: 5 }],
            K: [{ name: 'Chase McLaughlin', number: 3 }],
            LS: [{ name: 'Zach Triner', number: 97 }],
          },
        },
      },
      31: {
        team: 'Tennessee Titans',
        positions: {
          Offense: {
            QB: [
              { name: 'Ryan Tannehill', number: 17 },
              { name: 'Malik Willis', number: 7 },
              { name: 'Will Levis', number: 8 },
            ],
            RB: [
              { name: 'Derrick Henry', number: 22 },
              { name: 'Tyjae Spears', number: 32 },
              { name: 'Julius Chestnut', number: 36 },
            ],
            LWR: [{ name: 'DeAndre Hopkins', number: 10 }],
            RWR: [{ name: 'Nick Westbrook-Ikhine', number: 15 }],
            SWR: [{ name: 'Treylon Burks', number: 16 }],
            TE: [
              { name: 'Chigoziem Okonkwo', number: 85 },
              { name: 'Josh Whyle', number: 81 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Jeffery Simmons', number: 98 },
              { name: 'Denico Autry', number: 96 },
            ],
            DE: [
              { name: 'Harold Landry III', number: 58 },
              { name: 'Arden Key', number: 49 },
            ],
            LB: [
              { name: 'Azeez Al-Shaair', number: 2 },
              { name: 'Monty Rice', number: 56 },
            ],
            CB: [
              { name: 'Kristian Fulton', number: 26 },
              { name: 'Sean Murphy-Bunting', number: 0 },
            ],
            S: [
              { name: 'Kevin Byard', number: 31 },
              { name: 'Amani Hooker', number: 37 },
            ],
            P: [{ name: 'Ryan Stonehouse', number: 4 }],
            K: [{ name: 'Nick Folk', number: 6 }],
            LS: [{ name: 'Morgan Cox', number: 46 }],
          },
        },
      },
      32: {
        team: 'Washington Commanders',
        positions: {
          Offense: {
            QB: [
              { name: 'Sam Howell', number: 14 },
              { name: 'Jacoby Brissett', number: 12 },
            ],
            RB: [
              { name: 'Brian Robinson Jr.', number: 8 },
              { name: 'Antonio Gibson', number: 24 },
              { name: 'Chris Rodriguez Jr.', number: 23 },
            ],
            LWR: [{ name: 'Terry McLaurin', number: 17 }],
            RWR: [{ name: 'Jahan Dotson', number: 1 }],
            SWR: [{ name: 'Curtis Samuel', number: 10 }],
            TE: [
              { name: 'Logan Thomas', number: 82 },
              { name: 'John Bates', number: 87 },
            ],
          },
          Defense: {
            DL: [
              { name: 'Jonathan Allen', number: 93 },
              { name: 'Daron Payne', number: 94 },
            ],
            DE: [
              { name: 'Montez Sweat', number: 90 },
              { name: 'Chase Young', number: 99 },
            ],
            LB: [
              { name: 'Jamin Davis', number: 52 },
              { name: 'Cody Barton', number: 57 },
            ],
            CB: [
              { name: 'Kendall Fuller', number: 29 },
              { name: 'Emmanuel Forbes Jr.', number: 13 },
            ],
            S: [
              { name: 'Kamren Curl', number: 31 },
              { name: 'Darrick Forrest', number: 22 },
            ],
            P: [{ name: 'Tress Way', number: 5 }],
            K: [{ name: 'Joey Slye', number: 6 }],
            LS: [{ name: 'Camaron Cheeseman', number: 54 }],
          },
        },
      },
    };
  },
  computed: {
    selectedTeam() {
      return this.teams.find((team) => team.value === this.selectedOption);
    },
    selectedTeamName() {
      return this.selectedTeam?.name || '';
    },
    imgSrc() {
      return this.selectedTeam?.imgTag
        ? `https://www.draftsharks.com/img/icons/teams/${this.selectedTeam.imgTag}.svg`
        : '';
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
    <card class="mt2 mb3" heading="Select Team">
      <div class="flex flex-column-m items-center-m justify-center-m justify-between">
        <div class="flex items-center justify-center mb3-m">
          <img 
            v-if="imgSrc"
            :src="imgSrc || 'https://placehold.co/150x100'"
            :alt="selectedTeamName + ' Team logo' || 'Placeholder image'"
            style="width: 150px; height: 100px; margin-right: 10px;"
          />
          <h3 v-if="selectedTeamName" class="ml3">{{ selectedTeamName }}</h3>
        </div>
        <div class="flex items-center justify-center mb3-m">
          <label class="mr2" for="depthchartform-teamid">Choose a team:</label>
          <select id="depthchartform-teamid" v-model="selectedOption">
            <option v-for="team in teams" :key="team.value" :value="team.value">{{ team.name }}</option>
          </select>
        </div>
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

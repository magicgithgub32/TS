type Player = {
  name: string;
  team: string;
  position: string;
};

type Trainer = {
  id: number;
  name: string;
  teams: number;
};

type PlayerWithGoals = Player & {
  goals: number;
};

type TrainerWithGoals = Trainer & {
  goals: number;
};

const goalsById: Record<number, number> = {
  1: 2,
  2: 0,
  4: 120,
  5: 46,
};

const players: Player[] = [
  { id: 1, name: "Juan", team: "Spain", position: "MD" },
  {
    id: 2,
    name: "John",
    team: "England",
    position: "LD",
  },
];

const trainers: Trainer[] = [
  { id: 4, name: "Alex", teams: 20 },
  {
    id: 5,
    name: "Alvaro",
    teams: 10,
  },
];
const addGoals = <T extends Player | Trainer>(
  entitiesArr: T[]
): (T & { goals: number })[] => {
  return entitiesArr.map((entity) => {
    const goals = goalsById[entity.id] || 0;
    return {
      ...entity,
      goals,
    };
  });
};

const playersWithGoals = addGoals<Player>(players);
console.log(playerWithGoals);

const trainersWithGoals = addGoals<Trainer>(trainers);
console.log(trainerWithGoals);

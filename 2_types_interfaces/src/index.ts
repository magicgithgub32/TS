type Player = {
  name: string;
  position: string;
  goals: number;
}

type Trainer = {
name: string;
age?: number;
teams?: number;
}

type Team = {
id: string | number;
name: string;
players: [];
matches: number;
points: number;
trainer: Trainer;

}


const team: Team = {
id: 101,
name: 'Spain',
tainer: {
  name: 'Luis',
  age: 40,
  teams: 10,
}
players: [
  {
      name: 'Juan',
      position: 'LD',
      goals: 1,
  }

  {
      name: 'Alex',
      position: 'MD',
      goals: 0
  }
],
matches:  2, 
points: 6,
}

type Members = (Trainer | Player) [];

const teamMembers: (Trainer | Player)[] = [
{
  name: 'Juan',
  position: 'LD',
  goals: 1,
}
{
  name: 'Luis',
  teams: 10,
}
]


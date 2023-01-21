// Function Return Types

const sum = (a: number, b: number): number => {
  return a + b;
};

const addListeners = (entities: []): void => {
  //add listeners with window.addEventListener
};

const listeners = addListeners([]);
console.log({ listeners });

// const neverFn = (): never => {
//   // while(true) {}
//   // throw newError(`Error!`)
// };

const fetchEntity = async (): Promise<number> => {
  // await Fetch()

  return 10;
};

await fetchEntity();

// Utilidades y extras
// Referencia:  https://www.typescriptlang.org/docs/handbook/utility-types.html

type User = {
  id: number;
  username: string;
  role?: string;
  email: string;
  password?: string;
};

// Partial

type PartialUser = Partial<User>;
const partialUser: PartialUser = {
  email: "dcd@vfsv",
};

// Required

type RequiredUser = Required<User>;
const requiredUser: RequiredUser = {
  id: 1,
  username: "Jo",
  role: "Manager",
  email: "4325@oioi",
  password: "passwoRF",
};

// Readonly

type ReadOnlyUser = Readonly<RequiredUser>;
const readOnlyUser: ReadOnlyUser = {
  id: 1,
  username: "Jo",
  role: "Manager",
  email: "4325@oioi",
  password: "passwoRF",
};

// readOnlyUser.id = 3; No puedes reasignar variable porque es Readonly

// Pick

type ClientUser = Pick<User, "email" | "role" | "username">;
const clientUser: ClientUser = {
  username: "Jo",
  role: "Manager",
  email: "4325@oioi",
};

// Omit

type ClientUserWithOmit = Omit<User, "id" | "password">;
const clientUserWithOmit: ClientUserWithOmit = {
  username: "Jo",
  role: "Manager",
  email: "4325@oioi",
};

// Return Type
type Player = {
  name: string;
  team: string;
};

type AddGoals = (players: Player) => Player & { goals: number };
type PlayersWithGoals = ReturnType<AddGoals>;

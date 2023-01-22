// 1. Dado un número largo (ej: 123456). eleva cada dígito al cuadrado
// y concatena todos los números de nuevo como un nuevo número.

const concatPowers = (num: number): number => {
  const stringArr = num.toString().split("");

  const powArr = stringArr.map((item) => {
    return Math.pow(Number(item), 2);
  });

  return Number(powArr.join(""));
};

const concatResult = concatPowers(123456);
console.log("Resultado de concatPowers:", concatResult);

// 2. Dada la información de atletas que recibirás de una API, tendrás que devolver
// para cada uno de éstos, un objeto con el formato correcto para cada deporte:

// - Si es 'athletics', queremos que el campo score devuelva un objeto con el formato:
// scores: { qualifiers: XX, finals: XX}

// - Si es 'golf', queremos que el campo scores devuelva el total de puntos obtenidos:
// scores: XX

type Sport = "athletics" | "golf" | "boxing";

type ApiAthlete = {
  id: number;
  name: string;
  sports: Sport;
  scores: { type: string; value: number }[];
};

type ApiResponse = (ApiAthlete | null | undefined)[];

type ParsedScore = number | Record<string, number>;

type ParsedAthlete = Omit<ApiAthlete, "scores"> & {
  scores: ParsedScore | ApiAthlete["scores"];
};

const apiInput: ApiResponse = [
  {
    id: 1,
    name: "The Name 1",
    sports: "athletics",
    scores: [
      {
        type: "qualifiers",
        value: 10,
      },
      {
        type: "finals",
        value: 8.5,
      },
    ],
  },
  {
    id: 2,
    name: "The Name 2",
    sports: "golf",
    scores: [
      {
        type: "1",
        value: 3,
      },
      {
        type: "2",
        value: 1,
      },
      {
        type: "3",
        value: 4,
      },
      {
        type: "4",
        value: 1,
      },
    ],
  },
  null,
  undefined,
  {
    id: 3,
    name: "The Name 3",
    sports: "boxing",
    scores: [
      {
        type: "1",
        value: 3,
      },
      {
        type: "2",
        value: 1,
      },
      {
        type: "3",
        value: 4,
      },
      {
        type: "4",
        value: 1,
      },
    ],
  },
];

const parseAthletesScores = (input: ApiResponse): ParsedAthlete[] => {
  const filteredInput = input.filter((value) => !!value) as ApiAthlete[];

  const mappedAthleteScores = filteredInput.map((athlete) => {
    if (athlete.sports === "athletics") {
      const newScore: Record<string, number> = {};
      athlete.scores.forEach((score) => {
        newScore[score.type] = score.value;
      });
      return {
        ...athlete,
        scores: newScore,
      };
    }

    if (athlete.sports === "golf") {
      let newScore = 0;
      athlete.scores.forEach((score) => {
        newScore += score.value;
      });
      return {
        ...athlete,
        scores: newScore,
      };
    }
    return athlete;
  });
  return mappedAthleteScores;
};

const athletesScores = parseAthletesScores(apiInput);
console.log("Resultado de parseAthletesScores:", athletesScores);

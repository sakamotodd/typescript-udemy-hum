export {};

const profile = (name: string, age: number) => {
  console.log({ name, age });
};

profile("Dai", 23);

type ParameterType = Parameters<typeof profile>

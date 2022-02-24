export enum ResourceType {
  Fighting = "Fighting",
  Stealth = "Stealth",
  Mix = "Mix",
}

export enum ObstacleType {
  Person = "Person",
  Location = "Location",
  Object = "Object",
  Animal = "Animal",
  Door = "Door",
}

export interface Card {
  id: string;
  name: string;
  resource?: { value: number; type: ResourceType };
  keep?: boolean;
  effectDesc?: string;
  obsName?: string;
  obsCost?: { value: number; type: ResourceType };
  obsAlarm?: number;
  obsType?: ObstacleType;
  obsEffectDesc?: string;
}

export const CardLib: Readonly<Record<string, Card>> = {
  hide: {
    id: "hide",
    name: "Hide",
    resource: { value: 1, type: ResourceType.Stealth },
  },
  punch: {
    id: "punch",
    name: "Punch",
    resource: { value: 1, type: ResourceType.Fighting },
  },
  gun: {
    id: "gun",
    name: "Gun",
    resource: { value: 2, type: ResourceType.Fighting },
    obsName: "Guard",
    obsCost: { value: 2, type: ResourceType.Fighting },
    obsAlarm: 4,
    obsType: ObstacleType.Person,
  },
  dont_move: {
    id: "dont_move",
    name: "Don't Move",
    resource: { value: 3, type: ResourceType.Stealth },
    obsName: "Motion Sensor Hall",
    obsCost: { value: 6, type: ResourceType.Mix },
    obsAlarm: 6,
    obsType: ObstacleType.Location,
  },
  machine_gun: {
    id: "machine_gun",
    name: "Machine Gun",
    resource: { value: 3, type: ResourceType.Fighting },
    obsName: "Sentry Gun",
    obsCost: { value: 5, type: ResourceType.Fighting },
    obsAlarm: 6,
    obsType: ObstacleType.Object,
  },
  out_of_sight: {
    id: "out_of_sight",
    name: "Out of Sight",
    resource: { value: 2, type: ResourceType.Stealth },
    obsName: "Security Camera",
    obsCost: { value: 2, type: ResourceType.Stealth },
    obsAlarm: 8,
    obsType: ObstacleType.Object,
  },
};

const cl = CardLib; // shortcut

export const InitDeck: Readonly<string[]> = [
  cl.hide.id,
  cl.hide.id,
  cl.hide.id,
  cl.punch.id,
  cl.punch.id,
  cl.punch.id,
  cl.punch.id,
  cl.punch.id,
];

export const InitObstacleDeck: Readonly<string[]> = [
  cl.gun.id,
  cl.gun.id,
  cl.gun.id,
  cl.machine_gun.id,
  cl.out_of_sight.id,
  cl.out_of_sight.id,
  cl.out_of_sight.id,
  cl.out_of_sight.id,
  cl.out_of_sight.id,
  cl.gun.id,
  cl.gun.id,
  cl.gun.id,
  cl.machine_gun.id,
  cl.out_of_sight.id,
  cl.out_of_sight.id,
  cl.out_of_sight.id,
  cl.out_of_sight.id,
  cl.out_of_sight.id,
];

export function GetDetails(collection: string[] | undefined) {
  return collection?.map((id) => cl[id]);
}

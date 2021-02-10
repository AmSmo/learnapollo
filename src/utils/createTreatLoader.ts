import DataLoader from "dataloader";
import { Morsel } from "../entities/Morsel";

export const createTreatLoader = () =>
  new DataLoader<{ userId: number; doggoId: number }, Morsel | null>(
    async (keys) => {
      console.log(keys);
      const morsels = await Morsel.findByIds(keys as any);
      const treatIdsToTreats: Record<string, Morsel> = {};
      morsels.forEach((morsel) => {
        treatIdsToTreats[`${morsel.userId}|${morsel.doggoId}`] = morsel;
      });

      return keys.map(
        (key) => treatIdsToTreats[`${key.userId}|${key.doggoId}`]
      );
    }
  );

import type { NextApiRequest, NextApiResponse } from "next";
import { Ingredients } from "../../types/ingredients";
import IngredientsJson from "../../data/ingredients.json";

export interface Data {
    main_ingredients: Ingredients[];
    other_ingredients: Ingredients[];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(IngredientsJson);
}

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Data } from "../api/cookbook";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import IngredientsStyles from "./ingredients.module.css";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Ingredients: NextPage<{}> = () => {
    const [ingredients, setIngredients] = useState<Data>();
    const [selectedIngredient, setSelectedIngredient] = useState<string>("");

    useEffect(() => {
        fetch("/api/cookbook")
            .then((ingredients) => ingredients.json())
            .then((ingredients) => setIngredients(ingredients))
            .catch((error) => console.error("error ", error));
    }, []);

    return (
        <>
            <div>
                <h1>Select main ingredient:</h1>
                <FormControl required sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel>Ingredient</InputLabel>
                    <Select
                        defaultValue={"DEFAULT"}
                        label="Ingredient :"
                        className={IngredientsStyles.optionList}
                        onChange={(e) => setSelectedIngredient(e.target.value)}
                    >
                        <MenuItem value="DEFAULT" disabled hidden>
                            <em>Choose one from the list..</em>
                        </MenuItem>
                        {ingredients &&
                            ingredients.main_ingredients.map(
                                ({ name, color }, i: number) => (
                                    <MenuItem
                                        key={i}
                                        value={name}
                                        style={{ color }}
                                    >
                                        <Typography color={color}>
                                            {name}
                                        </Typography>
                                    </MenuItem>
                                )
                            )}
                    </Select>
                    {!selectedIngredient.length && (
                        <FormHelperText>Required</FormHelperText>
                    )}
                </FormControl>
            </div>

            {selectedIngredient.length > 0 && (
                <div className={IngredientsStyles.listContainer}>
                    <h2>
                        Based on your selected main ingredient,
                        <br /> these are the remaining ingredients:
                    </h2>

                    <ul>
                        {ingredients &&
                            ingredients.other_ingredients.map(
                                ({ name, color }, i: number) =>
                                    name !== selectedIngredient && (
                                        <Box
                                            className={
                                                IngredientsStyles.listBox
                                            }
                                            key={i}
                                        >
                                            <Zoom
                                                in={
                                                    selectedIngredient.length >
                                                    0
                                                }
                                                className={
                                                    IngredientsStyles.listZoom
                                                }
                                                timeout={i * 350}
                                            >
                                                <li style={{ color }}>
                                                    <Avatar
                                                        alt={name}
                                                        sx={{
                                                            background: `url("/images/${name}.png")`,
                                                            backgroundSize:
                                                                "40px 40px",
                                                        }}
                                                        id={
                                                            IngredientsStyles.cardAvatar
                                                        }
                                                    />
                                                    <Typography>
                                                        {name}{" "}
                                                    </Typography>
                                                </li>
                                            </Zoom>
                                        </Box>
                                    )
                            )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Ingredients;

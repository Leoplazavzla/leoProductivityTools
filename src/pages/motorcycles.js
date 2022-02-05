import React from "react"
import {Box, Button, Grid} from "@mui/material";
import MotorcycleBox from "../components/MotorcycleBox";

const times = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30"]

const Motorcycles = () => {
    return (
        <Grid container>
            {times.map((t, i) => {
                return (
                    <Grid item xs={12}>
                        <MotorcycleBox
                            key={t.toString()}
                            time={t}
                        />
                    </Grid>

                )
                }
            )}

        </Grid>
    )
}

export default Motorcycles
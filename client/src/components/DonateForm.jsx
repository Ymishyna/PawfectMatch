import { Card, CardContent, Typography, Grid, InputAdornment, OutlinedInput, Button } from "@mui/material";
import { useState } from "react";

export default function DonationForm() {
    const [amount, setAmount] = useState(10);

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <Card>
            <CardContent>
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item xs={12}>
                        <Typography>
                            How much would you like to Donate?
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <OutlinedInput
                                    type="text"
                                    value={amount}
                                    onChange={handleChange}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" type="submit">
                                    Donate
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>)
}
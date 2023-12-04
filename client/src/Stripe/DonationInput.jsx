import { CardContent, Grid, Typography, OutlinedInput, InputAdornment, Button, CircularProgress } from "@mui/material";

const DonationInput = ({ amount, handleChange, handleSubmit, isLoading, error }) => (
    <CardContent>
        <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={12}>
                <Typography>
                    Buy me a Coffee?
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
                        <Button fullWidth variant="contained" type="submit" onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? <CircularProgress /> : 'Donate'}
                        </Button>
                        {error && <Typography variant="alert">Something went wrong</Typography>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </CardContent>);
export default DonationInput;
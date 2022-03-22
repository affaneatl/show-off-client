import * as React from 'react';
import { Box, Card, Grid, Container } from '@mui/material';
import Typography from '../../components/Typography';


export default function ProductSection() {
    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" marked="center" align="center" component="h2" sx={{ mb: 4 }}>
                Product Section
            </Typography>
            <Box>
                <Grid container spacing={2}
                    alignItems="center">
                    <Grid item md={3} xs={12}>
                        <Card variant="outlined">
                            Edutube
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card variant="outlined">
                            LMS
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card variant="outlined">
                            LMS
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card variant="outlined">
                            LMS
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card variant="outlined">
                            LMS
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

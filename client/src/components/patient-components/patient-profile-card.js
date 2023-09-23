import React from 'react';
import { Card, CardMedia,CardContent, CardActions,Stack, Typography,Button  } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ProfileCard({ img1,pName,age,url1,url2 }) {
    return (
        <Card sx={{ height: '100%' }} >
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={img1}

            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                    {pName}
                </Typography>
                <Typography>
                    {age}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Stack spacing={3}>
                    <Button type='submit' variant="contained" size="small" ><Link style={{ color: 'white' }} href={url1}>View Doctor's Profile</Link></Button>
                    <Button type='submit' color="primary" variant="contained" size="small"><Link href='/inquiries'>Contact</Link></Button>
                </Stack>
            </CardActions> */}
        </Card>
    );
}

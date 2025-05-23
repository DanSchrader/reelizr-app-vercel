import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { TServiceCardProps } from '../types/index';

export default function ServiceCard({ name, description, imgSrc, imgAlt, imgHeight }: TServiceCardProps) {

    return (
      <Card sx={{ border: '1px solid #9943a6', p: 1 }}>
        <CardActionArea sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'stretch'
          }}>
          <CardMedia
            component="img"
            height={imgHeight}
            image={imgSrc}
            alt={imgAlt}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom component="h2" variant="h3">
              {name}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
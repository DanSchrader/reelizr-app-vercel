import Grid from '@mui/material/Grid2';
import ServiceCard from '@/components/ServiceCard';
import { TCardSectionProps } from '../types/index';

export default function CardSection({ services }: TCardSectionProps) {
    return (
        <Grid container component="section" mt={4} spacing={3}>
            {services.map((service) => (
                <Grid key={service.id} size={{xs: 12, sm: 6}} display='flex' justifyContent='center'>
                    <ServiceCard 
                        id={service.id}
                        name={service.name}
                        description={service.description}
                        imgSrc={service.imgSrc}
                        imgAlt={service.imgAlt}
                        imgHeight={service.imgHeight}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
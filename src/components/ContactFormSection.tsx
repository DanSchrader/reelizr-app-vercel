'use client';

import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import CustomTabPanel from './CustomTabPanel';

function a11yProps(index: number) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

export default function ContactFormSection() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container component="main" maxWidth='md' sx={{ py: 2 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} sx={{ borderBottom: 1, borderColor: 'divider', justifyItems: 'center' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="department tabs">
                        <Tab label="Sales" {...a11yProps(0)} />
                        <Tab label="Support" {...a11yProps(1)} />
                        <Tab label="Recruiting" {...a11yProps(2)} />
                    </Tabs>
                </Grid>
            
                <CustomTabPanel value={value} index={0} />
                <CustomTabPanel value={value} index={1} />
                <CustomTabPanel value={value} index={2} />    
                
            </Grid>
        </Container>
    );
}
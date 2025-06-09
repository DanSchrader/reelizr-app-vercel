'use client';

import { useActionState } from 'react';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import contactSalutations from '@/utils/contactSalutations';
import { TTabPanelProps } from '../types/index';
import { SalesContactAction } from '@/app/actions';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { submissionSchema } from '@/app/zodSchema';
import { SubmitButton } from './SubmitButton';
import { getTopicsByDepartment, getDepartmentByIndex } from '@/utils/contactTopics';


export default function CustomTabPanel(props: TTabPanelProps) {
    const { children, value, index, ...other } = props;

    const currentDepartment = getDepartmentByIndex(index);
    const filteredTopics = getTopicsByDepartment(currentDepartment);

    const [salesResult, salesAction] = useActionState(SalesContactAction, undefined);
    const [salesForm, salesFields] = useForm({
        lastResult: salesResult,

        onValidate({formData}) {
            return parseWithZod(formData, {schema: submissionSchema});
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
        })
  
    return (
      <Grid
        component='form'
        action={salesAction}
        id={salesForm.id}
        onSubmit={salesForm.onSubmit}
        noValidate
        role="tabpanel"
        hidden={value !== index}
        aria-labelledby={`tab-${index}`}
        {...other}>
        {value === index && 
        
            <Grid container size={12} spacing={2} mt={1}>
                <Grid size={{xs: 12, sm: 6}}>
                <Input type="hidden" name="_katja" sx={{display: 'none'}} /> 
                    <TextField
                        fullWidth
                        name={salesFields.organisation.name}
                        defaultValue={salesFields.organisation.initialValue}
                        key={salesFields.organisation.key}
                        label="Firma / Organisation"
                        variant="outlined"
                        margin="none"
                        size="small"
                        sx={{
                            "& .MuiFormLabel-root": {
                                 color: "#fefbe4"
                            }
                        }}/>
                    </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        fullWidth
                        name={salesFields.salutation.name}
                        defaultValue={salesFields.salutation.initialValue || ""}
                        key={salesFields.salutation.key}
                        helperText={salesFields.salutation.errors}
                        label="Anrede"
                        select
                        variant="outlined"
                        margin="none"
                        size="small"
                        sx={{
                            "& .MuiSvgIcon-root": {
                                color: "#fefbe4"
                            },
                             "& .MuiFormLabel-root": {
                                 color: "#fefbe4"
                             }
                        }}>
                        {contactSalutations.map((option) => (
                            <MenuItem key={option.id} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        fullWidth
                        name={salesFields.firstName.name}
                        defaultValue={salesFields.firstName.initialValue}
                        key={salesFields.firstName.key}
                        label="Vorname"
                        helperText={salesFields.firstName.errors}
                        variant="outlined"
                        margin="none"
                        required
                        size="small"
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: "#fefbe4"
                            }
                        }}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        fullWidth
                        name={salesFields.lastName.name}
                        defaultValue={salesFields.lastName.initialValue}
                        key={salesFields.lastName.key}
                        label="Nachname"
                        helperText={salesFields.lastName.errors}
                        variant="outlined"
                        margin="none"
                        required
                        size="small"
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: "#fefbe4"
                            }
                        }}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        fullWidth
                        name={salesFields.email.name}
                        defaultValue={salesFields.email.initialValue}
                        key={salesFields.email.key}
                        label="Email"
                        helperText={salesFields.email.errors}
                        variant="outlined"
                        margin="none"
                        required
                        size="small"
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: "#fefbe4"
                            }
                        }}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        fullWidth
                        name={salesFields.topic.name}
                        defaultValue={salesFields.topic.initialValue || ""}
                        key={salesFields.topic.key}
                        helperText={salesFields.topic.errors}
                        label="Bitte wählen Sie ein Thema"
                        select
                        required
                        variant="outlined"
                        margin="none"
                        size="small"
                        sx={{
                            "& .MuiSvgIcon-root": {
                                color: "#fefbe4"
                            },
                            "& .MuiFormLabel-root": {
                                color: "#fefbe4"
                            }
                        }}
                    >
                    {filteredTopics.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                            {option.name}
                        </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid size={12}>
                    <TextField
                        fullWidth
                        name={salesFields.message.name}
                        defaultValue={salesFields.message.initialValue}
                        key={salesFields.message.key}
                        label="Nachricht"
                        helperText={salesFields.message.errors}
                        variant="outlined"
                        margin="none"
                        multiline
                        rows={4}
                        required
                        size="small"
                        sx={{
                            "& .MuiFormLabel-root": {
                                color: "#fefbe4"
                            }
                        }}
                    />
                </Grid>
                <Grid>
                    <SubmitButton />
                </Grid>
            </Grid>}
      </Grid>
    );
  }
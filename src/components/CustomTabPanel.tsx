'use client';

import { useActionState } from 'react';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import contactSalutations from '@/utils/contactSalutations';
import { TTabPanelProps } from '../types/index';
import { SalesContactAction, SupportTicketAction, KarriereContactAction } from '@/app/actions';
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
    const [supportResult, supportAction] = useActionState(SupportTicketAction, undefined);
    const [karriereResult, karriereAction] = useActionState(KarriereContactAction, undefined);

    const [salesForm, salesFields] = useForm({
        lastResult: salesResult,
        onValidate({formData}) {
            return parseWithZod(formData, {schema: submissionSchema});
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    })

    const [supportForm, supportFields] = useForm({
        lastResult: supportResult,
        onValidate({formData}) {
            return parseWithZod(formData, {schema: submissionSchema});
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    })

    const [karriereForm, karriereFields] = useForm({
        lastResult: karriereResult,
        onValidate({formData}) {
            return parseWithZod(formData, {schema: submissionSchema});
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    })

    const getCurrentFormConfig = () => {
        switch(index) {
            case 0:
                return {
                    action: salesAction,
                    form: salesForm,
                    fields: salesFields
                };
            case 1:
                return {
                    action: supportAction,
                    form: supportForm,
                    fields: supportFields
                };
            case 2:
                return {
                    action: karriereAction,
                    form: karriereForm,
                    fields: karriereFields
                };
            default:
                return {
                    action: salesAction,
                    form: salesForm,
                    fields: salesFields
                };
        }
    };

    const { action, form, fields } = getCurrentFormConfig();
  
    return (
      <Grid
        component='form'
        action={action}
        id={form.id}
        onSubmit={form.onSubmit}
        noValidate
        role="tabpanel"
        hidden={value !== index}
        aria-labelledby={`tab-${index}`}
        {...other}>
        {value === index && 
        
            <Grid container size={12} spacing={2} mt={1}>

                <Input type="hidden" name="_katja" sx={{display: 'none'}} /> 

                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        fullWidth
                        name={fields.organisation.name}
                        defaultValue={fields.organisation.initialValue}
                        key={fields.organisation.key}
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
                        name={fields.salutation.name}
                        defaultValue={fields.salutation.initialValue || ""}
                        key={fields.salutation.key}
                        helperText={fields.salutation.errors}
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
                        name={fields.firstName.name}
                        defaultValue={fields.firstName.initialValue}
                        key={fields.firstName.key}
                        label="Vorname"
                        helperText={fields.firstName.errors}
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
                        name={fields.lastName.name}
                        defaultValue={fields.lastName.initialValue}
                        key={fields.lastName.key}
                        label="Nachname"
                        helperText={fields.lastName.errors}
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
                        name={fields.email.name}
                        defaultValue={fields.email.initialValue}
                        key={fields.email.key}
                        label="Email"
                        helperText={fields.email.errors}
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
                        name={fields.topic.name}
                        defaultValue={fields.topic.initialValue || ""}
                        key={fields.topic.key}
                        helperText={fields.topic.errors}
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
                        name={fields.message.name}
                        defaultValue={fields.message.initialValue}
                        key={fields.message.key}
                        label="Nachricht"
                        helperText={fields.message.errors}
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
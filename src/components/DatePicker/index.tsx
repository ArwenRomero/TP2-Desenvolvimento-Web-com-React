import React, { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ptBR } from 'date-fns/locale';
import "../../styles/components/datetimepicker.scss";

export default function RegisterEvent() {
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

    const handleDateChange = (newDateTime) => {
        setSelectedDateTime(newDateTime);
    };

    const handleRegister = () => {
        if (selectedDateTime) {
            const formattedDate = selectedDateTime.toLocaleString();
            setSnackbarMessage(`Evento registrado para: ${formattedDate}`);
            setSnackbarSeverity("success");
            setOpenSnackbar(true);
        } else {
            setSnackbarMessage('Por favor, selecione uma data e hora.');
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <div className="date-picker-container">
                <h2>Registrar Evento</h2>
                <DateTimePicker
                    label="Selecione a data e hora"
                    value={selectedDateTime}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleRegister}
                    style={{ marginTop: '20px' }}
                >
                    Registrar Evento
                </Button>
            </div>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </LocalizationProvider>
    );
}

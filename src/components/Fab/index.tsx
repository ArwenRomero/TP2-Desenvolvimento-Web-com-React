import React, { useState } from 'react';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Snackbar } from '@mui/material'; 
import { Alert } from '@mui/material';
import '../../styles/components/fab.scss'; 

export default function FloatingActionButton() {
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false); 
    const [snackbarMessage, setSnackbarMessage] = useState<string>(""); 
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success"); 

    const handleClick = (action: string) => {
        setSnackbarMessage(`Criando novo registro de: ${action}`);
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
    };

    return (
        <div className="fab-container">
            <Fab
                color="primary"
                aria-label="add"
                className="fab"
                onClick={() => handleClick('Fralda')}
            >
                <Add />
            </Fab>

            <Snackbar
                open={openSnackbar} 
                autoHideDuration={6000} 
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

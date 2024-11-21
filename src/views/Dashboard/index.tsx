import React, { useContext, useState } from "react";
import { AlertContext } from "../../context/Alert";
import Card from "../../components/Card";
import Checkbox from "../../components/CheckBox";
import DateTimePickerComponent from "../../components/DatePicker";
import { Snackbar, Switch, FormControlLabel, Tabs, Tab, Box, TextField, Typography } from "@mui/material";
import { Alert } from "@mui/material"; 
import "../../styles/views/dashboard.scss";
import "../../styles/views/container.scss";

export default function Dashboard() {
    const { showAlert } = useContext(AlertContext);
    const [isBabySleeping, setIsBabySleeping] = useState<boolean>(false);
    const [isFeedingComplete, setIsFeedingComplete] = useState<boolean>(false);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
    const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [annotations, setAnnotations] = useState({
        fraldas: "",
        sono: "",
        alimentacao: "",
    });

    const handleBabySleepChange = (value: boolean) => {
        setIsBabySleeping(value);
        if (notificationsEnabled) {
            console.log("Bebê dormiu direto:", value);
            showSnackbar("Bebê dormiu direto", "success");
        }
    };

    const handleFeedingCompleteChange = (value: boolean) => {
        setIsFeedingComplete(value);
        if (notificationsEnabled) {
            console.log("Alimentação completa:", value);
            showSnackbar("Alimentação completa", "success");
        }
    };

    const handleNotificationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNotificationsEnabled(event.target.checked);
        const message = event.target.checked
            ? "Notificações de lembrete ativadas."
            : "Notificações de lembrete desativadas.";
        
        showSnackbar(message, "success");
    };

    const handleAnnotationChange = (category: string, value: string) => {
        setAnnotations({
            ...annotations,
            [category]: value,
        });
    };

    const records = {
        fraldas: [
            { 
                title: "Troca de Fralda", 
                value: "Fralda X", 
                description: "Troca realizada às 10:00", 
                onEdit: () => notificationsEnabled && showSnackbar("Editando a troca de fralda", "success"), 
                onDelete: () => notificationsEnabled && showSnackbar("Fralda deletada com sucesso", "error")
            }
        ],
        sono: [
            { 
                title: "Hora de Sono", 
                value: "8 horas", 
                description: "Dormiu das 22h às 06h", 
                onEdit: () => notificationsEnabled && showSnackbar("Editando hora de sono", "success"), 
                onDelete: () => notificationsEnabled && showSnackbar("Hora de sono deletada com sucesso", "error")
            }
        ],
        alimentacao: [
            { 
                title: "Mamadas", 
                value: "4", 
                description: "Mamou às 06h, 10h, 14h e 18h", 
                onEdit: () => notificationsEnabled && showSnackbar("Editando a mamada", "success"), 
                onDelete: () => notificationsEnabled && showSnackbar("Mamada deletada com sucesso", "error")
            }
        ]
    };

    const showSnackbar = (message: string, severity: "success" | "error") => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <div className="Dashboard">
            <div className="container">
                <Typography variant="h4" component="h1" gutterBottom>
                    Bem-vindo ao Dashboard
                </Typography>

                <div className="notification-switch-container">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={notificationsEnabled}
                                onChange={handleNotificationsChange}
                                color="primary"
                            />
                        }
                        label="Habilitar Lembretes"
                    />
                </div>

                <div className="checkbox-container">
                    <Checkbox 
                        question="Bebê dormiu direto?" 
                        onChange={handleBabySleepChange} 
                    />
                    <Checkbox 
                        question="Alimentação foi completa?" 
                        onChange={handleFeedingCompleteChange} 
                    />
                </div>

                <Box sx={{ width: "100%" }}>
                    <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Categoria de registros">
                        <Tab label="Trocas de Fraldas" />
                        <Tab label="Sono" />
                        <Tab label="Alimentação" />
                    </Tabs>
                    {tabIndex === 0 && (
                        <div className="card-container">
                            {records.fraldas.map((record, index) => (
                                <div key={index}>

                                    <Card
                                        title={record.title}
                                        value={record.value}
                                        description={record.description}
                                        onEdit={record.onEdit}
                                        onDelete={record.onDelete}
                                    />
                                    <TextField
                                        label="Anotações"
                                        variant="outlined"
                                        fullWidth
                                        value={annotations.fraldas}
                                        onChange={(e) => handleAnnotationChange("fraldas", e.target.value)}
                                        margin="normal"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {tabIndex === 1 && (
                        <div className="card-container">
                            {records.sono.map((record, index) => (
                                <div key={index}>
                                    <Card
                                        title={record.title}
                                        value={record.value}
                                        description={record.description}
                                        onEdit={record.onEdit}
                                        onDelete={record.onDelete}
                                    />
                                    <TextField
                                        label="Anotações"
                                        variant="outlined"
                                        fullWidth
                                        value={annotations.sono}
                                        onChange={(e) => handleAnnotationChange("sono", e.target.value)}
                                        margin="normal"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {tabIndex === 2 && (
                        <div className="card-container">
                            {records.alimentacao.map((record, index) => (
                                <div key={index}>
                                    <Card
                                        title={record.title}
                                        value={record.value}
                                        description={record.description}
                                        onEdit={record.onEdit}
                                        onDelete={record.onDelete}
                                    />
                                    <TextField
                                        label="Anotações"
                                        variant="outlined"
                                        fullWidth
                                        value={annotations.alimentacao}
                                        onChange={(e) => handleAnnotationChange("alimentacao", e.target.value)}
                                        margin="normal"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </Box>
                <DateTimePickerComponent />
                <div className="alert-buttons">
                    <button onClick={() => notificationsEnabled && showSnackbar("Sucesso: Registro salvo com sucesso", "success")}>
                        <Typography variant="button" display="block">Testar Sucesso</Typography>
                    </button>
                    <button onClick={() => notificationsEnabled && showSnackbar("Erro: Dados não encontrados", "error")}>
                        <Typography variant="button" display="block">Testar Erro</Typography>
                    </button>
                </div>
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
        </div>
    );
}

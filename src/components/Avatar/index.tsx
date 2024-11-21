import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";
import "../../styles/components/avatar.scss";

export default function Avatar() {
    const [image, setImage] = useState<string | null>(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

    useEffect(() => {
        const savedImage = localStorage.getItem("baby-avatar");
        if (savedImage) {
            setImage(savedImage);
        }
    }, []);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const result = e.target?.result as string;
                setImage(result); 
                localStorage.setItem("baby-avatar", result);

                setSnackbarMessage("Foto atualizada com sucesso!");
                setSnackbarSeverity("success");
                setOpenSnackbar(true);
            };

            reader.readAsDataURL(file);
        } else {
            
            setSnackbarMessage("Erro ao carregar a foto.");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="avatar-container">
            <div className="avatar">
                {image ? (
                    <img src={image} alt="Foto do bebê" />
                ) : (
                    <div className="avatar-placeholder">Foto do bebê</div>
                )}
            </div>
            <label className="upload-button">
                Alterar Foto
                <input type="file" accept="image/*" onChange={handleImageUpload} />
            </label>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

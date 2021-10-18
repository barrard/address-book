import React from "react";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Message({ severity, show, setShow, message }) {
	const handleClose = () => {
		setShow(false);
	};
	return (
		<Snackbar
			open={show}
			autoHideDuration={5000}
			onClose={handleClose}
			// action={action}
		>
			<Alert
				onClose={handleClose}
				severity={severity}
				sx={{ width: "100%" }}
			>
				{message}
			</Alert>
		</Snackbar>
	);
}

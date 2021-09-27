import React, { useState } from "react";
import axiosInstance from 'axios';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/imgs/aloe-img/apple-touch-icon.png';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));


export default function SignIn() {


  // initializing the histori to redirect user
	const history = useHistory();
	// initializing input data 
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});
    // initializing hook
	const [formData, updateFormData] = useState(initialFormData);
    
	const handleChange = (e: any) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData);
		
        // axios est un outil qui va permettre de verifier les inforamtins de lutilisateur dans le backend
		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push('/home');
				//console.log(res);
				//console.log(res.data);
			});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
        <a className="navbar-brand" href="/">
           <img src={logo} alt="logo" height="80"/>
        </a>
				<Typography component="h1" variant="h5">
					Connecter a Aloe
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
            onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
            onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
            onClick={handleSubmit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}